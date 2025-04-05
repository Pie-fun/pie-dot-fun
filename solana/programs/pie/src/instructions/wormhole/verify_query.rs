use crate::{
    error::PieError,
    GuardianSignatures, TokenBalance, WormholeGuardianSet,
};
use anchor_lang::{
    prelude::*,
    solana_program::{
        self, keccak, program_memory::sol_memcpy, secp256k1_recover::secp256k1_recover,
    },
};
use wormhole_query_sdk::{
    structs::{ChainSpecificQuery, ChainSpecificResponse, QueryResponse},
    MESSAGE_PREFIX, QUERY_MESSAGE_LEN,
};
use wormhole_raw_vaas::{utils::quorum, GuardianSetSig};
// use wormhole_solana_consts::CORE_BRIDGE_PROGRAM_ID;
use crate::CORE_BRIDGE_PROGRAM_ID;

// NOTE: ERC-20 balanceOf function signature (0x70a08231)
const BALANCE_OF_SIG: [u8; 4] = [0x70, 0xa0, 0x82, 0x31];

#[derive(Accounts)]
#[instruction(_bytes: Vec<u8>, guardian_set_index: u32)]
pub struct VerifyQuery<'info> {
    /// Guardian set used for signature verification.
    #[account(
        seeds = [
            WormholeGuardianSet::SEED_PREFIX,
            guardian_set_index.to_be_bytes().as_ref()
        ],
        bump,
        seeds::program = CORE_BRIDGE_PROGRAM_ID
    )]
    guardian_set: Account<'info, WormholeGuardianSet>,

    /// Stores unverified guardian signatures as they are too large to fit in the instruction data.
    #[account(mut, has_one = refund_recipient, close = refund_recipient)]
    guardian_signatures: Account<'info, GuardianSignatures>,

    /// CHECK: This account is the refund recipient for the above signature_set
    #[account(address = guardian_signatures.refund_recipient)]
    refund_recipient: AccountInfo<'info>,
}

impl<'info> VerifyQuery<'info> {
    pub fn constraints(ctx: &Context<Self>, bytes: &Vec<u8>) -> Result<()> {
        let guardian_set = &ctx.accounts.guardian_set;

        // Check that the guardian set is still active.
        let timestamp = Clock::get()?
            .unix_timestamp
            .try_into()
            .expect("timestamp overflow");
        require!(
            guardian_set.is_active(&timestamp),
            PieError::GuardianSetExpired
        );

        // Compute the message hash.
        let message_hash = [
            MESSAGE_PREFIX,
            &solana_program::keccak::hashv(&[&bytes]).to_bytes(),
        ]
            .concat();

        // SECURITY: defense-in-depth, check again that these are the expected length
        require_eq!(
            message_hash.len(),
            QUERY_MESSAGE_LEN,
            PieError::InvalidMessageHash
        );

        let guardian_signatures = &ctx.accounts.guardian_signatures.guardian_signatures;

        // Do we have enough signatures for quorum?
        let guardian_keys = &guardian_set.keys;
        let quorum = quorum(guardian_keys.len());
        require!(
            guardian_signatures.len() >= quorum,
            PieError::NoQuorum
        );

        let digest = keccak::hash(message_hash.as_slice());

        // Verify signatures
        let mut last_guardian_index = None;
        for sig_bytes in guardian_signatures {
            let sig = GuardianSetSig::try_from(sig_bytes.as_slice())
                .map_err(|_| PieError::InvalidSignature)?;
            // We do not allow for non-increasing guardian signature indices.
            let index = usize::from(sig.guardian_index());
            if let Some(last_index) = last_guardian_index {
                require!(
                    index > last_index,
                    PieError::InvalidGuardianIndexNonIncreasing
                );
            }

            // Does this guardian index exist in this guardian set?
            let guardian_pubkey = guardian_keys.get(index).ok_or_else(|| {
                error!(PieError::InvalidGuardianIndexOutOfRange)
            })?;

            // Now verify that the signature agrees with the expected Guardian's pubkey.
            verify_guardian_signature(&sig, guardian_pubkey, digest.as_ref())?;

            last_guardian_index = Some(index);
        }

        // Done.
        Ok(())
    }
}

#[access_control(VerifyQuery::constraints(&ctx, &bytes))]
pub fn verify_query(
    ctx: Context<VerifyQuery>,
    bytes: Vec<u8>,
    _guardian_set_index: u32,
) -> Result<TokenBalance> {
    let response = QueryResponse::deserialize(&bytes)
        .map_err(|_| PieError::FailedToParseResponse)?;

    msg!(
        "response: version: {}, req_chain: {}, req_id: {:?}, req_version: {}, req_nonce: {}, reqs_len: {}, resp_len: {}",
        response.version,
        response.request_chain_id,
        response.request_id,
        response.request.version,
        response.request.nonce,
        response.request.requests.len(),
        response.responses.len()
    );

    // Initialize token balance
    let mut token_balance = TokenBalance::new();
    let mut valid_calldata_found = false;

    // Check EthCallData in the request
    for req_idx in 0..response.request.requests.len() {
        let request = &response.request.requests[req_idx];
        match &request.query {
            ChainSpecificQuery::EthCallQueryRequest(eth_request) => {
                msg!("Checking EthCallQueryRequest");

                for call_idx in 0..eth_request.call_data.len() {
                    let call = &eth_request.call_data[call_idx];
                    let to_addr = call.to;
                    let data = &call.data;

                    // Check if data is of sufficient length (minimum 4 bytes function signature + 32 bytes parameter)
                    if data.len() >= 36 {
                        // Verify balanceOf function signature (0x70a08231)
                        if data[0] == BALANCE_OF_SIG[0] &&
                            data[1] == BALANCE_OF_SIG[1] &&
                            data[2] == BALANCE_OF_SIG[2] &&
                            data[3] == BALANCE_OF_SIG[3] {

                            token_balance.token_address = to_addr;
                            valid_calldata_found = true;

                            msg!("Token address: {}", token_balance.token_address_to_string());
                        }
                    }
                }
            },
            _ => {
                msg!("Not an EthCallQueryRequest");
            }
        }
    }

    // Return error if no valid balanceOf call is found
    if !valid_calldata_found {
        msg!("No valid balanceOf calldata found");
        return Err(PieError::FailedToParseResponse.into());
    }

    // Find token balance in the response
    let mut balance_found = false;

    for idx in 0..response.responses.len() {
        let response = &response.responses[idx];
        match &response.response {
            ChainSpecificResponse::EthCallQueryResponse(eth_response) => {
                msg!(
                    "EthCallQueryResponse: {}, {}, {:?}. {}, {}",
                    response.chain_id,
                    eth_response.block_number,
                    eth_response.block_hash,
                    eth_response.block_time,
                    eth_response.results.len()
                );

                for result_idx in 0..eth_response.results.len() {
                    let result = &eth_response.results[result_idx];

                    // Process balanceOf result
                    if !result.is_empty() && result.len() == 32 {
                        token_balance = TokenBalance::from_bytes(result, token_balance.token_address);
                        balance_found = true;

                        msg!("TokenBalance: {}", token_balance.to_string());
                        msg!("TokenAddress: {}", token_balance.token_address_to_string());

                    }
                }
            }
            _ => {
                msg!("Not an EthCallQueryResponse");
            }
        }
    }

    if !balance_found {
        msg!("No balance result found");
        return Err(PieError::FailedToParseResponse.into());
    }

    Ok(token_balance)
}

fn verify_guardian_signature(
    sig: &GuardianSetSig,
    guardian_pubkey: &[u8; 20],
    digest: &[u8],
) -> Result<()> {
    // Recover using `solana_program::secp256k1_recover`.
    let recovered = {
        // Recover EC public key (64 bytes).
        let pubkey = secp256k1_recover(digest, sig.recovery_id(), &sig.rs())
            .map_err(|_| PieError::InvalidSignature)?;

        // The Ethereum public key is the last 20 bytes of keccak hashed public key above.
        let hashed = keccak::hash(&pubkey.to_bytes());

        let mut eth_pubkey = [0; 20];
        sol_memcpy(&mut eth_pubkey, &hashed.0[12..], 20);

        eth_pubkey
    };

    // The recovered public key should agree with the Guardian's public key at this index.
    require!(
        recovered == *guardian_pubkey,
        PieError::InvalidGuardianKeyRecovery
    );

    // Done.
    Ok(())
}
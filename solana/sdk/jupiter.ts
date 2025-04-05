import {
  AddressLookupTableAccount,
  Connection,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import axios from "axios";

export const getJupiterSwapInstructions = async (
  connection: Connection,
  userPublicKey: PublicKey,
  swapMode: "ExactIn" | "ExactOut",
  inputMint: PublicKey,
  outputMint: PublicKey,
  amount: number,
  maxAccounts?: number
) => {
  try {
    const response = await axios.get(
      `https://api.jup.ag/swap/v1/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&swapMode=${swapMode}${
        maxAccounts ? `&maxAccounts=${maxAccounts}` : ""
      }`
    );

    const { data: instructions } = await axios.post(
      "https://api.jup.ag/swap/v1/swap-instructions",
      JSON.stringify({
        quoteResponse: response.data,
        userPublicKey: userPublicKey.toString(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const {
      tokenLedgerInstruction, // If you are using `useTokenLedger = true`.
      computeBudgetInstructions, // The necessary instructions to setup the compute budget.
      setupInstructions, // Setup missing ATA for the users.
      swapInstruction, // The actual swap instruction.
      cleanupInstruction, // Unwrap the SOL if `wrapAndUnwrapSol = true`.
      addressLookupTableAddresses, // The lookup table addresses that you can use if you are using versioned transaction.
    } = instructions;

    const swapInstructionIxs = [];
    swapInstructionIxs.push(...setupInstructions.map(deserializeInstruction));
    swapInstructionIxs.push(deserializeInstruction(swapInstruction));
    swapInstructionIxs.push(deserializeInstruction(cleanupInstruction));

    const addressLookupTableAccounts: AddressLookupTableAccount[] = [];
    addressLookupTableAccounts.push(
      ...(await getAddressLookupTableAccounts(
        connection,
        addressLookupTableAddresses
      ))
    );
    return {
      swapInstructionIxs,
      addressLookupTableAccounts,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deserializeInstruction = (instruction: any) => {
  return new TransactionInstruction({
    programId: new PublicKey(instruction.programId),
    keys: instruction.accounts.map((key: any) => ({
      pubkey: new PublicKey(key.pubkey),
      isSigner: key.isSigner,
      isWritable: key.isWritable,
    })),
    data: Buffer.from(instruction.data, "base64"),
  });
};

export const getAddressLookupTableAccounts = async (
  connection: Connection,
  keys: string[]
): Promise<AddressLookupTableAccount[]> => {
  const addressLookupTableAccountInfos =
    await connection.getMultipleAccountsInfo(
      keys.map((key) => new PublicKey(key))
    );

  return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
    const addressLookupTableAddress = keys[index];
    if (accountInfo) {
      const addressLookupTableAccount = new AddressLookupTableAccount({
        key: new PublicKey(addressLookupTableAddress),
        state: AddressLookupTableAccount.deserialize(accountInfo.data),
      });
      acc.push(addressLookupTableAccount);
    }

    return acc;
  }, new Array<AddressLookupTableAccount>());
};

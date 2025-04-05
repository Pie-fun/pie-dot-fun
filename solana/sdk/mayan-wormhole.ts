import {
  fetchQuote,
  createSwapFromSolanaInstructions,
  ChainName,
  SwapMessageV0Params,
} from "@mayanfinance/swap-sdk";
import {
  AddressLookupTableAccount,
  clusterApiUrl,
  Keypair,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { Connection } from "@solana/web3.js";

// type MayanSwapResult = {
//   instructions: Array<TransactionInstruction>;
//   signers: Array<Keypair>;
//   lookupTables: Array<AddressLookupTableAccount>;
//   swapMessageV0Params: SwapMessageV0Params | null;
// };

// @TODO: add wrap SOL instruction if needed
export const getMayanSwapTx = async ({
  connection,
  amount,
  fromToken,
  toToken,
  fromChain = "solana",
  toChain = "base",
  fromAddress,
  toAddress,
  slippageBps = 300, // means 3%
}: {
  connection: Connection;
  amount: number;
  fromToken: string;
  toToken: string;
  fromChain?: ChainName;
  toChain?: ChainName;
  fromAddress: string;
  toAddress: string;
  slippageBps?: number;
}): Promise<any> => {
  try {
    const quotes = await fetchQuote({
      amount,
      fromToken,
      toToken,
      fromChain,
      toChain,
      slippageBps, // means 3%
      // gasDrop: 0.04, // optional
      // referrer: "YOUR SOLANA WALLET ADDRESS", // optional
      // referrerBps: 5, // optional
    });
    console.log(JSON.stringify(quotes, null, 2));

    const swapTx = await createSwapFromSolanaInstructions(
      quotes[0],
      fromAddress,
      toAddress,
      undefined,
      connection as any
    );

    return swapTx;
  } catch (error) {
    console.error(error);
  }
};

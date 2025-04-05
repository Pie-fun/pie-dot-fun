"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMayanSwapTx = void 0;
const swap_sdk_1 = require("@mayanfinance/swap-sdk");
// type MayanSwapResult = {
//   instructions: Array<TransactionInstruction>;
//   signers: Array<Keypair>;
//   lookupTables: Array<AddressLookupTableAccount>;
//   swapMessageV0Params: SwapMessageV0Params | null;
// };
// @TODO: add wrap SOL instruction if needed
const getMayanSwapTx = async ({ connection, amount, fromToken, toToken, fromChain = "solana", toChain = "base", fromAddress, toAddress, slippageBps = 300, // means 3%
 }) => {
    try {
        const quotes = await (0, swap_sdk_1.fetchQuote)({
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
        const swapTx = await (0, swap_sdk_1.createSwapFromSolanaInstructions)(quotes[0], fromAddress, toAddress, undefined, connection);
        return swapTx;
    }
    catch (error) {
        console.error(error);
    }
};
exports.getMayanSwapTx = getMayanSwapTx;
//# sourceMappingURL=mayan-wormhole.js.map
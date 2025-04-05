"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressLookupTableAccounts = exports.deserializeInstruction = exports.getJupiterSwapInstructions = void 0;
const web3_js_1 = require("@solana/web3.js");
const axios_1 = __importDefault(require("axios"));
const getJupiterSwapInstructions = async (connection, userPublicKey, swapMode, inputMint, outputMint, amount, maxAccounts) => {
    try {
        const response = await axios_1.default.get(`https://api.jup.ag/swap/v1/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&swapMode=${swapMode}${maxAccounts ? `&maxAccounts=${maxAccounts}` : ""}`);
        const { data: instructions } = await axios_1.default.post("https://api.jup.ag/swap/v1/swap-instructions", JSON.stringify({
            quoteResponse: response.data,
            userPublicKey: userPublicKey.toString(),
        }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const { tokenLedgerInstruction, // If you are using `useTokenLedger = true`.
        computeBudgetInstructions, // The necessary instructions to setup the compute budget.
        setupInstructions, // Setup missing ATA for the users.
        swapInstruction, // The actual swap instruction.
        cleanupInstruction, // Unwrap the SOL if `wrapAndUnwrapSol = true`.
        addressLookupTableAddresses, // The lookup table addresses that you can use if you are using versioned transaction.
         } = instructions;
        const swapInstructionIxs = [];
        swapInstructionIxs.push(...setupInstructions.map(exports.deserializeInstruction));
        swapInstructionIxs.push((0, exports.deserializeInstruction)(swapInstruction));
        swapInstructionIxs.push((0, exports.deserializeInstruction)(cleanupInstruction));
        const addressLookupTableAccounts = [];
        addressLookupTableAccounts.push(...(await (0, exports.getAddressLookupTableAccounts)(connection, addressLookupTableAddresses)));
        return {
            swapInstructionIxs,
            addressLookupTableAccounts,
        };
    }
    catch (error) {
        console.log(error);
        return null;
    }
};
exports.getJupiterSwapInstructions = getJupiterSwapInstructions;
const deserializeInstruction = (instruction) => {
    return new web3_js_1.TransactionInstruction({
        programId: new web3_js_1.PublicKey(instruction.programId),
        keys: instruction.accounts.map((key) => ({
            pubkey: new web3_js_1.PublicKey(key.pubkey),
            isSigner: key.isSigner,
            isWritable: key.isWritable,
        })),
        data: Buffer.from(instruction.data, "base64"),
    });
};
exports.deserializeInstruction = deserializeInstruction;
const getAddressLookupTableAccounts = async (connection, keys) => {
    const addressLookupTableAccountInfos = await connection.getMultipleAccountsInfo(keys.map((key) => new web3_js_1.PublicKey(key)));
    return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
        const addressLookupTableAddress = keys[index];
        if (accountInfo) {
            const addressLookupTableAccount = new web3_js_1.AddressLookupTableAccount({
                key: new web3_js_1.PublicKey(addressLookupTableAddress),
                state: web3_js_1.AddressLookupTableAccount.deserialize(accountInfo.data),
            });
            acc.push(addressLookupTableAccount);
        }
        return acc;
    }, new Array());
};
exports.getAddressLookupTableAccounts = getAddressLookupTableAccounts;
//# sourceMappingURL=jupiter.js.map
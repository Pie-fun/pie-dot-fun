import { AddressLookupTableAccount, Connection, PublicKey, TransactionInstruction } from "@solana/web3.js";
export declare const getJupiterSwapInstructions: (connection: Connection, userPublicKey: PublicKey, swapMode: "ExactIn" | "ExactOut", inputMint: PublicKey, outputMint: PublicKey, amount: number, maxAccounts?: number) => Promise<{
    swapInstructionIxs: any[];
    addressLookupTableAccounts: AddressLookupTableAccount[];
}>;
export declare const deserializeInstruction: (instruction: any) => TransactionInstruction;
export declare const getAddressLookupTableAccounts: (connection: Connection, keys: string[]) => Promise<AddressLookupTableAccount[]>;
//# sourceMappingURL=jupiter.d.ts.map
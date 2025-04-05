import { ChainName } from "@mayanfinance/swap-sdk";
import { Connection } from "@solana/web3.js";
export declare const getMayanSwapTx: ({ connection, amount, fromToken, toToken, fromChain, toChain, fromAddress, toAddress, slippageBps, }: {
    connection: Connection;
    amount: number;
    fromToken: string;
    toToken: string;
    fromChain?: ChainName;
    toChain?: ChainName;
    fromAddress: string;
    toAddress: string;
    slippageBps?: number;
}) => Promise<any>;
//# sourceMappingURL=mayan-wormhole.d.ts.map
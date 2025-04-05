import { ConnectedSolanaWallet } from '@privy-io/react-auth/solana'
import { Connection } from '@solana/web3.js'
import {
  Chain,
  Network,
  SignAndSendSigner,
  TxHash,
  UnsignedTransaction,
} from '@wormhole-foundation/sdk'

export class PrivySvmSigner<N extends Network, C extends Chain>
  implements SignAndSendSigner<N, C>
{
  constructor(
    private readonly signerAddress: string,
    private readonly signerChain: C,
    private readonly wallet: ConnectedSolanaWallet,
    private readonly connection: Connection,
  ) {
    this.signerAddress = signerAddress
    this.signerChain = signerChain
    this.wallet = wallet
    this.connection = connection
  }
  address(): string {
    return this.signerAddress
  }
  chain(): C {
    return this.signerChain
  }
  async signAndSend(
    unsignedTransactions: UnsignedTransaction<N, C>[],
  ): Promise<TxHash[]> {
    const transactions = await Promise.all(
      unsignedTransactions.map(async (unsignedTransaction) => {
        const { blockhash } = await this.connection.getLatestBlockhash()

        unsignedTransaction.transaction.transaction.message.recentBlockhash =
          blockhash

        const tx = await this.wallet.sendTransaction(
          unsignedTransaction.transaction.transaction,
          this.connection,
        )

        return tx
      }),
    )

    return transactions
  }
}

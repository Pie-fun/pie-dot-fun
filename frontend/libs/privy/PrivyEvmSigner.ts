import {
  FundWalletConfig,
  SendTransactionModalUIOptions,
  UnsignedTransactionRequest,
} from '@privy-io/react-auth'
import {
  Chain,
  Network,
  SignAndSendSigner,
  TxHash,
  UnsignedTransaction,
} from '@wormhole-foundation/sdk'

export class PrivyEvmSigner<N extends Network, C extends Chain>
  implements SignAndSendSigner<N, C>
{
  constructor(
    private readonly signerAddress: string,
    private readonly signerChain: C,
    private readonly sendTransaction: (
      input: UnsignedTransactionRequest,
      options?: {
        uiOptions?: SendTransactionModalUIOptions
        fundWalletConfig?: FundWalletConfig
        address?: string
      },
    ) => Promise<{
      hash: `0x${string}`
    }>,
  ) {
    this.signerAddress = signerAddress
    this.signerChain = signerChain
    this.sendTransaction = sendTransaction
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
      unsignedTransactions.map((unsignedTransaction) =>
        this.sendTransaction(unsignedTransaction.transaction),
      ),
    )

    return transactions.map((transaction) => transaction.hash)
  }
}

import { usePrivyWallet } from '@/libs/privy/usePrivyWallet'
import { useSolana } from '@/hooks/useSolana'
import { useSolanaWallets } from '@privy-io/react-auth'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionSignature,
} from '@solana/web3.js'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import bs58 from 'bs58'

export type PrivyTransferError = Error & {
  signature: string
  txSignature: string
}

type UseTransferMutationProps = {
  address: string
  amount: number
}

export function useTransfer(
  options?: UseMutationOptions<
    TransactionSignature,
    Error,
    UseTransferMutationProps
  >,
) {
  const { connection } = useSolana()
  const { wallets } = useSolanaWallets()
  const { wallet } = usePrivyWallet({ wallets, type: 'embedded' })

  return useMutation({
    mutationFn: async ({ address, amount }) => {
      if (!wallet) {
        throw new Error('Wallet is not connected')
      }

      const { blockhash } = await connection.getLatestBlockhash()
      const fromPubkey = new PublicKey(wallet.address)
      const toPubkey = new PublicKey(address)

      const tx = new Transaction({
        feePayer: fromPubkey,
        recentBlockhash: blockhash,
      })

      tx.add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: amount * LAMPORTS_PER_SOL,
        }),
      )

      const signedTx = await wallet.signTransaction(tx)

      wallet.sendTransaction(signedTx, connection, {
        skipPreflight: true,
      })

      return bs58.encode(signedTx.signatures[0].signature || new Uint8Array())
    },
    ...options,
  })
}

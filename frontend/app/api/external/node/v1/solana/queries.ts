import {
  Connection,
  PublicKey,
  Keypair,
  TransactionMessage,
} from '@solana/web3.js'
import { BaseQueryOptions } from '@/libs/react-query/types'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { FETCH_RETRY_COUNT } from '@/constants/common'

type GetBalanceQueryProps = {
  connection: Connection
  address: string
}

export function getBalanceQuery({ connection, address }: GetBalanceQueryProps) {
  return {
    queryKey: queryKeys.solana.getBalanceQuery({ address }).queryKey,
    queryFn: () => connection.getBalance(new PublicKey(address)),
    retry: (errorCount, error) => {
      if (
        error.message.includes('Failed to fetch') &&
        errorCount <= FETCH_RETRY_COUNT.PRIMARY
      ) {
        return true
      }

      return false
    },
  } satisfies BaseQueryOptions<typeof Connection.prototype.getBalance>
}

type GetSignatureStatusQueryProps = {
  connection: Connection
  signature: Parameters<typeof Connection.prototype.getSignatureStatus>[0]
  config?: Parameters<typeof Connection.prototype.getSignatureStatus>[1]
}

export function getSignatureStatusQuery({
  connection,
  signature,
  config,
}: GetSignatureStatusQueryProps) {
  return {
    queryKey: queryKeys.solana.getSignatureStatusQuery({ signature, config })
      .queryKey,
    queryFn: async () => {
      const res = await connection.getSignatureStatus(signature, config)

      if (!res.value) {
        throw new Error('Transaction not found')
      }

      return res
    },
    retry: (errorCount, error) => {
      if (
        error.message.includes('Failed to fetch') &&
        errorCount <= FETCH_RETRY_COUNT.PRIMARY
      ) {
        return true
      }

      return false
    },
  } satisfies BaseQueryOptions<typeof Connection.prototype.getSignatureStatus>
}

type GetCurrentNetworkFeeQueryProps = {
  connection: Connection
}

export function getCurrentNetworkFeeQuery({
  connection,
}: GetCurrentNetworkFeeQueryProps) {
  return {
    queryKey: queryKeys.solana.getCurrentNetworkFeeQuery().queryKey,
    queryFn: async () => {
      const { blockhash } = await connection.getLatestBlockhash()

      const message = new TransactionMessage({
        payerKey: Keypair.generate().publicKey,
        recentBlockhash: blockhash,
        instructions: [],
      }).compileToV0Message()

      const feeCalculator = await connection.getFeeForMessage(message)

      return feeCalculator
    },
  } satisfies BaseQueryOptions<typeof Connection.prototype.getFeeForMessage>
}

import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import { getTokenBalanceQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { useSolana } from '@/hooks/useSolana'
import { FirstParameter } from '@/types/utility'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import { PublicKey } from '@solana/web3.js'
import { useQuery } from '@tanstack/react-query'
import BigNumber from 'bignumber.js'
import * as z from 'zod'

export type BuyAndSellSchema = z.infer<
  ReturnType<typeof useBuyAndSellSchema>['schema']
>

export function useBuyAndSellSchema({
  tokenAddress,
  holdingWalletAddress,
}: Readonly<Partial<FirstParameter<typeof getHoldingResource>>>) {
  const { connection, cluster } = useSolana()
  const mint = tokenAddress ? new PublicKey(tokenAddress) : undefined
  const owner = holdingWalletAddress
    ? new PublicKey(holdingWalletAddress)
    : undefined

  const { data } = useQuery({
    ...getTokenBalanceQuery({
      cluster: cluster.network,
      connection,
      mint: mint!,
      owner: owner!,
    }),
    enabled: !!mint && !!owner,
  })

  const schema = z.object({
    buyMethod: z.object({
      chain: z.string(),
      address: z.string(),
      type: z.string(),
    }),
    buyAmount: z.string(),
    sellMethod: z.object({
      chain: z.string(),
      address: z.string(),
      type: z.string(),
    }),
    sellAmount: z.string().refine((value) => {
      if (data && value) {
        const isValid = new BigNumber(
          getUnFormattedNumber({
            value,
          }),
        ).isLessThanOrEqualTo(data)

        return isValid
      }

      return false
    }),
    slippage: z.string().optional(),
    isShowSlippage: z.boolean().optional(),
    error: z
      .union([
        z.literal('insufficientBalance'),
        z.literal('rebalancing'),
        z.literal('slippage'),
        z.literal('unknown'),
        z.literal('partialTrade'),
        z.literal('bundleRetrySuccess'),
      ])
      .optional(),
  })

  return { schema }
}

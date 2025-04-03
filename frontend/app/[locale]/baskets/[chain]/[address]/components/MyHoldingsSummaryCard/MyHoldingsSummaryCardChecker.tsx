'use client'

import { useQuery } from '@tanstack/react-query'
import { ComponentProps, Suspense } from 'react'
import {
  MyHoldingsSummaryCard,
  MyHoldingsSummaryCardSkeleton,
} from '@/app/[locale]/baskets/[chain]/[address]/components/MyHoldingsSummaryCard/MyHoldingsSummaryCard'
import { useUser } from '@/libs/api/useUser'
import { getTokenBalanceQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { PublicKey } from '@solana/web3.js'
import { useSolana } from '@/hooks/useSolana'

export function MyHoldingsSummaryCardChecker({
  chain,
  tokenAddress,
}: Readonly<
  Pick<ComponentProps<typeof MyHoldingsSummaryCard>, 'chain' | 'tokenAddress'>
>) {
  const { connection, cluster } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const mint = new PublicKey(tokenAddress)
  const owner = wallet?.address ? new PublicKey(wallet?.address) : undefined

  const { data: amount } = useQuery({
    ...getTokenBalanceQuery({
      cluster: cluster.network,
      connection,
      mint,
      owner: owner!,
    }),
    enabled: !!owner,
  })

  return (
    <>
      {!!wallet && !!amount && (
        <Suspense fallback={<MyHoldingsSummaryCardSkeleton />}>
          <MyHoldingsSummaryCard
            chain={chain}
            holdingWalletAddress={wallet.address}
            tokenAddress={tokenAddress}
            amount={amount}
          />
        </Suspense>
      )}
    </>
  )
}

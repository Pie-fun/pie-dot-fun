'use client'

import { Layout } from '@/components/Layout/Layout'
import { UserProfileCardSkeleton } from '@/app/[locale]/profile/[displayName]/components/UserProfileCard/UserProfileCard'
import { TotalBalanceCardSkeleton } from '@/app/[locale]/profile/[displayName]/components/TotalBalanceCard/TotalBalanceCard'
import { DepositBalanceCardSkeleton } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/DepositBalanceCard'
import { BasketTokenHoldingsCardSkeleton } from '@/app/[locale]/profile/[displayName]/components/BasketTokenHoldingsCard/BasketTokenHoldingsCard'
import * as styles from '@/app/[locale]/profile/[displayName]/page.css'

export default function Loading() {
  return (
    <div className={styles.root()}>
      <Layout gap='l' topPadding='l' horizontalPadding='m'>
        <UserProfileCardSkeleton />
        <TotalBalanceCardSkeleton />
        <BasketTokenHoldingsCardSkeleton />
        <DepositBalanceCardSkeleton />
      </Layout>
    </div>
  )
}

'use client'

import { Layout } from '@/components/Layout/Layout'
import {
  UserProfileCard,
  UserProfileCardSkeleton,
} from '@/app/[locale]/profile/[displayName]/components/UserProfileCard/UserProfileCard'
import { notFound, redirect, RedirectType, useParams } from 'next/navigation'
import { Suspense } from 'react'
import {
  TotalBalanceCard,
  TotalBalanceCardSkeleton,
} from '@/app/[locale]/profile/[displayName]/components/TotalBalanceCard/TotalBalanceCard'
import {
  DepositBalanceCard,
  DepositBalanceCardSkeleton,
} from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/DepositBalanceCard'
import {
  BasketTokenHoldingsCard,
  BasketTokenHoldingsCardSkeleton,
} from '@/app/[locale]/profile/[displayName]/components/BasketTokenHoldingsCard/BasketTokenHoldingsCard'
import { useInfiniteQuery } from '@tanstack/react-query'
import { listUsersQuery } from '@/app/api/backend/v1/user/queries'
import { getFilter } from '@/utils/getFilter'
import * as styles from '@/app/[locale]/profile/[displayName]/page.css'
import { Box } from '@/components/Box/Box'
import { useUser } from '@/libs/api/useUser'
import { ErrorBoundary } from 'react-error-boundary'
import { ROUTES } from '@/constants/routes'
import { REDIRECT_URI_KEY } from '@/constants/common'
import { ErrorFallback } from '@/app/components/ErrorFallback/ErrorFallback'

type PageProps = {
  params: {
    displayName: string
  }
}

export default function Page() {
  const { displayName } = useParams<PageProps['params']>()
  const { data: user } = useUser()

  const filter = getFilter([
    { field: 'display_name', operator: '=', value: `"${displayName}"` },
  ])

  const { data: listUsers, isFetched } = useInfiniteQuery({
    ...listUsersQuery({
      filter,
    }),
  })

  const [searchedUser] = listUsers?.pages.flatMap(({ users }) => users) ?? [
    undefined,
  ]

  const isMine = user?.id === searchedUser?.id

  if (isFetched && user && !user?.displayName) {
    const url = new URL(ROUTES['/SIGN-IN/SETUP'], window.location.origin)

    url.searchParams.set(REDIRECT_URI_KEY, window.location.href)

    return redirect(url.toString(), RedirectType.replace)
  }

  if (isFetched && !searchedUser) {
    return notFound()
  }

  return (
    <div className={styles.root()}>
      <Layout gap='l' topPadding='l' horizontalPadding='m'>
        {searchedUser && (
          <Suspense fallback={<UserProfileCardSkeleton />}>
            <UserProfileCard id={searchedUser.id} />
          </Suspense>
        )}
        {(user?.id && process.env.NEXT_PUBLIC_IS_USE_MOCK_DATA === 'true') ||
        isMine ? (
          <Box layout='fillWidth' orientation='vertical' gap='m'>
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<TotalBalanceCardSkeleton />}>
                <TotalBalanceCard />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<BasketTokenHoldingsCardSkeleton />}>
                <BasketTokenHoldingsCard />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<DepositBalanceCardSkeleton />}>
                <DepositBalanceCard />
              </Suspense>
            </ErrorBoundary>
          </Box>
        ) : null}
      </Layout>
    </div>
  )
}

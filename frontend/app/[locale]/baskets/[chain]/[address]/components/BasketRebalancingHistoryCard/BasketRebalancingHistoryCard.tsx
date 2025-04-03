'use client'

import * as Card from '@/components/Card/Card'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import Observer from '@/components/Observer/Observer'
import * as Accordion from '@/components/Accordion/Accordion'
import { DateTime } from 'luxon'
import { useTranslations } from 'next-intl'
import { Link } from '@/components/Link/Link'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketRebalancingHistoryCard/BasketRebalancingHistoryCard.css'
import * as DataTable from '@/components/DataTable/DataTable'
import { Rate } from '@/components/Rate/Rate'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcRightUpperArrowOutline } from '@/components/Icon/Icons'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { listBasketTokenRebalancingHistoriesQuery } from '@/app/api/backend/v1/basketToken/queries'
import { RebalancedBasketProfile } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketRebalancingHistoryCard/RebalancedBasketProfile'
import { POLLING_INTERVAL } from '@/constants/common'
import { Typography } from '@/components/Typography/Typography'
import { getFilter } from '@/utils/getFilter'

type RebalancedComponent = {
  previousWeight: number
  currentWeight: number
  changePercentageValue: number
  address: string
  chain: ChainType
}

type BasketRebalancingHistoryCardProps = {
  chain: ChainType
  address: string
}

export function BasketRebalancingHistoryCard({
  chain,
  address,
}: Readonly<BasketRebalancingHistoryCardProps>) {
  const t = useTranslations()

  const filter = getFilter([
    {
      negation: false,
      value: 'components_changed',
    },
  ])

  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    ...listBasketTokenRebalancingHistoriesQuery({
      basketToken: getBasketTokenResource({ address, chain }),
      filter,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const rebalancingHistories = data?.pages.flatMap(
    ({ rebalancingHistories }) => rebalancingHistories,
  )

  const columns: DataTable.ColumnDef<RebalancedComponent>[] = [
    {
      header: t('basketRebalancingToken.token'),
      cell: ({ row }) => (
        <RebalancedBasketProfile
          address={row.original.address}
          chain={row.original.chain}
        />
      ),
      size: 240,
    },
    {
      header: t('basketRebalancingToken.previous'),
      cell: ({ row }) => (
        <Rate
          theme='mono'
          size='m'
          fontWeight='regular'
          value={row.original.previousWeight}
        />
      ),
      size: 140,
    },
    {
      header: t('basketRebalancingToken.update'),
      cell: ({ row }) => (
        <Rate
          theme='mono'
          size='m'
          fontWeight='regular'
          value={row.original.currentWeight}
        />
      ),
      size: 140,
    },
    {
      header: t('basketRebalancingToken.change'),
      cell: ({ row }) => (
        <Rate
          sign='plusMinus'
          theme='mono'
          size='m'
          fontWeight='regular'
          value={row.original.changePercentageValue}
        />
      ),
      size: 140,
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <div className={styles.actions()}>
          <CopyToClipboard
            buttonType='outline'
            shape='square'
            color='secondary'
            size='squareS'
            iconSize='s'
            value={row.original.address}
          />
          <Link
            href={`${EXTERNAL_LINKS.DEXSCREENER}/${row.original.chain.toLowerCase()}/${row.original.address}`}
            isExternal
          >
            <Button
              buttonType='outline'
              shape='square'
              color='secondary'
              size='squareS'
            >
              <Icon size='s'>
                <IcRightUpperArrowOutline />
              </Icon>
            </Button>
          </Link>
        </div>
      ),
      size: 72,
    },
  ]

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <Card.Title>{t('basketRebalancing.title')}</Card.Title>
        {!!rebalancingHistories.length && (
          <Accordion.Root
            type='multiple'
            defaultValue={[rebalancingHistories?.[0].rebalanceTime || '']}
          >
            {rebalancingHistories.map(
              ({ afterComponents, beforeComponents, rebalanceTime = '' }) => {
                const alreadyExistComponents = beforeComponents.reduce<
                  RebalancedComponent[]
                >((acc, { address, chain, weight }) => {
                  const afterComponent = afterComponents.find(
                    (component) => component.address === address,
                  )

                  const previousWeight = weight?.value ?? 0
                  const currentWeight = afterComponent?.weight?.value ?? 0
                  const changePercentageValue = currentWeight - previousWeight

                  acc.push({
                    previousWeight,
                    currentWeight,
                    changePercentageValue,
                    address,
                    chain,
                  })

                  return acc
                }, [])

                const orderedAlreadyExistComponents =
                  alreadyExistComponents.sort(
                    (a, b) => b.previousWeight - a.previousWeight,
                  )

                const addedComponents = afterComponents.reduce<
                  RebalancedComponent[]
                >((acc, { address, chain, weight }) => {
                  const isAlreadyExist = beforeComponents.some(
                    (component) => component.address === address,
                  )

                  if (!isAlreadyExist) {
                    const currentWeight = weight?.value ?? 0

                    acc.push({
                      previousWeight: 0,
                      currentWeight,
                      changePercentageValue: currentWeight,
                      address,
                      chain,
                    })
                  }

                  return acc
                }, [])

                const orderedAddedComponents = addedComponents.sort(
                  (a, b) => b.currentWeight - a.currentWeight,
                )

                return (
                  <Accordion.Item key={rebalanceTime} value={rebalanceTime}>
                    <Accordion.Trigger>
                      {rebalanceTime &&
                        DateTime.fromISO(rebalanceTime)
                          .setLocale('en')
                          .toLocaleString(DateTime.DATE_MED)}
                    </Accordion.Trigger>
                    <Accordion.Content>
                      <DataTable.Table
                        data={[
                          ...orderedAlreadyExistComponents,
                          ...orderedAddedComponents,
                        ]}
                        columns={columns}
                      />
                    </Accordion.Content>
                  </Accordion.Item>
                )
              },
            )}
          </Accordion.Root>
        )}
        {!rebalancingHistories.length && (
          <div className={styles.empty()}>
            <Typography
              color='secondary'
              typography='body1'
              fontWeight='regular'
            >
              {t('basketRebalancing.empty')}
            </Typography>
          </div>
        )}
        <Observer condition={hasNextPage} callback={fetchNextPage} />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketRebalancingHistoryCardSkeleton() {
  const t = useTranslations()

  const columns: DataTable.ColumnDef<null>[] = [
    {
      header: t('basketRebalancingToken.token'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 300,
    },
    {
      header: t('basketRebalancingToken.previous'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 300,
    },
    {
      header: t('basketRebalancingToken.update'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 300,
    },
    {
      header: t('basketRebalancingToken.change'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 300,
    },
    {
      id: 'actions',
      cell: () => <Skeleton height='1.875rem' />,
      size: 150,
    },
  ]

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <Card.Title>{t('basketRebalancing.title')}</Card.Title>
        <DataTable.Table data={Array(6).fill(null)} columns={columns} />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

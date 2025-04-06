'use client'

import * as Card from '@/components/Card/Card'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Separator } from '@/components/Separator/Separator'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketComponentsCard/BasketComponentsCard.css'
import * as DataTable from '@/components/DataTable/DataTable'
import Observer from '@/components/Observer/Observer'
import * as BasketProfile from '@/app/components/BasketProfile/BasketProfile'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import {
  IcInfoCircleOutline,
  IcRightUpperArrowOutline,
} from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import { useTranslations } from 'next-intl'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { POLLING_INTERVAL } from '@/constants/common'
import { Rate } from '@/components/Rate/Rate'
import { Typography } from '@/components/Typography/Typography'
import { useCallback } from 'react'
import { CellContext } from '@tanstack/react-table'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { Box } from '@/components/Box/Box'
import { basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery } from '@/app/api/frontend/v1/graphql/queries/combined/queries'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { WRAPPED_NATIVE_TOKEN_ADDRESSES } from '@/constants/blockChains'

type BasketComponentsCardProps = {
  chain: ChainType
  address: string
}

export function BasketComponentsCard({
  chain,
  address,
}: Readonly<BasketComponentsCardProps>) {
  const t = useTranslations()

  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    ...basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery({
      address,
      chain,
    }),
    refetchInterval: POLLING_INTERVAL.QUATERNARY,
  })

  const basketComponentsWithFungibleTokenAndFungibleTokenMarket =
    data?.pages.flatMap(
      ({ basketComponentsWithFungibleTokenAndFungibleTokenMarket }) =>
        basketComponentsWithFungibleTokenAndFungibleTokenMarket.basketComponentsWithFungibleTokenAndFungibleTokenMarket,
    )

  const BasketProfileCell = useCallback(
    ({
      row,
    }: CellContext<
      (typeof basketComponentsWithFungibleTokenAndFungibleTokenMarket)[0],
      unknown
    >) => {
      return (
        <BasketProfile.Root size='s'>
          <BasketProfile.TokenAvatar
            src={row.original.fungibleToken.iconImageUrl}
            chain={row.original.fungibleToken.chain}
          />
          <BasketProfile.Content>
            <BasketProfile.Name>
              {row.original.fungibleToken.symbol}
            </BasketProfile.Name>
            <BasketProfile.OneLiner>
              {row.original.fungibleToken.displayName}
            </BasketProfile.OneLiner>
          </BasketProfile.Content>
        </BasketProfile.Root>
      )
    },
    [],
  )

  const columns: DataTable.ColumnDef<
    (typeof basketComponentsWithFungibleTokenAndFungibleTokenMarket)[0]
  >[] = [
    {
      header: t('basketComponentsToken.token'),
      cell: BasketProfileCell,
      size: 240,
    },
    {
      header: t('basketComponentsToken.weight'),
      cell: ({ row }) => (
        <Typography typography='body1' fontWeight='regular' color='primary'>
          <Rate
            theme='mono'
            value={row.original.component.weight?.value ?? 0}
          />
        </Typography>
      ),
      size: 100,
    },
    {
      header: t('basketComponentsToken.priceUsd'),
      cell: ({ row }) => (
        <CurrencyWithQuantity
          currencyType='fiat'
          size='m'
          fontWeight='regular'
          value={row.original.fungibleTokenMarket.price?.formattedAmount}
        >
          $
        </CurrencyWithQuantity>
      ),
      size: 120,
    },
    {
      header: t('format.dayAbbreviation', { day: 7 }),
      cell: ({ row }) => (
        <Rate
          sign='icon'
          size='m'
          fontWeight='regular'
          value={
            row.original.fungibleTokenMarket.priceChange?.priceChanges
              .PRICE_CHANGE_PERIOD_7_DAY.percentageChange?.value ?? 0
          }
        />
      ),
      size: 120,
    },
    {
      id: 'basketComponentsToken.Fdv',
      header: () => (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                {t('basketComponentsToken.Fdv')}
                <Icon size='xs'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('basketComponentsToken.FdvTooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ),
      cell: ({ row }) => (
        <>
          {row.original.fungibleToken.address ===
          WRAPPED_NATIVE_TOKEN_ADDRESSES.SOLANA ? null : (
            <CurrencyWithQuantity
              currencyType='fiat'
              size='m'
              fontWeight='regular'
              value={
                row.original.fungibleTokenMarket.fdvs.CURRENCY_USDC
                  .formattedAmount
              }
              options={{ notation: 'compact' }}
            >
              $
            </CurrencyWithQuantity>
          )}
        </>
      ),
      size: 120,
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
            value={row.original.fungibleToken.address}
          />
          <Link
            href={`${EXTERNAL_LINKS.DEXSCREENER}/${row.original.fungibleToken.chain.toLowerCase()}/${row.original.fungibleToken.address}`}
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
        <Card.Title>
          <div className={styles.cardTitle()}>
            <span>{t('basketComponents.title')}</span>
            <Separator
              orientation='vertical'
              color='secondary'
              style={{ height: '0.625rem' }}
            />
            <span>
              {basketComponentsWithFungibleTokenAndFungibleTokenMarket.length}
            </span>
          </div>
        </Card.Title>
        <DataTable.Table
          data={basketComponentsWithFungibleTokenAndFungibleTokenMarket}
          columns={columns}
        />
        <Observer condition={hasNextPage} callback={fetchNextPage} />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketComponentsCardSkeleton() {
  const t = useTranslations()

  const columns: DataTable.ColumnDef<null>[] = [
    {
      header: t('basketComponentsToken.token'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 240,
    },
    {
      header: t('basketComponentsToken.weight'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 120,
    },
    {
      header: t('basketComponentsToken.priceUsd'),
      cell: () => <Skeleton height='1.875rem' />,
      size: 120,
    },
    {
      header: t('format.dayAbbreviation', { day: 7 }),
      cell: () => <Skeleton height='1.875rem' />,
      size: 120,
    },
    {
      id: 'basketComponentsToken.Fdv',
      header: () => (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                {t('basketComponentsToken.Fdv')}
                <Icon size='xs'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('basketComponentsToken.FdvTooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ),
      cell: () => <Skeleton height='1.875rem' />,
      size: 120,
    },
    {
      id: 'actions',
      cell: () => <Skeleton height='1.875rem' />,
      size: 120,
    },
  ]

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <Card.Title>
          <div className={styles.cardTitle()}>
            <span>{t('basketComponents.title')}</span>
            <Separator
              orientation='vertical'
              color='secondary'
              style={{ height: '0.625rem' }}
            />
          </div>
        </Card.Title>
        <DataTable.Table data={Array(6).fill(null)} columns={columns} />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

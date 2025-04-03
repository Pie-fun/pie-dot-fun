'use client'

import * as Card from '@/components/Card/Card'
import * as KeyValue from '@/components/KeyValue/KeyValue'
import { Skeleton as SkeletonPrimitive } from '@/components/Skeleton/Skeleton'
import * as BasketProfile from '@/app/components/BasketProfile/BasketProfile'
import * as styles from '@/app/[locale]/components/BasketCard/BasketCard.css'
import { Separator } from '@/components/Separator/Separator'
import { Typography } from '@/components/Typography/Typography'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { Rate } from '@/components/Rate/Rate'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'
import { TokenAvatar } from '@/components/TokenAvatar/TokenAvatar'
import { Badge } from '@/components/Badge/Badge'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'
import { Component } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token'
import { getFilter, OperatorCondition } from '@/utils/getFilter'
import {
  ChainType,
  Currency,
  PriceChangePeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useTranslations } from 'next-intl'
import { generatePath } from '@/libs/react-router/react-router'
import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { listFungibleTokensQuery } from '@/app/api/backend/v1/fungibleToken/queries'
import { POLLING_INTERVAL } from '@/constants/common'
import { getFungibleTokenResource } from '@/app/api/backend/v1/fungibleToken/resource'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { getOrderBy } from '@/utils/getOrderBy'
import { ScrollArea } from '@/components/ScrollArea/ScrollArea'
import { PropsWithChildren } from 'react'
import Observer from '@/components/Observer/Observer'
import { BasketTokenMarket } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token-market'
import { RequiredDeep } from 'type-fest'
import { basketTokensWithBasketTokenMarketQuery } from '@/app/api/frontend/v1/graphql/queries/combined/queries'
import { Box } from '@/components/Box/Box'

type ItemProps = {
  tokenImage?: string
  ticker: string
  name: string
  oneLiner?: string
  components: {
    address: Component['address']
    chain: Component['chain']
  }[]
  address: string
  chain: ChainType
  price?: RequiredDeep<BasketTokenMarket['value']>['formattedAmount']
  priceChange?: RequiredDeep<BasketTokenMarket>['valueChange']['priceChanges']['period']['percentageChange']['value']
}

export function Item({
  tokenImage,
  ticker,
  name,
  oneLiner,
  components,
  address,
  chain,
  price: initialPrice,
  priceChange: initialPriceChange,
}: Readonly<ItemProps>) {
  const t = useTranslations()

  const { data: basketTokenMarket } = useQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({
        chain,
        address,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
    refetchInterval: POLLING_INTERVAL.QUATERNARY,
  })

  const percentageValue =
    basketTokenMarket?.valueChange?.priceChanges[
      PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR
    ].percentageChange?.value

  const filter = getFilter([
    { field: 'chain', operator: '=', value: ChainType.SOLANA },
    ...components.map<OperatorCondition>(({ address, chain }) => ({
      join: 'AND',
      field: 'name',
      operator: '=',
      value: `"${getFungibleTokenResource({ address, chain })}"`,
    })),
  ])

  const orderBy = getOrderBy([{ field: 'market_cap', sort: 'desc' }])

  const { data: listFungibleTokens } = useSuspenseInfiniteQuery({
    ...listFungibleTokensQuery({ filter, orderBy }),
  })

  const fungibleTokens = listFungibleTokens?.pages.flatMap(
    ({ fungibleTokens }) => fungibleTokens,
  )

  const price = basketTokenMarket?.value?.formattedAmount ?? initialPrice
  const priceChange = percentageValue ?? initialPriceChange

  return (
    <Link
      href={generatePath(ROUTES['/BASKETS/:CHAIN/:ADDRESS'], {
        chain,
        address,
      })}
      layout='contents'
    >
      <div className={styles.item()}>
        <Card.Root
          border='primary'
          background='default'
          shadow='primary'
          layout='fillWidth'
          size='m'
        >
          <Card.Header>
            <BasketProfile.Root size='m'>
              <BasketProfile.TokenAvatar src={tokenImage} />
              <BasketProfile.Content>
                <BasketProfile.Ticker>{ticker}</BasketProfile.Ticker>
                <BasketProfile.Name>{name}</BasketProfile.Name>
                {oneLiner && (
                  <BasketProfile.OneLiner>{oneLiner}</BasketProfile.OneLiner>
                )}
              </BasketProfile.Content>
            </BasketProfile.Root>
            <Separator color='default' />
            <div className={styles.gradientRoot()}>
              <KeyValue.Root orientation='vertical' gap='l'>
                <KeyValue.Key>
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {t('basketCard.components')}
                  </Typography>
                  <Separator
                    orientation='vertical'
                    color='secondary'
                    style={{ height: '0.625rem' }}
                  />
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {components.length}
                  </Typography>
                </KeyValue.Key>
                <ScrollArea orientation='horizontal' isHide>
                  <KeyValue.Value gap='m'>
                    {fungibleTokens.map(({ iconImageUrl, address, symbol }) => (
                      <Badge
                        key={address}
                        size='s'
                        shape='round'
                        color='primary'
                        badgeType='solid'
                        align='center'
                      >
                        <TokenAvatar
                          src={iconImageUrl}
                          alt=''
                          shape='circle'
                          size='xxs'
                          isLined
                        />
                        <Typography
                          typography='caption2'
                          fontWeight='regular'
                          color='primary'
                        >
                          ${symbol}
                        </Typography>
                      </Badge>
                    ))}
                  </KeyValue.Value>
                </ScrollArea>
              </KeyValue.Root>
              <div className={styles.gradientContent()} />
            </div>
            <Separator color='default' />
            <div className={styles.spacebetween()}>
              <div className={styles.pricePerformance()}>
                <KeyValue.Root layout='hug'>
                  <KeyValue.Key>
                    <Typography
                      typography='caption2'
                      fontWeight='regular'
                      color='tertiary'
                    >
                      {t('basketCard.pricePerformance', {
                        day: 1,
                      })}
                    </Typography>
                  </KeyValue.Key>
                  <KeyValue.Value gap='m'>
                    <Typography color='primary'>
                      <CurrencyWithQuantity
                        currencyType='fiat'
                        value={price}
                        emptyValue='-'
                        size='m'
                        fontWeight='regular'
                      >
                        $
                      </CurrencyWithQuantity>
                    </Typography>
                    {priceChange && (
                      <Rate
                        sign='icon'
                        value={priceChange}
                        size='m'
                        theme='color'
                        fontWeight='bold'
                      />
                    )}
                  </KeyValue.Value>
                </KeyValue.Root>
              </div>
              <Button color='primary' buttonType='text' size='s'>
                <Typography
                  typography='body2'
                  fontWeight='bold'
                  color='brandPrimary'
                >
                  <Box gap='xxs'>
                    {t('basketCard.viewDetailsBtn')}
                    <Icon size='inherit'>
                      <IcChevRightOutline />
                    </Icon>
                  </Box>
                </Typography>
              </Button>
            </div>
          </Card.Header>
          <Card.Footer />
        </Card.Root>
      </div>
    </Link>
  )
}

export function Content({ children }: Readonly<PropsWithChildren>) {
  return <div className={styles.content()}>{children}</div>
}

export function List() {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    ...basketTokensWithBasketTokenMarketQuery(),
  })

  const basketTokensWithBasketTokenMarket = data?.pages.flatMap(
    ({ basketTokensWithBasketTokenMarket }) =>
      basketTokensWithBasketTokenMarket.basketTokensWithBasketTokenMarket,
  )

  return (
    <>
      {basketTokensWithBasketTokenMarket.map(
        ({ basketToken, basketTokenMarket }) => {
          const {
            displayName,
            symbol,
            iconImageUri,
            components,
            oneLineDescription,
            address,
            chain,
          } = basketToken

          return (
            <Item
              key={address}
              tokenImage={iconImageUri}
              name={displayName}
              oneLiner={oneLineDescription}
              ticker={symbol}
              components={components}
              address={address}
              chain={chain}
              price={basketTokenMarket.value?.formattedAmount}
              priceChange={
                basketTokenMarket.valueChange?.priceChanges
                  .PRICE_CHANGE_PERIOD_24_HOUR.percentageChange?.value
              }
            />
          )
        },
      )}
      <Observer callback={fetchNextPage} condition={hasNextPage} />
    </>
  )
}

export function Skeleton() {
  return (
    <div className={styles.item()}>
      <Card.Root
        border='primary'
        background='default'
        shadow='primary'
        layout='fillWidth'
        size='m'
      >
        <Card.Header>
          <BasketProfile.Root size='m'>
            <SkeletonPrimitive
              width='4rem'
              height='4rem'
              style={{
                flexShrink: 0,
              }}
            />
            <BasketProfile.Content>
              <SkeletonPrimitive height='0.875rem' width='7.5rem' />
              <SkeletonPrimitive layout='fillWidth' height='1.375rem' />
              <SkeletonPrimitive layout='fillWidth' height='1.375rem' />
            </BasketProfile.Content>
          </BasketProfile.Root>
          <Separator color='default' />
          <div className={styles.skeletonContent()}>
            <SkeletonPrimitive height='0.875rem' width='12.5rem' />
            <SkeletonPrimitive layout='fillWidth' height='1.375rem' />
          </div>
          <Separator color='default' />
          <div className={styles.skeletonContent()}>
            <SkeletonPrimitive height='0.875rem' width='12.5rem' />
            <SkeletonPrimitive layout='fillWidth' height='1.375rem' />
          </div>
        </Card.Header>
        <Card.Footer />
      </Card.Root>
    </div>
  )
}

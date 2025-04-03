'use client'

import * as Card from '@/components/Card/Card'
import * as KeyValue from '@/components/KeyValue/KeyValue'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketPriceInfoCard/BasketPriceInfoCard.css'
import {
  ChainType,
  Currency,
  PriceChangePeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { Separator } from '@/components/Separator/Separator'
import { Rate } from '@/components/Rate/Rate'
import { useTranslations } from 'next-intl'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { Icon } from '@/components/Icon/Icon'
import {
  CURRENCY_FROM_CHAIN_TYPE,
  ICONS_FIXED_FROM_CHAIN_TYPE,
} from '@/constants/blockChains'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { POLLING_INTERVAL } from '@/constants/common'
import { Typography } from '@/components/Typography/Typography'

type BasketPriceInfoCardProps = {
  chain: ChainType
  address: string
}

export function BasketPriceInfoCard({
  chain,
  address,
}: Readonly<BasketPriceInfoCardProps>) {
  const t = useTranslations()

  const { data: usdc } = useSuspenseQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const { data: nativeToken } = useSuspenseQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: CURRENCY_FROM_CHAIN_TYPE[chain],
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const priceUSDC = usdc.value?.formattedAmount
  const priceNativeToken = nativeToken.value?.formattedAmount

  const priceChange1hour =
    usdc.valueChange?.priceChanges[PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR]
      .percentageChange?.value

  const priceChange24hour =
    usdc.valueChange?.priceChanges[
      PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR
    ].percentageChange?.value

  const priceChange7day =
    usdc.valueChange?.priceChanges[PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY]
      .percentageChange?.value

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <div className={styles.prices()}>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>{t('basketPriceInfo.priceUSD')}</KeyValue.Key>
            <KeyValue.Value>
              <Typography layout='contents' color='primary'>
                <CurrencyWithQuantity
                  currencyType='fiat'
                  size='l'
                  fontWeight='bold'
                  value={priceUSDC}
                >
                  $
                </CurrencyWithQuantity>
              </Typography>
            </KeyValue.Value>
          </KeyValue.Root>
          <div className={styles.solPrice()}>
            <Typography layout='contents' color='primary'>
              <CurrencyWithQuantity
                currencyType='fiat'
                size='s'
                fontWeight='regular'
                value={priceNativeToken}
                alt='sol'
              >
                <Icon size='inherit'>{ICONS_FIXED_FROM_CHAIN_TYPE[chain]}</Icon>
              </CurrencyWithQuantity>
            </Typography>
          </div>
        </div>
        <Separator color='default' />
        <div className={styles.statistics()}>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('basketPriceInfo.performanceHour', { hour: 1 })}
            </KeyValue.Key>
            <KeyValue.Value>
              {priceChange1hour && (
                <Rate
                  sign='icon'
                  value={priceChange1hour}
                  size='s'
                  fontWeight='regular'
                />
              )}
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('format.dayAbbreviation', { day: 1 })}
            </KeyValue.Key>
            <KeyValue.Value>
              {priceChange24hour && (
                <Rate
                  sign='icon'
                  value={priceChange24hour}
                  size='s'
                  fontWeight='regular'
                />
              )}
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('format.dayAbbreviation', { day: 7 })}
            </KeyValue.Key>
            <KeyValue.Value>
              {priceChange7day && (
                <Rate
                  sign='icon'
                  value={priceChange7day}
                  size='s'
                  fontWeight='regular'
                />
              )}
            </KeyValue.Value>
          </KeyValue.Root>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketPriceInfoCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <KeyValue.Root gap='l' layout='fillWidth'>
          <KeyValue.Key>{t('basketPriceInfo.priceUSD')}</KeyValue.Key>
          <KeyValue.Value>
            <Skeleton height='2.375rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <Separator color='default' />
        <div className={styles.statistics()}>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('basketPriceInfo.performanceHour', { hour: 1 })}
            </KeyValue.Key>
            <KeyValue.Value>
              <Skeleton height='1.3125rem' width='3.625rem' />
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('format.dayAbbreviation', { day: 1 })}
            </KeyValue.Key>
            <KeyValue.Value>
              <Skeleton height='1.3125rem' width='3.625rem' />
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root gap='l' layout='hug'>
            <KeyValue.Key>
              {t('format.dayAbbreviation', { day: 7 })}
            </KeyValue.Key>
            <KeyValue.Value>
              <Skeleton height='1.3125rem' width='3.625rem' />
            </KeyValue.Value>
          </KeyValue.Root>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

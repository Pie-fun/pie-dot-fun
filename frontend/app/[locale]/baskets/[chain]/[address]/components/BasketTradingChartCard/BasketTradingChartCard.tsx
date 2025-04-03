'use client'

import { memo, useRef, useState } from 'react'
import * as Card from '@/components/Card/Card'
import * as TradingChart from '@/components/TradingChart/TradingChart'
import {
  BarPrice,
  CrosshairMode,
  PriceScaleMode,
  UTCTimestamp,
} from 'lightweight-charts'
import { listBasketTokenTicks } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { TickInterval } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token-market'
import { DateTime } from 'luxon'
import * as ToggleGroup from '@/components/ToggleGroup/ToggleGroup'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketTradingChartCard/BasketTradingChartCard.css'
import { useTranslations } from 'next-intl'
import { SYMBOL_FROM_CHAIN_TYPE } from '@/constants/blockChains'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import BigNumber from 'bignumber.js'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { getDecimalWithZeroCount } from '@/utils/getDecimalWithZeroCount'
import { POLLING_INTERVAL } from '@/constants/common'

type BasketTradingChartCardProps = {
  chain: ChainType
  address: string
}

export const BasketTradingChartCard = memo(function BasketTradingChartCard({
  chain,
  address,
}: Readonly<BasketTradingChartCardProps>) {
  const t = useTranslations()
  const parent = getBasketTokenResource({ address, chain })
  const [tickInterval, setTickInterval] = useState(
    TickInterval.INTERVAL_15_MINUTES,
  )
  const [priceScaleMode, setPriceScaleMode] =
    useState<keyof typeof PriceScaleMode>('Normal')
  const [currency, setCurrency] = useState(Currency.CURRENCY_USDC)
  const firstTime = useRef('')
  const lastTime = useRef('')
  const rootRef = useRef<HTMLDivElement>(null)

  const getBars = async (periodParams?: TradingChart.PeriodParams) => {
    const { size } = periodParams ?? {}
    const endTime = size ? firstTime.current : undefined

    const response = await listBasketTokenTicks({
      parent,
      currency,
      interval: tickInterval,
      endTime,
      size,
    })

    firstTime.current = response.ticks[0].openTime ?? ''

    if (!size) {
      lastTime.current = response.ticks.at(-1)?.openTime ?? ''
    }

    return response.ticks.map(({ openTime, open, high, low, close }) => {
      return {
        time: DateTime.fromISO(openTime!).toSeconds() as UTCTimestamp,
        value: close,
        open,
        high,
        low,
        close,
      }
    })
  }

  const subscribeBars = async () => {
    const response = await listBasketTokenTicks({
      parent,
      currency,
      interval: tickInterval,
      size: 1,
      startTime: lastTime.current,
    })

    lastTime.current = response.ticks.at(-1)?.openTime ?? ''

    const [{ close, high, low, open, openTime }] = response.ticks

    return {
      time: DateTime.fromISO(openTime!).toSeconds() as UTCTimestamp,
      value: close,
      open,
      high,
      low,
      close,
    }
  }

  return (
    <div ref={rootRef} className={styles.root()}>
      <Card.Root layout='fillWidth' border='default' size='m'>
        <Card.Header>
          <div className={styles.basketTradingChart()}>
            <div className={styles.toggles()}>
              <ToggleGroup.Root
                type='single'
                size='s'
                toggleGroupType='text'
                color='primary'
                value={tickInterval}
                onValueChange={(value: TickInterval) =>
                  value && setTickInterval(value)
                }
              >
                {/* SPEC OUT https://www.notion.so/spacebarxyz/1min-chart-interval-1b25c111d14d808bbcfedf83abbee937?pvs=4 */}
                {/* <ToggleGroup.Item value={TickInterval.INTERVAL_1_MINUTE}>
                  {t('chartInterval.minute', { minute: 1 })}
                </ToggleGroup.Item> */}
                <ToggleGroup.Item value={TickInterval.INTERVAL_15_MINUTES}>
                  {t('chartInterval.minute', { minute: 15 })}
                </ToggleGroup.Item>
                <ToggleGroup.Item value={TickInterval.INTERVAL_1_HOUR}>
                  {t('chartInterval.hour', { hour: 1 })}
                </ToggleGroup.Item>
                <ToggleGroup.Item value={TickInterval.INTERVAL_4_HOUR}>
                  {t('chartInterval.hour', { hour: 4 })}
                </ToggleGroup.Item>
                <ToggleGroup.Item value={TickInterval.INTERVAL_1_DAY}>
                  {t('format.dayAbbreviation', { day: 1 })}
                </ToggleGroup.Item>
              </ToggleGroup.Root>
              <ToggleGroup.Root
                type='single'
                size='m'
                toggleGroupType='solid'
                color='primary'
                value={currency}
                onValueChange={(value: Currency) => value && setCurrency(value)}
              >
                <ToggleGroup.Item value={Currency.CURRENCY_USDC}>
                  {t('chartCurrency.usd')}
                </ToggleGroup.Item>
                <ToggleGroup.Item value={Currency.CURRENCY_SOL}>
                  {SYMBOL_FROM_CHAIN_TYPE[chain]}
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className={styles.chartContainer()}>
              <TradingChart.Root
                interval={POLLING_INTERVAL.TERTIARY}
                options={{
                  rightPriceScale: {
                    mode:
                      priceScaleMode === 'Logarithmic'
                        ? PriceScaleMode.Logarithmic
                        : PriceScaleMode.Normal,
                  },
                  timeScale: {
                    timeVisible: true,
                    secondsVisible: false,
                  },
                  crosshair: {
                    mode: CrosshairMode.Normal,
                  },
                  localization: {
                    priceFormatter: (price: BarPrice) => {
                      const isGreaterThanOne = new BigNumber(price).gte(1)

                      const style =
                        currency === Currency.CURRENCY_USDC
                          ? 'currency'
                          : undefined

                      const intlCurrency =
                        currency === Currency.CURRENCY_USDC ? 'USD' : undefined

                      const {
                        count,
                        subscriptCount,
                        decimalPartBeforeThreshold,
                        formattedDecimalPartAfterThreshold,
                        integerPart,
                      } = getDecimalWithZeroCount({ value: price })

                      if (isGreaterThanOne) {
                        return getFormattedNumber({
                          value: price,
                          options: {
                            maximumFractionDigits: 2,
                            style,
                            currency: intlCurrency,
                          },
                        })
                      }

                      if (!count) {
                        return getFormattedNumber({
                          value: price,
                          options: {
                            maximumFractionDigits: 4,
                            style,
                            currency: intlCurrency,
                          },
                        })
                      }

                      return `${integerPart}.${decimalPartBeforeThreshold}0${subscriptCount}${formattedDecimalPartAfterThreshold}`
                    },
                  },
                }}
              >
                <TradingChart.CandlestickSeries
                  getBars={getBars}
                  subscribeBars={subscribeBars}
                  options={{
                    priceFormat: {
                      minMove: 0.00000000000000000001,
                    },
                  }}
                />
              </TradingChart.Root>
            </div>
            <div className={styles.scaleToggles()}>
              <ToggleGroup.Root
                type='single'
                size='s'
                toggleGroupType='text'
                color='primary'
                value={priceScaleMode}
                onValueChange={(value: typeof priceScaleMode) => {
                  setPriceScaleMode(value)
                }}
              >
                <ToggleGroup.Item value='Logarithmic'>
                  {t('chartIndicator.logScale')}
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        </Card.Header>
        <Card.Footer />
      </Card.Root>
    </div>
  )
})

export function BasketTradingChartCardSkeleton() {
  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <div className={styles.basketTradingChart()}>
          <div className={styles.toggles()}>
            <Skeleton width='6.25rem' height='1.25rem' />
            <Skeleton width='6.25rem' height='1.25rem' />
          </div>
          <Skeleton height='20.75rem' />
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

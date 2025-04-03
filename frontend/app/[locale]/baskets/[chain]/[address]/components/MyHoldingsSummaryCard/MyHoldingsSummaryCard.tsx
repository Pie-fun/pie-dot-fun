'use client'

import * as Card from '@/components/Card/Card'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import * as KeyValue from '@/components/KeyValue/KeyValue'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/MyHoldingsSummaryCard/MyHoldingsSummaryCard.css'
import { useTranslations } from 'next-intl'
import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import {
  ChainType,
  Currency,
  PnLPeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Pnl } from '@/components/Pnl/Pnl'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { getHoldingQuery } from '@/app/api/backend/v1/holding/queries'
import BigNumber from 'bignumber.js'
import { POLLING_INTERVAL } from '@/constants/common'
import { Typography } from '@/components/Typography/Typography'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { DECIMALS } from '@/constants/blockChains'
import { Box } from '@/components/Box/Box'
import { Icon } from '@/components/Icon/Icon'
import { IcLoadingCircleDashFill } from '@/components/Icon/Icons'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'

type MyHoldingsSummaryCardProps = {
  chain: ChainType
  holdingWalletAddress: string
  tokenAddress: string
  amount: number
}

export function MyHoldingsSummaryCard({
  chain,
  holdingWalletAddress,
  tokenAddress,
  amount,
}: Readonly<MyHoldingsSummaryCardProps>) {
  const t = useTranslations()

  const { data } = useQuery({
    ...getHoldingQuery({
      holding: getHoldingResource({
        chain: chain!,
        holdingWalletAddress: holdingWalletAddress!,
        tokenAddress: tokenAddress!,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
    refetchInterval: POLLING_INTERVAL.PRIMARY,
    throwOnError: false,
  })

  const { data: basketTokenMarket } = useSuspenseQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({
        address: tokenAddress,
        chain,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
  })

  const isLoading = data?.quantity?.rawAmount
    ? new BigNumber(data.quantity?.rawAmount).toNumber() !== amount
    : true

  const formattedAmount = new BigNumber(amount)
    .dividedBy(10 ** DECIMALS.BASKET_TOKEN)
    .toString()

  const balance = basketTokenMarket.value?.formattedAmount
    ? new BigNumber(basketTokenMarket.value?.formattedAmount)
        .multipliedBy(formattedAmount)
        .toString()
    : undefined

  const pnlValue =
    data?.pnl?.pnls[PnLPeriod.PNL_PERIOD_ALL_TIME].nominalValue?.formattedAmount

  const pnlPercentageValue =
    data?.pnl?.pnls[PnLPeriod.PNL_PERIOD_ALL_TIME].percentageChange?.value

  return (
    <Card.Root
      layout='fillWidth'
      background='primary'
      border='default'
      size='m'
    >
      <Card.Header>
        <div className={styles.keyValues()}>
          <KeyValue.Root layout='hug' orientation='horizontal' gap='l'>
            <KeyValue.Key>{t('holdings.balance')}</KeyValue.Key>
            <KeyValue.Value gap='m'>
              {balance && (
                <Typography layout='contents' color='primary'>
                  <CurrencyWithQuantity
                    currencyType='fiat'
                    size='s'
                    fontWeight='bold'
                    value={balance}
                  >
                    $
                  </CurrencyWithQuantity>
                </Typography>
              )}
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root layout='hug' orientation='horizontal' gap='l'>
            <KeyValue.Key>{t('holdings.pnl')}</KeyValue.Key>
            <KeyValue.Value gap='m'>
              {!isLoading && pnlValue && pnlPercentageValue && (
                <Pnl value={pnlValue} percentageValue={pnlPercentageValue} />
              )}
              {isLoading && (
                <Box gap='xxxs' align='center'>
                  <Icon size='s' color='tertiary' isSpin>
                    <IcLoadingCircleDashFill />
                  </Icon>
                  <Typography
                    typography='body2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {t('common.calculating')}
                  </Typography>
                </Box>
              )}
            </KeyValue.Value>
          </KeyValue.Root>
          <KeyValue.Root layout='hug' orientation='horizontal' gap='l'>
            <KeyValue.Key>{t('holdings.amount')}</KeyValue.Key>
            <KeyValue.Value gap='m'>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='primary'
              >
                {getFormattedNumber({
                  value: formattedAmount,
                  emptyValue: '0',
                })}
              </Typography>
            </KeyValue.Value>
          </KeyValue.Root>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function MyHoldingsSummaryCardSkeleton() {
  return (
    <Card.Root
      layout='fillWidth'
      background='primary'
      border='default'
      size='m'
    >
      <Card.Header>
        <Skeleton height='1.25rem' />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

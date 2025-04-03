'use client'

import * as Card from '@/components/Card/Card'
import * as KeyValue from '@/components/KeyValue/KeyValue'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useTranslations } from 'next-intl'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { Typography } from '@/components/Typography/Typography'
import { DateTime } from 'luxon'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { Icon } from '@/components/Icon/Icon'
import { IcInfoCircleOutline } from '@/components/Icon/Icons'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketInfoCard/BasketInfoCard.css'
import { Badge } from '@/components/Badge/Badge'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import { POLLING_INTERVAL } from '@/constants/common'

type BasketInfoCardProps = {
  chain: ChainType
  address: string
}

export function BasketInfoCard({
  chain,
  address,
}: Readonly<BasketInfoCardProps>) {
  const t = useTranslations()

  const { data: basketToken } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const { data: basketTokenMarket } = useSuspenseQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const age = basketToken.createTime
    ? Math.floor(
        DateTime.now().diff(DateTime.fromISO(basketToken.createTime), 'days')
          .days,
      )
    : '-'

  const marketCap = basketTokenMarket.marketCap?.formattedAmount

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.ageTitle')}</KeyValue.Key>
          <KeyValue.Value>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {t('format.dayAbbreviation', {
                day: age,
              })}
            </Typography>
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.supply')}</KeyValue.Key>
          <KeyValue.Value>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {getFormattedNumber({
                value: basketToken.totalSupply?.formattedAmount,
                options: { notation: 'compact', maximumFractionDigits: 2 },
              })}
            </Typography>
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.marketCap')}</KeyValue.Key>
          <KeyValue.Value>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {getFormattedNumber({
                value: marketCap,
                options: { notation: 'compact', maximumFractionDigits: 2 },
              })}
            </Typography>
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.holders')}</KeyValue.Key>
          <KeyValue.Value>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {getFormattedNumber({
                value: basketToken.totalHolders,
              })}
            </Typography>
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className={styles.tooltip()}>
                    {t('basketStatistics.mdd.title')}
                    <Icon size='xs'>
                      <IcInfoCircleOutline />
                    </Icon>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content align='start' color='default'>
                  <Typography typography='caption1' fontWeight='regular'>
                    {t('basketStatistics.mdd.tooltip')}
                  </Typography>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </KeyValue.Key>
          <KeyValue.Value>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {getFormattedNumber({
                value: basketTokenMarket.maximumDrawDown?.value,
                suffix: '%',
                options: {
                  maximumFractionDigits: 2,
                },
              })}
            </Typography>
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className={styles.tooltip()}>
                    {t('basketStatistics.streamingFee.title')}
                    <Icon size='xs'>
                      <IcInfoCircleOutline />
                    </Icon>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content align='start' color='default'>
                  <Typography typography='caption1' fontWeight='regular'>
                    {t('basketStatistics.streamingFee.tooltip')}
                  </Typography>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </KeyValue.Key>
          <KeyValue.Value>
            <div className={styles.streamingFee()}>
              <Badge
                size='s'
                shape='round'
                color='brand'
                badgeType='outline'
                align='center'
              >
                <Typography typography='caption2' fontWeight='regular'>
                  {t('basketStatistics.streamingFeeWaived')}
                </Typography>
              </Badge>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='primary'
              >
                {getFormattedNumber({
                  value: 0,
                  suffix: '%',
                  options: {
                    maximumFractionDigits: 2,
                  },
                })}
              </Typography>
            </div>
          </KeyValue.Value>
        </KeyValue.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketInfoCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.ageTitle')}</KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.supply')}</KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.marketCap')}</KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>{t('basketStatistics.holders')}</KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className={styles.tooltip()}>
                    {t('basketStatistics.mdd.title')}
                    <Icon size='xs'>
                      <IcInfoCircleOutline />
                    </Icon>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content align='start' color='default'>
                  <Typography typography='caption1' fontWeight='regular'>
                    {t('basketStatistics.mdd.tooltip')}
                  </Typography>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
        <KeyValue.Root gap='l' orientation='horizontal'>
          <KeyValue.Key>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className={styles.tooltip()}>
                    {t('basketStatistics.streamingFee.title')}
                    <Icon size='xs'>
                      <IcInfoCircleOutline />
                    </Icon>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content align='start' color='default'>
                  <Typography typography='caption1' fontWeight='regular'>
                    {t('basketStatistics.streamingFee.tooltip')}
                  </Typography>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </KeyValue.Key>
          <KeyValue.Value>
            <Skeleton width='6.25rem' height='1.3125rem' />
          </KeyValue.Value>
        </KeyValue.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

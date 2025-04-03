'use client'

import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import { IcInfoCircleOutline } from '@/components/Icon/Icons'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { useTranslations } from 'next-intl'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { getHoldingsStatisticsQuery } from '@/app/api/backend/v1/holding/queries'
import { getFilter, OperatorCondition } from '@/utils/getFilter'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useSolana } from '@/hooks/useSolana'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import BigNumber from 'bignumber.js'
import { POLLING_INTERVAL } from '@/constants/common'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useUser } from '@/libs/api/useUser'
import { getHoldingWalletResource } from '@/app/api/backend/v1/holdingWallet/resource'
import { WRAPPED_NATIVE_TOKEN_ADDRESSES } from '@/constants/blockChains'

export function TotalBalanceCard() {
  const t = useTranslations()
  const { connection } = useSolana()
  const { wallet, data } = useUser({ vmType: 'SVM' })

  const holdingWalletsFilter = getFilter(
    data?.wallets.map<OperatorCondition>(({ address, vmType }) => ({
      join: 'AND',
      field: 'holding_wallet',
      operator: '=',
      value: `"${getHoldingWalletResource({ address, vmType })}"`,
    })) || [],
  )

  const { data: holdingsStatistics } = useQuery({
    ...getHoldingsStatisticsQuery({
      filter: holdingWalletsFilter,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const { data: fungibleTokenMarket } = useSuspenseQuery({
    ...getFungibleTokenMarketQuery({
      fungibleTokenMarket: getFungibleTokenMarketResource({
        chain:
          process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
            ? 'SOLANA_DEVNET'
            : 'SOLANA',
        address: WRAPPED_NATIVE_TOKEN_ADDRESSES.SOLANA,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: wallet?.address!,
    }),
    enabled: !!wallet?.address,
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const totalMarketValue =
    holdingsStatistics?.totalMarketValues.filter(
      ({ currency }) => currency === Currency.CURRENCY_USDC,
    )[0]?.formattedAmount ?? '0'

  const depositBalance = new BigNumber(
    getLamportsToSol({ lamports: lamports || 0 }),
  )
    .multipliedBy(fungibleTokenMarket?.price?.formattedAmount || 0)
    .toString()

  const totalBalance = new BigNumber(totalMarketValue)
    .plus(depositBalance)
    .toString()

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Card.Title>{t('userProfile.totalValue.title')}</Card.Title>
                <Icon size='s' color='primary'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('userProfile.totalValue.tooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Typography typography='title1' fontWeight='bold' color='primary'>
          <CurrencyWithQuantity
            currencyType='fiat'
            size='l'
            value={totalBalance}
          >
            $
          </CurrencyWithQuantity>
        </Typography>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function TotalBalanceCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root background='default' border='default' size='s'>
      <Card.Header>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Card.Title>{t('userProfile.totalValue.title')}</Card.Title>
                <Icon size='s' color='primary'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('userProfile.totalValue.tooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Typography typography='title1' fontWeight='bold' color='primary'>
          <Skeleton width='10rem' height='2.375rem' />
        </Typography>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import { IcChevOutline, IcInfoCircleOutline } from '@/components/Icon/Icons'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { useTranslations } from 'next-intl'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { getFilter, OperatorCondition } from '@/utils/getFilter'
import {
  getHoldingsStatisticsQuery,
  listHoldingsQuery,
} from '@/app/api/backend/v1/holding/queries'
import { Pnl } from '@/components/Pnl/Pnl'
import { BasketTokenProfile } from '@/app/[locale]/profile/[displayName]/components/BasketTokenHoldingsCard/BasketTokenProfile'
import { Link } from '@/components/Link/Link'
import { generatePath } from '@/libs/react-router/react-router'
import { ROUTES } from '@/constants/routes'
import { getHoldingWalletResource } from '@/app/api/backend/v1/holdingWallet/resource'
import Observer from '@/components/Observer/Observer'
import {
  Currency,
  PnLPeriod,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useUser } from '@/libs/api/useUser'
import { getIdentifierFromBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'

export function BasketTokenHoldingsCard() {
  const t = useTranslations()
  const { data } = useUser({ vmType: 'SVM' })

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
  })

  const totalMarketValue =
    holdingsStatistics?.totalMarketValues.filter(
      ({ currency }) => currency === Currency.CURRENCY_USDC,
    )[0]?.formattedAmount ?? '0'

  const totalPnlValue =
    holdingsStatistics?.totalPnls.filter(
      ({ nominalValue }) => nominalValue?.currency === Currency.CURRENCY_USDC,
    )[0]?.nominalValue?.formattedAmount ?? '0'

  const totalPnlPercentageValue =
    holdingsStatistics?.totalPnls.filter(
      ({ nominalValue }) => nominalValue?.currency === Currency.CURRENCY_USDC,
    )[0]?.percentageChange?.value ?? '0'

  const listHoldingsFilter = getFilter([
    ...(data?.wallets.map<OperatorCondition>(({ address, vmType }) => ({
      join: 'AND',
      field: 'holding_wallet',
      operator: '=',
      value: `"${getHoldingWalletResource({ address, vmType })}"`,
    })) || []),
    {
      join: 'AND',
      field: 'quantity',
      operator: '>',
      value: '"0"',
    },
  ])

  const {
    data: listHoldings,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...listHoldingsQuery({
      currency: Currency.CURRENCY_USDC,
      filter: listHoldingsFilter,
    }),
  })

  const holdings = listHoldings?.pages.flatMap(({ holdings }) => holdings)

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Card.Title>
                  {t('userProfile.currentBasketValue.title')}
                </Card.Title>
                <Icon size='s' color='primary'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('userProfile.currentBasketValue.tooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Box layout='fillWidth' orientation='vertical' gap='xxs'>
          <Typography typography='title2' fontWeight='regular' color='primary'>
            <CurrencyWithQuantity
              currencyType='fiat'
              size='l'
              value={totalMarketValue}
            >
              $
            </CurrencyWithQuantity>
          </Typography>
          <Box
            layout='fillWidth'
            orientation='horizontal'
            align='spaceBetweenCenter'
          >
            <Typography
              typography='caption2'
              fontWeight='regular'
              color='tertiary'
            >
              {t('holdings.pnl')}
            </Typography>
            <Pnl
              value={totalPnlValue ?? '0'}
              percentageValue={totalPnlPercentageValue ?? '0'}
            />
          </Box>
        </Box>
        {holdings?.map(({ basketToken, marketValue, pnl, quantity, chain }) => {
          const pnlValue =
            pnl?.pnls[PnLPeriod.PNL_PERIOD_ALL_TIME].nominalValue
              ?.formattedAmount
          const pnlPercentageValue =
            pnl?.pnls[PnLPeriod.PNL_PERIOD_ALL_TIME].percentageChange?.value

          return (
            <Card.Root
              key={basketToken}
              background='default'
              border='default'
              size='m'
            >
              <Card.Header>
                <Box layout='fillWidth' orientation='vertical' gap='xxxs'>
                  <Link
                    href={generatePath(ROUTES['/BASKETS/:CHAIN/:ADDRESS'], {
                      chain,
                      address: getIdentifierFromBasketTokenResource({
                        basketToken,
                      }).address,
                    })}
                  >
                    <Box
                      layout='fillWidth'
                      orientation='horizontal'
                      align='spaceBetweenCenter'
                    >
                      <BasketTokenProfile
                        basketToken={basketToken}
                        chain={chain}
                      />
                      <Icon size='m' rotate={90}>
                        <IcChevOutline />
                      </Icon>
                    </Box>
                  </Link>
                  <Box layout='fillWidth' orientation='vertical' gap='xxs'>
                    <Box
                      layout='fillWidth'
                      orientation='horizontal'
                      align='spaceBetweenCenter'
                    >
                      <Typography
                        typography='caption2'
                        fontWeight='regular'
                        color='tertiary'
                      >
                        {t('common.value')}
                      </Typography>
                      <Typography
                        typography='body2'
                        fontWeight='bold'
                        color='primary'
                      >
                        <CurrencyWithQuantity
                          currencyType='fiat'
                          value={marketValue?.formattedAmount}
                        >
                          $
                        </CurrencyWithQuantity>
                      </Typography>
                    </Box>
                    <Box
                      layout='fillWidth'
                      orientation='horizontal'
                      align='spaceBetweenCenter'
                    >
                      <Typography
                        typography='caption2'
                        fontWeight='regular'
                        color='tertiary'
                      >
                        {t('holdings.pnl')}
                      </Typography>
                      {pnlValue && pnlPercentageValue && (
                        <Pnl
                          value={pnlValue}
                          percentageValue={pnlPercentageValue}
                        />
                      )}
                    </Box>
                    <Box
                      layout='fillWidth'
                      orientation='horizontal'
                      align='spaceBetweenCenter'
                    >
                      <Typography
                        typography='caption2'
                        fontWeight='regular'
                        color='tertiary'
                      >
                        {t('common.amount')}
                      </Typography>
                      <Typography
                        typography='body2'
                        fontWeight='regular'
                        color='primary'
                      >
                        {quantity?.formattedAmount}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card.Header>
              <Card.Footer />
            </Card.Root>
          )
        })}
        <Observer condition={hasNextPage} callback={fetchNextPage} />
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketTokenHoldingsCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Card.Title>
                  {t('userProfile.currentBasketValue.title')}
                </Card.Title>
                <Icon size='s' color='primary'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('userProfile.currentBasketValue.tooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Skeleton width='10rem' height='2.5rem' />
        <Card.Root background='default' border='default' size='m'>
          <Card.Header>
            <Box layout='fillWidth' orientation='vertical' gap='xxxs'>
              <Box
                layout='fillWidth'
                orientation='horizontal'
                align='spaceBetweenCenter'
              >
                <Skeleton width='10rem' height='2.5rem' />
              </Box>
              <Box layout='fillWidth' orientation='vertical' gap='xxs'>
                <Box
                  layout='fillWidth'
                  orientation='horizontal'
                  align='spaceBetweenCenter'
                >
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {t('common.balance')}
                  </Typography>
                  <Skeleton width='7.5rem' height='1.25rem' />
                </Box>
                <Box
                  layout='fillWidth'
                  orientation='horizontal'
                  align='spaceBetweenCenter'
                >
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {t('holdings.pnl')}
                  </Typography>
                  <Skeleton width='7.5rem' height='1.25rem' />
                </Box>
                <Box
                  layout='fillWidth'
                  orientation='horizontal'
                  align='spaceBetweenCenter'
                >
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='tertiary'
                  >
                    {t('common.amount')}
                  </Typography>
                  <Skeleton width='7.5rem' height='1.25rem' />
                </Box>
              </Box>
            </Box>
          </Card.Header>
          <Card.Footer />
        </Card.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

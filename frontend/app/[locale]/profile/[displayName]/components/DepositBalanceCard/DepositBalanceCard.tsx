'use client'

import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import {
  IcDownwardArrawInCutcircleOutline,
  IcInfoCircleOutline,
  IcSolanaFixedColorFill,
  IcUpperArrawInCutcircleOutline,
} from '@/components/Icon/Icons'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { useTranslations } from 'next-intl'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { SYMBOL_FROM_CHAIN_TYPE } from '@/constants/blockChains'
import { Deposit } from '@/app/components/Deposit/Deposit'
import { Button } from '@/components/Button/Button'
import { Withdraw } from '@/app/[locale]/profile/[displayName]/components/Withdraw/Withdraw'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { SolanaDepositBalanceCard } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/SolanaDepositBalanceCard'
import { TotalDepositBalance } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/TotalDepositBalance'
import { EthDepositBalanceCard } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/EthDepositBalanceCard'
import { BaseEthDepositBalanceCard } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/BaseEthDepositBalanceCard'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react'

type DepositBalance = {
  sol: string
  eth: string
  baseEth: string
}

type DepositBalanceContextProps = {
  depositBalance: DepositBalance
  setDepositBalance: Dispatch<SetStateAction<DepositBalance>>
}

export const DepositBalanceContext = createContext<DepositBalanceContextProps>(
  {} as DepositBalanceContextProps,
)

export function DepositBalanceCard() {
  const t = useTranslations()
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  const [depositBalance, setDepositBalance] = useState<DepositBalance>({
    sol: '0',
    eth: '0',
    baseEth: '0',
  })

  const value = useMemo(
    () => ({ depositBalance, setDepositBalance }),
    [depositBalance, setDepositBalance],
  )

  return (
    <DepositBalanceContext.Provider value={value}>
      <Card.Root background='default' border='default' size='m'>
        <Card.Header>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Box orientation='horizontal' gap='xxs' align='center'>
                  <Card.Title>
                    {t('userProfile.depositBalance.title')}
                  </Card.Title>
                  <Icon size='s' color='primary'>
                    <IcInfoCircleOutline />
                  </Icon>
                </Box>
              </Tooltip.Trigger>
              <Tooltip.Content align='center' color='default'>
                <Typography typography='caption1' fontWeight='regular'>
                  {t('userProfile.depositBalance.tooltip')}
                </Typography>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Box
            layout='fillWidth'
            orientation={isDesktop ? 'horizontal' : 'vertical'}
            gap='m'
          >
            <TotalDepositBalance />
            <Box
              layout='fillWidth'
              orientation='horizontal'
              gap='m'
              align='end'
            >
              <Deposit
                trigger={
                  <Typography
                    layout={isDesktop ? 'hug' : 'fillWidth'}
                    typography='body1'
                    fontWeight='bold'
                  >
                    <Button
                      layout={isDesktop ? 'hug' : 'fillWidth'}
                      buttonType='solid'
                      shape='square'
                      color='primary'
                      size='m'
                    >
                      {t('common.deposit')}
                      <Icon>
                        <IcDownwardArrawInCutcircleOutline />
                      </Icon>
                    </Button>
                  </Typography>
                }
              />
              <Withdraw
                trigger={
                  <Typography
                    layout={isDesktop ? 'hug' : 'fillWidth'}
                    typography='body1'
                    fontWeight='bold'
                  >
                    <Button
                      layout={isDesktop ? 'hug' : 'fillWidth'}
                      buttonType='solid'
                      shape='square'
                      color='secondary'
                      size='m'
                    >
                      {t('common.withdraw')}
                      <Icon>
                        <IcUpperArrawInCutcircleOutline />
                      </Icon>
                    </Button>
                  </Typography>
                }
              />
            </Box>
          </Box>
          <SolanaDepositBalanceCard />
          <BaseEthDepositBalanceCard />
          <EthDepositBalanceCard />
        </Card.Header>
        <Card.Footer />
      </Card.Root>
    </DepositBalanceContext.Provider>
  )
}

export function DepositBalanceCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Card.Title>{t('userProfile.depositBalance.title')}</Card.Title>
                <Icon size='s' color='primary'>
                  <IcInfoCircleOutline />
                </Icon>
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content align='center' color='default'>
              <Typography typography='caption1' fontWeight='regular'>
                {t('userProfile.depositBalance.tooltip')}
              </Typography>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Box
          layout='fillWidth'
          orientation='horizontal'
          align='spaceBetweenCenter'
        >
          <Typography typography='title2' fontWeight='regular' color='primary'>
            <Skeleton width='10rem' height='2.5rem' />
          </Typography>
        </Box>
        <Card.Root background='default' border='default' size='m'>
          <Card.Header>
            <Box layout='fillWidth' orientation='horizontal' gap='xxxs'>
              <Box
                layout='fillWidth'
                orientation='vertical'
                align='spaceBetween'
              >
                <Typography
                  typography='body2'
                  fontWeight='regular'
                  color='primary'
                >
                  <Box orientation='horizontal' gap='xxs' align='center'>
                    <Icon>
                      <IcSolanaFixedColorFill />
                    </Icon>
                    {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                  </Box>
                </Typography>
              </Box>
              <Box orientation='vertical' gap='xxs' align='end'>
                <Skeleton width='7.5rem' height='1.25rem' />
                <Skeleton width='7.5rem' height='1.25rem' />
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

'use client'

import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import { IcEthereumFixedColorFill } from '@/components/Icon/Icons'
import { useUser } from '@/libs/api/useUser'
import { useBalance } from 'wagmi'
import { EthereumAddress } from '@/types/utility'
import { base, baseSepolia } from 'viem/chains'
import BigNumber from 'bignumber.js'
import { formatEther } from 'viem'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { useTranslations } from 'next-intl'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import { WRAPPED_NATIVE_TOKEN_ADDRESSES } from '@/constants/blockChains'
import { Currency as CurrencyPrimitive } from '@/components/Currency/Currency'
import { useContext, useEffect } from 'react'
import { DepositBalanceContext } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/DepositBalanceCard'

export function BaseEthDepositBalanceCard() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'EVM' })
  const { setDepositBalance } = useContext(DepositBalanceContext)

  const { data: fungibleTokenMarket } = useSuspenseQuery({
    ...getFungibleTokenMarketQuery({
      fungibleTokenMarket: getFungibleTokenMarketResource({
        chain:
          process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
            ? 'BASE_SEPOLIA'
            : 'BASE',
        address: WRAPPED_NATIVE_TOKEN_ADDRESSES.BASE,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
  })

  const { data: balance } = useBalance({
    address: wallet?.address! as EthereumAddress,
    chainId:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? baseSepolia.id
        : base.id,
    query: {
      enabled: !!wallet?.address,
    },
  })

  const nativeTokenValue = balance?.value ? formatEther(balance.value) : 0

  const calculatedBalance = new BigNumber(nativeTokenValue)
    .multipliedBy(fungibleTokenMarket?.price?.formattedAmount || 0)
    .toString()

  useEffect(() => {
    setDepositBalance((prev) =>
      prev.baseEth === calculatedBalance
        ? prev
        : { ...prev, baseEth: calculatedBalance },
    )
  }, [calculatedBalance, setDepositBalance])

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Box layout='fillWidth' orientation='horizontal' gap='xxxs'>
          <Box layout='fillWidth' orientation='vertical' align='spaceBetween'>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <CurrencyPrimitive
                  currencyType='crypto'
                  fontWeight='regular'
                  size='s'
                  chain={ChainType.BASE}
                >
                  <Icon size='s' shape='circle'>
                    <IcEthereumFixedColorFill />
                  </Icon>
                </CurrencyPrimitive>
                {t('currency.chainTicker', {
                  chain: 'Base',
                  ticker: 'ETH',
                })}
              </Box>
            </Typography>
          </Box>
          <Box orientation='vertical' gap='xxs' align='end'>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              {nativeTokenValue}
            </Typography>
            <Typography
              typography='body2'
              fontWeight='regular'
              color='secondary'
            >
              <CurrencyWithQuantity
                currencyType='fiat'
                value={calculatedBalance}
              >
                $
              </CurrencyWithQuantity>
            </Typography>
          </Box>
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

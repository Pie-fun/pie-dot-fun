'use client'

import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import { IcSolanaFixedColorFill } from '@/components/Icon/Icons'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useSolana } from '@/hooks/useSolana'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import {
  WRAPPED_NATIVE_TOKEN_ADDRESSES,
  SYMBOL_FROM_CHAIN_TYPE,
} from '@/constants/blockChains'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import BigNumber from 'bignumber.js'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useUser } from '@/libs/api/useUser'
import { useContext, useEffect } from 'react'
import { DepositBalanceContext } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/DepositBalanceCard'

export function SolanaDepositBalanceCard() {
  const { connection } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { setDepositBalance } = useContext(DepositBalanceContext)

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
  })

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: wallet?.address!,
    }),
    enabled: !!wallet?.address,
  })

  const nativeTokenValue = getLamportsToSol({ lamports: lamports || 0 })

  const calculatedBalance = new BigNumber(nativeTokenValue)
    .multipliedBy(fungibleTokenMarket?.price?.formattedAmount || 0)
    .toString()

  useEffect(() => {
    setDepositBalance((prev) =>
      prev.sol === calculatedBalance
        ? prev
        : { ...prev, sol: calculatedBalance },
    )
  }, [calculatedBalance, setDepositBalance])

  return (
    <Card.Root background='default' border='default' size='m'>
      <Card.Header>
        <Box layout='fillWidth' orientation='horizontal' gap='xxxs'>
          <Box layout='fillWidth' orientation='vertical' align='spaceBetween'>
            <Typography typography='body2' fontWeight='regular' color='primary'>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Icon size='s' shape='circle'>
                  <IcSolanaFixedColorFill />
                </Icon>
                {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
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

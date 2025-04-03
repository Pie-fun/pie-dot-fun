'use client'

import { Typography } from '@/components/Typography/Typography'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import BigNumber from 'bignumber.js'
import { useContext } from 'react'
import { DepositBalanceContext } from '@/app/[locale]/profile/[displayName]/components/DepositBalanceCard/DepositBalanceCard'

export function TotalDepositBalance() {
  const { depositBalance } = useContext(DepositBalanceContext)

  const calculatedBalance = Object.values(depositBalance)
    .reduce((acc, balance) => {
      const bigNumberBalance = new BigNumber(balance)

      return acc.plus(bigNumberBalance.isNaN() ? 0 : bigNumberBalance)
    }, new BigNumber(0))
    .toString()

  return (
    <Typography typography='title2' fontWeight='regular' color='primary'>
      <CurrencyWithQuantity
        currencyType='fiat'
        size='l'
        value={calculatedBalance}
      >
        $
      </CurrencyWithQuantity>
    </Typography>
  )
}

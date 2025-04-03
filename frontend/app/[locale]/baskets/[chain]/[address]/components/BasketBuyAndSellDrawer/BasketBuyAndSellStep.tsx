'use client'

import { ComponentProps, useEffect, useMemo } from 'react'
import { BasketBuyAndSell } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketBuyAndSell'
import { useFormContext, useWatch } from 'react-hook-form'
import { useWizard } from 'react-use-wizard'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'

type BasketBuyAndSellStepProps = {
  chain: ComponentProps<typeof BasketBuyAndSell>['chain']
  address: ComponentProps<typeof BasketBuyAndSell>['address']
  defaultState?: ComponentProps<typeof BasketBuyAndSell>['defaultState']
}

export function BasketBuyAndSellStep({
  chain,
  address,
  defaultState,
}: Readonly<BasketBuyAndSellStepProps>) {
  const form = useFormContext<BuyAndSellSchema>()
  const { error } = useWatch({ control: form.control })
  const { goToStep } = useWizard()

  const errorSteps = useMemo(() => {
    return {
      insufficientBalance: 1,
      rebalancing: 2,
      slippage: 3,
      unknown: 4,
      partialTrade: 5,
      bundleRetrySuccess: 6,
    } satisfies Record<NonNullable<BuyAndSellSchema['error']>, number>
  }, [])

  useEffect(() => {
    if (error) {
      goToStep(errorSteps[error])
    }

    return () => {
      form.setValue('error', undefined)
    }
  }, [error, errorSteps, form, goToStep])

  return (
    <BasketBuyAndSell
      chain={chain}
      address={address}
      defaultState={defaultState}
    />
  )
}

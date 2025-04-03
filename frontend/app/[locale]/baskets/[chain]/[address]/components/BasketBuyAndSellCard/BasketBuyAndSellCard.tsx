'use client'

import * as Card from '@/components/Card/Card'
import { BasketBuyAndSell } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketBuyAndSell'
import { ComponentProps } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { InsufficientBalanceErrorDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/InsufficientBalanceErrorDialog'
import { RebalancingErrorDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/RebalancingErrorDialog'
import { SlippageErrorDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/SlippageErrorDialog'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { UnexpectedErrorDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/UnexpectedErrorDialog'
import { PartialTradeDetectedErrorDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/PartialTradeDetectedErrorDialog'
import { BundleRetrySuccessDialog } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/BundleRetrySuccessDialog'

type BasketBuyAndSellCardProps = {
  chain: ComponentProps<typeof BasketBuyAndSell>['chain']
  address: ComponentProps<typeof BasketBuyAndSell>['address']
}

export function BasketBuyAndSellCard({
  chain,
  address,
}: Readonly<BasketBuyAndSellCardProps>) {
  const form = useFormContext<BuyAndSellSchema>()
  const { error } = useWatch({ control: form.control })

  const resetError = () => {
    form.setValue('error', undefined)
  }

  return (
    <>
      <Card.Root layout='fillWidth' border='default' size='m'>
        <Card.Header>
          <BasketBuyAndSell chain={chain} address={address} />
        </Card.Header>
        <Card.Footer />
      </Card.Root>
      <InsufficientBalanceErrorDialog
        open={error === 'insufficientBalance'}
        onOpenChange={resetError}
      />
      <RebalancingErrorDialog
        open={error === 'rebalancing'}
        onOpenChange={resetError}
      />
      <SlippageErrorDialog
        open={error === 'slippage'}
        onOpenChange={resetError}
      />
      <UnexpectedErrorDialog
        chain={chain}
        address={address}
        open={error === 'unknown'}
        onOpenChange={resetError}
      />
      <PartialTradeDetectedErrorDialog
        open={error === 'partialTrade'}
        onOpenChange={resetError}
      />
      <BundleRetrySuccessDialog
        open={error === 'bundleRetrySuccess'}
        onOpenChange={resetError}
      />
    </>
  )
}

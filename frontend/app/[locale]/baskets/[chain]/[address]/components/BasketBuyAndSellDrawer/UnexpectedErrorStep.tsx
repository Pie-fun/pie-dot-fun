'use client'

import { ComponentProps, useEffect, useRef } from 'react'
import { BasketBuyAndSell } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketBuyAndSell'
import { useFormContext, useWatch } from 'react-hook-form'
import { useWizard } from 'react-use-wizard'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { useSolana } from '@/hooks/useSolana'
import { useUser } from '@/libs/api/useUser'
import { useQuery } from '@tanstack/react-query'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { getUserFundQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { BN } from '@ao-labs/pie-dot-fun-solana'
import { PublicKey } from '@solana/web3.js'
import { DUMMY_SVM_ADDRESS } from '@/constants/blockChains'
import { getHoldingQuery } from '@/app/api/backend/v1/holding/queries'
import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline } from '@/components/Icon/Icons'
import * as UnexpectedErrorPrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/UnexpectedErrorPrimitive'
import { POLLING_INTERVAL } from '@/constants/common'
import * as Drawer from '@/components/Drawer/Drawer'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'

type UnexpectedErrorStepProps = {
  chain: ComponentProps<typeof BasketBuyAndSell>['chain']
  address: ComponentProps<typeof BasketBuyAndSell>['address']
}

export function UnexpectedErrorStep({
  chain,
  address,
}: Readonly<UnexpectedErrorStepProps>) {
  const form = useFormContext<BuyAndSellSchema>()
  const { connection, cluster } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { goToStep } = useWizard()
  const initialQuantity = useRef('')
  const { error } = useWatch({ control: form.control })
  const isErrorOccured = error === 'unknown'

  const { data: basketToken } = useQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const { data: userFund } = useQuery({
    ...getUserFundQuery({
      basketId: new BN(basketToken?.onchainId!),
      cluster: cluster.network,
      connection,
      user: new PublicKey(wallet?.address ?? DUMMY_SVM_ADDRESS),
    }),
    enabled: !!basketToken?.onchainId && !!wallet?.address && isErrorOccured,
    refetchInterval: POLLING_INTERVAL.PRIMARY,
  })

  const { data: quantity } = useQuery({
    ...getHoldingQuery({
      holding: getHoldingResource({
        chain: chain!,
        holdingWalletAddress: wallet?.address!,
        tokenAddress: basketToken?.address!,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
    enabled:
      !!chain && !!wallet?.address && !!basketToken?.address && isErrorOccured,
    refetchInterval: POLLING_INTERVAL.PRIMARY,
    throwOnError: false,
    select: (data) => data?.quantity,
  })

  const isPartialDetected = userFund?.components.some(
    ({ amount }) => amount.toNumber() > 0,
  )

  useEffect(() => {
    if (isPartialDetected && isErrorOccured) {
      form.setValue('error', 'partialTrade')

      sendGTMEvent({
        event: 'tradingerror_modal_view',
        action: 'revisit',
        error: 'partial trade',
      })
    }
  }, [form, isErrorOccured, isPartialDetected])

  useEffect(() => {
    if (isErrorOccured) {
      initialQuantity.current = quantity?.formattedAmount ?? ''
    }
  }, [isErrorOccured, quantity?.formattedAmount])

  useEffect(() => {
    if (isErrorOccured && quantity) {
      const isChanged =
        initialQuantity.current &&
        initialQuantity.current !== quantity.formattedAmount

      if (isChanged) {
        form.setValue('error', 'bundleRetrySuccess')
        initialQuantity.current = ''
      }
    }
  }, [form, isErrorOccured, quantity])

  return (
    <>
      <Button
        buttonType='text'
        shape='square'
        color='secondary'
        size='squareS'
        onClick={() => goToStep(0)}
      >
        <Icon size='s' rotate={-90}>
          <IcArrowOutline />
        </Icon>
      </Button>
      <UnexpectedErrorPrimitive.Content>
        <UnexpectedErrorPrimitive.Title />
        <UnexpectedErrorPrimitive.Description />
        <UnexpectedErrorPrimitive.Support />
        <Drawer.Close asChild>
          <UnexpectedErrorPrimitive.CloseButton />
        </Drawer.Close>
      </UnexpectedErrorPrimitive.Content>
    </>
  )
}

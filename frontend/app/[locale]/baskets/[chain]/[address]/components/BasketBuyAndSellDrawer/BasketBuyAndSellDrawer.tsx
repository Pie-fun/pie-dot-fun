'use client'

import { BasketBuyAndSell } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketBuyAndSell'
import { Button } from '@/components/Button/Button'
import * as Drawer from '@/components/Drawer/Drawer'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/BasketBuyAndSellDrawer.css'
import { ComponentProps, useRef, useState } from 'react'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { BasketBuyAndSellStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/BasketBuyAndSellStep'
import { Wizard } from 'react-use-wizard'
import { InsufficientBalanceErrorStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/InsufficientBalanceErrorStep'
import { RebalancingErrorStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/RebalancingErrorStep'
import { SlippageErrorStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/SlippageErrorStep'
import { AnimatePresence } from 'framer-motion'
import AnimatedStep from '@/app/components/AnimatedStep/AnimatedStep'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { UnexpectedErrorStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/UnexpectedErrorStep'
import { PartialTradeDetectedErrorStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/PartialTradeDetectedErrorStep'
import { BundleRetrySuccessStep } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/BundleRetrySuccessStep'

type BasketBuyAndSellDrawerProps = {
  chain: ComponentProps<typeof BasketBuyAndSell>['chain']
  address: ComponentProps<typeof BasketBuyAndSell>['address']
}

export function BasketBuyAndSellDrawer({
  chain,
  address,
}: Readonly<BasketBuyAndSellDrawerProps>) {
  const t = useTranslations()
  const [defaultState, setDefaultState] =
    useState<ComponentProps<typeof BasketBuyAndSell>['defaultState']>(undefined)
  const form = useFormContext<BuyAndSellSchema>()
  const previousStep = useRef<number>(0)

  return (
    <Drawer.Root onOpenChange={() => form.setValue('error', undefined)}>
      <div className={styles.triggers()}>
        <Drawer.Trigger asChild>
          <Button
            layout='fillWidth'
            buttonType='solid'
            color='alertPrimary'
            size='m'
            shape='round'
            onClick={() => setDefaultState('sell')}
          >
            <Typography typography='body1' fontWeight='bold'>
              {t('common.sell')}
            </Typography>
          </Button>
        </Drawer.Trigger>
        <Drawer.Trigger asChild>
          <Button
            layout='fillWidth'
            buttonType='solid'
            color='infoPrimary'
            size='m'
            shape='round'
            onClick={() => setDefaultState('buy')}
          >
            <Typography typography='body1' fontWeight='bold'>
              {t('common.buy')}
            </Typography>
          </Button>
        </Drawer.Trigger>
      </div>
      <Drawer.Content>
        <Drawer.Body>
          <Drawer.Title isHide>
            {t('common.buy')}
            {t('common.sell')}
          </Drawer.Title>
          <div className={styles.content()}>
            <Wizard wrapper={<AnimatePresence initial={false} mode='wait' />}>
              <AnimatedStep previousStep={previousStep}>
                <BasketBuyAndSellStep
                  chain={chain}
                  address={address}
                  defaultState={defaultState}
                />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <InsufficientBalanceErrorStep />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <RebalancingErrorStep />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <SlippageErrorStep />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <UnexpectedErrorStep chain={chain} address={address} />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <PartialTradeDetectedErrorStep />
              </AnimatedStep>
              <AnimatedStep previousStep={previousStep}>
                <BundleRetrySuccessStep />
              </AnimatedStep>
            </Wizard>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

'use client'

import { useWizard } from 'react-use-wizard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline } from '@/components/Icon/Icons'
import * as PartialTradePrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/PartialTradePrimitive/PartialTradePrimitive'

export function PartialTradeDetectedErrorStep() {
  const { goToStep } = useWizard()

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
      <PartialTradePrimitive.Title />
      <PartialTradePrimitive.Description />
    </>
  )
}

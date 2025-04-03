'use client'

import { useWizard } from 'react-use-wizard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline, IcCheckOutline } from '@/components/Icon/Icons'
import * as UnexpectedErrorPrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/UnexpectedErrorPrimitive'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import * as Drawer from '@/components/Drawer/Drawer'

export function BundleRetrySuccessStep() {
  const t = useTranslations()
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
      <UnexpectedErrorPrimitive.SuccessTitle />
      <UnexpectedErrorPrimitive.Content>
        <Icon size='xl' color='infoPrimary'>
          <IcCheckOutline />
        </Icon>
        <Drawer.Description>
          <UnexpectedErrorPrimitive.Description />
        </Drawer.Description>
      </UnexpectedErrorPrimitive.Content>
      <Drawer.Close asChild>
        <Typography layout='contents' fontWeight='bold'>
          <Button
            layout='fillWidth'
            buttonType='solid'
            color='primary'
            size='m'
            shape='square'
          >
            {t('common.close')}
          </Button>
        </Typography>
      </Drawer.Close>
    </>
  )
}

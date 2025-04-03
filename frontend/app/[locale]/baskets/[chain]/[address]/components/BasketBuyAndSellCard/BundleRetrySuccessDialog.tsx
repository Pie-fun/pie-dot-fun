import * as Dialog from '@/components/Dialog/Dialog'
import { ComponentProps } from 'react'
import * as UnexpectedErrorPrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/UnexpectedErrorPrimitive'
import { Icon } from '@/components/Icon/Icon'
import { IcCheckOutline } from '@/components/Icon/Icons'
import { Button } from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'

export function BundleRetrySuccessDialog({
  ...props
}: ComponentProps<typeof Dialog.Root>) {
  const t = useTranslations()

  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            <UnexpectedErrorPrimitive.SuccessTitle />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <UnexpectedErrorPrimitive.Content>
            <Icon size='xl' color='infoPrimary'>
              <IcCheckOutline />
            </Icon>
            <Dialog.Description>
              <UnexpectedErrorPrimitive.Description />
            </Dialog.Description>
          </UnexpectedErrorPrimitive.Content>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
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
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

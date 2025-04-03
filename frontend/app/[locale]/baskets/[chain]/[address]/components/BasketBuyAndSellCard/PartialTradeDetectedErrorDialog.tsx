import * as Dialog from '@/components/Dialog/Dialog'
import { ComponentProps } from 'react'
import * as PartialTradePrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/PartialTradePrimitive/PartialTradePrimitive'

export function PartialTradeDetectedErrorDialog({
  ...props
}: ComponentProps<typeof Dialog.Root>) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            <PartialTradePrimitive.Title />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <PartialTradePrimitive.Description />
        </Dialog.Body>
        <Dialog.Footer />
      </Dialog.Content>
    </Dialog.Root>
  )
}

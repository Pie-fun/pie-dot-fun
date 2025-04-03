import * as Dialog from '@/components/Dialog/Dialog'
import { ComponentProps } from 'react'
import * as InsufficientBalanceError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/InsufficientBalanceError'

export function InsufficientBalanceErrorDialog({
  ...props
}: ComponentProps<typeof Dialog.Root>) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            <InsufficientBalanceError.Title />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <InsufficientBalanceError.Content>
            <Dialog.Description>
              <InsufficientBalanceError.Description />
            </Dialog.Description>
          </InsufficientBalanceError.Content>
        </Dialog.Body>
        <Dialog.Footer>
          <InsufficientBalanceError.Buttons>
            <InsufficientBalanceError.TopupButton />
            <Dialog.Close asChild>
              <InsufficientBalanceError.CloseButton />
            </Dialog.Close>
          </InsufficientBalanceError.Buttons>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

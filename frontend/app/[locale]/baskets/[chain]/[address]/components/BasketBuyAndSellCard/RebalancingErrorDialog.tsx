import * as Dialog from '@/components/Dialog/Dialog'
import { ComponentProps } from 'react'
import * as RebalancingError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/RebalancingError'

export function RebalancingErrorDialog({
  ...props
}: ComponentProps<typeof Dialog.Root>) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            <RebalancingError.Title />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <RebalancingError.Content>
            <Dialog.Description>
              <RebalancingError.Description />
            </Dialog.Description>
          </RebalancingError.Content>
        </Dialog.Body>
        <Dialog.Footer>
          <RebalancingError.Buttons>
            <Dialog.Close asChild>
              <RebalancingError.CloseButton />
            </Dialog.Close>
          </RebalancingError.Buttons>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

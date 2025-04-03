import * as Dialog from '@/components/Dialog/Dialog'
import { ComponentProps } from 'react'
import * as SlippageError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/SlippageError'
import { useFormContext } from 'react-hook-form'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'

export function SlippageErrorDialog({
  ...props
}: ComponentProps<typeof Dialog.Root>) {
  const form = useFormContext<BuyAndSellSchema>()

  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            <SlippageError.Title />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <SlippageError.Content>
            <Dialog.Description>
              <SlippageError.Description />
            </Dialog.Description>
          </SlippageError.Content>
        </Dialog.Body>
        <Dialog.Footer>
          <SlippageError.Buttons>
            <Dialog.Close asChild>
              <SlippageError.IncreaseSlippageButton
                onClick={() => form.setValue('isShowSlippage', true)}
              />
            </Dialog.Close>
            <Dialog.Close asChild>
              <SlippageError.CloseButton />
            </Dialog.Close>
          </SlippageError.Buttons>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

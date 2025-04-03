import * as SlippageError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/SlippageError'
import * as Drawer from '@/components/Drawer/Drawer'
import { useFormContext } from 'react-hook-form'
import { useWizard } from 'react-use-wizard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline } from '@/components/Icon/Icons'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'

export function SlippageErrorStep() {
  const form = useFormContext<BuyAndSellSchema>()
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
      <SlippageError.Content>
        <SlippageError.Title />
        <SlippageError.Description />
        <SlippageError.Buttons>
          <SlippageError.IncreaseSlippageButton
            onClick={() => {
              form.setValue('isShowSlippage', true)
              goToStep(0)
            }}
          />
          <Drawer.Close asChild>
            <SlippageError.CloseButton />
          </Drawer.Close>
        </SlippageError.Buttons>
      </SlippageError.Content>
    </>
  )
}

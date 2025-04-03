import * as InsufficientBalanceError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/InsufficientBalanceError'
import * as Drawer from '@/components/Drawer/Drawer'
import { useWizard } from 'react-use-wizard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline } from '@/components/Icon/Icons'

export function InsufficientBalanceErrorStep() {
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
      <InsufficientBalanceError.Content>
        <InsufficientBalanceError.Title />
        <InsufficientBalanceError.Description />
        <InsufficientBalanceError.Buttons>
          <InsufficientBalanceError.TopupButton />
          <Drawer.Close asChild>
            <InsufficientBalanceError.CloseButton />
          </Drawer.Close>
        </InsufficientBalanceError.Buttons>
      </InsufficientBalanceError.Content>
    </>
  )
}

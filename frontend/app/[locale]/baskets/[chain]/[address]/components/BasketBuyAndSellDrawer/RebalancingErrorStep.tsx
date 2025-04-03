import * as RebalancingError from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/RebalancingError'
import * as Drawer from '@/components/Drawer/Drawer'
import { useWizard } from 'react-use-wizard'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcArrowOutline } from '@/components/Icon/Icons'

export function RebalancingErrorStep() {
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
      <RebalancingError.Content>
        <RebalancingError.Title />
        <RebalancingError.Description />
        <RebalancingError.Buttons>
          <Drawer.Close asChild>
            <RebalancingError.CloseButton />
          </Drawer.Close>
        </RebalancingError.Buttons>
      </RebalancingError.Content>
    </>
  )
}

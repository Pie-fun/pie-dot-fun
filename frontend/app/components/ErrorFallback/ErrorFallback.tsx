import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcErrorCircleFill } from '@/components/Icon/Icons'
import { useErrorBoundary } from 'react-error-boundary'

export function ErrorFallback() {
  const { resetBoundary } = useErrorBoundary()

  return (
    <div>
      <Button buttonType='content' onClick={resetBoundary}>
        <Icon color='alertPrimary' size='m'>
          <IcErrorCircleFill />
        </Icon>
      </Button>
    </div>
  )
}

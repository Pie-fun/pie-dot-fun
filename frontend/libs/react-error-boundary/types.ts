import { CustomFetchError } from '@/libs/fetch/types'
import { FallbackProps } from 'react-error-boundary'

export type FallbackErrorBoundaryProps = Omit<FallbackProps, 'error'> & {
  error: CustomFetchError
}

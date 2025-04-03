import { getBalancesEVM } from '@/app/api/backend/proxy/requests'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { BaseQueryOptions } from '@/libs/react-query/types'
import { FirstParameter } from '@/types/utility'

export function getBalancesEVMQuery({
  ...props
}: FirstParameter<typeof getBalancesEVM>) {
  return {
    queryKey: queryKeys.proxy.getBalancesEVMQuery(props).queryKey,
    queryFn: () => getBalancesEVM({ ...props }),
  } satisfies BaseQueryOptions<typeof getBalancesEVM>
}

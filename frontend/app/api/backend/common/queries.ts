import { getPing } from '@/app/api/backend/common/requests'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { BaseQueryOptions } from '@/libs/react-query/types'

export function getPingQuery() {
  return {
    queryKey: queryKeys.common.getPingQuery.queryKey,
    queryFn: () => getPing(),
  } satisfies BaseQueryOptions<typeof getPing>
}

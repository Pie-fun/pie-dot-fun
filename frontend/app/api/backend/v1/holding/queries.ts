import { queryKeys } from '@/libs/react-query/queryKeys'
import {
  getHolding,
  getHoldingsStatistics,
  listHoldings,
} from '@/app/api/backend/v1/holding/requests'
import { FirstParameter } from '@/types/utility'
import {
  BaseInfiniteQueryOptions,
  BaseQueryOptions,
} from '@/libs/react-query/types'

export function getHoldingQuery({
  ...props
}: FirstParameter<typeof getHolding>) {
  return {
    queryKey: queryKeys.holding.getHoldingQuery(props).queryKey,
    queryFn: () => getHolding({ ...props }),
  } satisfies BaseQueryOptions<typeof getHolding>
}

export function listHoldingsQuery({
  ...props
}: FirstParameter<typeof listHoldings>) {
  return {
    queryKey: queryKeys.holding.listHoldingsQuery(props).queryKey,
    queryFn: ({ pageParam }) =>
      listHoldings({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<typeof listHoldings>
}

export function getHoldingsStatisticsQuery({
  ...props
}: FirstParameter<typeof getHoldingsStatistics>) {
  return {
    queryKey: queryKeys.holding.getHoldingsStatisticsQuery(props).queryKey,
    queryFn: () => getHoldingsStatistics({ ...props }),
  } satisfies BaseQueryOptions<typeof getHoldingsStatistics>
}

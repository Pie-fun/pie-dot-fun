import {
  BaseInfiniteQueryOptions,
  BaseQueryOptions,
} from '@/libs/react-query/types'
import {
  getBasketToken,
  listBasketTokenRebalancingHistories,
  listBasketTokens,
} from '@/app/api/backend/v1/basketToken/requests'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { FirstParameter } from '@/types/utility'

export function listBasketTokensQuery({
  ...props
}: FirstParameter<typeof listBasketTokens> = {}) {
  return {
    queryKey: queryKeys.basketToken.listBasketTokensQuery(props).queryKey,
    queryFn: ({ pageParam }) =>
      listBasketTokens({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<typeof listBasketTokens>
}

export function getBasketTokenQuery({
  ...props
}: FirstParameter<typeof getBasketToken>) {
  return {
    queryKey: queryKeys.basketToken.getBasketTokenQuery(props).queryKey,
    queryFn: () =>
      getBasketToken({
        ...props,
      }),
  } satisfies BaseQueryOptions<typeof getBasketToken>
}

export function listBasketTokenRebalancingHistoriesQuery({
  ...props
}: FirstParameter<typeof listBasketTokenRebalancingHistories>) {
  return {
    queryKey:
      queryKeys.basketToken.listBasketTokenRebalancingHistoriesQuery(props)
        .queryKey,
    queryFn: ({ pageParam }) =>
      listBasketTokenRebalancingHistories({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<
    typeof listBasketTokenRebalancingHistories
  >
}

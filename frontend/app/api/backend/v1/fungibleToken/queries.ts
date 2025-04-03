import { queryKeys } from '@/libs/react-query/queryKeys'
import {
  getFungibleToken,
  listFungibleTokens,
} from '@/app/api/backend/v1/fungibleToken/requests'
import { FirstParameter } from '@/types/utility'
import {
  BaseInfiniteQueryOptions,
  BaseQueryOptions,
} from '@/libs/react-query/types'

export function listFungibleTokensQuery({
  ...props
}: FirstParameter<typeof listFungibleTokens> = {}) {
  return {
    queryKey: queryKeys.fungibleToken.listFungibleTokensQuery(props).queryKey,
    queryFn: ({ pageParam }) =>
      listFungibleTokens({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<typeof listFungibleTokens>
}

export function getFungibleTokenQuery({
  ...props
}: FirstParameter<typeof getFungibleToken>) {
  return {
    queryKey: queryKeys.fungibleToken.getFungibleTokenQuery(props).queryKey,
    queryFn: () =>
      getFungibleToken({
        ...props,
      }),
  } satisfies BaseQueryOptions<typeof getFungibleToken>
}

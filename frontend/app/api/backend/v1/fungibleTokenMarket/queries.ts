import { queryKeys } from '@/libs/react-query/queryKeys'
import { getFungibleTokenMarket } from '@/app/api/backend/v1/fungibleTokenMarket/requests'
import { FirstParameter } from '@/types/utility'
import { BaseQueryOptions } from '@/libs/react-query/types'

export function getFungibleTokenMarketQuery({
  ...props
}: FirstParameter<typeof getFungibleTokenMarket>) {
  return {
    queryKey:
      queryKeys.fungibleTokenMarket.getFungibleTokenMarketQuery(props).queryKey,
    queryFn: () =>
      getFungibleTokenMarket({
        ...props,
      }),
  } satisfies BaseQueryOptions<typeof getFungibleTokenMarket>
}

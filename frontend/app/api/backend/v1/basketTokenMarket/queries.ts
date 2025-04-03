import { queryKeys } from '@/libs/react-query/queryKeys'
import { getBasketTokenMarket } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { FirstParameter } from '@/types/utility'
import { BaseQueryOptions } from '@/libs/react-query/types'

export function getBasketTokenMarketQuery({
  ...props
}: FirstParameter<typeof getBasketTokenMarket>) {
  return {
    queryKey:
      queryKeys.basketTokenMarket.getBasketTokenMarketQuery(props).queryKey,
    queryFn: () =>
      getBasketTokenMarket({
        ...props,
      }),
  } satisfies BaseQueryOptions<typeof getBasketTokenMarket>
}

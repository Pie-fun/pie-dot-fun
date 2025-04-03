import { BaseInfiniteGraphqlQueryOptions } from '@/libs/react-query/types'
import { execute } from '@/libs/graphql/execute'
import { graphql } from '@/libs/graphql'
import { listBasketTokens } from '@/app/api/backend/v1/basketToken/requests'
import { FirstParameter } from '@/types/utility'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { getBasketTokenMarket } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { getFilter } from '@/utils/getFilter'
import { BasketTokenState } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token'
import { listFungibleTokens } from '@/app/api/backend/v1/fungibleToken/requests'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

const BasketTokensWithBasketTokenMarketQuery = graphql(`
  query BasketTokensWithBasketTokenMarket($listData: ListData!) {
    basketTokensWithBasketTokenMarket(listData: $listData) {
      basketTokensWithBasketTokenMarket {
        basketToken {
          displayName
          symbol
          iconImageUri
          components {
            address
            chain
          }
          oneLineDescription
          address
          chain
        }
        basketTokenMarket {
          value {
            formattedAmount
          }
          valueChange {
            priceChanges {
              PRICE_CHANGE_PERIOD_24_HOUR {
                percentageChange {
                  value
                }
              }
            }
          }
        }
      }
      nextPageToken
    }
  }
`)

export function basketTokensWithBasketTokenMarketQuery({
  filter = getFilter([
    {
      join: 'AND',
      field: 'state',
      operator: '=',
      value: BasketTokenState.LISTED,
    },
  ]),
  orderBy,
  pageSize,
  ...props
}: FirstParameter<typeof listBasketTokens> &
  Omit<
    FirstParameter<typeof getBasketTokenMarket>,
    'basketTokenMarket' | 'currency'
  > = {}) {
  return {
    queryKey: queryKeys.combined.basketTokensWithBasketTokenMarketQuery({
      filter,
      orderBy,
      pageSize,
      ...props,
    }).queryKey,
    queryFn: ({ pageParam }) =>
      execute(BasketTokensWithBasketTokenMarketQuery, {
        listData: {
          pageToken: pageParam,
          filter,
          orderBy,
          pageSize,
        },
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ basketTokensWithBasketTokenMarket }) =>
      basketTokensWithBasketTokenMarket.nextPageToken || undefined,
  } satisfies BaseInfiniteGraphqlQueryOptions<
    typeof BasketTokensWithBasketTokenMarketQuery
  >
}

const BasketComponentsWithFungibleTokenAndFungibleTokenMarketQuery = graphql(`
  query BasketComponentsWithFungibleTokenAndFungibleTokenMarket(
    $listData: ListData!
    $basketTokenResource: BasketTokenResource!
  ) {
    basketComponentsWithFungibleTokenAndFungibleTokenMarket(
      listData: $listData
      basketTokenResource: $basketTokenResource
    ) {
      basketComponentsWithFungibleTokenAndFungibleTokenMarket {
        component {
          weight {
            value
          }
        }
        fungibleToken {
          iconImageUrl
          symbol
          displayName
          address
          chain
        }
        fungibleTokenMarket {
          fdvs {
            CURRENCY_USDC {
              formattedAmount
            }
          }
          price {
            formattedAmount
          }
          priceChange {
            priceChanges {
              PRICE_CHANGE_PERIOD_7_DAY {
                percentageChange {
                  value
                }
              }
            }
          }
        }
      }
      nextPageToken
    }
  }
`)

export function basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery({
  address,
  chain,
  filter,
  orderBy,
  pageSize,
  ...props
}: FirstParameter<typeof listFungibleTokens> &
  FirstParameter<typeof getBasketTokenResource>) {
  return {
    queryKey: queryKeys.combined.basketTokensWithBasketTokenMarketQuery({
      address,
      chain,
      filter,
      orderBy,
      pageSize,
      ...props,
    }).queryKey,
    queryFn: ({ pageParam }) =>
      execute(BasketComponentsWithFungibleTokenAndFungibleTokenMarketQuery, {
        listData: {
          pageToken: pageParam,
          filter,
          orderBy,
          pageSize,
        },
        basketTokenResource: {
          address,
          chain: chain as ChainType,
        },
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({
      basketComponentsWithFungibleTokenAndFungibleTokenMarket,
    }) =>
      basketComponentsWithFungibleTokenAndFungibleTokenMarket.nextPageToken ||
      undefined,
  } satisfies BaseInfiniteGraphqlQueryOptions<
    typeof BasketComponentsWithFungibleTokenAndFungibleTokenMarketQuery
  >
}

import 'reflect-metadata'
import { Arg, Query, Resolver } from 'type-graphql'
import { ListData } from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import {
  getFungibleTokenMarket,
  listFungibleTokensMarkets,
} from '@/app/api/backend/v1/fungibleTokenMarket/requests'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  FungibleTokenMarket,
  FungibleTokenMarketResource,
  FungibleTokenMarkets,
} from '@/app/api/frontend/v1/graphql/schemas/fungibleTokenMarket/typeDefs'

@Resolver()
export class FungibleTokenMarketResolver {
  @Query(() => FungibleTokenMarket)
  async fungibleTokenMarket(
    @Arg('fungibleTokenMarketResource', () => FungibleTokenMarketResource)
    { address, chain }: FungibleTokenMarketResource,
  ) {
    const fungibleTokenMarket = await getFungibleTokenMarket({
      fungibleTokenMarket: getFungibleTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    })

    return fungibleTokenMarket
  }

  @Query(() => FungibleTokenMarkets)
  async fungibleTokenMarkets(
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const fungibleTokenMarkets = await listFungibleTokensMarkets({
      ...listData,
      currency: Currency.CURRENCY_USDC,
    })

    return fungibleTokenMarkets
  }
}

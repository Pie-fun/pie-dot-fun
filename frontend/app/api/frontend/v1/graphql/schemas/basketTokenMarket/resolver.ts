import 'reflect-metadata'
import { Arg, Query, Resolver } from 'type-graphql'
import {
  BasketTokenMarket,
  BasketTokenMarketResource,
} from '@/app/api/frontend/v1/graphql/schemas/basketTokenMarket/typeDefs'
import { getBasketTokenMarket } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

@Resolver()
export class BasketTokenMarketResolver {
  @Query(() => BasketTokenMarket)
  async basketTokenMarket(
    @Arg('basketTokenMarketResource', () => BasketTokenMarketResource)
    { address, chain }: BasketTokenMarketResource,
  ) {
    const basketTokenMarket = await getBasketTokenMarket({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    })

    return basketTokenMarket
  }
}

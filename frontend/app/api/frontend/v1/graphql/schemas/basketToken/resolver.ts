import 'reflect-metadata'
import {
  getBasketToken,
  listBasketTokens,
} from '@/app/api/backend/v1/basketToken/requests'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import {
  BasketToken,
  BasketTokenResource,
  BasketTokens,
} from '@/app/api/frontend/v1/graphql/schemas/basketToken/typeDefs'
import { Arg, Query, Resolver } from 'type-graphql'
import { ListData } from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'

@Resolver()
export class BasketTokenResolver {
  @Query(() => BasketToken)
  async basketToken(
    @Arg('basketTokenResource', () => BasketTokenResource)
    { address, chain }: BasketTokenResource,
  ) {
    const basketToken = await getBasketToken({
      basketToken: getBasketTokenResource({ address, chain }),
    })

    return basketToken
  }

  @Query(() => BasketTokens)
  async basketTokens(
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const basketTokens = await listBasketTokens({
      ...listData,
    })

    return basketTokens
  }
}

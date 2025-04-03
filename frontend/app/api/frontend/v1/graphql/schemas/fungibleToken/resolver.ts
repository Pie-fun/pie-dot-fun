import 'reflect-metadata'
import { Arg, Query, Resolver } from 'type-graphql'
import { ListData } from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import {
  FungibleToken,
  FungibleTokenResource,
  FungibleTokens,
} from '@/app/api/frontend/v1/graphql/schemas/fungibleToken/typeDefs'
import {
  getFungibleToken,
  listFungibleTokens,
} from '@/app/api/backend/v1/fungibleToken/requests'
import { getFungibleTokenResource } from '@/app/api/backend/v1/fungibleToken/resource'

@Resolver()
export class FungibleTokenResolver {
  @Query(() => FungibleToken)
  async fungibleToken(
    @Arg('fungibleTokenResource', () => FungibleTokenResource)
    { address, chain }: FungibleTokenResource,
  ) {
    const fungibleToken = await getFungibleToken({
      fungibleToken: getFungibleTokenResource({ address, chain }),
    })

    return fungibleToken
  }

  @Query(() => FungibleTokens)
  async fungibleTokens(
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const fungibleTokens = await listFungibleTokens({
      ...listData,
    })

    return fungibleTokens
  }
}

import 'reflect-metadata'
import { Arg, Query, Resolver } from 'type-graphql'
import { getBasketTokenMarket } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  BasketComponentsWithFungibleTokenAndFungibleTokenMarket,
  BasketTokensWithBasketTokenMarket,
  FungibleTokensWithFungibleTokenMarket,
} from '@/app/api/frontend/v1/graphql/schemas/combined/typeDefs'
import { ListData } from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import {
  getBasketToken,
  listBasketTokens,
} from '@/app/api/backend/v1/basketToken/requests'
import { listFungibleTokens } from '@/app/api/backend/v1/fungibleToken/requests'
import { getFungibleTokenMarket } from '@/app/api/backend/v1/fungibleTokenMarket/requests'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { BasketTokenResource } from '@/app/api/frontend/v1/graphql/schemas/basketToken/typeDefs'
import { getFilter, OperatorCondition } from '@/utils/getFilter'
import { getFungibleTokenResource } from '@/app/api/backend/v1/fungibleToken/resource'

@Resolver()
export class CombinedResolver {
  @Query(() => BasketTokensWithBasketTokenMarket)
  async basketTokensWithBasketTokenMarket(
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const { basketTokens, nextPageToken } = await listBasketTokens({
      ...listData,
    })

    const basketTokensWithBasketTokenMarket = await Promise.all(
      basketTokens.map(async (basketToken) => {
        const basketTokenMarket = await getBasketTokenMarket({
          basketTokenMarket: getBasketTokenMarketResource({
            address: basketToken.address,
            chain: basketToken.chain,
          }),
          currency: Currency.CURRENCY_USDC,
        })

        return {
          basketToken,
          basketTokenMarket,
        }
      }),
    )

    return {
      basketTokensWithBasketTokenMarket,
      nextPageToken,
    }
  }

  @Query(() => FungibleTokensWithFungibleTokenMarket)
  async fungibleTokensWithFungibleTokenMarket(
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const { fungibleTokens, nextPageToken } = await listFungibleTokens({
      ...listData,
    })

    const fungibleTokensWithFungibleTokenMarket = await Promise.all(
      fungibleTokens.map(async (fungibleToken) => {
        const fungibleTokenMarket = await getFungibleTokenMarket({
          fungibleTokenMarket: getFungibleTokenMarketResource({
            address: fungibleToken.address,
            chain: fungibleToken.chain,
          }),
          currency: Currency.CURRENCY_USDC,
        })

        return {
          fungibleToken,
          fungibleTokenMarket,
        }
      }),
    )

    return {
      fungibleTokensWithFungibleTokenMarket,
      nextPageToken,
    }
  }

  @Query(() => BasketComponentsWithFungibleTokenAndFungibleTokenMarket)
  async basketComponentsWithFungibleTokenAndFungibleTokenMarket(
    @Arg('basketTokenResource', () => BasketTokenResource)
    { address, chain }: BasketTokenResource,
    @Arg('listData', () => ListData)
    listData: ListData,
  ) {
    const basketToken = await getBasketToken({
      basketToken: getBasketTokenResource({ address, chain }),
    })

    const filter = getFilter([
      { field: 'chain', operator: '=', value: chain },
      ...basketToken.components.map<OperatorCondition>(
        ({ address, chain }) => ({
          join: 'AND',
          field: 'name',
          operator: '=',
          value: `"${getFungibleTokenResource({ address, chain })}"`,
        }),
      ),
    ])

    const { fungibleTokens, nextPageToken } = await listFungibleTokens({
      ...listData,
      filter,
    })

    const fungibleTokenMarkets = await Promise.all(
      fungibleTokens.map(async (fungibleToken) => {
        const fungibleTokenMarket = await getFungibleTokenMarket({
          fungibleTokenMarket: getFungibleTokenMarketResource({
            address: fungibleToken.address,
            chain: fungibleToken.chain,
          }),
          currency: Currency.CURRENCY_USDC,
        })

        return fungibleTokenMarket
      }),
    )

    const basketComponentsWithFungibleTokenAndFungibleTokenMarket =
      basketToken.components.map((component) => {
        const fungibleToken = fungibleTokens.find(
          ({ name }) => name === component.fungibleToken,
        )

        const fungibleTokenMarket = fungibleTokenMarkets.find(
          ({ fungibleToken }) => fungibleToken === component.fungibleToken,
        )

        return {
          component,
          fungibleToken,
          fungibleTokenMarket,
        }
      })

    return {
      basketComponentsWithFungibleTokenAndFungibleTokenMarket,
      nextPageToken,
    }
  }
}

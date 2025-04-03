/* eslint-disable */
import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query BasketTokensWithBasketTokenMarket($listData: ListData!) {\n    basketTokensWithBasketTokenMarket(listData: $listData) {\n      basketTokensWithBasketTokenMarket {\n        basketToken {\n          displayName\n          symbol\n          iconImageUri\n          components {\n            address\n            chain\n          }\n          oneLineDescription\n          address\n          chain\n        }\n        basketTokenMarket {\n          value {\n            formattedAmount\n          }\n          valueChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_24_HOUR {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n': typeof types.BasketTokensWithBasketTokenMarketDocument
  '\n  query BasketComponentsWithFungibleTokenAndFungibleTokenMarket(\n    $listData: ListData!\n    $basketTokenResource: BasketTokenResource!\n  ) {\n    basketComponentsWithFungibleTokenAndFungibleTokenMarket(\n      listData: $listData\n      basketTokenResource: $basketTokenResource\n    ) {\n      basketComponentsWithFungibleTokenAndFungibleTokenMarket {\n        component {\n          weight {\n            value\n          }\n        }\n        fungibleToken {\n          iconImageUrl\n          symbol\n          displayName\n          address\n          chain\n        }\n        fungibleTokenMarket {\n          fdvs {\n            CURRENCY_USDC {\n              formattedAmount\n            }\n          }\n          price {\n            formattedAmount\n          }\n          priceChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_7_DAY {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n': typeof types.BasketComponentsWithFungibleTokenAndFungibleTokenMarketDocument
}
const documents: Documents = {
  '\n  query BasketTokensWithBasketTokenMarket($listData: ListData!) {\n    basketTokensWithBasketTokenMarket(listData: $listData) {\n      basketTokensWithBasketTokenMarket {\n        basketToken {\n          displayName\n          symbol\n          iconImageUri\n          components {\n            address\n            chain\n          }\n          oneLineDescription\n          address\n          chain\n        }\n        basketTokenMarket {\n          value {\n            formattedAmount\n          }\n          valueChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_24_HOUR {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n':
    types.BasketTokensWithBasketTokenMarketDocument,
  '\n  query BasketComponentsWithFungibleTokenAndFungibleTokenMarket(\n    $listData: ListData!\n    $basketTokenResource: BasketTokenResource!\n  ) {\n    basketComponentsWithFungibleTokenAndFungibleTokenMarket(\n      listData: $listData\n      basketTokenResource: $basketTokenResource\n    ) {\n      basketComponentsWithFungibleTokenAndFungibleTokenMarket {\n        component {\n          weight {\n            value\n          }\n        }\n        fungibleToken {\n          iconImageUrl\n          symbol\n          displayName\n          address\n          chain\n        }\n        fungibleTokenMarket {\n          fdvs {\n            CURRENCY_USDC {\n              formattedAmount\n            }\n          }\n          price {\n            formattedAmount\n          }\n          priceChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_7_DAY {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n':
    types.BasketComponentsWithFungibleTokenAndFungibleTokenMarketDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BasketTokensWithBasketTokenMarket($listData: ListData!) {\n    basketTokensWithBasketTokenMarket(listData: $listData) {\n      basketTokensWithBasketTokenMarket {\n        basketToken {\n          displayName\n          symbol\n          iconImageUri\n          components {\n            address\n            chain\n          }\n          oneLineDescription\n          address\n          chain\n        }\n        basketTokenMarket {\n          value {\n            formattedAmount\n          }\n          valueChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_24_HOUR {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n',
): typeof import('./graphql').BasketTokensWithBasketTokenMarketDocument
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BasketComponentsWithFungibleTokenAndFungibleTokenMarket(\n    $listData: ListData!\n    $basketTokenResource: BasketTokenResource!\n  ) {\n    basketComponentsWithFungibleTokenAndFungibleTokenMarket(\n      listData: $listData\n      basketTokenResource: $basketTokenResource\n    ) {\n      basketComponentsWithFungibleTokenAndFungibleTokenMarket {\n        component {\n          weight {\n            value\n          }\n        }\n        fungibleToken {\n          iconImageUrl\n          symbol\n          displayName\n          address\n          chain\n        }\n        fungibleTokenMarket {\n          fdvs {\n            CURRENCY_USDC {\n              formattedAmount\n            }\n          }\n          price {\n            formattedAmount\n          }\n          priceChange {\n            priceChanges {\n              PRICE_CHANGE_PERIOD_7_DAY {\n                percentageChange {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      nextPageToken\n    }\n  }\n',
): typeof import('./graphql').BasketComponentsWithFungibleTokenAndFungibleTokenMarketDocument

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

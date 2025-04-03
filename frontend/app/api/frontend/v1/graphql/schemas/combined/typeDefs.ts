import {
  BasketToken,
  Component,
} from '@/app/api/frontend/v1/graphql/schemas/basketToken/typeDefs'
import { BasketTokenMarket } from '@/app/api/frontend/v1/graphql/schemas/basketTokenMarket/typeDefs'
import { FungibleToken } from '@/app/api/frontend/v1/graphql/schemas/fungibleToken/typeDefs'
import { FungibleTokenMarket } from '@/app/api/frontend/v1/graphql/schemas/fungibleTokenMarket/typeDefs'
import { Field, ObjectType } from 'type-graphql'

@ObjectType('BasketTokenWithBasketTokenMarket')
export class BasketTokenWithBasketTokenMarket {
  @Field(() => BasketToken)
  basketToken!: BasketToken

  @Field(() => BasketTokenMarket)
  basketTokenMarket!: BasketTokenMarket
}

@ObjectType('BasketTokensWithBasketTokenMarket')
export class BasketTokensWithBasketTokenMarket {
  @Field(() => [BasketTokenWithBasketTokenMarket])
  basketTokensWithBasketTokenMarket!: BasketTokenWithBasketTokenMarket[]

  @Field()
  nextPageToken!: string
}

@ObjectType('FungibleTokenWithFungibleTokenMarket')
export class FungibleTokenWithFungibleTokenMarket {
  @Field(() => FungibleToken)
  fungibleToken!: FungibleToken

  @Field(() => FungibleTokenMarket)
  fungibleTokenMarket!: FungibleTokenMarket
}

@ObjectType('FungibleTokensWithFungibleTokenMarket')
export class FungibleTokensWithFungibleTokenMarket {
  @Field(() => [FungibleTokenWithFungibleTokenMarket])
  fungibleTokensWithFungibleTokenMarket!: FungibleTokenWithFungibleTokenMarket[]

  @Field()
  nextPageToken!: string
}

@ObjectType('BasketComponentWithFungibleTokenAndFungibleTokenMarket')
export class BasketComponentWithFungibleTokenAndFungibleTokenMarket {
  @Field(() => Component)
  component!: Component

  @Field(() => FungibleToken)
  fungibleToken!: FungibleToken

  @Field(() => FungibleTokenMarket)
  fungibleTokenMarket!: FungibleTokenMarket
}
@ObjectType('BasketComponentsWithFungibleTokenAndFungibleTokenMarket')
export class BasketComponentsWithFungibleTokenAndFungibleTokenMarket {
  @Field(() => [BasketComponentWithFungibleTokenAndFungibleTokenMarket])
  basketComponentsWithFungibleTokenAndFungibleTokenMarket!: BasketComponentWithFungibleTokenAndFungibleTokenMarket[]

  @Field()
  nextPageToken!: string
}

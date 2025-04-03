import 'reflect-metadata'
import { Field, InputType, ObjectType } from 'type-graphql'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { FirstParameter } from '@/types/utility'
import { getFungibleTokenResource } from '@/app/api/backend/v1/fungibleToken/resource'
import {
  FungibleToken as FungibleTokenPrimitive,
  ListFungibleTokensResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token'
import { SNS } from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'

@InputType('FungibleTokenResource')
export class FungibleTokenResource
  implements FirstParameter<typeof getFungibleTokenResource>
{
  @Field()
  address!: string

  @Field(() => ChainType)
  chain!: ChainType
}

@ObjectType('FungibleToken')
export class FungibleToken implements FungibleTokenPrimitive {
  @Field()
  address!: string

  @Field()
  chain!: ChainType

  @Field()
  decimals!: number

  @Field()
  displayName!: string

  @Field()
  iconImageUrl!: string

  @Field()
  name!: string

  @Field(() => [SNS])
  sns!: SNS[]

  @Field()
  symbol!: string
}

@ObjectType('FungibleTokens')
export class FungibleTokens implements ListFungibleTokensResponse {
  @Field(() => [FungibleToken])
  fungibleTokens!: FungibleTokenPrimitive[]

  @Field()
  nextPageToken!: string
}

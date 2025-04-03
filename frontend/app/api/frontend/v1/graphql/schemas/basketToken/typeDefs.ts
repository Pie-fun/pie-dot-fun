import 'reflect-metadata'
import { Field, InputType, ObjectType, registerEnumType } from 'type-graphql'
import {
  ChainType,
  Quantity as QuantityPrimitive,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { FirstParameter } from '@/types/utility'
import {
  BasketTokenState,
  RebalanceFrequency,
  TokenStrategy,
  BasketToken as BasketTokenPrimitive,
  Component as ComponentPrimitive,
  ListBasketTokensResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import {
  Percentage,
  Quantity,
} from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'

registerEnumType(BasketTokenState, {
  name: 'BasketTokenState',
})

registerEnumType(TokenStrategy, {
  name: 'TokenStrategy',
})

registerEnumType(RebalanceFrequency, {
  name: 'RebalanceFrequency',
})

@InputType('BasketTokenResource')
export class BasketTokenResource
  implements FirstParameter<typeof getBasketTokenResource>
{
  @Field()
  address!: string

  @Field(() => ChainType)
  chain!: ChainType
}

@ObjectType('Component')
export class Component implements ComponentPrimitive {
  @Field()
  address!: string

  @Field()
  chain!: ChainType

  @Field()
  fungibleToken!: string

  @Field(() => Percentage, { nullable: true })
  weight: Percentage | undefined
}

@ObjectType('BasketToken')
export class BasketToken implements BasketTokenPrimitive {
  @Field()
  address!: string

  @Field()
  chain!: ChainType

  @Field(() => [Component])
  components!: Component[]

  @Field(() => String, { nullable: true })
  createTime: string | undefined

  @Field()
  creator!: string

  @Field()
  description!: string

  @Field()
  displayName!: string

  @Field(() => String, { nullable: true })
  expireTime: string | undefined

  @Field()
  iconImageUri!: string

  @Field()
  isRebalancing!: boolean

  @Field(() => String, { nullable: true })
  lastRebalanceTime: string | undefined

  @Field()
  name!: string

  @Field()
  onchainId!: string

  @Field()
  oneLineDescription!: string

  @Field()
  rebalanceFrequency!: RebalanceFrequency

  @Field()
  state!: BasketTokenState

  @Field()
  strategy!: TokenStrategy

  @Field()
  symbol!: string

  @Field()
  totalHolders!: number

  @Field(() => Quantity, { nullable: true })
  totalSupply: QuantityPrimitive | undefined
}

@ObjectType('BasketTokens')
export class BasketTokens implements ListBasketTokensResponse {
  @Field(() => [BasketToken])
  basketTokens!: BasketTokenPrimitive[]

  @Field()
  nextPageToken!: string

  test!: string
}

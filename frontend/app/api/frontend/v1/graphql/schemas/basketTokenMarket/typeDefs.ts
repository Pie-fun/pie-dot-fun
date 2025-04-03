import 'reflect-metadata'
import type { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import {
  Money,
  Percentage,
  PriceChangesByPeriod,
} from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import { BasketTokenMarket as BasketTokenMarketPrimitive } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token-market'
import {
  ChainType,
  Currency,
  PriceChangesByPeriod as PriceChangesByPeriodPrimitive,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { FirstParameter } from '@/types/utility'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType('BasketTokenMarketResource')
export class BasketTokenMarketResource
  implements FirstParameter<typeof getBasketTokenMarketResource>
{
  @Field()
  address!: string

  @Field(() => ChainType)
  chain!: ChainType
}

@ObjectType('BasketTokenMarket')
export class BasketTokenMarket implements BasketTokenMarketPrimitive {
  @Field()
  basketToken!: string

  @Field(() => Money, { nullable: true })
  marketCap: Money | undefined

  @Field(() => Percentage, { nullable: true })
  maximumDrawDown: Percentage | undefined

  @Field()
  name!: string

  @Field(() => Currency)
  nativeCurrency!: Currency

  @Field(() => Money, { nullable: true })
  value: Money | undefined

  @Field(() => PriceChangesByPeriod, { nullable: true })
  valueChange: PriceChangesByPeriodPrimitive | undefined

  // deprecated
  marketCaps!: { [key: string]: Money }
  valueChanges!: { [key: string]: PriceChangesByPeriodPrimitive }
  values!: { [key: string]: Money }
}

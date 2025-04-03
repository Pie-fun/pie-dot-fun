import 'reflect-metadata'
import { Field, InputType, ObjectType } from 'type-graphql'
import {
  ChainType,
  Currency,
  PriceChangesByPeriod as PriceChangesByPeriodPrimitive,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { FirstParameter } from '@/types/utility'
import {
  Money,
  PriceChangesByPeriod,
} from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import {
  FungibleTokenMarket as FungibleTokenMarketPrimitive,
  ListFungibleTokensMarketsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token-market'

@InputType('FungibleTokenMarketResource')
export class FungibleTokenMarketResource
  implements FirstParameter<typeof getFungibleTokenMarketResource>
{
  @Field()
  address!: string

  @Field(() => ChainType)
  chain!: ChainType
}

@ObjectType('FDVsByCurrency')
export class FDVsByCurrency {
  @Field(() => Money)
  CURRENCY_SOL!: Money

  @Field(() => Money)
  CURRENCY_USDC!: Money

  @Field(() => Money)
  CURRENCY_UNSPECIFIED!: Money
}

@ObjectType('FungibleTokenMarket')
export class FungibleTokenMarket implements FungibleTokenMarketPrimitive {
  @Field()
  displayName!: string

  @Field(() => FDVsByCurrency)
  fdvs!: { [key: string]: Money }

  @Field()
  fungibleToken!: string

  @Field()
  name!: string

  @Field(() => Currency)
  nativeCurrency!: Currency

  @Field(() => Money, { nullable: true })
  price: Money | undefined

  @Field(() => PriceChangesByPeriod, { nullable: true })
  priceChange: PriceChangesByPeriodPrimitive | undefined

  @Field()
  symbol!: string

  // deprecated
  marketCap: Money | undefined
  marketCaps!: { [key: string]: Money }
  priceChanges!: { [key: string]: PriceChangesByPeriodPrimitive }
  prices!: { [key: string]: Money }
}

@ObjectType('FungibleTokenMarkets')
export class FungibleTokenMarkets implements ListFungibleTokensMarketsResponse {
  @Field(() => [FungibleTokenMarket])
  fungibleTokenMarkets!: FungibleTokenMarketPrimitive[]

  @Field()
  nextPageToken!: string
}

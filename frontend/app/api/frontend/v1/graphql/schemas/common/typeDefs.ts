import 'reflect-metadata'
import { ListData as ListDataPrimitive } from '@/libs/fetch/types'
import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from 'type-graphql'
import {
  ChainType,
  Quantity as QuantityPrimitive,
  Percentage as PercentagePrimitive,
  Currency,
  PriceChangePeriod,
  Money as MoneyPrimitive,
  PriceChange as PriceChangePrimitive,
  SNS as SNSPrimitive,
  SNS_SNSType,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

registerEnumType(ChainType, {
  name: 'ChainType',
})

registerEnumType(Currency, {
  name: 'Currency',
})

registerEnumType(PriceChangePeriod, {
  name: 'PriceChangePeriod',
})

registerEnumType(SNS_SNSType, {
  name: 'SNS_SNSType',
})

@InputType('ListData')
export class ListData implements ListDataPrimitive {
  @Field(() => String, { nullable: true })
  filter: string | undefined

  @Field(() => String, { nullable: true })
  orderBy: string | undefined

  @Field(() => Int, { nullable: true })
  pageSize: number | undefined

  @Field(() => String, { nullable: true })
  pageToken: string | undefined
}

@ObjectType('Percentage')
export class Percentage implements PercentagePrimitive {
  @Field()
  value!: number
}

@ObjectType('Quantity')
export class Quantity implements QuantityPrimitive {
  @Field()
  decimals!: number

  @Field()
  formattedAmount!: string

  @Field()
  rawAmount!: string
}

@ObjectType('Money')
export class Money implements MoneyPrimitive {
  @Field(() => Currency)
  currency!: Currency

  @Field()
  decimals!: number

  @Field()
  formattedAmount!: string

  @Field()
  rawAmount!: string
}

@ObjectType('PriceChange')
export class PriceChange implements PriceChangePrimitive {
  @Field(() => Money, { nullable: true })
  nominalValue: MoneyPrimitive | undefined

  @Field(() => Percentage, { nullable: true })
  percentageChange: PercentagePrimitive | undefined

  @Field(() => PriceChangePeriod)
  period!: PriceChangePeriod
}

@ObjectType('PriceChanges')
export class PriceChanges {
  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_UNSPECIFIED!: PriceChange

  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_1_HOUR!: PriceChange

  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_24_HOUR!: PriceChange

  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_7_DAY!: PriceChange

  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_30_DAY!: PriceChange

  @Field(() => PriceChange)
  PRICE_CHANGE_PERIOD_ALL_TIME!: PriceChange
}

@ObjectType('PriceChangesByPeriod')
export class PriceChangesByPeriod {
  @Field(() => PriceChanges)
  priceChanges!: PriceChanges
}

@ObjectType('SNS')
export class SNS implements SNSPrimitive {
  @Field()
  name!: string

  @Field()
  profileUrl!: string

  @Field(() => SNS_SNSType)
  type!: SNS_SNSType
}

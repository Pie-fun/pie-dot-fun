/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type BasketComponentWithFungibleTokenAndFungibleTokenMarket = {
  __typename?: 'BasketComponentWithFungibleTokenAndFungibleTokenMarket'
  component: Component
  fungibleToken: FungibleToken
  fungibleTokenMarket: FungibleTokenMarket
}

export type BasketComponentsWithFungibleTokenAndFungibleTokenMarket = {
  __typename?: 'BasketComponentsWithFungibleTokenAndFungibleTokenMarket'
  basketComponentsWithFungibleTokenAndFungibleTokenMarket: Array<BasketComponentWithFungibleTokenAndFungibleTokenMarket>
  nextPageToken: Scalars['String']['output']
}

export type BasketToken = {
  __typename?: 'BasketToken'
  address: Scalars['String']['output']
  chain: ChainType
  components: Array<Component>
  createTime?: Maybe<Scalars['String']['output']>
  creator: Scalars['String']['output']
  description: Scalars['String']['output']
  displayName: Scalars['String']['output']
  expireTime?: Maybe<Scalars['String']['output']>
  iconImageUri: Scalars['String']['output']
  isRebalancing: Scalars['Boolean']['output']
  lastRebalanceTime?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  onchainId: Scalars['String']['output']
  oneLineDescription: Scalars['String']['output']
  rebalanceFrequency: RebalanceFrequency
  state: BasketTokenState
  strategy: TokenStrategy
  symbol: Scalars['String']['output']
  totalHolders: Scalars['Float']['output']
  totalSupply?: Maybe<Quantity>
}

export type BasketTokenMarket = {
  __typename?: 'BasketTokenMarket'
  basketToken: Scalars['String']['output']
  marketCap?: Maybe<Money>
  maximumDrawDown?: Maybe<Percentage>
  name: Scalars['String']['output']
  nativeCurrency: Currency
  value?: Maybe<Money>
  valueChange?: Maybe<PriceChangesByPeriod>
}

export type BasketTokenMarketResource = {
  address: Scalars['String']['input']
  chain: ChainType
}

export type BasketTokenResource = {
  address: Scalars['String']['input']
  chain: ChainType
}

export enum BasketTokenState {
  BASKET_TOKEN_STATE_UNSPECIFIED = 'BASKET_TOKEN_STATE_UNSPECIFIED',
  CREATED = 'CREATED',
  LISTED = 'LISTED',
}

export type BasketTokenWithBasketTokenMarket = {
  __typename?: 'BasketTokenWithBasketTokenMarket'
  basketToken: BasketToken
  basketTokenMarket: BasketTokenMarket
}

export type BasketTokens = {
  __typename?: 'BasketTokens'
  basketTokens: Array<BasketToken>
  nextPageToken: Scalars['String']['output']
}

export type BasketTokensWithBasketTokenMarket = {
  __typename?: 'BasketTokensWithBasketTokenMarket'
  basketTokensWithBasketTokenMarket: Array<BasketTokenWithBasketTokenMarket>
  nextPageToken: Scalars['String']['output']
}

export enum ChainType {
  BASE = 'BASE',
  BASE_SEPOLIA = 'BASE_SEPOLIA',
  CHAIN_UNSPECIFIED = 'CHAIN_UNSPECIFIED',
  ETHEREUM = 'ETHEREUM',
  ETHEREUM_SEPOLIA = 'ETHEREUM_SEPOLIA',
  SOLANA = 'SOLANA',
  SOLANA_DEVNET = 'SOLANA_DEVNET',
  SOLANA_TESTNET = 'SOLANA_TESTNET',
}

export type Component = {
  __typename?: 'Component'
  address: Scalars['String']['output']
  chain: ChainType
  fungibleToken: Scalars['String']['output']
  weight?: Maybe<Percentage>
}

export enum Currency {
  CURRENCY_ETH = 'CURRENCY_ETH',
  CURRENCY_SOL = 'CURRENCY_SOL',
  CURRENCY_UNSPECIFIED = 'CURRENCY_UNSPECIFIED',
  CURRENCY_USDC = 'CURRENCY_USDC',
}

export type FDVsByCurrency = {
  __typename?: 'FDVsByCurrency'
  CURRENCY_SOL: Money
  CURRENCY_UNSPECIFIED: Money
  CURRENCY_USDC: Money
}

export type FungibleToken = {
  __typename?: 'FungibleToken'
  address: Scalars['String']['output']
  chain: ChainType
  decimals: Scalars['Float']['output']
  displayName: Scalars['String']['output']
  iconImageUrl: Scalars['String']['output']
  name: Scalars['String']['output']
  sns: Array<SNS>
  symbol: Scalars['String']['output']
}

export type FungibleTokenMarket = {
  __typename?: 'FungibleTokenMarket'
  displayName: Scalars['String']['output']
  fdvs: FDVsByCurrency
  fungibleToken: Scalars['String']['output']
  name: Scalars['String']['output']
  nativeCurrency: Currency
  price?: Maybe<Money>
  priceChange?: Maybe<PriceChangesByPeriod>
  symbol: Scalars['String']['output']
}

export type FungibleTokenMarketResource = {
  address: Scalars['String']['input']
  chain: ChainType
}

export type FungibleTokenMarkets = {
  __typename?: 'FungibleTokenMarkets'
  fungibleTokenMarkets: Array<FungibleTokenMarket>
  nextPageToken: Scalars['String']['output']
}

export type FungibleTokenResource = {
  address: Scalars['String']['input']
  chain: ChainType
}

export type FungibleTokenWithFungibleTokenMarket = {
  __typename?: 'FungibleTokenWithFungibleTokenMarket'
  fungibleToken: FungibleToken
  fungibleTokenMarket: FungibleTokenMarket
}

export type FungibleTokens = {
  __typename?: 'FungibleTokens'
  fungibleTokens: Array<FungibleToken>
  nextPageToken: Scalars['String']['output']
}

export type FungibleTokensWithFungibleTokenMarket = {
  __typename?: 'FungibleTokensWithFungibleTokenMarket'
  fungibleTokensWithFungibleTokenMarket: Array<FungibleTokenWithFungibleTokenMarket>
  nextPageToken: Scalars['String']['output']
}

export type ListData = {
  filter?: InputMaybe<Scalars['String']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  pageToken?: InputMaybe<Scalars['String']['input']>
}

export type Money = {
  __typename?: 'Money'
  currency: Currency
  decimals: Scalars['Float']['output']
  formattedAmount: Scalars['String']['output']
  rawAmount: Scalars['String']['output']
}

export type Percentage = {
  __typename?: 'Percentage'
  value: Scalars['Float']['output']
}

export type PriceChange = {
  __typename?: 'PriceChange'
  nominalValue?: Maybe<Money>
  percentageChange?: Maybe<Percentage>
  period: PriceChangePeriod
}

export enum PriceChangePeriod {
  PRICE_CHANGE_PERIOD_1_HOUR = 'PRICE_CHANGE_PERIOD_1_HOUR',
  PRICE_CHANGE_PERIOD_7_DAY = 'PRICE_CHANGE_PERIOD_7_DAY',
  PRICE_CHANGE_PERIOD_24_HOUR = 'PRICE_CHANGE_PERIOD_24_HOUR',
  PRICE_CHANGE_PERIOD_30_DAY = 'PRICE_CHANGE_PERIOD_30_DAY',
  PRICE_CHANGE_PERIOD_ALL_TIME = 'PRICE_CHANGE_PERIOD_ALL_TIME',
  PRICE_CHANGE_PERIOD_UNSPECIFIED = 'PRICE_CHANGE_PERIOD_UNSPECIFIED',
}

export type PriceChanges = {
  __typename?: 'PriceChanges'
  PRICE_CHANGE_PERIOD_1_HOUR: PriceChange
  PRICE_CHANGE_PERIOD_7_DAY: PriceChange
  PRICE_CHANGE_PERIOD_24_HOUR: PriceChange
  PRICE_CHANGE_PERIOD_30_DAY: PriceChange
  PRICE_CHANGE_PERIOD_ALL_TIME: PriceChange
  PRICE_CHANGE_PERIOD_UNSPECIFIED: PriceChange
}

export type PriceChangesByPeriod = {
  __typename?: 'PriceChangesByPeriod'
  priceChanges: PriceChanges
}

export type Quantity = {
  __typename?: 'Quantity'
  decimals: Scalars['Float']['output']
  formattedAmount: Scalars['String']['output']
  rawAmount: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  basketComponentsWithFungibleTokenAndFungibleTokenMarket: BasketComponentsWithFungibleTokenAndFungibleTokenMarket
  basketToken: BasketToken
  basketTokenMarket: BasketTokenMarket
  basketTokens: BasketTokens
  basketTokensWithBasketTokenMarket: BasketTokensWithBasketTokenMarket
  fungibleToken: FungibleToken
  fungibleTokenMarket: FungibleTokenMarket
  fungibleTokenMarkets: FungibleTokenMarkets
  fungibleTokens: FungibleTokens
  fungibleTokensWithFungibleTokenMarket: FungibleTokensWithFungibleTokenMarket
}

export type QuerybasketComponentsWithFungibleTokenAndFungibleTokenMarketArgs = {
  basketTokenResource: BasketTokenResource
  listData: ListData
}

export type QuerybasketTokenArgs = {
  basketTokenResource: BasketTokenResource
}

export type QuerybasketTokenMarketArgs = {
  basketTokenMarketResource: BasketTokenMarketResource
}

export type QuerybasketTokensArgs = {
  listData: ListData
}

export type QuerybasketTokensWithBasketTokenMarketArgs = {
  listData: ListData
}

export type QueryfungibleTokenArgs = {
  fungibleTokenResource: FungibleTokenResource
}

export type QueryfungibleTokenMarketArgs = {
  fungibleTokenMarketResource: FungibleTokenMarketResource
}

export type QueryfungibleTokenMarketsArgs = {
  listData: ListData
}

export type QueryfungibleTokensArgs = {
  listData: ListData
}

export type QueryfungibleTokensWithFungibleTokenMarketArgs = {
  listData: ListData
}

export enum RebalanceFrequency {
  DAILY = 'DAILY',
  MANUAL = 'MANUAL',
  MONTHLY = 'MONTHLY',
  REBALANCE_FREQUENCY_UNSPECIFIED = 'REBALANCE_FREQUENCY_UNSPECIFIED',
  WEEKLY = 'WEEKLY',
}

export type SNS = {
  __typename?: 'SNS'
  name: Scalars['String']['output']
  profileUrl: Scalars['String']['output']
  type: SNS_SNSType
}

export enum SNS_SNSType {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
  SNS_TYPE_UNSPECIFIED = 'SNS_TYPE_UNSPECIFIED',
  TWITTER = 'TWITTER',
}

export enum TokenStrategy {
  CUSTOM_WEIGHTED = 'CUSTOM_WEIGHTED',
  EQUAL_WEIGHTED = 'EQUAL_WEIGHTED',
  FACTOR_WEIGHTED = 'FACTOR_WEIGHTED',
  FUNDAMENTAL_WEIGHTED = 'FUNDAMENTAL_WEIGHTED',
  MARKET_CAP_WEIGHTED = 'MARKET_CAP_WEIGHTED',
  MOMENTUM_WEIGHTED = 'MOMENTUM_WEIGHTED',
  RISK_WEIGHTED = 'RISK_WEIGHTED',
  TOKEN_STRATEGY_UNSPECIFIED = 'TOKEN_STRATEGY_UNSPECIFIED',
}

export type BasketTokensWithBasketTokenMarketQueryVariables = Exact<{
  listData: ListData
}>

export type BasketTokensWithBasketTokenMarketQuery = {
  __typename?: 'Query'
  basketTokensWithBasketTokenMarket: {
    __typename?: 'BasketTokensWithBasketTokenMarket'
    nextPageToken: string
    basketTokensWithBasketTokenMarket: Array<{
      __typename?: 'BasketTokenWithBasketTokenMarket'
      basketToken: {
        __typename?: 'BasketToken'
        displayName: string
        symbol: string
        iconImageUri: string
        oneLineDescription: string
        address: string
        chain: ChainType
        components: Array<{
          __typename?: 'Component'
          address: string
          chain: ChainType
        }>
      }
      basketTokenMarket: {
        __typename?: 'BasketTokenMarket'
        value?: { __typename?: 'Money'; formattedAmount: string } | null
        valueChange?: {
          __typename?: 'PriceChangesByPeriod'
          priceChanges: {
            __typename?: 'PriceChanges'
            PRICE_CHANGE_PERIOD_24_HOUR: {
              __typename?: 'PriceChange'
              percentageChange?: {
                __typename?: 'Percentage'
                value: number
              } | null
            }
          }
        } | null
      }
    }>
  }
}

export type BasketComponentsWithFungibleTokenAndFungibleTokenMarketQueryVariables =
  Exact<{
    listData: ListData
    basketTokenResource: BasketTokenResource
  }>

export type BasketComponentsWithFungibleTokenAndFungibleTokenMarketQuery = {
  __typename?: 'Query'
  basketComponentsWithFungibleTokenAndFungibleTokenMarket: {
    __typename?: 'BasketComponentsWithFungibleTokenAndFungibleTokenMarket'
    nextPageToken: string
    basketComponentsWithFungibleTokenAndFungibleTokenMarket: Array<{
      __typename?: 'BasketComponentWithFungibleTokenAndFungibleTokenMarket'
      component: {
        __typename?: 'Component'
        weight?: { __typename?: 'Percentage'; value: number } | null
      }
      fungibleToken: {
        __typename?: 'FungibleToken'
        iconImageUrl: string
        symbol: string
        displayName: string
        address: string
        chain: ChainType
      }
      fungibleTokenMarket: {
        __typename?: 'FungibleTokenMarket'
        fdvs: {
          __typename?: 'FDVsByCurrency'
          CURRENCY_USDC: { __typename?: 'Money'; formattedAmount: string }
        }
        price?: { __typename?: 'Money'; formattedAmount: string } | null
        priceChange?: {
          __typename?: 'PriceChangesByPeriod'
          priceChanges: {
            __typename?: 'PriceChanges'
            PRICE_CHANGE_PERIOD_7_DAY: {
              __typename?: 'PriceChange'
              percentageChange?: {
                __typename?: 'Percentage'
                value: number
              } | null
            }
          }
        } | null
      }
    }>
  }
}

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']

  constructor(
    private value: string,
    public __meta__?: Record<string, any> | undefined,
  ) {
    super(value)
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value
  }
}

export const BasketTokensWithBasketTokenMarketDocument =
  new TypedDocumentString(`
    query BasketTokensWithBasketTokenMarket($listData: ListData!) {
  basketTokensWithBasketTokenMarket(listData: $listData) {
    basketTokensWithBasketTokenMarket {
      basketToken {
        displayName
        symbol
        iconImageUri
        components {
          address
          chain
        }
        oneLineDescription
        address
        chain
      }
      basketTokenMarket {
        value {
          formattedAmount
        }
        valueChange {
          priceChanges {
            PRICE_CHANGE_PERIOD_24_HOUR {
              percentageChange {
                value
              }
            }
          }
        }
      }
    }
    nextPageToken
  }
}
    `) as unknown as TypedDocumentString<
    BasketTokensWithBasketTokenMarketQuery,
    BasketTokensWithBasketTokenMarketQueryVariables
  >
export const BasketComponentsWithFungibleTokenAndFungibleTokenMarketDocument =
  new TypedDocumentString(`
    query BasketComponentsWithFungibleTokenAndFungibleTokenMarket($listData: ListData!, $basketTokenResource: BasketTokenResource!) {
  basketComponentsWithFungibleTokenAndFungibleTokenMarket(
    listData: $listData
    basketTokenResource: $basketTokenResource
  ) {
    basketComponentsWithFungibleTokenAndFungibleTokenMarket {
      component {
        weight {
          value
        }
      }
      fungibleToken {
        iconImageUrl
        symbol
        displayName
        address
        chain
      }
      fungibleTokenMarket {
        fdvs {
          CURRENCY_USDC {
            formattedAmount
          }
        }
        price {
          formattedAmount
        }
        priceChange {
          priceChanges {
            PRICE_CHANGE_PERIOD_7_DAY {
              percentageChange {
                value
              }
            }
          }
        }
      }
    }
    nextPageToken
  }
}
    `) as unknown as TypedDocumentString<
    BasketComponentsWithFungibleTokenAndFungibleTokenMarketQuery,
    BasketComponentsWithFungibleTokenAndFungibleTokenMarketQueryVariables
  >

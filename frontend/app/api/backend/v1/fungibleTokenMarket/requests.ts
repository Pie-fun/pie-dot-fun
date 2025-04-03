import {
  FungibleTokenMarket,
  GetFungibleTokenMarketRequest,
  ListFungibleTokensMarketsRequest,
  ListFungibleTokensMarketsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token-market'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function getFungibleTokenMarket({
  fungibleTokenMarket,
  ...params
}: GetFungibleTokenMarketRequest): Promise<FungibleTokenMarket> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${fungibleTokenMarket}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function listFungibleTokensMarkets({
  ...params
}: ListData<ListFungibleTokensMarketsRequest>): Promise<ListFungibleTokensMarketsResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/fungibleTokens/-/-/markets`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

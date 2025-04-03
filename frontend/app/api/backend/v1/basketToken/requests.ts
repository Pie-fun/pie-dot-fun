import {
  BasketToken,
  GetBasketTokenRequest,
  ListBasketTokensRequest,
  ListBasketTokensResponse,
  ListRebalancingHistoriesRequest,
  ListRebalancingHistoriesResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function listBasketTokens({
  ...params
}: ListData<ListBasketTokensRequest>): Promise<ListBasketTokensResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: '/basketTokens',
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function getBasketToken({
  basketToken,
  ...params
}: GetBasketTokenRequest): Promise<BasketToken> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${basketToken}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function listBasketTokenRebalancingHistories({
  basketToken,
  ...params
}: ListData<ListRebalancingHistoriesRequest>): Promise<ListRebalancingHistoriesResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${basketToken}/rebalancingHistories`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

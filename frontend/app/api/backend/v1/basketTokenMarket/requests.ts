import {
  BasketTokenMarket,
  GetBasketTokenMarketRequest,
  ListBasketTokenTicksRequest,
  ListBasketTokenTicksResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token-market'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function listBasketTokenTicks({
  parent,
  ...params
}: ListData<ListBasketTokenTicksRequest>): Promise<ListBasketTokenTicksResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${parent}/ticks`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function getBasketTokenMarket({
  basketTokenMarket,
  ...params
}: GetBasketTokenMarketRequest): Promise<BasketTokenMarket> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${basketTokenMarket}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

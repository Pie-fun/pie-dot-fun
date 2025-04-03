import {
  GetHoldingRequest,
  GetHoldingsStatisticsRequest,
  GetHoldingsStatisticsResponse,
  Holding,
  ListHoldingsRequest,
  ListHoldingsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/holding'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function getHolding({
  holding,
  ...params
}: GetHoldingRequest): Promise<Holding> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${holding}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function listHoldings({
  ...params
}: ListData<ListHoldingsRequest>): Promise<ListHoldingsResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/holdings`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function getHoldingsStatistics({
  ...params
}: GetHoldingsStatisticsRequest): Promise<GetHoldingsStatisticsResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/holdings:statistics`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

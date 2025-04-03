import {
  ListHoldingWalletsRequest,
  ListHoldingWalletsResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/holding-wallet'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function listHoldingWallets({
  ...params
}: ListData<ListHoldingWalletsRequest>): Promise<ListHoldingWalletsResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/holdingWallets`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

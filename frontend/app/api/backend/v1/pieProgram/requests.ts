import { customFetch } from '@/libs/fetch/fetch'
import {
  BuildMintTxRequest,
  BuildRedeemTxRequest,
  SerializedTxBundle,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/pie-program'

export async function buildMintTx({
  ...params
}: BuildMintTxRequest): Promise<SerializedTxBundle> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/pie-program/build-tx/mint-basket`,
    },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export async function buildRedeemTx({
  ...params
}: BuildRedeemTxRequest): Promise<SerializedTxBundle> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/pie-program/build-tx/redeem-basket`,
    },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

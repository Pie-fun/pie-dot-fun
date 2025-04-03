import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import { VMType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { ListHoldingWalletsResponse } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/holding-wallet'
import { getHoldingWalletResource } from '@/app/api/backend/v1/holdingWallet/resource'

export async function listHoldingWallets() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListHoldingWalletsResponse>({
    holdingWallets: [
      {
        address: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
        name: getHoldingWalletResource({
          address: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
          vmType: 'EVM',
        }),
        vmType: VMType.EVM,
        user: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
      },
      {
        address: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
        name: getHoldingWalletResource({
          address: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
          vmType: 'SVM',
        }),
        vmType: VMType.SVM,
        user: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
      },
    ],
    nextPageToken: '',
  })
}

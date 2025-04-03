import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import { GetBalancesEVMResponse } from '@/app/api/backend/proxy/requests'

export async function getBalancesEVM() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<GetBalancesEVMResponse>({
    request_time: '2025-01-02T07:22:10.074ZZ',
    response_time: '2025-01-02T07:22:10.103ZZ',
    wallet_address: '0x11f974f9a218a62d899df6a5936e1547f10c4807',
    balances: [
      {
        chain: 'ethereum',
        chain_id: 1,
        address: 'native',
        amount: '1398626961155287',
        symbol: 'ETH',
        decimals: 18,
        price_usd: 3409.419167367697,
        value_usd: 4.76850556936007,
      },
      {
        chain: 'polygon',
        chain_id: 137,
        address: '0xb6b66c2a65e0d4abe6254ffbdd70d8e47393c3ac',
        amount: '5400000000000000000000',
      },
    ],
  })
}

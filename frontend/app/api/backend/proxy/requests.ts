import { customFetch } from '@/libs/fetch/fetch'

export type GetBalancesEVMRequest = {
  address: string
  chain_ids?: string
  exclude_spam_tokens?: string
  filters?: 'ERC20' | 'NATIVE'
  metadata?: string
  offset?: string
  limit?: number
}

export type GetBalancesEVMResponse = {
  balances: {
    address: string
    amount: string
    chain: string
    chain_id?: number
    decimals?: number
    price_usd?: number
    symbol?: string
    token_metadata?: {
      logo?: string
      url?: string
    }
    value_usd?: number
  }[]
  response_time: string
  wallet_address: string
  errors?: {
    token_errors: {
      address: string
      chain_id: number
      description?: string
    }[]
  }
  next_offset?: string
  request_time?: string
}

export async function getBalancesEVM({
  address,
  ...params
}: GetBalancesEVMRequest): Promise<GetBalancesEVMResponse> {
  return await customFetch(
    {
      app: 'backend',
      path: `/proxy/dune/api/echo/v1/balances/evm/${address}`,
      params,
    },
    {
      method: 'GET',
      credentials: 'omit',
    },
  )
}

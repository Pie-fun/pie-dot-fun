import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetBasketTokenMarketResourceProps = {
  chain: keyof typeof ChainType
  address: string
}

export function getBasketTokenMarketResource({
  chain,
  address,
}: GetBasketTokenMarketResourceProps) {
  return `basketTokens/${chain}/${address}/market` as const
}

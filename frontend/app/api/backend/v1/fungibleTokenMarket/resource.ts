import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetFungibleTokenMarketResourceProps = {
  chain: keyof typeof ChainType
  address: string
}

export function getFungibleTokenMarketResource({
  chain,
  address,
}: GetFungibleTokenMarketResourceProps) {
  return `fungibleTokens/${chain}/${address}/market` as const
}

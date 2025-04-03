import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetFungibleTokenResourceProps = {
  chain: keyof typeof ChainType
  address: string
}

export function getFungibleTokenResource({
  chain,
  address,
}: GetFungibleTokenResourceProps) {
  return `fungibleTokens/${chain}/${address}` as const
}

import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetFungibleTokenResourceProps = {
  chain: keyof typeof ChainType
  tokenAddress: string
  holdingWalletAddress: string
}

export function getHoldingResource({
  chain,
  tokenAddress,
  holdingWalletAddress,
}: GetFungibleTokenResourceProps) {
  return `holdings/${chain}/basketTokens/${tokenAddress}/holdingWallets/${holdingWalletAddress}` as const
}

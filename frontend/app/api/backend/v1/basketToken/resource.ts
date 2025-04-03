import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetBasketTokenResourceProps = {
  chain: keyof typeof ChainType
  address: string
}

export function getBasketTokenResource({
  chain,
  address,
}: GetBasketTokenResourceProps) {
  return `basketTokens/${chain}/${address}` as const
}

export type GetIdentifierFromBasketTokenResourceProps = {
  basketToken: string
}

export function getIdentifierFromBasketTokenResource({
  basketToken,
}: Readonly<GetIdentifierFromBasketTokenResourceProps>) {
  const [resource, chain, address] = basketToken.split('/')

  return { resource, chain, address }
}

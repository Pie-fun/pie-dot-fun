import { VMType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export type GetHoldingWalletResourceProps = {
  vmType: keyof typeof VMType
  address: string
}

export function getHoldingWalletResource({
  vmType,
  address,
}: Readonly<GetHoldingWalletResourceProps>) {
  return `holdingWallets/${vmType}/${address}` as const
}

export type GetIdentifierFromHoldingWalletResourceProps = {
  holdingWallet: string
}

export function getIdentifierFromHoldingWalletResource({
  holdingWallet,
}: Readonly<GetIdentifierFromHoldingWalletResourceProps>) {
  const [resource, vmType, address] = holdingWallet.split('/')

  return { resource, vmType, address }
}

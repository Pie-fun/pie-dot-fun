type GetShortAddressProps = {
  address: string
  type: 'svm' | 'evm'
}

export function getShortAddress({ address, type }: GetShortAddressProps) {
  const start = address.slice(0, type === 'svm' ? 4 : 6)
  const end = address.slice(-4)

  return `${start}...${end}`
}

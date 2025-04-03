type GetEthereumHexProps = {
  value: number
}

export function getEthereumHex({ value }: GetEthereumHexProps) {
  return `0x${value.toString(16)}`
}

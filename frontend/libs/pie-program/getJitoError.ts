type GetJitoErrorProps = {
  transactionFailure?: [number[], string]
}

type JitoError = {
  cause:
    | 'INSUFFICIENT_FUNDS'
    | 'REBALANCE_TIMING_ISSUE'
    | 'SLIPPAGE_ISSUE'
    | 'UNKNOWN_ERROR'
  code: string
}

export function getJitoError({
  transactionFailure,
}: Readonly<GetJitoErrorProps>): JitoError {
  const [_, code] = transactionFailure?.[1].split('error:') ?? ['']
  const trimmedCode = code?.trim()

  switch (trimmedCode) {
    case '0x1':
    case '0x7':
    case '0x28':
    case '0x1774':
      return {
        cause: 'INSUFFICIENT_FUNDS',
        code: trimmedCode,
      }
    case '0x1780':
      return {
        cause: 'REBALANCE_TIMING_ISSUE',
        code: trimmedCode,
      }
    case '0x1e':
    case '0x1785':
    case '0x1775':
      return {
        cause: 'SLIPPAGE_ISSUE',
        code: trimmedCode,
      }
    default:
      return {
        cause: 'UNKNOWN_ERROR',
        code: trimmedCode,
      }
  }
}

type ContractErrorProps<T = unknown> = {
  message: string
  cause?: T
}

export class ContractError extends Error {
  constructor({ message, cause }: ContractErrorProps) {
    super(message, { cause })
    this.name = this.constructor.name
    this.cause = cause
  }
}

type BuyContractErrorCause = {
  code?:
    | 'INSUFFICIENT_FUNDS'
    | 'SLIPPAGE_ISSUE'
    | 'REBALANCE_TIMING_ISSUE'
    | 'UNKNOWN_ERROR'
}

export class BuyContractError extends ContractError {
  cause?: BuyContractErrorCause
  constructor({ message, cause }: ContractErrorProps<BuyContractErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static insufficientFunds() {
    return new BuyContractError({
      message: 'Insufficient funds',
      cause: { code: 'INSUFFICIENT_FUNDS' },
    })
  }

  static slippage() {
    return new BuyContractError({
      message: 'slippage issue',
      cause: { code: 'SLIPPAGE_ISSUE' },
    })
  }

  static rebalancing() {
    return new BuyContractError({
      message: 'rebalance timing issue',
      cause: { code: 'REBALANCE_TIMING_ISSUE' },
    })
  }

  static unknown() {
    return new BuyContractError({
      message: 'unknown',
      cause: { code: 'UNKNOWN_ERROR' },
    })
  }
}

type SellContractErrorCause = {
  code?:
    | 'INSUFFICIENT_FUNDS'
    | 'SLIPPAGE_ISSUE'
    | 'REBALANCE_TIMING_ISSUE'
    | 'UNKNOWN_ERROR'
}

export class SellContractError extends ContractError {
  cause?: SellContractErrorCause
  constructor({ message, cause }: ContractErrorProps<SellContractErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static insufficientFunds() {
    return new SellContractError({
      message: 'Insufficient funds',
      cause: { code: 'INSUFFICIENT_FUNDS' },
    })
  }

  static slippage() {
    return new SellContractError({
      message: 'slippage issue',
      cause: { code: 'SLIPPAGE_ISSUE' },
    })
  }

  static rebalancing() {
    return new SellContractError({
      message: 'rebalance timing issue',
      cause: { code: 'REBALANCE_TIMING_ISSUE' },
    })
  }

  static unknown() {
    return new SellContractError({
      message: 'unknown',
      cause: { code: 'UNKNOWN_ERROR' },
    })
  }
}

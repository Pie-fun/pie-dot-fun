import { CustomFetchError } from '@/libs/fetch/types'
import { getEnumerableObject } from '@/utils/getEnumerableObject'
import { NextResponse } from 'next/server'

type FrontErrorProps<T = unknown> = {
  message: string
  cause?: T
}

export class FrontError extends Error {
  constructor({ message, cause }: FrontErrorProps) {
    super(message, { cause })
    this.name = this.constructor.name
    this.cause = cause
  }
}

export type HandleApiErrorProps = {
  error?: CustomFetchError
  status?: number
}

export function handleFrontServerError({
  status = 500,
  error,
}: HandleApiErrorProps) {
  const body = error ? getEnumerableObject(error) : null

  return NextResponse.json(body, {
    status,
  })
}

type CommonFrontServerErrorCause = {
  code?: 'NOT_FOUND' | 'UNAUTHORIZED' | 'GEO_BLOCKED'
  status: number
}

export class CommonFrontServerError extends FrontError {
  cause?: CommonFrontServerErrorCause

  constructor({
    message,
    cause,
  }: FrontErrorProps<CommonFrontServerErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static notFound({ entity }: { entity: string }) {
    return new CommonFrontServerError({
      message: `${entity} not found`,
      cause: { code: 'NOT_FOUND', status: 404 },
    })
  }

  static unauthorized() {
    return new CommonFrontServerError({
      message: `unauthorized`,
      cause: { code: 'UNAUTHORIZED', status: 401 },
    })
  }
}

type CommonFrontErrorCause = {
  code?: 'NOT_FOUND' | 'UNAUTHORIZED'
}

export class CommonFrontError extends FrontError {
  cause?: CommonFrontErrorCause

  constructor({ message, cause }: FrontErrorProps<CommonFrontErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static notFound({ entity }: { entity: string }) {
    return new CommonFrontError({
      message: `${entity} not found`,
      cause: { code: 'NOT_FOUND' },
    })
  }

  static unauthorized() {
    return new CommonFrontError({
      message: `unauthorized`,
      cause: { code: 'UNAUTHORIZED' },
    })
  }
}

type BuyFrontErrorCause = {
  code?:
    | 'INSUFFICIENT_FUNDS'
    | 'SLIPPAGE_ISSUE'
    | 'REBALANCE_TIMING_ISSUE'
    | 'UNKNOWN_ERROR'
}

export class BuyFrontError extends FrontError {
  cause?: BuyFrontErrorCause
  constructor({ message, cause }: FrontErrorProps<BuyFrontErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static insufficientFunds() {
    return new BuyFrontError({
      message: 'Insufficient funds',
      cause: { code: 'INSUFFICIENT_FUNDS' },
    })
  }

  static slippage() {
    return new BuyFrontError({
      message: 'slippage issue',
      cause: { code: 'SLIPPAGE_ISSUE' },
    })
  }

  static rebalancing() {
    return new BuyFrontError({
      message: 'rebalance timing issue',
      cause: { code: 'REBALANCE_TIMING_ISSUE' },
    })
  }

  static unknown() {
    return new BuyFrontError({
      message: 'unknown',
      cause: { code: 'UNKNOWN_ERROR' },
    })
  }
}

type SellFrontErrorCause = {
  code?:
    | 'INSUFFICIENT_FUNDS'
    | 'SLIPPAGE_ISSUE'
    | 'REBALANCE_TIMING_ISSUE'
    | 'UNKNOWN_ERROR'
}

export class SellFrontError extends FrontError {
  cause?: SellFrontErrorCause
  constructor({ message, cause }: FrontErrorProps<SellFrontErrorCause>) {
    super({ message, cause })
    this.name = this.constructor.name
    this.cause = cause
  }

  static insufficientFunds() {
    return new SellFrontError({
      message: 'Insufficient funds',
      cause: { code: 'INSUFFICIENT_FUNDS' },
    })
  }

  static slippage() {
    return new SellFrontError({
      message: 'slippage issue',
      cause: { code: 'SLIPPAGE_ISSUE' },
    })
  }

  static rebalancing() {
    return new SellFrontError({
      message: 'rebalance timing issue',
      cause: { code: 'REBALANCE_TIMING_ISSUE' },
    })
  }

  static unknown() {
    return new SellFrontError({
      message: 'unknown',
      cause: { code: 'UNKNOWN_ERROR' },
    })
  }
}

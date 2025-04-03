import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Quantity/Quantity.css'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import BigNumber from 'bignumber.js'
import { FirstParameter } from '@/types/utility'
import { getDecimalWithZeroCount } from '@/utils/getDecimalWithZeroCount'

type QuantityProps = {
  value?: number | string
  emptyValue?: string
  threshold?: number
  decimal?: number
  options?: FirstParameter<typeof getFormattedNumber>['options']
}

export const Quantity = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> &
    QuantityProps &
    styles.QuantityVariants &
    styles.SubVariants
>(
  (
    {
      value,
      emptyValue,
      threshold = 3,
      decimal = 4,
      size,
      fontWeight,
      options,
      ...props
    },
    ref,
  ) => {
    if (!value) {
      return (
        <span
          ref={ref}
          className={styles.quantity({
            size,
            fontWeight,
          })}
          {...props}
        >
          {emptyValue ?? 0}
        </span>
      )
    }

    const {
      fixedValue,
      count,
      decimalPartBeforeThreshold,
      formattedDecimalPartAfterThreshold,
      integerPart,
    } = getDecimalWithZeroCount({ value, threshold, decimal })

    const bigNumber = new BigNumber(value)
    const isGreaterThanOne = bigNumber.gte(1)
    const isGreaterThanThreshold = bigNumber.gte(1 / 10 ** threshold)

    if (isGreaterThanOne || isGreaterThanThreshold || !count) {
      return (
        <span
          ref={ref}
          className={styles.quantity({
            size,
            fontWeight,
          })}
          aria-label={fixedValue}
          {...props}
        >
          {getFormattedNumber({
            value,
            options: {
              ...options,
              maximumFractionDigits: isGreaterThanOne ? 2 : decimal,
            },
          })}
        </span>
      )
    }

    return (
      <span
        ref={ref}
        className={styles.quantity({
          size,
          fontWeight,
        })}
        aria-label={fixedValue}
        {...props}
      >
        {`${integerPart}.${decimalPartBeforeThreshold}0`}
        <sub className={styles.sub({ size })}>{count}</sub>
        {formattedDecimalPartAfterThreshold}
      </span>
    )
  },
)

Quantity.displayName = 'Quantity'

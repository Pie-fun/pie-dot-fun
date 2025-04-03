import { HTMLAttributes, forwardRef, useMemo } from 'react'
import * as styles from '@/components/Pnl/Pnl.css'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import BigNumber from 'bignumber.js'

type PnlProps = {
  value: number | string
  percentageValue: number | string
}

export const Pnl = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & PnlProps & styles.RootVariants
>(({ value, percentageValue, layout, ...props }, ref) => {
  const bigNumber = new BigNumber(value)
  const percentageNumber = new BigNumber(percentageValue).toFixed()
  const isZero = bigNumber.isZero()
  const isPositive = bigNumber.isPositive()
  const isNegative = bigNumber.isNegative()

  const color = useMemo(() => {
    if (!isZero && isPositive) {
      return 'positive'
    }

    if (!isZero && isNegative) {
      return 'negative'
    }

    return 'default'
  }, [isZero, isPositive, isNegative])

  return (
    <div
      ref={ref}
      className={styles.root({
        layout,
        color,
      })}
      {...props}
    >
      {!isZero && <span>{isPositive ? '+' : '-'}</span>}
      <div className={styles.currencyWithquantity()}>
        <span>$</span>
        <span className={styles.quantity()}>
          {getFormattedNumber({
            value,
            isAbs: true,
            options: { maximumFractionDigits: 2 },
          })}
        </span>
      </div>
      <span>
        (
        {getFormattedNumber({
          value: percentageNumber,
          suffix: '%',
          isAbs: true,
          options: { maximumFractionDigits: 2 },
        })}
        )
      </span>
    </div>
  )
})

Pnl.displayName = 'Pnl'

import { HTMLAttributes, forwardRef, useMemo } from 'react'
import * as styles from '@/components/Rate/Rate.css'
import { Icon } from '@/components/Icon/Icon'
import IcTriangleFill from '@/components/Icon/Icons/IcTriangleFill'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import BigNumber from 'bignumber.js'

type RateProps = {
  value: number | string
  theme?: 'color' | 'mono' | 'inherit'
  sign?: 'icon' | 'plusMinus'
}

export const Rate = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & RateProps & styles.RateVariants
>(({ value, theme = 'color', size, fontWeight, sign, ...props }, ref) => {
  const bigNumber = new BigNumber(value)
  const isZero = bigNumber.isZero()
  const isPositive = bigNumber.isPositive()
  const isNegative = bigNumber.isNegative()
  const isSmallNumber = bigNumber.isLessThan(0.01)

  const color = useMemo(() => {
    if (theme === 'inherit') {
      return 'inherit'
    }

    if (theme === 'mono') {
      return 'default'
    }

    if (theme === 'color' && !isZero && isPositive) {
      return 'positive'
    }

    if (theme === 'color' && !isZero && isNegative) {
      return 'negative'
    }

    return 'default'
  }, [isZero, isNegative, isPositive, theme])

  return (
    <span
      ref={ref}
      className={styles.rate({
        size,
        fontWeight,
        color,
      })}
      {...props}
    >
      {!isZero && sign === 'icon' && (
        <Icon size='s' rotate={isNegative ? 180 : 0}>
          <IcTriangleFill />
        </Icon>
      )}
      {!isZero && sign === 'plusMinus' && <span>{isNegative ? '-' : '+'}</span>}
      {!isZero && isPositive && isSmallNumber
        ? '<0.01%'
        : getFormattedNumber({
            value,
            isAbs: true,
            suffix: '%',
            options: { maximumFractionDigits: 2 },
          })}
    </span>
  )
})

Rate.displayName = 'Rate'

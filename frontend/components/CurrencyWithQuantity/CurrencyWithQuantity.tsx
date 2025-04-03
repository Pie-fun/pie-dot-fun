import { Currency } from '@/components/Currency/Currency'
import { Quantity } from '@/components/Quantity/Quantity'
import * as styles from '@/components/CurrencyWithQuantity/CurrencyWithQuantity.css'
import { ComponentProps, PropsWithChildren } from 'react'

type CurrencyWithQuantityProps = {
  currencyType?: ComponentProps<typeof Currency>['currencyType']
  size?: ComponentProps<typeof Currency>['size'] &
    ComponentProps<typeof Quantity>['size']
  mainImageSrc?: ComponentProps<typeof Currency>['mainImageSrc']
  chain?: ComponentProps<typeof Currency>['chain']
  fontWeight?:
    | ComponentProps<typeof Currency>['fontWeight']
    | ComponentProps<typeof Quantity>['fontWeight']
  alt?: ComponentProps<typeof Currency>['alt']
  value?: ComponentProps<typeof Quantity>['value']
  emptyValue?: ComponentProps<typeof Quantity>['emptyValue']
  threshold?: ComponentProps<typeof Quantity>['threshold']
  decimal?: ComponentProps<typeof Quantity>['decimal']
  options?: ComponentProps<typeof Quantity>['options']
}

export function CurrencyWithQuantity({
  currencyType,
  size,
  mainImageSrc,
  chain,
  alt,
  fontWeight,
  value,
  emptyValue,
  threshold,
  decimal,
  children,
  options,
  ...props
}: PropsWithChildren<CurrencyWithQuantityProps>) {
  return (
    <div className={styles.currencyWithQuantity()} {...props}>
      {children && (
        <Currency
          currencyType={currencyType}
          size={size}
          mainImageSrc={mainImageSrc}
          chain={chain}
          alt={alt}
          fontWeight={fontWeight}
        >
          {children}
        </Currency>
      )}
      <Quantity
        size={size}
        fontWeight={fontWeight}
        value={value}
        emptyValue={emptyValue}
        threshold={threshold}
        decimal={decimal}
        options={options}
      />
    </div>
  )
}

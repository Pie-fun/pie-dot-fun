import { ComponentProps, HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Currency/Currency.css'
import { TokenAvatar } from '@/components/TokenAvatar/TokenAvatar'

type CurrencyProps = {
  mainImageSrc?: ComponentProps<typeof TokenAvatar>['src']
  chain?: ComponentProps<typeof TokenAvatar>['chain']
  alt?: ComponentProps<typeof TokenAvatar>['alt']
}

export const Currency = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & CurrencyProps & styles.RootVariants
>(
  (
    {
      currencyType,
      mainImageSrc,
      chain,
      alt,
      size = 'm',
      fontWeight,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={styles.root({
          currencyType,
          size,
          fontWeight,
        })}
        {...props}
      >
        {children}
        {(mainImageSrc || chain) && (
          <TokenAvatar
            src={mainImageSrc}
            layout='fillWidth'
            size={currencyType === 'fiat' ? 'fontSize' : size}
            shape='circle'
            alt={alt}
            chain={chain}
          />
        )}
      </div>
    )
  },
)

Currency.displayName = 'Currency'

import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Icon/Icon.css'

type IconProps = {
  rotate?: number
}

export const Icon = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & IconProps & styles.IconVariants
>(({ size, isSpin, shape, rotate, color, background, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.icon({
        size,
        isSpin,
        shape,
        color,
        background,
      })}
      {...(rotate && { style: { rotate: `${rotate}deg` } })}
      {...props}
    />
  )
})

Icon.displayName = 'Icon'

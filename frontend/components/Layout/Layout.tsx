import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Layout/Layout.css'

export const Layout = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.LayoutVariants
>(({ layout, gap, topPadding, horizontalPadding, position, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.layout({
        layout,
        gap,
        topPadding,
        horizontalPadding,
        position,
      })}
      {...props}
    />
  )
})

Layout.displayName = 'Layout'

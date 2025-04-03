import { HtmlHTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Badge/Badge.css'

export const Badge = forwardRef<
  HTMLDivElement,
  HtmlHTMLAttributes<HTMLDivElement> & styles.BadgeVariants
>(
  (
    { children, layout, color, size, shape, badgeType, align, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={styles.badge({ layout, color, size, shape, badgeType, align })}
      {...props}
    >
      {shape !== 'dot' && children}
    </div>
  ),
)

Badge.displayName = 'Badge'

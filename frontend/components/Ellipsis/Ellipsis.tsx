import { forwardRef, HTMLAttributes } from 'react'
import * as styles from '@/components/Ellipsis/Ellipsis.css'

type EllipsisProps = {
  lineClamp?: number
}

export const Ellipsis = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & EllipsisProps & styles.EllipsisVariants
>(({ lineClamp = 1, ...props }, ref) => {
  const isLineClamp = lineClamp >= 1

  return (
    <span
      ref={ref}
      {...(isLineClamp && { style: { WebkitLineClamp: lineClamp } })}
      className={styles.ellipsis({ isLineClamp })}
      {...props}
    />
  )
})

Ellipsis.displayName = 'Ellipsis'

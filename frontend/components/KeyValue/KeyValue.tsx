import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/KeyValue/KeyValue.css'

export const Root = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.RootVariants
>(({ layout, orientation = 'vertical', gap, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.root({
        layout,
        orientation,
        gap,
      })}
      {...props}
    />
  )
})

Root.displayName = 'Root'

export const Key = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.KeyVariants
>(({ ...props }, ref) => {
  return <div ref={ref} className={styles.key()} {...props} />
})

Key.displayName = 'Key'

export const Value = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.ValueVariants
>(({ gap, ...props }, ref) => {
  return <div ref={ref} className={styles.value({ gap })} {...props} />
})

Value.displayName = 'Value'

'use client'

import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Title/Title.css'

export const Root = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.RootVariants
>(({ layout = 'hug', align = 'left', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.root({
        layout,
        align,
      })}
      {...props}
    />
  )
})

Root.displayName = 'Root'

export const Heading = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & styles.HeadingVariants
>(({ size, color, ...props }, ref) => {
  return (
    <span ref={ref} className={styles.heading({ size, color })} {...props} />
  )
})

Heading.displayName = 'Heading'

export const Description = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & styles.DescriptionVariants
>(({ size, ...props }, ref) => {
  return <span ref={ref} className={styles.description({ size })} {...props} />
})

Description.displayName = 'Description'

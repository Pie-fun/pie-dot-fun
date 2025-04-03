import { ComponentProps, HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Message/Message.css'
import { IcCheckOutline, IcErrorCircleFill } from '@/components/Icon/Icons'
import { Icon as IconPrimitive } from '@/components/Icon/Icon'

export const Root = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & styles.RootVariants
>(({ layout, color, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={styles.root({
        layout,
        color,
      })}
      {...props}
    />
  )
})

Root.displayName = 'Root'

export const Icon = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & styles.IconVariants
>(({ children, ...props }, ref) => {
  return (
    <span ref={ref} className={styles.icon()} {...props}>
      <IconPrimitive>{children}</IconPrimitive>
    </span>
  )
})

Icon.displayName = 'Icon'

export const Positive = forwardRef<
  HTMLSpanElement,
  Omit<ComponentProps<typeof Root>, 'color'>
>(({ children, ...props }, ref) => {
  return (
    <Root ref={ref} {...props} color='positive'>
      <Icon>
        <IcCheckOutline />
      </Icon>
      {children}
    </Root>
  )
})

Positive.displayName = 'Positive'

export const ErrorCase = forwardRef<
  HTMLSpanElement,
  Omit<ComponentProps<typeof Root>, 'color'>
>(({ children, ...props }, ref) => {
  return (
    <Root ref={ref} {...props} color='error'>
      <Icon>
        <IcErrorCircleFill />
      </Icon>
      {children}
    </Root>
  )
})

ErrorCase.displayName = 'ErrorCase'

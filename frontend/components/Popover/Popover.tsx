import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as styles from '@/components/Popover/Popover.css'

export const Root = PopoverPrimitive.Root

export const Trigger = PopoverPrimitive.Trigger

export const Content = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    styles.ContentVariants
>(({ align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={styles.content()}
      {...props}
    />
  </PopoverPrimitive.Portal>
))

Content.displayName = PopoverPrimitive.Content.displayName

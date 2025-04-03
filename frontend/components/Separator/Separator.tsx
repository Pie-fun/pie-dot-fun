import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as styles from '@/components/Separator/Separator.css'
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

export const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithRef<typeof SeparatorPrimitive.Root> &
    styles.SeparatorVariants
>(
  (
    { orientation = 'horizontal', decorative = true, size, color, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={styles.separator({ orientation, size, color })}
      {...props}
    />
  ),
)

Separator.displayName = SeparatorPrimitive.Root.displayName

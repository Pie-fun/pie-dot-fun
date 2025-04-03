import * as LabelPrimitive from '@radix-ui/react-label'
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import * as styles from '@/components/Label/Label.css'

export const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithRef<typeof LabelPrimitive.Root> & styles.LabelVariants
>(({ layout, disabled, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={styles.label({ layout, disabled })}
    aria-disabled={disabled}
    {...props}
  />
))

Label.displayName = LabelPrimitive.Root.displayName

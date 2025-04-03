import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as styles from '@/components/Checkbox/Checkbox.css'
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import { Icon } from '@/components/Icon/Icon'
import { IcCheckOutline } from '@/components/Icon/Icons'

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithRef<typeof CheckboxPrimitive.Root> & styles.RootVariants
>(({ ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={styles.root()} {...props}>
    <CheckboxPrimitive.Indicator className={styles.indicator()}>
      <Icon size='inherit'>
        <IcCheckOutline />
      </Icon>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

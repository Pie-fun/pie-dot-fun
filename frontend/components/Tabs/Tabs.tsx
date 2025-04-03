import * as TabsPrimitive from '@radix-ui/react-tabs'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import * as styles from '@/components/Tabs/Tabs.css'

export const Root = TabsPrimitive.Root

export const List = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List> & styles.ListVariants
>(({ ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={styles.list()} {...props} />
))

List.displayName = TabsPrimitive.List.displayName

export const Trigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    styles.TriggerVariants
>(({ children, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={styles.trigger()} {...props}>
    <div className={styles.triggerWrapper()}>
      <div className={styles.triggerChildrenWrapper()}>{children}</div>
      <Indicator />
    </div>
  </TabsPrimitive.Trigger>
))

Trigger.displayName = TabsPrimitive.Trigger.displayName

export const Content = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    styles.ContentVariants
>(({ ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={styles.content()} {...props} />
))

Content.displayName = TabsPrimitive.Content.displayName

const Indicator = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.IndicatorVariants
>(({ ...props }, ref) => {
  return <div ref={ref} className={styles.indicator()} {...props} />
})

Indicator.displayName = 'Indicator'

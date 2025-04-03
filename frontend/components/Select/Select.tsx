import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as styles from '@/components/Select/Select.css'
import * as SelectPrimitive from '@radix-ui/react-select'
import { IcCheckOutline, IcChevOutline } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'

export const Root = SelectPrimitive.Root

export const Group = SelectPrimitive.Group

export const Value = SelectPrimitive.Value

export const Trigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    styles.TriggerVariants
>(({ children, layout, color, shape, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={styles.trigger({ layout, color, shape })}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-icon className={styles.icon()}>
        <Icon size='m' color='primary' rotate={180}>
          <IcChevOutline />
        </Icon>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})

Trigger.displayName = SelectPrimitive.Trigger.displayName || 'Trigger'

export const Content = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    styles.ContentVariants
>(
  (
    {
      children,
      sideOffset = 8,
      position = 'popper',
      align = 'end',
      layout = 'hug',
      ...props
    },
    ref,
  ) => {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={styles.content({ layout })}
          sideOffset={sideOffset}
          position={position}
          align={align}
          {...props}
        >
          <SelectPrimitive.Viewport className={styles.viewport()}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  },
)

Content.displayName = SelectPrimitive.Content.displayName

export const Label = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & styles.LabelVariants
>(({ ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={styles.label()} {...props} />
))

Label.displayName = SelectPrimitive.Label.displayName

export const Item = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & styles.ItemVariants
>(({ children, layout, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={styles.item({ layout })}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator data-indicator>
        <Icon size='s' color='primary'>
          <IcCheckOutline />
        </Icon>
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})

Item.displayName = SelectPrimitive.Item.displayName

export const Separator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    styles.SeparatorVariants
>(({ ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={styles.separator()}
    {...props}
  />
))

Separator.displayName = SelectPrimitive.Separator.displayName

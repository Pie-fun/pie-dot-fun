import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as styles from '@/components/DropdownMenu/DropdownMenu.css'
import { Icon } from '@/components/Icon/Icon'
import { IcCheckOutline } from '@/components/Icon/Icons'

export const Root = DropdownMenuPrimitive.Root

export const Trigger = DropdownMenuPrimitive.Trigger

export const Portal = DropdownMenuPrimitive.Portal

export const Sub = DropdownMenuPrimitive.Sub

export const RadioGroup = DropdownMenuPrimitive.RadioGroup

export const SubTrigger = DropdownMenuPrimitive.SubTrigger

export const SubContent = DropdownMenuPrimitive.SubContent

export const Group = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Group>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group> &
    styles.GroupVariants
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Group
      ref={ref}
      className={styles.group()}
      {...props}
    />
  )
})

Group.displayName = DropdownMenuPrimitive.Group.displayName

export const Content = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
    styles.ContentVariants
>(({ sideOffset = 8, align = 'end', ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        align={align}
        className={styles.content()}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
})

Content.displayName = DropdownMenuPrimitive.Content.displayName

export const Item = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
    styles.ItemVariants
>(({ ...props }, ref) => (
  <DropdownMenuPrimitive.Item ref={ref} className={styles.item()} {...props} />
))

Item.displayName = DropdownMenuPrimitive.Item.displayName

const ItemIndicatorWrapper = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'> & styles.ItemIndicatorVariants
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className={styles.itemIndicator()} {...props}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon>{children}</Icon>
      </DropdownMenuPrimitive.ItemIndicator>
    </div>
  )
})

ItemIndicatorWrapper.displayName = 'ItemIndicatorWrapper'

export const CheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> &
    styles.CheckboxItemVariants
>(({ children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={styles.checkboxItem()}
    checked={checked}
    {...props}
  >
    <ItemIndicatorWrapper>
      <IcCheckOutline />
    </ItemIndicatorWrapper>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))

CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

export const RadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> &
    styles.RadioItemVariants
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={styles.radioItem()}
    {...props}
  >
    <ItemIndicatorWrapper>
      <IcCheckOutline />
    </ItemIndicatorWrapper>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))

RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export const Label = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> &
    styles.LabelVariants
>(({ inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={styles.label({ inset })}
    {...props}
  />
))

Label.displayName = DropdownMenuPrimitive.Label.displayName

export const Separator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> &
    styles.SeparatorVariants
>(({ ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={styles.separator()}
    {...props}
  />
))

Separator.displayName = DropdownMenuPrimitive.Separator.displayName

export const Shortcut = ({
  ...props
}: HTMLAttributes<HTMLSpanElement> & styles.ShortcutVariants) => {
  return <span className={styles.shortcut()} {...props} />
}

Shortcut.displayName = 'Shortcut'

export const Header = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.HeaderVariants) => {
  return <div className={styles.header()} {...props} />
}

Header.displayName = 'Header'

export const Footer = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.FooterVariants) => {
  return <div className={styles.footer()} {...props} />
}

Footer.displayName = 'Footer'

'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from 'react'
import * as styles from '@/components/AlertDialog/AlertDialog.css'

export const Root = AlertDialogPrimitive.Root

export const Trigger = AlertDialogPrimitive.Trigger

export const Portal = AlertDialogPrimitive.Portal

export const Overlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> &
    styles.OverlayVariants
>(({ ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={styles.overlay()}
    {...props}
    ref={ref}
  />
))

Overlay.displayName = AlertDialogPrimitive.Overlay.displayName

export const Content = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> &
    styles.ContentVariants
>(({ ...props }, ref) => (
  <Portal>
    <Overlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={styles.content()}
      {...props}
    />
  </Portal>
))

Content.displayName = AlertDialogPrimitive.Content.displayName

type HeaderProps = {
  leftContent?: ReactNode
  centerContent?: ReactNode
  rightContent?: ReactNode
}

export const Header = ({
  leftContent,
  centerContent,
  rightContent,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & HeaderProps & styles.HeaderVariants) => {
  return (
    <header className={styles.header()} {...props}>
      <div className={styles.headerContent({ position: 'left' })}>
        {leftContent}
      </div>
      <div className={styles.headerContent({ position: 'center' })}>
        {centerContent}
        {children}
      </div>
      <div className={styles.headerContent({ position: 'right' })}>
        {rightContent}
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export const Body = ({
  size,
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.BodyVariants) => {
  return <div className={styles.body({ size })} {...props} />
}

Body.displayName = 'Body'

export const Footer = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.FooterVariants) => {
  return <footer className={styles.footer()} {...props} />
}

Footer.displayName = 'Footer'

export const Title = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> &
    styles.TitleVariants
>(({ isHide, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={styles.title({ isHide })}
    {...props}
  />
))

Title.displayName = AlertDialogPrimitive.Title.displayName

export const Description = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> &
    styles.DescriptionVariants
>(({ isHide, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={styles.description({ isHide })}
    {...props}
  />
))

Description.displayName = AlertDialogPrimitive.Description.displayName

export const Action = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ ...props }, ref) => <AlertDialogPrimitive.Action ref={ref} {...props} />)

Action.displayName = AlertDialogPrimitive.Action.displayName

export const Cancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ ...props }, ref) => <AlertDialogPrimitive.Cancel ref={ref} {...props} />)

Cancel.displayName = AlertDialogPrimitive.Cancel.displayName

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'
import * as styles from '@/components/Dialog/Dialog.css'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { IcXOutline } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'
import { Button } from '@/components/Button/Button'

type RootProps = {
  isDisableOverlay?: boolean
}

export const Root = ({
  children,
  isDisableOverlay,
  ...props
}: ComponentProps<typeof DialogPrimitive.Root> & RootProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      {!isDisableOverlay && (
        <Portal>
          <Overlay />
        </Portal>
      )}
      {children}
    </DialogPrimitive.Root>
  )
}

Root.displayName = DialogPrimitive.Root.displayName

export const Trigger = DialogPrimitive.Trigger

const Portal = DialogPrimitive.Portal

export const Close = DialogPrimitive.Close

const Overlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    styles.OverlayVariants
>(({ ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={styles.overlay()} {...props} />
))

Overlay.displayName = DialogPrimitive.Overlay.displayName

export const Content = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    styles.ContentVariants
>(({ ...props }, ref) => {
  return (
    <Portal>
      <DialogPrimitive.Content
        ref={ref}
        className={styles.content()}
        {...props}
      />
    </Portal>
  )
})

Content.displayName = DialogPrimitive.Content.displayName

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
        <DialogPrimitive.Close asChild>
          <Button
            buttonType='text'
            shape='square'
            color='secondary'
            size='squareS'
          >
            <Icon size='s'>
              <IcXOutline />
            </Icon>
          </Button>
        </DialogPrimitive.Close>
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
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & styles.TitleVariants
>(({ isHide, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={styles.title({ isHide })}
    {...props}
  />
))

Title.displayName = DialogPrimitive.Title.displayName

export const Description = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    styles.DescriptionVariants
>(({ isHide, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={styles.description({ isHide })}
    data-dialog-description
    {...props}
  />
))

Description.displayName = DialogPrimitive.Description.displayName

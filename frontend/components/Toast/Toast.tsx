'use client'

import * as ToastPrimitives from '@radix-ui/react-toast'
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactElement,
} from 'react'
import * as styles from '@/components/Toast/Toast.css'
import { IcXOutline } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'
import { useToast } from '@/components/Toast/useToast'

export const Provider = ToastPrimitives.Provider

export const Viewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> &
    styles.ViewportVariants
>(({ stackPosition, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={styles.viewport({ stackPosition })}
    {...props}
  />
))

Viewport.displayName = ToastPrimitives.Viewport.displayName

export const Root = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & styles.RootVariants
>(({ ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={styles.root()} {...props} />
})

Root.displayName = ToastPrimitives.Root.displayName

export const Action = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action> &
    styles.ActionVariants
>(({ ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={styles.action()} {...props} />
))

Action.displayName = ToastPrimitives.Action.displayName

export const Close = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & styles.CloseVariants
>(({ ...props }, ref) => (
  <ToastPrimitives.Close ref={ref} className={styles.close()} {...props}>
    <Icon size='s' color='inverse'>
      <IcXOutline />
    </Icon>
  </ToastPrimitives.Close>
))

Close.displayName = ToastPrimitives.Close.displayName

export const Title = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & styles.TitleVariants
>(({ ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={styles.title()} {...props} />
))

Title.displayName = ToastPrimitives.Title.displayName

export const Description = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description> &
    styles.DescriptionVariants
>(({ ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={styles.description()}
    {...props}
  />
))

Description.displayName = ToastPrimitives.Description.displayName

export type ToastRootProps = ComponentPropsWithoutRef<typeof Root>

export type ToastActionElement = ReactElement<typeof Action>

export type ToasterProps = Pick<
  ToastPrimitives.ToastProviderProps,
  'duration'
> &
  Pick<ComponentProps<typeof Viewport>, 'stackPosition' | 'hotkey'> & {
    name?: string
  }

export function Toaster({
  duration,
  stackPosition = 'bottom',
  hotkey,
}: ToasterProps & styles.ToasterVariants) {
  const { toasts } = useToast()

  return (
    <Provider duration={duration}>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Root key={id} {...props}>
            <div className={styles.toaster()}>
              {title && <Title>{title}</Title>}
              {description && <Description>{description}</Description>}
            </div>
            {action}
            <Close />
          </Root>
        )
      })}
      <Viewport stackPosition={stackPosition} hotkey={hotkey} />
    </Provider>
  )
}

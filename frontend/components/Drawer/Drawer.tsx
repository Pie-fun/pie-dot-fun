'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import * as styles from '@/components/Drawer/Drawer.css'
import { useMutationObserver } from '@/hooks/useMutationObserver'

type ContextProps = {
  isOpen?: boolean
}

export const Context = createContext<ContextProps>({})

export const Provider = ({ ...props }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isTransformed, setIsTransformed] = useState(false)
  const value = useMemo(() => ({ isOpen: isTransformed }), [isTransformed])

  const transformCheckByMutation = () => {
    if (ref.current?.getAttribute('aria-hidden') === 'true') {
      setIsTransformed(true)
    }
  }

  const transformCheckByTransitionEnd = () => {
    if (ref.current?.getAttribute('aria-hidden') !== 'true') {
      setIsTransformed(false)
    }
  }

  useMutationObserver({
    ref,
    callback: transformCheckByMutation,
  })

  useEffect(() => {
    if (ref.current) {
      const element = ref.current

      element.addEventListener('transitionend', transformCheckByTransitionEnd)

      return () => {
        element.removeEventListener(
          'transitionend',
          transformCheckByTransitionEnd,
        )
      }
    }
  }, [])

  return (
    <Context.Provider value={value}>
      <div
        ref={ref}
        data-vaul-drawer-wrapper
        className={styles.provider({ isTransformed })}
        {...props}
      />
    </Context.Provider>
  )
}

export const Root = ({
  shouldScaleBackground = false,
  repositionInputs = false,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    repositionInputs={repositionInputs}
    {...props}
  />
)

Root.displayName = 'Root'

export const Trigger = DrawerPrimitive.Trigger

export const Portal = DrawerPrimitive.Portal

export const Close = DrawerPrimitive.Close

export const Overlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> &
    styles.OverlayVariants
>(({ ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={styles.overlay()} {...props} />
))

Overlay.displayName = DrawerPrimitive.Overlay.displayName

export const Content = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> &
    styles.ContentVariants
>(({ children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DrawerPrimitive.Content ref={ref} className={styles.content()} {...props}>
      <div className={styles.scrollable()}>
        <div className={styles.indicator()} />
        {children}
      </div>
    </DrawerPrimitive.Content>
  </Portal>
))

Content.displayName = 'Content'

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
}: HTMLAttributes<HTMLDivElement> & styles.BodyVariants) => (
  <div className={styles.body({ size })} {...props} />
)

Body.displayName = 'Body'

export const Footer = ({
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.FooterVariants) => (
  <div className={styles.footer()} {...props} />
)

Footer.displayName = 'Footer'

export const Title = forwardRef<
  ElementRef<typeof DrawerPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & styles.TitleVariants
>(({ isHide, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={styles.title({ isHide })}
    {...props}
  />
))

Title.displayName = DrawerPrimitive.Title.displayName

export const Description = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> &
    styles.DescriptionVariants
>(({ isHide, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={styles.description({ isHide })}
    {...props}
  />
))

Description.displayName = DrawerPrimitive.Description.displayName

export const NestedRoot = ({
  ...props
}: ComponentProps<typeof DrawerPrimitive.NestedRoot>) => (
  <DrawerPrimitive.NestedRoot {...props} />
)

NestedRoot.displayName = 'NestedRoot'

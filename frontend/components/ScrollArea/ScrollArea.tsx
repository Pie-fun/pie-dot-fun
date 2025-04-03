'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from 'react'
import * as styles from '@/components/ScrollArea/ScrollArea.css'

type ScrollAreaProps = {
  width?: number | string
  height?: number | string
}

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> &
    ScrollAreaProps &
    ComponentProps<typeof ScrollBar>
>(({ children, style, width, height, orientation, isHide, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={styles.scrollArea()}
    {...((width || height) && {
      style: { width, height, ...style },
    })}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={styles.viewport()}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation={orientation} isHide={isHide} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> &
    styles.ScrollBarVariants
>(({ orientation = 'vertical', isHide, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={styles.scrollBar({ orientation, isHide })}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={styles.thumb()} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  MouseEvent,
  TouchEvent,
  useContext,
  useMemo,
  useState,
} from 'react'
import * as styles from '@/components/Tooltip/Tooltip.css'
import TooltipContext from '@/components/Tooltip/Tooltip.context'

export const Portal = TooltipPrimitive.Portal

export function Provider({
  ...props
}: Readonly<ComponentProps<typeof TooltipPrimitive.Provider>>) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen])

  return (
    <TooltipContext.Provider value={value}>
      <TooltipPrimitive.Provider {...props} />
    </TooltipContext.Provider>
  )
}

export function Root({
  delayDuration = 0,
  ...props
}: Readonly<ComponentProps<typeof TooltipPrimitive.Root>>) {
  const tooltipContext = useContext(TooltipContext)

  return (
    <TooltipPrimitive.Root
      delayDuration={delayDuration}
      open={tooltipContext?.isOpen}
      {...props}
    />
  )
}

export const Trigger = forwardRef<
  ElementRef<typeof TooltipPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ onMouseEnter, onMouseLeave, onTouchStart, ...props }, ref) => {
  const tooltipContext = useContext(TooltipContext)

  const onMouseEnterHandling = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    tooltipContext?.setIsOpen?.(true)
    onMouseEnter?.(event)
  }

  const onMouseLeaveHandling = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    tooltipContext?.setIsOpen?.(false)
    onMouseLeave?.(event)
  }

  const onTouchStartHandling = (event: TouchEvent<HTMLButtonElement>) => {
    tooltipContext?.setIsOpen?.(!tooltipContext?.isOpen)
    onTouchStart?.(event)
  }

  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      onMouseEnter={onMouseEnterHandling}
      onMouseLeave={onMouseLeaveHandling}
      onTouchStart={onTouchStartHandling}
      {...props}
    />
  )
})

Trigger.displayName = TooltipPrimitive.Trigger.displayName

export const Content = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    styles.ContentVariants &
    styles.ArrowVariants
>(
  (
    {
      children,
      sideOffset = 8,
      alignOffset = -8,
      align = 'end',
      side = 'bottom',
      color,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      align={align}
      side={side}
      className={styles.content({ color })}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow
        width={10}
        height={8}
        className={styles.arrow({ color })}
      />
    </TooltipPrimitive.Content>
  ),
)

Content.displayName = TooltipPrimitive.Content.displayName

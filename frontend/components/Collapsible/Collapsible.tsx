'use client'

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import * as styles from '@/components/Collapsible/Collapsible.css'
import { Ellipsis } from '@/components/Ellipsis/Ellipsis'

export const Root = CollapsiblePrimitive.Root

export const Trigger = CollapsiblePrimitive.CollapsibleTrigger

export const Content = CollapsiblePrimitive.CollapsibleContent

export const Collapsible = forwardRef<
  ElementRef<typeof CollapsiblePrimitive.Root>,
  ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> &
    ComponentPropsWithoutRef<typeof Ellipsis> &
    styles.TriggerVariants
>(({ children, open, lineClamp = 1, color, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(!!open)
  const [isShowTrigger, setIsShowTrigger] = useState(false)
  const ellipsisRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)
  const openTriggerRef = useRef<HTMLButtonElement>(null)
  const closeTriggerRef = useRef<HTMLButtonElement>(null)

  const setTriggerVisible = useCallback(() => {
    if (contentRef.current && ellipsisRef.current) {
      const contentHeight = contentRef.current.offsetHeight
      const ellipsisHeight = ellipsisRef.current.offsetHeight

      setIsShowTrigger(contentHeight > ellipsisHeight)
    }
  }, [])

  useEffect(() => {
    setTriggerVisible()
  }, [children, setTriggerVisible])

  useEffect(() => {
    window.addEventListener('resize', setTriggerVisible)

    return () => {
      window.removeEventListener('resize', setTriggerVisible)
    }
  }, [setTriggerVisible])

  return (
    <CollapsiblePrimitive.Root
      ref={ref}
      className={styles.root()}
      open={isOpen}
      {...props}
    >
      {!isOpen && (
        <>
          <Ellipsis ref={ellipsisRef} lineClamp={lineClamp}>
            <span ref={contentRef}>{children}</span>
          </Ellipsis>
          {isShowTrigger && (
            <CollapsiblePrimitive.Trigger
              ref={openTriggerRef}
              className={styles.trigger({ color })}
              onClick={() => setIsOpen(!isOpen)}
            >
              View more
            </CollapsiblePrimitive.Trigger>
          )}
        </>
      )}
      <CollapsiblePrimitive.Content>{children}</CollapsiblePrimitive.Content>
      {isShowTrigger && isOpen && (
        <CollapsiblePrimitive.Trigger
          ref={closeTriggerRef}
          className={styles.trigger({ color })}
          onClick={() => setIsOpen(!isOpen)}
        >
          View less
        </CollapsiblePrimitive.Trigger>
      )}
    </CollapsiblePrimitive.Root>
  )
})

Collapsible.displayName = 'Collapsible'

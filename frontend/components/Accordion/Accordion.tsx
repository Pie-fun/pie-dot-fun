'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as styles from '@/components/Accordion/Accordion.css'
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import { IcChevOutline } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'

export const Root = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  ComponentPropsWithRef<typeof AccordionPrimitive.Root> & styles.RootVariants
>(({ layout, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={styles.root({ layout })}
    {...props}
  />
))

Root.displayName = AccordionPrimitive.Root.displayName

export const Item = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithRef<typeof AccordionPrimitive.Item> & styles.ItemVariants
>(({ ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={styles.item()} {...props} />
))

Item.displayName = AccordionPrimitive.Item.displayName

export const Trigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithRef<typeof AccordionPrimitive.Trigger> &
    styles.TriggerVariants
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={styles.trigger()}
      {...props}
    >
      {children}
      <Icon size='m' rotate={180}>
        <IcChevOutline className={styles.triggerIcon()} />
      </Icon>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

Trigger.displayName = AccordionPrimitive.Trigger.displayName

export const Content = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithRef<typeof AccordionPrimitive.Content> &
    styles.ContentVariants
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={styles.content()} {...props}>
    <div className={styles.contentChildren()}>{children}</div>
  </AccordionPrimitive.Content>
))

Content.displayName = AccordionPrimitive.Content.displayName

'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
  useMemo,
} from 'react'
import * as styles from '@/components/ToggleGroup/ToggleGroup.css'

const Context = createContext<styles.ItemVariants>({})

export const Root = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    styles.ItemVariants
>(
  (
    {
      size = 'm',
      toggleGroupType = 'solid',
      color,
      layout,
      children,
      ...props
    },
    ref,
  ) => {
    const value = useMemo(
      () => ({ size, toggleGroupType, color, layout }),
      [size, toggleGroupType, color, layout],
    )

    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={styles.root({ toggleGroupType, layout })}
        {...props}
      >
        <Context.Provider value={value}>{children}</Context.Provider>
      </ToggleGroupPrimitive.Root>
    )
  },
)

Root.displayName = ToggleGroupPrimitive.Root.displayName

export const Item = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    styles.ItemVariants
>(({ children, color, ...props }, ref) => {
  const context = useContext(Context)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={styles.item({ ...context, color: color || context?.color })}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

Item.displayName = ToggleGroupPrimitive.Item.displayName

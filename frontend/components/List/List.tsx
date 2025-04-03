import { HTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/List/List.css'

export const Root = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement> & styles.RootVariants
>(({ layout, listStyleType, ...props }, ref) => (
  <ul
    ref={ref}
    className={styles.root({
      layout,
      listStyleType,
    })}
    {...props}
  />
))

Root.displayName = 'Root'

export const Item = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement> & styles.ItemVariants
>(({ layout, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={styles.item({
        layout,
      })}
      {...props}
    />
  )
})

Item.displayName = 'Item'

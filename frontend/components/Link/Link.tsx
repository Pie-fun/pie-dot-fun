import { ComponentPropsWithRef, forwardRef } from 'react'
import { Link as LinkPrimitive } from '@/libs/next-intl/routing'
import * as styles from '@/components/Link/Link.css'

type LinkProps = {
  isExternal?: boolean
}

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithRef<typeof LinkPrimitive> & styles.LinkVariants & LinkProps
>(({ layout, color, isUnderline, isExternal, target, rel, ...props }, ref) => {
  return (
    <LinkPrimitive
      ref={ref}
      className={styles.link({
        layout,
        color,
        isUnderline,
      })}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopenner noreferrer' : rel}
      {...props}
    />
  )
})

Link.displayName = 'Link'

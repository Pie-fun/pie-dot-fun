import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/types/utility'
import * as styles from '@/components/Box/Box.css'

type BoxProps = styles.BoxVariants

type Component = PolymorphicComponent<ElementType, BoxProps>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Can't create polymorphic components with exact types
export const Box: Component = forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Can't create polymorphic components with exact types
  <T extends ElementType = 'div'>(
    {
      as,
      layout = 'hug',
      orientation = 'horizontal',
      gap,
      align,
      marginBottom,
      style,
      ...props
    }: PolymorphicComponentProps<T, BoxProps>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'div'

    return (
      <Element
        ref={ref}
        className={styles.box({
          layout,
          orientation,
          align,
          gap,
          marginBottom,
        })}
        style={{
          ...style,
        }}
        {...props}
      />
    )
  },
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Can't create polymorphic components with exact types
Box.displayName = 'Box'

import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/types/utility'
import * as styles from '@/components/Typography/Typography.css'

type TypographyProps = styles.TypographyVariants

type Component = PolymorphicComponent<ElementType, TypographyProps>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Can't create polymorphic components with exact types
export const Typography: Component = forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Can't create polymorphic components with exact types
  <T extends ElementType = 'span'>(
    {
      as,
      layout = 'hug',
      fontWeight,
      typography,
      color,
      isUnderline,
      wordBreak,
      textAlign,
      ...props
    }: PolymorphicComponentProps<T, TypographyProps>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'span'

    return (
      <Element
        ref={ref}
        className={styles.typography({
          layout,
          fontWeight,
          typography,
          color,
          isUnderline,
          wordBreak,
          textAlign,
        })}
        {...props}
      />
    )
  },
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Can't create polymorphic components with exact types
Typography.displayName = 'Typography'

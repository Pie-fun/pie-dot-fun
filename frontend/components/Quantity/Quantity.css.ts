import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const quantity = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      l: [
        typographyStyles.typography({
          typography: 'title1',
        }),
      ],
      m: [
        typographyStyles.typography({
          typography: 'body1',
        }),
      ],
      s: [
        typographyStyles.typography({
          typography: 'body2',
        }),
      ],
      xs: [
        typographyStyles.typography({
          typography: 'caption2',
        }),
      ],
    },
    fontWeight: {
      bold: {
        fontWeight: '700',
      },
      medium: {
        fontWeight: '500',
      },
      regular: {
        fontWeight: '400',
      },
    },
  },
  defaultVariants: {},
})

export type QuantityVariants = RecipeVariants<typeof quantity>

export const sub = recipe({
  base: {
    marginTop: 'auto',
  },
  variants: {
    size: {
      l: [
        typographyStyles.typography({
          typography: 'title4',
        }),
      ],
      m: [
        typographyStyles.typography({
          typography: 'caption2',
        }),
      ],
      s: [
        typographyStyles.typography({
          typography: 'caption3',
        }),
      ],
      xs: [
        typographyStyles.typography({
          typography: 'caption3',
        }),
      ],
    },
  },
  defaultVariants: {},
})

export type SubVariants = RecipeVariants<typeof sub>

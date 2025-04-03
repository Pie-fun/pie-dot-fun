import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    currencyType: {
      fiat: {},
      crypto: {},
    },
    size: {
      l: {},
      m: {},
      s: {},
      xs: {},
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
  compoundVariants: [
    {
      variants: {
        currencyType: 'fiat',
        size: 'l',
      },
      style: [
        typographyStyles.typography({
          typography: 'title1',
        }),
      ],
    },
    {
      variants: {
        currencyType: 'fiat',
        size: 'm',
      },
      style: [
        typographyStyles.typography({
          typography: 'body1',
        }),
      ],
    },
    {
      variants: {
        currencyType: 'fiat',
        size: 's',
      },
      style: [
        typographyStyles.typography({
          typography: 'body2',
        }),
      ],
    },
    {
      variants: {
        currencyType: 'fiat',
        size: 'xs',
      },
      style: [
        typographyStyles.typography({
          typography: 'caption2',
        }),
      ],
    },
  ],
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

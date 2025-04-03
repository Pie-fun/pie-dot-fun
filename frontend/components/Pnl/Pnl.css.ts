import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: [
    typographyStyles.typography({ typography: 'body2', fontWeight: 'regular' }),
    {
      display: 'inline-flex',
      alignItems: 'center',
      gap: vars.spaces.xxs,
    },
  ],
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
        height: 'fit-content',
      },
      fillWidth: {
        width: '100%',
        height: 'fit-content',
      },
    },
    color: {
      default: {
        color: vars.colors.texts.tertiary,
      },
      positive: {
        color: vars.colors.texts.info.primary,
      },
      negative: {
        color: vars.colors.texts.alert.primary,
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const currencyWithquantity = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.xxxs,
  },
  variants: {},
  defaultVariants: {},
})

export type CurrencyWithQuantityVariants = RecipeVariants<
  typeof currencyWithquantity
>

export const quantity = recipe({
  base: [
    typographyStyles.typography({ typography: 'body2', fontWeight: 'bold' }),
  ],
  variants: {},
  defaultVariants: {},
})

export type QuantityVariants = RecipeVariants<typeof quantity>

import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'

export const currencyWithQuantity = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spaces.xxxs,
  },
  variants: {},
  defaultVariants: {},
})

export type CurrencyWithQuantityVariants = RecipeVariants<
  typeof currencyWithQuantity
>

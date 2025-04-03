import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const transformedValue = recipe({
  base: {
    marginLeft: 'auto',
    display: 'flex',
    gap: vars.spaces.xxs,
    color: vars.colors.texts.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type TransformedValueVariants = RecipeVariants<typeof transformedValue>

export const estimateNetworkFee = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.xxs,
    alignItems: 'center',
    color: vars.colors.texts.tertiary,
  },
  variants: {},
  defaultVariants: {},
})

export type EstimateNetworkFeeVariants = RecipeVariants<
  typeof estimateNetworkFee
>

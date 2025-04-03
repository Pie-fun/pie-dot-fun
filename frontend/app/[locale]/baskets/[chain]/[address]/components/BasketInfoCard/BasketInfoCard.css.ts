import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const tooltip = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type TooltipVariants = RecipeVariants<typeof tooltip>

export const streamingFee = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type StreamingFeeVariants = RecipeVariants<typeof streamingFee>

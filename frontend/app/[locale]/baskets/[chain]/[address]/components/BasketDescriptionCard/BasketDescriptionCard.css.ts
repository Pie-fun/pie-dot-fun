import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const skeletons = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type SkeletonsVariants = RecipeVariants<typeof skeletons>

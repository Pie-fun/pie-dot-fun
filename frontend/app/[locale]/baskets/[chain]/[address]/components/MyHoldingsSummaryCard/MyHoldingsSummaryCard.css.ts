import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const keyValues = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.m,
    flexWrap: 'wrap',
  },
  variants: {},
  defaultVariants: {},
})

export type KeyValuesVariants = RecipeVariants<typeof keyValues>

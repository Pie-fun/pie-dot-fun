import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    height: '100%',
  },
  variants: {},
})

export type RootVariants = RecipeVariants<typeof root>

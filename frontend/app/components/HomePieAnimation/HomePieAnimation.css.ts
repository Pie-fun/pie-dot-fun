import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    position: 'relative',
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '8px',
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

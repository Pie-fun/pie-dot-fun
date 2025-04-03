import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    width: '100%',
    maxWidth: '42.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const topLeft = recipe({
  base: {
    position: 'fixed',
    top: '185px',
    left: '-44px',
    transform: 'rotate(-30deg)',
  },
  variants: {},
  defaultVariants: {},
})

export type TopLeftVariants = RecipeVariants<typeof topLeft>

export const bottomRight = recipe({
  base: {
    position: 'fixed',
    bottom: '100px',
    right: '-35px',
    transform: 'rotate(30deg)',
  },
  variants: {},
  defaultVariants: {},
})

export type BottomRightVariants = RecipeVariants<typeof bottomRight>

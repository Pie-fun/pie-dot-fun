import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'

export const content = recipe({
  base: {
    selectors: {
      '&[data-state="open"]': {
        ...animations.fadeIn,
      },
      '&[data-state="closed"]': {
        ...animations.fadeOut,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

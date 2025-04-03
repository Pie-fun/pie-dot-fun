import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fillWidth: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    layout: 'fillWidth',
  },
})

export type RootVariants = RecipeVariants<typeof root>

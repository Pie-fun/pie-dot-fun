import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.xxs,
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
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    width: '100%',
    gap: vars.spaces.xxxs,
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

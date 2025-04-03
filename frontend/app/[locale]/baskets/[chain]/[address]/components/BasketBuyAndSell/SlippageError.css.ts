import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: vars.spaces.l,

    '@media': {
      [queries.breakpoints.mobile]: {
        padding: vars.spaces.m,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const buttons = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: vars.spaces.m,
    width: '100%',
  },
  variants: {},
  defaultVariants: {},
})

export type ButtonsVariants = RecipeVariants<typeof buttons>

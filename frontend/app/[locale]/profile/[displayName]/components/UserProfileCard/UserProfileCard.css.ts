import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.s,

    '@media': {
      [queries.breakpoints.mobile]: {
        flexDirection: 'column',
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

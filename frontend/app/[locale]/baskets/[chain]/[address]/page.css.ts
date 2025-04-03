import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const sections = recipe({
  base: {
    display: 'grid',
    gap: vars.spaces.m,

    '@media': {
      [queries.breakpoints.mobile]: {
        gridTemplateColumns: 'minmax(0, 1fr)',
      },
      [queries.breakpoints.desktop]: {
        gridTemplateColumns: 'minmax(0, 1fr) 21.25rem',
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type SectionsVariants = RecipeVariants<typeof sections>

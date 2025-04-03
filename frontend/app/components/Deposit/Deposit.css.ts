import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const body = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.m,
    paddingLeft: vars.spaces.l,
    paddingRight: vars.spaces.l,
    paddingBottom: vars.spaces.l,
    width: '45rem',
  },
  variants: {},
  defaultVariants: {},
})

export type BodyVariants = RecipeVariants<typeof body>

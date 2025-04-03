import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const unAvailableBody = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
    alignItems: 'center',
    paddingBottom: vars.spaces.l,
  },
  variants: {},
  defaultVariants: {},
})

export type UnAvailableBodyVariants = RecipeVariants<typeof unAvailableBody>

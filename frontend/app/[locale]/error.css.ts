import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
    paddingTop: vars.spaces.xxl,
    width: '100%',
    alignItems: 'center',
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const buttons = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type ButtonsVariants = RecipeVariants<typeof buttons>

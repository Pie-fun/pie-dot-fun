import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const cardTitle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type CardTitleVariants = RecipeVariants<typeof cardTitle>

export const actions = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.s,
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  },
  variants: {},
  defaultVariants: {},
})

export type ActionsVariants = RecipeVariants<typeof actions>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

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

export const empty = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: `${vars.spaces.s} 0`,
  },
  variants: {},
  defaultVariants: {},
})

export type EmptyVariants = RecipeVariants<typeof empty>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    verticalAlign: 'middle',
    gap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const button = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '1.5rem',
    height: '100%',
  },
  variants: {},
  defaultVariants: {},
})

export type ButtonVariants = RecipeVariants<typeof button>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const triggers = recipe({
  base: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    display: 'flex',
    gap: vars.spaces.s,
    width: '100%',
    paddingLeft: vars.spaces.m,
    paddingRight: vars.spaces.m,
    paddingBottom: `calc(env(safe-area-inset-bottom) + ${vars.spaces.s})`,
    zIndex: 3,
  },
  variants: {},
  defaultVariants: {},
})

export type TriggersVariants = RecipeVariants<typeof triggers>

export const content = recipe({
  base: {
    padding: vars.spaces.m,
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

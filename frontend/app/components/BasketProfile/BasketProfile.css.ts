import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  variants: {
    size: {
      m: {
        gap: vars.spaces.m,
      },
      s: {
        gap: vars.spaces.s,
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    width: '100%',
  },
  variants: {
    size: {
      m: {
        gap: vars.spaces.xxs,
      },
      s: {
        gap: vars.spaces.xxxs,
      },
    },
  },
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const ticker = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.xxxs,
    textTransform: 'uppercase',
  },
  variants: {},
  defaultVariants: {},
})

export type TickerVariants = RecipeVariants<typeof ticker>

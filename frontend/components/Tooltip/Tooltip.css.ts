import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'

export const arrow = recipe({
  base: {
    stroke: 'none',
  },
  variants: {
    color: {
      default: {
        fill: vars.colors.backgrounds.inverse,
      },
    },
  },
  defaultVariants: {},
})

export type ArrowVariants = NonNullable<RecipeVariants<typeof arrow>>

export const content = recipe({
  base: [
    {
      maxWidth: '18.75rem',
      paddingTop: vars.spaces.s,
      paddingBottom: vars.spaces.s,
      paddingLeft: vars.spaces.m,
      paddingRight: vars.spaces.m,
      borderRadius: vars.radiuses.xs,
      overflow: 'hidden',
      zIndex: 50,
    },
  ],
  variants: {
    color: {
      default: {
        background: vars.colors.backgrounds.inverse,
        color: vars.colors.texts.inverse,
      },
    },
  },
  defaultVariants: {},
})

export type ContentVariants = NonNullable<RecipeVariants<typeof content>>

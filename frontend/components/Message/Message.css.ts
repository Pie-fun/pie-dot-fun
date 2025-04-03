import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: [
    {
      display: 'inline-flex',
      gap: vars.spaces.xxs,
      alignItems: 'center',
    },
  ],
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fillWidth: {
        width: '100%',
      },
    },
    color: {
      primary: {
        color: vars.colors.texts.tertiary,
      },
      brand: {
        color: vars.colors.texts.brand.primary,
      },
      positive: {
        color: vars.colors.texts.info.primary,
      },
      error: {
        color: vars.colors.texts.alert.primary,
      },
    },
  },
  defaultVariants: {
    layout: 'hug',
    color: 'primary',
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const icon = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
  },
  variants: {},
  defaultVariants: {},
})

export type IconVariants = RecipeVariants<typeof icon>

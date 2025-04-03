import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    display: 'grid',
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fillWidth: {
        width: '100%',
      },
    },
    orientation: {
      horizontal: {
        gridTemplateColumns: 'auto auto',
        justifyContent: 'space-between',
      },
      vertical: {
        gridTemplateColumns: '1fr',
      },
    },
    gap: {
      l: {
        gap: vars.spaces.s,
      },
      m: {
        gap: vars.spaces.xxs,
      },
    },
  },
  defaultVariants: {
    layout: 'fillWidth',
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const key = recipe({
  base: [
    typographyStyles.typography({
      typography: 'caption2',
      fontWeight: 'regular',
    }),
    {
      display: 'inline-flex',
      gap: vars.spaces.xxs,
      alignItems: 'center',
      color: vars.colors.texts.tertiary,
      width: 'max-content',
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type KeyVariants = RecipeVariants<typeof key>

export const value = recipe({
  base: [
    {
      display: 'inline-flex',
    },
  ],
  variants: {
    gap: {
      m: {
        gap: vars.spaces.xxs,
      },
      l: {
        gap: vars.spaces.s,
      },
    },
  },
  defaultVariants: {},
})

export type ValueVariants = RecipeVariants<typeof value>

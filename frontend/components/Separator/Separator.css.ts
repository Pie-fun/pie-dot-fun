import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const separator = recipe({
  base: {},
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
      },
      vertical: {
        height: 'auto',
      },
    },
    size: {
      1: {},
      2: {},
      3: {},
      4: {},
    },
    color: {
      default: {
        background: vars.colors.border.default,
      },
      primary: {
        background: vars.colors.border.primary,
      },
      secondary: {
        background: vars.colors.border.secondary,
      },
      brand: {
        background: vars.colors.border.brand.primary,
      },
      infoPrimary: {
        background: vars.colors.border.info.primary,
      },
      alertPrimary: {
        background: vars.colors.border.alert.primary,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        orientation: 'horizontal',
        size: 1,
      },
      style: {
        height: '1px',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        size: 2,
      },
      style: {
        height: '2px',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        size: 3,
      },
      style: {
        height: '3px',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        size: 4,
      },
      style: {
        height: '4px',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        size: 1,
      },
      style: {
        width: '1px',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        size: 2,
      },
      style: {
        width: '2px',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        size: 3,
      },
      style: {
        width: '3px',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        size: 4,
      },
      style: {
        width: '4px',
      },
    },
  ],
  defaultVariants: {
    size: 1,
    color: 'default',
  },
})

export type SeparatorVariants = RecipeVariants<typeof separator>

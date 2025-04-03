import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const checkboxWithLabel = recipe({
  base: {
    display: 'inline-flex',
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
    size: {
      m: {
        gap: vars.spaces.xs,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    layout: 'hug',
    size: 'm',
  },
})

export type CheckboxWithLabelVariants = RecipeVariants<typeof checkboxWithLabel>

export const checkbox = recipe({
  base: {
    marginTop: vars.spaces.xxxs,
  },
  variants: {},
  defaultVariants: {},
})

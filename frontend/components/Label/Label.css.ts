import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const label = recipe({
  base: [
    {
      display: 'inline-flex',
      cursor: 'pointer',
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
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: vars.opacities.disabled,
      },
    },
  },
  defaultVariants: {
    layout: 'hug',
  },
})

export type LabelVariants = RecipeVariants<typeof label>

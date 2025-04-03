import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '1rem',
    minHeight: '1rem',
    width: '1em',
    height: '1em',
    borderRadius: vars.radiuses.xs,
    background: vars.colors.backgrounds.primary,
    border: 0,
    padding: 0,
    cursor: 'pointer',
    verticalAlign: 'top',
    fontSize: 'inherit',

    selectors: {
      '&:hover:not(:disabled)': {
        opacity: vars.opacities.hover,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: vars.opacities.disabled,
      },
      '&[data-state="unchecked"]': {
        boxShadow: `inset 0 0 0 1px ${vars.colors.border.primary}`,
      },
      '&[data-state="checked"]': {
        background: vars.colors.backgrounds.brand.primary,
        color: vars.colors.texts.white,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const indicator = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {},
  defaultVariants: {},
})

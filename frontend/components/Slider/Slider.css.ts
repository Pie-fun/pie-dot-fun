import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'

export const root = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    transition: animations.defaultTransition,

    selectors: {
      '&[data-disabled]': {
        cursor: 'not-allowed',
        opacity: vars.opacities.disabled,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const track = recipe({
  base: {
    position: 'relative',
    height: '0.5rem',
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    borderRadius: vars.radiuses.m,
    backgroundColor: vars.colors.backgrounds.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type TrackVariants = RecipeVariants<typeof track>

export const range = recipe({
  base: {
    position: 'absolute',
    height: '100%',
    backgroundColor: vars.colors.backgrounds.brand.primary,
  },
  variants: {},
  defaultVariants: {},
})

export type RangeVariants = RecipeVariants<typeof range>

export const thumb = recipe({
  base: {
    display: 'block',
    height: '1.25rem',
    width: '1.25rem',
    borderRadius: vars.radiuses.max,
    border: `2px solid ${vars.colors.border.brand.primary}`,
    backgroundColor: vars.colors.backgrounds.primary,
    cursor: 'pointer',

    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: vars.opacities.disabled,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type ThumbVariants = RecipeVariants<typeof thumb>

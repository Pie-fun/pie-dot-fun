import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const content = recipe({
  base: {
    display: 'inline-flex',
    gap: vars.spaces.xs,
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fill: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    layout: 'fill',
  },
})

export type ContentVariants = RecipeVariants<typeof content>

export const item = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    minWidth: '12rem',
    maxWidth: '60rem',
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fill: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    layout: 'fill',
  },
})

export type ItemVariants = RecipeVariants<typeof item>

export const label = recipe({
  base: {
    marginBottom: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type LabelVariants = RecipeVariants<typeof label>

export const description = recipe({
  base: {
    marginTop: vars.spaces.xs,
  },
  variants: {},
  defaultVariants: {},
})

export type DescriptionVariants = RecipeVariants<typeof description>

export const message = recipe({
  base: {
    marginTop: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type MessageVariants = RecipeVariants<typeof message>

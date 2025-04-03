import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
  base: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    height: 'fit-content',
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const image = recipe({
  base: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  variants: {},
  defaultVariants: {},
})

export type ImageVariants = RecipeVariants<typeof image>

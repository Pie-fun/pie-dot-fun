import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/libs/vanilla-extract/vars'

export const root = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '0',
  },
  variants: {
    layout: {
      hug: {
        height: 'fit-content',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const image = recipe({
  base: {
    objectFit: 'cover',
  },
  variants: {
    layout: {
      hug: {
        width: 'auto',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
    },
    ratio: {
      auto: {
        aspectRatio: 'auto',
      },
      '1:1': {
        aspectRatio: '1 / 1',
      },
      '4:3': {
        aspectRatio: '4 / 3',
      },
      '3:4': {
        aspectRatio: '3 / 4',
      },
    },
    shape: {
      squareXs: {
        borderRadius: vars.radiuses.xs,
      },
    },
  },
  defaultVariants: {},
})

export type ImageVariants = RecipeVariants<typeof image>

export const empty = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  variants: {},
  defaultVariants: {},
})

globalStyle(`${empty.classNames.base} > *`, {
  width: '50%',
  height: '50%',
  color: vars.colors.backgrounds.inverse,
})

export type EmptyVariants = RecipeVariants<typeof empty>

export const errorCase = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  variants: {},
  defaultVariants: {},
})

globalStyle(`${errorCase.classNames.base} > *`, {
  width: '50%',
  height: '50%',
  color: vars.colors.backgrounds.inverse,
})

export type ErrorCaseVariants = RecipeVariants<typeof errorCase>

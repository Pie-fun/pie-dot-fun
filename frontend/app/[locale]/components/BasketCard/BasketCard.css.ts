import { defaultTransition } from '@/libs/vanilla-extract/animations.css'
import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { globalStyle } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const content = recipe({
  base: {
    display: 'grid',
    placeItems: 'center',
    gap: vars.spaces.xxl,

    '@media': {
      [queries.breakpoints.mobile]: {
        gridTemplateColumns: '1fr',
      },
      [queries.breakpoints.desktop]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

globalStyle(`${content.classNames.base} > a:nth-of-type(odd) > *`, {
  '@media': {
    [queries.breakpoints.desktop]: {
      marginLeft: 'auto',
    },
  },
})

globalStyle(`${content.classNames.base} > a:nth-of-type(even) > *`, {
  '@media': {
    [queries.breakpoints.desktop]: {
      marginRight: 'auto',
    },
  },
})

globalStyle(`${content.classNames.base} > *:nth-of-type(odd)`, {
  '@media': {
    [queries.breakpoints.desktop]: {
      marginLeft: 'auto',
    },
  },
})

globalStyle(`${content.classNames.base} > *:nth-of-type(even)`, {
  '@media': {
    [queries.breakpoints.desktop]: {
      marginRight: 'auto',
    },
  },
})

export type ContentVariants = RecipeVariants<typeof content>

export const item = recipe({
  base: {
    minWidth: '18rem',
    maxWidth: '31.25rem',
    width: '100%',
    transition: defaultTransition,

    ':hover': {
      transform: 'scale(1.02)',
    },
  },
  variants: {},
  defaultVariants: {},
})

export type ItemVariants = RecipeVariants<typeof item>

export const gradientRoot = recipe({
  base: {
    position: 'relative',
  },
  variants: {},
  defaultVariants: {},
})

export type GradientRootVariants = RecipeVariants<typeof gradientRoot>

export const gradientContent = recipe({
  base: {
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '3rem',
    background: vars.effects.gradient.background.overlayLeftToRight,
    pointerEvents: 'none',
  },
  variants: {},
  defaultVariants: {},
})

export type GradientContentVariants = RecipeVariants<typeof gradientContent>

export const spacebetween = recipe({
  base: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  variants: {},
  defaultVariants: {},
})

export type SpacebetweenVariants = RecipeVariants<typeof spacebetween>

export const pricePerformance = recipe({
  base: {
    paddingBottom: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type pricePerformanceVariants = RecipeVariants<typeof pricePerformance>

export const skeletonContent = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    width: '100%',
  },
  variants: {},
  defaultVariants: {},
})

export type SkeletonContentVariants = RecipeVariants<typeof skeletonContent>

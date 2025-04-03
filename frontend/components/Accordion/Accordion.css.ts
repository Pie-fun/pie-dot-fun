import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { keyframes } from '@vanilla-extract/css'
import * as typographyStyles from '@/components/Typography/Typography.css'

const slideDown = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: 'var(--radix-accordion-content-height)',
  },
})

const slideUp = keyframes({
  '0%': {
    height: 'var(--radix-accordion-content-height)',
  },
  '100%': {
    height: 0,
  },
})

export const root = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
        height: 'fit-content',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
      fillWidth: {
        width: '100%',
        height: 'fit-content',
      },
      fillHeight: {
        width: 'fit-content',
        height: '100%',
      },
    },
  },
  defaultVariants: {
    layout: 'fill',
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const item = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    background: vars.colors.backgrounds.default,
    borderRadius: vars.radiuses.s,
    boxShadow: `inset 0 0 0 1px ${vars.colors.border.default}`,
  },
  variants: {},
})

export type ItemVariants = RecipeVariants<typeof item>

export const trigger = recipe({
  base: [
    typographyStyles.typography({ typography: 'body1', fontWeight: 'regular' }),
    {
      display: 'flex',
      justifyContent: 'space-between',
      gap: vars.spaces.m,
      width: '100%',
      background: 'inherit',
      color: vars.colors.texts.secondary,
      border: 0,
      padding: vars.spaces.m,
      cursor: 'pointer',
    },
  ],
  variants: {},
})

export const triggerIcon = recipe({
  base: {
    fill: vars.colors.texts.secondary,
    transitionProperty: 'transform',
    transitionDuration: '.3s',
    transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',

    selectors: {
      '[data-state="open"] &': {
        transform: 'rotate(-180deg)',
      },
    },
  },
  variants: {},
})

export type TriggerVariants = RecipeVariants<typeof trigger>

export const content = recipe({
  base: [
    {
      overflow: 'hidden',

      selectors: {
        '&[data-state="open"]': {
          animationName: slideDown,
          animationDuration: '.3s',
          animationTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
        },

        '&[data-state="closed"]': {
          animationName: slideUp,
          animationDuration: '.3s',
          animationTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
        },
      },
    },
  ],
  variants: {},
})

export const contentChildren = recipe({
  base: {
    paddingLeft: vars.spaces.m,
    paddingRight: vars.spaces.m,
    paddingBottom: vars.spaces.m,
  },
  variants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

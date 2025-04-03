import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'

export const list = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.m,
  },
  variants: {},
  defaultVariants: {},
})

export type ListVariants = RecipeVariants<typeof list>

export const trigger = recipe({
  base: [
    {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: animations.defaultTransition,
      gap: vars.spaces.xs,
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',

      selectors: {
        '&:disabled': {
          cursor: 'not-allowed',
          color: vars.colors.texts.tertiary,
          opacity: vars.opacities.disabled,
        },
        '&:hover:not(:disabled)': {
          opacity: vars.opacities.hover,
        },
        '&[data-state="active"]': {
          color: vars.colors.texts.brand.primary,
        },
        '&[data-state="inactive"]': {
          color: vars.colors.texts.tertiary,
        },
      },
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type TriggerVariants = RecipeVariants<typeof trigger>

export const content = recipe({
  base: {
    marginTop: vars.spaces.m,
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const indicator = recipe({
  base: {
    width: '100%',
    height: '1px',
    background: vars.colors.border.secondary,
    zIndex: 1,
    transition: animations.defaultTransition,

    selectors: {
      '[data-state="active"] &': {
        background: vars.colors.border.brand.primary,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type IndicatorVariants = RecipeVariants<typeof indicator>

export const triggerWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type TriggerWrapperVariants = RecipeVariants<typeof triggerWrapper>

export const triggerChildrenWrapper = recipe({
  base: {
    padding: `0 ${vars.spaces.m}`,
  },
  variants: {},
  defaultVariants: {},
})

export type TriggerChildrenWrapperVariants = RecipeVariants<
  typeof triggerChildrenWrapper
>

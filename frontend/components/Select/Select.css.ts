import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'
import { typography } from '@/components/Typography/Typography.css'

export const trigger = recipe({
  base: [
    typography({ typography: 'body1', fontWeight: 'regular' }),
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: vars.spaces.m,
      paddingTop: vars.spaces.s,
      paddingRight: vars.spaces.m,
      paddingBottom: vars.spaces.s,
      paddingLeft: vars.spaces.m,
      color: vars.colors.texts.primary,
      background: vars.colors.backgrounds.default,
      border: `1px solid ${vars.colors.border.default}`,
      borderRadius: vars.radiuses.xs,
      cursor: 'pointer',

      selectors: {
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: vars.opacities.disabled,
        },
      },
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
    color: {
      default: {
        background: vars.colors.backgrounds.default,
      },
      primary: {
        background: vars.colors.backgrounds.primary,
      },
      error: {
        background: vars.colors.backgrounds.alert.secondary,
      },
    },
    shape: {
      square: {
        borderRadius: vars.radiuses.xs,
      },
      round: {
        borderRadius: vars.radiuses.max,
      },
    },
  },
  defaultVariants: {
    layout: 'fillWidth',
  },
})

globalStyle(`${trigger.classNames.base}[data-placeholder] > span`, {
  color: vars.colors.texts.primary,
  opacity: vars.opacities.placeholder,
})

globalStyle(`${trigger.classNames.base} > span`, {
  display: 'flex',
  alignItems: 'center',
  gap: vars.spaces.s,
  color: vars.colors.texts.primary,
})

globalStyle(
  `${trigger.classNames.variants.layout.fillWidth} > span:first-child`,
  {
    width: '100%',
  },
)

export type TriggerVariants = RecipeVariants<typeof trigger>

export const content = recipe({
  base: {
    overflow: 'hidden',
    position: 'relative',
    maxHeight: 'var(--radix-select-content-available-height)',
    padding: vars.spaces.s,
    borderRadius: vars.radiuses.xs,
    background: vars.colors.backgrounds.default,
    zIndex: '51',
    border: `1px solid ${vars.colors.border.default}`,
    boxShadow: vars.effects.shadow.m,
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      triggerWidth: {
        width: 'var(--radix-select-trigger-width)',
      },
    },
  },
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const viewport = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type ViewportVariants = RecipeVariants<typeof viewport>

export const label = recipe({
  base: [
    typography({ typography: 'caption2', fontWeight: 'regular' }),
    {
      color: vars.colors.texts.secondary,
      padding: vars.spaces.s,
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type LabelVariants = RecipeVariants<typeof label>

export const item = recipe({
  base: [
    typography({ typography: 'body1', fontWeight: 'regular' }),
    {
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: vars.spaces.m,
      width: '100%',
      paddingTop: vars.spaces.xs,
      paddingRight: vars.spaces.s,
      paddingBottom: vars.spaces.xs,
      paddingLeft: vars.spaces.s,
      color: vars.colors.texts.primary,
      borderRadius: vars.spaces.xs,
      outline: 0,
      cursor: 'pointer',

      selectors: {
        '&[data-highlighted]': {
          background: vars.colors.backgrounds.secondary,
        },
        '&[data-disabled]': {
          cursor: 'not-allowed',
          opacity: vars.opacities.disabled,
        },
      },
    },
  ],
  variants: {
    layout: {
      hug: {},
      fillWidth: {},
    },
  },
  defaultVariants: {},
})

globalStyle(`${item.classNames.base} > span`, {
  display: 'flex',
  alignItems: 'center',
  gap: vars.spaces.s,
})

globalStyle(
  `${item.classNames.variants.layout.fillWidth} > span:not([data-indicator="true"])`,
  {
    width: '100%',
  },
)

export type ItemVariants = RecipeVariants<typeof item>

export const separator = recipe({
  base: {
    width: '100%',
    height: '1px',
    background: vars.colors.border.default,
  },
  variants: {},
  defaultVariants: {},
})

export type SeparatorVariants = RecipeVariants<typeof separator>

export const icon = recipe({
  base: {
    transitionProperty: 'transform',
    transitionDuration: '.3s',
    transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',

    selectors: {
      '[data-state="open"] > &': {
        transform: 'rotate(-180deg)',
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

globalStyle(`${icon.classNames.base} > [data-icon]`, {
  width: 'inherit',
  height: 'inherit',
  color: vars.colors.texts.primary,
})

export type IconVariants = RecipeVariants<typeof icon>

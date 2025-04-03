import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'
import { typography } from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: vars.spaces.xs,
    border: 0,
    transition: animations.defaultTransition,
    paddingTop: vars.spaces.s,
    paddingLeft: vars.spaces.m,
    paddingBottom: vars.spaces.s,
    paddingRight: vars.spaces.m,
    background: vars.colors.backgrounds.default,
    color: vars.colors.texts.primary,
    boxShadow: `inset 0 0 0 1px ${vars.colors.border.secondary}`,
    borderRadius: vars.radiuses.xs,
    cursor: 'text',

    selectors: {
      '&:focus-within': {
        boxShadow: `inset 0 0 0 1px ${vars.colors.border.brand.primary}`,
      },
    },
  },
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
    isError: {
      true: {
        boxShadow: `inset 0 0 0 1px ${vars.colors.border.alert.primary}`,

        selectors: {
          '&:focus-within': {
            boxShadow: `inset 0 0 0 1px ${vars.colors.border.alert.primary}`,
          },
        },
      },
    },
  },
  defaultVariants: {
    layout: 'fillWidth',
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      gap: vars.spaces.xs,
      width: '100%',
      height: '100%',
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const centerContent = recipe({
  base: [
    {
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spaces.s,
      width: '100%',
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type CenterContentVariants = RecipeVariants<typeof centerContent>

export const input = recipe({
  base: [
    {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      textOverflow: 'ellipsis',
      color: vars.colors.texts.primary,
      transition: animations.defaultTransition,

      selectors: {
        '&::placeholder': {
          color: vars.colors.texts.primary,
          opacity: vars.opacities.placeholder,
        },
        '&::file-selector-button': {
          backgroundColor: 'transparent',
          height: '100%',
          border: 0,
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: vars.opacities.disabled,
        },
        '&:focus': {
          outline: 0,
        },
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button, &[type=number]':
          {
            WebkitAppearance: 'none',
            MozAppearance: 'textfield',
            margin: 0,
          },
      },
    },
  ],
  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    size: {
      m: [typography({ typography: 'title3', fontWeight: 'regular' })],
      s: [typography({ typography: 'body1', fontWeight: 'regular' })],
    },
  },
  defaultVariants: {
    align: 'left',
  },
})

export type InputVariants = RecipeVariants<typeof input>

export const icon = recipe({
  base: {},
  variants: {
    isError: {
      true: {
        color: vars.colors.texts.alert.primary,
      },
    },
  },
  defaultVariants: {},
})

export type IconVariants = RecipeVariants<typeof icon>

export const maxLength = recipe({
  base: [
    typography({
      typography: 'caption1',
      fontWeight: 'regular',
    }),
    {
      color: vars.colors.texts.tertiary,
    },
  ],
  variants: {
    isError: {
      true: {
        color: vars.colors.texts.alert.primary,
      },
    },
  },
  defaultVariants: {},
})

export type MaxLengthVariants = RecipeVariants<typeof maxLength>

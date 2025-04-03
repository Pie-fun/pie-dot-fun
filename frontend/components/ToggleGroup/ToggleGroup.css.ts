import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'
import { globalStyle } from '@vanilla-extract/css'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    toggleGroupType: {
      solid: {},
      text: {
        gap: vars.spaces.xxs,
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const item = recipe({
  base: [
    typographyStyles.typography({ typography: 'body2', fontWeight: 'bold' }),
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: vars.spaces.xs,
      minWidth: 'unset',
      minHeight: 'unset',
      cursor: 'pointer',
      borderRadius: vars.radiuses.xs,
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
    size: {
      l: {
        padding: `${vars.spaces.s} ${vars.spaces.m}`,
      },
      m: {
        padding: `${vars.spaces.xxs} ${vars.spaces.m}`,
      },
      s: {
        padding: `${vars.spaces.xxs} ${vars.spaces.s}`,
      },
    },
    toggleGroupType: {
      solid: [
        {
          color: vars.colors.texts.tertiary,
          background: vars.colors.backgrounds.default,
          border: `1px solid ${vars.colors.border.default}`,
        },
      ],
      text: [
        {
          color: vars.colors.texts.primary,
          background: 'transparent',
          border: 'none',

          selectors: {
            '&[data-state="off"]': {
              fontWeight: '400',
            },
          },
        },
      ],
    },
    color: {
      primary: {},
      info: {},
      alert: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        toggleGroupType: 'solid',
        color: 'primary',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.white,
            background: vars.colors.backgrounds.brand.primary,
            border: `1px solid ${vars.colors.border.brand.primary}`,
          },
        },
      },
    },
    {
      variants: {
        toggleGroupType: 'text',
        color: 'primary',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.brand.primary,
            background: vars.colors.backgrounds.primary,
          },
        },
      },
    },
    {
      variants: {
        toggleGroupType: 'solid',
        color: 'info',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.white,
            background: vars.colors.backgrounds.info.primary,
            border: `1px solid ${vars.colors.border.info.primary}`,
          },
        },
      },
    },
    {
      variants: {
        toggleGroupType: 'text',
        color: 'info',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.info.primary,
            background: vars.colors.backgrounds.info.secondary,
          },
        },
      },
    },
    {
      variants: {
        toggleGroupType: 'solid',
        color: 'alert',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.white,
            background: vars.colors.backgrounds.alert.primary,
            border: `1px solid ${vars.colors.border.alert.primary}`,
          },
        },
      },
    },
    {
      variants: {
        toggleGroupType: 'text',
        color: 'alert',
      },
      style: {
        selectors: {
          '&[data-state="on"]': {
            color: vars.colors.texts.alert.primary,
            background: vars.colors.backgrounds.alert.secondary,
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type ItemVariants = RecipeVariants<typeof item>

globalStyle(
  `${root.classNames.base}:has(${item.classNames.base}:nth-of-type(2)) ${item.classNames.variants.toggleGroupType.solid}:first-child`,
  {
    borderTopRightRadius: 'unset',
    borderBottomRightRadius: 'unset',
    borderInlineEndWidth: 0,
  },
)

globalStyle(
  `${root.classNames.base}:has(${item.classNames.base}:nth-of-type(2)) ${item.classNames.variants.toggleGroupType.solid}:last-child`,
  {
    borderTopLeftRadius: 'unset',
    borderBottomLeftRadius: 'unset',
  },
)

globalStyle(
  `${root.classNames.base}:has(${item.classNames.base}:nth-of-type(3)) ${item.classNames.variants.toggleGroupType.solid}:last-child`,
  {
    borderInlineStartWidth: 0,
  },
)

globalStyle(
  `${root.classNames.base}:has(${item.classNames.base}:nth-of-type(3)) ${item.classNames.variants.toggleGroupType.solid}:not(:first-child):not(:last-child)`,
  {
    borderRadius: 'unset',
  },
)

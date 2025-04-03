import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const badge = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
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
    size: {
      m: [
        {
          minWidth: '2rem',
          padding: `${vars.spaces.s} ${vars.spaces.m}`,
          gap: vars.spaces.s,
        },
      ],
      s: [
        {
          minWidth: '1.375rem',
          padding: `${vars.spaces.xxs} ${vars.spaces.s}`,
          gap: vars.spaces.xxs,
        },
      ],
    },
    shape: {
      square: {
        borderRadius: vars.radiuses.xs,
      },
      round: {
        borderRadius: vars.radiuses.max,
      },
      dot: {
        borderRadius: '100%',
        padding: '0',
      },
    },
    color: {
      primary: {},
      secondary: {},
      brand: {},
      alert: {},
    },
    badgeType: {
      solid: {},
      outline: {
        background: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    },
    align: {
      center: {
        justifyContent: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        shape: 'dot',
        size: 'm',
      },
      style: {
        minWidth: 'unset',
        width: '0.5rem',
        height: '0.5rem',
      },
    },
    {
      variants: {
        shape: 'dot',
        size: 's',
      },
      style: {
        minWidth: 'unset',
        width: '0.25rem',
        height: '0.25rem',
      },
    },
    {
      variants: {
        badgeType: 'solid',
        color: 'primary',
      },
      style: {
        background: vars.colors.backgrounds.primary,
        color: vars.colors.texts.primary,
      },
    },
    {
      variants: {
        badgeType: 'solid',
        color: 'secondary',
      },
      style: {
        background: vars.colors.backgrounds.secondary,
        color: vars.colors.texts.primary,
      },
    },
    {
      variants: {
        badgeType: 'solid',
        color: 'brand',
      },
      style: {
        background: vars.colors.backgrounds.brand.primary,
        color: vars.colors.texts.white,
      },
    },
    {
      variants: {
        badgeType: 'solid',
        color: 'alert',
      },
      style: {
        background: vars.colors.backgrounds.alert.secondary,
        color: vars.colors.texts.alert.primary,
      },
    },
    {
      variants: {
        badgeType: 'outline',
        color: 'primary',
      },
      style: {
        borderColor: vars.colors.border.primary,
        color: vars.colors.texts.primary,
      },
    },
    {
      variants: {
        badgeType: 'outline',
        color: 'secondary',
      },
      style: {
        borderColor: vars.colors.border.secondary,
        color: vars.colors.texts.primary,
      },
    },
    {
      variants: {
        badgeType: 'outline',
        color: 'brand',
      },
      style: {
        borderColor: vars.colors.border.brand.primary,
        color: vars.colors.texts.brand.primary,
      },
    },
    {
      variants: {
        badgeType: 'outline',
        color: 'alert',
      },
      style: {
        borderColor: vars.colors.border.alert.primary,
        color: vars.colors.texts.alert.primary,
      },
    },
  ],
  defaultVariants: {
    layout: 'hug',
    size: 'm',
    shape: 'square',
    color: 'primary',
  },
})

export type BadgeVariants = RecipeVariants<typeof badge>

import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'
import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/libs/vanilla-extract/vars'

export const icon = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 0,
    flexShrink: 0,
    color: 'inherit',
    fill: 'none',
    stroke: 'none',
    width: 'fit-content',
    height: 'fit-content',
    overflow: 'hidden',
    transition: animations.defaultTransition,
  },
  variants: {
    size: {
      asChild: {},
      inherit: {
        lineHeight: 'inherit',
        height: 'auto',
      },
      xxl: {},
      xl: {},
      l: {},
      m: {},
      s: {},
      xs: {},
      xxs: {},
    },
    isSpin: {
      true: {
        ...animations.spin,
      },
    },
    color: {
      inherit: {
        color: 'inherit',
        fill: 'currentColor',
      },
      primary: {
        color: vars.colors.texts.primary,
        fill: vars.colors.texts.primary,
      },
      secondary: {
        color: vars.colors.texts.secondary,
        fill: vars.colors.texts.secondary,
      },
      tertiary: {
        color: vars.colors.texts.tertiary,
        fill: vars.colors.texts.tertiary,
      },
      brandPrimary: {
        color: vars.colors.texts.brand.primary,
        fill: vars.colors.texts.brand.primary,
      },
      accentPrimary: {
        color: vars.colors.texts.accent.primary,
        fill: vars.colors.texts.accent.primary,
      },
      accentSecondary: {
        color: vars.colors.texts.accent.secondary,
        fill: vars.colors.texts.accent.secondary,
      },
      alertPrimary: {
        color: vars.colors.texts.alert.primary,
        fill: vars.colors.texts.alert.primary,
      },
      infoPrimary: {
        color: vars.colors.texts.info.primary,
        fill: vars.colors.texts.info.primary,
      },
      white: {
        color: vars.colors.texts.white,
        fill: vars.colors.texts.white,
      },
      inverse: {
        color: vars.colors.texts.inverse,
        fill: vars.colors.texts.inverse,
      },
    },
    background: {
      inherit: {
        backgroundColor: 'inherit',
      },
      accentPrimary: {
        backgroundColor: vars.colors.backgrounds.accent.primary,
      },
      accentSecondary: {
        backgroundColor: vars.colors.backgrounds.accent.secondary,
      },
      alertPrimary: {
        backgroundColor: vars.colors.backgrounds.alert.primary,
      },
      alertSecondary: {
        backgroundColor: vars.colors.backgrounds.alert.secondary,
      },
      brandPrimary: {
        backgroundColor: vars.colors.backgrounds.brand.primary,
      },
      brandSecondary: {
        backgroundColor: vars.colors.backgrounds.brand.secondary,
      },
      default: {
        backgroundColor: vars.colors.backgrounds.default,
      },
      infoPrimary: {
        backgroundColor: vars.colors.backgrounds.info.primary,
      },
      infoSecondary: {
        backgroundColor: vars.colors.backgrounds.info.secondary,
      },
      inverse: {
        backgroundColor: vars.colors.backgrounds.inverse,
      },
      primary: {
        backgroundColor: vars.colors.backgrounds.primary,
      },
      secondary: {
        backgroundColor: vars.colors.backgrounds.secondary,
      },
    },
    shape: {
      square: {},
      circle: {
        borderRadius: vars.radiuses.max,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        size: 'asChild',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'inherit',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'xxl',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'xl',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'l',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'm',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 's',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'xs',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xs,
      },
    },
    {
      variants: {
        size: 'xxs',
        shape: 'square',
      },
      style: {
        borderRadius: vars.radiuses.xxs,
      },
    },
  ],
  defaultVariants: {
    size: 'inherit',
    color: 'inherit',
    isSpin: false,
  },
})

globalStyle(`${icon.classNames.variants.size.inherit} > *`, {
  width: '1em',
  height: '1em',
})

globalStyle(`${icon.classNames.variants.size.xxl} > *`, {
  width: '4.5rem',
  height: '4.5rem',
})

globalStyle(`${icon.classNames.variants.size.xl} > *`, {
  width: '3rem',
  height: '3rem',
})

globalStyle(`${icon.classNames.variants.size.l} > *`, {
  width: '2.25rem',
  height: '2.25rem',
})

globalStyle(`${icon.classNames.variants.size.m} > *`, {
  width: '1.5rem',
  height: '1.5rem',
})

globalStyle(`${icon.classNames.variants.size.s} > *`, {
  width: '1.125rem',
  height: '1.125rem',
})

globalStyle(`${icon.classNames.variants.size.xs} > *`, {
  width: '0.75rem',
  height: '0.75rem',
})

globalStyle(`${icon.classNames.variants.size.xxs} > *`, {
  width: '0.5rem',
  height: '0.5rem',
})

export type IconVariants = RecipeVariants<typeof icon>

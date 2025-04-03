import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'

export const rootWrapper = recipe({
  base: {
    position: 'relative',
  },
})

export type RootWrapperVariants = RecipeVariants<typeof rootWrapper>

export const root = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 0,
    overflow: 'hidden',
    verticalAlign: 'top',
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
      inherit: {},
      fontSize: {
        width: '1em',
        height: '1em',
      },
      xl: {
        width: '4rem',
        height: '4rem',
      },
      l: {
        width: '2.5rem',
        height: '2.5rem',
      },
      m: {
        width: '1.5rem',
        height: '1.5rem',
      },
      s: {
        width: '1.125rem',
        height: '1.125rem',
      },
      xs: {
        width: '0.75rem',
        height: '0.75rem',
      },
      xxs: {
        width: '0.5rem',
        height: '0.5rem',
      },
    },
    isLined: {
      true: {
        selectors: {
          '&:before': {
            content: '',
            position: 'absolute',
            width: '100%',
            height: '100%',
            boxShadow: `inset 0 0 0 1px ${vars.colors.border.secondary}`,
            zIndex: 1,
          },
        },
      },
    },
    shape: {
      circle: {
        borderRadius: vars.radiuses.max,
      },
      square: {
        borderRadius: vars.radiuses.xxs,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isLined: true,
        shape: 'circle',
      },
      style: {
        selectors: {
          '&:before': {
            borderRadius: vars.radiuses.max,
          },
        },
      },
    },
    {
      variants: {
        isLined: true,
        shape: 'square',
      },
      style: {
        selectors: {
          '&:before': {
            borderRadius: vars.radiuses.xs,
          },
        },
      },
    },
  ],
  defaultVariants: {
    layout: 'hug',
    size: 'm',
  },
})

globalStyle(`${root.classNames.base} > * > svg`, {
  color: vars.colors.texts.brand.primary,
})

export type RootVariants = RecipeVariants<typeof root>

export const empty = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  },
  variants: {},
  defaultVariants: {},
})

globalStyle(`${empty.classNames.base} > *`, {
  width: '50%',
  height: '50%',
})

export type EmptyVariants = RecipeVariants<typeof empty>

export const chainWrapper = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
    lineHeight: 0,
  },
  variants: {},
  defaultVariants: {},
})

export type ChainWrapperVariants = RecipeVariants<typeof chainWrapper>

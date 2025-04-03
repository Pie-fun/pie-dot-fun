import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'

export const root = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vars.radiuses.max,
    lineHeight: 0,
    overflow: 'hidden',
    verticalAlign: 'top',
    background: vars.colors.backgrounds.primary,
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
            borderRadius: vars.radiuses.max,
            zIndex: 1,
          },
        },
      },
    },
  },
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

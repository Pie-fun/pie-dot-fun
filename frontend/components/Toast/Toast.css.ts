import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'
import { queries } from '@/libs/vanilla-extract/queries'
import * as animations from '@/libs/vanilla-extract/animations.css'
import { typography } from '@/components/Typography/Typography.css'

export const viewport = recipe({
  base: {
    display: 'flex',
    position: 'fixed',
    gap: vars.spaces.xxs,
    top: `calc(env(safe-area-inset-top) + ${vars.spaces.xxl})`,
    transform: 'translateX(-50%)',
    left: '50%',
    zIndex: 100,

    '@media': {
      [queries.breakpoints.mobile]: {
        maxWidth: `calc(100dvw - ${vars.spaces.m} - ${vars.spaces.m})`,
        maxHeight: `calc(100dvh - ${vars.spaces.m} - ${vars.spaces.m})`,
      },
      [queries.breakpoints.desktop]: {
        maxWidth: `calc(100dvw - ${vars.spaces.xl} - ${vars.spaces.xl})`,
        maxHeight: `calc(100dvh - ${vars.spaces.xl} - ${vars.spaces.xl})`,
      },
    },
  },
  variants: {
    stackPosition: {
      bottom: {
        flexDirection: 'column-reverse',
      },
      top: {
        flexDirection: 'column',
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type ViewportVariants = RecipeVariants<typeof viewport>

export const root = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    gap: vars.spaces.m,
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: vars.colors.backgrounds.inverse,
    border: `1px solid ${vars.colors.border.default}`,
    overflow: 'hidden',
    borderRadius: vars.radiuses.l,
    paddingTop: vars.spaces.s,
    paddingBottom: vars.spaces.s,
    paddingLeft: vars.spaces.m,
    paddingRight: vars.spaces.m,

    selectors: {
      '&[data-state="open"]': {
        ...animations.fadeIn,
      },
      '&[data-state="closed"]': {
        ...animations.fadeOut,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const action = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: vars.colors.backgrounds.brand.primary,
  },
  variants: {},
  defaultVariants: {},
})

export type ActionVariants = RecipeVariants<typeof action>

export const close = recipe({
  base: {
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: vars.colors.texts.inverse,
    padding: vars.spaces.s,
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export type CloseVariants = RecipeVariants<typeof close>

export const title = recipe({
  base: [
    typography({
      typography: 'body1',
      fontWeight: 'regular',
    }),
    {
      display: 'flex',
      gap: vars.spaces.xs,
      alignItems: 'flex-start',
      color: vars.colors.texts.inverse,
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type TitleVariants = RecipeVariants<typeof title>

export const description = recipe({
  base: [
    typography({
      typography: 'caption1',
      fontWeight: 'regular',
    }),
    {
      display: 'flex',
      gap: vars.spaces.xs,
      alignItems: 'flex-start',
      color: vars.colors.texts.secondary,
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type DescriptionVariants = RecipeVariants<typeof description>

export const toaster = recipe({
  base: {
    display: 'grid',
    gap: vars.spaces.xs,
    width: 'max-content',
  },
  variants: {},
  defaultVariants: {},
})

export type ToasterVariants = RecipeVariants<typeof toaster>

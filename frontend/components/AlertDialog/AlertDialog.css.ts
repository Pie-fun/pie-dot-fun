import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'
import { queries } from '@/libs/vanilla-extract/queries'
import { typography } from '@/components/Typography/Typography.css'

export const overlay = recipe({
  base: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '3',
    background: vars.colors.overlay.primary,

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

export type OverlayVariants = RecipeVariants<typeof overlay>

export const content = recipe({
  base: {
    position: 'fixed',
    zIndex: '4',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '18rem',
    backgroundColor: vars.colors.backgrounds.default,
    borderRadius: vars.radiuses.xs,
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: vars.effects.shadow.m,

    selectors: {
      '&[data-state="open"]': {
        ...animations.fadeIn,
      },
      '&[data-state="closed"]': {
        ...animations.fadeOut,
      },
    },

    '@media': {
      [queries.breakpoints.mobile]: {
        width: `calc(100dvw - ${vars.spaces.m} - ${vars.spaces.m})`,
        maxHeight: `calc(100dvh - ${vars.spaces.m} - ${vars.spaces.m})`,
      },
      [queries.breakpoints.desktop]: {
        minWidth: '25rem',
        maxWidth: `calc(100dvw - ${vars.spaces.xl} - ${vars.spaces.xl})`,
        maxHeight: `calc(100dvh - ${vars.spaces.xl} - ${vars.spaces.xl})`,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const header = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
    gap: vars.spaces.xs,
    alignItems: 'center',
    paddingTop: vars.spaces.l,
    paddingBottom: vars.spaces.l,
    paddingLeft: vars.spaces.m,
    paddingRight: vars.spaces.m,
  },
  variants: {},
  defaultVariants: {},
})

export type HeaderVariants = RecipeVariants<typeof header>

export const headerContent = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spaces.s,
  },
  variants: {
    position: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
  defaultVariants: {},
})

export type HeaderContentVariants = RecipeVariants<typeof headerContent>

export const body = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
  variants: {
    size: {
      m: {
        paddingLeft: vars.spaces.l,
        paddingRight: vars.spaces.l,
      },
    },
  },
  defaultVariants: {},
})

export type BodyVariants = RecipeVariants<typeof body>

export const footer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: vars.spaces.s,
    padding: vars.spaces.l,
  },
  variants: {},
  defaultVariants: {},
})

export type FooterVariants = RecipeVariants<typeof footer>

export const title = recipe({
  base: [
    typography({ typography: 'title4', fontWeight: 'bold', color: 'primary' }),
    {
      color: vars.colors.texts.primary,
    },
  ],
  variants: {
    isHide: {
      true: {
        display: 'none',
      },
    },
  },
  defaultVariants: {},
})

export type TitleVariants = RecipeVariants<typeof title>

export const description = recipe({
  base: [
    typography({
      typography: 'body1',
      fontWeight: 'regular',
      color: 'primary',
    }),
    {
      color: vars.colors.texts.tertiary,
    },
  ],
  variants: {
    isHide: {
      true: {
        display: 'none',
      },
    },
  },
  defaultVariants: {},
})

export type DescriptionVariants = RecipeVariants<typeof description>

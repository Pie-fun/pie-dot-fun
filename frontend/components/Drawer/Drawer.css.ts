import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const provider = recipe({
  base: {
    background: vars.colors.backgrounds.default,
  },
  variants: {
    isTransformed: {
      true: {
        minHeight: '100dvh',
      },
    },
  },
  defaultVariants: {},
})

export type ProviderVariants = RecipeVariants<typeof provider>

export const overlay = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    background: vars.colors.overlay.primary,
  },
  variants: {},
  defaultVariants: {},
})

export type OverlayVariants = RecipeVariants<typeof overlay>

export const content = recipe({
  base: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '75%',
    marginTop: vars.spaces.xxxl,
    border: `1px solid ${vars.colors.border.secondary}`,
    borderTopLeftRadius: vars.radiuses.s,
    borderTopRightRadius: vars.radiuses.s,
    backgroundColor: vars.colors.backgrounds.default,
    zIndex: 50,
    paddingBottom: `env(safe-area-inset-bottom)`,
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const scrollable = recipe({
  base: {
    overflow: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type ScrollableVariants = RecipeVariants<typeof scrollable>

export const indicator = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: vars.spaces.m,
    height: '0.5rem',
    width: '100px',
    borderRadius: vars.radiuses.max,
    backgroundColor: vars.colors.backgrounds.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type IndicatorVariants = RecipeVariants<typeof indicator>

export const header = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
    gap: vars.spaces.xs,
    alignItems: 'center',
    textAlign: 'center',
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
    gap: vars.spaces.s,
    padding: vars.spaces.l,
    marginTop: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type FooterVariants = RecipeVariants<typeof footer>

export const title = recipe({
  base: {
    color: vars.colors.texts.primary,
  },
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
  base: {
    color: vars.colors.texts.secondary,
  },
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

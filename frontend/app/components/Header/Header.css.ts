import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const header = recipe({
  base: {
    position: 'sticky',
    top: 0,
    width: '100%',
    paddingTop: `env(safe-area-inset-top)`,
    borderBottom: `1px solid ${vars.colors.border.default}`,
    zIndex: 2,
    background: vars.colors.backgrounds.default,
  },
  variants: {},
  defaultVariants: {},
})

export type HeaderVariants = RecipeVariants<typeof header>

export const root = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'auto auto minmax(0, 1fr)',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'auto',
    maxWidth: '81.25rem',
    paddingTop: vars.spaces.s,
    paddingBottom: vars.spaces.s,
    width: '100%',
    minHeight: '4.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media': {
      [queries.breakpoints.mobile]: {
        paddingLeft: vars.spaces.m,
        paddingRight: vars.spaces.m,
      },
      [queries.breakpoints.desktop]: {
        paddingLeft: vars.spaces.xl,
        paddingRight: vars.spaces.xl,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const content = recipe({
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

export type ContentVariants = RecipeVariants<typeof content>

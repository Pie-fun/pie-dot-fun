import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    borderRadius: vars.radiuses.s,
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
    background: {
      primary: {
        background: vars.colors.backgrounds.primary,
      },
      default: {
        background: vars.colors.backgrounds.default,
      },
    },
    border: {
      primary: {
        border: `1px solid ${vars.colors.border.primary}`,
      },
      default: {
        border: `1px solid ${vars.colors.border.default}`,
      },
      infoPrimary: {
        border: `1px solid ${vars.colors.border.info.primary}`,
      },
    },
    shadow: {
      primary: {
        boxShadow: vars.effects.shadow.brandPrimaryRightBottomM,
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const header = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
    width: '100%',
    overflow: 'hidden',
  },
  variants: {
    size: {
      m: {
        paddingTop: vars.spaces.m,
        paddingLeft: vars.spaces.m,
        paddingRight: vars.spaces.m,
      },
      s: {
        paddingTop: vars.spaces.s,
        paddingLeft: vars.spaces.m,
        paddingRight: vars.spaces.m,
      },
    },
  },
  defaultVariants: {},
})

export type HeaderVariants = RecipeVariants<typeof header>

export const title = recipe({
  base: [
    typographyStyles.typography({
      typography: 'title4',
      fontWeight: 'bold',
      color: 'primary',
    }),
  ],
  variants: {},
  defaultVariants: {},
})

export type TitleVariants = RecipeVariants<typeof title>

export const footer = recipe({
  base: {
    display: 'flex',
    width: '100%',
  },
  variants: {
    size: {
      m: {
        paddingBottom: vars.spaces.m,
        paddingLeft: vars.spaces.m,
        paddingRight: vars.spaces.m,
      },
      s: {
        paddingBottom: vars.spaces.s,
        paddingLeft: vars.spaces.m,
        paddingRight: vars.spaces.m,
      },
    },
  },
  defaultVariants: {},
})

export type FooterVariants = RecipeVariants<typeof footer>

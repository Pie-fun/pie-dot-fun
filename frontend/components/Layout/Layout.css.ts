import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const layout = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: vars.spaces.xxl,
    paddingBottom: `calc(env(safe-area-inset-bottom) + ${vars.spaces.xxl})`,
    maxWidth: '1300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 0,
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
        height: 'fit-content',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
      fillWidth: {
        width: '100%',
        height: 'fit-content',
      },
      fillHeight: {
        width: 'fit-content',
        height: '100%',
      },
      full: {
        width: '100dvw',
        height: '100dvh',
      },
    },
    gap: {
      l: {
        '@media': {
          [queries.breakpoints.mobile]: {
            gap: vars.spaces.xl,
          },
          [queries.breakpoints.desktop]: {
            gap: vars.spaces.xxl,
          },
        },
      },
      m: {
        gap: vars.spaces.m,
      },
      s: {
        gap: vars.spaces.s,
      },
    },
    topPadding: {
      l: {
        paddingTop: vars.spaces.xl,
      },
      m: {
        paddingTop: vars.spaces.m,
      },
    },
    horizontalPadding: {
      m: {
        '@media': {
          [queries.breakpoints.mobile]: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          [queries.breakpoints.desktop]: {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
    position: {
      center: {
        margin: 'auto',
      },
    },
  },
  defaultVariants: {
    layout: 'fillWidth',
  },
})

export type LayoutVariants = RecipeVariants<typeof layout>

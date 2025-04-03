import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'
import { fallbackVar } from '@vanilla-extract/css'
import { queries } from '@/libs/vanilla-extract/queries'

const geistSansWithFallback = fallbackVar(
  vars.font.geist.sans,
  vars.font.fallback.sans,
)

export const typography = recipe({
  base: {
    maxWidth: '100%',
  },
  variants: {
    layout: {
      fillWidth: {
        width: '100%',
      },
      hug: {
        width: 'fit-content',
      },
      contents: {
        display: 'contents',
      },
    },
    fontWeight: {
      bold: {
        fontWeight: '700',
      },
      medium: {
        fontWeight: '500',
      },
      regular: {
        fontWeight: '400',
      },
    },
    typography: {
      displayTitle1: {
        fontFamily: geistSansWithFallback,
        lineHeight: '1.2',

        '@media': {
          [queries.breakpoints.mobile]: {
            fontSize: '3rem',
          },
          [queries.breakpoints.desktop]: {
            fontSize: '3.5rem',
          },
        },
      },
      displayTitle2: {
        fontFamily: geistSansWithFallback,
        fontSize: '3rem',
        lineHeight: '1.2',
      },
      title1: {
        fontFamily: geistSansWithFallback,
        fontSize: '2rem',
        lineHeight: '1.2',
      },
      title2: {
        fontFamily: geistSansWithFallback,
        fontSize: '1.75rem',
        lineHeight: '1.2',
      },
      title3: {
        fontFamily: geistSansWithFallback,
        fontSize: '1.375rem',
        lineHeight: '1.2',
      },
      title4: {
        fontFamily: geistSansWithFallback,
        fontSize: '1.125rem',
        lineHeight: '1.2',
      },
      body1: {
        fontFamily: geistSansWithFallback,
        fontSize: '1rem',
        lineHeight: '1.5',
      },
      body2: {
        fontFamily: geistSansWithFallback,
        fontSize: '0.875rem',
        lineHeight: '1.5',
      },
      caption1: {
        fontFamily: geistSansWithFallback,
        fontSize: '0.875rem',
        lineHeight: '1.2',
      },
      caption2: {
        fontFamily: geistSansWithFallback,
        fontSize: '0.75rem',
        lineHeight: '1.2',
      },
      caption3: {
        fontFamily: geistSansWithFallback,
        fontSize: '0.625rem',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
      },
    },
    color: {
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
    isUnderline: {
      true: {
        textDecoration: 'underline',
      },
    },
    wordBreak: {
      breakAll: {
        wordBreak: 'break-all',
      },
    },
    textAlign: {
      center: {
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {},
})

export type TypographyVariants = RecipeVariants<typeof typography>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.m,
  },
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
        height: 'fit-content',
      },
      fillWidth: {
        width: '100%',
        height: 'fit-content',
      },
    },
    align: {
      left: {
        alignItems: 'flex-start',
        textAlign: 'start',
      },
      center: {
        alignItems: 'center',
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const heading = recipe({
  base: {},
  variants: {
    size: {
      l: [
        typographyStyles.typography({
          typography: 'displayTitle1',
          fontWeight: 'bold',
        }),
      ],
      m: [
        typographyStyles.typography({
          typography: 'title3',
          fontWeight: 'bold',
        }),
      ],
    },
    color: {
      default: {
        color: vars.colors.texts.primary,
      },
      brand: {
        color: vars.colors.texts.brand.primary,
      },
    },
  },
  defaultVariants: {},
})

export type HeadingVariants = RecipeVariants<typeof heading>

export const description = recipe({
  base: {},
  variants: {
    size: {
      m: [
        typographyStyles.typography({
          typography: 'body1',
          fontWeight: 'regular',
        }),
      ],
      s: [
        typographyStyles.typography({
          typography: 'body2',
          fontWeight: 'regular',
        }),
      ],
    },
  },
  defaultVariants: {},
})

export type DescriptionVariants = RecipeVariants<typeof description>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const rate = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      l: [
        typographyStyles.typography({
          typography: 'title3',
        }),
        {
          gap: vars.spaces.xxxs,
        },
      ],
      m: [
        typographyStyles.typography({
          typography: 'body1',
        }),
      ],
      s: [
        typographyStyles.typography({
          typography: 'body2',
        }),
      ],
      xs: [
        typographyStyles.typography({
          typography: 'caption2',
        }),
      ],
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
    color: {
      inherit: {
        color: 'inherit',
      },
      default: {
        color: vars.colors.texts.primary,
      },
      positive: {
        color: vars.colors.texts.info.primary,
      },
      negative: {
        color: vars.colors.texts.alert.primary,
      },
    },
  },
  defaultVariants: {},
})

export type RateVariants = RecipeVariants<typeof rate>

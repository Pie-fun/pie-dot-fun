import { vars } from '@/libs/vanilla-extract/vars'
import { globalStyle } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const link = recipe({
  base: [
    {
      display: 'inline-flex',
    },
  ],
  variants: {
    layout: {
      fillWidth: {
        width: '100%',
      },
      fillHeight: {
        height: 'auto',
      },
      contents: {
        display: 'contents',
      },
    },
    color: {
      primary: {
        color: vars.colors.texts.clickable,
      },
      secondary: {
        color: vars.colors.texts.primary,
      },
      tertiary: {
        color: vars.colors.texts.secondary,
      },
    },
    isUnderline: {
      true: {
        textDecoration: 'underline',
      },
      false: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    color: 'secondary',
    isUnderline: false,
  },
})

globalStyle(
  `${link.classNames.base}:hover > *:is(h1, h2, h3, h4, h5, h6, p, span)`,
  {
    textDecoration: 'underline',
  },
)

export type LinkVariants = RecipeVariants<typeof link>

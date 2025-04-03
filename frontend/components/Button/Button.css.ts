import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import * as animations from '@/libs/vanilla-extract/animations.css'

export const button = recipe({
  base: [
    {
      display: 'inline-flex',
      minWidth: 'fit-content',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0',
      cursor: 'pointer',
      transition: animations.defaultTransition,
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      fontSize: 'inherit',

      ':disabled': {
        cursor: 'not-allowed',
        opacity: vars.opacities.disabled,
      },
    },
  ],
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
        height: 'auto',
      },
    },
    size: {
      m: {
        padding: `${vars.spaces.s} ${vars.spaces.m}`,
        gap: vars.spaces.xs,
      },
      s: {
        padding: `${vars.spaces.xxs} ${vars.spaces.xs}`,
        gap: vars.spaces.xxs,
      },
      squareM: {
        width: '3rem',
        height: '3rem',
        padding: 0,
        flexShrink: 0,
      },
      squareS: {
        width: '2rem',
        height: '2rem',
        padding: 0,
        flexShrink: 0,
      },
    },
    color: {
      primary: {},
      secondary: {},
      infoPrimary: {},
      alertPrimary: {},
      accentGradient: {},
    },
    buttonType: {
      solid: {
        selectors: {
          '&:hover:not(:disabled)': {
            opacity: vars.opacities.hover,
          },
        },
      },
      outline: {
        borderWidth: '1px',
        borderStyle: 'solid',
        background: 'transparent',
        selectors: {
          '&:hover:not(:disabled)': {
            opacity: vars.opacities.hover,
          },
        },
      },
      text: {
        background: 'transparent',
      },
      content: {
        display: 'contents',
      },
    },
    isUnderline: {
      true: {
        textDecoration: 'underline',
      },
    },
    shape: {
      square: {
        borderRadius: vars.radiuses.xs,

        selectors: {
          '&:before': {
            borderRadius: vars.radiuses.xs,
          },
        },
      },
      round: {
        borderRadius: vars.radiuses.max,

        selectors: {
          '&:before': {
            borderRadius: vars.radiuses.max,
          },
        },
      },
      dot: {
        borderRadius: '100%',
        padding: '0',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        buttonType: 'solid',
        color: 'primary',
      },
      style: {
        background: vars.colors.backgrounds.brand.primary,
        color: vars.colors.texts.white,
      },
    },
    {
      variants: {
        buttonType: 'solid',
        color: 'secondary',
      },
      style: {
        background: vars.colors.backgrounds.brand.secondary,
        color: vars.colors.texts.brand.primary,
      },
    },
    {
      variants: {
        buttonType: 'solid',
        color: 'infoPrimary',
      },
      style: {
        background: vars.colors.backgrounds.info.primary,
        color: vars.colors.texts.white,
      },
    },
    {
      variants: {
        buttonType: 'solid',
        color: 'alertPrimary',
      },
      style: {
        background: vars.colors.backgrounds.alert.primary,
        color: vars.colors.texts.white,
      },
    },
    {
      variants: {
        buttonType: 'solid',
        color: 'accentGradient',
      },
      style: {
        background:
          vars.effects.gradient.background
            .accentPrimaryToSecondaryLeftBottomToRightTop,
        color: vars.colors.texts.white,
      },
    },
    {
      variants: {
        buttonType: 'outline',
        color: 'primary',
      },
      style: {
        borderColor: vars.colors.border.brand.primary,
        color: vars.colors.texts.brand.primary,
      },
    },
    {
      variants: {
        buttonType: 'outline',
        color: 'secondary',
      },
      style: {
        borderColor: vars.colors.border.default,
        color: vars.colors.texts.brand.primary,
      },
    },
    {
      variants: {
        buttonType: 'outline',
        color: 'infoPrimary',
      },
      style: {
        borderColor: vars.colors.border.info.primary,
        color: vars.colors.texts.info.primary,
      },
    },
    {
      variants: {
        buttonType: 'outline',
        color: 'alertPrimary',
      },
      style: {
        borderColor: vars.colors.border.alert.primary,
        color: vars.colors.texts.alert.primary,
      },
    },
    {
      variants: {
        buttonType: 'outline',
        color: 'accentGradient',
      },
      style: {
        backgroundImage:
          vars.effects.gradient.text
            .accentPrimaryToSecondaryLeftBottomToRightTop,
        color: 'transparent',
        backgroundClip: 'text',
        position: 'relative',

        selectors: {
          '&:before': {
            content: '',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background:
              vars.effects.gradient.background
                .accentPrimaryToSecondaryLeftBottomToRightTop,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            padding: '1px',
            zIndex: 1,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'text',
        color: 'primary',
      },
      style: {
        color: vars.colors.texts.primary,

        selectors: {
          '&:hover:not(:disabled)': {
            background: vars.colors.backgrounds.secondary,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'text',
        color: 'secondary',
      },
      style: {
        color: vars.colors.texts.secondary,

        selectors: {
          '&:hover:not(:disabled)': {
            background: vars.colors.backgrounds.secondary,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'text',
        color: 'infoPrimary',
      },
      style: {
        color: vars.colors.texts.info.primary,

        selectors: {
          '&:hover:not(:disabled)': {
            background: vars.colors.backgrounds.info.secondary,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'text',
        color: 'alertPrimary',
      },
      style: {
        color: vars.colors.texts.alert.primary,

        selectors: {
          '&:hover:not(:disabled)': {
            background: vars.colors.backgrounds.alert.secondary,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'text',
        color: 'accentGradient',
      },
      style: {
        backgroundImage:
          vars.effects.gradient.text
            .accentPrimaryToSecondaryLeftBottomToRightTop,
        color: 'transparent',
        backgroundClip: 'text',

        selectors: {
          '&:hover:not(:disabled)': {
            opacity: vars.opacities.hover,
          },
        },
      },
    },
    {
      variants: {
        buttonType: 'content',
        color: 'primary',
      },
      style: {
        color: vars.colors.texts.brand.primary,
      },
    },
    {
      variants: {
        buttonType: 'content',
        color: 'secondary',
      },
      style: {
        color: vars.colors.texts.primary,
      },
    },
    {
      variants: {
        buttonType: 'content',
        color: 'infoPrimary',
      },
      style: {
        color: vars.colors.texts.info.primary,
      },
    },
    {
      variants: {
        buttonType: 'content',
        color: 'alertPrimary',
      },
      style: {
        color: vars.colors.texts.alert.primary,
      },
    },
    {
      variants: {
        buttonType: 'content',
        color: 'accentGradient',
      },
      style: {
        backgroundImage:
          vars.effects.gradient.text
            .accentPrimaryToSecondaryLeftBottomToRightTop,
        color: 'transparent',
        backgroundClip: 'text',
      },
    },
  ],
  defaultVariants: {
    layout: 'hug',
    size: 'm',
    color: 'primary',
    buttonType: 'solid',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>

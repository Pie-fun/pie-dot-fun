import { createGlobalThemeContract } from '@vanilla-extract/css'

const tokens = {
  colors: {
    backgrounds: {
      default: '',
      inverse: '',
      primary: '',
      secondary: '',
      brand: {
        primary: '',
        secondary: '',
      },
      accent: {
        primary: '',
        secondary: '',
      },
      alert: {
        primary: '',
        secondary: '',
      },
      info: {
        primary: '',
        secondary: '',
      },
    },
    border: {
      default: '',
      primary: '',
      secondary: '',
      brand: {
        primary: '',
      },
      accent: {
        primary: '',
        secondary: '',
      },
      alert: {
        primary: '',
      },
      info: {
        primary: '',
      },
    },
    texts: {
      primary: '',
      secondary: '',
      tertiary: '',
      inverse: '',
      clickable: '',
      brand: {
        primary: '',
      },
      accent: {
        primary: '',
        secondary: '',
      },
      caption: {
        primary: '',
      },
      alert: {
        primary: '',
      },
      info: {
        primary: '',
      },
      white: '',
    },
    shadow: {
      dark: '',
      medium: '',
      light: '',
      brandPrimaryMedium: '',
    },
    skeleton: {
      dark: '',
      light: '',
    },
    overlay: {
      primary: '',
    },
  },
  spaces: {
    xxxl: '',
    xxl: '',
    xl: '',
    l: '',
    m: '',
    s: '',
    xs: '',
    xxs: '',
    xxxs: '',
  },
  radiuses: {
    max: '',
    xl: '',
    l: '',
    m: '',
    s: '',
    xs: '',
    xxs: '',
  },
  opacities: {
    shadow: {
      dark: '',
      medium: '',
      light: '',
    },
    hover: '',
    disabled: '',
    overlay: {
      dark: '',
    },
    placeholder: '',
  },
  font: {
    geist: {
      sans: '',
    },
    fallback: {
      sans: '',
    },
  },
  effects: {
    shadow: {
      l: '',
      m: '',
      s: '',
      xs: '',
      brandPrimaryRightBottomM: '',
    },
    gradient: {
      background: {
        accentPrimaryToSecondaryLeftBottomToRightTop: '',
        overlayLeftToRight: '',
      },
      border: {
        accentPrimaryToSecondaryLeftBottomToRightTop: '',
      },
      text: {
        accentPrimaryToSecondaryLeftBottomToRightTop: '',
      },
    },
  },
}

export const vars = createGlobalThemeContract(tokens, (_, path) => {
  return path.join('-')
})

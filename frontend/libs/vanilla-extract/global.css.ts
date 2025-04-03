import { palette } from '@/providers/ThemeProvider/palette'
import { vars } from '@/libs/vanilla-extract/vars'
import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

createGlobalTheme('[data-theme="light"]', vars.colors, {
  backgrounds: {
    default: `hsl(${palette.light.default.white})`,
    primary: `hsl(${palette.light.default.orange5})`,
    secondary: `hsl(${palette.light.default.coolgray5})`,
    brand: {
      primary: `hsl(${palette.light.default.orange60})`,
      secondary: `hsl(${palette.light.default.orange5})`,
    },
    accent: {
      primary: `hsl(${palette.light.default.purple60})`,
      secondary: `hsl(${palette.light.default.blue60})`,
    },
    alert: {
      primary: `hsl(${palette.light.default.red60})`,
      secondary: `hsl(${palette.light.default.red5})`,
    },
    info: {
      primary: `hsl(${palette.light.default.green60})`,
      secondary: `hsl(${palette.light.default.green5})`,
    },
    inverse: `hsl(${palette.light.default.warmgray90})`,
  },
  border: {
    default: `hsl(${palette.light.default.warmgray10})`,
    primary: `hsl(${palette.light.default.orange30})`,
    secondary: `hsl(${palette.light.default.warmgray40})`,
    brand: {
      primary: `hsl(${palette.light.default.orange60})`,
    },
    accent: {
      primary: `hsl(${palette.light.default.purple60})`,
      secondary: `hsl(${palette.light.default.blue60})`,
    },
    alert: {
      primary: `hsl(${palette.light.default.red60})`,
    },
    info: {
      primary: `hsl(${palette.light.default.green60})`,
    },
  },
  texts: {
    primary: `hsl(${palette.light.default.warmgray90})`,
    secondary: `hsl(${palette.light.default.warmgray60})`,
    tertiary: `hsl(${palette.light.default.warmgray40})`,
    brand: {
      primary: `hsl(${palette.light.default.orange60})`,
    },
    accent: {
      primary: `hsl(${palette.light.default.purple60})`,
      secondary: `hsl(${palette.light.default.blue60})`,
    },
    clickable: `hsl(${palette.light.default.blue40})`,
    caption: {
      primary: `hsl(${palette.light.default.warmgray70})`,
    },
    alert: {
      primary: `hsl(${palette.light.default.red60})`,
    },
    info: {
      primary: `hsl(${palette.light.default.green60})`,
    },
    white: `hsl(${palette.light.default.white})`,
    inverse: `hsl(${palette.light.default.white})`,
  },
  overlay: {
    primary: `hsl(${palette.light.default.black} / ${vars.opacities.overlay.dark})`,
  },
  shadow: {
    dark: `hsl(${palette.light.default.black} / ${vars.opacities.shadow.dark})`,
    medium: `hsl(${palette.light.default.black} / ${vars.opacities.shadow.medium})`,
    light: `hsl(${palette.light.default.black} / ${vars.opacities.shadow.light})`,
    brandPrimaryMedium: `hsl(${palette.light.default.orange60} / ${vars.opacities.shadow.medium})`,
  },
  skeleton: {
    dark: `hsl(${palette.light.default.coolgray10})`,
    light: `hsl(${palette.light.default.coolgray5})`,
  },
})

createGlobalTheme('[data-theme="dark"]', vars.colors, {
  backgrounds: {
    default: `hsl(${palette.dark.default.warmgray90})`,
    primary: `hsl(${palette.dark.default.warmgray80})`,
    secondary: `hsl(${palette.dark.default.coolgray90})`,
    brand: {
      primary: `hsl(${palette.dark.default.orange60})`,
      secondary: `hsl(${palette.dark.default.orange90})`,
    },
    accent: {
      primary: `hsl(${palette.dark.default.purple60})`,
      secondary: `hsl(${palette.dark.default.blue60})`,
    },
    alert: {
      primary: `hsl(${palette.dark.default.red60})`,
      secondary: `hsl(${palette.dark.default.red5})`,
    },
    info: {
      primary: `hsl(${palette.dark.default.green60})`,
      secondary: `hsl(${palette.dark.default.green5})`,
    },
    inverse: `hsl(${palette.dark.default.white})`,
  },
  border: {
    default: `hsl(${palette.dark.default.warmgray70})`,
    primary: `hsl(${palette.dark.default.orange70})`,
    secondary: `hsl(${palette.dark.default.warmgray60})`,
    brand: {
      primary: `hsl(${palette.dark.default.orange60})`,
    },
    accent: {
      primary: `hsl(${palette.dark.default.purple60})`,
      secondary: `hsl(${palette.dark.default.blue60})`,
    },
    alert: {
      primary: `hsl(${palette.dark.default.red60})`,
    },
    info: {
      primary: `hsl(${palette.dark.default.green60})`,
    },
  },
  texts: {
    primary: `hsl(${palette.dark.default.warmgray5})`,
    secondary: `hsl(${palette.dark.default.warmgray40})`,
    tertiary: `hsl(${palette.dark.default.warmgray50})`,
    brand: {
      primary: `hsl(${palette.dark.default.orange60})`,
    },
    accent: {
      primary: `hsl(${palette.dark.default.purple60})`,
      secondary: `hsl(${palette.dark.default.blue60})`,
    },
    clickable: `hsl(${palette.dark.default.blue40})`,
    caption: {
      primary: `hsl(${palette.dark.default.warmgray30})`,
    },
    alert: {
      primary: `hsl(${palette.dark.default.red60})`,
    },
    info: {
      primary: `hsl(${palette.dark.default.green60})`,
    },
    white: `hsl(${palette.dark.default.white})`,
    inverse: `hsl(${palette.dark.default.warmgray90})`,
  },
  overlay: {
    primary: `hsl(${palette.dark.default.coolgray90} / ${vars.opacities.overlay.dark})`,
  },
  shadow: {
    dark: `hsl(${palette.dark.default.white} / ${vars.opacities.shadow.dark})`,
    medium: `hsl(${palette.dark.default.white} / ${vars.opacities.shadow.medium})`,
    light: `hsl(${palette.dark.default.white} / ${vars.opacities.shadow.light})`,
    brandPrimaryMedium: `hsl(${palette.dark.default.orange60} / ${vars.opacities.shadow.medium})`,
  },
  skeleton: {
    dark: `hsl(${palette.dark.default.coolgray70})`,
    light: `hsl(${palette.dark.default.coolgray90})`,
  },
})

createGlobalTheme(':root', vars.spaces, {
  xxxl: `3.75rem`,
  xxl: `2.5rem`,
  xl: `2rem`,
  l: `1.5rem`,
  m: `1rem`,
  s: `0.5rem`,
  xs: `0.375rem`,
  xxs: `0.25rem`,
  xxxs: `0.125rem`,
})

createGlobalTheme(':root', vars.radiuses, {
  max: `9999px`,
  xl: `2rem`,
  l: `1rem`,
  m: `0.75rem`,
  s: `0.5rem`,
  xs: `0.25rem`,
  xxs: '0.125rem',
})

createGlobalTheme(':root', vars.opacities, {
  shadow: {
    dark: `0.3`,
    medium: `0.2`,
    light: `0.1`,
  },
  hover: `0.8`,
  disabled: `0.3`,
  placeholder: `0.5`,
  overlay: {
    dark: `0.8`,
  },
})

createGlobalTheme(':root', vars.effects, {
  shadow: {
    l: `0px 4px 16px 0px ${vars.colors.shadow.medium}`,
    m: `0px 4px 16px 0px ${vars.colors.shadow.light}`,
    s: `0px 2px 8px 0px ${vars.colors.shadow.light}`,
    xs: `0px 1px 2px 0px ${vars.colors.shadow.light}`,
    brandPrimaryRightBottomM: `8px 8px 0px 0px ${vars.colors.shadow.brandPrimaryMedium}`,
  },
  gradient: {
    background: {
      accentPrimaryToSecondaryLeftBottomToRightTop: `linear-gradient(86deg, ${vars.colors.backgrounds.accent.primary} 0%, ${vars.colors.backgrounds.accent.secondary} 100%)`,
      overlayLeftToRight: `linear-gradient(90deg, transparent 0%, ${vars.colors.backgrounds.default} 100%)`,
    },
    border: {
      accentPrimaryToSecondaryLeftBottomToRightTop: `linear-gradient(86deg, ${vars.colors.border.accent.primary} 0%, ${vars.colors.border.accent.secondary} 100%)`,
    },
    text: {
      accentPrimaryToSecondaryLeftBottomToRightTop: `linear-gradient(86deg, ${vars.colors.texts.accent.primary} 0%, ${vars.colors.texts.accent.secondary} 100%)`,
    },
  },
})

createGlobalTheme(':root', vars.font, {
  geist: {
    sans: 'inherit',
  },
  fallback: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
})

globalStyle(
  `html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video`,
  {
    margin: '0',
    padding: '0',
    border: '0',
    verticalAlign: 'baseline',
    textDecoration: 'unset',
  },
)

globalStyle('html', {
  boxSizing: 'border-box',
  height: '100%',
})

globalStyle('body', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
})

globalStyle('html, body', {
  background: vars.colors.backgrounds.default,
})

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  flexShrink: '1',
  flexBasis: '0',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
})

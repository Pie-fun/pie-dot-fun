const breakpoints = {
  wideDesktop: 1280,
  desktop: 769,
  mobile: 768,
} as const

type Query = {
  breakpoints: Record<keyof typeof breakpoints, string>
  theme: Record<'dark' | 'light', string>
  common: Record<string, string>
}

export const queries = {
  breakpoints: {
    wideDesktop: `(min-width: ${breakpoints.wideDesktop}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    mobile: `(max-width: ${breakpoints.mobile}px)`,
  },
  theme: {
    dark: `(prefers-color-scheme: dark)`,
    light: `(prefers-color-scheme: light)`,
  },
  common: {
    isTouchDevice: `(pointer: coarse)`,
  },
} as const satisfies Query

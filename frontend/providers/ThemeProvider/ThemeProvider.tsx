'use client'

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { isClient } from '@/utils/isClient'
import { convertFromHsl } from '@/utils/getCssVarToValue'
import { palette } from '@/providers/ThemeProvider/palette'

export type Theme = 'light' | 'dark' | 'system'

export const THEME_KEY = 'theme'

type ContextProps = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

const Context = createContext<ContextProps>({
  theme: 'system',
  setTheme: () => {},
})

export function ThemeProvider({ children }: PropsWithChildren) {
  const isPrefersColorSchemeDark = useMediaQuery({ query: queries.theme.dark })

  const setThemeAtDom = ({ theme }: { theme: Theme }) => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme

    document.documentElement.style.background =
      theme === 'light'
        ? convertFromHsl({
            hsl: `hsl(${palette.light.default.white})`,
            format: 'hex',
          })
        : convertFromHsl({
            hsl: `hsl(${palette.dark.default.warmgray90})`,
            format: 'hex',
          })
  }

  const setInitialThemeBeforeRendering = `(function() {
    const getInitialTheme = () => {
      const isClient = typeof window !== 'undefined'
      if (isClient) {
        const theme = window.localStorage.getItem('theme')
        if (theme) {
          return theme
        }
        const isPrefersColorSchemeDark = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches
        if (isPrefersColorSchemeDark) {
          return 'dark'
        }
        return 'light'
      }
      return 'light'
    }
    const theme = getInitialTheme()

    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme

    document.documentElement.style.background =
      theme === 'light' ? '#FFFFFF' : '#151413'
  })()`

  const getInitialTheme = () => {
    if (!isClient()) {
      return 'system'
    }

    const localStorageTheme = window.localStorage.getItem(THEME_KEY) as Theme

    return localStorageTheme ?? 'system'
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme())
  const value = useMemo(() => ({ theme, setTheme }), [theme])

  const setThemeToLocalStorage = (theme: Theme) => {
    if (theme === 'system') {
      return window.localStorage.removeItem(THEME_KEY)
    }

    window.localStorage.setItem(THEME_KEY, theme)
  }

  const setThemeAttributeAndState = useCallback(
    (event: MediaQueryListEvent) => {
      const localStorageTheme = window.localStorage.getItem(THEME_KEY) as Theme

      if (localStorageTheme) {
        return
      }

      const theme = event.matches ? 'dark' : 'light'

      setThemeAtDom({ theme })
    },
    [],
  )

  useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addEventListener('change', setThemeAttributeAndState)

    return () => {
      mediaQueryList.removeEventListener('change', setThemeAttributeAndState)
    }
  }, [setThemeAttributeAndState])

  useLayoutEffect(() => {
    setThemeToLocalStorage(theme)

    if (theme !== 'system') {
      setThemeAtDom({ theme })
    }

    if (theme === 'system') {
      const preferTheme = isPrefersColorSchemeDark ? 'dark' : 'light'

      setThemeAtDom({ theme: preferTheme })
    }
  }, [isPrefersColorSchemeDark, theme])

  return (
    <>
      <script
        defer
        id='theme'
        dangerouslySetInnerHTML={{ __html: setInitialThemeBeforeRendering }}
      />
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  )
}

export function useTheme() {
  return useContext(Context)
}

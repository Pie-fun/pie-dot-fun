export const REDIRECT_URI_KEY = 'redirect_uri'

export const POLLING_INTERVAL = {
  PRIMARY: 1000,
  SECONDARY: 5000,
  TERTIARY: 10000,
  QUATERNARY: 30000,
} as const

export const FETCH_RETRY_COUNT = {
  PRIMARY: 2,
  SECONDARY: 3,
} as const

export const DEBOUNCE_DELAY = {
  PRIMARY: 500,
  SECONDARY: 1000,
} as const

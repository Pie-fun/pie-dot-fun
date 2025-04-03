import { routing } from '@/libs/next-intl/routing'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`@/libs/next-intl/messages/${locale}.json`))
      .default,
  }
})

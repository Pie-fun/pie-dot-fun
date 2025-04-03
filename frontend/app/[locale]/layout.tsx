import { ThemeProvider } from '@/providers/ThemeProvider/ThemeProvider'
import { QueryClientProvider } from '@/providers/QueryClientProvider/QueryClientProvider'
import { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/libs/next-intl/routing'
import { notFound } from 'next/navigation'
import { DesignSystemProvider } from '@/providers/DesignSystemProvider/DesignSystemProvider'
import { GeistSans } from 'geist/font/sans'
import { PrivyProvider } from '@/providers/PrivyProvider/PrivyProvider'
import { Header } from '@/app/components/Header/Header'
import { RelayProvider } from '@/providers/RelayProvider/RelayProvider'
import { metadata as metadataPrimitive } from '@/app/[locale]/metadata'
import { Viewport } from 'next'
import { queries } from '@/libs/vanilla-extract/queries'
import { PwaProvider } from '@/providers/PwaProvider/PwaProvider'
import { GoogleTagManager } from '@next/third-parties/google'
import { convertFromHsl } from '@/utils/getCssVarToValue'
import { palette } from '@/providers/ThemeProvider/palette'
import { MswProvider } from '@/providers/MswProvider/MswProvider'

export const metadata = metadataPrimitive

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: [
    {
      media: queries.theme.light,
      color: convertFromHsl({
        hsl: `hsl(${palette.light.default.white})`,
        format: 'hex',
      }),
    },
    {
      media: queries.theme.dark,
      color: convertFromHsl({
        hsl: `hsl(${palette.dark.default.warmgray90})`,
        format: 'hex',
      }),
    },
  ],
}

export default async function Layout({
  children,
  params,
}: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={GeistSans.variable}>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleTagManager gtmId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
      <body>
        <ThemeProvider>
          <DesignSystemProvider>
            <PwaProvider>
              <NextIntlClientProvider messages={messages}>
                <MswProvider>
                  <QueryClientProvider>
                    <PrivyProvider>
                      <RelayProvider>
                        <main>
                          <Header />
                          {children}
                        </main>
                      </RelayProvider>
                    </PrivyProvider>
                  </QueryClientProvider>
                </MswProvider>
              </NextIntlClientProvider>
            </PwaProvider>
          </DesignSystemProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

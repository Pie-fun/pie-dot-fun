import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../providers/ThemeProvider/ThemeProvider'
import { DesignSystemProvider } from '../providers/DesignSystemProvider/DesignSystemProvider'
import localFont from 'next/font/local'

const GeistSans = localFont({
  src: '../fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist-sans',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className={GeistSans.variable}>
        <ThemeProvider />
        <DesignSystemProvider>
          <Story />
        </DesignSystemProvider>
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default preview

import { Metadata } from 'next'

const metadataTitle = 'Easy as Pie, Sweeter Gains'
const metadataDescription =
  'One click to the best memecoins, zero hassle. Creators bake the perfect mix of top memes, you just grab a slice with SOL or stables.'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  applicationName: 'pie.fun',
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: metadataDescription,
    creator: '@piedotfun',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
} satisfies Metadata

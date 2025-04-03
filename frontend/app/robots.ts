import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: process.env.NEXT_PUBLIC_ENV === 'prod' ? '/' : '',
      disallow: process.env.NEXT_PUBLIC_ENV !== 'prod' ? '/' : '',
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}

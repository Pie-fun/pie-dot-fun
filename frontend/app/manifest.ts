import type { MetadataRoute } from 'next'
import iconMiddle from '@/public/icons/192x192.png'
import iconLarge from '@/public/icons/512x512.png'
import { ROUTES } from '@/constants/routes'
import { metadata } from '@/app/[locale]/metadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metadata.applicationName,
    short_name: metadata.applicationName,
    description: metadata.description,
    start_url: ROUTES['/'],
    orientation: 'any',
    display: 'standalone',
    icons: [
      {
        src: iconMiddle.src,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: iconLarge.src,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import RootLoading from '@/app/[locale]/loadingSkeleton'
import BasketsChainAddressLoading from '@/app/[locale]/baskets/[chain]/[address]/loadingSkeleton'
import ProfileDisplaynameLoading from '@/app/[locale]/profile/[displayName]/loadingSkeleton'
import { useLayoutEffect } from 'react'

export default function Loading() {
  const segments = useSelectedLayoutSegments()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const findMatchingRoute = (segments: string[]) => {
    return Object.values(ROUTES).find((path) => {
      const routeSegments = path.split('/').filter(Boolean)

      if (routeSegments.length !== segments.length) {
        return false
      }

      return routeSegments.every((segment, index) => {
        return segment.startsWith(':') || segment === segments[index]
      })
    })
  }

  const currentRoute = findMatchingRoute(segments) || 'Unknown Route'

  if (currentRoute === ROUTES['/']) {
    return <RootLoading />
  }

  if (currentRoute === ROUTES['/BASKETS/:CHAIN/:ADDRESS']) {
    return <BasketsChainAddressLoading />
  }

  if (currentRoute === ROUTES['/PROFILE/:DISPLAYNAME']) {
    return <ProfileDisplaynameLoading />
  }

  return null
}

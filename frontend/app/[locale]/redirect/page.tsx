'use client'

import { REDIRECT_URI_KEY } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useUser } from '@/libs/api/useUser'
import { redirect, RedirectType, useSearchParams } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  const { isAuthenticated } = useUser()

  useLayoutEffect(() => {
    const redirectUri = searchParams.get(REDIRECT_URI_KEY) || ROUTES['/']

    if (isAuthenticated && redirectUri) {
      return redirect(redirectUri, RedirectType.replace)
    }
  }, [isAuthenticated, searchParams])

  return null
}

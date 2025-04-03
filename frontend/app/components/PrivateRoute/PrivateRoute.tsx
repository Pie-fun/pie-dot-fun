'use client'

import { PropsWithChildren } from 'react'
import { ROUTES } from '@/constants/routes'
import { RedirectType, redirect, usePathname } from 'next/navigation'
import { REDIRECT_URI_KEY } from '@/constants/common'
import { useUser } from '@/libs/api/useUser'

export function PrivateRoute({
  children,
}: Readonly<PropsWithChildren<unknown>>) {
  const { isAuthenticated } = useUser()
  const pathname = usePathname()

  if (!isAuthenticated) {
    const url = new URL(ROUTES['/SIGN-IN'], process.env.NEXT_PUBLIC_BASE_URL)

    url.searchParams.set(REDIRECT_URI_KEY, pathname)

    return redirect(url.toString(), RedirectType.replace)
  }

  if (isAuthenticated) {
    return <>{children}</>
  }
}

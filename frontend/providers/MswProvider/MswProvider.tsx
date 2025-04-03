'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

export function MswProvider({ children }: PropsWithChildren) {
  const [isInit, setIsInit] = useState(false)

  const init = async () => {
    if (typeof window !== 'undefined') {
      const { worker } = await import('@/libs/msw/browser')

      await worker.start({
        onUnhandledRequest: 'bypass',
      })
      setIsInit(true)
    } else if (process.env.NEXT_RUNTIME === 'nodejs') {
      const { server } = await import('@/libs/msw/node')

      server.listen({
        onUnhandledRequest: 'bypass',
      })
    }
  }

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_IS_USE_MOCK_DATA === 'true' && !isInit) {
      init()
    }
  }, [isInit])

  if (process.env.NEXT_PUBLIC_IS_USE_MOCK_DATA === 'false') {
    return children
  }

  return isInit ? children : null
}

'use client'

import { lazy, PropsWithChildren, Suspense } from 'react'
import { QueryClientProvider as PrimitiveQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'

const QueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
)

export function QueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient()

  return (
    <PrimitiveQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition='bottom-right' initialIsOpen={false} />
      {process.env.NEXT_PUBLIC_IS_USE_REACT_QUERY_DEVTOOLS === 'true' && (
        <Suspense fallback={null}>
          <QueryDevtoolsProduction />
        </Suspense>
      )}
    </PrimitiveQueryClientProvider>
  )
}

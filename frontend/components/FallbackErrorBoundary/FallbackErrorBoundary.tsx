'use client'

import { FallbackErrorBoundaryProps } from '@/libs/react-error-boundary/types'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export function FallbackErrorBoundary({ error }: FallbackErrorBoundaryProps) {
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    if (error.status !== 404) {
      showBoundary(error)
    }
  }, [error, showBoundary])

  return null
}

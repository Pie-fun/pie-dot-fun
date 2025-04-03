'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { PropsWithChildren } from 'react'

type ResponsiveProps = {
  breakpoint: keyof typeof queries.breakpoints
}

export function Responsive({
  children,
  breakpoint,
}: PropsWithChildren<ResponsiveProps>) {
  const isMatch = useMediaQuery({ query: queries.breakpoints[breakpoint] })

  return <>{isMatch ? children : null}</>
}

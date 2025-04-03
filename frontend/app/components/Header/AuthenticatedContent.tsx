import { DepositCard } from '@/app/components/Header/DepositCard/DepositCard'
import { Box } from '@/components/Box/Box'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { HeaderDropdownMenu } from '@/app/components/Header/HeaderDropdownMenu/HeaderDropdownMenu'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/app/components/ErrorFallback/ErrorFallback'

export function AuthenticatedContent() {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <Box orientation='horizontal' gap='m' align='center'>
      <ErrorBoundary fallback={<ErrorFallback />}>
        {isDesktop && <DepositCard />}
      </ErrorBoundary>
      <HeaderDropdownMenu />
    </Box>
  )
}

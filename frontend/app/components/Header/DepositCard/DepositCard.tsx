import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { useTranslations } from 'next-intl'
import { Deposit } from '@/app/components/Deposit/Deposit'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcDownwardArrawInCutcircleOutline } from '@/components/Icon/Icons'
// import { SolBalance } from '@/app/components/Header/DepositCard/SolBalance'
import { Typography } from '@/components/Typography/Typography'
// import { EthBalance } from '@/app/components/Header/DepositCard/EthBalance'
// import { ErrorBoundary } from 'react-error-boundary'
// import { ErrorFallback } from '@/app/components/ErrorFallback/ErrorFallback'
// import { BaseEthBalance } from '@/app/components/Header/DepositCard/BaseEthBalance'

export function DepositCard() {
  const t = useTranslations()

  return (
    <Card.Root
      layout='fillWidth'
      background='default'
      border='default'
      size='s'
    >
      <Card.Header>
        <Box
          layout='fillWidth'
          orientation='horizontal'
          gap='m'
          align='spaceBetweenCenter'
        >
          {/* TODO @ted polling timing interference */}
          {/* <ErrorBoundary fallback={<ErrorFallback />}>
            <SolBalance />
          </ErrorBoundary>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <EthBalance />
          </ErrorBoundary>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <BaseEthBalance />
          </ErrorBoundary> */}
          <Deposit
            trigger={
              <Typography typography='body2' fontWeight='bold'>
                <Button
                  buttonType='solid'
                  shape='square'
                  color='primary'
                  size='s'
                >
                  {t('common.deposit')}
                  <Icon>
                    <IcDownwardArrawInCutcircleOutline />
                  </Icon>
                </Button>
              </Typography>
            }
          />
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

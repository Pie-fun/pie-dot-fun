import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/Icon/Icon'
import { getShortAddress } from '@/utils/getShortAddress'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { useUser } from '@/libs/api/useUser'
import { IcEthereumFixedColorFill } from '@/components/Icon/Icons'
import { EthBalance } from '@/app/components/Header/HeaderDropdownMenu/EthBalance'
import { BaseEthBalance } from '@/app/components/Header/HeaderDropdownMenu/BaseEthBalance'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/app/components/ErrorFallback/ErrorFallback'

export function EvmWalletInfoCard() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'EVM' })

  return (
    <Card.Root background='default' border='default' size='s'>
      <Card.Header>
        <Box layout='fillWidth' orientation='vertical' gap='s'>
          {wallet && (
            <Box
              layout='fillWidth'
              align='spaceBetweenCenter'
              orientation='horizontal'
              gap='m'
            >
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Icon size='s' shape='circle'>
                  <IcEthereumFixedColorFill />
                </Icon>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {getShortAddress({ address: wallet.address, type: 'evm' })}
                </Typography>
              </Box>
              <CopyToClipboard
                buttonType='solid'
                shape='square'
                color='secondary'
                size='s'
                value={wallet.address}
              >
                {t('common.copy')}
              </CopyToClipboard>
            </Box>
          )}
          <ErrorBoundary fallback={<ErrorFallback />}>
            <EthBalance />
          </ErrorBoundary>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <BaseEthBalance />
          </ErrorBoundary>
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

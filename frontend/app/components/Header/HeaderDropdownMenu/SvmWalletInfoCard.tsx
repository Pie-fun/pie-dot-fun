import * as Card from '@/components/Card/Card'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/Icon/Icon'
import { getShortAddress } from '@/utils/getShortAddress'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { useUser } from '@/libs/api/useUser'
import { IcSolanaFixedColorFill } from '@/components/Icon/Icons'
import { SolBalance } from '@/app/components/Header/HeaderDropdownMenu/SolBalance'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/app/components/ErrorFallback/ErrorFallback'

export function SvmWalletInfoCard() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'SVM' })

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
                <Icon size='s'>
                  <IcSolanaFixedColorFill />
                </Icon>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {getShortAddress({ address: wallet.address, type: 'svm' })}
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
            <SolBalance />
          </ErrorBoundary>
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

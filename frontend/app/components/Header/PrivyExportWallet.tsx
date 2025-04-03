import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcKeyOutline } from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { useSolanaWallets } from '@privy-io/react-auth'
import { useTranslations } from 'next-intl'

export function PrivyExportWallet() {
  const t = useTranslations()
  const { exportWallet } = useSolanaWallets()

  return (
    <Button
      layout='fillWidth'
      buttonType='content'
      onClick={() => exportWallet()}
    >
      <Box layout='fillWidth' orientation='horizontal' gap='s'>
        <Icon size='m' color='primary'>
          <IcKeyOutline />
        </Icon>
        <Typography typography='body1' fontWeight='regular' color='primary'>
          {t('layoutHeader.exportWallet')}
        </Typography>
      </Box>
    </Button>
  )
}

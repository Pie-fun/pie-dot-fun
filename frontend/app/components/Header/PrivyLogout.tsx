import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcOutOutline } from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { usePrivyAction } from '@/providers/PrivyActionProvider/PrivyActionProvider'
import { useTranslations } from 'next-intl'

export function PrivyLogout() {
  const t = useTranslations()
  const { logout } = usePrivyAction()

  return (
    <Button layout='fillWidth' buttonType='content' onClick={logout}>
      <Box layout='fillWidth' orientation='horizontal' gap='s'>
        <Icon size='m' color='primary'>
          <IcOutOutline />
        </Icon>
        <Typography typography='body1' fontWeight='regular' color='primary'>
          {t('common.signOut')}
        </Typography>
      </Box>
    </Button>
  )
}

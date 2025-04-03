import { PrivyLoginButton } from '@/app/components/PrivyLoginButton/PrivyLoginButton'
import { ExternalLinks } from '@/app/components/Header/ExternalLinks'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { HeaderDropdownMenu } from '@/app/components/Header/HeaderDropdownMenu/HeaderDropdownMenu'

export function UnAuthenticatedContent() {
  const t = useTranslations()

  return (
    <Box orientation='horizontal' gap='s' align='center'>
      <ExternalLinks />
      <HeaderDropdownMenu />
      <PrivyLoginButton
        buttonType='solid'
        shape='square'
        color='accentGradient'
        size='s'
      >
        <Typography typography='body2' fontWeight='bold'>
          {t('common.signIn')}
        </Typography>
      </PrivyLoginButton>
    </Box>
  )
}

import { Box } from '@/components/Box/Box'
import { Icon } from '@/components/Icon/Icon'
import { IcPersonOutline } from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { Typography } from '@/components/Typography/Typography'
import { ROUTES } from '@/constants/routes'
import { useUser } from '@/libs/api/useUser'
import { generatePath } from '@/libs/react-router/react-router'
import { useTranslations } from 'next-intl'

export function ProfileMenu() {
  const t = useTranslations()
  const { data } = useUser()

  return (
    <Link
      layout='fillWidth'
      href={
        data?.displayName
          ? generatePath(ROUTES['/PROFILE/:DISPLAYNAME'], {
              displayName: data.displayName,
            })
          : ROUTES['/SIGN-IN/SETUP']
      }
    >
      <Box layout='fillWidth' orientation='horizontal' gap='s'>
        <Icon size='m' color='primary'>
          <IcPersonOutline />
        </Icon>
        <Typography typography='body1' fontWeight='regular' color='primary'>
          {t('layoutHeader.profile')}
        </Typography>
      </Box>
    </Link>
  )
}

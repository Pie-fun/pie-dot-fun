import { UserAvatar } from '@/components/UserAvatar/UserAvatar'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'
import { generatePath } from '@/libs/react-router/react-router'
import { useUser } from '@/libs/api/useUser'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'

export function PrivyUserAvatar() {
  const { data } = useUser()
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <Link
      href={
        data?.displayName
          ? generatePath(ROUTES['/PROFILE/:DISPLAYNAME'], {
              displayName: data.displayName,
            })
          : ROUTES['/SIGN-IN/SETUP']
      }
    >
      <Box gap='s' align='center'>
        <UserAvatar size='m' isLined src={data?.profileImageUrl} alt='' />
        {isDesktop && (
          <Typography typography='body2' fontWeight='regular' color='primary'>
            {data?.displayName}
          </Typography>
        )}
      </Box>
    </Link>
  )
}

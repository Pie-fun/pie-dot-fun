'use client'

import { HomePieAnimation } from '@/app/components/HomePieAnimation/HomePieAnimation'
import { Layout } from '@/components/Layout/Layout'
import * as styles from '@/app/[locale]/sign-in/page.css'
import * as Title from '@/components/Title/Title'
import { useTranslations } from 'next-intl'
import { PrivyLoginButton } from '@/app/components/PrivyLoginButton/PrivyLoginButton'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { REDIRECT_URI_KEY } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useEffect } from 'react'
import { useUser } from '@/libs/api/useUser'

export default function Page() {
  const t = useTranslations()
  const { isAuthenticated } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (isAuthenticated) {
      const redirectUri = searchParams.get(REDIRECT_URI_KEY)
      const url = new URL(ROUTES['/REDIRECT'], window.location.origin)

      if (redirectUri) {
        url.searchParams.set(REDIRECT_URI_KEY, redirectUri)
      }

      router.push(url.toString())
    }
  }, [isAuthenticated, router, searchParams])

  return (
    <Layout gap='l' topPadding='l' horizontalPadding='m'>
      <div className={styles.root()}>
        <HomePieAnimation />
        <Title.Root align='center'>
          <Title.Heading size='m' color='brand'>
            {t('signInHeroSection.titleMiddle')}
          </Title.Heading>
          <Title.Description size='m'>
            {t('signInHeroSection.description')}
          </Title.Description>
        </Title.Root>
      </div>
      <Box layout='fillWidth' align='center'>
        <Typography typography='body1' fontWeight='bold'>
          <PrivyLoginButton
            buttonType='solid'
            color='accentGradient'
            size='m'
            shape='square'
          >
            {t('common.signInAndSignUp')}
            <Icon size='m'>
              <IcChevRightOutline />
            </Icon>
          </PrivyLoginButton>
        </Typography>
      </Box>
    </Layout>
  )
}

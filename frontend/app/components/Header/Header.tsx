'use client'

import * as styles from '@/app/components/Header/Header.css'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'
import { Box } from '@/components/Box/Box'
import { Image } from '@/components/Image/Image'
import imgLogoPieM from '@/public/images/img_logo_pie_m.png'
import { Typography } from '@/components/Typography/Typography'
import { metadata } from '@/app/[locale]/metadata'
import imgSymbolBeta from '@/app/components/Header/img_symbol_beta.png'
import { AuthenticatedContent } from '@/app/components/Header/AuthenticatedContent'
import { UnAuthenticatedContent } from '@/app/components/Header/UnAuthenticatedContent'
import { Button } from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { useUser } from '@/libs/api/useUser'
import { Tutorial } from '@/app/components/Tutorial/Tutorial'
import { usePrivyAction } from '@/providers/PrivyActionProvider/PrivyActionProvider'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

export function Header() {
  const t = useTranslations()
  const { isAuthenticated } = useUser()
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })
  const { isNewUser } = usePrivyAction()

  return (
    <header className={styles.header()}>
      <div className={styles.root()}>
        <div className={styles.content({ position: 'left' })}>
          <Link href={ROUTES['/']}>
            <Box orientation='horizontal' gap='xxs' align='center'>
              <Image
                src={imgLogoPieM.src}
                placeholder='blur'
                blurDataURL={imgLogoPieM.blurDataURL}
                alt=''
                width={20}
                height={20}
              />
              <Typography typography='title4' fontWeight='bold' color='primary'>
                {metadata.applicationName}
              </Typography>
              <Image
                src={imgSymbolBeta.src}
                placeholder='blur'
                blurDataURL={imgSymbolBeta.blurDataURL}
                alt='beta'
                width={24}
                height={24}
              />
            </Box>
          </Link>
        </div>
        <div className={styles.content({ position: 'center' })} />
        <div className={styles.content({ position: 'right' })}>
          {isDesktop && (
            <Link href={EXTERNAL_LINKS.CREATE_BASKET_GOOGLE_FORM} isExternal>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='primary'
              >
                <Button
                  buttonType='text'
                  color='accentGradient'
                  size='s'
                  shape='square'
                >
                  {t('common.createBasekt')}
                </Button>
              </Typography>
            </Link>
          )}
          {isDesktop && (
            <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_FAQ} isExternal>
              <Typography
                typography='body2'
                fontWeight='regular'
                color='primary'
              >
                <Button
                  buttonType='text'
                  color='secondary'
                  size='s'
                  shape='square'
                >
                  {t('common.faq')}
                </Button>
              </Typography>
            </Link>
          )}
          {!isAuthenticated && <UnAuthenticatedContent />}
          {isAuthenticated && <AuthenticatedContent />}
          <Tutorial open={isNewUser} />
        </div>
      </div>
    </header>
  )
}

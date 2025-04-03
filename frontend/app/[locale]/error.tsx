'use client'

import { Layout } from '@/components/Layout/Layout'
import * as styles from '@/app/[locale]/error.css'
import * as Title from '@/components/Title/Title'
import * as Card from '@/components/Card/Card'
import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import imgPieKittyWithQuestionMark from '@/app/[locale]/img_pie_kitty_with_question_mark.png'
import { Image } from '@/components/Image/Image'
import { Button } from '@/components/Button/Button'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'
import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'
import { CustomFetchError } from '@/libs/fetch/types'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { Box } from '@/components/Box/Box'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import { getEnumerableObject } from '@/utils/getEnumerableObject'
import imgAGlobeMadeOfPie from '@/app/[locale]/img_a_globe_made_of_pie.png'
import { useQuery } from '@tanstack/react-query'
import { getPingQuery } from '@/app/api/backend/common/queries'

type ErrorPageProps = {
  error: Error & CustomFetchError
  reset: () => void
}

export default function ErrorPage(props: Readonly<ErrorPageProps>) {
  const { isError: isGeoblockError, isFetched } = useQuery({
    ...getPingQuery(),
    throwOnError: false,
  })

  // If an error occurs even when a ping request is sent, it is considered a geoblock error since it cannot be determined with certainty.
  if (isFetched && isGeoblockError) {
    return <GeoBlockError />
  }

  if (isFetched && !isGeoblockError) {
    return <CommonError {...props} />
  }

  return null
}

export function CommonError({ error }: Readonly<ErrorPageProps>) {
  const t = useTranslations()
  const { message, data } = error

  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <Layout gap='l' topPadding='l' horizontalPadding='m'>
      <div className={styles.root()}>
        <Image
          src={imgPieKittyWithQuestionMark.src}
          placeholder='blur'
          blurDataURL={imgPieKittyWithQuestionMark.blurDataURL}
          alt=''
          width={112}
          height={134}
          shape='squareXs'
        />
        <Title.Root align='center'>
          <Title.Heading size='m' color='brand'>
            {t('errorPage.commonError.title')}
          </Title.Heading>
          <Typography typography='body1' fontWeight='regular' color='secondary'>
            {t('errorPage.commonError.description')}
          </Typography>
        </Title.Root>
      </div>
      {(data?.message || message) && (
        <Box layout='fillWidth' align='center'>
          <Card.Root
            layout='hug'
            background='default'
            border='default'
            size='s'
          >
            <Card.Header>
              <Box gap='m' align='center'>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('errorPage.commonError.error')}
                </Typography>
                <Box align='center'>
                  <Typography
                    typography='body1'
                    fontWeight='regular'
                    color='primary'
                  >
                    {data?.message ?? message}
                  </Typography>
                  <CopyToClipboard
                    buttonType='text'
                    color='secondary'
                    size='squareS'
                    shape='square'
                    value={JSON.stringify(getEnumerableObject(error))}
                  />
                </Box>
              </Box>
            </Card.Header>
            <Card.Footer />
          </Card.Root>
        </Box>
      )}
      <div className={styles.buttons()}>
        <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_SUPPORT} isExternal>
          <Typography typography='body1' fontWeight='bold'>
            <Button buttonType='solid' color='primary' size='m' shape='square'>
              {t('common.openSupportPage')}
              <Icon size='m'>
                <IcChevRightOutline />
              </Icon>
            </Button>
          </Typography>
        </Link>
        <Link href={ROUTES['/']}>
          <Typography layout='fillWidth' typography='body1' fontWeight='bold'>
            <Button
              layout='fillWidth'
              buttonType='solid'
              color='secondary'
              size='m'
              shape='square'
            >
              {t('errorPage.commonError.goToHomeBtn')}
              <Icon size='m'>
                <IcChevRightOutline />
              </Icon>
            </Button>
          </Typography>
        </Link>
      </div>
    </Layout>
  )
}

export function GeoBlockError() {
  const t = useTranslations()

  return (
    <Layout gap='l' topPadding='l' horizontalPadding='m'>
      <div className={styles.root()}>
        <Image
          src={imgAGlobeMadeOfPie.src}
          placeholder='blur'
          blurDataURL={imgAGlobeMadeOfPie.blurDataURL}
          alt=''
          width={112}
          height={134}
          shape='squareXs'
        />
        <Title.Root align='center'>
          <Title.Heading size='m' color='brand'>
            {t('geoBlockPage.title')}
          </Title.Heading>
          <Typography typography='body1' fontWeight='regular' color='secondary'>
            {t.rich('geoBlockPage.description', {
              br: () => <br />,
              link: (children) => (
                <Link
                  href={EXTERNAL_LINKS.PIE_DOT_FUN_TERMS_OF_USE}
                  color='tertiary'
                  isExternal
                  isUnderline
                >
                  {children}
                </Link>
              ),
            })}
          </Typography>
        </Title.Root>
      </div>
    </Layout>
  )
}

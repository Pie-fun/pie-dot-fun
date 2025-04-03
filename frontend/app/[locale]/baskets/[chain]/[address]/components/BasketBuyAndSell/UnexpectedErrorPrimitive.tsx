import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import { Box } from '@/components/Box/Box'
import { Icon } from '@/components/Icon/Icon'
import { IcChevOutline } from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {t('common.tryAgain')}
    </Typography>
  )
}

export function Description({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='body1'
      fontWeight='regular'
      color='primary'
      {...props}
    >
      {t('tradingError.unexpectedError.descriptionUnexpectedError')}
    </Typography>
  )
}

export function Content({ ...props }: ComponentProps<typeof Box>) {
  return <Box orientation='vertical' gap='m' align='center' {...props} />
}

export function Support() {
  const t = useTranslations()

  return (
    <Box orientation='vertical' gap='s'>
      <Typography typography='body2' fontWeight='regular' color='secondary'>
        {t('tradingError.unexpectedError.descriptionRepeat')}
      </Typography>
      <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_SUPPORT} isExternal>
        <Button buttonType='outline' color='secondary' size='s' shape='square'>
          <span>{t('common.openSupportPage')}</span>
          <Icon size='s' rotate={90}>
            <IcChevOutline />
          </Icon>
        </Button>
      </Link>
    </Box>
  )
}

export function CloseButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Button
      layout='fillWidth'
      buttonType='solid'
      shape='square'
      color='primary'
      size='m'
      {...props}
    >
      <Typography typography='body1' fontWeight='bold'>
        {t('common.close')}
      </Typography>
    </Button>
  )
}

export function SuccessTitle({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {t('tradingError.tradingSuccessful.title')}
    </Typography>
  )
}

export function SuccessDescription({
  ...props
}: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='body1'
      fontWeight='regular'
      color='primary'
      {...props}
    >
      {t('tradingError.tradingSuccessful.description')}
    </Typography>
  )
}

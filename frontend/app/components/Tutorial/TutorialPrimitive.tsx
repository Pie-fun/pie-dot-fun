import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import { ComponentProps } from 'react'
import imgBuyOneClick from '@/app/components/Tutorial/img_buy_one_click.png'
import { Image } from '@/components/Image/Image'
import { Box } from '@/components/Box/Box'
import * as List from '@/components/List/List'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'
import { Link } from '@/components/Link/Link'
import { useUser } from '@/libs/api/useUser'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import { PrivyLoginButton } from '@/app/components/PrivyLoginButton/PrivyLoginButton'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()
  const { data } = useUser()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {data?.displayName
        ? t('tutorial.title.afterSignIn', { username: data.displayName })
        : t('tutorial.title.beforeSignIn')}
    </Typography>
  )
}

export function Detail() {
  const t = useTranslations()

  return (
    <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
      <Box orientation='vertical' align='center'>
        <Typography
          typography='caption2'
          fontWeight='regular'
          color='brandPrimary'
        >
          {t('tutorial.memecoinBasket')}
        </Typography>
        <Image
          src={imgBuyOneClick.src}
          placeholder='blur'
          blurDataURL={imgBuyOneClick.blurDataURL}
          alt=''
          width={159}
          height={110}
        />
      </Box>
      <Typography typography='body1' fontWeight='regular' color='primary'>
        <Typography typography='body1' fontWeight='regular' color='primary'>
          <List.Root listStyleType='decimal'>
            <Box orientation='vertical' gap='xs'>
              <List.Item>{t('tutorial.discoverBasket')}</List.Item>
              <List.Item>{t('tutorial.buyOneclick')}</List.Item>
              <List.Item>{t('tutorial.lessRisky')}</List.Item>
              <List.Item>{t('tutorial.sellAnytime')}</List.Item>
            </Box>
          </List.Root>
        </Typography>
      </Typography>
      <Box orientation='horizontal' gap='s' align='center'>
        <Typography typography='body1' fontWeight='regular' color='secondary'>
          {t('common.needMoreInfo')}
        </Typography>
        <Typography typography='body2' fontWeight='regular'>
          <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_FAQ} isExternal>
            <Button
              buttonType='solid'
              color='secondary'
              size='s'
              shape='square'
            >
              {t('common.faq')}
              <Icon>
                <IcChevRightOutline />
              </Icon>
            </Button>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export function LoginButton({
  ...props
}: ComponentProps<typeof PrivyLoginButton>) {
  const t = useTranslations()

  return (
    <PrivyLoginButton
      layout='fillWidth'
      buttonType='solid'
      size='m'
      color='accentGradient'
      shape='square'
      {...props}
    >
      <Typography typography='body1' fontWeight='bold'>
        {t('tutorial.signInToStart')}
      </Typography>
    </PrivyLoginButton>
  )
}

export function DepositButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Typography layout='fillWidth' typography='body1' fontWeight='bold'>
      <Button
        buttonType='solid'
        color='primary'
        size='m'
        shape='square'
        layout='fillWidth'
        {...props}
      >
        {t('tutorial.depositToTrade')}
      </Button>
    </Typography>
  )
}

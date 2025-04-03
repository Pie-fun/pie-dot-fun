'use client'

import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import { ComponentProps } from 'react'
import imgPieInPhone from '@/app/components/Header/UseOnMobile/img_pie_in_phone.png'
import imgSafariAddToHome from '@/app/components/Header/UseOnMobile/img_safari_add_to_home.png'
import imgSafariShare from '@/app/components/Header/UseOnMobile/img_safari_share.png'
import { Image } from '@/components/Image/Image'
import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import * as styles from '@/app/components/Header/UseOnMobile/UseOnMobilePrimitive.css'
import { Badge } from '@/components/Badge/Badge'
import { usePwa } from '@/providers/PwaProvider/PwaProvider'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography typography='title4' fontWeight='bold' {...props}>
      {t('useOnMobile.title')}
    </Typography>
  )
}

export function AvailableDetail() {
  const t = useTranslations()

  return (
    <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
      <Typography
        typography='body1'
        fontWeight='regular'
        color='primary'
        textAlign='center'
      >
        {t.rich('useOnMobile.description', {
          br: () => <br />,
        })}
      </Typography>
      <Image
        src={imgPieInPhone.src}
        placeholder='blur'
        blurDataURL={imgPieInPhone.blurDataURL}
        alt=''
        width={116}
        height={160}
      />
      <Typography typography='body2' fontWeight='regular' color='secondary'>
        {t('useOnMobile.caption')}
      </Typography>
    </Box>
  )
}

export function UnAvailableDetail() {
  const t = useTranslations()

  return (
    <div className={styles.unAvailableBody()}>
      <Typography
        typography='body1'
        fontWeight='regular'
        color='primary'
        textAlign='center'
      >
        {t.rich('useOnMobile.description', {
          br: () => <br />,
        })}
      </Typography>
      <Box layout='fillWidth' orientation='horizontal' gap='m'>
        <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
          <Box orientation='horizontal' gap='s'>
            <Typography
              typography='body1'
              fontWeight='bold'
              color='brandPrimary'
            >
              {t('common.step')}
            </Typography>
            <Badge
              size='s'
              shape='round'
              color='brand'
              badgeType='solid'
              align='center'
            >
              <Typography typography='caption1' fontWeight='bold'>
                1
              </Typography>
            </Badge>
          </Box>
          <Image
            layout='fill'
            src={imgSafariShare.src}
            placeholder='blur'
            blurDataURL={imgSafariShare.blurDataURL}
            alt=''
            width={120}
            height={66}
          />
          <Typography typography='caption1' fontWeight='bold' color='primary'>
            {t('useOnMobile.tapOnShare')}
          </Typography>
        </Box>
        <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
          <Box orientation='horizontal' gap='s'>
            <Typography
              typography='body1'
              fontWeight='bold'
              color='brandPrimary'
            >
              {t('common.step')}
            </Typography>
            <Badge
              size='s'
              shape='round'
              color='brand'
              badgeType='solid'
              align='center'
            >
              <Typography typography='caption1' fontWeight='bold'>
                2
              </Typography>
            </Badge>
          </Box>
          <Image
            layout='fill'
            src={imgSafariAddToHome.src}
            placeholder='blur'
            blurDataURL={imgSafariAddToHome.blurDataURL}
            alt=''
            width={120}
            height={66}
          />
          <Typography typography='caption1' fontWeight='bold' color='primary'>
            {t('useOnMobile.addToHomeScreen')}
          </Typography>
        </Box>
      </Box>
      <Typography typography='body2' fontWeight='regular' color='secondary'>
        {t('useOnMobile.caption')}
      </Typography>
    </div>
  )
}

export function AddAppButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()
  const { install } = usePwa()

  return (
    <Typography layout='fillWidth' typography='body1' fontWeight='bold'>
      <Button
        buttonType='solid'
        color='primary'
        size='m'
        shape='square'
        layout='fillWidth'
        onClick={install}
        {...props}
      >
        {t('useOnMobile.addAppBtn')}
      </Button>
    </Typography>
  )
}

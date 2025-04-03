import { HomePieAnimation } from '@/app/components/HomePieAnimation/HomePieAnimation'
import { useTranslations } from 'next-intl'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import * as TitlePrimitive from '@/components/Title/Title'
import { Separator } from '@/components/Separator/Separator'
import { Link } from '@/components/Link/Link'
import { Button } from '@/components/Button/Button'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

export function Title() {
  const t = useTranslations()

  return (
    <Box layout='fillWidth' gap='l' orientation='vertical'>
      <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
        <Box layout='fillWidth' gap='l' align='center'>
          <HomePieAnimation />
        </Box>
        <TitlePrimitive.Root layout='fillWidth' align='center'>
          <Typography as='h1'>
            <TitlePrimitive.Heading size='l' color='default'>
              {t('homeHeroSection.title')}
            </TitlePrimitive.Heading>
          </Typography>
          <Typography color='secondary'>
            <TitlePrimitive.Description size='m'>
              {t.rich('homeHeroSection.description', {
                br: () => <br />,
              })}
            </TitlePrimitive.Description>
          </Typography>
        </TitlePrimitive.Root>
      </Box>
      <TitlePrimitive.Root layout='fillWidth' align='center'>
        <TitlePrimitive.Heading size='m' color='brand'>
          {t('homeMiddleSection.title')}
        </TitlePrimitive.Heading>
      </TitlePrimitive.Root>
    </Box>
  )
}

export function Footer() {
  const t = useTranslations()

  return (
    <Box layout='fillWidth' orientation='vertical' gap='l' align='center'>
      <Typography typography='title3' fontWeight='regular' color='brandPrimary'>
        {t('homeComingsoon.title')}
      </Typography>
      <Separator orientation='horizontal' />
      <Box orientation='horizontal' gap='s' align='center'>
        <Typography typography='body1' fontWeight='regular' color='secondary'>
          {t('common.needMoreInfo')}
        </Typography>
        <Link href={EXTERNAL_LINKS.PIE_DOT_FUN_FAQ} isExternal>
          <Button buttonType='solid' color='primary' size='m' shape='square'>
            {t('common.viewFaq')}
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

import { Layout } from '@/components/Layout/Layout'
import * as styles from '@/app/[locale]/not-found.css'
import * as Title from '@/components/Title/Title'
import { useTranslations } from 'next-intl'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import imgPiePuppyWithQuestionMark from '@/app/[locale]/img_pie_puppy_with_question_mark.png'
import { Image } from '@/components/Image/Image'
import { Button } from '@/components/Button/Button'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'

export default function NotFound() {
  const t = useTranslations()

  return (
    <Layout gap='l' topPadding='l' horizontalPadding='m'>
      <div className={styles.root()}>
        <Image
          src={imgPiePuppyWithQuestionMark.src}
          placeholder='blur'
          blurDataURL={imgPiePuppyWithQuestionMark.blurDataURL}
          alt=''
          width={112}
          height={134}
          shape='squareXs'
        />
        <Title.Root align='center'>
          <Title.Heading size='m' color='brand'>
            {t('errorPage.pageNotFound.title')}
          </Title.Heading>
          <Typography typography='body1' fontWeight='regular' color='secondary'>
            {t('errorPage.pageNotFound.description')}
          </Typography>
        </Title.Root>
      </div>
      <Box layout='fillWidth' align='center'>
        <Link href={ROUTES['/']}>
          <Typography typography='body1' fontWeight='bold'>
            <Button buttonType='solid' color='primary' size='m' shape='square'>
              {t('errorPage.pageNotFound.btn')}
              <Icon size='m'>
                <IcChevRightOutline />
              </Icon>
            </Button>
          </Typography>
        </Link>
      </Box>
    </Layout>
  )
}

import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import { ComponentProps } from 'react'
import { Button } from '@/components/Button/Button'
import { Link } from '@/components/Link/Link'
import { ROUTES } from '@/constants/routes'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {t('tradingError.partialTradeDetected.title')}
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
      {t.rich('tradingError.partialTradeDetected.description', {
        br: () => <br />,
        fontweightBold: (children) => (
          <Typography fontWeight='bold'>{children}</Typography>
        ),
      })}
    </Typography>
  )
}

export function SwapBackToSolButton({
  ...props
}: ComponentProps<typeof Button>) {
  const t = useTranslations()
  // TODO @ted

  return (
    <Link href={ROUTES['/']}>
      <Typography layout='fillWidth' typography='body1' fontWeight='bold'>
        <Button
          buttonType='solid'
          color='primary'
          size='m'
          shape='square'
          layout='fillWidth'
          {...props}
        >
          {t('tradingError.partialTradeDetected.btn')}
        </Button>
      </Typography>
    </Link>
  )
}

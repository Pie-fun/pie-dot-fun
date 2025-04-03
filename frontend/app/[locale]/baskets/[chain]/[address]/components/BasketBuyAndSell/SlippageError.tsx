import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { ComponentProps, HTMLAttributes } from 'react'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/SlippageError.css'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {t('tradingError.slippage.title')}
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
      {t.rich('tradingError.slippage.description', {
        br: () => <br />,
      })}
    </Typography>
  )
}

export function Content({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.content()} {...props} />
}

export function Buttons({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.buttons()} {...props} />
}

export function IncreaseSlippageButton({
  ...props
}: ComponentProps<typeof Button>) {
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
        {t('tradingError.slippage.increaseSlippage')}
      </Typography>
    </Button>
  )
}

export function CloseButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Button
      layout='fillWidth'
      buttonType='outline'
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

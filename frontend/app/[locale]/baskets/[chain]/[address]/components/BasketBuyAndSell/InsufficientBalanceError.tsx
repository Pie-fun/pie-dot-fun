import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/Icon/Icon'
import { ComponentProps, HTMLAttributes } from 'react'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/InsufficientBalanceError.css'
import { Deposit } from '@/app/components/Deposit/Deposit'
import {
  IcSolanaFixedColorFill,
  IcTetherFixedColorFill,
  IcUsdcFixedColorFill,
} from '@/components/Icon/Icons'

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {t('common.insufficientBalance')}
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
      {t.rich('tradingError.insufficientBalance.description', {
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

export function TopupButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Deposit
      trigger={
        <Button
          layout='fillWidth'
          buttonType='solid'
          shape='square'
          color='accentGradient'
          size='m'
          {...props}
        >
          <Typography typography='body1' fontWeight='bold'>
            {t('tradingError.insufficientBalance.topUp')}
          </Typography>
          <Icon size='m' shape='square'>
            <IcSolanaFixedColorFill />
          </Icon>
          <Icon size='m' shape='square'>
            <IcTetherFixedColorFill />
          </Icon>
          <Icon size='m' shape='square'>
            <IcUsdcFixedColorFill />
          </Icon>
        </Button>
      }
    />
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

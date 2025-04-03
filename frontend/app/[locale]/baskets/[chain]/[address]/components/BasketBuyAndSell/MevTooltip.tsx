import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcInfoCircleOutline, IcShieldFilled } from '@/components/Icon/Icons'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { Typography } from '@/components/Typography/Typography'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { useTranslations } from 'next-intl'

export function MevTooltip() {
  const t = useTranslations()
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button buttonType='text' color='secondary' size='s' shape='square'>
            <Box gap='xxxs' align='center'>
              <Icon size='xs'>
                <IcShieldFilled />
              </Icon>
              <Typography
                typography='caption2'
                fontWeight='regular'
                color='secondary'
              >
                {t('tradingInfoCaption.mevProtected.title')}
              </Typography>
              <Icon size='xs'>
                <IcInfoCircleOutline />
              </Icon>
            </Box>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          align={isDesktop ? 'center' : 'start'}
          side={isDesktop ? 'bottom' : 'top'}
          color='default'
        >
          <Typography
            typography='caption2'
            fontWeight='regular'
            color='inverse'
          >
            {t('tradingInfoCaption.mevProtected.tooltip')}
          </Typography>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

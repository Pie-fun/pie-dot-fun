import { Box } from '@/components/Box/Box'
import * as Card from '@/components/Card/Card'
import { Typography } from '@/components/Typography/Typography'
import { useTranslations } from 'next-intl'

export function RebalancingCard() {
  const t = useTranslations()

  return (
    <Card.Root background='primary' size='s'>
      <Card.Header>
        <Box layout='fillWidth' orientation='vertical' gap='s'>
          <Typography
            typography='caption1'
            fontWeight='bold'
            color='brandPrimary'
          >
            {t('basketTrade.rebalancingInProgress.title')}
          </Typography>
          <Typography
            typography='caption2'
            fontWeight='regular'
            color='brandPrimary'
          >
            {t('basketTrade.rebalancingInProgress.description')}
          </Typography>
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

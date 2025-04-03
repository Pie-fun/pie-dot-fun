import { Layout } from '@/components/Layout/Layout'
import { BasketProfileCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketProfileCard/BasketProfileCard'
import { BasketDescriptionCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketDescriptionCard/BasketDescriptionCard'
import { BasketComponentsCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketComponentsCard/BasketComponentsCard'
import { BasketCreatorCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketCreatorCard/BasketCreatorCard'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/page.css'
import { BasketPriceInfoCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketPriceInfoCard/BasketPriceInfoCard'
import { BasketInfoCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketInfoCard/BasketInfoCard'
import { DiscontinuationNoticeAccordion } from '@/app/[locale]/baskets/[chain]/[address]/components/DiscontinuationNoticeAccordion/DiscontinuationNoticeAccordion'
import { Responsive } from '@/components/Responsive/Responsive'
import { MyHoldingsSummaryCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/MyHoldingsSummaryCard/MyHoldingsSummaryCard'
import { BasketTradingChartCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketTradingChartCard/BasketTradingChartCard'
import { Box } from '@/components/Box/Box'
import { BasketRebalancingHistoryCardSkeleton } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketRebalancingHistoryCard/BasketRebalancingHistoryCard'

export default function Loading() {
  return (
    <Layout gap='m' topPadding='l' horizontalPadding='m'>
      <div className={styles.sections()}>
        <Box layout='fillWidth' orientation='vertical' gap='m'>
          <BasketProfileCardSkeleton />
          <Responsive breakpoint='mobile'>
            <BasketPriceInfoCardSkeleton />
          </Responsive>
          <MyHoldingsSummaryCardSkeleton />
          <BasketTradingChartCardSkeleton />
          <Responsive breakpoint='mobile'>
            <BasketInfoCardSkeleton />
          </Responsive>
          <BasketDescriptionCardSkeleton />
          <BasketComponentsCardSkeleton />
          <BasketRebalancingHistoryCardSkeleton />
          <BasketCreatorCardSkeleton />
          <DiscontinuationNoticeAccordion status='active' />
        </Box>
        <Responsive breakpoint='desktop'>
          <Box layout='fillWidth' orientation='vertical' gap='m'>
            <BasketPriceInfoCardSkeleton />
            <BasketInfoCardSkeleton />
          </Box>
        </Responsive>
      </div>
    </Layout>
  )
}

import { Layout } from '@/components/Layout/Layout'
import { BasketTradingChartCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketTradingChartCard/BasketTradingChartCard'
import { BasketProfileCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketProfileCard/BasketProfileCard'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { BasketDescriptionCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketDescriptionCard/BasketDescriptionCard'
import { BasketComponentsCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketComponentsCard/BasketComponentsCard'
import { BasketCreatorCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketCreatorCard/BasketCreatorCard'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/page.css'
import { BasketPriceInfoCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketPriceInfoCard/BasketPriceInfoCard'
import { BasketInfoCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketInfoCard/BasketInfoCard'
import { BasketBuyAndSellCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellCard/BasketBuyAndSellCard'
import { BasketBuyAndSellDrawer } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSellDrawer/BasketBuyAndSellDrawer'
import { CURRENCY_FROM_CHAIN_TYPE } from '@/constants/blockChains'
import { DiscontinuationNoticeAccordion } from '@/app/[locale]/baskets/[chain]/[address]/components/DiscontinuationNoticeAccordion/DiscontinuationNoticeAccordion'
import { CheckPartialTrade } from '@/app/[locale]/baskets/[chain]/[address]/components/CheckPartialTrade/CheckPartialTrade'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'
import {
  getBasketTokenQuery,
  listBasketTokenRebalancingHistoriesQuery,
} from '@/app/api/backend/v1/basketToken/queries'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { MyHoldingsSummaryCardChecker } from '@/app/[locale]/baskets/[chain]/[address]/components/MyHoldingsSummaryCard/MyHoldingsSummaryCardChecker'
import { Responsive } from '@/components/Responsive/Responsive'
import { Form } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Form'
import { Box } from '@/components/Box/Box'
import { BasketRebalancingHistoryCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketRebalancingHistoryCard/BasketRebalancingHistoryCard'
import { basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery } from '@/app/api/frontend/v1/graphql/queries/combined/queries'

type PageProps = {
  params: {
    chain: ChainType
    address: string
  }
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { address, chain } = await params
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  queryClient.prefetchQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    }),
  })

  queryClient.prefetchQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: CURRENCY_FROM_CHAIN_TYPE[chain],
    }),
  })

  queryClient.prefetchInfiniteQuery({
    ...basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery({
      address,
      chain,
    }),
  })

  queryClient.prefetchInfiniteQuery({
    ...listBasketTokenRebalancingHistoriesQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  return (
    <Layout gap='m' topPadding='l' horizontalPadding='m'>
      <Form chain={chain} tokenAddress={address}>
        <div className={styles.sections()}>
          <Box layout='fillWidth' orientation='vertical' gap='m'>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <BasketProfileCard chain={chain} address={address} />
            </HydrationBoundary>
            <Responsive breakpoint='mobile'>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <BasketPriceInfoCard chain={chain} address={address} />
              </HydrationBoundary>
            </Responsive>
            <MyHoldingsSummaryCardChecker
              chain={chain}
              tokenAddress={address}
            />
            <BasketTradingChartCard chain={chain} address={address} />
            <Responsive breakpoint='mobile'>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <BasketInfoCard chain={chain} address={address} />
              </HydrationBoundary>
            </Responsive>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <BasketDescriptionCard chain={chain} address={address} />
            </HydrationBoundary>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <BasketComponentsCard chain={chain} address={address} />
            </HydrationBoundary>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <BasketRebalancingHistoryCard chain={chain} address={address} />
            </HydrationBoundary>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <BasketCreatorCard chain={chain} address={address} />
            </HydrationBoundary>
            <DiscontinuationNoticeAccordion status='active' />
          </Box>
          <Responsive breakpoint='desktop'>
            <Box layout='fillWidth' orientation='vertical' gap='m'>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <BasketPriceInfoCard chain={chain} address={address} />
              </HydrationBoundary>
              <BasketBuyAndSellCard chain={chain} address={address} />
              <HydrationBoundary state={dehydrate(queryClient)}>
                <BasketInfoCard chain={chain} address={address} />
              </HydrationBoundary>
            </Box>
          </Responsive>
          <Responsive breakpoint='mobile'>
            <BasketBuyAndSellDrawer chain={chain} address={address} />
          </Responsive>
        </div>
      </Form>
      <CheckPartialTrade chain={chain} address={address} />
    </Layout>
  )
}

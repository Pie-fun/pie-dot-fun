import { Layout } from '@/components/Layout/Layout'
import * as BasketCard from '@/app/[locale]/components/BasketCard/BasketCard'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'
import * as Server from '@/app/[locale]/components/Server/Server'
import * as Client from '@/app/[locale]/components/Client/Client'
import { basketTokensWithBasketTokenMarketQuery } from '@/app/api/frontend/v1/graphql/queries/combined/queries'

export default function Page() {
  const queryClient = getQueryClient()

  queryClient.prefetchInfiniteQuery({
    ...basketTokensWithBasketTokenMarketQuery(),
  })

  return (
    <>
      <Client.BackgroundPieImages />
      <Layout gap='l' topPadding='l' horizontalPadding='m'>
        <Server.Title />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BasketCard.Content>
            <BasketCard.List />
          </BasketCard.Content>
        </HydrationBoundary>
        <Server.Footer />
      </Layout>
    </>
  )
}

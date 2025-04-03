'use client'

import { Layout } from '@/components/Layout/Layout'
import * as Server from '@/app/[locale]/components/Server/Server'
import * as Client from '@/app/[locale]/components/Client/Client'
import * as BasketCard from '@/app/[locale]/components/BasketCard/BasketCard'

export default function Loading() {
  return (
    <>
      <Client.BackgroundPieImages />
      <Layout gap='l' topPadding='l' horizontalPadding='m'>
        <Server.Title />
        <BasketCard.Content>
          <BasketCard.Skeleton />
          <BasketCard.Skeleton />
          <BasketCard.Skeleton />
          <BasketCard.Skeleton />
          <BasketCard.Skeleton />
          <BasketCard.Skeleton />
        </BasketCard.Content>
        <Server.Footer />
      </Layout>
    </>
  )
}

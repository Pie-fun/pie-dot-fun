'use client'

import * as Card from '@/components/Card/Card'
import * as BasketProfile from '@/app/components/BasketProfile/BasketProfile'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketProfileCard/BasketProfileCard.css'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'

type BasketProfileCardProps = {
  chain: ChainType
  address: string
}

export function BasketProfileCard({
  chain,
  address,
}: Readonly<BasketProfileCardProps>) {
  const { data } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <BasketProfile.Root size='m'>
          <BasketProfile.TokenAvatar src={data.iconImageUri} chain={chain} />
          <BasketProfile.Content>
            <BasketProfile.Ticker>
              <div>
                {data.symbol}
                <div className={styles.copyToClipboard()}>
                  <CopyToClipboard
                    buttonType='content'
                    color='secondary'
                    iconSize='inherit'
                    value={data.address}
                  />
                </div>
              </div>
            </BasketProfile.Ticker>
            <BasketProfile.Name>{data.displayName}</BasketProfile.Name>
            <BasketProfile.OneLiner>
              {data.oneLineDescription}
            </BasketProfile.OneLiner>
          </BasketProfile.Content>
        </BasketProfile.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketProfileCardSkeleton() {
  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <BasketProfile.Root size='m'>
          <Skeleton
            width='4rem'
            height='4rem'
            style={{
              flexShrink: 0,
            }}
          />
          <BasketProfile.Content>
            <Skeleton height='0.875rem' width='7.5rem' />
            <Skeleton layout='fillWidth' height='1.375rem' />
            <Skeleton layout='fillWidth' height='1.375rem' />
          </BasketProfile.Content>
        </BasketProfile.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

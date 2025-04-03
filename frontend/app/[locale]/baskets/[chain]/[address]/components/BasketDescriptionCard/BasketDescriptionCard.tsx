'use client'

import * as Card from '@/components/Card/Card'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Typography } from '@/components/Typography/Typography'
import { Collapsible } from '@/components/Collapsible/Collapsible'
import { useTranslations } from 'next-intl'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketDescriptionCard/BasketDescriptionCard.css'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'

type BasketDescriptionCardProps = {
  chain: ChainType
  address: string
}

export function BasketDescriptionCard({
  chain,
  address,
}: Readonly<BasketDescriptionCardProps>) {
  const t = useTranslations()

  const { data } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <Card.Title>{t('basketDescription.title')}</Card.Title>
        <Typography typography='body1' fontWeight='regular' color='secondary'>
          <Collapsible lineClamp={3} color='primary'>
            {data.description}
          </Collapsible>
        </Typography>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketDescriptionCardSkeleton() {
  const t = useTranslations()

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <Card.Title>{t('basketDescription.title')}</Card.Title>
        <div className={styles.skeletons()}>
          <Skeleton height='1.25rem' />
          <Skeleton height='1.25rem' width='20rem' />
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

'use client'

import * as Card from '@/components/Card/Card'
import * as UserProfile from '@/app/components/UserProfile/UserProfile'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useTranslations } from 'next-intl'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketCreatorCard/BasketCreatorCard.css'
import { Typography } from '@/components/Typography/Typography'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getUserQuery } from '@/app/api/backend/v1/user/queries'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import ImgSkygg from '@/app/[locale]/baskets/[chain]/[address]/components/BasketCreatorCard/img_skygg.png'

type BasketCreatorCardProps = {
  chain: ChainType
  address: string
}

export function BasketCreatorCard({
  chain,
  address,
}: Readonly<BasketCreatorCardProps>) {
  const t = useTranslations()

  const { data: basketToken } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const { data: user } = useSuspenseQuery({
    ...getUserQuery({
      user: basketToken.creator,
    }),
  })

  // HACK @ted
  // https://aobuildingspacebar.slack.com/archives/C03LRUC3HH7/p1743051731502239
  const hardCodedProfileImageUrl = {
    EVgkQiyjpmdyeQ77kcgCq8qSxEnmAr4CNjj1x4dSLzQt: ImgSkygg.src,
  }

  // HACK @ted
  // https://aobuildingspacebar.slack.com/archives/C03LRUC3HH7/p1741771230137149
  // https://aobuildingspacebar.slack.com/archives/C03LRUC3HH7/p1743051731502239
  const hardCodedDisplayName = {
    CVwkAA7ugcLmFupSXSH18iTZW89vtf2GornGQrx1Z2xF: 'TolyFi Ventures',
    A2xPzd9bf7sNvxMspwvZgJgAMfKRLKk4F4zhwcpRZ2xN: 'Binance Alpha Partners',
    EBMNBsUv6ANf7QbQJXtaC3d9dm746CQFN2Ku62gzokaa: 'Singlecoin Capital',
    TWviqfQPBzeEAXhC5JZMujY2FHsEa4UR6QS9wFwGPHv: 'Agent King',
    '6fXbEPbLGbHKpSSzJ5UjCcxrsaEHtd9Vbv89FpAPnTdV': 'Messari Bot',
    '5VeUTxQLa6ovVPik8od8DbPJd9jGkgDF51VP8wjkU2M5': 'OGverse Capital',
    EVgkQiyjpmdyeQ77kcgCq8qSxEnmAr4CNjj1x4dSLzQt: 'SKYGG',
  }

  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <div className={styles.root()}>
          <Typography typography='title4' fontWeight='bold' color='primary'>
            {t('basektCreator.title')}
          </Typography>
          <UserProfile.Root>
            <UserProfile.UserAvatar
              src={
                hardCodedProfileImageUrl[
                  address as keyof typeof hardCodedProfileImageUrl
                ] ?? user.profileImageUrl
              }
            />
            <UserProfile.Content>
              <UserProfile.Name>
                {hardCodedDisplayName[
                  address as keyof typeof hardCodedDisplayName
                ] ?? user.displayName}
              </UserProfile.Name>
            </UserProfile.Content>
          </UserProfile.Root>
        </div>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

export function BasketCreatorCardSkeleton() {
  return (
    <Card.Root layout='fillWidth' border='default' size='m'>
      <Card.Header>
        <UserProfile.Root>
          <Skeleton
            height='2rem'
            width='2rem'
            shape='circle'
            style={{
              flexShrink: 0,
            }}
          />
          <UserProfile.Content>
            <UserProfile.Name as='div'>
              <Skeleton layout='fillWidth' width='7.5rem' height='1rem' />
            </UserProfile.Name>
          </UserProfile.Content>
        </UserProfile.Root>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

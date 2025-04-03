import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import * as BasketProfilePrimitive from '@/app/components/BasketProfile/BasketProfile'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ComponentProps } from 'react'

type BasketTokenProfile = {
  basketToken: string
  chain: ComponentProps<typeof BasketProfilePrimitive.TokenAvatar>['chain']
}

export function BasketTokenProfile({
  basketToken,
  chain,
}: Readonly<BasketTokenProfile>) {
  const { data } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken,
    }),
  })

  return (
    <BasketProfilePrimitive.Root size='s'>
      <BasketProfilePrimitive.TokenAvatar
        src={data.iconImageUri}
        chain={chain}
      />
      <BasketProfilePrimitive.Content>
        <BasketProfilePrimitive.Name>{data.symbol}</BasketProfilePrimitive.Name>
        <BasketProfilePrimitive.OneLiner>
          {data.displayName}
        </BasketProfilePrimitive.OneLiner>
      </BasketProfilePrimitive.Content>
    </BasketProfilePrimitive.Root>
  )
}

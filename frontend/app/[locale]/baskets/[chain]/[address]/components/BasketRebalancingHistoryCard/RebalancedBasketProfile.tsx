import { getFungibleTokenQuery } from '@/app/api/backend/v1/fungibleToken/queries'
import { getFungibleTokenResource } from '@/app/api/backend/v1/fungibleToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { useQuery } from '@tanstack/react-query'
import * as BasketProfile from '@/app/components/BasketProfile/BasketProfile'

type RebalancedBasketProfileProps = {
  chain: ChainType
  address: string
}

export function RebalancedBasketProfile({
  address,
  chain,
}: Readonly<RebalancedBasketProfileProps>) {
  const { data } = useQuery({
    ...getFungibleTokenQuery({
      fungibleToken: getFungibleTokenResource({ address, chain }),
    }),
  })

  return (
    <BasketProfile.Root size='s'>
      <BasketProfile.TokenAvatar src={data?.iconImageUrl} />
      <BasketProfile.Content>
        <BasketProfile.Name>{data?.symbol}</BasketProfile.Name>
        <BasketProfile.OneLiner>{data?.displayName}</BasketProfile.OneLiner>
      </BasketProfile.Content>
    </BasketProfile.Root>
  )
}

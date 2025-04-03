import { queryKeys } from '@/libs/react-query/queryKeys'
import { FirstParameter } from '@/types/utility'
import { BaseInfiniteQueryOptions } from '@/libs/react-query/types'
import { listHoldingWallets } from '@/app/api/backend/v1/holdingWallet/requests'

export function listHoldingWalletsQuery({
  ...props
}: FirstParameter<typeof listHoldingWallets> = {}) {
  return {
    queryKey: queryKeys.holdingWallet.listHoldingWalletsQuery(props).queryKey,
    queryFn: ({ pageParam }) =>
      listHoldingWallets({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<typeof listHoldingWallets>
}

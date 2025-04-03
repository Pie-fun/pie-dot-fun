import { queryKeys } from '@/libs/react-query/queryKeys'
import { BaseQueryOptions } from '@/libs/react-query/types'
import { getAccessToken } from '@privy-io/react-auth'

export function getAccessTokenQuery() {
  return {
    queryKey: queryKeys.privy.getAccessTokenQuery().queryKey,
    queryFn: async () => {
      const accessToken = await getAccessToken()

      return accessToken
    },
  } satisfies BaseQueryOptions<typeof getAccessToken>
}

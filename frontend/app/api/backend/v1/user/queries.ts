import { queryKeys } from '@/libs/react-query/queryKeys'
import { getUser, listUsers } from '@/app/api/backend/v1/user/requests'
import { FirstParameter } from '@/types/utility'
import {
  BaseInfiniteQueryOptions,
  BaseQueryOptions,
} from '@/libs/react-query/types'

export function getUserQuery({ ...props }: FirstParameter<typeof getUser>) {
  return {
    queryKey: queryKeys.user.getUserQuery(props).queryKey,
    queryFn: () =>
      getUser({
        ...props,
      }),
  } satisfies BaseQueryOptions<typeof getUser>
}

export function listUsersQuery({
  ...props
}: FirstParameter<typeof listUsers> = {}) {
  return {
    queryKey: queryKeys.user.listUsersQuery(props).queryKey,
    queryFn: ({ pageParam }) =>
      listUsers({
        pageToken: pageParam,
        ...props,
      }),
    initialPageParam: '',
    getNextPageParam: ({ nextPageToken }) => nextPageToken || undefined,
  } satisfies BaseInfiniteQueryOptions<typeof listUsers>
}

import { updateUser } from '@/app/api/backend/v1/user/requests'
import { CustomFetchError } from '@/libs/fetch/types'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { FirstParameter, PromiseReturnType } from '@/types/utility'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useUpdateUser({
  onSuccess,
  ...options
}: UseMutationOptions<
  PromiseReturnType<typeof updateUser>,
  CustomFetchError,
  FirstParameter<typeof updateUser>
>) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data, variables, contexts) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user._def,
      })
      onSuccess?.(data, variables, contexts)
    },
    ...options,
  })
}

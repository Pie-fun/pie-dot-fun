import { POLLING_INTERVAL } from '@/constants/common'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'
import { QueryKey } from '@tanstack/react-query'

export function usePolling() {
  const queryClient = getQueryClient()

  const pollUntilChange = async <T = unknown>({
    queryKey,
  }: {
    queryKey: QueryKey
  }) => {
    return new Promise<{ previousData: T; newData: T }>((resolve) => {
      const previousData = queryClient.getQueryData(queryKey) as T

      const pollInterval = setInterval(async () => {
        await queryClient.invalidateQueries({ queryKey })

        const newData = queryClient.getQueryData(queryKey) as T

        if (JSON.stringify(previousData) !== JSON.stringify(newData)) {
          clearInterval(pollInterval)
          resolve({ previousData, newData })
        }
      }, POLLING_INTERVAL.PRIMARY)
    })
  }

  return { pollUntilChange }
}

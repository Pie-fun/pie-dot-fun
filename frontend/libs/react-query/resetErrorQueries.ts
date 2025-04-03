import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'

export const resetErrorQueries = () => {
  const queryClient = getQueryClient()
  const queries = queryClient.getQueryCache().getAll()

  queries.forEach((query) => {
    if (query.state.status === 'error') {
      queryClient.resetQueries({ queryKey: query.queryKey })
    }
  })
}

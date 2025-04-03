import { customFetch } from '@/libs/fetch/fetch'

export async function getPing(): Promise<void> {
  return await customFetch(
    {
      app: 'backend',
      path: `/`,
    },
    {
      method: 'GET',
    },
  )
}

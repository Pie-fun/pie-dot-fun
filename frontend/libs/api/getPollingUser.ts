import { getUser } from '@/app/api/backend/v1/user/requests'
import { POLLING_INTERVAL } from '@/constants/common'
import { FirstParameter, PromiseReturnType } from '@/types/utility'

export async function getPollingUser({
  user: userResource,
}: FirstParameter<typeof getUser>) {
  return await new Promise<PromiseReturnType<typeof getUser>>(
    (resolve, reject) => {
      let attempts = 0
      const maxAttempts = 20

      const interval = setInterval(async () => {
        try {
          const user = await getUser({ user: userResource })

          if (user) {
            clearInterval(interval)
            resolve(user)
          }
        } catch (error) {
          attempts += 1

          if (attempts >= maxAttempts) {
            clearInterval(interval)
            reject(error)
          }
        }
      }, POLLING_INTERVAL.PRIMARY)
    },
  )
}

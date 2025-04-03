import { getHolding } from '@/app/api/backend/v1/holding/requests'
import { Currency } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { CustomFetchError } from '@/libs/fetch/types'
import { FirstParameter } from '@/types/utility'
import { Jito } from '@ao-labs/pie-dot-fun-solana/dist/sdk/jito'

type GetPollingJitoBundleStatus = {
  bundleId: string
  holding: FirstParameter<typeof getHolding>['holding']
}

type GetInflightBundleStatusesReturnType = Awaited<
  ReturnType<Jito['getInflightBundleStatuses']>
>

type StatusType =
  NonNullable<GetInflightBundleStatusesReturnType>['value'][number]['status']

export async function getPollingJitoBundleStatus({
  bundleId,
  holding,
}: GetPollingJitoBundleStatus) {
  const POLLING_INTERVAL = 1000

  return await new Promise<StatusType>(async (resolve) => {
    let initialQuantity = ''
    let currentQuantity = ''

    try {
      const { quantity } = await getHolding({
        holding,
        currency: Currency.CURRENCY_USDC,
      })

      initialQuantity = quantity?.formattedAmount ?? ''
    } catch (error) {
      const customFetchError = error as CustomFetchError

      if (customFetchError.status !== 404) {
        throw error
      }

      initialQuantity = ''
    }

    const interval = setInterval(async () => {
      const jito = new Jito(process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT)
      const statuses = await jito.getInflightBundleStatuses([bundleId])

      if (statuses?.value[0]?.status === 'Invalid') {
        try {
          const { quantity } = await getHolding({
            holding,
            currency: Currency.CURRENCY_USDC,
          })

          currentQuantity = quantity?.formattedAmount ?? ''
        } catch (error) {
          const customFetchError = error as CustomFetchError

          if (customFetchError.status !== 404) {
            throw error
          }

          currentQuantity = ''
        }

        if (currentQuantity !== initialQuantity) {
          clearInterval(interval)
          resolve('Landed')
        }
      }

      if (
        statuses?.value[0]?.status === 'Landed' ||
        statuses?.value[0]?.status === 'Failed'
      ) {
        clearInterval(interval)
        resolve(statuses?.value[0]?.status)
      }
    }, POLLING_INTERVAL)
  })
}

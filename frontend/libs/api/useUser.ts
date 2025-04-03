import { getUserQuery } from '@/app/api/backend/v1/user/queries'
import { getUserResource } from '@/app/api/backend/v1/user/resource'
import { VMType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { POLLING_INTERVAL } from '@/constants/common'
import { getIdFromPrivyId } from '@/libs/privy/getIdFromPrivyId'
import { usePrivy } from '@privy-io/react-auth'
import { useQuery } from '@tanstack/react-query'

type UseUserProps = {
  vmType?: keyof typeof VMType
}

export function useUser({ vmType }: UseUserProps = {}) {
  const { authenticated, user } = usePrivy()

  const { data } = useQuery({
    ...getUserQuery({
      user: getUserResource({ id: getIdFromPrivyId({ id: user?.id! }) }),
    }),
    enabled: !!authenticated && !!user?.id,
    throwOnError: false,
    retry: true,
    refetchInterval: ({ state }) =>
      state.data?.wallets.find(({ vmType }) => vmType === VMType.SVM)
        ? false
        : POLLING_INTERVAL.PRIMARY,
  })

  const wallet = data?.wallets.find(
    ({ vmType: walletVmType }) => walletVmType === vmType,
  )

  const isAuthenticated = authenticated

  return { wallet, isAuthenticated, data }
}

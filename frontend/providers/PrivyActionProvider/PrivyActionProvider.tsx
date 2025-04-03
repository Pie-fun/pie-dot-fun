'use client'

import {
  useLogin,
  useLogout,
  useSolanaWallets,
  WalletWithMetadata,
} from '@privy-io/react-auth'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { getUser } from '@/app/api/backend/v1/user/requests'
import { getIdFromPrivyId } from '@/libs/privy/getIdFromPrivyId'
import { ROUTES } from '@/constants/routes'
import { POLLING_INTERVAL, REDIRECT_URI_KEY } from '@/constants/common'
import { getUserResource } from '@/app/api/backend/v1/user/resource'
import { useQuery } from '@tanstack/react-query'
import { getUserQuery } from '@/app/api/backend/v1/user/queries'
import { VMType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { Layout } from '@/components/Layout/Layout'
import { Icon } from '@/components/Icon/Icon'
import { IcLoadingCircleDashFill } from '@/components/Icon/Icons'
import { Box } from '@/components/Box/Box'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'
import { getAccessTokenQuery } from '@/app/api/external/privy/v1/auth/queries'

type PrivyActionContextProps = {
  login: () => void
  logout: () => void
  isNewUser: boolean
  setIsNewUser: Dispatch<SetStateAction<boolean>>
}

export const PrivyActionContext = createContext<PrivyActionContextProps>(
  {} as PrivyActionContextProps,
)

export function usePrivyAction() {
  return useContext(PrivyActionContext)
}

export function PrivyActionProvider({ children }: PropsWithChildren) {
  const router = useRouter()
  const { createWallet } = useSolanaWallets()
  const [isNewUser, setIsNewUser] = useState(false)
  const [privyId, setPrivyId] = useState('')
  const queryClient = getQueryClient()

  const { data: user } = useQuery({
    ...getUserQuery({
      user: getUserResource({ id: getIdFromPrivyId({ id: privyId }) }),
    }),
    enabled: !!privyId,
    throwOnError: false,
    retry: true,
    refetchInterval: ({ state }) =>
      state.data?.wallets.find(({ vmType }) => vmType === VMType.SVM)
        ? false
        : POLLING_INTERVAL.PRIMARY,
  })

  // refresh access token every 10 minutes.
  useQuery({
    ...getAccessTokenQuery(),
    enabled: !!privyId,
    refetchInterval: 1000 * 60 * 10,
  })

  const { login } = useLogin({
    onComplete: async ({ user }) => {
      const isExistSolanaWallet = user.linkedAccounts.find(
        (account): account is WalletWithMetadata =>
          account.type === 'wallet' &&
          account.walletClientType === 'privy' &&
          account.chainType === 'solana',
      )

      setPrivyId(user.id)

      if (!isExistSolanaWallet) {
        createWallet()
      }

      const { displayName } = await getUser({
        user: getUserResource({ id: getIdFromPrivyId({ id: user.id }) }),
      })

      if (!displayName) {
        const url = new URL(ROUTES['/SIGN-IN/SETUP'], window.location.origin)

        url.searchParams.set(REDIRECT_URI_KEY, window.location.href)

        router.push(url.toString())
      }
    },
  })

  const { logout } = useLogout({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user._def,
      })
    },
  })

  const validVmTypes = Object.values(VMType).filter(
    (vmType) => vmType !== VMType.VM_UNSPECIFIED,
  )

  const isAllWalletExist = validVmTypes.every((vmType) =>
    user?.wallets.some((wallet) => wallet.vmType === vmType),
  )

  const value = useMemo(
    () => ({ login, isNewUser, setIsNewUser, logout }),
    [login, isNewUser, setIsNewUser, logout],
  )

  if (user && !isAllWalletExist) {
    return (
      <Layout layout='full' gap='l' topPadding='l' horizontalPadding='m'>
        <Box layout='fill' align='center'>
          <Icon size='m' color='primary' isSpin>
            <IcLoadingCircleDashFill />
          </Icon>
        </Box>
      </Layout>
    )
  }

  return (
    <PrivyActionContext.Provider value={value}>
      {children}
    </PrivyActionContext.Provider>
  )
}

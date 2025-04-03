'use client'

import { ConnectedSolanaWallet, ConnectedWallet } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'

type Wallets = ConnectedWallet[] | ConnectedSolanaWallet[] | undefined

type Wallet<T> = T extends ConnectedSolanaWallet[]
  ? ConnectedSolanaWallet | undefined
  : ConnectedWallet | undefined

type UsePrivyWalletProps<T extends Wallets> = {
  wallets: T
  type: 'embedded' | 'external'
}

export function usePrivyWallet<T extends Wallets>({
  wallets,
  type,
}: UsePrivyWalletProps<T>) {
  const [wallet, setWallet] = useState<Wallet<T>>(undefined)

  useEffect(() => {
    const wallet = wallets?.find(({ walletClientType }) =>
      type === 'embedded'
        ? walletClientType === 'privy'
        : walletClientType !== 'privy',
    ) as Wallet<T>

    setWallet(wallet)
  }, [type, wallets])

  return { wallet }
}

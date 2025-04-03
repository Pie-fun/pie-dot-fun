'use client'

import {
  createClient,
  convertViemChainToRelayChain,
  MAINNET_RELAY_API,
  TESTNET_RELAY_API,
} from '@reservoir0x/relay-sdk'
import { PropsWithChildren } from 'react'
import { RelayClientProvider } from '@/providers/RelayProvider/RelayClientProvider'
import { supportChains } from '@/constants/blockChains'

export function RelayProvider({ children }: PropsWithChildren) {
  const client = createClient({
    baseApiUrl:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? TESTNET_RELAY_API
        : MAINNET_RELAY_API,
    source: process.env.NEXT_PUBLIC_BASE_URL,
    chains: supportChains.map((supportChain) =>
      convertViemChainToRelayChain(supportChain),
    ),
  })

  return <RelayClientProvider client={client}>{children}</RelayClientProvider>
}

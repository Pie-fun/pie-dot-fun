'use client'

import { RelayClient } from '@reservoir0x/relay-sdk'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

const RelayClientContext = createContext<RelayClient | undefined>(undefined)

type RelayClientProviderProps = {
  client?: RelayClient
}

export function RelayClientProvider({
  client,
  children,
}: PropsWithChildren<RelayClientProviderProps>) {
  const value = useMemo(() => client, [client])

  return (
    <RelayClientContext.Provider value={value}>
      {children}
    </RelayClientContext.Provider>
  )
}

export const useRelayClient = (relayClient?: RelayClient) => {
  const client = useContext(RelayClientContext)

  if (relayClient) {
    return relayClient
  }

  if (!client) {
    throw new Error('No RelayClient set, use RelayClientProvider to set one')
  }

  return client
}

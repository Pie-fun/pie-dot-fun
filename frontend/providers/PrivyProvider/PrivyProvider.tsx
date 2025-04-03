'use client'

import { vars } from '@/libs/vanilla-extract/vars'
import { getCssVarToValue } from '@/utils/getCssVarToValue'
import { PrivyProvider as PrimitivePrivyProvider } from '@privy-io/react-auth'
import { PropsWithChildren } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { mainnet, sepolia } from 'viem/chains'
import { http } from 'wagmi'
import { createConfig, WagmiProvider } from '@privy-io/wagmi'
import imgLogoPieM from '@/public/images/img_logo_pie_m.png'
import { PrivyActionProvider } from '@/providers/PrivyActionProvider/PrivyActionProvider'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana'
import { supportChains } from '@/constants/blockChains'
import { HttpTransport } from 'viem'

export function PrivyProvider({ children }: PropsWithChildren) {
  const isLightTheme = useMediaQuery({ query: queries.theme.light })

  const config = createConfig({
    chains: [supportChains[0], ...supportChains.slice(1)],
    transports: supportChains.reduce<Record<number, HttpTransport>>(
      (acc, chain) => {
        if (chain.id === mainnet.id) {
          return {
            ...acc,
            [chain.id]: http(process.env.NEXT_PUBLIC_NODE_ETHEREUM_ENDPOINT),
          }
        }

        return {
          ...acc,
          [chain.id]: http(),
        }
      },
      {},
    ),
  })

  return (
    <PrimitivePrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      clientId={process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID}
      config={{
        appearance: {
          theme: isLightTheme ? 'light' : 'dark',
          accentColor: getCssVarToValue({
            cssVar: vars.colors.backgrounds.brand.primary,
          }) as `#${string}`,
          logo: imgLogoPieM.src,
          walletList: [
            // default
            'detected_wallets',
            'metamask',
            'coinbase_wallet',
            'rainbow',
            'wallet_connect',
            // added
            'phantom',
          ],
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
        },
        externalWallets: {
          solana: {
            connectors: toSolanaWalletConnectors(),
          },
        },
        defaultChain:
          process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true' ? sepolia : mainnet,
      }}
    >
      <WagmiProvider config={config}>
        <PrivyActionProvider>{children}</PrivyActionProvider>
      </WagmiProvider>
    </PrimitivePrivyProvider>
  )
}

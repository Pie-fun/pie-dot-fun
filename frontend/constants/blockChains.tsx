import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  IcBaseEthereumFill,
  IcBaseFixedColorFill,
  IcEthereumFill,
  IcEthereumFixedColorFill,
  IcPieChartQuarterFill,
  IcSolanaFill,
  IcSolanaFixedColorFill,
  IcTetherFill,
  IcTetherFixedColorFill,
} from '@/components/Icon/Icons'
import { ChainAndTokenType } from '@/types/blockChain'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { ReactNode } from 'react'
import {
  mainnet,
  sepolia,
  arbitrum,
  optimism,
  base,
  blast,
  baseSepolia,
} from 'viem/chains'

export const supportChains =
  process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
    ? [sepolia, baseSepolia]
    : [mainnet, arbitrum, optimism, base, blast]

export const NATIVE_TOKEN_ADDRESSES = {
  CHAIN_UNSPECIFIED: '',
  SOLANA: 'So11111111111111111111111111111111111111112',
  SOLANA_DEVNET: 'So11111111111111111111111111111111111111112',
  SOLANA_TESTNET: 'So11111111111111111111111111111111111111112',
  BASE: '0x0000000000000000000000000000000000000000',
  BASE_SEPOLIA: '0x0000000000000000000000000000000000000000',
  ETHEREUM: '0x0000000000000000000000000000000000000000',
  ETHEREUM_SEPOLIA: '0x0000000000000000000000000000000000000000',
} satisfies Record<ChainType, string>

export const WRAPPED_NATIVE_TOKEN_ADDRESSES = {
  CHAIN_UNSPECIFIED: '',
  SOLANA: 'So11111111111111111111111111111111111111112',
  SOLANA_DEVNET: 'So11111111111111111111111111111111111111112',
  SOLANA_TESTNET: 'So11111111111111111111111111111111111111112',
  BASE: '0x4200000000000000000000000000000000000006',
  BASE_SEPOLIA: '0x4200000000000000000000000000000000000006',
  ETHEREUM: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  ETHEREUM_SEPOLIA: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
} satisfies Record<ChainType, string>

export const DUMMY_SVM_ADDRESS = '11111111111111111111111111111111'

export const CURRENCY_FROM_CHAIN_TYPE = {
  SOLANA: Currency.CURRENCY_SOL,
  SOLANA_DEVNET: Currency.CURRENCY_SOL,
  SOLANA_TESTNET: Currency.CURRENCY_SOL,
  CHAIN_UNSPECIFIED: Currency.CURRENCY_USDC,
  BASE: Currency.CURRENCY_ETH,
  BASE_SEPOLIA: Currency.CURRENCY_ETH,
  ETHEREUM: Currency.CURRENCY_ETH,
  ETHEREUM_SEPOLIA: Currency.CURRENCY_ETH,
} satisfies Record<ChainType, Currency>

export const SYMBOL_FROM_CHAIN_TYPE = {
  SOLANA: 'SOL',
  SOLANA_DEVNET: 'SOL',
  SOLANA_TESTNET: 'SOL',
  CHAIN_UNSPECIFIED: 'USDC',
  BASE: 'ETH',
  BASE_SEPOLIA: 'ETH',
  ETHEREUM: 'ETH',
  ETHEREUM_SEPOLIA: 'ETH',
} satisfies Record<ChainType, string>

export const SLIPPAGE_PERCENTAGE = {
  default: '10',
  min: '1',
  max: '100',
}

export const DECIMALS = {
  CHAIN_UNSPECIFIED: 0,
  SOLANA: Math.log10(LAMPORTS_PER_SOL),
  SOLANA_DEVNET: Math.log10(LAMPORTS_PER_SOL),
  SOLANA_TESTNET: Math.log10(LAMPORTS_PER_SOL),
  BASKET_TOKEN: 6,
  BASE: 18,
  BASE_SEPOLIA: 18,
  ETHEREUM: 18,
  ETHEREUM_SEPOLIA: 18,
} satisfies Record<ChainType, number> & { BASKET_TOKEN: number }

export const ICONS_FIXED_FROM_CHAIN_TYPE = {
  CHAIN_UNSPECIFIED: <IcPieChartQuarterFill />,
  SOLANA: <IcSolanaFixedColorFill />,
  SOLANA_DEVNET: <IcSolanaFixedColorFill />,
  SOLANA_TESTNET: <IcSolanaFixedColorFill />,
  BASE: <IcBaseFixedColorFill />,
  BASE_SEPOLIA: <IcBaseFixedColorFill />,
  ETHEREUM: <IcEthereumFixedColorFill />,
  ETHEREUM_SEPOLIA: <IcEthereumFixedColorFill />,
  USDT: <IcTetherFixedColorFill />,
} satisfies Record<ChainAndTokenType, ReactNode>

export const ICONS_SOLID_FROM_CHAIN_TYPE = {
  CHAIN_UNSPECIFIED: <IcPieChartQuarterFill />,
  SOLANA: <IcSolanaFill />,
  SOLANA_DEVNET: <IcSolanaFill />,
  SOLANA_TESTNET: <IcSolanaFill />,
  BASE: <IcBaseEthereumFill />,
  BASE_SEPOLIA: <IcBaseEthereumFill />,
  ETHEREUM: <IcEthereumFill />,
  ETHEREUM_SEPOLIA: <IcEthereumFill />,
  USDT: <IcTetherFill />,
} satisfies Record<ChainAndTokenType, ReactNode>

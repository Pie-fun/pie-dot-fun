import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  BasketToken,
  BasketTokenState,
  ListBasketTokensResponse,
  ListRebalancingHistoriesResponse,
  RebalanceFrequency,
  TokenStrategy,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/basket-token'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export async function listBasketTokens() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListBasketTokensResponse>({
    basketTokens: [
      {
        isRebalancing: false,
        address: 'listBasketTokens1',
        chain: ChainType.SOLANA,
        components: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 50,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 50,
            },
          },
        ],
        createTime: '2024-08-23T06:12:24.783Z',
        displayName: 'MOONSHOT Trending 20',
        expireTime: '',
        iconImageUri: 'https://picsum.photos/seed/token1/50/50',
        lastRebalanceTime: '',
        description:
          'The MOONSHOT Trending 20 Index is a curated selection of 20 meme coins that have demonstrated significant growth and market reactions over the past 7 days. This index includes the top 20 coins based on high trading volumes and rapidly shifting trends, making it ideal for investors looking to stay ahead in the fast-changing cryptocurrency market. The MOONSHOT Trending 20 Index is rebalanced daily to ensure that it reflects the most current market trends and opportunities. The index is weighted based on the market capitalization of each coin, with the top 10 coins receiving a higher weight than the bottom 10 coins. The MOONSHOT Trending 20 Index is a high-risk, high-reward investment that is best suited for experienced investors who are comfortable with the volatility of the cryptocurrency market. Investors should carefully consider their risk tolerance and investment goals before investing in the MOONSHOT Trending 20 Index.',
        creator: 'greenmonky',
        oneLineDescription: 'Top 50 Trending Picks by MZ',
        rebalanceFrequency: RebalanceFrequency.MANUAL,
        strategy: TokenStrategy.CUSTOM_WEIGHTED,
        name: `basketTokens/${ChainType.SOLANA}/listBasketTokens1`,
        state: BasketTokenState.LISTED,
        symbol: 'MOONSHOT20',
        totalHolders: 1234,
        totalSupply: {
          decimals: 6,
          formattedAmount: '5678',
          rawAmount: '5678000000',
        },
        onchainId: '01',
      },
      {
        isRebalancing: false,
        address: 'listBasketTokens2',
        chain: ChainType.SOLANA,
        components: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 50,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 50,
            },
          },
        ],
        createTime: '2024-08-23T06:12:24.783Z',
        displayName: 'AI PICK Trending 10',
        expireTime: '',
        iconImageUri: 'https://picsum.photos/seed/token2/50/50',
        lastRebalanceTime: '',
        description:
          'Top 10 Trending Picks by AI Index is a curated selection of 10 AI meme coins that have demonstrated significant growth and market reactions over the past 7 days. This index includes the top 10 coins based on high trading volumes and rapidly shifting trends, making it ideal for investors looking to stay ahead in the fast-changing cryptocurrency market. Top 10 Trending Picks by AI is rebalanced daily to ensure that it reflects the most current market trends and opportunities. The index is weighted based on the market capitalization of each coin, with the top 10 coins receiving a higher weight than the bottom 10 coins. Top 10 Trending Picks by AI is a high-risk, high-reward investment that is best suited for experienced investors who are comfortable with the volatility of the cryptocurrency market. Investors should carefully consider their risk tolerance and investment goals before investing in the Top 10 Trending Picks by AI Index.',
        creator: 'greenmonky',
        oneLineDescription: 'Top 10 Trending Picks by AI',
        rebalanceFrequency: RebalanceFrequency.MANUAL,
        strategy: TokenStrategy.CUSTOM_WEIGHTED,
        name: `basketTokens/${ChainType.SOLANA}/listBasketTokens2`,
        state: BasketTokenState.LISTED,
        symbol: 'AIAGENT10',
        totalHolders: 1234,
        totalSupply: {
          decimals: 6,
          formattedAmount: '5678',
          rawAmount: '5678000000',
        },
        onchainId: '02',
      },
    ],
    nextPageToken: '',
  })
}

export async function getBasketToken() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<BasketToken>({
    isRebalancing: false,
    address: 'listBasketTokens1',
    chain: ChainType.SOLANA,
    components: [
      {
        address: 'fungibleTokens1',
        chain: ChainType.SOLANA,
        fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
        weight: {
          value: 50,
        },
      },
      {
        address: 'fungibleTokens2',
        chain: ChainType.SOLANA,
        fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
        weight: {
          value: 50,
        },
      },
    ],
    createTime: '2024-08-23T06:12:24.783Z',
    displayName: 'MOONSHOT Trending 20',
    expireTime: '',
    iconImageUri: 'https://picsum.photos/seed/token1/50/50',
    lastRebalanceTime: '',
    description:
      'The MOONSHOT Trending 20 Index is a curated selection of 20 meme coins that have demonstrated significant growth and market reactions over the past 7 days. This index includes the top 20 coins based on high trading volumes and rapidly shifting trends, making it ideal for investors looking to stay ahead in the fast-changing cryptocurrency market. The MOONSHOT Trending 20 Index is rebalanced daily to ensure that it reflects the most current market trends and opportunities. The index is weighted based on the market capitalization of each coin, with the top 10 coins receiving a higher weight than the bottom 10 coins. The MOONSHOT Trending 20 Index is a high-risk, high-reward investment that is best suited for experienced investors who are comfortable with the volatility of the cryptocurrency market. Investors should carefully consider their risk tolerance and investment goals before investing in the MOONSHOT Trending 20 Index.',
    creator: 'greenmonky',
    oneLineDescription: 'Top 50 Trending Picks by MZ',
    rebalanceFrequency: RebalanceFrequency.MANUAL,
    strategy: TokenStrategy.CUSTOM_WEIGHTED,
    name: `basketTokens/${ChainType.SOLANA}/listBasketTokens1`,
    state: BasketTokenState.LISTED,
    symbol: 'MOONSHOT20',
    totalHolders: 1234,
    totalSupply: {
      decimals: 6,
      formattedAmount: '5678',
      rawAmount: '5678000000',
    },
    onchainId: '01',
  })
}

export async function listBasketTokenRebalancingHistories() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListRebalancingHistoriesResponse>({
    rebalancingHistories: [
      {
        rebalanceTime: '2024-08-24T06:12:24.783Z',
        beforeComponents: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 50,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 50,
            },
          },
        ],
        afterComponents: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 12.5,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 87.5,
            },
          },
        ],
        txSignatures: ['TXABCDE1-1', 'TXABCDE1-2'],
        componentsChanged: true,
      },
      {
        rebalanceTime: '2024-08-23T06:12:24.783Z',
        beforeComponents: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 30,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 70,
            },
          },
        ],
        afterComponents: [
          {
            address: 'fungibleTokens1',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
            weight: {
              value: 50,
            },
          },
          {
            address: 'fungibleTokens2',
            chain: ChainType.SOLANA,
            fungibleToken: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
            weight: {
              value: 50,
            },
          },
        ],
        txSignatures: ['TXABCDE2-1', 'TXABCDE2-2'],
        componentsChanged: true,
      },
    ],
    nextPageToken: '',
  })
}

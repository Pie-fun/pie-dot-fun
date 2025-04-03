import {
  getBasketTokenQuery,
  listBasketTokenRebalancingHistoriesQuery,
  listBasketTokensQuery,
} from '@/app/api/backend/v1/basketToken/queries'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import {
  getFungibleTokenQuery,
  listFungibleTokensQuery,
} from '@/app/api/backend/v1/fungibleToken/queries'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import {
  getHoldingQuery,
  getHoldingsStatisticsQuery,
  listHoldingsQuery,
} from '@/app/api/backend/v1/holding/queries'
import {
  getTokenBalanceQuery,
  getUserFundQuery,
} from '@/app/api/backend/v1/pieProgram/queries'
import { getBalancesEVMQuery } from '@/app/api/backend/proxy/queries'
import { getUserQuery, listUsersQuery } from '@/app/api/backend/v1/user/queries'
import {
  getBalanceQuery,
  getCurrentNetworkFeeQuery,
  getSignatureStatusQuery,
} from '@/app/api/external/node/v1/solana/queries'
import { FetchParameters, SolanaNodeParameters } from '@/libs/react-query/types'
import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { listHoldingWalletsQuery } from '@/app/api/backend/v1/holdingWallet/queries'
import {
  basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery,
  basketTokensWithBasketTokenMarketQuery,
} from '@/app/api/frontend/v1/graphql/queries/combined/queries'
import { getAccessTokenQuery } from '@/app/api/external/privy/v1/auth/queries'
import { FirstParameter } from '@/types/utility'

export const queryKeys = createQueryKeyStore({
  privy: {
    getAccessTokenQuery: (
      props?: FetchParameters<typeof getAccessTokenQuery>,
    ) => [props],
  },
  combined: {
    basketTokensWithBasketTokenMarketQuery: (
      props?: FetchParameters<typeof basketTokensWithBasketTokenMarketQuery>,
    ) => [props],
    basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery: (
      props?: FetchParameters<
        typeof basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery
      >,
    ) => [props],
  },
  common: {
    getPingQuery: ['ping'],
  },
  basketToken: {
    getBasketTokenQuery: (
      props?: FetchParameters<typeof getBasketTokenQuery>,
    ) => [props],
    listBasketTokensQuery: (
      props?: FetchParameters<typeof listBasketTokensQuery>,
    ) => [props],
    listBasketTokenRebalancingHistoriesQuery: (
      props?: FetchParameters<typeof listBasketTokenRebalancingHistoriesQuery>,
    ) => [props],
  },
  basketTokenMarket: {
    getBasketTokenMarketQuery: (
      props?: FetchParameters<typeof getBasketTokenMarketQuery>,
    ) => [props],
  },
  fungibleToken: {
    getFungibleTokenQuery: (
      props?: FetchParameters<typeof getFungibleTokenQuery>,
    ) => [props],
    listFungibleTokensQuery: (
      props?: FetchParameters<typeof listFungibleTokensQuery>,
    ) => [props],
  },
  fungibleTokenMarket: {
    getFungibleTokenMarketQuery: (
      props?: FetchParameters<typeof getFungibleTokenMarketQuery>,
    ) => [props],
  },
  holding: {
    getHoldingQuery: (props?: FetchParameters<typeof getHoldingQuery>) => [
      props,
    ],
    listHoldingsQuery: (props?: FetchParameters<typeof listHoldingsQuery>) => [
      props,
    ],
    getHoldingsStatisticsQuery: (
      props?: FetchParameters<typeof getHoldingsStatisticsQuery>,
    ) => [props],
  },
  holdingWallet: {
    listHoldingWalletsQuery: (
      props?: FetchParameters<typeof listHoldingWalletsQuery>,
    ) => [props],
  },
  user: {
    getUserQuery: (props?: FetchParameters<typeof getUserQuery>) => [props],
    listUsersQuery: (props?: FetchParameters<typeof listUsersQuery>) => [props],
  },
  pieProgram: {
    getUserFundQuery: (
      props?: SolanaNodeParameters<FirstParameter<typeof getUserFundQuery>>,
    ) => [props],
    getTokenBalanceQuery: (
      props?: SolanaNodeParameters<FirstParameter<typeof getTokenBalanceQuery>>,
    ) => [props],
  },
  proxy: {
    getBalancesEVMQuery: (
      props?: FetchParameters<typeof getBalancesEVMQuery>,
    ) => [props],
  },
  solana: {
    getBalanceQuery: (
      props?: SolanaNodeParameters<FirstParameter<typeof getBalanceQuery>>,
    ) => [props],
    getSignatureStatusQuery: (
      props?: SolanaNodeParameters<
        FirstParameter<typeof getSignatureStatusQuery>
      >,
    ) => [props],
    getCurrentNetworkFeeQuery: (
      props?: SolanaNodeParameters<
        FirstParameter<typeof getCurrentNetworkFeeQuery>
      >,
    ) => [props],
  },
})

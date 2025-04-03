import {
  getBasketToken,
  listBasketTokenRebalancingHistories,
  listBasketTokens,
} from '@/app/api/mocks/v1/basketToken/requests'
import {
  getBasketTokenMarket,
  listBasketTokenTicks,
} from '@/app/api/mocks/v1/basketTokenMarket/requests'
import {
  getFungibleToken,
  listFungibleTokens,
} from '@/app/api/mocks/v1/fungibleToken/requests'
import {
  getHolding,
  getHoldingsStatistics,
  listHoldings,
} from '@/app/api/mocks/v1/holding/requests'
import {
  getFungibleTokenMarket,
  listFungibleTokensMarkets,
} from '@/app/api/mocks/v1/fungibleTokenMarket/requests'
import {
  getUser,
  listUsers,
  updateUser,
  validateNicknameAvailability,
} from '@/app/api/mocks/v1/user/requests'
import { mockDataPrefix } from '@/libs/fetch/fetch'
import { http } from 'msw'
import { getBalancesEVM } from '@/app/api/mocks/v1/proxy/requests'
import {
  buildMintTx,
  buildRedeemTx,
} from '@/app/api/mocks/v1/pieProgram/requests'
import { listHoldingWallets } from '@/app/api/mocks/v1/holdingWallet/requests'

export const DEFAULT_DELAY = 1000

export const handlers = [
  http.get(`${mockDataPrefix}/v1/basketTokens`, listBasketTokens),
  http.get(
    `${mockDataPrefix}/v1/fungibleTokens/:chain/:address/market`,
    getFungibleTokenMarket,
  ),
  http.get(
    `${mockDataPrefix}/v1/fungibleTokens/-/-/markets`,
    listFungibleTokensMarkets,
  ),
  http.get(`${mockDataPrefix}/v1/fungibleTokens`, listFungibleTokens),
  http.get(
    `${mockDataPrefix}/v1/fungibleTokens/:chain/:address`,
    getFungibleToken,
  ),
  http.get(
    `${mockDataPrefix}/v1/basketTokens/:chain/:address/ticks`,
    ({ request }) => {
      const url = new URL(request.url)
      const size = Number(url.searchParams.get('size') ?? 0)

      return listBasketTokenTicks({ size })
    },
  ),
  http.get(`${mockDataPrefix}/v1/basketTokens/:chain/:address`, getBasketToken),
  http.get(
    `${mockDataPrefix}/v1/basketTokens/:chain/:address/rebalancingHistories`,
    listBasketTokenRebalancingHistories,
  ),
  http.get(
    `${mockDataPrefix}/v1/holdings/:chain/basketTokens/:tokenAddress/holdingWallets/:holdingWalletAddress`,
    getHolding,
  ),
  http.get(`${mockDataPrefix}/v1/holdings`, listHoldings),
  http.get(`${mockDataPrefix}/v1/holdings:statistics`, getHoldingsStatistics),
  http.get(`${mockDataPrefix}/v1/holdingWallets`, listHoldingWallets),
  http.get(
    `${mockDataPrefix}/v1/basketTokens/:chain/:address/market`,
    getBasketTokenMarket,
  ),
  http.get(`${mockDataPrefix}/v1/users/:id`, getUser),
  http.get(`${mockDataPrefix}/v1/users`, listUsers),
  http.post(
    `${mockDataPrefix}/v1/users:validateNicknameAvailablity`,
    validateNicknameAvailability,
  ),
  http.patch(`${mockDataPrefix}/v1/users/:id`, updateUser),
  http.get(
    `${mockDataPrefix}/v1/proxy/dune/api/echo/v1/balances/evm/:address`,
    getBalancesEVM,
  ),
  http.post(
    `${mockDataPrefix}/v1/pie-program/build-tx/mint-basket`,
    buildMintTx,
  ),
  http.post(
    `${mockDataPrefix}/v1/pie-program/build-tx/redeem-basket`,
    buildRedeemTx,
  ),
]

// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/fungible-token-market.proto (package piedotfun.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Currency, Money, PriceChangesByPeriod } from "./common_pb.js";

/**
 * FungibleTokenMarket contains the market data for a fungible token.
 *
 * @generated from message piedotfun.v1.FungibleTokenMarket
 */
export const FungibleTokenMarket = proto3.makeMessageType(
  "piedotfun.v1.FungibleTokenMarket",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fungible_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "native_currency", kind: "enum", T: proto3.getEnumType(Currency) },
    { no: 7, name: "prices", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Money} },
    { no: 8, name: "market_caps", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Money} },
    { no: 9, name: "price_changes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PriceChangesByPeriod} },
    { no: 10, name: "price", kind: "message", T: Money },
    { no: 11, name: "market_cap", kind: "message", T: Money },
    { no: 12, name: "price_change", kind: "message", T: PriceChangesByPeriod },
    { no: 13, name: "fdvs", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Money} },
  ],
);

/**
 * @generated from message piedotfun.v1.GetFungibleTokenMarketRequest
 */
export const GetFungibleTokenMarketRequest = proto3.makeMessageType(
  "piedotfun.v1.GetFungibleTokenMarketRequest",
  () => [
    { no: 1, name: "fungible_token_market", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
  ],
);

/**
 * @generated from message piedotfun.v1.ListFungibleTokensMarketsRequest
 */
export const ListFungibleTokensMarketsRequest = proto3.makeMessageType(
  "piedotfun.v1.ListFungibleTokensMarketsRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
  ],
);

/**
 * @generated from message piedotfun.v1.ListFungibleTokensMarketsResponse
 */
export const ListFungibleTokensMarketsResponse = proto3.makeMessageType(
  "piedotfun.v1.ListFungibleTokensMarketsResponse",
  () => [
    { no: 1, name: "fungible_token_markets", kind: "message", T: FungibleTokenMarket, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


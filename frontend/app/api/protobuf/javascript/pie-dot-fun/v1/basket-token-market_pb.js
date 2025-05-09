// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/basket-token-market.proto (package piedotfun.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Currency, Money, Percentage, PriceChangesByPeriod, Quantity } from "./common_pb.js";

/**
 * @generated from enum piedotfun.v1.TickInterval
 */
export const TickInterval = proto3.makeEnum(
  "piedotfun.v1.TickInterval",
  [
    {no: 0, name: "INTERVAL_UNSPECIFIED"},
    {no: 1, name: "INTERVAL_1_SECOND"},
    {no: 2, name: "INTERVAL_1_MINUTE"},
    {no: 3, name: "INTERVAL_15_MINUTES"},
    {no: 4, name: "INTERVAL_1_HOUR"},
    {no: 5, name: "INTERVAL_4_HOUR"},
    {no: 6, name: "INTERVAL_1_DAY"},
  ],
);

/**
 * BasketTokenMarket contains the market data for a basket token.
 *
 * @generated from message piedotfun.v1.BasketTokenMarket
 */
export const BasketTokenMarket = proto3.makeMessageType(
  "piedotfun.v1.BasketTokenMarket",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "basket_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "native_currency", kind: "enum", T: proto3.getEnumType(Currency) },
    { no: 5, name: "values", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Money} },
    { no: 6, name: "market_caps", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Money} },
    { no: 7, name: "value_changes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PriceChangesByPeriod} },
    { no: 8, name: "maximum_draw_down", kind: "message", T: Percentage },
    { no: 9, name: "value", kind: "message", T: Money },
    { no: 10, name: "market_cap", kind: "message", T: Money },
    { no: 11, name: "value_change", kind: "message", T: PriceChangesByPeriod },
  ],
);

/**
 * @generated from message piedotfun.v1.CreateBasketTokenMarketRequest
 */
export const CreateBasketTokenMarketRequest = proto3.makeMessageType(
  "piedotfun.v1.CreateBasketTokenMarketRequest",
  () => [
    { no: 1, name: "basket_token_market", kind: "message", T: BasketTokenMarket },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message piedotfun.v1.CustomCreateBasketTokenMarketRequest
 */
export const CustomCreateBasketTokenMarketRequest = proto3.makeMessageType(
  "piedotfun.v1.CustomCreateBasketTokenMarketRequest",
  () => [
    { no: 1, name: "basket_token_market", kind: "message", T: BasketTokenMarket },
    { no: 2, name: "components", kind: "message", T: CustomCreateBasketTokenMarketRequest_Component, repeated: true },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message piedotfun.v1.CustomCreateBasketTokenMarketRequest.Component
 */
export const CustomCreateBasketTokenMarketRequest_Component = proto3.makeMessageType(
  "piedotfun.v1.CustomCreateBasketTokenMarketRequest.Component",
  () => [
    { no: 1, name: "fungible_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quantity", kind: "message", T: Quantity },
  ],
  {localName: "CustomCreateBasketTokenMarketRequest_Component"},
);

/**
 * @generated from message piedotfun.v1.GetBasketTokenMarketRequest
 */
export const GetBasketTokenMarketRequest = proto3.makeMessageType(
  "piedotfun.v1.GetBasketTokenMarketRequest",
  () => [
    { no: 1, name: "basket_token_market", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
  ],
);

/**
 * @generated from message piedotfun.v1.ListBasketTokensMarketsRequest
 */
export const ListBasketTokensMarketsRequest = proto3.makeMessageType(
  "piedotfun.v1.ListBasketTokensMarketsRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
  ],
);

/**
 * @generated from message piedotfun.v1.ListBasketTokensMarketsResponse
 */
export const ListBasketTokensMarketsResponse = proto3.makeMessageType(
  "piedotfun.v1.ListBasketTokensMarketsResponse",
  () => [
    { no: 1, name: "basket_token_markets", kind: "message", T: BasketTokenMarket, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message piedotfun.v1.UpdateBasketTokenMarketComponentsRequest
 */
export const UpdateBasketTokenMarketComponentsRequest = proto3.makeMessageType(
  "piedotfun.v1.UpdateBasketTokenMarketComponentsRequest",
  () => [
    { no: 1, name: "basket_token_market", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "components", kind: "message", T: UpdateBasketTokenMarketComponentsRequest_Component, repeated: true },
    { no: 3, name: "updateBlockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message piedotfun.v1.UpdateBasketTokenMarketComponentsRequest.Component
 */
export const UpdateBasketTokenMarketComponentsRequest_Component = proto3.makeMessageType(
  "piedotfun.v1.UpdateBasketTokenMarketComponentsRequest.Component",
  () => [
    { no: 1, name: "fungible_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quantity", kind: "message", T: Quantity },
  ],
  {localName: "UpdateBasketTokenMarketComponentsRequest_Component"},
);

/**
 * @generated from message piedotfun.v1.UpdateBasketTokenMarketComponentsResponse
 */
export const UpdateBasketTokenMarketComponentsResponse = proto3.makeMessageType(
  "piedotfun.v1.UpdateBasketTokenMarketComponentsResponse",
  [],
);

/**
 * @generated from message piedotfun.v1.ListBasketTokenTicksRequest
 */
export const ListBasketTokenTicksRequest = proto3.makeMessageType(
  "piedotfun.v1.ListBasketTokenTicksRequest",
  () => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_time", kind: "message", T: Timestamp, opt: true },
    { no: 3, name: "end_time", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
    { no: 6, name: "interval", kind: "enum", T: proto3.getEnumType(TickInterval) },
  ],
);

/**
 * @generated from message piedotfun.v1.ListBasketTokenTicksResponse
 */
export const ListBasketTokenTicksResponse = proto3.makeMessageType(
  "piedotfun.v1.ListBasketTokenTicksResponse",
  () => [
    { no: 1, name: "ticks", kind: "message", T: Tick, repeated: true },
    { no: 2, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
  ],
);

/**
 * @generated from message piedotfun.v1.Tick
 */
export const Tick = proto3.makeMessageType(
  "piedotfun.v1.Tick",
  () => [
    { no: 1, name: "open_time", kind: "message", T: Timestamp },
    { no: 2, name: "open", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "high", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "low", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "close", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);


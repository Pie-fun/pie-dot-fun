// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/holding.proto (package piedotfun.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ChainType, Currency, Money, Percentage, PnL, PnLsByPeriod, Quantity } from "./common_pb.js";

/**
 * @generated from message piedotfun.v1.GetHoldingRequest
 */
export declare class GetHoldingRequest extends Message<GetHoldingRequest> {
  /**
   * The name of the holding to retrieve.
   * Format : "holdings/{chain}/basketTokens/{token_address}/holdingWallets/{holding_wallet_address}"
   *
   * @generated from field: string holding = 1;
   */
  holding: string;

  /**
   * Display the value in this currency. Default is USD.
   *
   * @generated from field: piedotfun.v1.Currency currency = 2 [deprecated = true];
   * @deprecated
   */
  currency: Currency;

  constructor(data?: PartialMessage<GetHoldingRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.GetHoldingRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetHoldingRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetHoldingRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetHoldingRequest;

  static equals(a: GetHoldingRequest | PlainMessage<GetHoldingRequest> | undefined, b: GetHoldingRequest | PlainMessage<GetHoldingRequest> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.ListHoldingsRequest
 */
export declare class ListHoldingsRequest extends Message<ListHoldingsRequest> {
  /**
   * The maximum number of holdings to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 rows will be returned.
   * The maximum value is 1024; values above 1024 will be coerced to 1024.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * Token of the page to retrieve. If not specified, the first
   * page of results will be returned. Use the value obtained from
   * `next_page_token` in the previous response in order to request
   * the next page of results.
   *
   * When paginating, all other parameters provided to `ListHoldings` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * Available Sequence and Operator
   * * basket_token
   *   * `=`
   * * holding_wallet
   *   * `=`
   * * formatted_quantity, quantity (alias of formatted_quantity)
   *   * `>=`, `<=`, `>`, `<`
   * * raw_quantity
   *   * `>=`, `<=`, `>`, `<`
   * * market_value_sol
   *   * `>=`, `<=`, `>`, `<`
   * * market_value_usdc
   *   * `>=`, `<=`, `>`, `<`
   *
   * At least one filter is required. If none is provided, the service will return an error.
   * Examples
   * * basket_token="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
   * * holding_wallet="holdingWallets/SVM/9b3b4b4b-1b1b-4b4b-9b9b-1b1b4b4b4b4b"
   * * quantity>"0"
   * * market_value_sol>="100"
   *
   * @generated from field: string filter = 3;
   */
  filter: string;

  /**
   * One or more fields to compare and use to sort the output. (optional)
   * Default order for a field is descending by id
   * To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
   *
   * Reference
   * * https://google.aip.dev/132#ordering.
   *
   * Supported Fields
   * * "market_value"
   *
   * Examples
   * * order_by=market_value desc
   *
   * @generated from field: string order_by = 4;
   */
  orderBy: string;

  /**
   * Display the value in this currency. Default is USD.
   *
   * @generated from field: piedotfun.v1.Currency currency = 5 [deprecated = true];
   * @deprecated
   */
  currency: Currency;

  constructor(data?: PartialMessage<ListHoldingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListHoldingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListHoldingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListHoldingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListHoldingsRequest;

  static equals(a: ListHoldingsRequest | PlainMessage<ListHoldingsRequest> | undefined, b: ListHoldingsRequest | PlainMessage<ListHoldingsRequest> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.ListHoldingsResponse
 */
export declare class ListHoldingsResponse extends Message<ListHoldingsResponse> {
  /**
   * @generated from field: repeated piedotfun.v1.Holding holdings = 1;
   */
  holdings: Holding[];

  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListHoldingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListHoldingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListHoldingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListHoldingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListHoldingsResponse;

  static equals(a: ListHoldingsResponse | PlainMessage<ListHoldingsResponse> | undefined, b: ListHoldingsResponse | PlainMessage<ListHoldingsResponse> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.GetHoldingsStatisticsRequest
 */
export declare class GetHoldingsStatisticsRequest extends Message<GetHoldingsStatisticsRequest> {
  /**
   * Available Sequence and Operator
   * * basket_token
   *   * `=`
   * * holding_wallet
   *   * `=`
   * * user
   *   * `=`
   * * symbol
   *   * `=`
   * * market_value_sol
   *   * `>=`, `<=`, `>`, `<`
   * * market_value_usdc
   *   * `>=`, `<=`, `>`, `<`
   *
   * At least one filter is required. If none is provided, the service will return an error.
   * Examples
   * * basket_token="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
   * * holding_wallet="holdingWallets/SOLANA/9b3b4b4b-1b1b-4b4b-9b9b-1b1b4b4b4b4b"
   * * user="users/1"
   * * symbol="MURAD"
   * * market_value_sol>=10
   *
   * @generated from field: string filter = 1;
   */
  filter: string;

  constructor(data?: PartialMessage<GetHoldingsStatisticsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.GetHoldingsStatisticsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetHoldingsStatisticsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetHoldingsStatisticsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetHoldingsStatisticsRequest;

  static equals(a: GetHoldingsStatisticsRequest | PlainMessage<GetHoldingsStatisticsRequest> | undefined, b: GetHoldingsStatisticsRequest | PlainMessage<GetHoldingsStatisticsRequest> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.GetHoldingsStatisticsResponse
 */
export declare class GetHoldingsStatisticsResponse extends Message<GetHoldingsStatisticsResponse> {
  /**
   * @generated from field: int32 count = 1;
   */
  count: number;

  /**
   * @generated from field: repeated piedotfun.v1.Money total_market_values = 2;
   */
  totalMarketValues: Money[];

  /**
   * @generated from field: repeated piedotfun.v1.PnL total_pnls = 3;
   */
  totalPnls: PnL[];

  constructor(data?: PartialMessage<GetHoldingsStatisticsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.GetHoldingsStatisticsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetHoldingsStatisticsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetHoldingsStatisticsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetHoldingsStatisticsResponse;

  static equals(a: GetHoldingsStatisticsResponse | PlainMessage<GetHoldingsStatisticsResponse> | undefined, b: GetHoldingsStatisticsResponse | PlainMessage<GetHoldingsStatisticsResponse> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.Holding
 */
export declare class Holding extends Message<Holding> {
  /**
   * Format : "holdings/{chain}/basketTokens/{token_address}/holdingWallets/{holding_wallet_address}"
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: piedotfun.v1.ChainType chain = 2;
   */
  chain: ChainType;

  /**
   * @generated from field: string basket_token = 3;
   */
  basketToken: string;

  /**
   * @generated from field: string holding_wallet = 4;
   */
  holdingWallet: string;

  /**
   * @generated from field: piedotfun.v1.Quantity quantity = 5;
   */
  quantity?: Quantity;

  /**
   * map from currency to average buy price
   *
   * @generated from field: map<string, piedotfun.v1.Money> average_buy_prices = 6;
   */
  averageBuyPrices: { [key: string]: Money };

  /**
   * map from currency to market value
   *
   * @generated from field: map<string, piedotfun.v1.Money> market_values = 7;
   */
  marketValues: { [key: string]: Money };

  /**
   * map from currency to PnLsByPeriod
   *
   * @generated from field: map<string, piedotfun.v1.PnLsByPeriod> pnls = 8;
   */
  pnls: { [key: string]: PnLsByPeriod };

  /**
   * Percentage of holding value in the basket token
   *
   * @generated from field: piedotfun.v1.Percentage ownership_percentage = 9;
   */
  ownershipPercentage?: Percentage;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 11;
   */
  createTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp update_time = 12;
   */
  updateTime?: Timestamp;

  /**
   * @generated from field: piedotfun.v1.Money average_buy_price = 13 [deprecated = true];
   * @deprecated
   */
  averageBuyPrice?: Money;

  /**
   * @generated from field: piedotfun.v1.Money market_value = 14 [deprecated = true];
   * @deprecated
   */
  marketValue?: Money;

  /**
   * @generated from field: piedotfun.v1.PnLsByPeriod pnl = 15 [deprecated = true];
   * @deprecated
   */
  pnl?: PnLsByPeriod;

  constructor(data?: PartialMessage<Holding>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.Holding";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Holding;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Holding;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Holding;

  static equals(a: Holding | PlainMessage<Holding> | undefined, b: Holding | PlainMessage<Holding> | undefined): boolean;
}


// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/fungible-token.proto (package piedotfun.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ChainType, SNS } from "./common_pb.js";

/**
 * @generated from message piedotfun.v1.GetFungibleTokenRequest
 */
export declare class GetFungibleTokenRequest extends Message<GetFungibleTokenRequest> {
  /**
   * The name of the fungible token to retrieve.
   * Format : "fungibleTokens/{chain}/{token_address}"
   *
   * @generated from field: string fungible_token = 1;
   */
  fungibleToken: string;

  constructor(data?: PartialMessage<GetFungibleTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.GetFungibleTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFungibleTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFungibleTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFungibleTokenRequest;

  static equals(a: GetFungibleTokenRequest | PlainMessage<GetFungibleTokenRequest> | undefined, b: GetFungibleTokenRequest | PlainMessage<GetFungibleTokenRequest> | undefined): boolean;
}

/**
 * ListFungibleTokensRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 *
 * @generated from message piedotfun.v1.ListFungibleTokensRequest
 */
export declare class ListFungibleTokensRequest extends Message<ListFungibleTokensRequest> {
  /**
   * The maximum number of fungible tokens to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListFungibleTokens` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * Available Sequence and Operator
   * * name
   *   * `=`
   * * chain
   *   * `=`
   * * symbol
   *   * `=`
   * * market_cap_sol
   *   * `=`, `>`, `<`, `>=`, `<=`
   * * market_cap_usdc
   *   * `=`, `>`, `<`, `>=`, `<=`
   *
   * Examples
   * * name="fungibleTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
   * * chain=SOLANA
   * * symbol="MURAD"
   * * market_cap_sol>=1,000,000
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
   * * "market_cap", "create_date"
   *
   * Examples
   * * order_by=create_date desc
   * * order_by=market_cap desc
   *
   * @generated from field: string order_by = 4;
   */
  orderBy: string;

  constructor(data?: PartialMessage<ListFungibleTokensRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListFungibleTokensRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFungibleTokensRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFungibleTokensRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFungibleTokensRequest;

  static equals(a: ListFungibleTokensRequest | PlainMessage<ListFungibleTokensRequest> | undefined, b: ListFungibleTokensRequest | PlainMessage<ListFungibleTokensRequest> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.ListFungibleTokensResponse
 */
export declare class ListFungibleTokensResponse extends Message<ListFungibleTokensResponse> {
  /**
   * @generated from field: repeated piedotfun.v1.FungibleToken fungible_tokens = 1;
   */
  fungibleTokens: FungibleToken[];

  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListFungibleTokensResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListFungibleTokensResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFungibleTokensResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFungibleTokensResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFungibleTokensResponse;

  static equals(a: ListFungibleTokensResponse | PlainMessage<ListFungibleTokensResponse> | undefined, b: ListFungibleTokensResponse | PlainMessage<ListFungibleTokensResponse> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.FungibleToken
 */
export declare class FungibleToken extends Message<FungibleToken> {
  /**
   * Format : "fungibleTokens/{chain}/{token_address}"
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: piedotfun.v1.ChainType chain = 2;
   */
  chain: ChainType;

  /**
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * @generated from field: string display_name = 4;
   */
  displayName: string;

  /**
   * @generated from field: string symbol = 5;
   */
  symbol: string;

  /**
   * @generated from field: string icon_image_url = 6;
   */
  iconImageUrl: string;

  /**
   * @generated from field: int32 decimals = 7;
   */
  decimals: number;

  /**
   * @generated from field: repeated piedotfun.v1.SNS sns = 8;
   */
  sns: SNS[];

  constructor(data?: PartialMessage<FungibleToken>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.FungibleToken";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FungibleToken;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FungibleToken;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FungibleToken;

  static equals(a: FungibleToken | PlainMessage<FungibleToken> | undefined, b: FungibleToken | PlainMessage<FungibleToken> | undefined): boolean;
}


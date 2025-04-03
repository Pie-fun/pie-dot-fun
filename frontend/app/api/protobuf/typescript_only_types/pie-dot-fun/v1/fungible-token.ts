// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/fungible-token.proto

/* eslint-disable */
import { type ChainType, type SNS } from "./common";

export const protobufPackage = "piedotfun.v1";

export interface GetFungibleTokenRequest {
  /**
   * The name of the fungible token to retrieve.
   * Format : "fungibleTokens/{chain}/{token_address}"
   */
  fungibleToken: string;
}

/**
 * ListFungibleTokensRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListFungibleTokensRequest {
  /**
   * The maximum number of fungible tokens to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 rows will be returned.
   * The maximum value is 1024; values above 1024 will be coerced to 1024.
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
   */
  orderBy: string;
}

export interface ListFungibleTokensResponse {
  fungibleTokens: FungibleToken[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface FungibleToken {
  /** Format : "fungibleTokens/{chain}/{token_address}" */
  name: string;
  chain: ChainType;
  address: string;
  displayName: string;
  symbol: string;
  iconImageUrl: string;
  decimals: number;
  sns: SNS[];
}

/** FungibleTokenService contains the function to interact with the FungibleToken of the spacebar */
export interface FungibleTokenService {
  GetFungibleToken(request: GetFungibleTokenRequest): Promise<FungibleToken>;
  ListFungibleTokens(request: ListFungibleTokensRequest): Promise<ListFungibleTokensResponse>;
}

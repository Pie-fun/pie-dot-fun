// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/holding-wallet.proto

/* eslint-disable */
import { type VMType } from "./common";

export const protobufPackage = "piedotfun.v1";

export interface GetHoldingWalletRequest {
  /**
   * The name of the holding_wallet to retrieve.
   * Format: holdingWallets/{vm_type}/{address}
   */
  holdingWallet: string;
}

export interface ListHoldingWalletsRequest {
  /**
   * The maximum number of holdings to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListHoldingWallets` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * user
   *   * `=`
   *
   * * user="users/1"
   * * market_value_sol>=10
   */
  filter: string;
}

export interface ListHoldingWalletsResponse {
  holdingWallets: HoldingWallet[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface HoldingWallet {
  /**
   * The name of the holding_wallet.
   * Format: holdingWallets/{vm_type}/{address}
   */
  name: string;
  vmType: VMType;
  address: string;
  user?: string | undefined;
}

/** HoldingWalletService contains the function to interact with the HoldingWallet of the spacebar */
export interface HoldingWalletService {
  GetHoldingWallet(request: GetHoldingWalletRequest): Promise<HoldingWallet>;
  ListHoldingWallets(request: ListHoldingWalletsRequest): Promise<ListHoldingWalletsResponse>;
}

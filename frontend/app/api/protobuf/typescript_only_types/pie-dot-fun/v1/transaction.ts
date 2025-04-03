// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/transaction.proto

/* eslint-disable */
import { type ChainType, type Money } from "./common";

export const protobufPackage = "piedotfun.v1";

export enum TransactionType {
  TRANSACTION_TYPE_UNSPECIFIED = "TRANSACTION_TYPE_UNSPECIFIED",
  TRANSACTION_TYPE_MINT = "TRANSACTION_TYPE_MINT",
  TRANSACTION_TYPE_TRANSFER = "TRANSACTION_TYPE_TRANSFER",
  TRANSACTION_TYPE_REDEEM = "TRANSACTION_TYPE_REDEEM",
}

export interface GetTransactionRequest {
  /**
   * The name of the transaction to retrieve.
   * Format: transactions/{chain}/{signature}
   */
  transaction: string;
}

/**
 * ListTransactionsRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListTransactionsRequest {
  /**
   * The maximum number of transactions to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListTransactions` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * chain
   *   * `Equal`
   * * signature
   *   * `Equal`
   * * basket_token
   *   * `Equal`
   * * from_holding_wallet
   *   * Equal`
   * * to_holding_wallet
   *   * Equal`
   * * type
   *   * Equal`
   *
   * Examples
   * * name="transactions/SOLANA/2ksFVPax4AKHEQDpUusmbifTYNMU2evzmcxdBpVu5N9koMaRGqvBJsn3JQsk8DUqnNwEZNN3o6ujfXLnZ1hks9Zc"
   * * basket_token="basketTokens/{chain}/{address}"
   * * from_holding_wallet="holdingWallets/{chain}/{address}"
   * * to_holding_wallet="holdingWallets/{chain}/{address}"
   * * type=MINT
   */
  filter: string;
}

export interface ListTransactionsResponse {
  transactions: Transaction[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface Transaction {
  /** Format : "transactions/{chain}/{signature}" */
  name: string;
  chain: ChainType;
  signature: string;
  basketToken: string;
  from: string;
  to: string;
  type: TransactionType;
  quantity: number;
  executionPrice: { [key: string]: Money };
  totalValue: { [key: string]: Money };
  createTime: string | undefined;
}

export interface Transaction_ExecutionPriceEntry {
  key: string;
  value: Money | undefined;
}

export interface Transaction_TotalValueEntry {
  key: string;
  value: Money | undefined;
}

/** TransactionService contains the function to interact with the Transaction of the spacebar */
export interface TransactionService {
  GetTransaction(request: GetTransactionRequest): Promise<Transaction>;
  ListTransactions(request: ListTransactionsRequest): Promise<ListTransactionsResponse>;
}

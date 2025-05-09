// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/transaction.proto (package piedotfun.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ChainType, Money } from "./common_pb.js";

/**
 * @generated from enum piedotfun.v1.TransactionType
 */
export declare enum TransactionType {
  /**
   * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSACTION_TYPE_MINT = 1;
   */
  MINT = 1,

  /**
   * @generated from enum value: TRANSACTION_TYPE_TRANSFER = 2;
   */
  TRANSFER = 2,

  /**
   * @generated from enum value: TRANSACTION_TYPE_REDEEM = 3;
   */
  REDEEM = 3,
}

/**
 * @generated from message piedotfun.v1.GetTransactionRequest
 */
export declare class GetTransactionRequest extends Message<GetTransactionRequest> {
  /**
   * The name of the transaction to retrieve.
   * Format: transactions/{chain}/{signature}
   *
   * @generated from field: string transaction = 1;
   */
  transaction: string;

  constructor(data?: PartialMessage<GetTransactionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.GetTransactionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTransactionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTransactionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTransactionRequest;

  static equals(a: GetTransactionRequest | PlainMessage<GetTransactionRequest> | undefined, b: GetTransactionRequest | PlainMessage<GetTransactionRequest> | undefined): boolean;
}

/**
 * ListTransactionsRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 *
 * @generated from message piedotfun.v1.ListTransactionsRequest
 */
export declare class ListTransactionsRequest extends Message<ListTransactionsRequest> {
  /**
   * The maximum number of transactions to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListTransactions` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 2;
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
   *
   * @generated from field: string filter = 3;
   */
  filter: string;

  constructor(data?: PartialMessage<ListTransactionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListTransactionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTransactionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTransactionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTransactionsRequest;

  static equals(a: ListTransactionsRequest | PlainMessage<ListTransactionsRequest> | undefined, b: ListTransactionsRequest | PlainMessage<ListTransactionsRequest> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.ListTransactionsResponse
 */
export declare class ListTransactionsResponse extends Message<ListTransactionsResponse> {
  /**
   * @generated from field: repeated piedotfun.v1.Transaction transactions = 1;
   */
  transactions: Transaction[];

  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListTransactionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.ListTransactionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTransactionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTransactionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTransactionsResponse;

  static equals(a: ListTransactionsResponse | PlainMessage<ListTransactionsResponse> | undefined, b: ListTransactionsResponse | PlainMessage<ListTransactionsResponse> | undefined): boolean;
}

/**
 * @generated from message piedotfun.v1.Transaction
 */
export declare class Transaction extends Message<Transaction> {
  /**
   * Format : "transactions/{chain}/{signature}"
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: piedotfun.v1.ChainType chain = 2;
   */
  chain: ChainType;

  /**
   * @generated from field: string signature = 3;
   */
  signature: string;

  /**
   * @generated from field: string basket_token = 4;
   */
  basketToken: string;

  /**
   * @generated from field: string from = 5;
   */
  from: string;

  /**
   * @generated from field: string to = 6;
   */
  to: string;

  /**
   * @generated from field: piedotfun.v1.TransactionType type = 8;
   */
  type: TransactionType;

  /**
   * @generated from field: int64 quantity = 9;
   */
  quantity: bigint;

  /**
   * @generated from field: map<string, piedotfun.v1.Money> execution_price = 10;
   */
  executionPrice: { [key: string]: Money };

  /**
   * @generated from field: map<string, piedotfun.v1.Money> total_value = 11;
   */
  totalValue: { [key: string]: Money };

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 13;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Transaction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "piedotfun.v1.Transaction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;

  static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}


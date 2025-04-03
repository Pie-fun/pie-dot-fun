// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/transaction.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ChainType, chainTypeFromJSON, chainTypeToJSON, Money } from "./common";

export const protobufPackage = "piedotfun.v1";

export enum TransactionType {
  TRANSACTION_TYPE_UNSPECIFIED = 0,
  TRANSACTION_TYPE_MINT = 1,
  TRANSACTION_TYPE_TRANSFER = 2,
  TRANSACTION_TYPE_REDEEM = 3,
}

export function transactionTypeFromJSON(object: any): TransactionType {
  switch (object) {
    case 0:
    case "TRANSACTION_TYPE_UNSPECIFIED":
      return TransactionType.TRANSACTION_TYPE_UNSPECIFIED;
    case 1:
    case "TRANSACTION_TYPE_MINT":
      return TransactionType.TRANSACTION_TYPE_MINT;
    case 2:
    case "TRANSACTION_TYPE_TRANSFER":
      return TransactionType.TRANSACTION_TYPE_TRANSFER;
    case 3:
    case "TRANSACTION_TYPE_REDEEM":
      return TransactionType.TRANSACTION_TYPE_REDEEM;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TransactionType");
  }
}

export function transactionTypeToJSON(object: TransactionType): string {
  switch (object) {
    case TransactionType.TRANSACTION_TYPE_UNSPECIFIED:
      return "TRANSACTION_TYPE_UNSPECIFIED";
    case TransactionType.TRANSACTION_TYPE_MINT:
      return "TRANSACTION_TYPE_MINT";
    case TransactionType.TRANSACTION_TYPE_TRANSFER:
      return "TRANSACTION_TYPE_TRANSFER";
    case TransactionType.TRANSACTION_TYPE_REDEEM:
      return "TRANSACTION_TYPE_REDEEM";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum TransactionType");
  }
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

function createBaseGetTransactionRequest(): GetTransactionRequest {
  return { transaction: "" };
}

export const GetTransactionRequest = {
  encode(message: GetTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== "") {
      writer.uint32(10).string(message.transaction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transaction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTransactionRequest {
    return { transaction: isSet(object.transaction) ? globalThis.String(object.transaction) : "" };
  },

  toJSON(message: GetTransactionRequest): unknown {
    const obj: any = {};
    if (message.transaction !== undefined) {
      obj.transaction = message.transaction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTransactionRequest>, I>>(base?: I): GetTransactionRequest {
    return GetTransactionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTransactionRequest>, I>>(object: I): GetTransactionRequest {
    const message = createBaseGetTransactionRequest();
    message.transaction = object.transaction ?? "";
    return message;
  },
};

function createBaseListTransactionsRequest(): ListTransactionsRequest {
  return { pageSize: 0, pageToken: "", filter: "" };
}

export const ListTransactionsRequest = {
  encode(message: ListTransactionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransactionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTransactionsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListTransactionsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== undefined) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== undefined) {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== undefined) {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTransactionsRequest>, I>>(base?: I): ListTransactionsRequest {
    return ListTransactionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTransactionsRequest>, I>>(object: I): ListTransactionsRequest {
    const message = createBaseListTransactionsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListTransactionsResponse(): ListTransactionsResponse {
  return { transactions: [], nextPageToken: "" };
}

export const ListTransactionsResponse = {
  encode(message: ListTransactionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTransactionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTransactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTransactionsResponse {
    return {
      transactions: globalThis.Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListTransactionsResponse): unknown {
    const obj: any = {};
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => Transaction.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTransactionsResponse>, I>>(base?: I): ListTransactionsResponse {
    return ListTransactionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTransactionsResponse>, I>>(object: I): ListTransactionsResponse {
    const message = createBaseListTransactionsResponse();
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    name: "",
    chain: 0,
    signature: "",
    basketToken: "",
    from: "",
    to: "",
    type: 0,
    quantity: 0,
    executionPrice: {},
    totalValue: {},
    createTime: undefined,
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.chain !== 0) {
      writer.uint32(16).int32(message.chain);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    if (message.basketToken !== "") {
      writer.uint32(34).string(message.basketToken);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.type !== 0) {
      writer.uint32(64).int32(message.type);
    }
    if (message.quantity !== 0) {
      writer.uint32(72).int64(message.quantity);
    }
    Object.entries(message.executionPrice).forEach(([key, value]) => {
      Transaction_ExecutionPriceEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
    });
    Object.entries(message.totalValue).forEach(([key, value]) => {
      Transaction_TotalValueEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).ldelim();
    });
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chain = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.basketToken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.from = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.to = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = Transaction_ExecutionPriceEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.executionPrice[entry10.key] = entry10.value;
          }
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = Transaction_TotalValueEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.totalValue[entry11.key] = entry11.value;
          }
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      chain: isSet(object.chain) ? chainTypeFromJSON(object.chain) : 0,
      signature: isSet(object.signature) ? globalThis.String(object.signature) : "",
      basketToken: isSet(object.basketToken) ? globalThis.String(object.basketToken) : "",
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      type: isSet(object.type) ? transactionTypeFromJSON(object.type) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      executionPrice: isObject(object.executionPrice)
        ? Object.entries(object.executionPrice).reduce<{ [key: string]: Money }>((acc, [key, value]) => {
          acc[key] = Money.fromJSON(value);
          return acc;
        }, {})
        : {},
      totalValue: isObject(object.totalValue)
        ? Object.entries(object.totalValue).reduce<{ [key: string]: Money }>((acc, [key, value]) => {
          acc[key] = Money.fromJSON(value);
          return acc;
        }, {})
        : {},
      createTime: isSet(object.createTime) ? globalThis.String(object.createTime) : undefined,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.chain !== undefined) {
      obj.chain = chainTypeToJSON(message.chain);
    }
    if (message.signature !== undefined) {
      obj.signature = message.signature;
    }
    if (message.basketToken !== undefined) {
      obj.basketToken = message.basketToken;
    }
    if (message.from !== undefined) {
      obj.from = message.from;
    }
    if (message.to !== undefined) {
      obj.to = message.to;
    }
    if (message.type !== undefined) {
      obj.type = transactionTypeToJSON(message.type);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.executionPrice) {
      const entries = Object.entries(message.executionPrice);
      if (entries.length > 0) {
        obj.executionPrice = {};
        entries.forEach(([k, v]) => {
          obj.executionPrice[k] = Money.toJSON(v);
        });
      }
    }
    if (message.totalValue) {
      const entries = Object.entries(message.totalValue);
      if (entries.length > 0) {
        obj.totalValue = {};
        entries.forEach(([k, v]) => {
          obj.totalValue[k] = Money.toJSON(v);
        });
      }
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.name = object.name ?? "";
    message.chain = object.chain ?? 0;
    message.signature = object.signature ?? "";
    message.basketToken = object.basketToken ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.type = object.type ?? 0;
    message.quantity = object.quantity ?? 0;
    message.executionPrice = Object.entries(object.executionPrice ?? {}).reduce<{ [key: string]: Money }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Money.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.totalValue = Object.entries(object.totalValue ?? {}).reduce<{ [key: string]: Money }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Money.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.createTime = object.createTime ?? undefined;
    return message;
  },
};

function createBaseTransaction_ExecutionPriceEntry(): Transaction_ExecutionPriceEntry {
  return { key: "", value: undefined };
}

export const Transaction_ExecutionPriceEntry = {
  encode(message: Transaction_ExecutionPriceEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Money.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction_ExecutionPriceEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction_ExecutionPriceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Money.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction_ExecutionPriceEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Money.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Transaction_ExecutionPriceEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Money.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction_ExecutionPriceEntry>, I>>(base?: I): Transaction_ExecutionPriceEntry {
    return Transaction_ExecutionPriceEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction_ExecutionPriceEntry>, I>>(
    object: I,
  ): Transaction_ExecutionPriceEntry {
    const message = createBaseTransaction_ExecutionPriceEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Money.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseTransaction_TotalValueEntry(): Transaction_TotalValueEntry {
  return { key: "", value: undefined };
}

export const Transaction_TotalValueEntry = {
  encode(message: Transaction_TotalValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Money.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction_TotalValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction_TotalValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Money.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction_TotalValueEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Money.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Transaction_TotalValueEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Money.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction_TotalValueEntry>, I>>(base?: I): Transaction_TotalValueEntry {
    return Transaction_TotalValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction_TotalValueEntry>, I>>(object: I): Transaction_TotalValueEntry {
    const message = createBaseTransaction_TotalValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Money.fromPartial(object.value) : undefined;
    return message;
  },
};

/** TransactionService contains the function to interact with the Transaction of the spacebar */
export interface TransactionService {
  GetTransaction(request: GetTransactionRequest): Promise<Transaction>;
  ListTransactions(request: ListTransactionsRequest): Promise<ListTransactionsResponse>;
}

export const TransactionServiceServiceName = "piedotfun.v1.TransactionService";
export class TransactionServiceClientImpl implements TransactionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TransactionServiceServiceName;
    this.rpc = rpc;
    this.GetTransaction = this.GetTransaction.bind(this);
    this.ListTransactions = this.ListTransactions.bind(this);
  }
  GetTransaction(request: GetTransactionRequest): Promise<Transaction> {
    const data = GetTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTransaction", data);
    return promise.then((data) => Transaction.decode(_m0.Reader.create(data)));
  }

  ListTransactions(request: ListTransactionsRequest): Promise<ListTransactionsResponse> {
    const data = ListTransactionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListTransactions", data);
    return promise.then((data) => ListTransactionsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(dateStr: string): Timestamp {
  const date = new globalThis.Date(dateStr);
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis).toISOString();
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

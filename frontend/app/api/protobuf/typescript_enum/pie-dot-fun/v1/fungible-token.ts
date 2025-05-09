// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/fungible-token.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ChainType, chainTypeFromJSON, chainTypeToJSON, SNS } from "./common";

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

function createBaseGetFungibleTokenRequest(): GetFungibleTokenRequest {
  return { fungibleToken: "" };
}

export const GetFungibleTokenRequest = {
  encode(message: GetFungibleTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fungibleToken !== "") {
      writer.uint32(10).string(message.fungibleToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFungibleTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFungibleTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fungibleToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFungibleTokenRequest {
    return { fungibleToken: isSet(object.fungibleToken) ? globalThis.String(object.fungibleToken) : "" };
  },

  toJSON(message: GetFungibleTokenRequest): unknown {
    const obj: any = {};
    if (message.fungibleToken !== undefined) {
      obj.fungibleToken = message.fungibleToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFungibleTokenRequest>, I>>(base?: I): GetFungibleTokenRequest {
    return GetFungibleTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFungibleTokenRequest>, I>>(object: I): GetFungibleTokenRequest {
    const message = createBaseGetFungibleTokenRequest();
    message.fungibleToken = object.fungibleToken ?? "";
    return message;
  },
};

function createBaseListFungibleTokensRequest(): ListFungibleTokensRequest {
  return { pageSize: 0, pageToken: "", filter: "", orderBy: "" };
}

export const ListFungibleTokensRequest = {
  encode(message: ListFungibleTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(34).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFungibleTokensRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFungibleTokensRequest();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFungibleTokensRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListFungibleTokensRequest): unknown {
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
    if (message.orderBy !== undefined) {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFungibleTokensRequest>, I>>(base?: I): ListFungibleTokensRequest {
    return ListFungibleTokensRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFungibleTokensRequest>, I>>(object: I): ListFungibleTokensRequest {
    const message = createBaseListFungibleTokensRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

function createBaseListFungibleTokensResponse(): ListFungibleTokensResponse {
  return { fungibleTokens: [], nextPageToken: "" };
}

export const ListFungibleTokensResponse = {
  encode(message: ListFungibleTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fungibleTokens) {
      FungibleToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFungibleTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFungibleTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fungibleTokens.push(FungibleToken.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFungibleTokensResponse {
    return {
      fungibleTokens: globalThis.Array.isArray(object?.fungibleTokens)
        ? object.fungibleTokens.map((e: any) => FungibleToken.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListFungibleTokensResponse): unknown {
    const obj: any = {};
    if (message.fungibleTokens?.length) {
      obj.fungibleTokens = message.fungibleTokens.map((e) => FungibleToken.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFungibleTokensResponse>, I>>(base?: I): ListFungibleTokensResponse {
    return ListFungibleTokensResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFungibleTokensResponse>, I>>(object: I): ListFungibleTokensResponse {
    const message = createBaseListFungibleTokensResponse();
    message.fungibleTokens = object.fungibleTokens?.map((e) => FungibleToken.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseFungibleToken(): FungibleToken {
  return { name: "", chain: 0, address: "", displayName: "", symbol: "", iconImageUrl: "", decimals: 0, sns: [] };
}

export const FungibleToken = {
  encode(message: FungibleToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.chain !== 0) {
      writer.uint32(16).int32(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.iconImageUrl !== "") {
      writer.uint32(50).string(message.iconImageUrl);
    }
    if (message.decimals !== 0) {
      writer.uint32(56).int32(message.decimals);
    }
    for (const v of message.sns) {
      SNS.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FungibleToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleToken();
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

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.iconImageUrl = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.decimals = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sns.push(SNS.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FungibleToken {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      chain: isSet(object.chain) ? chainTypeFromJSON(object.chain) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      symbol: isSet(object.symbol) ? globalThis.String(object.symbol) : "",
      iconImageUrl: isSet(object.iconImageUrl) ? globalThis.String(object.iconImageUrl) : "",
      decimals: isSet(object.decimals) ? globalThis.Number(object.decimals) : 0,
      sns: globalThis.Array.isArray(object?.sns) ? object.sns.map((e: any) => SNS.fromJSON(e)) : [],
    };
  },

  toJSON(message: FungibleToken): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.chain !== undefined) {
      obj.chain = chainTypeToJSON(message.chain);
    }
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.symbol !== undefined) {
      obj.symbol = message.symbol;
    }
    if (message.iconImageUrl !== undefined) {
      obj.iconImageUrl = message.iconImageUrl;
    }
    if (message.decimals !== undefined) {
      obj.decimals = Math.round(message.decimals);
    }
    if (message.sns?.length) {
      obj.sns = message.sns.map((e) => SNS.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FungibleToken>, I>>(base?: I): FungibleToken {
    return FungibleToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FungibleToken>, I>>(object: I): FungibleToken {
    const message = createBaseFungibleToken();
    message.name = object.name ?? "";
    message.chain = object.chain ?? 0;
    message.address = object.address ?? "";
    message.displayName = object.displayName ?? "";
    message.symbol = object.symbol ?? "";
    message.iconImageUrl = object.iconImageUrl ?? "";
    message.decimals = object.decimals ?? 0;
    message.sns = object.sns?.map((e) => SNS.fromPartial(e)) || [];
    return message;
  },
};

/** FungibleTokenService contains the function to interact with the FungibleToken of the spacebar */
export interface FungibleTokenService {
  GetFungibleToken(request: GetFungibleTokenRequest): Promise<FungibleToken>;
  ListFungibleTokens(request: ListFungibleTokensRequest): Promise<ListFungibleTokensResponse>;
}

export const FungibleTokenServiceServiceName = "piedotfun.v1.FungibleTokenService";
export class FungibleTokenServiceClientImpl implements FungibleTokenService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || FungibleTokenServiceServiceName;
    this.rpc = rpc;
    this.GetFungibleToken = this.GetFungibleToken.bind(this);
    this.ListFungibleTokens = this.ListFungibleTokens.bind(this);
  }
  GetFungibleToken(request: GetFungibleTokenRequest): Promise<FungibleToken> {
    const data = GetFungibleTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFungibleToken", data);
    return promise.then((data) => FungibleToken.decode(_m0.Reader.create(data)));
  }

  ListFungibleTokens(request: ListFungibleTokensRequest): Promise<ListFungibleTokensResponse> {
    const data = ListFungibleTokensRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListFungibleTokens", data);
    return promise.then((data) => ListFungibleTokensResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

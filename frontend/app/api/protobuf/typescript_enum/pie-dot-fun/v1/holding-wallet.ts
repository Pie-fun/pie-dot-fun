// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/holding-wallet.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { VMType, vMTypeFromJSON, vMTypeToJSON } from "./common";

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

function createBaseGetHoldingWalletRequest(): GetHoldingWalletRequest {
  return { holdingWallet: "" };
}

export const GetHoldingWalletRequest = {
  encode(message: GetHoldingWalletRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holdingWallet !== "") {
      writer.uint32(10).string(message.holdingWallet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHoldingWalletRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHoldingWalletRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.holdingWallet = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHoldingWalletRequest {
    return { holdingWallet: isSet(object.holdingWallet) ? globalThis.String(object.holdingWallet) : "" };
  },

  toJSON(message: GetHoldingWalletRequest): unknown {
    const obj: any = {};
    if (message.holdingWallet !== undefined) {
      obj.holdingWallet = message.holdingWallet;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetHoldingWalletRequest>, I>>(base?: I): GetHoldingWalletRequest {
    return GetHoldingWalletRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHoldingWalletRequest>, I>>(object: I): GetHoldingWalletRequest {
    const message = createBaseGetHoldingWalletRequest();
    message.holdingWallet = object.holdingWallet ?? "";
    return message;
  },
};

function createBaseListHoldingWalletsRequest(): ListHoldingWalletsRequest {
  return { pageSize: 0, pageToken: "", filter: "" };
}

export const ListHoldingWalletsRequest = {
  encode(message: ListHoldingWalletsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHoldingWalletsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHoldingWalletsRequest();
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

  fromJSON(object: any): ListHoldingWalletsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListHoldingWalletsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListHoldingWalletsRequest>, I>>(base?: I): ListHoldingWalletsRequest {
    return ListHoldingWalletsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHoldingWalletsRequest>, I>>(object: I): ListHoldingWalletsRequest {
    const message = createBaseListHoldingWalletsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListHoldingWalletsResponse(): ListHoldingWalletsResponse {
  return { holdingWallets: [], nextPageToken: "" };
}

export const ListHoldingWalletsResponse = {
  encode(message: ListHoldingWalletsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.holdingWallets) {
      HoldingWallet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListHoldingWalletsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListHoldingWalletsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.holdingWallets.push(HoldingWallet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHoldingWalletsResponse {
    return {
      holdingWallets: globalThis.Array.isArray(object?.holdingWallets)
        ? object.holdingWallets.map((e: any) => HoldingWallet.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListHoldingWalletsResponse): unknown {
    const obj: any = {};
    if (message.holdingWallets?.length) {
      obj.holdingWallets = message.holdingWallets.map((e) => HoldingWallet.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListHoldingWalletsResponse>, I>>(base?: I): ListHoldingWalletsResponse {
    return ListHoldingWalletsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListHoldingWalletsResponse>, I>>(object: I): ListHoldingWalletsResponse {
    const message = createBaseListHoldingWalletsResponse();
    message.holdingWallets = object.holdingWallets?.map((e) => HoldingWallet.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseHoldingWallet(): HoldingWallet {
  return { name: "", vmType: 0, address: "", user: undefined };
}

export const HoldingWallet = {
  encode(message: HoldingWallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.vmType !== 0) {
      writer.uint32(16).int32(message.vmType);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.user !== undefined) {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HoldingWallet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHoldingWallet();
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

          message.vmType = reader.int32() as any;
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

          message.user = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HoldingWallet {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      vmType: isSet(object.vmType) ? vMTypeFromJSON(object.vmType) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : undefined,
    };
  },

  toJSON(message: HoldingWallet): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.vmType !== undefined) {
      obj.vmType = vMTypeToJSON(message.vmType);
    }
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.user !== undefined) {
      obj.user = message.user;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HoldingWallet>, I>>(base?: I): HoldingWallet {
    return HoldingWallet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HoldingWallet>, I>>(object: I): HoldingWallet {
    const message = createBaseHoldingWallet();
    message.name = object.name ?? "";
    message.vmType = object.vmType ?? 0;
    message.address = object.address ?? "";
    message.user = object.user ?? undefined;
    return message;
  },
};

/** HoldingWalletService contains the function to interact with the HoldingWallet of the spacebar */
export interface HoldingWalletService {
  GetHoldingWallet(request: GetHoldingWalletRequest): Promise<HoldingWallet>;
  ListHoldingWallets(request: ListHoldingWalletsRequest): Promise<ListHoldingWalletsResponse>;
}

export const HoldingWalletServiceServiceName = "piedotfun.v1.HoldingWalletService";
export class HoldingWalletServiceClientImpl implements HoldingWalletService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || HoldingWalletServiceServiceName;
    this.rpc = rpc;
    this.GetHoldingWallet = this.GetHoldingWallet.bind(this);
    this.ListHoldingWallets = this.ListHoldingWallets.bind(this);
  }
  GetHoldingWallet(request: GetHoldingWalletRequest): Promise<HoldingWallet> {
    const data = GetHoldingWalletRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHoldingWallet", data);
    return promise.then((data) => HoldingWallet.decode(_m0.Reader.create(data)));
  }

  ListHoldingWallets(request: ListHoldingWalletsRequest): Promise<ListHoldingWalletsResponse> {
    const data = ListHoldingWalletsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListHoldingWallets", data);
    return promise.then((data) => ListHoldingWalletsResponse.decode(_m0.Reader.create(data)));
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

// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/staking/staking.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blast.v1.staking";

export enum StakingCurrency {
  /** CURRENCY_UNSPECIFIED - default value. this value is unused. */
  CURRENCY_UNSPECIFIED = "CURRENCY_UNSPECIFIED",
  ETH = "ETH",
}

export function stakingCurrencyFromJSON(object: any): StakingCurrency {
  switch (object) {
    case 0:
    case "CURRENCY_UNSPECIFIED":
      return StakingCurrency.CURRENCY_UNSPECIFIED;
    case 1:
    case "ETH":
      return StakingCurrency.ETH;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingCurrency");
  }
}

export function stakingCurrencyToJSON(object: StakingCurrency): string {
  switch (object) {
    case StakingCurrency.CURRENCY_UNSPECIFIED:
      return "CURRENCY_UNSPECIFIED";
    case StakingCurrency.ETH:
      return "ETH";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingCurrency");
  }
}

export function stakingCurrencyToNumber(object: StakingCurrency): number {
  switch (object) {
    case StakingCurrency.CURRENCY_UNSPECIFIED:
      return 0;
    case StakingCurrency.ETH:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingCurrency");
  }
}

/** The state of staking */
export enum StakingState {
  /** STATE_UNSPECIFIED - default value. this value is unused. */
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  /** ACTIVE -  */
  ACTIVE = "ACTIVE",
  /** INACTIVE -  */
  INACTIVE = "INACTIVE",
}

export function stakingStateFromJSON(object: any): StakingState {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return StakingState.STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return StakingState.ACTIVE;
    case 2:
    case "INACTIVE":
      return StakingState.INACTIVE;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingState");
  }
}

export function stakingStateToJSON(object: StakingState): string {
  switch (object) {
    case StakingState.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case StakingState.ACTIVE:
      return "ACTIVE";
    case StakingState.INACTIVE:
      return "INACTIVE";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingState");
  }
}

export function stakingStateToNumber(object: StakingState): number {
  switch (object) {
    case StakingState.STATE_UNSPECIFIED:
      return 0;
    case StakingState.ACTIVE:
      return 1;
    case StakingState.INACTIVE:
      return 2;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum StakingState");
  }
}

export interface GetStakingRequest {
  /**
   * The name of the staking to retrieve.
   * Format: users/{user_address}/stakings
   */
  staking: string;
}

/**
 * ListStakingsRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListStakingsRequest {
  /**
   * The maximum number of points to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListStakings` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * user_address
   *   * Equal`
   *
   * Examples
   * * name="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/stakings"
   * * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   */
  filter: string;
}

/**
 * ListStakingsResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListStakingsResponse {
  /** The list of rows that matched the query. */
  stakings: Staking[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface GetStakingTotalAmountRequest {
}

export interface GetStakingTotalAmountResponse {
  /** The total amount of the staking. */
  totalAmount: number;
}

export interface Staking {
  /**
   * The resource name of the Staking.
   * Format: users/{user_address}/stakings
   */
  name: string;
  /**  */
  userAddress: string;
  /**  */
  currency: StakingCurrency;
  /**  */
  amount: number;
  /**  */
  state: StakingState;
}

function createBaseGetStakingRequest(): GetStakingRequest {
  return { staking: "" };
}

export const GetStakingRequest = {
  encode(message: GetStakingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staking = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStakingRequest {
    return { staking: isSet(object.staking) ? globalThis.String(object.staking) : "" };
  },

  toJSON(message: GetStakingRequest): unknown {
    const obj: any = {};
    if (message.staking !== undefined) {
      obj.staking = message.staking;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStakingRequest>, I>>(base?: I): GetStakingRequest {
    return GetStakingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStakingRequest>, I>>(object: I): GetStakingRequest {
    const message = createBaseGetStakingRequest();
    message.staking = object.staking ?? "";
    return message;
  },
};

function createBaseListStakingsRequest(): ListStakingsRequest {
  return { pageSize: 0, pageToken: "", filter: "" };
}

export const ListStakingsRequest = {
  encode(message: ListStakingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStakingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStakingsRequest();
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

  fromJSON(object: any): ListStakingsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListStakingsRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListStakingsRequest>, I>>(base?: I): ListStakingsRequest {
    return ListStakingsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListStakingsRequest>, I>>(object: I): ListStakingsRequest {
    const message = createBaseListStakingsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListStakingsResponse(): ListStakingsResponse {
  return { stakings: [], nextPageToken: "" };
}

export const ListStakingsResponse = {
  encode(message: ListStakingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakings) {
      Staking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListStakingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStakingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakings.push(Staking.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListStakingsResponse {
    return {
      stakings: globalThis.Array.isArray(object?.stakings) ? object.stakings.map((e: any) => Staking.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListStakingsResponse): unknown {
    const obj: any = {};
    if (message.stakings?.length) {
      obj.stakings = message.stakings.map((e) => Staking.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListStakingsResponse>, I>>(base?: I): ListStakingsResponse {
    return ListStakingsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListStakingsResponse>, I>>(object: I): ListStakingsResponse {
    const message = createBaseListStakingsResponse();
    message.stakings = object.stakings?.map((e) => Staking.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetStakingTotalAmountRequest(): GetStakingTotalAmountRequest {
  return {};
}

export const GetStakingTotalAmountRequest = {
  encode(_: GetStakingTotalAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakingTotalAmountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingTotalAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetStakingTotalAmountRequest {
    return {};
  },

  toJSON(_: GetStakingTotalAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStakingTotalAmountRequest>, I>>(base?: I): GetStakingTotalAmountRequest {
    return GetStakingTotalAmountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStakingTotalAmountRequest>, I>>(_: I): GetStakingTotalAmountRequest {
    const message = createBaseGetStakingTotalAmountRequest();
    return message;
  },
};

function createBaseGetStakingTotalAmountResponse(): GetStakingTotalAmountResponse {
  return { totalAmount: 0 };
}

export const GetStakingTotalAmountResponse = {
  encode(message: GetStakingTotalAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalAmount !== 0) {
      writer.uint32(13).float(message.totalAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakingTotalAmountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingTotalAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.totalAmount = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStakingTotalAmountResponse {
    return { totalAmount: isSet(object.totalAmount) ? globalThis.Number(object.totalAmount) : 0 };
  },

  toJSON(message: GetStakingTotalAmountResponse): unknown {
    const obj: any = {};
    if (message.totalAmount !== undefined) {
      obj.totalAmount = message.totalAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStakingTotalAmountResponse>, I>>(base?: I): GetStakingTotalAmountResponse {
    return GetStakingTotalAmountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStakingTotalAmountResponse>, I>>(
    object: I,
  ): GetStakingTotalAmountResponse {
    const message = createBaseGetStakingTotalAmountResponse();
    message.totalAmount = object.totalAmount ?? 0;
    return message;
  },
};

function createBaseStaking(): Staking {
  return {
    name: "",
    userAddress: "",
    currency: StakingCurrency.CURRENCY_UNSPECIFIED,
    amount: 0,
    state: StakingState.STATE_UNSPECIFIED,
  };
}

export const Staking = {
  encode(message: Staking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    if (message.currency !== StakingCurrency.CURRENCY_UNSPECIFIED) {
      writer.uint32(32).int32(stakingCurrencyToNumber(message.currency));
    }
    if (message.amount !== 0) {
      writer.uint32(45).float(message.amount);
    }
    if (message.state !== StakingState.STATE_UNSPECIFIED) {
      writer.uint32(48).int32(stakingStateToNumber(message.state));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staking {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaking();
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
          if (tag !== 18) {
            break;
          }

          message.userAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.currency = stakingCurrencyFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = stakingStateFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Staking {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      userAddress: isSet(object.userAddress) ? globalThis.String(object.userAddress) : "",
      currency: isSet(object.currency)
        ? stakingCurrencyFromJSON(object.currency)
        : StakingCurrency.CURRENCY_UNSPECIFIED,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      state: isSet(object.state) ? stakingStateFromJSON(object.state) : StakingState.STATE_UNSPECIFIED,
    };
  },

  toJSON(message: Staking): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.userAddress !== undefined) {
      obj.userAddress = message.userAddress;
    }
    if (message.currency !== undefined) {
      obj.currency = stakingCurrencyToJSON(message.currency);
    }
    if (message.amount !== undefined) {
      obj.amount = message.amount;
    }
    if (message.state !== undefined) {
      obj.state = stakingStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Staking>, I>>(base?: I): Staking {
    return Staking.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Staking>, I>>(object: I): Staking {
    const message = createBaseStaking();
    message.name = object.name ?? "";
    message.userAddress = object.userAddress ?? "";
    message.currency = object.currency ?? StakingCurrency.CURRENCY_UNSPECIFIED;
    message.amount = object.amount ?? 0;
    message.state = object.state ?? StakingState.STATE_UNSPECIFIED;
    return message;
  },
};

/** StakingService contains the function to interact with the Staking of the spacebar */
export interface StakingService {
  /** GetStaking will return Staking. */
  GetStaking(request: GetStakingRequest): Promise<Staking>;
  /**
   * ListStakings will return Stakings.
   * reads across collections, reference: https://google.aip.dev/159
   */
  ListStakings(request: ListStakingsRequest): Promise<ListStakingsResponse>;
  /** GetStakingTotalAmount will return total amount of all user's staking. */
  GetStakingTotalAmount(request: GetStakingTotalAmountRequest): Promise<GetStakingTotalAmountResponse>;
}

export const StakingServiceServiceName = "blast.v1.staking.StakingService";
export class StakingServiceClientImpl implements StakingService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || StakingServiceServiceName;
    this.rpc = rpc;
    this.GetStaking = this.GetStaking.bind(this);
    this.ListStakings = this.ListStakings.bind(this);
    this.GetStakingTotalAmount = this.GetStakingTotalAmount.bind(this);
  }
  GetStaking(request: GetStakingRequest): Promise<Staking> {
    const data = GetStakingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStaking", data);
    return promise.then((data) => Staking.decode(_m0.Reader.create(data)));
  }

  ListStakings(request: ListStakingsRequest): Promise<ListStakingsResponse> {
    const data = ListStakingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListStakings", data);
    return promise.then((data) => ListStakingsResponse.decode(_m0.Reader.create(data)));
  }

  GetStakingTotalAmount(request: GetStakingTotalAmountRequest): Promise<GetStakingTotalAmountResponse> {
    const data = GetStakingTotalAmountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStakingTotalAmount", data);
    return promise.then((data) => GetStakingTotalAmountResponse.decode(_m0.Reader.create(data)));
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

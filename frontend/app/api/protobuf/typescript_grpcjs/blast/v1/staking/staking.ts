// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: blast/v1/staking/staking.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

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

export const GetStakingRequest: MessageFns<GetStakingRequest> = {
  encode(message: GetStakingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetStakingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.staking = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

export const ListStakingsRequest: MessageFns<ListStakingsRequest> = {
  encode(message: ListStakingsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ListStakingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStakingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

export const ListStakingsResponse: MessageFns<ListStakingsResponse> = {
  encode(message: ListStakingsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.stakings) {
      Staking.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListStakingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListStakingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.stakings.push(Staking.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

export const GetStakingTotalAmountRequest: MessageFns<GetStakingTotalAmountRequest> = {
  encode(_: GetStakingTotalAmountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetStakingTotalAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingTotalAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

export const GetStakingTotalAmountResponse: MessageFns<GetStakingTotalAmountResponse> = {
  encode(message: GetStakingTotalAmountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.totalAmount !== 0) {
      writer.uint32(13).float(message.totalAmount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetStakingTotalAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakingTotalAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.totalAmount = reader.float();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

export const Staking: MessageFns<Staking> = {
  encode(message: Staking, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): Staking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.userAddress = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.currency = stakingCurrencyFromJSON(reader.int32());
          continue;
        }
        case 5: {
          if (tag !== 45) {
            break;
          }

          message.amount = reader.float();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.state = stakingStateFromJSON(reader.int32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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
export type StakingServiceService = typeof StakingServiceService;
export const StakingServiceService = {
  /** GetStaking will return Staking. */
  getStaking: {
    path: "/blast.v1.staking.StakingService/GetStaking",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStakingRequest) => Buffer.from(GetStakingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStakingRequest.decode(value),
    responseSerialize: (value: Staking) => Buffer.from(Staking.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Staking.decode(value),
  },
  /**
   * ListStakings will return Stakings.
   * reads across collections, reference: https://google.aip.dev/159
   */
  listStakings: {
    path: "/blast.v1.staking.StakingService/ListStakings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListStakingsRequest) => Buffer.from(ListStakingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListStakingsRequest.decode(value),
    responseSerialize: (value: ListStakingsResponse) => Buffer.from(ListStakingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListStakingsResponse.decode(value),
  },
  /** GetStakingTotalAmount will return total amount of all user's staking. */
  getStakingTotalAmount: {
    path: "/blast.v1.staking.StakingService/GetStakingTotalAmount",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStakingTotalAmountRequest) =>
      Buffer.from(GetStakingTotalAmountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStakingTotalAmountRequest.decode(value),
    responseSerialize: (value: GetStakingTotalAmountResponse) =>
      Buffer.from(GetStakingTotalAmountResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStakingTotalAmountResponse.decode(value),
  },
} as const;

export interface StakingServiceServer extends UntypedServiceImplementation {
  /** GetStaking will return Staking. */
  getStaking: handleUnaryCall<GetStakingRequest, Staking>;
  /**
   * ListStakings will return Stakings.
   * reads across collections, reference: https://google.aip.dev/159
   */
  listStakings: handleUnaryCall<ListStakingsRequest, ListStakingsResponse>;
  /** GetStakingTotalAmount will return total amount of all user's staking. */
  getStakingTotalAmount: handleUnaryCall<GetStakingTotalAmountRequest, GetStakingTotalAmountResponse>;
}

export interface StakingServiceClient extends Client {
  /** GetStaking will return Staking. */
  getStaking(
    request: GetStakingRequest,
    callback: (error: ServiceError | null, response: Staking) => void,
  ): ClientUnaryCall;
  getStaking(
    request: GetStakingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Staking) => void,
  ): ClientUnaryCall;
  getStaking(
    request: GetStakingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Staking) => void,
  ): ClientUnaryCall;
  /**
   * ListStakings will return Stakings.
   * reads across collections, reference: https://google.aip.dev/159
   */
  listStakings(
    request: ListStakingsRequest,
    callback: (error: ServiceError | null, response: ListStakingsResponse) => void,
  ): ClientUnaryCall;
  listStakings(
    request: ListStakingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListStakingsResponse) => void,
  ): ClientUnaryCall;
  listStakings(
    request: ListStakingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListStakingsResponse) => void,
  ): ClientUnaryCall;
  /** GetStakingTotalAmount will return total amount of all user's staking. */
  getStakingTotalAmount(
    request: GetStakingTotalAmountRequest,
    callback: (error: ServiceError | null, response: GetStakingTotalAmountResponse) => void,
  ): ClientUnaryCall;
  getStakingTotalAmount(
    request: GetStakingTotalAmountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetStakingTotalAmountResponse) => void,
  ): ClientUnaryCall;
  getStakingTotalAmount(
    request: GetStakingTotalAmountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetStakingTotalAmountResponse) => void,
  ): ClientUnaryCall;
}

export const StakingServiceClient = makeGenericClientConstructor(
  StakingServiceService,
  "blast.v1.staking.StakingService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): StakingServiceClient;
  service: typeof StakingServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}

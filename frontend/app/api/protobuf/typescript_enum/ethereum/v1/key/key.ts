// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: ethereum/v1/key/key.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "ethereum.v1.key";

/** The state of key */
export enum State {
  /** STATE_UNSPECIFIED - default value. this value is unused. */
  STATE_UNSPECIFIED = 0,
  /** CREATED - Key was firstly created but not minted yet. */
  CREATED = 1,
  /** MINTED - Key was firstly created with base spaceship rental. */
  MINTED = 2,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return State.STATE_UNSPECIFIED;
    case 1:
    case "CREATED":
      return State.CREATED;
    case 2:
    case "MINTED":
      return State.MINTED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum State");
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case State.CREATED:
      return "CREATED";
    case State.MINTED:
      return "MINTED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum State");
  }
}

export enum PrimaryType {
  /** PRIMARY_TYPE_UNSPECIFIED - default value. this value is unused. */
  PRIMARY_TYPE_UNSPECIFIED = 0,
  /** W_KEY - Whitelist. */
  W_KEY = 1,
  /** G_KEY - Star Gatherer */
  G_KEY = 2,
  /** A_KEY - Doodle Artist */
  A_KEY = 3,
  /** H_KEY - Star Hunter */
  H_KEY = 4,
  /** R_KEY - Top Ranker */
  R_KEY = 5,
}

export function primaryTypeFromJSON(object: any): PrimaryType {
  switch (object) {
    case 0:
    case "PRIMARY_TYPE_UNSPECIFIED":
      return PrimaryType.PRIMARY_TYPE_UNSPECIFIED;
    case 1:
    case "W_KEY":
      return PrimaryType.W_KEY;
    case 2:
    case "G_KEY":
      return PrimaryType.G_KEY;
    case 3:
    case "A_KEY":
      return PrimaryType.A_KEY;
    case 4:
    case "H_KEY":
      return PrimaryType.H_KEY;
    case 5:
    case "R_KEY":
      return PrimaryType.R_KEY;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PrimaryType");
  }
}

export function primaryTypeToJSON(object: PrimaryType): string {
  switch (object) {
    case PrimaryType.PRIMARY_TYPE_UNSPECIFIED:
      return "PRIMARY_TYPE_UNSPECIFIED";
    case PrimaryType.W_KEY:
      return "W_KEY";
    case PrimaryType.G_KEY:
      return "G_KEY";
    case PrimaryType.A_KEY:
      return "A_KEY";
    case PrimaryType.H_KEY:
      return "H_KEY";
    case PrimaryType.R_KEY:
      return "R_KEY";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PrimaryType");
  }
}

export enum SecondaryType {
  SECONDARY_TYPE_UNSPECIFIED = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
  TIER_4 = 4,
  TIER_5 = 5,
}

export function secondaryTypeFromJSON(object: any): SecondaryType {
  switch (object) {
    case 0:
    case "SECONDARY_TYPE_UNSPECIFIED":
      return SecondaryType.SECONDARY_TYPE_UNSPECIFIED;
    case 1:
    case "TIER_1":
      return SecondaryType.TIER_1;
    case 2:
    case "TIER_2":
      return SecondaryType.TIER_2;
    case 3:
    case "TIER_3":
      return SecondaryType.TIER_3;
    case 4:
    case "TIER_4":
      return SecondaryType.TIER_4;
    case 5:
    case "TIER_5":
      return SecondaryType.TIER_5;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecondaryType");
  }
}

export function secondaryTypeToJSON(object: SecondaryType): string {
  switch (object) {
    case SecondaryType.SECONDARY_TYPE_UNSPECIFIED:
      return "SECONDARY_TYPE_UNSPECIFIED";
    case SecondaryType.TIER_1:
      return "TIER_1";
    case SecondaryType.TIER_2:
      return "TIER_2";
    case SecondaryType.TIER_3:
      return "TIER_3";
    case SecondaryType.TIER_4:
      return "TIER_4";
    case SecondaryType.TIER_5:
      return "TIER_5";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecondaryType");
  }
}

/**
 * ListKeysRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListKeysRequest {
  /**
   * The name of the profile.
   * Format: profiles/{address}
   * Wildcard "profiles/*" is supported.
   */
  profile: string;
  /**
   * The maximum number of keys to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListKeys` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * owner, profile
   *   * `=`
   * * state
   *   * `=`
   * * primary_type
   *   * `=`
   * * secondary_type
   *   * `=`
   * * create_time
   *   * `>`
   * * minted
   *   * Equal`
   *
   * Examples
   * * filter=name="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/keys/0x79FCDEF22feeD20eDDacbB2587640e45491b757f"
   * * filter=owner="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * filter=profile="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * filter=state=CREATED
   * * filter=primary_tupe=A_KEY
   * * filter=minted
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
   * * "owner_address", "primary_type", "secondary_type", "token_id", "create_time", "mint_time"
   *
   * Examples
   * * order_by=mint_time asc
   * * order_by=primary_type asc, secondary_type asc
   * * order_by=token_id asc
   */
  orderBy: string;
}

/**
 * ListKeysResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListKeysResponse {
  /** The list of rows that matched the query. */
  keys: Key[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
  /** The total number of keys that matched with the filter query. */
  totalSize: number;
}

export interface ListKeyVOsRequest {
  /**
   * Available Sequence and Operator
   * * primary_type
   *   * `=`
   * * secondary_type
   *   * `=`
   *
   * Examples
   * * primary_tupe="S_KEY"
   * * secondary_type="TIER_1"
   */
  filter: string;
}

export interface ListKeyVOsResponse {
  /** The list of rows that matched the query. */
  keyValueObjects: KeyVO[];
}

/** CreateKeyVORequest */
export interface CreateKeyVORequest {
  /** score to create */
  keyVo: KeyVO | undefined;
}

export interface Key {
  /**
   * The resource name of the Key.
   * Format: profiles/{profile_address}/keys/{key_address}
   */
  name: string;
  /** EIP-6551 TBA Address of the Key. */
  address: string;
  /**
   * The owner of Key.
   * Format: profiles/{address}
   */
  owner: string;
  /** The state of Key */
  state: State;
  /**
   * The created time of Key.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime:
    | string
    | undefined;
  /**
   * The minted time of Key.
   * This field is only set when Key is minted. (optional)
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  mintTime?:
    | string
    | undefined;
  /**
   * The transaction hash for minting key.
   * This field is only set when Key is minted. (optional)
   */
  mintTxHash?:
    | string
    | undefined;
  /**
   * The amount of Eth Contribution (nominated as wei)
   * This field is only set when Key is minted. (optional)
   */
  ethContribution?:
    | string
    | undefined;
  /** Whether Key finished tutorial or not */
  isMinted: boolean;
  /** Key value object */
  vo: KeyVO | undefined;
}

export interface KeyVO {
  /** EIP-6551 TBA Address of the Key VO. */
  address: string;
  /**
   * Token ID of the Key VO.
   * Output only.
   */
  tokenId: string;
  /**
   * The primary type of the Key VO.
   * Output only.
   */
  primaryType: PrimaryType;
  /**
   * The secondary type of the Key VO.
   * Output only.
   */
  secondaryType: SecondaryType;
  /**
   * The cached URI of the Key VO's image.
   * Output only.
   */
  cachedImageUri: string;
  /**
   * The original URI of the Key VO's image.
   * e.g. ipfs://Qm...
   * Output only.
   */
  originalImageUri: string;
  /**
   * The URI of the Key VO's image.
   * Output only.
   */
  metadataUri: string;
  /**
   * The contract that owns the Key VO.
   * Output only.
   */
  contractAddress: string;
}

function createBaseListKeysRequest(): ListKeysRequest {
  return { profile: "", pageSize: 0, pageToken: "", filter: "", orderBy: "" };
}

export const ListKeysRequest = {
  encode(message: ListKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== "") {
      writer.uint32(10).string(message.profile);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListKeysRequest {
    return {
      profile: isSet(object.profile) ? globalThis.String(object.profile) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListKeysRequest): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = message.profile;
    }
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

  create<I extends Exact<DeepPartial<ListKeysRequest>, I>>(base?: I): ListKeysRequest {
    return ListKeysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeysRequest>, I>>(object: I): ListKeysRequest {
    const message = createBaseListKeysRequest();
    message.profile = object.profile ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

function createBaseListKeysResponse(): ListKeysResponse {
  return { keys: [], nextPageToken: "", totalSize: 0 };
}

export const ListKeysResponse = {
  encode(message: ListKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).uint32(message.totalSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(Key.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSize = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListKeysResponse {
    return {
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Key.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListKeysResponse): unknown {
    const obj: any = {};
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => Key.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== undefined) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListKeysResponse>, I>>(base?: I): ListKeysResponse {
    return ListKeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeysResponse>, I>>(object: I): ListKeysResponse {
    const message = createBaseListKeysResponse();
    message.keys = object.keys?.map((e) => Key.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

function createBaseListKeyVOsRequest(): ListKeyVOsRequest {
  return { filter: "" };
}

export const ListKeyVOsRequest = {
  encode(message: ListKeyVOsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyVOsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyVOsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): ListKeyVOsRequest {
    return { filter: isSet(object.filter) ? globalThis.String(object.filter) : "" };
  },

  toJSON(message: ListKeyVOsRequest): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListKeyVOsRequest>, I>>(base?: I): ListKeyVOsRequest {
    return ListKeyVOsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeyVOsRequest>, I>>(object: I): ListKeyVOsRequest {
    const message = createBaseListKeyVOsRequest();
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListKeyVOsResponse(): ListKeyVOsResponse {
  return { keyValueObjects: [] };
}

export const ListKeyVOsResponse = {
  encode(message: ListKeyVOsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyValueObjects) {
      KeyVO.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyVOsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyVOsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyValueObjects.push(KeyVO.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListKeyVOsResponse {
    return {
      keyValueObjects: globalThis.Array.isArray(object?.keyValueObjects)
        ? object.keyValueObjects.map((e: any) => KeyVO.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListKeyVOsResponse): unknown {
    const obj: any = {};
    if (message.keyValueObjects?.length) {
      obj.keyValueObjects = message.keyValueObjects.map((e) => KeyVO.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListKeyVOsResponse>, I>>(base?: I): ListKeyVOsResponse {
    return ListKeyVOsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeyVOsResponse>, I>>(object: I): ListKeyVOsResponse {
    const message = createBaseListKeyVOsResponse();
    message.keyValueObjects = object.keyValueObjects?.map((e) => KeyVO.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateKeyVORequest(): CreateKeyVORequest {
  return { keyVo: undefined };
}

export const CreateKeyVORequest = {
  encode(message: CreateKeyVORequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyVo !== undefined) {
      KeyVO.encode(message.keyVo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyVORequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyVORequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyVo = KeyVO.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateKeyVORequest {
    return { keyVo: isSet(object.keyVo) ? KeyVO.fromJSON(object.keyVo) : undefined };
  },

  toJSON(message: CreateKeyVORequest): unknown {
    const obj: any = {};
    if (message.keyVo !== undefined) {
      obj.keyVo = KeyVO.toJSON(message.keyVo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateKeyVORequest>, I>>(base?: I): CreateKeyVORequest {
    return CreateKeyVORequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateKeyVORequest>, I>>(object: I): CreateKeyVORequest {
    const message = createBaseCreateKeyVORequest();
    message.keyVo = (object.keyVo !== undefined && object.keyVo !== null) ? KeyVO.fromPartial(object.keyVo) : undefined;
    return message;
  },
};

function createBaseKey(): Key {
  return {
    name: "",
    address: "",
    owner: "",
    state: 0,
    createTime: undefined,
    mintTime: undefined,
    mintTxHash: undefined,
    ethContribution: undefined,
    isMinted: false,
    vo: undefined,
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.mintTime !== undefined) {
      Timestamp.encode(toTimestamp(message.mintTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.mintTxHash !== undefined) {
      writer.uint32(58).string(message.mintTxHash);
    }
    if (message.ethContribution !== undefined) {
      writer.uint32(66).string(message.ethContribution);
    }
    if (message.isMinted !== false) {
      writer.uint32(72).bool(message.isMinted);
    }
    if (message.vo !== undefined) {
      KeyVO.encode(message.vo, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mintTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mintTxHash = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ethContribution = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isMinted = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.vo = KeyVO.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Key {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      createTime: isSet(object.createTime) ? globalThis.String(object.createTime) : undefined,
      mintTime: isSet(object.mintTime) ? globalThis.String(object.mintTime) : undefined,
      mintTxHash: isSet(object.mintTxHash) ? globalThis.String(object.mintTxHash) : undefined,
      ethContribution: isSet(object.ethContribution) ? globalThis.String(object.ethContribution) : undefined,
      isMinted: isSet(object.isMinted) ? globalThis.Boolean(object.isMinted) : false,
      vo: isSet(object.vo) ? KeyVO.fromJSON(object.vo) : undefined,
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.owner !== undefined) {
      obj.owner = message.owner;
    }
    if (message.state !== undefined) {
      obj.state = stateToJSON(message.state);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime;
    }
    if (message.mintTime !== undefined) {
      obj.mintTime = message.mintTime;
    }
    if (message.mintTxHash !== undefined) {
      obj.mintTxHash = message.mintTxHash;
    }
    if (message.ethContribution !== undefined) {
      obj.ethContribution = message.ethContribution;
    }
    if (message.isMinted !== undefined) {
      obj.isMinted = message.isMinted;
    }
    if (message.vo !== undefined) {
      obj.vo = KeyVO.toJSON(message.vo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Key>, I>>(base?: I): Key {
    return Key.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = createBaseKey();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.mintTime = object.mintTime ?? undefined;
    message.mintTxHash = object.mintTxHash ?? undefined;
    message.ethContribution = object.ethContribution ?? undefined;
    message.isMinted = object.isMinted ?? false;
    message.vo = (object.vo !== undefined && object.vo !== null) ? KeyVO.fromPartial(object.vo) : undefined;
    return message;
  },
};

function createBaseKeyVO(): KeyVO {
  return {
    address: "",
    tokenId: "",
    primaryType: 0,
    secondaryType: 0,
    cachedImageUri: "",
    originalImageUri: "",
    metadataUri: "",
    contractAddress: "",
  };
}

export const KeyVO = {
  encode(message: KeyVO, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.primaryType !== 0) {
      writer.uint32(24).int32(message.primaryType);
    }
    if (message.secondaryType !== 0) {
      writer.uint32(32).int32(message.secondaryType);
    }
    if (message.cachedImageUri !== "") {
      writer.uint32(42).string(message.cachedImageUri);
    }
    if (message.originalImageUri !== "") {
      writer.uint32(50).string(message.originalImageUri);
    }
    if (message.metadataUri !== "") {
      writer.uint32(58).string(message.metadataUri);
    }
    if (message.contractAddress !== "") {
      writer.uint32(66).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyVO {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyVO();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.primaryType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.secondaryType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cachedImageUri = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.originalImageUri = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadataUri = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyVO {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      primaryType: isSet(object.primaryType) ? primaryTypeFromJSON(object.primaryType) : 0,
      secondaryType: isSet(object.secondaryType) ? secondaryTypeFromJSON(object.secondaryType) : 0,
      cachedImageUri: isSet(object.cachedImageUri) ? globalThis.String(object.cachedImageUri) : "",
      originalImageUri: isSet(object.originalImageUri) ? globalThis.String(object.originalImageUri) : "",
      metadataUri: isSet(object.metadataUri) ? globalThis.String(object.metadataUri) : "",
      contractAddress: isSet(object.contractAddress) ? globalThis.String(object.contractAddress) : "",
    };
  },

  toJSON(message: KeyVO): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.tokenId !== undefined) {
      obj.tokenId = message.tokenId;
    }
    if (message.primaryType !== undefined) {
      obj.primaryType = primaryTypeToJSON(message.primaryType);
    }
    if (message.secondaryType !== undefined) {
      obj.secondaryType = secondaryTypeToJSON(message.secondaryType);
    }
    if (message.cachedImageUri !== undefined) {
      obj.cachedImageUri = message.cachedImageUri;
    }
    if (message.originalImageUri !== undefined) {
      obj.originalImageUri = message.originalImageUri;
    }
    if (message.metadataUri !== undefined) {
      obj.metadataUri = message.metadataUri;
    }
    if (message.contractAddress !== undefined) {
      obj.contractAddress = message.contractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyVO>, I>>(base?: I): KeyVO {
    return KeyVO.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyVO>, I>>(object: I): KeyVO {
    const message = createBaseKeyVO();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    message.primaryType = object.primaryType ?? 0;
    message.secondaryType = object.secondaryType ?? 0;
    message.cachedImageUri = object.cachedImageUri ?? "";
    message.originalImageUri = object.originalImageUri ?? "";
    message.metadataUri = object.metadataUri ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

/** KeyService contains the function to interact with the Key of the spacebar */
export interface KeyService {
  /** ListKeys will return Keys. */
  ListKeys(request: ListKeysRequest): Promise<ListKeysResponse>;
  /** ListKeyValueObjects will return KeyVOs. */
  ListKeyValueObjects(request: ListKeyVOsRequest): Promise<ListKeyVOsResponse>;
}

export const KeyServiceServiceName = "ethereum.v1.key.KeyService";
export class KeyServiceClientImpl implements KeyService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || KeyServiceServiceName;
    this.rpc = rpc;
    this.ListKeys = this.ListKeys.bind(this);
    this.ListKeyValueObjects = this.ListKeyValueObjects.bind(this);
  }
  ListKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    const data = ListKeysRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListKeys", data);
    return promise.then((data) => ListKeysResponse.decode(_m0.Reader.create(data)));
  }

  ListKeyValueObjects(request: ListKeyVOsRequest): Promise<ListKeyVOsResponse> {
    const data = ListKeyVOsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListKeyValueObjects", data);
    return promise.then((data) => ListKeyVOsResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

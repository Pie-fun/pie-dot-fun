// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/user.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
import { SNS, VMType, vMTypeFromJSON, vMTypeToJSON, vMTypeToNumber } from "./common";

export const protobufPackage = "piedotfun.v1";

export interface GetUserRequest {
  /**
   * The name of the user to retrieve.
   * Format: users/{id}
   * Alias "users/me" is supported.
   */
  user: string;
}

/**
 * ListUsersRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListUsersRequest {
  /**
   * The maximum number of users to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListUsers` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * address
   *   * Equal`
   * * display_name
   *   * Equal`
   *
   * Examples
   * * name="users/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
   * * address="FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
   * * display_name="Alice"
   */
  filter: string;
}

/**
 * ListUsersResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListUsersResponse {
  /** The list of rows that matched the query. */
  users: User[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface UpdateUserRequest {
  /**
   * User to update
   * Format: users/{id}
   */
  user:
    | User
    | undefined;
  /**
   * Field mask that specifies the fields to update.
   * If no field mask is set, all fields will be updated.
   * Wildcards are supported.
   * Examples
   * ["*"]
   * ["nickname"]
   * ["biography"]
   */
  updateMask: string[] | undefined;
}

export interface ValidateNicknameAvailabilityRequest {
  /** The nickname of User. */
  nickname: string;
}

export interface ValidateNicknameAvailabilityResponse {
  /** The nickname of User. */
  nickname: string;
  /** The availability of the nickname. */
  available: boolean;
  /**
   * The reason of the nickname is not available.
   * Example:
   * - display name should be less or equal than 15 characters
   * - display name should be more or equal than 4 characters
   * - display name may only contain letters, numbers, hyphens, and periods
   */
  reason: string;
}

export interface User {
  /**
   * The resource name of the User.
   * Format: users/{id}
   */
  name: string;
  /** The Auth ID of User. (generated by Privy or Web3Auth) */
  id: string;
  wallets: UserWallet[];
  /**
   * The created time of User.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime:
    | string
    | undefined;
  /**
   * The last updated time of User.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  updateTime:
    | string
    | undefined;
  /** The display name of User. */
  displayName: string;
  /** The biography of User. */
  biography: string;
  /** The SNS connections of User. */
  sns: SNS[];
  profileImageUrl: string;
}

export interface UserWallet {
  vmType: VMType;
  address: string;
}

function createBaseGetUserRequest(): GetUserRequest {
  return { user: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetUserRequest {
    return { user: isSet(object.user) ? globalThis.String(object.user) : "" };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = message.user;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRequest>, I>>(base?: I): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseListUsersRequest(): ListUsersRequest {
  return { pageSize: 0, pageToken: "", filter: "" };
}

export const ListUsersRequest = {
  encode(message: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRequest();
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

  fromJSON(object: any): ListUsersRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListUsersRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListUsersRequest>, I>>(base?: I): ListUsersRequest {
    return ListUsersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(object: I): ListUsersRequest {
    const message = createBaseListUsersRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListUsersResponse(): ListUsersResponse {
  return { users: [], nextPageToken: "" };
}

export const ListUsersResponse = {
  encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsersResponse {
    return {
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsersResponse>, I>>(base?: I): ListUsersResponse {
    return ListUsersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsersResponse>, I>>(object: I): ListUsersResponse {
    const message = createBaseListUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { user: undefined, updateMask: undefined };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseValidateNicknameAvailabilityRequest(): ValidateNicknameAvailabilityRequest {
  return { nickname: "" };
}

export const ValidateNicknameAvailabilityRequest = {
  encode(message: ValidateNicknameAvailabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateNicknameAvailabilityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateNicknameAvailabilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateNicknameAvailabilityRequest {
    return { nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "" };
  },

  toJSON(message: ValidateNicknameAvailabilityRequest): unknown {
    const obj: any = {};
    if (message.nickname !== undefined) {
      obj.nickname = message.nickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateNicknameAvailabilityRequest>, I>>(
    base?: I,
  ): ValidateNicknameAvailabilityRequest {
    return ValidateNicknameAvailabilityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateNicknameAvailabilityRequest>, I>>(
    object: I,
  ): ValidateNicknameAvailabilityRequest {
    const message = createBaseValidateNicknameAvailabilityRequest();
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseValidateNicknameAvailabilityResponse(): ValidateNicknameAvailabilityResponse {
  return { nickname: "", available: false, reason: "" };
}

export const ValidateNicknameAvailabilityResponse = {
  encode(message: ValidateNicknameAvailabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.available !== false) {
      writer.uint32(16).bool(message.available);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateNicknameAvailabilityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateNicknameAvailabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.available = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateNicknameAvailabilityResponse {
    return {
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "",
      available: isSet(object.available) ? globalThis.Boolean(object.available) : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: ValidateNicknameAvailabilityResponse): unknown {
    const obj: any = {};
    if (message.nickname !== undefined) {
      obj.nickname = message.nickname;
    }
    if (message.available !== undefined) {
      obj.available = message.available;
    }
    if (message.reason !== undefined) {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateNicknameAvailabilityResponse>, I>>(
    base?: I,
  ): ValidateNicknameAvailabilityResponse {
    return ValidateNicknameAvailabilityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateNicknameAvailabilityResponse>, I>>(
    object: I,
  ): ValidateNicknameAvailabilityResponse {
    const message = createBaseValidateNicknameAvailabilityResponse();
    message.nickname = object.nickname ?? "";
    message.available = object.available ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return {
    name: "",
    id: "",
    wallets: [],
    createTime: undefined,
    updateTime: undefined,
    displayName: "",
    biography: "",
    sns: [],
    profileImageUrl: "",
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.wallets) {
      UserWallet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }
    if (message.biography !== "") {
      writer.uint32(66).string(message.biography);
    }
    for (const v of message.sns) {
      SNS.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.profileImageUrl !== "") {
      writer.uint32(82).string(message.profileImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wallets.push(UserWallet.decode(reader, reader.uint32()));
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

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.biography = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sns.push(SNS.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.profileImageUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      wallets: globalThis.Array.isArray(object?.wallets) ? object.wallets.map((e: any) => UserWallet.fromJSON(e)) : [],
      createTime: isSet(object.createTime) ? globalThis.String(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? globalThis.String(object.updateTime) : undefined,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      biography: isSet(object.biography) ? globalThis.String(object.biography) : "",
      sns: globalThis.Array.isArray(object?.sns) ? object.sns.map((e: any) => SNS.fromJSON(e)) : [],
      profileImageUrl: isSet(object.profileImageUrl) ? globalThis.String(object.profileImageUrl) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.wallets?.length) {
      obj.wallets = message.wallets.map((e) => UserWallet.toJSON(e));
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.biography !== undefined) {
      obj.biography = message.biography;
    }
    if (message.sns?.length) {
      obj.sns = message.sns.map((e) => SNS.toJSON(e));
    }
    if (message.profileImageUrl !== undefined) {
      obj.profileImageUrl = message.profileImageUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.wallets = object.wallets?.map((e) => UserWallet.fromPartial(e)) || [];
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.displayName = object.displayName ?? "";
    message.biography = object.biography ?? "";
    message.sns = object.sns?.map((e) => SNS.fromPartial(e)) || [];
    message.profileImageUrl = object.profileImageUrl ?? "";
    return message;
  },
};

function createBaseUserWallet(): UserWallet {
  return { vmType: VMType.VM_UNSPECIFIED, address: "" };
}

export const UserWallet = {
  encode(message: UserWallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vmType !== VMType.VM_UNSPECIFIED) {
      writer.uint32(8).int32(vMTypeToNumber(message.vmType));
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserWallet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vmType = vMTypeFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserWallet {
    return {
      vmType: isSet(object.vmType) ? vMTypeFromJSON(object.vmType) : VMType.VM_UNSPECIFIED,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: UserWallet): unknown {
    const obj: any = {};
    if (message.vmType !== undefined) {
      obj.vmType = vMTypeToJSON(message.vmType);
    }
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserWallet>, I>>(base?: I): UserWallet {
    return UserWallet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserWallet>, I>>(object: I): UserWallet {
    const message = createBaseUserWallet();
    message.vmType = object.vmType ?? VMType.VM_UNSPECIFIED;
    message.address = object.address ?? "";
    return message;
  },
};

/** UserService contains the function to interact with the User of the spacebar */
export interface UserService {
  /** GetUser will return User. */
  GetUser(request: GetUserRequest): Promise<User>;
  /** ListUsers */
  ListUsers(request: ListUsersRequest): Promise<ListUsersResponse>;
  /** UpdateUser update User. */
  UpdateUser(request: UpdateUserRequest): Promise<User>;
  /** ValidateNicknameAvailability identify User. */
  ValidateNicknameAvailability(
    request: ValidateNicknameAvailabilityRequest,
  ): Promise<ValidateNicknameAvailabilityResponse>;
}

export const UserServiceServiceName = "piedotfun.v1.UserService";
export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceServiceName;
    this.rpc = rpc;
    this.GetUser = this.GetUser.bind(this);
    this.ListUsers = this.ListUsers.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.ValidateNicknameAvailability = this.ValidateNicknameAvailability.bind(this);
  }
  GetUser(request: GetUserRequest): Promise<User> {
    const data = GetUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUser", data);
    return promise.then((data) => User.decode(_m0.Reader.create(data)));
  }

  ListUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    const data = ListUsersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListUsers", data);
    return promise.then((data) => ListUsersResponse.decode(_m0.Reader.create(data)));
  }

  UpdateUser(request: UpdateUserRequest): Promise<User> {
    const data = UpdateUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUser", data);
    return promise.then((data) => User.decode(_m0.Reader.create(data)));
  }

  ValidateNicknameAvailability(
    request: ValidateNicknameAvailabilityRequest,
  ): Promise<ValidateNicknameAvailabilityResponse> {
    const data = ValidateNicknameAvailabilityRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateNicknameAvailability", data);
    return promise.then((data) => ValidateNicknameAvailabilityResponse.decode(_m0.Reader.create(data)));
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

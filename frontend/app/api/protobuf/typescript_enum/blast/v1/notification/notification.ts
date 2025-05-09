// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/notification/notification.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "blast.v1.notification";

/** Type of the notification. */
export enum NotificationType {
  /** TYPE_UNSPECIFIED - default value. this value is unused. */
  TYPE_UNSPECIFIED = 0,
  /** INFO - Plain text info message. */
  INFO = 100,
  /** INFO_POINTS_GIVEN - DEPRECATED: Use INFO_SPACEBAR_POINTS_GIVEN instead. */
  INFO_POINTS_GIVEN = 101,
  INFO_SPACEBAR_POINTS_GIVEN = 110,
  INFO_BLAST_GOLD_GIVEN = 111,
  INFO_BLAST_TOKEN_GIVEN = 112,
}

export function notificationTypeFromJSON(object: any): NotificationType {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return NotificationType.TYPE_UNSPECIFIED;
    case 100:
    case "INFO":
      return NotificationType.INFO;
    case 101:
    case "INFO_POINTS_GIVEN":
      return NotificationType.INFO_POINTS_GIVEN;
    case 110:
    case "INFO_SPACEBAR_POINTS_GIVEN":
      return NotificationType.INFO_SPACEBAR_POINTS_GIVEN;
    case 111:
    case "INFO_BLAST_GOLD_GIVEN":
      return NotificationType.INFO_BLAST_GOLD_GIVEN;
    case 112:
    case "INFO_BLAST_TOKEN_GIVEN":
      return NotificationType.INFO_BLAST_TOKEN_GIVEN;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationType");
  }
}

export function notificationTypeToJSON(object: NotificationType): string {
  switch (object) {
    case NotificationType.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case NotificationType.INFO:
      return "INFO";
    case NotificationType.INFO_POINTS_GIVEN:
      return "INFO_POINTS_GIVEN";
    case NotificationType.INFO_SPACEBAR_POINTS_GIVEN:
      return "INFO_SPACEBAR_POINTS_GIVEN";
    case NotificationType.INFO_BLAST_GOLD_GIVEN:
      return "INFO_BLAST_GOLD_GIVEN";
    case NotificationType.INFO_BLAST_TOKEN_GIVEN:
      return "INFO_BLAST_TOKEN_GIVEN";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationType");
  }
}

/** Action type that can be performed on the notification. */
export enum NotificationAction {
  /** ACTION_UNSPECIFIED - default value. this value is unused. */
  ACTION_UNSPECIFIED = 0,
  /** NO_OP - No operation. */
  NO_OP = 1,
  /** NAVIGATE_POINTS_PAGE - Navigate to the points page. */
  NAVIGATE_POINTS_PAGE = 100,
}

export function notificationActionFromJSON(object: any): NotificationAction {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return NotificationAction.ACTION_UNSPECIFIED;
    case 1:
    case "NO_OP":
      return NotificationAction.NO_OP;
    case 100:
    case "NAVIGATE_POINTS_PAGE":
      return NotificationAction.NAVIGATE_POINTS_PAGE;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationAction");
  }
}

export function notificationActionToJSON(object: NotificationAction): string {
  switch (object) {
    case NotificationAction.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case NotificationAction.NO_OP:
      return "NO_OP";
    case NotificationAction.NAVIGATE_POINTS_PAGE:
      return "NAVIGATE_POINTS_PAGE";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationAction");
  }
}

/** State of the notification. */
export enum NotificationState {
  /** STATE_UNSPECIFIED - default value. this value is unused. */
  STATE_UNSPECIFIED = 0,
  /** CREATED -  */
  CREATED = 1,
  /** ACKNOWLEDGED -  */
  ACKNOWLEDGED = 2,
  /** EXPIRED -  */
  EXPIRED = 3,
}

export function notificationStateFromJSON(object: any): NotificationState {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return NotificationState.STATE_UNSPECIFIED;
    case 1:
    case "CREATED":
      return NotificationState.CREATED;
    case 2:
    case "ACKNOWLEDGED":
      return NotificationState.ACKNOWLEDGED;
    case 3:
    case "EXPIRED":
      return NotificationState.EXPIRED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationState");
  }
}

export function notificationStateToJSON(object: NotificationState): string {
  switch (object) {
    case NotificationState.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case NotificationState.CREATED:
      return "CREATED";
    case NotificationState.ACKNOWLEDGED:
      return "ACKNOWLEDGED";
    case NotificationState.EXPIRED:
      return "EXPIRED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationState");
  }
}

export enum NotificationContentIcon {
  /** ICON_UNSPECIFIED - default value. this value is unused. */
  ICON_UNSPECIFIED = 0,
  ICON_SPACEBAR_POINTS = 1,
  ICON_BLAST_GOLD = 2,
  ICON_BLAST_TOKEN = 3,
}

export function notificationContentIconFromJSON(object: any): NotificationContentIcon {
  switch (object) {
    case 0:
    case "ICON_UNSPECIFIED":
      return NotificationContentIcon.ICON_UNSPECIFIED;
    case 1:
    case "ICON_SPACEBAR_POINTS":
      return NotificationContentIcon.ICON_SPACEBAR_POINTS;
    case 2:
    case "ICON_BLAST_GOLD":
      return NotificationContentIcon.ICON_BLAST_GOLD;
    case 3:
    case "ICON_BLAST_TOKEN":
      return NotificationContentIcon.ICON_BLAST_TOKEN;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationContentIcon");
  }
}

export function notificationContentIconToJSON(object: NotificationContentIcon): string {
  switch (object) {
    case NotificationContentIcon.ICON_UNSPECIFIED:
      return "ICON_UNSPECIFIED";
    case NotificationContentIcon.ICON_SPACEBAR_POINTS:
      return "ICON_SPACEBAR_POINTS";
    case NotificationContentIcon.ICON_BLAST_GOLD:
      return "ICON_BLAST_GOLD";
    case NotificationContentIcon.ICON_BLAST_TOKEN:
      return "ICON_BLAST_TOKEN";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationContentIcon");
  }
}

export interface ListNotificationsRequest {
  /**
   * The resource name of User.
   * User is required.
   * Format: users/{address}
   */
  parent: string;
  /**
   * The maximum number of items to return. The service may return fewer than this value.
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
   * When paginating, all other parameters provided to `ListNotifications` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * state
   *   * `Equal`
   * * type
   *   * `Equal`
   *
   * Examples
   * * state=CREATED
   * * type=INFO_POINTS_GIVEN
   */
  filter: string;
}

export interface ListNotificationsResponse {
  notifications: Notification[];
  nextPageToken: string;
}

export interface AcknowledgeNotificationRequest {
  name: string;
}

export interface Notification {
  /**
   * The resource name of the Notification.
   * Format: users/{user_address}/notifications/{id}
   */
  name: string;
  /**
   * The resource name of User.
   * Format: users/{address}
   */
  user: string;
  /** The id of Notification. */
  id: number;
  type: NotificationType;
  action: NotificationAction;
  state: NotificationState;
  icon: NotificationContentIcon;
  title: string;
  body: string;
  metadata: { [key: string]: string };
  /**
   * The created time of Notification.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime:
    | string
    | undefined;
  /**
   * The expire time of Notification if exists.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  expireTime?:
    | string
    | undefined;
  /** The acknowledged time of Notification. */
  acknowledgeTime?: string | undefined;
}

export interface Notification_MetadataEntry {
  key: string;
  value: string;
}

function createBaseListNotificationsRequest(): ListNotificationsRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListNotificationsRequest = {
  encode(message: ListNotificationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNotificationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListNotificationsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ListNotificationsRequest): unknown {
    const obj: any = {};
    if (message.parent !== undefined) {
      obj.parent = message.parent;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNotificationsRequest>, I>>(base?: I): ListNotificationsRequest {
    return ListNotificationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNotificationsRequest>, I>>(object: I): ListNotificationsRequest {
    const message = createBaseListNotificationsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListNotificationsResponse(): ListNotificationsResponse {
  return { notifications: [], nextPageToken: "" };
}

export const ListNotificationsResponse = {
  encode(message: ListNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListNotificationsResponse {
    return {
      notifications: globalThis.Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notification.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNotificationsResponse>, I>>(base?: I): ListNotificationsResponse {
    return ListNotificationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNotificationsResponse>, I>>(object: I): ListNotificationsResponse {
    const message = createBaseListNotificationsResponse();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseAcknowledgeNotificationRequest(): AcknowledgeNotificationRequest {
  return { name: "" };
}

export const AcknowledgeNotificationRequest = {
  encode(message: AcknowledgeNotificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcknowledgeNotificationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgeNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcknowledgeNotificationRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: AcknowledgeNotificationRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcknowledgeNotificationRequest>, I>>(base?: I): AcknowledgeNotificationRequest {
    return AcknowledgeNotificationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcknowledgeNotificationRequest>, I>>(
    object: I,
  ): AcknowledgeNotificationRequest {
    const message = createBaseAcknowledgeNotificationRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseNotification(): Notification {
  return {
    name: "",
    user: "",
    id: 0,
    type: 0,
    action: 0,
    state: 0,
    icon: 0,
    title: "",
    body: "",
    metadata: {},
    createTime: undefined,
    expireTime: undefined,
    acknowledgeTime: undefined,
  };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.action !== 0) {
      writer.uint32(40).int32(message.action);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.icon !== 0) {
      writer.uint32(56).int32(message.icon);
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(74).string(message.body);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Notification_MetadataEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
    });
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(106).fork()).ldelim();
    }
    if (message.expireTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expireTime), writer.uint32(114).fork()).ldelim();
    }
    if (message.acknowledgeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.acknowledgeTime), writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
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

          message.user = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.icon = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.title = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.body = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = Notification_MetadataEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.metadata[entry10.key] = entry10.value;
          }
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.expireTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.acknowledgeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notification {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      type: isSet(object.type) ? notificationTypeFromJSON(object.type) : 0,
      action: isSet(object.action) ? notificationActionFromJSON(object.action) : 0,
      state: isSet(object.state) ? notificationStateFromJSON(object.state) : 0,
      icon: isSet(object.icon) ? notificationContentIconFromJSON(object.icon) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      createTime: isSet(object.createTime) ? globalThis.String(object.createTime) : undefined,
      expireTime: isSet(object.expireTime) ? globalThis.String(object.expireTime) : undefined,
      acknowledgeTime: isSet(object.acknowledgeTime) ? globalThis.String(object.acknowledgeTime) : undefined,
    };
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.user !== undefined) {
      obj.user = message.user;
    }
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.type !== undefined) {
      obj.type = notificationTypeToJSON(message.type);
    }
    if (message.action !== undefined) {
      obj.action = notificationActionToJSON(message.action);
    }
    if (message.state !== undefined) {
      obj.state = notificationStateToJSON(message.state);
    }
    if (message.icon !== undefined) {
      obj.icon = notificationContentIconToJSON(message.icon);
    }
    if (message.title !== undefined) {
      obj.title = message.title;
    }
    if (message.body !== undefined) {
      obj.body = message.body;
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime;
    }
    if (message.expireTime !== undefined) {
      obj.expireTime = message.expireTime;
    }
    if (message.acknowledgeTime !== undefined) {
      obj.acknowledgeTime = message.acknowledgeTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification>, I>>(base?: I): Notification {
    return Notification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notification>, I>>(object: I): Notification {
    const message = createBaseNotification();
    message.name = object.name ?? "";
    message.user = object.user ?? "";
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
    message.action = object.action ?? 0;
    message.state = object.state ?? 0;
    message.icon = object.icon ?? 0;
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createTime = object.createTime ?? undefined;
    message.expireTime = object.expireTime ?? undefined;
    message.acknowledgeTime = object.acknowledgeTime ?? undefined;
    return message;
  },
};

function createBaseNotification_MetadataEntry(): Notification_MetadataEntry {
  return { key: "", value: "" };
}

export const Notification_MetadataEntry = {
  encode(message: Notification_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification_MetadataEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notification_MetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Notification_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification_MetadataEntry>, I>>(base?: I): Notification_MetadataEntry {
    return Notification_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notification_MetadataEntry>, I>>(object: I): Notification_MetadataEntry {
    const message = createBaseNotification_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

/** NotificationService contains the function to interact with the Notification of the spacebar */
export interface NotificationService {
  /** Signin signs in a user and returns a session id. */
  ListNotifications(request: ListNotificationsRequest): Promise<ListNotificationsResponse>;
  /** AcknowledgeNotification acknowledges a notification. */
  AcknowledgeNotification(request: AcknowledgeNotificationRequest): Promise<Empty>;
}

export const NotificationServiceServiceName = "blast.v1.notification.NotificationService";
export class NotificationServiceClientImpl implements NotificationService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NotificationServiceServiceName;
    this.rpc = rpc;
    this.ListNotifications = this.ListNotifications.bind(this);
    this.AcknowledgeNotification = this.AcknowledgeNotification.bind(this);
  }
  ListNotifications(request: ListNotificationsRequest): Promise<ListNotificationsResponse> {
    const data = ListNotificationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListNotifications", data);
    return promise.then((data) => ListNotificationsResponse.decode(_m0.Reader.create(data)));
  }

  AcknowledgeNotification(request: AcknowledgeNotificationRequest): Promise<Empty> {
    const data = AcknowledgeNotificationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcknowledgeNotification", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
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

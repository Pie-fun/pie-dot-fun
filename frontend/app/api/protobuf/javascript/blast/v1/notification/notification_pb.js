// @generated by protoc-gen-es v1.6.0
// @generated from file blast/v1/notification/notification.proto (package blast.v1.notification, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Type of the notification.
 *
 * @generated from enum blast.v1.notification.NotificationType
 */
export const NotificationType = proto3.makeEnum(
  "blast.v1.notification.NotificationType",
  [
    {no: 0, name: "TYPE_UNSPECIFIED"},
    {no: 100, name: "INFO"},
    {no: 101, name: "INFO_POINTS_GIVEN"},
    {no: 110, name: "INFO_SPACEBAR_POINTS_GIVEN"},
    {no: 111, name: "INFO_BLAST_GOLD_GIVEN"},
    {no: 112, name: "INFO_BLAST_TOKEN_GIVEN"},
  ],
);

/**
 * Action type that can be performed on the notification.
 *
 * @generated from enum blast.v1.notification.NotificationAction
 */
export const NotificationAction = proto3.makeEnum(
  "blast.v1.notification.NotificationAction",
  [
    {no: 0, name: "ACTION_UNSPECIFIED"},
    {no: 1, name: "NO_OP"},
    {no: 100, name: "NAVIGATE_POINTS_PAGE"},
  ],
);

/**
 * State of the notification.
 *
 * @generated from enum blast.v1.notification.NotificationState
 */
export const NotificationState = proto3.makeEnum(
  "blast.v1.notification.NotificationState",
  [
    {no: 0, name: "STATE_UNSPECIFIED"},
    {no: 1, name: "CREATED"},
    {no: 2, name: "ACKNOWLEDGED"},
    {no: 3, name: "EXPIRED"},
  ],
);

/**
 * @generated from enum blast.v1.notification.NotificationContentIcon
 */
export const NotificationContentIcon = proto3.makeEnum(
  "blast.v1.notification.NotificationContentIcon",
  [
    {no: 0, name: "ICON_UNSPECIFIED"},
    {no: 1, name: "ICON_SPACEBAR_POINTS"},
    {no: 2, name: "ICON_BLAST_GOLD"},
    {no: 3, name: "ICON_BLAST_TOKEN"},
  ],
);

/**
 * @generated from message blast.v1.notification.ListNotificationsRequest
 */
export const ListNotificationsRequest = proto3.makeMessageType(
  "blast.v1.notification.ListNotificationsRequest",
  () => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message blast.v1.notification.ListNotificationsResponse
 */
export const ListNotificationsResponse = proto3.makeMessageType(
  "blast.v1.notification.ListNotificationsResponse",
  () => [
    { no: 1, name: "notifications", kind: "message", T: Notification, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message blast.v1.notification.AcknowledgeNotificationRequest
 */
export const AcknowledgeNotificationRequest = proto3.makeMessageType(
  "blast.v1.notification.AcknowledgeNotificationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message blast.v1.notification.Notification
 */
export const Notification = proto3.makeMessageType(
  "blast.v1.notification.Notification",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(NotificationType) },
    { no: 5, name: "action", kind: "enum", T: proto3.getEnumType(NotificationAction) },
    { no: 6, name: "state", kind: "enum", T: proto3.getEnumType(NotificationState) },
    { no: 7, name: "icon", kind: "enum", T: proto3.getEnumType(NotificationContentIcon) },
    { no: 8, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 13, name: "create_time", kind: "message", T: Timestamp },
    { no: 14, name: "expire_time", kind: "message", T: Timestamp, opt: true },
    { no: 15, name: "acknowledge_time", kind: "message", T: Timestamp, opt: true },
  ],
);


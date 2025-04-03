from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class NotificationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[NotificationType]
    INFO: _ClassVar[NotificationType]
    INFO_POINTS_GIVEN: _ClassVar[NotificationType]
    INFO_SPACEBAR_POINTS_GIVEN: _ClassVar[NotificationType]
    INFO_BLAST_GOLD_GIVEN: _ClassVar[NotificationType]
    INFO_BLAST_TOKEN_GIVEN: _ClassVar[NotificationType]

class NotificationAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ACTION_UNSPECIFIED: _ClassVar[NotificationAction]
    NO_OP: _ClassVar[NotificationAction]
    NAVIGATE_POINTS_PAGE: _ClassVar[NotificationAction]

class NotificationState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[NotificationState]
    CREATED: _ClassVar[NotificationState]
    ACKNOWLEDGED: _ClassVar[NotificationState]
    EXPIRED: _ClassVar[NotificationState]

class NotificationContentIcon(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ICON_UNSPECIFIED: _ClassVar[NotificationContentIcon]
    ICON_SPACEBAR_POINTS: _ClassVar[NotificationContentIcon]
    ICON_BLAST_GOLD: _ClassVar[NotificationContentIcon]
    ICON_BLAST_TOKEN: _ClassVar[NotificationContentIcon]
TYPE_UNSPECIFIED: NotificationType
INFO: NotificationType
INFO_POINTS_GIVEN: NotificationType
INFO_SPACEBAR_POINTS_GIVEN: NotificationType
INFO_BLAST_GOLD_GIVEN: NotificationType
INFO_BLAST_TOKEN_GIVEN: NotificationType
ACTION_UNSPECIFIED: NotificationAction
NO_OP: NotificationAction
NAVIGATE_POINTS_PAGE: NotificationAction
STATE_UNSPECIFIED: NotificationState
CREATED: NotificationState
ACKNOWLEDGED: NotificationState
EXPIRED: NotificationState
ICON_UNSPECIFIED: NotificationContentIcon
ICON_SPACEBAR_POINTS: NotificationContentIcon
ICON_BLAST_GOLD: NotificationContentIcon
ICON_BLAST_TOKEN: NotificationContentIcon

class ListNotificationsRequest(_message.Message):
    __slots__ = ("parent", "page_size", "page_token", "filter")
    PARENT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    parent: str
    page_size: int
    page_token: str
    filter: str
    def __init__(self, parent: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListNotificationsResponse(_message.Message):
    __slots__ = ("notifications", "next_page_token")
    NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    notifications: _containers.RepeatedCompositeFieldContainer[Notification]
    next_page_token: str
    def __init__(self, notifications: _Optional[_Iterable[_Union[Notification, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class AcknowledgeNotificationRequest(_message.Message):
    __slots__ = ("name",)
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class Notification(_message.Message):
    __slots__ = ("name", "user", "id", "type", "action", "state", "icon", "title", "body", "metadata", "create_time", "expire_time", "acknowledge_time")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    ICON_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    EXPIRE_TIME_FIELD_NUMBER: _ClassVar[int]
    ACKNOWLEDGE_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    user: str
    id: int
    type: NotificationType
    action: NotificationAction
    state: NotificationState
    icon: NotificationContentIcon
    title: str
    body: str
    metadata: _containers.ScalarMap[str, str]
    create_time: _timestamp_pb2.Timestamp
    expire_time: _timestamp_pb2.Timestamp
    acknowledge_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., user: _Optional[str] = ..., id: _Optional[int] = ..., type: _Optional[_Union[NotificationType, str]] = ..., action: _Optional[_Union[NotificationAction, str]] = ..., state: _Optional[_Union[NotificationState, str]] = ..., icon: _Optional[_Union[NotificationContentIcon, str]] = ..., title: _Optional[str] = ..., body: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., expire_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., acknowledge_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

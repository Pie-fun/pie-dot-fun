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
    INFO_MESSAGE: _ClassVar[NotificationType]
    REWARD_DAILY_ATTENDANCE: _ClassVar[NotificationType]
    REWARD_WEEKLY_MISSION: _ClassVar[NotificationType]
    REWARD_WEEKLY_DOODLER: _ClassVar[NotificationType]
    REWARD_CHANLLENGE_RACE: _ClassVar[NotificationType]
    REWARD_HANGOUT_QUIZ: _ClassVar[NotificationType]
    REWARD_CUSTOM: _ClassVar[NotificationType]
    INFO_KEY_CREATED: _ClassVar[NotificationType]

class NotificationAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ACTION_UNSPECIFIED: _ClassVar[NotificationAction]
    NO_OP: _ClassVar[NotificationAction]
    CLAIM_STAR: _ClassVar[NotificationAction]
    CLAIM_KEY: _ClassVar[NotificationAction]

class NotificationState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[NotificationState]
    CREATED: _ClassVar[NotificationState]
    ACKNOWLEDGED: _ClassVar[NotificationState]
    EXPIRED: _ClassVar[NotificationState]

class NotificationContentIcon(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ICON_UNSPECIFIED: _ClassVar[NotificationContentIcon]
    BADGE: _ClassVar[NotificationContentIcon]
    GIFT: _ClassVar[NotificationContentIcon]
    ALERT: _ClassVar[NotificationContentIcon]
    WARNING: _ClassVar[NotificationContentIcon]
    SAPCESHIP: _ClassVar[NotificationContentIcon]
    STAR: _ClassVar[NotificationContentIcon]
    CROWN: _ClassVar[NotificationContentIcon]
    DART: _ClassVar[NotificationContentIcon]
    KEY_G: _ClassVar[NotificationContentIcon]
    KEY_A: _ClassVar[NotificationContentIcon]
    KEY_H: _ClassVar[NotificationContentIcon]
    KEY_R: _ClassVar[NotificationContentIcon]
TYPE_UNSPECIFIED: NotificationType
INFO_MESSAGE: NotificationType
REWARD_DAILY_ATTENDANCE: NotificationType
REWARD_WEEKLY_MISSION: NotificationType
REWARD_WEEKLY_DOODLER: NotificationType
REWARD_CHANLLENGE_RACE: NotificationType
REWARD_HANGOUT_QUIZ: NotificationType
REWARD_CUSTOM: NotificationType
INFO_KEY_CREATED: NotificationType
ACTION_UNSPECIFIED: NotificationAction
NO_OP: NotificationAction
CLAIM_STAR: NotificationAction
CLAIM_KEY: NotificationAction
STATE_UNSPECIFIED: NotificationState
CREATED: NotificationState
ACKNOWLEDGED: NotificationState
EXPIRED: NotificationState
ICON_UNSPECIFIED: NotificationContentIcon
BADGE: NotificationContentIcon
GIFT: NotificationContentIcon
ALERT: NotificationContentIcon
WARNING: NotificationContentIcon
SAPCESHIP: NotificationContentIcon
STAR: NotificationContentIcon
CROWN: NotificationContentIcon
DART: NotificationContentIcon
KEY_G: NotificationContentIcon
KEY_A: NotificationContentIcon
KEY_H: NotificationContentIcon
KEY_R: NotificationContentIcon

class ListNotificationsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "profile", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    profile: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., profile: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListNotificationsResponse(_message.Message):
    __slots__ = ("notifications", "next_page_token")
    NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    notifications: _containers.RepeatedCompositeFieldContainer[Notification]
    next_page_token: str
    def __init__(self, notifications: _Optional[_Iterable[_Union[Notification, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class AcknowledgeNotificationRequest(_message.Message):
    __slots__ = ("notification",)
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    notification: str
    def __init__(self, notification: _Optional[str] = ...) -> None: ...

class CreateNotificationRequest(_message.Message):
    __slots__ = ("notification",)
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    notification: Notification
    def __init__(self, notification: _Optional[_Union[Notification, _Mapping]] = ...) -> None: ...

class NotificationContent(_message.Message):
    __slots__ = ("icon", "title", "body")
    ICON_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    icon: NotificationContentIcon
    title: str
    body: str
    def __init__(self, icon: _Optional[_Union[NotificationContentIcon, str]] = ..., title: _Optional[str] = ..., body: _Optional[str] = ...) -> None: ...

class Notification(_message.Message):
    __slots__ = ("name", "id", "profile", "type", "action", "state", "content", "create_time", "expire_time", "acknowledge_time", "metadata")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    EXPIRE_TIME_FIELD_NUMBER: _ClassVar[int]
    ACKNOWLEDGE_TIME_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    name: str
    id: int
    profile: str
    type: NotificationType
    action: NotificationAction
    state: NotificationState
    content: NotificationContent
    create_time: _timestamp_pb2.Timestamp
    expire_time: _timestamp_pb2.Timestamp
    acknowledge_time: _timestamp_pb2.Timestamp
    metadata: _containers.ScalarMap[str, str]
    def __init__(self, name: _Optional[str] = ..., id: _Optional[int] = ..., profile: _Optional[str] = ..., type: _Optional[_Union[NotificationType, str]] = ..., action: _Optional[_Union[NotificationAction, str]] = ..., state: _Optional[_Union[NotificationState, str]] = ..., content: _Optional[_Union[NotificationContent, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., expire_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., acknowledge_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., metadata: _Optional[_Mapping[str, str]] = ...) -> None: ...

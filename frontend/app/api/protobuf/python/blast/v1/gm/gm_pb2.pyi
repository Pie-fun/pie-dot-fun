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

class RejectPreflightGMCode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REJECT_PREFLIGHT_GM_CODE_UNSPECIFIED: _ClassVar[RejectPreflightGMCode]
    REJECT_PREFLIGHT_GM_ALREADY_SENT_TO_SAME_USER: _ClassVar[RejectPreflightGMCode]
    REJECT_PREFLIGHT_GM_EXCEED_QUOTA: _ClassVar[RejectPreflightGMCode]
    REJECT_PREFLIGHT_GM_SELF_SEND: _ClassVar[RejectPreflightGMCode]
REJECT_PREFLIGHT_GM_CODE_UNSPECIFIED: RejectPreflightGMCode
REJECT_PREFLIGHT_GM_ALREADY_SENT_TO_SAME_USER: RejectPreflightGMCode
REJECT_PREFLIGHT_GM_EXCEED_QUOTA: RejectPreflightGMCode
REJECT_PREFLIGHT_GM_SELF_SEND: RejectPreflightGMCode

class GetGMStatsRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class SendGMRequest(_message.Message):
    __slots__ = ("to",)
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    to: str
    def __init__(self, to: _Optional[str] = ..., **kwargs) -> None: ...

class PreflightGMRequest(_message.Message):
    __slots__ = ("to",)
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    to: str
    def __init__(self, to: _Optional[str] = ..., **kwargs) -> None: ...

class PreflightGMResponse(_message.Message):
    __slots__ = ("can_send", "reject_code")
    CAN_SEND_FIELD_NUMBER: _ClassVar[int]
    REJECT_CODE_FIELD_NUMBER: _ClassVar[int]
    can_send: bool
    reject_code: RejectPreflightGMCode
    def __init__(self, can_send: bool = ..., reject_code: _Optional[_Union[RejectPreflightGMCode, str]] = ...) -> None: ...

class ListGMsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter", "order_by")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    order_by: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListGMsResponse(_message.Message):
    __slots__ = ("gms", "next_page_token")
    GMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    gms: _containers.RepeatedCompositeFieldContainer[GM]
    next_page_token: str
    def __init__(self, gms: _Optional[_Iterable[_Union[GM, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GMStats(_message.Message):
    __slots__ = ("name", "user_address", "sent_count", "received_count")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SENT_COUNT_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_COUNT_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    sent_count: int
    received_count: int
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., sent_count: _Optional[int] = ..., received_count: _Optional[int] = ...) -> None: ...

class GM(_message.Message):
    __slots__ = ("name", "to", "create_time")
    NAME_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    to: str
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., to: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., **kwargs) -> None: ...

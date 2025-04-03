from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SendGMRequest(_message.Message):
    __slots__ = ("profile", "to")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    profile: str
    to: str
    def __init__(self, profile: _Optional[str] = ..., to: _Optional[str] = ...) -> None: ...

class ListGMsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "to")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    to: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., to: _Optional[str] = ..., **kwargs) -> None: ...

class ListGMsResponse(_message.Message):
    __slots__ = ("gms", "next_page_token")
    GMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    gms: _containers.RepeatedCompositeFieldContainer[GM]
    next_page_token: str
    def __init__(self, gms: _Optional[_Iterable[_Union[GM, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GMStats(_message.Message):
    __slots__ = ("name", "profile", "sent_count", "received_count", "sent_gms", "received_gms")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    SENT_COUNT_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_COUNT_FIELD_NUMBER: _ClassVar[int]
    SENT_GMS_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_GMS_FIELD_NUMBER: _ClassVar[int]
    name: str
    profile: str
    sent_count: int
    received_count: int
    sent_gms: _containers.RepeatedCompositeFieldContainer[GM]
    received_gms: _containers.RepeatedCompositeFieldContainer[GM]
    def __init__(self, name: _Optional[str] = ..., profile: _Optional[str] = ..., sent_count: _Optional[int] = ..., received_count: _Optional[int] = ..., sent_gms: _Optional[_Iterable[_Union[GM, _Mapping]]] = ..., received_gms: _Optional[_Iterable[_Union[GM, _Mapping]]] = ...) -> None: ...

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

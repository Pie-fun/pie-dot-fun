from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetDailyCheckinRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class ClaimDailyCheckinRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class DailyCheckin(_message.Message):
    __slots__ = ("user", "current_streak", "is_claimable", "points", "last_claim")
    USER_FIELD_NUMBER: _ClassVar[int]
    CURRENT_STREAK_FIELD_NUMBER: _ClassVar[int]
    IS_CLAIMABLE_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    LAST_CLAIM_FIELD_NUMBER: _ClassVar[int]
    user: str
    current_streak: int
    is_claimable: bool
    points: int
    last_claim: DailyCheckinClaim
    def __init__(self, user: _Optional[str] = ..., current_streak: _Optional[int] = ..., is_claimable: bool = ..., points: _Optional[int] = ..., last_claim: _Optional[_Union[DailyCheckinClaim, _Mapping]] = ...) -> None: ...

class DailyCheckinClaim(_message.Message):
    __slots__ = ("streak", "points", "claim_time")
    STREAK_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    CLAIM_TIME_FIELD_NUMBER: _ClassVar[int]
    streak: int
    points: int
    claim_time: _timestamp_pb2.Timestamp
    def __init__(self, streak: _Optional[int] = ..., points: _Optional[int] = ..., claim_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

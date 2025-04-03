from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from ethereum.v1.outpost import nft_pb2 as _nft_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GameMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    GAME_MODE_UNSPECIFIED: _ClassVar[GameMode]
    TIME_ATTACK: _ClassVar[GameMode]

class PlayMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PLAY_MODE_UNSPECIFIED: _ClassVar[PlayMode]
    SINGLE_PLAYER: _ClassVar[PlayMode]
GAME_MODE_UNSPECIFIED: GameMode
TIME_ATTACK: GameMode
PLAY_MODE_UNSPECIFIED: PlayMode
SINGLE_PLAYER: PlayMode

class CreateScoreRequest(_message.Message):
    __slots__ = ("score",)
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: Score
    def __init__(self, score: _Optional[_Union[Score, _Mapping]] = ...) -> None: ...

class ListScoresRequest(_message.Message):
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

class ListScoresResponse(_message.Message):
    __slots__ = ("scores", "next_page_token")
    SCORES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    scores: _containers.RepeatedCompositeFieldContainer[Score]
    next_page_token: str
    def __init__(self, scores: _Optional[_Iterable[_Union[Score, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetScoreRequest(_message.Message):
    __slots__ = ("score",)
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: str
    def __init__(self, score: _Optional[str] = ...) -> None: ...

class Score(_message.Message):
    __slots__ = ("name", "profile", "create_time", "point", "game_mode", "play_mode", "week")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    POINT_FIELD_NUMBER: _ClassVar[int]
    GAME_MODE_FIELD_NUMBER: _ClassVar[int]
    PLAY_MODE_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    name: str
    profile: str
    create_time: _timestamp_pb2.Timestamp
    point: int
    game_mode: GameMode
    play_mode: PlayMode
    week: int
    def __init__(self, name: _Optional[str] = ..., profile: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., point: _Optional[int] = ..., game_mode: _Optional[_Union[GameMode, str]] = ..., play_mode: _Optional[_Union[PlayMode, str]] = ..., week: _Optional[int] = ...) -> None: ...

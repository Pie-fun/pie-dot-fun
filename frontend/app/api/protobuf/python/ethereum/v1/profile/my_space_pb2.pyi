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

class MySpace(_message.Message):
    __slots__ = ("profile", "assets", "star_doodles")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    ASSETS_FIELD_NUMBER: _ClassVar[int]
    STAR_DOODLES_FIELD_NUMBER: _ClassVar[int]
    profile: str
    assets: Assets
    star_doodles: StarDoodles
    def __init__(self, profile: _Optional[str] = ..., assets: _Optional[_Union[Assets, _Mapping]] = ..., star_doodles: _Optional[_Union[StarDoodles, _Mapping]] = ...) -> None: ...

class Assets(_message.Message):
    __slots__ = ("spaceships", "badges", "scores", "alphabets", "blocks")
    SPACESHIPS_FIELD_NUMBER: _ClassVar[int]
    BADGES_FIELD_NUMBER: _ClassVar[int]
    SCORES_FIELD_NUMBER: _ClassVar[int]
    ALPHABETS_FIELD_NUMBER: _ClassVar[int]
    BLOCKS_FIELD_NUMBER: _ClassVar[int]
    spaceships: _containers.RepeatedCompositeFieldContainer[SpaceshipAsset]
    badges: _containers.RepeatedCompositeFieldContainer[BadgeAsset]
    scores: _containers.RepeatedCompositeFieldContainer[ScoreAsset]
    alphabets: _containers.RepeatedCompositeFieldContainer[AlphabetAsset]
    blocks: _containers.RepeatedCompositeFieldContainer[BlockAsset]
    def __init__(self, spaceships: _Optional[_Iterable[_Union[SpaceshipAsset, _Mapping]]] = ..., badges: _Optional[_Iterable[_Union[BadgeAsset, _Mapping]]] = ..., scores: _Optional[_Iterable[_Union[ScoreAsset, _Mapping]]] = ..., alphabets: _Optional[_Iterable[_Union[AlphabetAsset, _Mapping]]] = ..., blocks: _Optional[_Iterable[_Union[BlockAsset, _Mapping]]] = ...) -> None: ...

class SpaceshipReference(_message.Message):
    __slots__ = ("name", "nickname", "token_id", "image_uri")
    NAME_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    name: str
    nickname: str
    token_id: str
    image_uri: str
    def __init__(self, name: _Optional[str] = ..., nickname: _Optional[str] = ..., token_id: _Optional[str] = ..., image_uri: _Optional[str] = ...) -> None: ...

class BadgeReference(_message.Message):
    __slots__ = ("name",)
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class ScoreReference(_message.Message):
    __slots__ = ("name", "token_id", "image_uri")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    name: str
    token_id: str
    image_uri: str
    def __init__(self, name: _Optional[str] = ..., token_id: _Optional[str] = ..., image_uri: _Optional[str] = ...) -> None: ...

class SpaceshipAsset(_message.Message):
    __slots__ = ("id", "image_uri", "position", "create_time", "update_time", "reference")
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    id: int
    image_uri: str
    position: Position
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    reference: SpaceshipReference
    def __init__(self, id: _Optional[int] = ..., image_uri: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., reference: _Optional[_Union[SpaceshipReference, _Mapping]] = ...) -> None: ...

class BadgeAsset(_message.Message):
    __slots__ = ("id", "image_uri", "position", "create_time", "update_time", "reference")
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    id: int
    image_uri: str
    position: Position
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    reference: BadgeReference
    def __init__(self, id: _Optional[int] = ..., image_uri: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., reference: _Optional[_Union[BadgeReference, _Mapping]] = ...) -> None: ...

class ScoreAsset(_message.Message):
    __slots__ = ("id", "image_uri", "position", "create_time", "update_time", "reference")
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    id: int
    image_uri: str
    position: Position
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    reference: ScoreReference
    def __init__(self, id: _Optional[int] = ..., image_uri: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., reference: _Optional[_Union[ScoreReference, _Mapping]] = ...) -> None: ...

class AlphabetAsset(_message.Message):
    __slots__ = ("id", "image_uri", "position", "create_time", "update_time", "character")
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    CHARACTER_FIELD_NUMBER: _ClassVar[int]
    id: int
    image_uri: str
    position: Position
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    character: int
    def __init__(self, id: _Optional[int] = ..., image_uri: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., character: _Optional[int] = ...) -> None: ...

class BlockAsset(_message.Message):
    __slots__ = ("id", "image_uri", "position", "create_time", "update_time")
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    id: int
    image_uri: str
    position: Position
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[int] = ..., image_uri: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class StarDoodles(_message.Message):
    __slots__ = ("image_uri", "positions")
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    POSITIONS_FIELD_NUMBER: _ClassVar[int]
    image_uri: str
    positions: _containers.RepeatedCompositeFieldContainer[Position]
    def __init__(self, image_uri: _Optional[str] = ..., positions: _Optional[_Iterable[_Union[Position, _Mapping]]] = ...) -> None: ...

class Position(_message.Message):
    __slots__ = ("left", "top", "right", "bottom")
    LEFT_FIELD_NUMBER: _ClassVar[int]
    TOP_FIELD_NUMBER: _ClassVar[int]
    RIGHT_FIELD_NUMBER: _ClassVar[int]
    BOTTOM_FIELD_NUMBER: _ClassVar[int]
    left: int
    top: int
    right: int
    bottom: int
    def __init__(self, left: _Optional[int] = ..., top: _Optional[int] = ..., right: _Optional[int] = ..., bottom: _Optional[int] = ...) -> None: ...

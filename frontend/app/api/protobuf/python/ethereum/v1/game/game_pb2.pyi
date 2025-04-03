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

class ClientMessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CLIENT_MESSAGE_TYPE_UNSPECIFIED: _ClassVar[ClientMessageType]
    CLIENT_START_GAME: _ClassVar[ClientMessageType]
    CLIENT_END_GAME: _ClassVar[ClientMessageType]
    CLIENT_TAKE_STAR: _ClassVar[ClientMessageType]
    CLIENT_DESTROY_OBJECT: _ClassVar[ClientMessageType]
    CLIENT_SPACESHIP_POSITION: _ClassVar[ClientMessageType]
    CLIENT_SPACESHIP_EVENT: _ClassVar[ClientMessageType]
    CLIENT_KEYBOARD_EVENT: _ClassVar[ClientMessageType]
    CLIENT_DICONNECT: _ClassVar[ClientMessageType]

class ServerMessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SERVER_MESSAGE_TYPE_UNSPECIFIED: _ClassVar[ServerMessageType]
    SERVER_CONNECT: _ClassVar[ServerMessageType]
    SERVER_DISCONNECT: _ClassVar[ServerMessageType]
    SERVER_START_GAME: _ClassVar[ServerMessageType]
    SERVER_END_GAME: _ClassVar[ServerMessageType]
    SERVER_TAKE_STAR: _ClassVar[ServerMessageType]
    SERVER_DESTROY_OBJECT: _ClassVar[ServerMessageType]
    SERVER_SPACESHIP_POSITION: _ClassVar[ServerMessageType]
    SERVER_SPACESHIP_EVENT: _ClassVar[ServerMessageType]
    SERVER_KEYBOARD_EVENT: _ClassVar[ServerMessageType]

class ServerAckType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SERVER_RESPONSE_TYPE_UNSPECIFIED: _ClassVar[ServerAckType]
    ACK: _ClassVar[ServerAckType]
    NACK: _ClassVar[ServerAckType]
    NACK_UNAUTHENTICATED: _ClassVar[ServerAckType]
    NACK_SESSION_ALREADY_EXISTS: _ClassVar[ServerAckType]
    NACK_DAILY_ROUND_EXCEEDED: _ClassVar[ServerAckType]
    ERR: _ClassVar[ServerAckType]
CLIENT_MESSAGE_TYPE_UNSPECIFIED: ClientMessageType
CLIENT_START_GAME: ClientMessageType
CLIENT_END_GAME: ClientMessageType
CLIENT_TAKE_STAR: ClientMessageType
CLIENT_DESTROY_OBJECT: ClientMessageType
CLIENT_SPACESHIP_POSITION: ClientMessageType
CLIENT_SPACESHIP_EVENT: ClientMessageType
CLIENT_KEYBOARD_EVENT: ClientMessageType
CLIENT_DICONNECT: ClientMessageType
SERVER_MESSAGE_TYPE_UNSPECIFIED: ServerMessageType
SERVER_CONNECT: ServerMessageType
SERVER_DISCONNECT: ServerMessageType
SERVER_START_GAME: ServerMessageType
SERVER_END_GAME: ServerMessageType
SERVER_TAKE_STAR: ServerMessageType
SERVER_DESTROY_OBJECT: ServerMessageType
SERVER_SPACESHIP_POSITION: ServerMessageType
SERVER_SPACESHIP_EVENT: ServerMessageType
SERVER_KEYBOARD_EVENT: ServerMessageType
SERVER_RESPONSE_TYPE_UNSPECIFIED: ServerAckType
ACK: ServerAckType
NACK: ServerAckType
NACK_UNAUTHENTICATED: ServerAckType
NACK_SESSION_ALREADY_EXISTS: ServerAckType
NACK_DAILY_ROUND_EXCEEDED: ServerAckType
ERR: ServerAckType

class ClientMessage(_message.Message):
    __slots__ = ("msg_type", "payload")
    MSG_TYPE_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    msg_type: ClientMessageType
    payload: str
    def __init__(self, msg_type: _Optional[_Union[ClientMessageType, str]] = ..., payload: _Optional[str] = ...) -> None: ...

class ServerMessage(_message.Message):
    __slots__ = ("msg_type", "ack_type", "payload")
    MSG_TYPE_FIELD_NUMBER: _ClassVar[int]
    ACK_TYPE_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    msg_type: ServerMessageType
    ack_type: ServerAckType
    payload: str
    def __init__(self, msg_type: _Optional[_Union[ServerMessageType, str]] = ..., ack_type: _Optional[_Union[ServerAckType, str]] = ..., payload: _Optional[str] = ...) -> None: ...

class ConnectServerPayload(_message.Message):
    __slots__ = ("session_id", "game")
    SESSION_ID_FIELD_NUMBER: _ClassVar[int]
    GAME_FIELD_NUMBER: _ClassVar[int]
    session_id: str
    game: Game
    def __init__(self, session_id: _Optional[str] = ..., game: _Optional[_Union[Game, _Mapping]] = ...) -> None: ...

class TakeStarClientPayload(_message.Message):
    __slots__ = ("star",)
    STAR_FIELD_NUMBER: _ClassVar[int]
    star: Star
    def __init__(self, star: _Optional[_Union[Star, _Mapping]] = ...) -> None: ...

class SpceshipPosiitionClientPayload(_message.Message):
    __slots__ = ("position",)
    POSITION_FIELD_NUMBER: _ClassVar[int]
    position: Position
    def __init__(self, position: _Optional[_Union[Position, _Mapping]] = ...) -> None: ...

class SpaceshipEventClientPayload(_message.Message):
    __slots__ = ("event",)
    EVENT_FIELD_NUMBER: _ClassVar[int]
    event: str
    def __init__(self, event: _Optional[str] = ...) -> None: ...

class KeyboardEventClientPayload(_message.Message):
    __slots__ = ("event",)
    EVENT_FIELD_NUMBER: _ClassVar[int]
    event: str
    def __init__(self, event: _Optional[str] = ...) -> None: ...

class DestroyObjectClientPayload(_message.Message):
    __slots__ = ("position",)
    POSITION_FIELD_NUMBER: _ClassVar[int]
    position: Position
    def __init__(self, position: _Optional[_Union[Position, _Mapping]] = ...) -> None: ...

class Star(_message.Message):
    __slots__ = ("id", "position", "score")
    ID_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    id: str
    position: Position
    score: int
    def __init__(self, id: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., score: _Optional[int] = ...) -> None: ...

class Capsule(_message.Message):
    __slots__ = ("id", "position")
    ID_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    id: str
    position: Position
    def __init__(self, id: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ...) -> None: ...

class Position(_message.Message):
    __slots__ = ("x", "y")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class Map(_message.Message):
    __slots__ = ("stars", "capsules")
    STARS_FIELD_NUMBER: _ClassVar[int]
    CAPSULES_FIELD_NUMBER: _ClassVar[int]
    stars: _containers.RepeatedCompositeFieldContainer[Star]
    capsules: _containers.RepeatedCompositeFieldContainer[Capsule]
    def __init__(self, stars: _Optional[_Iterable[_Union[Star, _Mapping]]] = ..., capsules: _Optional[_Iterable[_Union[Capsule, _Mapping]]] = ...) -> None: ...

class Spaceship(_message.Message):
    __slots__ = ("position", "booster", "bullet")
    POSITION_FIELD_NUMBER: _ClassVar[int]
    BOOSTER_FIELD_NUMBER: _ClassVar[int]
    BULLET_FIELD_NUMBER: _ClassVar[int]
    position: Position
    booster: int
    bullet: int
    def __init__(self, position: _Optional[_Union[Position, _Mapping]] = ..., booster: _Optional[int] = ..., bullet: _Optional[int] = ...) -> None: ...

class Game(_message.Message):
    __slots__ = ("id", "map", "spaceship", "score", "create_time")
    ID_FIELD_NUMBER: _ClassVar[int]
    MAP_FIELD_NUMBER: _ClassVar[int]
    SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    id: str
    map: Map
    spaceship: Spaceship
    score: int
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., map: _Optional[_Union[Map, _Mapping]] = ..., spaceship: _Optional[_Union[Spaceship, _Mapping]] = ..., score: _Optional[int] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

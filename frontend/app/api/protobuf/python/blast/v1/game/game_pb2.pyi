from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.chain import sign_pb2 as _sign_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ClientMessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CLIENT_MESSAGE_TYPE_UNSPECIFIED: _ClassVar[ClientMessageType]
    CLIENT_CONNECT: _ClassVar[ClientMessageType]
    CLIENT_DISCONNECT: _ClassVar[ClientMessageType]
    CLIENT_TERMINATE: _ClassVar[ClientMessageType]
    CLIENT_START_GAME: _ClassVar[ClientMessageType]
    CLIENT_END_GAME: _ClassVar[ClientMessageType]
    CLIENT_TAKE_STAR: _ClassVar[ClientMessageType]
    CLIENT_TAKE_BLAST_GOLD: _ClassVar[ClientMessageType]
    CLIENT_DESTROY_CAPSULE: _ClassVar[ClientMessageType]
    CLIENT_DESTROY_METEOR: _ClassVar[ClientMessageType]
    CLIENT_SHOOT_BULLET: _ClassVar[ClientMessageType]
    CLIENT_EMPLOY_BOOST: _ClassVar[ClientMessageType]
    CLIENT_SPACESHIP_POSITION: _ClassVar[ClientMessageType]
    CLIENT_SPACESHIP_EVENT: _ClassVar[ClientMessageType]
    CLIENT_KEYBOARD_EVENT: _ClassVar[ClientMessageType]
    CLIENT_ALERT_SUSPICIOUS_USER: _ClassVar[ClientMessageType]

class ServerMessageType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SERVER_MESSAGE_TYPE_UNSPECIFIED: _ClassVar[ServerMessageType]
    SERVER_CONNECT: _ClassVar[ServerMessageType]
    SERVER_TERMINATE: _ClassVar[ServerMessageType]
    SERVER_RECONNECT: _ClassVar[ServerMessageType]
    SERVER_START_GAME: _ClassVar[ServerMessageType]
    SERVER_END_GAME: _ClassVar[ServerMessageType]
    SERVER_TAKE_STAR: _ClassVar[ServerMessageType]
    SERVER_TAKE_BLAST_GOLD: _ClassVar[ServerMessageType]
    SERVER_DESTROY_CAPSULE: _ClassVar[ServerMessageType]
    SERVER_DESTROY_METEOR: _ClassVar[ServerMessageType]
    SERVER_SHOOT_BULLET: _ClassVar[ServerMessageType]
    SERVER_EMPLOY_BOOST: _ClassVar[ServerMessageType]
    SERVER_SPACESHIP_POSITION: _ClassVar[ServerMessageType]
    SERVER_SPACESHIP_EVENT: _ClassVar[ServerMessageType]
    SERVER_KEYBOARD_EVENT: _ClassVar[ServerMessageType]
    SERVER_ALERT_SUSPICIOUS_USER: _ClassVar[ServerMessageType]

class ServerAckType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SERVER_RESPONSE_TYPE_UNSPECIFIED: _ClassVar[ServerAckType]
    ACK: _ClassVar[ServerAckType]
    NACK: _ClassVar[ServerAckType]
    NACK_UNAUTHENTICATED: _ClassVar[ServerAckType]
    NACK_UNAUTORIZAED: _ClassVar[ServerAckType]
    NACK_SESSION_ALREADY_EXISTS: _ClassVar[ServerAckType]
    NACK_DAILY_ROUND_EXCEEDED: _ClassVar[ServerAckType]
    NACK_BLAST_GOLD_NOT_ACQUIRABLE: _ClassVar[ServerAckType]
    NACK_PLAYTIME_OUT: _ClassVar[ServerAckType]
    NACK_SYBIL_USER: _ClassVar[ServerAckType]
    NACK_SESSION_NOT_FOUND: _ClassVar[ServerAckType]
    ERR: _ClassVar[ServerAckType]

class CapsuleRewardType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CAPSULE_REWARD_TYPE_UNSPECIFIED: _ClassVar[CapsuleRewardType]
    CAPSULE_REWARD_STAR: _ClassVar[CapsuleRewardType]
    CAPSULE_REWARD_BLAST_GOLD: _ClassVar[CapsuleRewardType]

class SuspiciousReason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SUSPICIOUS_REASON_UNSPECIFIED: _ClassVar[SuspiciousReason]
    SUSPICIOUS_REASON_DEBUG_CONSOLE_OPENED: _ClassVar[SuspiciousReason]
CLIENT_MESSAGE_TYPE_UNSPECIFIED: ClientMessageType
CLIENT_CONNECT: ClientMessageType
CLIENT_DISCONNECT: ClientMessageType
CLIENT_TERMINATE: ClientMessageType
CLIENT_START_GAME: ClientMessageType
CLIENT_END_GAME: ClientMessageType
CLIENT_TAKE_STAR: ClientMessageType
CLIENT_TAKE_BLAST_GOLD: ClientMessageType
CLIENT_DESTROY_CAPSULE: ClientMessageType
CLIENT_DESTROY_METEOR: ClientMessageType
CLIENT_SHOOT_BULLET: ClientMessageType
CLIENT_EMPLOY_BOOST: ClientMessageType
CLIENT_SPACESHIP_POSITION: ClientMessageType
CLIENT_SPACESHIP_EVENT: ClientMessageType
CLIENT_KEYBOARD_EVENT: ClientMessageType
CLIENT_ALERT_SUSPICIOUS_USER: ClientMessageType
SERVER_MESSAGE_TYPE_UNSPECIFIED: ServerMessageType
SERVER_CONNECT: ServerMessageType
SERVER_TERMINATE: ServerMessageType
SERVER_RECONNECT: ServerMessageType
SERVER_START_GAME: ServerMessageType
SERVER_END_GAME: ServerMessageType
SERVER_TAKE_STAR: ServerMessageType
SERVER_TAKE_BLAST_GOLD: ServerMessageType
SERVER_DESTROY_CAPSULE: ServerMessageType
SERVER_DESTROY_METEOR: ServerMessageType
SERVER_SHOOT_BULLET: ServerMessageType
SERVER_EMPLOY_BOOST: ServerMessageType
SERVER_SPACESHIP_POSITION: ServerMessageType
SERVER_SPACESHIP_EVENT: ServerMessageType
SERVER_KEYBOARD_EVENT: ServerMessageType
SERVER_ALERT_SUSPICIOUS_USER: ServerMessageType
SERVER_RESPONSE_TYPE_UNSPECIFIED: ServerAckType
ACK: ServerAckType
NACK: ServerAckType
NACK_UNAUTHENTICATED: ServerAckType
NACK_UNAUTORIZAED: ServerAckType
NACK_SESSION_ALREADY_EXISTS: ServerAckType
NACK_DAILY_ROUND_EXCEEDED: ServerAckType
NACK_BLAST_GOLD_NOT_ACQUIRABLE: ServerAckType
NACK_PLAYTIME_OUT: ServerAckType
NACK_SYBIL_USER: ServerAckType
NACK_SESSION_NOT_FOUND: ServerAckType
ERR: ServerAckType
CAPSULE_REWARD_TYPE_UNSPECIFIED: CapsuleRewardType
CAPSULE_REWARD_STAR: CapsuleRewardType
CAPSULE_REWARD_BLAST_GOLD: CapsuleRewardType
SUSPICIOUS_REASON_UNSPECIFIED: SuspiciousReason
SUSPICIOUS_REASON_DEBUG_CONSOLE_OPENED: SuspiciousReason

class GetDailyPlayCountRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class GetDailyPlayCountResponse(_message.Message):
    __slots__ = ("daily_play_count", "daily_play_count_quota")
    DAILY_PLAY_COUNT_FIELD_NUMBER: _ClassVar[int]
    DAILY_PLAY_COUNT_QUOTA_FIELD_NUMBER: _ClassVar[int]
    daily_play_count: int
    daily_play_count_quota: int
    def __init__(self, daily_play_count: _Optional[int] = ..., daily_play_count_quota: _Optional[int] = ...) -> None: ...

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

class ReconnectServerPayload(_message.Message):
    __slots__ = ("session_id", "game")
    SESSION_ID_FIELD_NUMBER: _ClassVar[int]
    GAME_FIELD_NUMBER: _ClassVar[int]
    session_id: str
    game: Game
    def __init__(self, session_id: _Optional[str] = ..., game: _Optional[_Union[Game, _Mapping]] = ...) -> None: ...

class EndGameServerPayload(_message.Message):
    __slots__ = ("game_id", "score", "blast_gold")
    GAME_ID_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    BLAST_GOLD_FIELD_NUMBER: _ClassVar[int]
    game_id: str
    score: int
    blast_gold: float
    def __init__(self, game_id: _Optional[str] = ..., score: _Optional[int] = ..., blast_gold: _Optional[float] = ...) -> None: ...

class TakeStarClientPayload(_message.Message):
    __slots__ = ("star_id",)
    STAR_ID_FIELD_NUMBER: _ClassVar[int]
    star_id: str
    def __init__(self, star_id: _Optional[str] = ...) -> None: ...

class TakeStarServerPayload(_message.Message):
    __slots__ = ("star_id", "total_score")
    STAR_ID_FIELD_NUMBER: _ClassVar[int]
    TOTAL_SCORE_FIELD_NUMBER: _ClassVar[int]
    star_id: str
    total_score: int
    def __init__(self, star_id: _Optional[str] = ..., total_score: _Optional[int] = ...) -> None: ...

class TakeBlastGoldClientPayload(_message.Message):
    __slots__ = ("blast_gold_id",)
    BLAST_GOLD_ID_FIELD_NUMBER: _ClassVar[int]
    blast_gold_id: str
    def __init__(self, blast_gold_id: _Optional[str] = ...) -> None: ...

class DestroyCapsuleClientPayload(_message.Message):
    __slots__ = ("capsule_id",)
    CAPSULE_ID_FIELD_NUMBER: _ClassVar[int]
    capsule_id: str
    def __init__(self, capsule_id: _Optional[str] = ...) -> None: ...

class DestroyMeteorClientPayload(_message.Message):
    __slots__ = ("position",)
    POSITION_FIELD_NUMBER: _ClassVar[int]
    position: Position
    def __init__(self, position: _Optional[_Union[Position, _Mapping]] = ...) -> None: ...

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

class ShootBulletClientPayload(_message.Message):
    __slots__ = ("remaining_bullets",)
    REMAINING_BULLETS_FIELD_NUMBER: _ClassVar[int]
    remaining_bullets: int
    def __init__(self, remaining_bullets: _Optional[int] = ...) -> None: ...

class EmployBoostClientPayload(_message.Message):
    __slots__ = ("remaining_boosts",)
    REMAINING_BOOSTS_FIELD_NUMBER: _ClassVar[int]
    remaining_boosts: int
    def __init__(self, remaining_boosts: _Optional[int] = ...) -> None: ...

class LifeStatusClientPayload(_message.Message):
    __slots__ = ("remaining_lives",)
    REMAINING_LIVES_FIELD_NUMBER: _ClassVar[int]
    remaining_lives: int
    def __init__(self, remaining_lives: _Optional[int] = ...) -> None: ...

class AlertSuspiciousUserClientPayload(_message.Message):
    __slots__ = ("reason",)
    REASON_FIELD_NUMBER: _ClassVar[int]
    reason: SuspiciousReason
    def __init__(self, reason: _Optional[_Union[SuspiciousReason, str]] = ...) -> None: ...

class Star(_message.Message):
    __slots__ = ("id", "capsule_id", "position", "score")
    ID_FIELD_NUMBER: _ClassVar[int]
    CAPSULE_ID_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    id: str
    capsule_id: str
    position: Position
    score: int
    def __init__(self, id: _Optional[str] = ..., capsule_id: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., score: _Optional[int] = ...) -> None: ...

class Capsule(_message.Message):
    __slots__ = ("id", "position", "reward_type")
    ID_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    REWARD_TYPE_FIELD_NUMBER: _ClassVar[int]
    id: str
    position: Position
    reward_type: CapsuleRewardType
    def __init__(self, id: _Optional[str] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., reward_type: _Optional[_Union[CapsuleRewardType, str]] = ...) -> None: ...

class BlastGold(_message.Message):
    __slots__ = ("id", "capsule_id", "amount")
    ID_FIELD_NUMBER: _ClassVar[int]
    CAPSULE_ID_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    id: str
    capsule_id: str
    amount: float
    def __init__(self, id: _Optional[str] = ..., capsule_id: _Optional[str] = ..., amount: _Optional[float] = ...) -> None: ...

class Meteor(_message.Message):
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
    __slots__ = ("stars", "capsules", "blast_golds", "meteors")
    STARS_FIELD_NUMBER: _ClassVar[int]
    CAPSULES_FIELD_NUMBER: _ClassVar[int]
    BLAST_GOLDS_FIELD_NUMBER: _ClassVar[int]
    METEORS_FIELD_NUMBER: _ClassVar[int]
    stars: _containers.RepeatedCompositeFieldContainer[Star]
    capsules: _containers.RepeatedCompositeFieldContainer[Capsule]
    blast_golds: _containers.RepeatedCompositeFieldContainer[BlastGold]
    meteors: _containers.RepeatedCompositeFieldContainer[Meteor]
    def __init__(self, stars: _Optional[_Iterable[_Union[Star, _Mapping]]] = ..., capsules: _Optional[_Iterable[_Union[Capsule, _Mapping]]] = ..., blast_golds: _Optional[_Iterable[_Union[BlastGold, _Mapping]]] = ..., meteors: _Optional[_Iterable[_Union[Meteor, _Mapping]]] = ...) -> None: ...

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
    __slots__ = ("id", "map", "spaceship", "score", "create_time", "start_time")
    ID_FIELD_NUMBER: _ClassVar[int]
    MAP_FIELD_NUMBER: _ClassVar[int]
    SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    id: str
    map: Map
    spaceship: Spaceship
    score: int
    create_time: _timestamp_pb2.Timestamp
    start_time: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., map: _Optional[_Union[Map, _Mapping]] = ..., spaceship: _Optional[_Union[Spaceship, _Mapping]] = ..., score: _Optional[int] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

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
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SignMessageRequest(_message.Message):
    __slots__ = ("message",)
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class SignatureResponse(_message.Message):
    __slots__ = ("signature", "message")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    signature: str
    message: str
    def __init__(self, signature: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class SignatureTypedResponse(_message.Message):
    __slots__ = ("signature", "message")
    class MessageEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    signature: str
    message: _containers.ScalarMap[str, str]
    def __init__(self, signature: _Optional[str] = ..., message: _Optional[_Mapping[str, str]] = ...) -> None: ...

class MintAndCreateSquareParams(_message.Message):
    __slots__ = ("user", "minStaking", "signatureId", "timestamp", "nonce")
    USER_FIELD_NUMBER: _ClassVar[int]
    MINSTAKING_FIELD_NUMBER: _ClassVar[int]
    SIGNATUREID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    user: str
    minStaking: str
    signatureId: str
    timestamp: int
    nonce: str
    def __init__(self, user: _Optional[str] = ..., minStaking: _Optional[str] = ..., signatureId: _Optional[str] = ..., timestamp: _Optional[int] = ..., nonce: _Optional[str] = ...) -> None: ...

class SignMintSquareRequest(_message.Message):
    __slots__ = ("params",)
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    params: MintAndCreateSquareParams
    def __init__(self, params: _Optional[_Union[MintAndCreateSquareParams, _Mapping]] = ...) -> None: ...

class SignMintSquareResponse(_message.Message):
    __slots__ = ("signature", "params")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    signature: str
    params: MintAndCreateSquareParams
    def __init__(self, signature: _Optional[str] = ..., params: _Optional[_Union[MintAndCreateSquareParams, _Mapping]] = ...) -> None: ...

class JoinSquareParams(_message.Message):
    __slots__ = ("user", "squareId", "timestamp", "nonce")
    USER_FIELD_NUMBER: _ClassVar[int]
    SQUAREID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    user: str
    squareId: int
    timestamp: int
    nonce: str
    def __init__(self, user: _Optional[str] = ..., squareId: _Optional[int] = ..., timestamp: _Optional[int] = ..., nonce: _Optional[str] = ...) -> None: ...

class SignJoinSquareRequest(_message.Message):
    __slots__ = ("params",)
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    params: JoinSquareParams
    def __init__(self, params: _Optional[_Union[JoinSquareParams, _Mapping]] = ...) -> None: ...

class SignJoinSquareResponse(_message.Message):
    __slots__ = ("signature", "params")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    signature: str
    params: JoinSquareParams
    def __init__(self, signature: _Optional[str] = ..., params: _Optional[_Union[JoinSquareParams, _Mapping]] = ...) -> None: ...

class TransferSquareParams(_message.Message):
    __slots__ = ("user", "to", "timestamp", "nonce")
    USER_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    user: str
    to: int
    timestamp: int
    nonce: str
    def __init__(self, user: _Optional[str] = ..., to: _Optional[int] = ..., timestamp: _Optional[int] = ..., nonce: _Optional[str] = ..., **kwargs) -> None: ...

class SignTransferSquareRequest(_message.Message):
    __slots__ = ("params",)
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    params: TransferSquareParams
    def __init__(self, params: _Optional[_Union[TransferSquareParams, _Mapping]] = ...) -> None: ...

class SignTransferSquareResponse(_message.Message):
    __slots__ = ("signature", "params")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    signature: str
    params: TransferSquareParams
    def __init__(self, signature: _Optional[str] = ..., params: _Optional[_Union[TransferSquareParams, _Mapping]] = ...) -> None: ...

class UploadScoreParams(_message.Message):
    __slots__ = ("player", "gameCode", "squareIdOrZero", "score", "gameId", "timestamp", "nonce")
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    GAMECODE_FIELD_NUMBER: _ClassVar[int]
    SQUAREIDORZERO_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    GAMEID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    player: str
    gameCode: int
    squareIdOrZero: int
    score: int
    gameId: str
    timestamp: int
    nonce: str
    def __init__(self, player: _Optional[str] = ..., gameCode: _Optional[int] = ..., squareIdOrZero: _Optional[int] = ..., score: _Optional[int] = ..., gameId: _Optional[str] = ..., timestamp: _Optional[int] = ..., nonce: _Optional[str] = ...) -> None: ...

class SignUploadScoreRequest(_message.Message):
    __slots__ = ("params",)
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    params: UploadScoreParams
    def __init__(self, params: _Optional[_Union[UploadScoreParams, _Mapping]] = ...) -> None: ...

class SignUploadScoreResponse(_message.Message):
    __slots__ = ("signature", "params")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    signature: str
    params: UploadScoreParams
    def __init__(self, signature: _Optional[str] = ..., params: _Optional[_Union[UploadScoreParams, _Mapping]] = ...) -> None: ...

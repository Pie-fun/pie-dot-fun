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
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class SignWKeyMintRequest(_message.Message):
    __slots__ = ("eoa_address",)
    EOA_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    eoa_address: str
    def __init__(self, eoa_address: _Optional[str] = ...) -> None: ...

class SignKeyMintRequest(_message.Message):
    __slots__ = ("profile_contract_address", "profile_token_id", "spaceship_token_id", "key_token_id", "eth_contribution")
    PROFILE_CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PROFILE_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    SPACESHIP_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    KEY_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    ETH_CONTRIBUTION_FIELD_NUMBER: _ClassVar[int]
    profile_contract_address: str
    profile_token_id: str
    spaceship_token_id: str
    key_token_id: str
    eth_contribution: str
    def __init__(self, profile_contract_address: _Optional[str] = ..., profile_token_id: _Optional[str] = ..., spaceship_token_id: _Optional[str] = ..., key_token_id: _Optional[str] = ..., eth_contribution: _Optional[str] = ...) -> None: ...

class SignScoreMintRequest(_message.Message):
    __slots__ = ("profile_address", "score_id")
    PROFILE_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SCORE_ID_FIELD_NUMBER: _ClassVar[int]
    profile_address: str
    score_id: str
    def __init__(self, profile_address: _Optional[str] = ..., score_id: _Optional[str] = ...) -> None: ...

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

from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class EventType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    EVENT_TYPE_UNSPECIFIED: _ClassVar[EventType]
    MINT_SPACESHIP: _ClassVar[EventType]
    BURN_SPACESHIP: _ClassVar[EventType]
EVENT_TYPE_UNSPECIFIED: EventType
MINT_SPACESHIP: EventType
BURN_SPACESHIP: EventType

class MintProtoShipUniverse1Request(_message.Message):
    __slots__ = ("token_contract", "token_id")
    TOKEN_CONTRACT_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    token_contract: str
    token_id: str
    def __init__(self, token_contract: _Optional[str] = ..., token_id: _Optional[str] = ...) -> None: ...

class MintProtoShipUniverse1Response(_message.Message):
    __slots__ = ("transaction", "address")
    TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    transaction: Transaction
    address: str
    def __init__(self, transaction: _Optional[_Union[Transaction, _Mapping]] = ..., address: _Optional[str] = ...) -> None: ...

class BurnProtoShipUniverse1Request(_message.Message):
    __slots__ = ("token_id",)
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    token_id: str
    def __init__(self, token_id: _Optional[str] = ...) -> None: ...

class UpgradeToOwnerShipUniverse1Request(_message.Message):
    __slots__ = ("token_id",)
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    token_id: str
    def __init__(self, token_id: _Optional[str] = ...) -> None: ...

class Transaction(_message.Message):
    __slots__ = ("hash", "chain_id", "nonce", "gas_price", "data")
    HASH_FIELD_NUMBER: _ClassVar[int]
    CHAIN_ID_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    GAS_PRICE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    hash: str
    chain_id: str
    nonce: int
    gas_price: str
    data: bytes
    def __init__(self, hash: _Optional[str] = ..., chain_id: _Optional[str] = ..., nonce: _Optional[int] = ..., gas_price: _Optional[str] = ..., data: _Optional[bytes] = ...) -> None: ...

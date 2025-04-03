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

class BasketEventExtraInfoKey(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    BASKET_EXTRA_INFO_KEY_UNSPECIFIED: _ClassVar[BasketEventExtraInfoKey]
    BASKET_EXTRA_INFO_KEY_VALUE_USDC: _ClassVar[BasketEventExtraInfoKey]
    BASKET_EXTRA_INFO_KEY_VALUE_SOL: _ClassVar[BasketEventExtraInfoKey]
BASKET_EXTRA_INFO_KEY_UNSPECIFIED: BasketEventExtraInfoKey
BASKET_EXTRA_INFO_KEY_VALUE_USDC: BasketEventExtraInfoKey
BASKET_EXTRA_INFO_KEY_VALUE_SOL: BasketEventExtraInfoKey

class BasketComponent(_message.Message):
    __slots__ = ("mint", "ratio")
    MINT_FIELD_NUMBER: _ClassVar[int]
    RATIO_FIELD_NUMBER: _ClassVar[int]
    mint: str
    ratio: str
    def __init__(self, mint: _Optional[str] = ..., ratio: _Optional[str] = ...) -> None: ...

class CreateBasketEvent(_message.Message):
    __slots__ = ("basket_id", "name", "symbol", "uri", "creator", "mint", "components")
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    MINT_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    basket_id: int
    name: str
    symbol: str
    uri: str
    creator: str
    mint: str
    components: _containers.RepeatedCompositeFieldContainer[BasketComponent]
    def __init__(self, basket_id: _Optional[int] = ..., name: _Optional[str] = ..., symbol: _Optional[str] = ..., uri: _Optional[str] = ..., creator: _Optional[str] = ..., mint: _Optional[str] = ..., components: _Optional[_Iterable[_Union[BasketComponent, _Mapping]]] = ...) -> None: ...

class StartRebalancingEvent(_message.Message):
    __slots__ = ("basket_id", "mint", "timestamp")
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    MINT_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    basket_id: int
    mint: str
    timestamp: int
    def __init__(self, basket_id: _Optional[int] = ..., mint: _Optional[str] = ..., timestamp: _Optional[int] = ...) -> None: ...

class StopRebalancingEvent(_message.Message):
    __slots__ = ("basket_id", "mint", "components", "timestamp")
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    MINT_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    basket_id: int
    mint: str
    components: _containers.RepeatedCompositeFieldContainer[BasketComponent]
    timestamp: int
    def __init__(self, basket_id: _Optional[int] = ..., mint: _Optional[str] = ..., components: _Optional[_Iterable[_Union[BasketComponent, _Mapping]]] = ..., timestamp: _Optional[int] = ...) -> None: ...

class RedeemBasketTokenEvent(_message.Message):
    __slots__ = ("basket_id", "user", "basket_mint", "amount")
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    basket_id: int
    user: str
    basket_mint: str
    amount: int
    def __init__(self, basket_id: _Optional[int] = ..., user: _Optional[str] = ..., basket_mint: _Optional[str] = ..., amount: _Optional[int] = ...) -> None: ...

class MintBasketTokenEvent(_message.Message):
    __slots__ = ("basket_id", "user", "basket_mint", "amount")
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    basket_id: int
    user: str
    basket_mint: str
    amount: int
    def __init__(self, basket_id: _Optional[int] = ..., user: _Optional[str] = ..., basket_mint: _Optional[str] = ..., amount: _Optional[int] = ...) -> None: ...

class TransferBasketEvent(_message.Message):
    __slots__ = ("basket_mint", "to", "amount")
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    basket_mint: str
    to: str
    amount: int
    def __init__(self, basket_mint: _Optional[str] = ..., to: _Optional[str] = ..., amount: _Optional[int] = ..., **kwargs) -> None: ...

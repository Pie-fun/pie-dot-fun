from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.nft import nft_pb2 as _nft_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class StakingCurrency(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CURRENCY_UNSPECIFIED: _ClassVar[StakingCurrency]
    ETH: _ClassVar[StakingCurrency]

class StakingState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[StakingState]
    ACTIVE: _ClassVar[StakingState]
    INACTIVE: _ClassVar[StakingState]
CURRENCY_UNSPECIFIED: StakingCurrency
ETH: StakingCurrency
STATE_UNSPECIFIED: StakingState
ACTIVE: StakingState
INACTIVE: StakingState

class GetStakingRequest(_message.Message):
    __slots__ = ("staking",)
    STAKING_FIELD_NUMBER: _ClassVar[int]
    staking: str
    def __init__(self, staking: _Optional[str] = ...) -> None: ...

class ListStakingsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListStakingsResponse(_message.Message):
    __slots__ = ("stakings", "next_page_token")
    STAKINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    stakings: _containers.RepeatedCompositeFieldContainer[Staking]
    next_page_token: str
    def __init__(self, stakings: _Optional[_Iterable[_Union[Staking, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetStakingTotalAmountRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetStakingTotalAmountResponse(_message.Message):
    __slots__ = ("total_amount",)
    TOTAL_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    total_amount: float
    def __init__(self, total_amount: _Optional[float] = ...) -> None: ...

class Staking(_message.Message):
    __slots__ = ("name", "user_address", "currency", "amount", "state")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    currency: StakingCurrency
    amount: float
    state: StakingState
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., currency: _Optional[_Union[StakingCurrency, str]] = ..., amount: _Optional[float] = ..., state: _Optional[_Union[StakingState, str]] = ...) -> None: ...

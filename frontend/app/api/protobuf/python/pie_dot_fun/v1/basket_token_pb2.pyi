from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from pie_dot_fun.v1 import auth_pb2 as _auth_pb2
from pie_dot_fun.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BasketTokenState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    BASKET_TOKEN_STATE_UNSPECIFIED: _ClassVar[BasketTokenState]
    CREATED: _ClassVar[BasketTokenState]
    LISTED: _ClassVar[BasketTokenState]

class TokenStrategy(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TOKEN_STRATEGY_UNSPECIFIED: _ClassVar[TokenStrategy]
    MARKET_CAP_WEIGHTED: _ClassVar[TokenStrategy]
    EQUAL_WEIGHTED: _ClassVar[TokenStrategy]
    FACTOR_WEIGHTED: _ClassVar[TokenStrategy]
    FUNDAMENTAL_WEIGHTED: _ClassVar[TokenStrategy]
    RISK_WEIGHTED: _ClassVar[TokenStrategy]
    MOMENTUM_WEIGHTED: _ClassVar[TokenStrategy]
    CUSTOM_WEIGHTED: _ClassVar[TokenStrategy]

class RebalanceFrequency(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REBALANCE_FREQUENCY_UNSPECIFIED: _ClassVar[RebalanceFrequency]
    MANUAL: _ClassVar[RebalanceFrequency]
    DAILY: _ClassVar[RebalanceFrequency]
    WEEKLY: _ClassVar[RebalanceFrequency]
    MONTHLY: _ClassVar[RebalanceFrequency]
BASKET_TOKEN_STATE_UNSPECIFIED: BasketTokenState
CREATED: BasketTokenState
LISTED: BasketTokenState
TOKEN_STRATEGY_UNSPECIFIED: TokenStrategy
MARKET_CAP_WEIGHTED: TokenStrategy
EQUAL_WEIGHTED: TokenStrategy
FACTOR_WEIGHTED: TokenStrategy
FUNDAMENTAL_WEIGHTED: TokenStrategy
RISK_WEIGHTED: TokenStrategy
MOMENTUM_WEIGHTED: TokenStrategy
CUSTOM_WEIGHTED: TokenStrategy
REBALANCE_FREQUENCY_UNSPECIFIED: RebalanceFrequency
MANUAL: RebalanceFrequency
DAILY: RebalanceFrequency
WEEKLY: RebalanceFrequency
MONTHLY: RebalanceFrequency

class GetBasketTokenRequest(_message.Message):
    __slots__ = ("basket_token",)
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    basket_token: str
    def __init__(self, basket_token: _Optional[str] = ...) -> None: ...

class ListBasketTokensRequest(_message.Message):
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

class ListBasketTokensResponse(_message.Message):
    __slots__ = ("basket_tokens", "next_page_token")
    BASKET_TOKENS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    basket_tokens: _containers.RepeatedCompositeFieldContainer[BasketToken]
    next_page_token: str
    def __init__(self, basket_tokens: _Optional[_Iterable[_Union[BasketToken, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListRebalancingHistoriesRequest(_message.Message):
    __slots__ = ("basket_token", "page_size", "page_token", "filter")
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    basket_token: str
    page_size: int
    page_token: str
    filter: str
    def __init__(self, basket_token: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListRebalancingHistoriesResponse(_message.Message):
    __slots__ = ("rebalancing_histories", "next_page_token")
    REBALANCING_HISTORIES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rebalancing_histories: _containers.RepeatedCompositeFieldContainer[BasketTokenRebanlancingHistory]
    next_page_token: str
    def __init__(self, rebalancing_histories: _Optional[_Iterable[_Union[BasketTokenRebanlancingHistory, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class BasketToken(_message.Message):
    __slots__ = ("name", "chain", "address", "display_name", "symbol", "icon_image_uri", "description", "one_line_description", "state", "strategy", "rebalance_frequency", "is_rebalancing", "components", "creator", "create_time", "expire_time", "last_rebalance_time", "total_supply", "total_holders", "onchain_id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    ICON_IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ONE_LINE_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_FIELD_NUMBER: _ClassVar[int]
    REBALANCE_FREQUENCY_FIELD_NUMBER: _ClassVar[int]
    IS_REBALANCING_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    EXPIRE_TIME_FIELD_NUMBER: _ClassVar[int]
    LAST_REBALANCE_TIME_FIELD_NUMBER: _ClassVar[int]
    TOTAL_SUPPLY_FIELD_NUMBER: _ClassVar[int]
    TOTAL_HOLDERS_FIELD_NUMBER: _ClassVar[int]
    ONCHAIN_ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    chain: _common_pb2.ChainType
    address: str
    display_name: str
    symbol: str
    icon_image_uri: str
    description: str
    one_line_description: str
    state: BasketTokenState
    strategy: TokenStrategy
    rebalance_frequency: RebalanceFrequency
    is_rebalancing: bool
    components: _containers.RepeatedCompositeFieldContainer[Component]
    creator: str
    create_time: _timestamp_pb2.Timestamp
    expire_time: _timestamp_pb2.Timestamp
    last_rebalance_time: _timestamp_pb2.Timestamp
    total_supply: _common_pb2.Quantity
    total_holders: int
    onchain_id: str
    def __init__(self, name: _Optional[str] = ..., chain: _Optional[_Union[_common_pb2.ChainType, str]] = ..., address: _Optional[str] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ..., icon_image_uri: _Optional[str] = ..., description: _Optional[str] = ..., one_line_description: _Optional[str] = ..., state: _Optional[_Union[BasketTokenState, str]] = ..., strategy: _Optional[_Union[TokenStrategy, str]] = ..., rebalance_frequency: _Optional[_Union[RebalanceFrequency, str]] = ..., is_rebalancing: bool = ..., components: _Optional[_Iterable[_Union[Component, _Mapping]]] = ..., creator: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., expire_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., last_rebalance_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., total_supply: _Optional[_Union[_common_pb2.Quantity, _Mapping]] = ..., total_holders: _Optional[int] = ..., onchain_id: _Optional[str] = ...) -> None: ...

class Component(_message.Message):
    __slots__ = ("fungible_token", "chain", "address", "weight")
    FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    fungible_token: str
    chain: _common_pb2.ChainType
    address: str
    weight: _common_pb2.Percentage
    def __init__(self, fungible_token: _Optional[str] = ..., chain: _Optional[_Union[_common_pb2.ChainType, str]] = ..., address: _Optional[str] = ..., weight: _Optional[_Union[_common_pb2.Percentage, _Mapping]] = ...) -> None: ...

class BasketTokenRebanlancingHistory(_message.Message):
    __slots__ = ("tx_signatures", "before_components", "after_components", "rebalance_time", "components_changed")
    TX_SIGNATURES_FIELD_NUMBER: _ClassVar[int]
    BEFORE_COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    AFTER_COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    REBALANCE_TIME_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_CHANGED_FIELD_NUMBER: _ClassVar[int]
    tx_signatures: _containers.RepeatedScalarFieldContainer[str]
    before_components: _containers.RepeatedCompositeFieldContainer[Component]
    after_components: _containers.RepeatedCompositeFieldContainer[Component]
    rebalance_time: _timestamp_pb2.Timestamp
    components_changed: bool
    def __init__(self, tx_signatures: _Optional[_Iterable[str]] = ..., before_components: _Optional[_Iterable[_Union[Component, _Mapping]]] = ..., after_components: _Optional[_Iterable[_Union[Component, _Mapping]]] = ..., rebalance_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., components_changed: bool = ...) -> None: ...

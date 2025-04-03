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

class TickInterval(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INTERVAL_UNSPECIFIED: _ClassVar[TickInterval]
    INTERVAL_1_SECOND: _ClassVar[TickInterval]
    INTERVAL_1_MINUTE: _ClassVar[TickInterval]
    INTERVAL_15_MINUTES: _ClassVar[TickInterval]
    INTERVAL_1_HOUR: _ClassVar[TickInterval]
    INTERVAL_4_HOUR: _ClassVar[TickInterval]
    INTERVAL_1_DAY: _ClassVar[TickInterval]
INTERVAL_UNSPECIFIED: TickInterval
INTERVAL_1_SECOND: TickInterval
INTERVAL_1_MINUTE: TickInterval
INTERVAL_15_MINUTES: TickInterval
INTERVAL_1_HOUR: TickInterval
INTERVAL_4_HOUR: TickInterval
INTERVAL_1_DAY: TickInterval

class BasketTokenMarket(_message.Message):
    __slots__ = ("name", "basket_token", "native_currency", "values", "market_caps", "value_changes", "maximum_draw_down", "value", "market_cap", "value_change")
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    class MarketCapsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    class ValueChangesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.PriceChangesByPeriod
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.PriceChangesByPeriod, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    NATIVE_CURRENCY_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    MARKET_CAPS_FIELD_NUMBER: _ClassVar[int]
    VALUE_CHANGES_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_DRAW_DOWN_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    MARKET_CAP_FIELD_NUMBER: _ClassVar[int]
    VALUE_CHANGE_FIELD_NUMBER: _ClassVar[int]
    name: str
    basket_token: str
    native_currency: _common_pb2.Currency
    values: _containers.MessageMap[str, _common_pb2.Money]
    market_caps: _containers.MessageMap[str, _common_pb2.Money]
    value_changes: _containers.MessageMap[str, _common_pb2.PriceChangesByPeriod]
    maximum_draw_down: _common_pb2.Percentage
    value: _common_pb2.Money
    market_cap: _common_pb2.Money
    value_change: _common_pb2.PriceChangesByPeriod
    def __init__(self, name: _Optional[str] = ..., basket_token: _Optional[str] = ..., native_currency: _Optional[_Union[_common_pb2.Currency, str]] = ..., values: _Optional[_Mapping[str, _common_pb2.Money]] = ..., market_caps: _Optional[_Mapping[str, _common_pb2.Money]] = ..., value_changes: _Optional[_Mapping[str, _common_pb2.PriceChangesByPeriod]] = ..., maximum_draw_down: _Optional[_Union[_common_pb2.Percentage, _Mapping]] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., market_cap: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., value_change: _Optional[_Union[_common_pb2.PriceChangesByPeriod, _Mapping]] = ...) -> None: ...

class CreateBasketTokenMarketRequest(_message.Message):
    __slots__ = ("basket_token_market", "display_name", "symbol")
    BASKET_TOKEN_MARKET_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    basket_token_market: BasketTokenMarket
    display_name: str
    symbol: str
    def __init__(self, basket_token_market: _Optional[_Union[BasketTokenMarket, _Mapping]] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ...) -> None: ...

class CustomCreateBasketTokenMarketRequest(_message.Message):
    __slots__ = ("basket_token_market", "components", "display_name", "symbol")
    class Component(_message.Message):
        __slots__ = ("fungible_token", "quantity")
        FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        fungible_token: str
        quantity: _common_pb2.Quantity
        def __init__(self, fungible_token: _Optional[str] = ..., quantity: _Optional[_Union[_common_pb2.Quantity, _Mapping]] = ...) -> None: ...
    BASKET_TOKEN_MARKET_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    basket_token_market: BasketTokenMarket
    components: _containers.RepeatedCompositeFieldContainer[CustomCreateBasketTokenMarketRequest.Component]
    display_name: str
    symbol: str
    def __init__(self, basket_token_market: _Optional[_Union[BasketTokenMarket, _Mapping]] = ..., components: _Optional[_Iterable[_Union[CustomCreateBasketTokenMarketRequest.Component, _Mapping]]] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ...) -> None: ...

class GetBasketTokenMarketRequest(_message.Message):
    __slots__ = ("basket_token_market", "currency")
    BASKET_TOKEN_MARKET_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    basket_token_market: str
    currency: _common_pb2.Currency
    def __init__(self, basket_token_market: _Optional[str] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ...) -> None: ...

class ListBasketTokensMarketsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter", "order_by", "currency")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    order_by: str
    currency: _common_pb2.Currency
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., order_by: _Optional[str] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ...) -> None: ...

class ListBasketTokensMarketsResponse(_message.Message):
    __slots__ = ("basket_token_markets", "next_page_token")
    BASKET_TOKEN_MARKETS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    basket_token_markets: _containers.RepeatedCompositeFieldContainer[BasketTokenMarket]
    next_page_token: str
    def __init__(self, basket_token_markets: _Optional[_Iterable[_Union[BasketTokenMarket, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateBasketTokenMarketComponentsRequest(_message.Message):
    __slots__ = ("basket_token_market", "components", "updateBlockNumber")
    class Component(_message.Message):
        __slots__ = ("fungible_token", "quantity")
        FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        fungible_token: str
        quantity: _common_pb2.Quantity
        def __init__(self, fungible_token: _Optional[str] = ..., quantity: _Optional[_Union[_common_pb2.Quantity, _Mapping]] = ...) -> None: ...
    BASKET_TOKEN_MARKET_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    UPDATEBLOCKNUMBER_FIELD_NUMBER: _ClassVar[int]
    basket_token_market: str
    components: _containers.RepeatedCompositeFieldContainer[UpdateBasketTokenMarketComponentsRequest.Component]
    updateBlockNumber: int
    def __init__(self, basket_token_market: _Optional[str] = ..., components: _Optional[_Iterable[_Union[UpdateBasketTokenMarketComponentsRequest.Component, _Mapping]]] = ..., updateBlockNumber: _Optional[int] = ...) -> None: ...

class UpdateBasketTokenMarketComponentsResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ListBasketTokenTicksRequest(_message.Message):
    __slots__ = ("parent", "start_time", "end_time", "size", "currency", "interval")
    PARENT_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    END_TIME_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    parent: str
    start_time: _timestamp_pb2.Timestamp
    end_time: _timestamp_pb2.Timestamp
    size: int
    currency: _common_pb2.Currency
    interval: TickInterval
    def __init__(self, parent: _Optional[str] = ..., start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., size: _Optional[int] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ..., interval: _Optional[_Union[TickInterval, str]] = ...) -> None: ...

class ListBasketTokenTicksResponse(_message.Message):
    __slots__ = ("ticks", "currency")
    TICKS_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    ticks: _containers.RepeatedCompositeFieldContainer[Tick]
    currency: _common_pb2.Currency
    def __init__(self, ticks: _Optional[_Iterable[_Union[Tick, _Mapping]]] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ...) -> None: ...

class Tick(_message.Message):
    __slots__ = ("open_time", "open", "high", "low", "close")
    OPEN_TIME_FIELD_NUMBER: _ClassVar[int]
    OPEN_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    CLOSE_FIELD_NUMBER: _ClassVar[int]
    open_time: _timestamp_pb2.Timestamp
    open: float
    high: float
    low: float
    close: float
    def __init__(self, open_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., open: _Optional[float] = ..., high: _Optional[float] = ..., low: _Optional[float] = ..., close: _Optional[float] = ...) -> None: ...

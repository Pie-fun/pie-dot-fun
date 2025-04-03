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
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetHoldingRequest(_message.Message):
    __slots__ = ("holding", "currency")
    HOLDING_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    holding: str
    currency: _common_pb2.Currency
    def __init__(self, holding: _Optional[str] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ...) -> None: ...

class ListHoldingsRequest(_message.Message):
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

class ListHoldingsResponse(_message.Message):
    __slots__ = ("holdings", "next_page_token")
    HOLDINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    holdings: _containers.RepeatedCompositeFieldContainer[Holding]
    next_page_token: str
    def __init__(self, holdings: _Optional[_Iterable[_Union[Holding, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetHoldingsStatisticsRequest(_message.Message):
    __slots__ = ("filter",)
    FILTER_FIELD_NUMBER: _ClassVar[int]
    filter: str
    def __init__(self, filter: _Optional[str] = ...) -> None: ...

class GetHoldingsStatisticsResponse(_message.Message):
    __slots__ = ("count", "total_market_values", "total_pnls")
    COUNT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_MARKET_VALUES_FIELD_NUMBER: _ClassVar[int]
    TOTAL_PNLS_FIELD_NUMBER: _ClassVar[int]
    count: int
    total_market_values: _containers.RepeatedCompositeFieldContainer[_common_pb2.Money]
    total_pnls: _containers.RepeatedCompositeFieldContainer[_common_pb2.PnL]
    def __init__(self, count: _Optional[int] = ..., total_market_values: _Optional[_Iterable[_Union[_common_pb2.Money, _Mapping]]] = ..., total_pnls: _Optional[_Iterable[_Union[_common_pb2.PnL, _Mapping]]] = ...) -> None: ...

class Holding(_message.Message):
    __slots__ = ("name", "chain", "basket_token", "holding_wallet", "quantity", "average_buy_prices", "market_values", "pnls", "ownership_percentage", "create_time", "update_time", "average_buy_price", "market_value", "pnl")
    class AverageBuyPricesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    class MarketValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    class PnlsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.PnLsByPeriod
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.PnLsByPeriod, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    HOLDING_WALLET_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    AVERAGE_BUY_PRICES_FIELD_NUMBER: _ClassVar[int]
    MARKET_VALUES_FIELD_NUMBER: _ClassVar[int]
    PNLS_FIELD_NUMBER: _ClassVar[int]
    OWNERSHIP_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    AVERAGE_BUY_PRICE_FIELD_NUMBER: _ClassVar[int]
    MARKET_VALUE_FIELD_NUMBER: _ClassVar[int]
    PNL_FIELD_NUMBER: _ClassVar[int]
    name: str
    chain: _common_pb2.ChainType
    basket_token: str
    holding_wallet: str
    quantity: _common_pb2.Quantity
    average_buy_prices: _containers.MessageMap[str, _common_pb2.Money]
    market_values: _containers.MessageMap[str, _common_pb2.Money]
    pnls: _containers.MessageMap[str, _common_pb2.PnLsByPeriod]
    ownership_percentage: _common_pb2.Percentage
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    average_buy_price: _common_pb2.Money
    market_value: _common_pb2.Money
    pnl: _common_pb2.PnLsByPeriod
    def __init__(self, name: _Optional[str] = ..., chain: _Optional[_Union[_common_pb2.ChainType, str]] = ..., basket_token: _Optional[str] = ..., holding_wallet: _Optional[str] = ..., quantity: _Optional[_Union[_common_pb2.Quantity, _Mapping]] = ..., average_buy_prices: _Optional[_Mapping[str, _common_pb2.Money]] = ..., market_values: _Optional[_Mapping[str, _common_pb2.Money]] = ..., pnls: _Optional[_Mapping[str, _common_pb2.PnLsByPeriod]] = ..., ownership_percentage: _Optional[_Union[_common_pb2.Percentage, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., average_buy_price: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., market_value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., pnl: _Optional[_Union[_common_pb2.PnLsByPeriod, _Mapping]] = ...) -> None: ...

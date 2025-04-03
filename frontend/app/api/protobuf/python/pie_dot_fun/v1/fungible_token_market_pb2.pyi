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

class FungibleTokenMarket(_message.Message):
    __slots__ = ("name", "fungible_token", "display_name", "symbol", "native_currency", "prices", "market_caps", "price_changes", "price", "market_cap", "price_change", "fdvs")
    class PricesEntry(_message.Message):
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
    class PriceChangesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.PriceChangesByPeriod
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.PriceChangesByPeriod, _Mapping]] = ...) -> None: ...
    class FdvsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    NATIVE_CURRENCY_FIELD_NUMBER: _ClassVar[int]
    PRICES_FIELD_NUMBER: _ClassVar[int]
    MARKET_CAPS_FIELD_NUMBER: _ClassVar[int]
    PRICE_CHANGES_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    MARKET_CAP_FIELD_NUMBER: _ClassVar[int]
    PRICE_CHANGE_FIELD_NUMBER: _ClassVar[int]
    FDVS_FIELD_NUMBER: _ClassVar[int]
    name: str
    fungible_token: str
    display_name: str
    symbol: str
    native_currency: _common_pb2.Currency
    prices: _containers.MessageMap[str, _common_pb2.Money]
    market_caps: _containers.MessageMap[str, _common_pb2.Money]
    price_changes: _containers.MessageMap[str, _common_pb2.PriceChangesByPeriod]
    price: _common_pb2.Money
    market_cap: _common_pb2.Money
    price_change: _common_pb2.PriceChangesByPeriod
    fdvs: _containers.MessageMap[str, _common_pb2.Money]
    def __init__(self, name: _Optional[str] = ..., fungible_token: _Optional[str] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ..., native_currency: _Optional[_Union[_common_pb2.Currency, str]] = ..., prices: _Optional[_Mapping[str, _common_pb2.Money]] = ..., market_caps: _Optional[_Mapping[str, _common_pb2.Money]] = ..., price_changes: _Optional[_Mapping[str, _common_pb2.PriceChangesByPeriod]] = ..., price: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., market_cap: _Optional[_Union[_common_pb2.Money, _Mapping]] = ..., price_change: _Optional[_Union[_common_pb2.PriceChangesByPeriod, _Mapping]] = ..., fdvs: _Optional[_Mapping[str, _common_pb2.Money]] = ...) -> None: ...

class GetFungibleTokenMarketRequest(_message.Message):
    __slots__ = ("fungible_token_market", "currency")
    FUNGIBLE_TOKEN_MARKET_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    fungible_token_market: str
    currency: _common_pb2.Currency
    def __init__(self, fungible_token_market: _Optional[str] = ..., currency: _Optional[_Union[_common_pb2.Currency, str]] = ...) -> None: ...

class ListFungibleTokensMarketsRequest(_message.Message):
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

class ListFungibleTokensMarketsResponse(_message.Message):
    __slots__ = ("fungible_token_markets", "next_page_token")
    FUNGIBLE_TOKEN_MARKETS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    fungible_token_markets: _containers.RepeatedCompositeFieldContainer[FungibleTokenMarket]
    next_page_token: str
    def __init__(self, fungible_token_markets: _Optional[_Iterable[_Union[FungibleTokenMarket, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

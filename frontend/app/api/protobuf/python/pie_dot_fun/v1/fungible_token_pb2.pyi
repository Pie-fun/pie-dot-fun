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

class GetFungibleTokenRequest(_message.Message):
    __slots__ = ("fungible_token",)
    FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    fungible_token: str
    def __init__(self, fungible_token: _Optional[str] = ...) -> None: ...

class ListFungibleTokensRequest(_message.Message):
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

class ListFungibleTokensResponse(_message.Message):
    __slots__ = ("fungible_tokens", "next_page_token")
    FUNGIBLE_TOKENS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    fungible_tokens: _containers.RepeatedCompositeFieldContainer[FungibleToken]
    next_page_token: str
    def __init__(self, fungible_tokens: _Optional[_Iterable[_Union[FungibleToken, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class FungibleToken(_message.Message):
    __slots__ = ("name", "chain", "address", "display_name", "symbol", "icon_image_url", "decimals", "sns")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    ICON_IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    DECIMALS_FIELD_NUMBER: _ClassVar[int]
    SNS_FIELD_NUMBER: _ClassVar[int]
    name: str
    chain: _common_pb2.ChainType
    address: str
    display_name: str
    symbol: str
    icon_image_url: str
    decimals: int
    sns: _containers.RepeatedCompositeFieldContainer[_common_pb2.SNS]
    def __init__(self, name: _Optional[str] = ..., chain: _Optional[_Union[_common_pb2.ChainType, str]] = ..., address: _Optional[str] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ..., icon_image_url: _Optional[str] = ..., decimals: _Optional[int] = ..., sns: _Optional[_Iterable[_Union[_common_pb2.SNS, _Mapping]]] = ...) -> None: ...

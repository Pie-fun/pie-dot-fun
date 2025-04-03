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

class GetHoldingWalletRequest(_message.Message):
    __slots__ = ("holding_wallet",)
    HOLDING_WALLET_FIELD_NUMBER: _ClassVar[int]
    holding_wallet: str
    def __init__(self, holding_wallet: _Optional[str] = ...) -> None: ...

class ListHoldingWalletsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListHoldingWalletsResponse(_message.Message):
    __slots__ = ("holding_wallets", "next_page_token")
    HOLDING_WALLETS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    holding_wallets: _containers.RepeatedCompositeFieldContainer[HoldingWallet]
    next_page_token: str
    def __init__(self, holding_wallets: _Optional[_Iterable[_Union[HoldingWallet, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class HoldingWallet(_message.Message):
    __slots__ = ("name", "vm_type", "address", "user")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VM_TYPE_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    name: str
    vm_type: _common_pb2.VMType
    address: str
    user: str
    def __init__(self, name: _Optional[str] = ..., vm_type: _Optional[_Union[_common_pb2.VMType, str]] = ..., address: _Optional[str] = ..., user: _Optional[str] = ...) -> None: ...

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

class TransactionType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TRANSACTION_TYPE_UNSPECIFIED: _ClassVar[TransactionType]
    TRANSACTION_TYPE_MINT: _ClassVar[TransactionType]
    TRANSACTION_TYPE_TRANSFER: _ClassVar[TransactionType]
    TRANSACTION_TYPE_REDEEM: _ClassVar[TransactionType]
TRANSACTION_TYPE_UNSPECIFIED: TransactionType
TRANSACTION_TYPE_MINT: TransactionType
TRANSACTION_TYPE_TRANSFER: TransactionType
TRANSACTION_TYPE_REDEEM: TransactionType

class GetTransactionRequest(_message.Message):
    __slots__ = ("transaction",)
    TRANSACTION_FIELD_NUMBER: _ClassVar[int]
    transaction: str
    def __init__(self, transaction: _Optional[str] = ...) -> None: ...

class ListTransactionsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListTransactionsResponse(_message.Message):
    __slots__ = ("transactions", "next_page_token")
    TRANSACTIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    transactions: _containers.RepeatedCompositeFieldContainer[Transaction]
    next_page_token: str
    def __init__(self, transactions: _Optional[_Iterable[_Union[Transaction, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class Transaction(_message.Message):
    __slots__ = ("name", "chain", "signature", "basket_token", "to", "type", "quantity", "execution_price", "total_value", "create_time")
    class ExecutionPriceEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    class TotalValueEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _common_pb2.Money
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_common_pb2.Money, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    EXECUTION_PRICE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_VALUE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    chain: _common_pb2.ChainType
    signature: str
    basket_token: str
    to: str
    type: TransactionType
    quantity: int
    execution_price: _containers.MessageMap[str, _common_pb2.Money]
    total_value: _containers.MessageMap[str, _common_pb2.Money]
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., chain: _Optional[_Union[_common_pb2.ChainType, str]] = ..., signature: _Optional[str] = ..., basket_token: _Optional[str] = ..., to: _Optional[str] = ..., type: _Optional[_Union[TransactionType, str]] = ..., quantity: _Optional[int] = ..., execution_price: _Optional[_Mapping[str, _common_pb2.Money]] = ..., total_value: _Optional[_Mapping[str, _common_pb2.Money]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., **kwargs) -> None: ...

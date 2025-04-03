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

class Symbol(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SYMBOL_UNSPECIFIED: _ClassVar[Symbol]
    STAR: _ClassVar[Symbol]
SYMBOL_UNSPECIFIED: Symbol
STAR: Symbol

class TransferRequest(_message.Message):
    __slots__ = ("account", "to", "amount", "etag")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    ETAG_FIELD_NUMBER: _ClassVar[int]
    account: str
    to: str
    amount: int
    etag: str
    def __init__(self, account: _Optional[str] = ..., to: _Optional[str] = ..., amount: _Optional[int] = ..., etag: _Optional[str] = ...) -> None: ...

class WithdrawOptimisticRequest(_message.Message):
    __slots__ = ("account", "amount")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    account: str
    amount: int
    def __init__(self, account: _Optional[str] = ..., amount: _Optional[int] = ...) -> None: ...

class DepositOptimisticRequest(_message.Message):
    __slots__ = ("account", "amount")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    account: str
    amount: int
    def __init__(self, account: _Optional[str] = ..., amount: _Optional[int] = ...) -> None: ...

class GetAccountRequest(_message.Message):
    __slots__ = ("account",)
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    account: str
    def __init__(self, account: _Optional[str] = ...) -> None: ...

class ListAccountsRequest(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListAccountsResponse(_message.Message):
    __slots__ = ("accounts", "next_page_token")
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    accounts: _containers.RepeatedCompositeFieldContainer[Account]
    next_page_token: str
    def __init__(self, accounts: _Optional[_Iterable[_Union[Account, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class Account(_message.Message):
    __slots__ = ("name", "address", "balance", "last_transactions", "create_time", "update_time")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    LAST_TRANSACTIONS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    balance: Balance
    last_transactions: _containers.RepeatedCompositeFieldContainer[Transaction]
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., balance: _Optional[_Union[Balance, _Mapping]] = ..., last_transactions: _Optional[_Iterable[_Union[Transaction, _Mapping]]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class Balance(_message.Message):
    __slots__ = ("symbol", "amount", "cumulative_total")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    CUMULATIVE_TOTAL_FIELD_NUMBER: _ClassVar[int]
    symbol: Symbol
    amount: int
    cumulative_total: int
    def __init__(self, symbol: _Optional[_Union[Symbol, str]] = ..., amount: _Optional[int] = ..., cumulative_total: _Optional[int] = ...) -> None: ...

class Money(_message.Message):
    __slots__ = ("symbol", "amount")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    symbol: Symbol
    amount: int
    def __init__(self, symbol: _Optional[_Union[Symbol, str]] = ..., amount: _Optional[int] = ...) -> None: ...

class Transaction(_message.Message):
    __slots__ = ("id", "type", "money", "recipient", "create_time")
    class Type(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        TYPE_UNSPECIFIED: _ClassVar[Transaction.Type]
        DEPOSIT: _ClassVar[Transaction.Type]
        WITHDRAWAL: _ClassVar[Transaction.Type]
        TRANSFER: _ClassVar[Transaction.Type]
    TYPE_UNSPECIFIED: Transaction.Type
    DEPOSIT: Transaction.Type
    WITHDRAWAL: Transaction.Type
    TRANSFER: Transaction.Type
    ID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MONEY_FIELD_NUMBER: _ClassVar[int]
    RECIPIENT_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    id: int
    type: Transaction.Type
    money: Money
    recipient: str
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[int] = ..., type: _Optional[_Union[Transaction.Type, str]] = ..., money: _Optional[_Union[Money, _Mapping]] = ..., recipient: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

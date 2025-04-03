from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.type import decimal_pb2 as _decimal_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ChainType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CHAIN_UNSPECIFIED: _ClassVar[ChainType]
    SOLANA: _ClassVar[ChainType]
    SOLANA_TESTNET: _ClassVar[ChainType]
    SOLANA_DEVNET: _ClassVar[ChainType]
    ETHEREUM: _ClassVar[ChainType]
    ETHEREUM_SEPOLIA: _ClassVar[ChainType]
    BASE: _ClassVar[ChainType]
    BASE_SEPOLIA: _ClassVar[ChainType]

class VMType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VM_UNSPECIFIED: _ClassVar[VMType]
    SVM: _ClassVar[VMType]
    EVM: _ClassVar[VMType]

class Currency(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CURRENCY_UNSPECIFIED: _ClassVar[Currency]
    CURRENCY_SOL: _ClassVar[Currency]
    CURRENCY_USDC: _ClassVar[Currency]
    CURRENCY_ETH: _ClassVar[Currency]

class PnLPeriod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PNL_PERIOD_UNSPECIFIED: _ClassVar[PnLPeriod]
    PNL_PERIOD_1_HOUR: _ClassVar[PnLPeriod]
    PNL_PERIOD_24_HOUR: _ClassVar[PnLPeriod]
    PNL_PERIOD_ALL_TIME: _ClassVar[PnLPeriod]

class PriceChangePeriod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRICE_CHANGE_PERIOD_UNSPECIFIED: _ClassVar[PriceChangePeriod]
    PRICE_CHANGE_PERIOD_1_HOUR: _ClassVar[PriceChangePeriod]
    PRICE_CHANGE_PERIOD_24_HOUR: _ClassVar[PriceChangePeriod]
    PRICE_CHANGE_PERIOD_7_DAY: _ClassVar[PriceChangePeriod]
    PRICE_CHANGE_PERIOD_30_DAY: _ClassVar[PriceChangePeriod]
    PRICE_CHANGE_PERIOD_ALL_TIME: _ClassVar[PriceChangePeriod]
CHAIN_UNSPECIFIED: ChainType
SOLANA: ChainType
SOLANA_TESTNET: ChainType
SOLANA_DEVNET: ChainType
ETHEREUM: ChainType
ETHEREUM_SEPOLIA: ChainType
BASE: ChainType
BASE_SEPOLIA: ChainType
VM_UNSPECIFIED: VMType
SVM: VMType
EVM: VMType
CURRENCY_UNSPECIFIED: Currency
CURRENCY_SOL: Currency
CURRENCY_USDC: Currency
CURRENCY_ETH: Currency
PNL_PERIOD_UNSPECIFIED: PnLPeriod
PNL_PERIOD_1_HOUR: PnLPeriod
PNL_PERIOD_24_HOUR: PnLPeriod
PNL_PERIOD_ALL_TIME: PnLPeriod
PRICE_CHANGE_PERIOD_UNSPECIFIED: PriceChangePeriod
PRICE_CHANGE_PERIOD_1_HOUR: PriceChangePeriod
PRICE_CHANGE_PERIOD_24_HOUR: PriceChangePeriod
PRICE_CHANGE_PERIOD_7_DAY: PriceChangePeriod
PRICE_CHANGE_PERIOD_30_DAY: PriceChangePeriod
PRICE_CHANGE_PERIOD_ALL_TIME: PriceChangePeriod

class Quantity(_message.Message):
    __slots__ = ("formatted_amount", "raw_amount", "decimals")
    FORMATTED_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    RAW_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    DECIMALS_FIELD_NUMBER: _ClassVar[int]
    formatted_amount: str
    raw_amount: str
    decimals: int
    def __init__(self, formatted_amount: _Optional[str] = ..., raw_amount: _Optional[str] = ..., decimals: _Optional[int] = ...) -> None: ...

class Money(_message.Message):
    __slots__ = ("currency", "formatted_amount", "raw_amount", "decimals")
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    FORMATTED_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    RAW_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    DECIMALS_FIELD_NUMBER: _ClassVar[int]
    currency: Currency
    formatted_amount: str
    raw_amount: str
    decimals: int
    def __init__(self, currency: _Optional[_Union[Currency, str]] = ..., formatted_amount: _Optional[str] = ..., raw_amount: _Optional[str] = ..., decimals: _Optional[int] = ...) -> None: ...

class Percentage(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: float
    def __init__(self, value: _Optional[float] = ...) -> None: ...

class PnLsByPeriod(_message.Message):
    __slots__ = ("pnls",)
    class PnlsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: PnL
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[PnL, _Mapping]] = ...) -> None: ...
    PNLS_FIELD_NUMBER: _ClassVar[int]
    pnls: _containers.MessageMap[str, PnL]
    def __init__(self, pnls: _Optional[_Mapping[str, PnL]] = ...) -> None: ...

class PnL(_message.Message):
    __slots__ = ("nominal_value", "percentage_change", "period")
    NOMINAL_VALUE_FIELD_NUMBER: _ClassVar[int]
    PERCENTAGE_CHANGE_FIELD_NUMBER: _ClassVar[int]
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    nominal_value: Money
    percentage_change: Percentage
    period: PnLPeriod
    def __init__(self, nominal_value: _Optional[_Union[Money, _Mapping]] = ..., percentage_change: _Optional[_Union[Percentage, _Mapping]] = ..., period: _Optional[_Union[PnLPeriod, str]] = ...) -> None: ...

class PriceChange(_message.Message):
    __slots__ = ("nominal_value", "percentage_change", "period")
    NOMINAL_VALUE_FIELD_NUMBER: _ClassVar[int]
    PERCENTAGE_CHANGE_FIELD_NUMBER: _ClassVar[int]
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    nominal_value: Money
    percentage_change: Percentage
    period: PriceChangePeriod
    def __init__(self, nominal_value: _Optional[_Union[Money, _Mapping]] = ..., percentage_change: _Optional[_Union[Percentage, _Mapping]] = ..., period: _Optional[_Union[PriceChangePeriod, str]] = ...) -> None: ...

class PriceChangesByPeriod(_message.Message):
    __slots__ = ("price_changes",)
    class PriceChangesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: PriceChange
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[PriceChange, _Mapping]] = ...) -> None: ...
    PRICE_CHANGES_FIELD_NUMBER: _ClassVar[int]
    price_changes: _containers.MessageMap[str, PriceChange]
    def __init__(self, price_changes: _Optional[_Mapping[str, PriceChange]] = ...) -> None: ...

class SNS(_message.Message):
    __slots__ = ("type", "name", "profile_url")
    class SNSType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        SNS_TYPE_UNSPECIFIED: _ClassVar[SNS.SNSType]
        EMAIL: _ClassVar[SNS.SNSType]
        GOOGLE: _ClassVar[SNS.SNSType]
        TWITTER: _ClassVar[SNS.SNSType]
    SNS_TYPE_UNSPECIFIED: SNS.SNSType
    EMAIL: SNS.SNSType
    GOOGLE: SNS.SNSType
    TWITTER: SNS.SNSType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROFILE_URL_FIELD_NUMBER: _ClassVar[int]
    type: SNS.SNSType
    name: str
    profile_url: str
    def __init__(self, type: _Optional[_Union[SNS.SNSType, str]] = ..., name: _Optional[str] = ..., profile_url: _Optional[str] = ...) -> None: ...

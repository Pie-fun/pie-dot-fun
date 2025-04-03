from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from pie_dot_fun.v1 import auth_pb2 as _auth_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RebalanceCommand(_message.Message):
    __slots__ = ("equal_weight", "manual_weight", "trade")
    class EqualMarketCapWeight(_message.Message):
        __slots__ = ()
        def __init__(self) -> None: ...
    class ManualMarketCapWeight(_message.Message):
        __slots__ = ("requests",)
        class Request(_message.Message):
            __slots__ = ("fungible_token", "weight")
            FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
            WEIGHT_FIELD_NUMBER: _ClassVar[int]
            fungible_token: str
            weight: float
            def __init__(self, fungible_token: _Optional[str] = ..., weight: _Optional[float] = ...) -> None: ...
        REQUESTS_FIELD_NUMBER: _ClassVar[int]
        requests: _containers.RepeatedCompositeFieldContainer[RebalanceCommand.ManualMarketCapWeight.Request]
        def __init__(self, requests: _Optional[_Iterable[_Union[RebalanceCommand.ManualMarketCapWeight.Request, _Mapping]]] = ...) -> None: ...
    class Trade(_message.Message):
        __slots__ = ("requests",)
        class Request(_message.Message):
            __slots__ = ("fungible_token", "is_buy", "formatted_amount")
            FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
            IS_BUY_FIELD_NUMBER: _ClassVar[int]
            FORMATTED_AMOUNT_FIELD_NUMBER: _ClassVar[int]
            fungible_token: str
            is_buy: bool
            formatted_amount: str
            def __init__(self, fungible_token: _Optional[str] = ..., is_buy: bool = ..., formatted_amount: _Optional[str] = ...) -> None: ...
        REQUESTS_FIELD_NUMBER: _ClassVar[int]
        requests: _containers.RepeatedCompositeFieldContainer[RebalanceCommand.Trade.Request]
        def __init__(self, requests: _Optional[_Iterable[_Union[RebalanceCommand.Trade.Request, _Mapping]]] = ...) -> None: ...
    EQUAL_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    MANUAL_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    TRADE_FIELD_NUMBER: _ClassVar[int]
    equal_weight: RebalanceCommand.EqualMarketCapWeight
    manual_weight: RebalanceCommand.ManualMarketCapWeight
    trade: RebalanceCommand.Trade
    def __init__(self, equal_weight: _Optional[_Union[RebalanceCommand.EqualMarketCapWeight, _Mapping]] = ..., manual_weight: _Optional[_Union[RebalanceCommand.ManualMarketCapWeight, _Mapping]] = ..., trade: _Optional[_Union[RebalanceCommand.Trade, _Mapping]] = ...) -> None: ...

class RebalanceBasketTokenRequest(_message.Message):
    __slots__ = ("basket_token", "execute", "command", "execution_option")
    BASKET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    EXECUTE_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    EXECUTION_OPTION_FIELD_NUMBER: _ClassVar[int]
    basket_token: str
    execute: bool
    command: RebalanceCommand
    execution_option: ExecutionOption
    def __init__(self, basket_token: _Optional[str] = ..., execute: bool = ..., command: _Optional[_Union[RebalanceCommand, _Mapping]] = ..., execution_option: _Optional[_Union[ExecutionOption, _Mapping]] = ...) -> None: ...

class RebalanceBasketTokenResponse(_message.Message):
    __slots__ = ("result_html",)
    RESULT_HTML_FIELD_NUMBER: _ClassVar[int]
    result_html: str
    def __init__(self, result_html: _Optional[str] = ...) -> None: ...

class ExecutionOption(_message.Message):
    __slots__ = ("sell_ratio_per_iteration", "slippage", "max_iteration_count", "exit_remaining_execution_value", "exit_remaining_execution_value_ratio")
    SELL_RATIO_PER_ITERATION_FIELD_NUMBER: _ClassVar[int]
    SLIPPAGE_FIELD_NUMBER: _ClassVar[int]
    MAX_ITERATION_COUNT_FIELD_NUMBER: _ClassVar[int]
    EXIT_REMAINING_EXECUTION_VALUE_FIELD_NUMBER: _ClassVar[int]
    EXIT_REMAINING_EXECUTION_VALUE_RATIO_FIELD_NUMBER: _ClassVar[int]
    sell_ratio_per_iteration: float
    slippage: float
    max_iteration_count: int
    exit_remaining_execution_value: float
    exit_remaining_execution_value_ratio: float
    def __init__(self, sell_ratio_per_iteration: _Optional[float] = ..., slippage: _Optional[float] = ..., max_iteration_count: _Optional[int] = ..., exit_remaining_execution_value: _Optional[float] = ..., exit_remaining_execution_value_ratio: _Optional[float] = ...) -> None: ...

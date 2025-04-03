from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from pie_dot_fun.v1 import auth_pb2 as _auth_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PoolType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    POOL_TYPE_UNSPECIFIED: _ClassVar[PoolType]
    AMM: _ClassVar[PoolType]
    CLMM: _ClassVar[PoolType]
    CPMM: _ClassVar[PoolType]

class BaseType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    BASE_TYPE_UNSPECIFIED: _ClassVar[BaseType]
    BASE_IN: _ClassVar[BaseType]
    BASE_OUT: _ClassVar[BaseType]
POOL_TYPE_UNSPECIFIED: PoolType
AMM: PoolType
CLMM: PoolType
CPMM: PoolType
BASE_TYPE_UNSPECIFIED: BaseType
BASE_IN: BaseType
BASE_OUT: BaseType

class GetBasketVaultRequest(_message.Message):
    __slots__ = ("mint",)
    MINT_FIELD_NUMBER: _ClassVar[int]
    mint: str
    def __init__(self, mint: _Optional[str] = ...) -> None: ...

class GetBasketVaultResponse(_message.Message):
    __slots__ = ("vault",)
    VAULT_FIELD_NUMBER: _ClassVar[int]
    vault: _containers.RepeatedCompositeFieldContainer[BasketVaultElement]
    def __init__(self, vault: _Optional[_Iterable[_Union[BasketVaultElement, _Mapping]]] = ...) -> None: ...

class BasketVaultElement(_message.Message):
    __slots__ = ("mint", "balance")
    MINT_FIELD_NUMBER: _ClassVar[int]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    mint: str
    balance: int
    def __init__(self, mint: _Optional[str] = ..., balance: _Optional[int] = ...) -> None: ...

class RebalanceAction(_message.Message):
    __slots__ = ("input_mint", "output_mint", "base_type", "amount", "other_amount_threshold")
    INPUT_MINT_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_MINT_FIELD_NUMBER: _ClassVar[int]
    BASE_TYPE_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    OTHER_AMOUNT_THRESHOLD_FIELD_NUMBER: _ClassVar[int]
    input_mint: str
    output_mint: str
    base_type: BaseType
    amount: str
    other_amount_threshold: str
    def __init__(self, input_mint: _Optional[str] = ..., output_mint: _Optional[str] = ..., base_type: _Optional[_Union[BaseType, str]] = ..., amount: _Optional[str] = ..., other_amount_threshold: _Optional[str] = ...) -> None: ...

class SerializedTxBundle(_message.Message):
    __slots__ = ("serialized_txs",)
    SERIALIZED_TXS_FIELD_NUMBER: _ClassVar[int]
    serialized_txs: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, serialized_txs: _Optional[_Iterable[str]] = ...) -> None: ...

class BuildRebalanceTxRequest(_message.Message):
    __slots__ = ("basket_mint", "slippage_percentage", "actions")
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    SLIPPAGE_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    ACTIONS_FIELD_NUMBER: _ClassVar[int]
    basket_mint: str
    slippage_percentage: float
    actions: _containers.RepeatedCompositeFieldContainer[RebalanceAction]
    def __init__(self, basket_mint: _Optional[str] = ..., slippage_percentage: _Optional[float] = ..., actions: _Optional[_Iterable[_Union[RebalanceAction, _Mapping]]] = ...) -> None: ...

class BuySwapData(_message.Message):
    __slots__ = ("mint", "amount_in", "max_amount_in", "amount_out")
    MINT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_IN_FIELD_NUMBER: _ClassVar[int]
    MAX_AMOUNT_IN_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_OUT_FIELD_NUMBER: _ClassVar[int]
    mint: str
    amount_in: str
    max_amount_in: str
    amount_out: str
    def __init__(self, mint: _Optional[str] = ..., amount_in: _Optional[str] = ..., max_amount_in: _Optional[str] = ..., amount_out: _Optional[str] = ...) -> None: ...

class BuildMintTxRequest(_message.Message):
    __slots__ = ("basket_mint", "mint_amount", "input_amount", "owner_address", "buy_swap_data", "max_slippage")
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    MINT_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    INPUT_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BUY_SWAP_DATA_FIELD_NUMBER: _ClassVar[int]
    MAX_SLIPPAGE_FIELD_NUMBER: _ClassVar[int]
    basket_mint: str
    mint_amount: str
    input_amount: str
    owner_address: str
    buy_swap_data: _containers.RepeatedCompositeFieldContainer[BuySwapData]
    max_slippage: int
    def __init__(self, basket_mint: _Optional[str] = ..., mint_amount: _Optional[str] = ..., input_amount: _Optional[str] = ..., owner_address: _Optional[str] = ..., buy_swap_data: _Optional[_Iterable[_Union[BuySwapData, _Mapping]]] = ..., max_slippage: _Optional[int] = ...) -> None: ...

class BuildRedeemTxRequest(_message.Message):
    __slots__ = ("basket_mint", "amount", "owner_address", "max_slippage")
    BASKET_MINT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    MAX_SLIPPAGE_FIELD_NUMBER: _ClassVar[int]
    basket_mint: str
    amount: str
    owner_address: str
    max_slippage: int
    def __init__(self, basket_mint: _Optional[str] = ..., amount: _Optional[str] = ..., owner_address: _Optional[str] = ..., max_slippage: _Optional[int] = ...) -> None: ...

class GetBasketConfigByIDRequest(_message.Message):
    __slots__ = ("basket_id",)
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    basket_id: str
    def __init__(self, basket_id: _Optional[str] = ...) -> None: ...

class GetBasketMintByIDRequest(_message.Message):
    __slots__ = ("basket_id",)
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    basket_id: str
    def __init__(self, basket_id: _Optional[str] = ...) -> None: ...

class GetBasketMintByIDResponse(_message.Message):
    __slots__ = ("mint",)
    MINT_FIELD_NUMBER: _ClassVar[int]
    mint: str
    def __init__(self, mint: _Optional[str] = ...) -> None: ...

class CommandCreateBasketRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetBasketRequest(_message.Message):
    __slots__ = ("mint",)
    MINT_FIELD_NUMBER: _ClassVar[int]
    mint: str
    def __init__(self, mint: _Optional[str] = ...) -> None: ...

class BatchCreateTokenPoolsRequest(_message.Message):
    __slots__ = ("token_pools",)
    TOKEN_POOLS_FIELD_NUMBER: _ClassVar[int]
    token_pools: _containers.RepeatedCompositeFieldContainer[TokenPool]
    def __init__(self, token_pools: _Optional[_Iterable[_Union[TokenPool, _Mapping]]] = ...) -> None: ...

class BatchCreateTokenPoolsResponse(_message.Message):
    __slots__ = ("token_pools",)
    TOKEN_POOLS_FIELD_NUMBER: _ClassVar[int]
    token_pools: _containers.RepeatedCompositeFieldContainer[TokenPool]
    def __init__(self, token_pools: _Optional[_Iterable[_Union[TokenPool, _Mapping]]] = ...) -> None: ...

class TxResponse(_message.Message):
    __slots__ = ("tx",)
    TX_FIELD_NUMBER: _ClassVar[int]
    tx: str
    def __init__(self, tx: _Optional[str] = ...) -> None: ...

class Basket(_message.Message):
    __slots__ = ("mint", "basket_id", "name", "symbol", "uri", "components")
    MINT_FIELD_NUMBER: _ClassVar[int]
    BASKET_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    mint: str
    basket_id: int
    name: str
    symbol: str
    uri: str
    components: _containers.RepeatedCompositeFieldContainer[BasketComponent]
    def __init__(self, mint: _Optional[str] = ..., basket_id: _Optional[int] = ..., name: _Optional[str] = ..., symbol: _Optional[str] = ..., uri: _Optional[str] = ..., components: _Optional[_Iterable[_Union[BasketComponent, _Mapping]]] = ...) -> None: ...

class TokenPool(_message.Message):
    __slots__ = ("mint", "pool_type", "pool_id", "lookup_table")
    MINT_FIELD_NUMBER: _ClassVar[int]
    POOL_TYPE_FIELD_NUMBER: _ClassVar[int]
    POOL_ID_FIELD_NUMBER: _ClassVar[int]
    LOOKUP_TABLE_FIELD_NUMBER: _ClassVar[int]
    mint: str
    pool_type: PoolType
    pool_id: str
    lookup_table: str
    def __init__(self, mint: _Optional[str] = ..., pool_type: _Optional[_Union[PoolType, str]] = ..., pool_id: _Optional[str] = ..., lookup_table: _Optional[str] = ...) -> None: ...

class ProgramState(_message.Message):
    __slots__ = ("bump", "admin", "platform_fee_wallet", "basket_counter", "rebalance_margin_lamports", "creator_fee_percentage", "platform_fee_percentage", "enable_creator", "is_initialized")
    BUMP_FIELD_NUMBER: _ClassVar[int]
    ADMIN_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FEE_WALLET_FIELD_NUMBER: _ClassVar[int]
    BASKET_COUNTER_FIELD_NUMBER: _ClassVar[int]
    REBALANCE_MARGIN_LAMPORTS_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FEE_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FEE_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    ENABLE_CREATOR_FIELD_NUMBER: _ClassVar[int]
    IS_INITIALIZED_FIELD_NUMBER: _ClassVar[int]
    bump: int
    admin: str
    platform_fee_wallet: str
    basket_counter: str
    rebalance_margin_lamports: str
    creator_fee_percentage: str
    platform_fee_percentage: str
    enable_creator: bool
    is_initialized: bool
    def __init__(self, bump: _Optional[int] = ..., admin: _Optional[str] = ..., platform_fee_wallet: _Optional[str] = ..., basket_counter: _Optional[str] = ..., rebalance_margin_lamports: _Optional[str] = ..., creator_fee_percentage: _Optional[str] = ..., platform_fee_percentage: _Optional[str] = ..., enable_creator: bool = ..., is_initialized: bool = ...) -> None: ...

class BasketConfig(_message.Message):
    __slots__ = ("bump", "id", "creator", "rebalancer", "mint", "is_rebalancing", "components")
    BUMP_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    REBALANCER_FIELD_NUMBER: _ClassVar[int]
    MINT_FIELD_NUMBER: _ClassVar[int]
    IS_REBALANCING_FIELD_NUMBER: _ClassVar[int]
    COMPONENTS_FIELD_NUMBER: _ClassVar[int]
    bump: int
    id: int
    creator: str
    rebalancer: str
    mint: str
    is_rebalancing: bool
    components: _containers.RepeatedCompositeFieldContainer[BasketComponent]
    def __init__(self, bump: _Optional[int] = ..., id: _Optional[int] = ..., creator: _Optional[str] = ..., rebalancer: _Optional[str] = ..., mint: _Optional[str] = ..., is_rebalancing: bool = ..., components: _Optional[_Iterable[_Union[BasketComponent, _Mapping]]] = ...) -> None: ...

class BasketComponent(_message.Message):
    __slots__ = ("mint", "quantity")
    MINT_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    mint: str
    quantity: int
    def __init__(self, mint: _Optional[str] = ..., quantity: _Optional[int] = ...) -> None: ...

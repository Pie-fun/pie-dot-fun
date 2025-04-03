from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.nft import nft_pb2 as _nft_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DelegationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    DELEGATION_TYPE_UNSPECIFIED: _ClassVar[DelegationType]
    DELEGATION_TYPE_ALL: _ClassVar[DelegationType]
    DELEGATION_TYPE_CONTRACT: _ClassVar[DelegationType]
    DELEGATION_TYPE_ERC721: _ClassVar[DelegationType]

class ReceiptStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RECEIPT_STATUS_FAILED: _ClassVar[ReceiptStatus]
    RECEIPT_STATUS_SUCCESSFUL: _ClassVar[ReceiptStatus]
DELEGATION_TYPE_UNSPECIFIED: DelegationType
DELEGATION_TYPE_ALL: DelegationType
DELEGATION_TYPE_CONTRACT: DelegationType
DELEGATION_TYPE_ERC721: DelegationType
RECEIPT_STATUS_FAILED: ReceiptStatus
RECEIPT_STATUS_SUCCESSFUL: ReceiptStatus

class QueryReceiptRequest(_message.Message):
    __slots__ = ("tx_hash", "timeout")
    TX_HASH_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    tx_hash: str
    timeout: str
    def __init__(self, tx_hash: _Optional[str] = ..., timeout: _Optional[str] = ...) -> None: ...

class QueryQueryTransactionCountRequest(_message.Message):
    __slots__ = ("address", "block_number")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BLOCK_NUMBER_FIELD_NUMBER: _ClassVar[int]
    address: str
    block_number: int
    def __init__(self, address: _Optional[str] = ..., block_number: _Optional[int] = ...) -> None: ...

class QueryQueryTransactionCountResponse(_message.Message):
    __slots__ = ("count",)
    COUNT_FIELD_NUMBER: _ClassVar[int]
    count: int
    def __init__(self, count: _Optional[int] = ...) -> None: ...

class QueryDelegateCashRequest(_message.Message):
    __slots__ = ("address", "chains")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    CHAINS_FIELD_NUMBER: _ClassVar[int]
    address: str
    chains: _containers.RepeatedScalarFieldContainer[_nft_pb2.ChainType]
    def __init__(self, address: _Optional[str] = ..., chains: _Optional[_Iterable[_Union[_nft_pb2.ChainType, str]]] = ...) -> None: ...

class QueryDelegateCashResponse(_message.Message):
    __slots__ = ("delegates",)
    DELEGATES_FIELD_NUMBER: _ClassVar[int]
    delegates: _containers.RepeatedCompositeFieldContainer[Delegate]
    def __init__(self, delegates: _Optional[_Iterable[_Union[Delegate, _Mapping]]] = ...) -> None: ...

class QueryStakingContractAddressRequest(_message.Message):
    __slots__ = ("address",)
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    address: str
    def __init__(self, address: _Optional[str] = ...) -> None: ...

class QueryStakingContractAddressResponse(_message.Message):
    __slots__ = ("contract_address",)
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    contract_address: str
    def __init__(self, contract_address: _Optional[str] = ...) -> None: ...

class QueryStakingAmountRequest(_message.Message):
    __slots__ = ("address",)
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    address: str
    def __init__(self, address: _Optional[str] = ...) -> None: ...

class QueryStakingAmountResponse(_message.Message):
    __slots__ = ("staking_amount",)
    STAKING_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    staking_amount: str
    def __init__(self, staking_amount: _Optional[str] = ...) -> None: ...

class QueryOwnerOfRequest(_message.Message):
    __slots__ = ("contract_address", "token_id")
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    contract_address: str
    token_id: str
    def __init__(self, contract_address: _Optional[str] = ..., token_id: _Optional[str] = ...) -> None: ...

class QueryOwnerOfResponse(_message.Message):
    __slots__ = ("owner_address",)
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    owner_address: str
    def __init__(self, owner_address: _Optional[str] = ...) -> None: ...

class QueryBalanceOfRequest(_message.Message):
    __slots__ = ("contract_address", "owner_address")
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    contract_address: str
    owner_address: str
    def __init__(self, contract_address: _Optional[str] = ..., owner_address: _Optional[str] = ...) -> None: ...

class QueryBalanceOfResponse(_message.Message):
    __slots__ = ("balance",)
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    balance: int
    def __init__(self, balance: _Optional[int] = ...) -> None: ...

class Delegate(_message.Message):
    __slots__ = ("type", "to", "contract", "token_id")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    type: DelegationType
    to: str
    contract: str
    token_id: str
    def __init__(self, type: _Optional[_Union[DelegationType, str]] = ..., to: _Optional[str] = ..., contract: _Optional[str] = ..., token_id: _Optional[str] = ..., **kwargs) -> None: ...

class Receipt(_message.Message):
    __slots__ = ("status", "transaction_hash", "block_hash", "block_number", "cumulative_gas_used", "gas_used", "contract_address")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TRANSACTION_HASH_FIELD_NUMBER: _ClassVar[int]
    BLOCK_HASH_FIELD_NUMBER: _ClassVar[int]
    BLOCK_NUMBER_FIELD_NUMBER: _ClassVar[int]
    CUMULATIVE_GAS_USED_FIELD_NUMBER: _ClassVar[int]
    GAS_USED_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    status: ReceiptStatus
    transaction_hash: str
    block_hash: str
    block_number: str
    cumulative_gas_used: int
    gas_used: int
    contract_address: str
    def __init__(self, status: _Optional[_Union[ReceiptStatus, str]] = ..., transaction_hash: _Optional[str] = ..., block_hash: _Optional[str] = ..., block_number: _Optional[str] = ..., cumulative_gas_used: _Optional[int] = ..., gas_used: _Optional[int] = ..., contract_address: _Optional[str] = ...) -> None: ...

class MintScoreEvent(_message.Message):
    __slots__ = ("category", "score", "address", "token_id")
    class ScoreCategory(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        SCORE_CATEGORY_UNSPECIFIED: _ClassVar[MintScoreEvent.ScoreCategory]
        SINGLE_PLAYER: _ClassVar[MintScoreEvent.ScoreCategory]
        MULTI_PLAYER: _ClassVar[MintScoreEvent.ScoreCategory]
    SCORE_CATEGORY_UNSPECIFIED: MintScoreEvent.ScoreCategory
    SINGLE_PLAYER: MintScoreEvent.ScoreCategory
    MULTI_PLAYER: MintScoreEvent.ScoreCategory
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    category: MintScoreEvent.ScoreCategory
    score: int
    address: str
    token_id: str
    def __init__(self, category: _Optional[_Union[MintScoreEvent.ScoreCategory, str]] = ..., score: _Optional[int] = ..., address: _Optional[str] = ..., token_id: _Optional[str] = ...) -> None: ...

class DeployTBAAndMintProtoShipEvent(_message.Message):
    __slots__ = ("profile_tba", "token_id")
    PROFILE_TBA_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    profile_tba: str
    token_id: str
    def __init__(self, profile_tba: _Optional[str] = ..., token_id: _Optional[str] = ...) -> None: ...

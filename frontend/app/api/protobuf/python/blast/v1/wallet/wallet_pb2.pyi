from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetWalletRequest(_message.Message):
    __slots__ = ("wallet",)
    WALLET_FIELD_NUMBER: _ClassVar[int]
    wallet: str
    def __init__(self, wallet: _Optional[str] = ...) -> None: ...

class Wallet(_message.Message):
    __slots__ = ("address", "total_points", "early_access", "blast_bridge", "nft_assets", "crypto_og")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    EARLY_ACCESS_FIELD_NUMBER: _ClassVar[int]
    BLAST_BRIDGE_FIELD_NUMBER: _ClassVar[int]
    NFT_ASSETS_FIELD_NUMBER: _ClassVar[int]
    CRYPTO_OG_FIELD_NUMBER: _ClassVar[int]
    address: str
    total_points: int
    early_access: EarlyAccess
    blast_bridge: BlastBridge
    nft_assets: NFTAssets
    crypto_og: CryptoOG
    def __init__(self, address: _Optional[str] = ..., total_points: _Optional[int] = ..., early_access: _Optional[_Union[EarlyAccess, _Mapping]] = ..., blast_bridge: _Optional[_Union[BlastBridge, _Mapping]] = ..., nft_assets: _Optional[_Union[NFTAssets, _Mapping]] = ..., crypto_og: _Optional[_Union[CryptoOG, _Mapping]] = ...) -> None: ...

class EarlyAccess(_message.Message):
    __slots__ = ("galxe_points",)
    GALXE_POINTS_FIELD_NUMBER: _ClassVar[int]
    galxe_points: int
    def __init__(self, galxe_points: _Optional[int] = ...) -> None: ...

class BlastBridge(_message.Message):
    __slots__ = ("ETH", "stETH", "DAI", "USDT", "USDC")
    ETH_FIELD_NUMBER: _ClassVar[int]
    STETH_FIELD_NUMBER: _ClassVar[int]
    DAI_FIELD_NUMBER: _ClassVar[int]
    USDT_FIELD_NUMBER: _ClassVar[int]
    USDC_FIELD_NUMBER: _ClassVar[int]
    ETH: float
    stETH: float
    DAI: float
    USDT: float
    USDC: float
    def __init__(self, ETH: _Optional[float] = ..., stETH: _Optional[float] = ..., DAI: _Optional[float] = ..., USDT: _Optional[float] = ..., USDC: _Optional[float] = ...) -> None: ...

class NFTAssets(_message.Message):
    __slots__ = ("count",)
    COUNT_FIELD_NUMBER: _ClassVar[int]
    count: int
    def __init__(self, count: _Optional[int] = ...) -> None: ...

class CryptoOG(_message.Message):
    __slots__ = ("og",)
    OG_FIELD_NUMBER: _ClassVar[int]
    og: bool
    def __init__(self, og: bool = ...) -> None: ...

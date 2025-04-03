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

class ChainType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CHAIN_UNSPECIFIED: _ClassVar[ChainType]
    ETHEREUM: _ClassVar[ChainType]
    POLYGON: _ClassVar[ChainType]
    ARBITRUM: _ClassVar[ChainType]
    OPTIMISM: _ClassVar[ChainType]
    BASE: _ClassVar[ChainType]
    BLAST: _ClassVar[ChainType]
    ETHEREUM_SEPOLIA: _ClassVar[ChainType]
    POLYGON_MUMBAI: _ClassVar[ChainType]
    BLAST_SEPOLIA: _ClassVar[ChainType]

class ContractType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CONTRACT_TYPE_UNSPECIFIED: _ClassVar[ContractType]
    ERC721: _ClassVar[ContractType]
    ERC1155: _ClassVar[ContractType]
CHAIN_UNSPECIFIED: ChainType
ETHEREUM: ChainType
POLYGON: ChainType
ARBITRUM: ChainType
OPTIMISM: ChainType
BASE: ChainType
BLAST: ChainType
ETHEREUM_SEPOLIA: ChainType
POLYGON_MUMBAI: ChainType
BLAST_SEPOLIA: ChainType
CONTRACT_TYPE_UNSPECIFIED: ContractType
ERC721: ContractType
ERC1155: ContractType

class ListNFTsRequest(_message.Message):
    __slots__ = ("owner_address", "page_size", "page_token", "filter", "sync_onchain")
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    SYNC_ONCHAIN_FIELD_NUMBER: _ClassVar[int]
    owner_address: str
    page_size: int
    page_token: str
    filter: str
    sync_onchain: str
    def __init__(self, owner_address: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., sync_onchain: _Optional[str] = ...) -> None: ...

class ListNFTsResponse(_message.Message):
    __slots__ = ("nfts", "next_page_token")
    NFTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    nfts: _containers.RepeatedCompositeFieldContainer[NFT]
    next_page_token: str
    def __init__(self, nfts: _Optional[_Iterable[_Union[NFT, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListNFTsDelegateRequest(_message.Message):
    __slots__ = ("owner_address",)
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    owner_address: str
    def __init__(self, owner_address: _Optional[str] = ...) -> None: ...

class ListNFTsDelegateResponse(_message.Message):
    __slots__ = ("nfts",)
    NFTS_FIELD_NUMBER: _ClassVar[int]
    nfts: _containers.RepeatedCompositeFieldContainer[NFT]
    def __init__(self, nfts: _Optional[_Iterable[_Union[NFT, _Mapping]]] = ...) -> None: ...

class GetNFTRequest(_message.Message):
    __slots__ = ("nft",)
    NFT_FIELD_NUMBER: _ClassVar[int]
    nft: str
    def __init__(self, nft: _Optional[str] = ...) -> None: ...

class ValidateNFTAccessRequest(_message.Message):
    __slots__ = ("nft", "owner_address")
    NFT_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    nft: str
    owner_address: str
    def __init__(self, nft: _Optional[str] = ..., owner_address: _Optional[str] = ...) -> None: ...

class ValidateNFTAccessResponse(_message.Message):
    __slots__ = ("nft", "access")
    NFT_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    nft: NFT
    access: bool
    def __init__(self, nft: _Optional[_Union[NFT, _Mapping]] = ..., access: bool = ...) -> None: ...

class ListOwnersRequest(_message.Message):
    __slots__ = ("nfts",)
    NFTS_FIELD_NUMBER: _ClassVar[int]
    nfts: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, nfts: _Optional[_Iterable[str]] = ...) -> None: ...

class ListOwnersResponse(_message.Message):
    __slots__ = ("owners",)
    class NFTs(_message.Message):
        __slots__ = ("nfts",)
        NFTS_FIELD_NUMBER: _ClassVar[int]
        nfts: _containers.RepeatedScalarFieldContainer[str]
        def __init__(self, nfts: _Optional[_Iterable[str]] = ...) -> None: ...
    class OwnersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ListOwnersResponse.NFTs
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ListOwnersResponse.NFTs, _Mapping]] = ...) -> None: ...
    OWNERS_FIELD_NUMBER: _ClassVar[int]
    owners: _containers.MessageMap[str, ListOwnersResponse.NFTs]
    def __init__(self, owners: _Optional[_Mapping[str, ListOwnersResponse.NFTs]] = ...) -> None: ...

class ValidateNFTRequest(_message.Message):
    __slots__ = ("nft",)
    NFT_FIELD_NUMBER: _ClassVar[int]
    nft: str
    def __init__(self, nft: _Optional[str] = ...) -> None: ...

class ValidateNFTResponse(_message.Message):
    __slots__ = ("valid",)
    VALID_FIELD_NUMBER: _ClassVar[int]
    valid: bool
    def __init__(self, valid: bool = ...) -> None: ...

class GetContractRequest(_message.Message):
    __slots__ = ("nft_contract",)
    NFT_CONTRACT_FIELD_NUMBER: _ClassVar[int]
    nft_contract: str
    def __init__(self, nft_contract: _Optional[str] = ...) -> None: ...

class CheckHolderOfContractRequest(_message.Message):
    __slots__ = ("nft_contract", "wallet_address")
    NFT_CONTRACT_FIELD_NUMBER: _ClassVar[int]
    WALLET_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    nft_contract: str
    wallet_address: str
    def __init__(self, nft_contract: _Optional[str] = ..., wallet_address: _Optional[str] = ...) -> None: ...

class CheckHolderOfContractResponse(_message.Message):
    __slots__ = ("is_holder",)
    IS_HOLDER_FIELD_NUMBER: _ClassVar[int]
    is_holder: bool
    def __init__(self, is_holder: bool = ...) -> None: ...

class NFT(_message.Message):
    __slots__ = ("name", "address", "token_id", "token_name", "image_uri", "image_original_uri", "animation_uri", "animation_original_uri", "metadata_uri", "ownerAddress", "contract")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    TOKEN_NAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    IMAGE_ORIGINAL_URI_FIELD_NUMBER: _ClassVar[int]
    ANIMATION_URI_FIELD_NUMBER: _ClassVar[int]
    ANIMATION_ORIGINAL_URI_FIELD_NUMBER: _ClassVar[int]
    METADATA_URI_FIELD_NUMBER: _ClassVar[int]
    OWNERADDRESS_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    token_id: str
    token_name: str
    image_uri: str
    image_original_uri: str
    animation_uri: str
    animation_original_uri: str
    metadata_uri: str
    ownerAddress: str
    contract: NFTContract
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., token_id: _Optional[str] = ..., token_name: _Optional[str] = ..., image_uri: _Optional[str] = ..., image_original_uri: _Optional[str] = ..., animation_uri: _Optional[str] = ..., animation_original_uri: _Optional[str] = ..., metadata_uri: _Optional[str] = ..., ownerAddress: _Optional[str] = ..., contract: _Optional[_Union[NFTContract, _Mapping]] = ...) -> None: ...

class NFTContract(_message.Message):
    __slots__ = ("name", "address", "display_name", "symbol", "chain", "type", "image_uri")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    display_name: str
    symbol: str
    chain: ChainType
    type: ContractType
    image_uri: str
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ..., chain: _Optional[_Union[ChainType, str]] = ..., type: _Optional[_Union[ContractType, str]] = ..., image_uri: _Optional[str] = ...) -> None: ...

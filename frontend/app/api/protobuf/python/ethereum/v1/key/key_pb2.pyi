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

class State(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[State]
    CREATED: _ClassVar[State]
    MINTED: _ClassVar[State]

class PrimaryType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRIMARY_TYPE_UNSPECIFIED: _ClassVar[PrimaryType]
    W_KEY: _ClassVar[PrimaryType]
    G_KEY: _ClassVar[PrimaryType]
    A_KEY: _ClassVar[PrimaryType]
    H_KEY: _ClassVar[PrimaryType]
    R_KEY: _ClassVar[PrimaryType]

class SecondaryType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SECONDARY_TYPE_UNSPECIFIED: _ClassVar[SecondaryType]
    TIER_1: _ClassVar[SecondaryType]
    TIER_2: _ClassVar[SecondaryType]
    TIER_3: _ClassVar[SecondaryType]
    TIER_4: _ClassVar[SecondaryType]
    TIER_5: _ClassVar[SecondaryType]
STATE_UNSPECIFIED: State
CREATED: State
MINTED: State
PRIMARY_TYPE_UNSPECIFIED: PrimaryType
W_KEY: PrimaryType
G_KEY: PrimaryType
A_KEY: PrimaryType
H_KEY: PrimaryType
R_KEY: PrimaryType
SECONDARY_TYPE_UNSPECIFIED: SecondaryType
TIER_1: SecondaryType
TIER_2: SecondaryType
TIER_3: SecondaryType
TIER_4: SecondaryType
TIER_5: SecondaryType

class ListKeysRequest(_message.Message):
    __slots__ = ("profile", "page_size", "page_token", "filter", "order_by")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    profile: str
    page_size: int
    page_token: str
    filter: str
    order_by: str
    def __init__(self, profile: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListKeysResponse(_message.Message):
    __slots__ = ("keys", "next_page_token", "total_size")
    KEYS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    TOTAL_SIZE_FIELD_NUMBER: _ClassVar[int]
    keys: _containers.RepeatedCompositeFieldContainer[Key]
    next_page_token: str
    total_size: int
    def __init__(self, keys: _Optional[_Iterable[_Union[Key, _Mapping]]] = ..., next_page_token: _Optional[str] = ..., total_size: _Optional[int] = ...) -> None: ...

class ListKeyVOsRequest(_message.Message):
    __slots__ = ("filter",)
    FILTER_FIELD_NUMBER: _ClassVar[int]
    filter: str
    def __init__(self, filter: _Optional[str] = ...) -> None: ...

class ListKeyVOsResponse(_message.Message):
    __slots__ = ("key_value_objects",)
    KEY_VALUE_OBJECTS_FIELD_NUMBER: _ClassVar[int]
    key_value_objects: _containers.RepeatedCompositeFieldContainer[KeyVO]
    def __init__(self, key_value_objects: _Optional[_Iterable[_Union[KeyVO, _Mapping]]] = ...) -> None: ...

class CreateKeyVORequest(_message.Message):
    __slots__ = ("key_vo",)
    KEY_VO_FIELD_NUMBER: _ClassVar[int]
    key_vo: KeyVO
    def __init__(self, key_vo: _Optional[_Union[KeyVO, _Mapping]] = ...) -> None: ...

class Key(_message.Message):
    __slots__ = ("name", "address", "owner", "state", "create_time", "mint_time", "mint_tx_hash", "eth_contribution", "is_minted", "vo")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    MINT_TIME_FIELD_NUMBER: _ClassVar[int]
    MINT_TX_HASH_FIELD_NUMBER: _ClassVar[int]
    ETH_CONTRIBUTION_FIELD_NUMBER: _ClassVar[int]
    IS_MINTED_FIELD_NUMBER: _ClassVar[int]
    VO_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    owner: str
    state: State
    create_time: _timestamp_pb2.Timestamp
    mint_time: _timestamp_pb2.Timestamp
    mint_tx_hash: str
    eth_contribution: str
    is_minted: bool
    vo: KeyVO
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., owner: _Optional[str] = ..., state: _Optional[_Union[State, str]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., mint_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., mint_tx_hash: _Optional[str] = ..., eth_contribution: _Optional[str] = ..., is_minted: bool = ..., vo: _Optional[_Union[KeyVO, _Mapping]] = ...) -> None: ...

class KeyVO(_message.Message):
    __slots__ = ("address", "token_id", "primary_type", "secondary_type", "cached_image_uri", "original_image_uri", "metadata_uri", "contractAddress")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_TYPE_FIELD_NUMBER: _ClassVar[int]
    SECONDARY_TYPE_FIELD_NUMBER: _ClassVar[int]
    CACHED_IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    ORIGINAL_IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    METADATA_URI_FIELD_NUMBER: _ClassVar[int]
    CONTRACTADDRESS_FIELD_NUMBER: _ClassVar[int]
    address: str
    token_id: str
    primary_type: PrimaryType
    secondary_type: SecondaryType
    cached_image_uri: str
    original_image_uri: str
    metadata_uri: str
    contractAddress: str
    def __init__(self, address: _Optional[str] = ..., token_id: _Optional[str] = ..., primary_type: _Optional[_Union[PrimaryType, str]] = ..., secondary_type: _Optional[_Union[SecondaryType, str]] = ..., cached_image_uri: _Optional[str] = ..., original_image_uri: _Optional[str] = ..., metadata_uri: _Optional[str] = ..., contractAddress: _Optional[str] = ...) -> None: ...

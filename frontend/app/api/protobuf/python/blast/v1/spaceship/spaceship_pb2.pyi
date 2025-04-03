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

class SpaceshipType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[SpaceshipType]
    PROTOSHIP: _ClassVar[SpaceshipType]
    OWNERSHIP: _ClassVar[SpaceshipType]
TYPE_UNSPECIFIED: SpaceshipType
PROTOSHIP: SpaceshipType
OWNERSHIP: SpaceshipType

class ListSpaceshipsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class GetSpaceshipRequest(_message.Message):
    __slots__ = ("spaceship",)
    SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    spaceship: str
    def __init__(self, spaceship: _Optional[str] = ...) -> None: ...

class ListSpaceshipsResponse(_message.Message):
    __slots__ = ("spaceships", "next_page_token")
    SPACESHIPS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    spaceships: _containers.RepeatedCompositeFieldContainer[Spaceship]
    next_page_token: str
    def __init__(self, spaceships: _Optional[_Iterable[_Union[Spaceship, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateSpaceshipRequest(_message.Message):
    __slots__ = ("spaceship", "update_mask")
    SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    spaceship: Spaceship
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, spaceship: _Optional[_Union[Spaceship, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class Spaceship(_message.Message):
    __slots__ = ("name", "address", "owner_address", "type", "create_time", "nft")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    NFT_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    owner_address: str
    type: SpaceshipType
    create_time: _timestamp_pb2.Timestamp
    nft: SpaceshipNFT
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., owner_address: _Optional[str] = ..., type: _Optional[_Union[SpaceshipType, str]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., nft: _Optional[_Union[SpaceshipNFT, _Mapping]] = ...) -> None: ...

class SpaceshipNFT(_message.Message):
    __slots__ = ("token_id", "image_uri", "metadata_uri")
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    METADATA_URI_FIELD_NUMBER: _ClassVar[int]
    token_id: str
    image_uri: str
    metadata_uri: str
    def __init__(self, token_id: _Optional[str] = ..., image_uri: _Optional[str] = ..., metadata_uri: _Optional[str] = ...) -> None: ...

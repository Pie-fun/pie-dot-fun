from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from pie_dot_fun.v1 import auth_pb2 as _auth_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class QueryFungibleTokenDecimalsRequest(_message.Message):
    __slots__ = ("fungible_token",)
    FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    fungible_token: str
    def __init__(self, fungible_token: _Optional[str] = ...) -> None: ...

class QueryFungibleTokenDecimalsResponse(_message.Message):
    __slots__ = ("decimals",)
    DECIMALS_FIELD_NUMBER: _ClassVar[int]
    decimals: int
    def __init__(self, decimals: _Optional[int] = ...) -> None: ...

class QueryFungibleTokenMetadataRequest(_message.Message):
    __slots__ = ("fungible_token",)
    FUNGIBLE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    fungible_token: str
    def __init__(self, fungible_token: _Optional[str] = ...) -> None: ...

class QueryFungibleTokenMetadataResponse(_message.Message):
    __slots__ = ("uri", "metadata")
    URI_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    uri: str
    metadata: Metadata
    def __init__(self, uri: _Optional[str] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class Metadata(_message.Message):
    __slots__ = ("name", "symbol", "image", "description", "one_liner", "website", "email", "twitter", "telegram", "discord")
    NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ONE_LINER_FIELD_NUMBER: _ClassVar[int]
    WEBSITE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    TWITTER_FIELD_NUMBER: _ClassVar[int]
    TELEGRAM_FIELD_NUMBER: _ClassVar[int]
    DISCORD_FIELD_NUMBER: _ClassVar[int]
    name: str
    symbol: str
    image: str
    description: str
    one_liner: str
    website: str
    email: str
    twitter: str
    telegram: str
    discord: str
    def __init__(self, name: _Optional[str] = ..., symbol: _Optional[str] = ..., image: _Optional[str] = ..., description: _Optional[str] = ..., one_liner: _Optional[str] = ..., website: _Optional[str] = ..., email: _Optional[str] = ..., twitter: _Optional[str] = ..., telegram: _Optional[str] = ..., discord: _Optional[str] = ...) -> None: ...

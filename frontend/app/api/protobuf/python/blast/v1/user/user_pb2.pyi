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

class UserState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[UserState]
    CREATED_PENDING: _ClassVar[UserState]
    CREATED: _ClassVar[UserState]
    SQUARE_OWNED: _ClassVar[UserState]
    SQUARE_JOINED: _ClassVar[UserState]

class UserType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[UserType]
    INDEPENDENT: _ClassVar[UserType]
    SQUARE_OWNER: _ClassVar[UserType]
    SQUARE_MEMBER: _ClassVar[UserType]

class UserView(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    User_VIEW_UNSPECIFIED: _ClassVar[UserView]
    BASIC: _ClassVar[UserView]
    FULL: _ClassVar[UserView]
STATE_UNSPECIFIED: UserState
CREATED_PENDING: UserState
CREATED: UserState
SQUARE_OWNED: UserState
SQUARE_JOINED: UserState
TYPE_UNSPECIFIED: UserType
INDEPENDENT: UserType
SQUARE_OWNER: UserType
SQUARE_MEMBER: UserType
User_VIEW_UNSPECIFIED: UserView
BASIC: UserView
FULL: UserView

class GetUserRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class ListUsersRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListUsersResponse(_message.Message):
    __slots__ = ("users", "next_page_token")
    USERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    users: _containers.RepeatedCompositeFieldContainer[User]
    next_page_token: str
    def __init__(self, users: _Optional[_Iterable[_Union[User, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateUserRequest(_message.Message):
    __slots__ = ("user", "update_mask")
    USER_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    user: User
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class IdentifyUserRequest(_message.Message):
    __slots__ = ("user", "nickname", "nft", "referral_code")
    USER_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    NFT_FIELD_NUMBER: _ClassVar[int]
    REFERRAL_CODE_FIELD_NUMBER: _ClassVar[int]
    user: str
    nickname: str
    nft: str
    referral_code: str
    def __init__(self, user: _Optional[str] = ..., nickname: _Optional[str] = ..., nft: _Optional[str] = ..., referral_code: _Optional[str] = ...) -> None: ...

class ValidateNicknameAvailabilityRequest(_message.Message):
    __slots__ = ("nickname",)
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    nickname: str
    def __init__(self, nickname: _Optional[str] = ...) -> None: ...

class ValidateNicknameAvailabilityResponse(_message.Message):
    __slots__ = ("nickname", "available", "reason")
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    nickname: str
    available: bool
    reason: str
    def __init__(self, nickname: _Optional[str] = ..., available: bool = ..., reason: _Optional[str] = ...) -> None: ...

class User(_message.Message):
    __slots__ = ("name", "address", "create_time", "update_time", "last_nft_update_time", "type", "state", "nft", "ens", "nickname")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    LAST_NFT_UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    NFT_FIELD_NUMBER: _ClassVar[int]
    ENS_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    last_nft_update_time: _timestamp_pb2.Timestamp
    type: UserType
    state: UserState
    nft: UserNFT
    ens: str
    nickname: str
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., last_nft_update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., type: _Optional[_Union[UserType, str]] = ..., state: _Optional[_Union[UserState, str]] = ..., nft: _Optional[_Union[UserNFT, _Mapping]] = ..., ens: _Optional[str] = ..., nickname: _Optional[str] = ...) -> None: ...

class UserNFT(_message.Message):
    __slots__ = ("name", "token_id", "token_name", "image_uri", "contract")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    TOKEN_NAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_FIELD_NUMBER: _ClassVar[int]
    name: str
    token_id: str
    token_name: str
    image_uri: str
    contract: UserNFTContract
    def __init__(self, name: _Optional[str] = ..., token_id: _Optional[str] = ..., token_name: _Optional[str] = ..., image_uri: _Optional[str] = ..., contract: _Optional[_Union[UserNFTContract, _Mapping]] = ...) -> None: ...

class UserNFTContract(_message.Message):
    __slots__ = ("address", "display_name", "symbol", "chain", "image_uri")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    CHAIN_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    address: str
    display_name: str
    symbol: str
    chain: _nft_pb2.ChainType
    image_uri: str
    def __init__(self, address: _Optional[str] = ..., display_name: _Optional[str] = ..., symbol: _Optional[str] = ..., chain: _Optional[_Union[_nft_pb2.ChainType, str]] = ..., image_uri: _Optional[str] = ...) -> None: ...

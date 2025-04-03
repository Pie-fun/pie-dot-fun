from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from ethereum.v1.outpost import nft_pb2 as _nft_pb2
from ethereum.v1.profile import my_space_pb2 as _my_space_pb2
from ethereum.v1.profile import sns_connection_pb2 as _sns_connection_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProfileState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[ProfileState]
    CREATED: _ClassVar[ProfileState]
    PROTOSHIP_MINTED: _ClassVar[ProfileState]
    PROTOSHIP_BURNED: _ClassVar[ProfileState]
    OWNERSHIP_ACQUIRED: _ClassVar[ProfileState]

class ProfileView(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    Profile_VIEW_UNSPECIFIED: _ClassVar[ProfileView]
    BASIC: _ClassVar[ProfileView]
    FULL: _ClassVar[ProfileView]
STATE_UNSPECIFIED: ProfileState
CREATED: ProfileState
PROTOSHIP_MINTED: ProfileState
PROTOSHIP_BURNED: ProfileState
OWNERSHIP_ACQUIRED: ProfileState
Profile_VIEW_UNSPECIFIED: ProfileView
BASIC: ProfileView
FULL: ProfileView

class ListProfilesRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter", "view")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    VIEW_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    view: ProfileView
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., view: _Optional[_Union[ProfileView, str]] = ...) -> None: ...

class ListProfilesResponse(_message.Message):
    __slots__ = ("profiles", "next_page_token")
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    profiles: _containers.RepeatedCompositeFieldContainer[Profile]
    next_page_token: str
    def __init__(self, profiles: _Optional[_Iterable[_Union[Profile, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetProfileRequest(_message.Message):
    __slots__ = ("profile", "view")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    VIEW_FIELD_NUMBER: _ClassVar[int]
    profile: str
    view: ProfileView
    def __init__(self, profile: _Optional[str] = ..., view: _Optional[_Union[ProfileView, str]] = ...) -> None: ...

class UpdateProfileRequest(_message.Message):
    __slots__ = ("profile", "update_mask")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    profile: Profile
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, profile: _Optional[_Union[Profile, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class CompleteTutorialRequest(_message.Message):
    __slots__ = ("profile",)
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    def __init__(self, profile: _Optional[str] = ...) -> None: ...

class CompleteTutorialResponse(_message.Message):
    __slots__ = ("tutorial_id", "completed_timestamp")
    TUTORIAL_ID_FIELD_NUMBER: _ClassVar[int]
    COMPLETED_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    tutorial_id: str
    completed_timestamp: _timestamp_pb2.Timestamp
    def __init__(self, tutorial_id: _Optional[str] = ..., completed_timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetMySpaceRequest(_message.Message):
    __slots__ = ("profile",)
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    def __init__(self, profile: _Optional[str] = ...) -> None: ...

class UpdateMySpaceRequest(_message.Message):
    __slots__ = ("profile", "my_space")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    MY_SPACE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    my_space: _my_space_pb2.MySpace
    def __init__(self, profile: _Optional[str] = ..., my_space: _Optional[_Union[_my_space_pb2.MySpace, _Mapping]] = ...) -> None: ...

class GetProfileDailyPlayCountRequest(_message.Message):
    __slots__ = ("profile",)
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    def __init__(self, profile: _Optional[str] = ...) -> None: ...

class GetProfileDailyPlayCountResponse(_message.Message):
    __slots__ = ("daily_play_count",)
    DAILY_PLAY_COUNT_FIELD_NUMBER: _ClassVar[int]
    daily_play_count: int
    def __init__(self, daily_play_count: _Optional[int] = ...) -> None: ...

class IncrementProfileDailyPlayCountRequest(_message.Message):
    __slots__ = ("profile",)
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    def __init__(self, profile: _Optional[str] = ...) -> None: ...

class IncrementProfileDailyPlayCountResponse(_message.Message):
    __slots__ = ("daily_play_count",)
    DAILY_PLAY_COUNT_FIELD_NUMBER: _ClassVar[int]
    daily_play_count: int
    def __init__(self, daily_play_count: _Optional[int] = ...) -> None: ...

class ConnectSNSRequest(_message.Message):
    __slots__ = ("profile", "sns_type", "access_token", "access_token_secret")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    SNS_TYPE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_SECRET_FIELD_NUMBER: _ClassVar[int]
    profile: str
    sns_type: _sns_connection_pb2.SNSType
    access_token: str
    access_token_secret: str
    def __init__(self, profile: _Optional[str] = ..., sns_type: _Optional[_Union[_sns_connection_pb2.SNSType, str]] = ..., access_token: _Optional[str] = ..., access_token_secret: _Optional[str] = ...) -> None: ...

class Profile(_message.Message):
    __slots__ = ("name", "address", "create_time", "update_time", "number", "state", "nft", "star_account", "ens", "nickname", "is_tutorial_done", "is_identified")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    NFT_FIELD_NUMBER: _ClassVar[int]
    STAR_ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    ENS_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    IS_TUTORIAL_DONE_FIELD_NUMBER: _ClassVar[int]
    IS_IDENTIFIED_FIELD_NUMBER: _ClassVar[int]
    name: str
    address: str
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    number: int
    state: ProfileState
    nft: ProfileNFT
    star_account: StarAccount
    ens: str
    nickname: str
    is_tutorial_done: bool
    is_identified: bool
    def __init__(self, name: _Optional[str] = ..., address: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., number: _Optional[int] = ..., state: _Optional[_Union[ProfileState, str]] = ..., nft: _Optional[_Union[ProfileNFT, _Mapping]] = ..., star_account: _Optional[_Union[StarAccount, _Mapping]] = ..., ens: _Optional[str] = ..., nickname: _Optional[str] = ..., is_tutorial_done: bool = ..., is_identified: bool = ...) -> None: ...

class Tutorial(_message.Message):
    __slots__ = ("is_done", "complete_time")
    IS_DONE_FIELD_NUMBER: _ClassVar[int]
    COMPLETE_TIME_FIELD_NUMBER: _ClassVar[int]
    is_done: bool
    complete_time: _timestamp_pb2.Timestamp
    def __init__(self, is_done: bool = ..., complete_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class StarAccount(_message.Message):
    __slots__ = ("balance", "cumulative_total")
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    CUMULATIVE_TOTAL_FIELD_NUMBER: _ClassVar[int]
    balance: int
    cumulative_total: int
    def __init__(self, balance: _Optional[int] = ..., cumulative_total: _Optional[int] = ...) -> None: ...

class GMStatsSlim(_message.Message):
    __slots__ = ("sent_count", "received_count")
    SENT_COUNT_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_COUNT_FIELD_NUMBER: _ClassVar[int]
    sent_count: int
    received_count: int
    def __init__(self, sent_count: _Optional[int] = ..., received_count: _Optional[int] = ...) -> None: ...

class ProfileNFT(_message.Message):
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
    contract: ProfileNFTContract
    def __init__(self, name: _Optional[str] = ..., token_id: _Optional[str] = ..., token_name: _Optional[str] = ..., image_uri: _Optional[str] = ..., contract: _Optional[_Union[ProfileNFTContract, _Mapping]] = ...) -> None: ...

class ProfileNFTContract(_message.Message):
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

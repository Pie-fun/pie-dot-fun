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

class ReferralState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[ReferralState]
    DEACTIVATED: _ClassVar[ReferralState]
    ACTIVATED: _ClassVar[ReferralState]
STATE_UNSPECIFIED: ReferralState
DEACTIVATED: ReferralState
ACTIVATED: ReferralState

class ListReferralsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListReferralsResponse(_message.Message):
    __slots__ = ("referrals", "next_page_token")
    REFERRALS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    referrals: _containers.RepeatedCompositeFieldContainer[Referral]
    next_page_token: str
    def __init__(self, referrals: _Optional[_Iterable[_Union[Referral, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetReferralRequest(_message.Message):
    __slots__ = ("referral",)
    REFERRAL_FIELD_NUMBER: _ClassVar[int]
    referral: str
    def __init__(self, referral: _Optional[str] = ...) -> None: ...

class RefferedByRequest(_message.Message):
    __slots__ = ("referral", "code")
    REFERRAL_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    referral: str
    code: str
    def __init__(self, referral: _Optional[str] = ..., code: _Optional[str] = ...) -> None: ...

class Referral(_message.Message):
    __slots__ = ("name", "user_address", "state", "collection", "referred_by", "referred")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    COLLECTION_FIELD_NUMBER: _ClassVar[int]
    REFERRED_BY_FIELD_NUMBER: _ClassVar[int]
    REFERRED_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    state: ReferralState
    collection: str
    referred_by: ReferredBy
    referred: Referred
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., state: _Optional[_Union[ReferralState, str]] = ..., collection: _Optional[str] = ..., referred_by: _Optional[_Union[ReferredBy, _Mapping]] = ..., referred: _Optional[_Union[Referred, _Mapping]] = ...) -> None: ...

class ReferredBy(_message.Message):
    __slots__ = ("code", "user_address")
    CODE_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    code: str
    user_address: str
    def __init__(self, code: _Optional[str] = ..., user_address: _Optional[str] = ...) -> None: ...

class Referred(_message.Message):
    __slots__ = ("code", "same_collection", "other_collection")
    CODE_FIELD_NUMBER: _ClassVar[int]
    SAME_COLLECTION_FIELD_NUMBER: _ClassVar[int]
    OTHER_COLLECTION_FIELD_NUMBER: _ClassVar[int]
    code: str
    same_collection: int
    other_collection: int
    def __init__(self, code: _Optional[str] = ..., same_collection: _Optional[int] = ..., other_collection: _Optional[int] = ...) -> None: ...

class Reference(_message.Message):
    __slots__ = ("referrer", "referred_by", "same_collection", "create_time")
    REFERRER_FIELD_NUMBER: _ClassVar[int]
    REFERRED_BY_FIELD_NUMBER: _ClassVar[int]
    SAME_COLLECTION_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    referrer: str
    referred_by: str
    same_collection: bool
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, referrer: _Optional[str] = ..., referred_by: _Optional[str] = ..., same_collection: bool = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

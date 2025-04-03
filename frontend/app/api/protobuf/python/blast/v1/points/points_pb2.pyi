from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.nft import nft_pb2 as _nft_pb2
from blast.v1.user import user_pb2 as _user_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PointsTypeBehaviorGroup(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    GROUP_UNSPECIFIED: _ClassVar[PointsTypeBehaviorGroup]
    REFERRAL: _ClassVar[PointsTypeBehaviorGroup]
    STAKING: _ClassVar[PointsTypeBehaviorGroup]
    ACTIVITY: _ClassVar[PointsTypeBehaviorGroup]
    BONUS: _ClassVar[PointsTypeBehaviorGroup]

class PointsType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNKNOWN: _ClassVar[PointsType]
    WELCOME: _ClassVar[PointsType]
    REFERRAL_REFFERED_BY: _ClassVar[PointsType]
    REFERRAL_REFERRER_BONUS: _ClassVar[PointsType]
    STAKING_INTEREST: _ClassVar[PointsType]
    ACTIVITY_DAILY_CHECKIN: _ClassVar[PointsType]
    ACTIVITY_COMMUNITY_EVENT_WINNER: _ClassVar[PointsType]
    ACTIVITY_COMMUNITY_CONTRIBUTION: _ClassVar[PointsType]
    ACTIVITY_GM: _ClassVar[PointsType]
    ACTIVITY_SQUARE_BEBOB_SUMMON: _ClassVar[PointsType]
    ACTIVITY_SQUARE_BEBOB_ATTACK: _ClassVar[PointsType]
    ACTIVITY_SCORE_UPLOAD: _ClassVar[PointsType]
    ACTIVITY_SCORE_LEADERBOARD_WINNER: _ClassVar[PointsType]
    ACTIVITY_SCORE_LEADERBOARD_RAFFLE: _ClassVar[PointsType]
    BONUS_SQUARE_OWNER: _ClassVar[PointsType]
    BONUS_SQUARE_MEMBER: _ClassVar[PointsType]

class MultiplierType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MULTIPLIER_TYPE_UNSPECIFIED: _ClassVar[MultiplierType]
    SQUARE_OWNER_BONUS: _ClassVar[MultiplierType]
    SQUARE_MULTIPLIER: _ClassVar[MultiplierType]
    SQUARE_PFP_COLLECTION_BOOST: _ClassVar[MultiplierType]
GROUP_UNSPECIFIED: PointsTypeBehaviorGroup
REFERRAL: PointsTypeBehaviorGroup
STAKING: PointsTypeBehaviorGroup
ACTIVITY: PointsTypeBehaviorGroup
BONUS: PointsTypeBehaviorGroup
TYPE_UNKNOWN: PointsType
WELCOME: PointsType
REFERRAL_REFFERED_BY: PointsType
REFERRAL_REFERRER_BONUS: PointsType
STAKING_INTEREST: PointsType
ACTIVITY_DAILY_CHECKIN: PointsType
ACTIVITY_COMMUNITY_EVENT_WINNER: PointsType
ACTIVITY_COMMUNITY_CONTRIBUTION: PointsType
ACTIVITY_GM: PointsType
ACTIVITY_SQUARE_BEBOB_SUMMON: PointsType
ACTIVITY_SQUARE_BEBOB_ATTACK: PointsType
ACTIVITY_SCORE_UPLOAD: PointsType
ACTIVITY_SCORE_LEADERBOARD_WINNER: PointsType
ACTIVITY_SCORE_LEADERBOARD_RAFFLE: PointsType
BONUS_SQUARE_OWNER: PointsType
BONUS_SQUARE_MEMBER: PointsType
MULTIPLIER_TYPE_UNSPECIFIED: MultiplierType
SQUARE_OWNER_BONUS: MultiplierType
SQUARE_MULTIPLIER: MultiplierType
SQUARE_PFP_COLLECTION_BOOST: MultiplierType

class GetPointsRequest(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: str
    def __init__(self, points: _Optional[str] = ...) -> None: ...

class ListPointsRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter", "order_by")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    order_by: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListPointsResponse(_message.Message):
    __slots__ = ("points", "next_page_token")
    POINTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[Points]
    next_page_token: str
    def __init__(self, points: _Optional[_Iterable[_Union[Points, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class EarnStakingInterestRequest(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: str
    def __init__(self, points: _Optional[str] = ...) -> None: ...

class ListPointsReferralBonusesRequest(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListPointsReferralBonusesResponse(_message.Message):
    __slots__ = ("referral_bonuses", "next_page_token")
    REFERRAL_BONUSES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    referral_bonuses: _containers.RepeatedCompositeFieldContainer[PointsReferralBonus]
    next_page_token: str
    def __init__(self, referral_bonuses: _Optional[_Iterable[_Union[PointsReferralBonus, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class Points(_message.Message):
    __slots__ = ("name", "user_address", "total_points", "referral", "staking", "activity", "bonus", "multipliers")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    REFERRAL_FIELD_NUMBER: _ClassVar[int]
    STAKING_FIELD_NUMBER: _ClassVar[int]
    ACTIVITY_FIELD_NUMBER: _ClassVar[int]
    BONUS_FIELD_NUMBER: _ClassVar[int]
    MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    total_points: int
    referral: Referral
    staking: Staking
    activity: Activity
    bonus: Bonus
    multipliers: _containers.RepeatedCompositeFieldContainer[Multiplier]
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., total_points: _Optional[int] = ..., referral: _Optional[_Union[Referral, _Mapping]] = ..., staking: _Optional[_Union[Staking, _Mapping]] = ..., activity: _Optional[_Union[Activity, _Mapping]] = ..., bonus: _Optional[_Union[Bonus, _Mapping]] = ..., multipliers: _Optional[_Iterable[_Union[Multiplier, _Mapping]]] = ...) -> None: ...

class Referral(_message.Message):
    __slots__ = ("referred_by_points", "referred_points", "points")
    REFERRED_BY_POINTS_FIELD_NUMBER: _ClassVar[int]
    REFERRED_POINTS_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    referred_by_points: int
    referred_points: int
    points: int
    def __init__(self, referred_by_points: _Optional[int] = ..., referred_points: _Optional[int] = ..., points: _Optional[int] = ...) -> None: ...

class Staking(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: int
    def __init__(self, points: _Optional[int] = ...) -> None: ...

class Activity(_message.Message):
    __slots__ = ("points", "daily_checkin", "gm")
    POINTS_FIELD_NUMBER: _ClassVar[int]
    DAILY_CHECKIN_FIELD_NUMBER: _ClassVar[int]
    GM_FIELD_NUMBER: _ClassVar[int]
    points: int
    daily_checkin: int
    gm: int
    def __init__(self, points: _Optional[int] = ..., daily_checkin: _Optional[int] = ..., gm: _Optional[int] = ...) -> None: ...

class Bonus(_message.Message):
    __slots__ = ("square_owner",)
    SQUARE_OWNER_FIELD_NUMBER: _ClassVar[int]
    square_owner: int
    def __init__(self, square_owner: _Optional[int] = ...) -> None: ...

class Multiplier(_message.Message):
    __slots__ = ("type", "percentage")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    type: MultiplierType
    percentage: float
    def __init__(self, type: _Optional[_Union[MultiplierType, str]] = ..., percentage: _Optional[float] = ...) -> None: ...

class PointsHistory(_message.Message):
    __slots__ = ("user_address", "amount", "points_type", "points_type_behavior_group")
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    POINTS_TYPE_FIELD_NUMBER: _ClassVar[int]
    POINTS_TYPE_BEHAVIOR_GROUP_FIELD_NUMBER: _ClassVar[int]
    user_address: str
    amount: float
    points_type: PointsType
    points_type_behavior_group: PointsTypeBehaviorGroup
    def __init__(self, user_address: _Optional[str] = ..., amount: _Optional[float] = ..., points_type: _Optional[_Union[PointsType, str]] = ..., points_type_behavior_group: _Optional[_Union[PointsTypeBehaviorGroup, str]] = ...) -> None: ...

class PointsReferralBonus(_message.Message):
    __slots__ = ("referred", "same_collection", "amount")
    REFERRED_FIELD_NUMBER: _ClassVar[int]
    SAME_COLLECTION_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    referred: _user_pb2.User
    same_collection: bool
    amount: int
    def __init__(self, referred: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., same_collection: bool = ..., amount: _Optional[int] = ...) -> None: ...

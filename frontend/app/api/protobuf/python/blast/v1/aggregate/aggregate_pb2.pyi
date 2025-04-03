from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.points import points_pb2 as _points_pb2
from blast.v1.user import user_pb2 as _user_pb2
from blast.v1.square import square_pb2 as _square_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListPointsAggregateRequest(_message.Message):
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

class ListPointsAggregateResponse(_message.Message):
    __slots__ = ("points_aggregate", "next_page_token")
    POINTS_AGGREGATE_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    points_aggregate: _containers.RepeatedCompositeFieldContainer[PointsAggregate]
    next_page_token: str
    def __init__(self, points_aggregate: _Optional[_Iterable[_Union[PointsAggregate, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class PointsAggregate(_message.Message):
    __slots__ = ("name", "user", "total_points", "referral", "staking", "activity", "bonus", "multipliers")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    REFERRAL_FIELD_NUMBER: _ClassVar[int]
    STAKING_FIELD_NUMBER: _ClassVar[int]
    ACTIVITY_FIELD_NUMBER: _ClassVar[int]
    BONUS_FIELD_NUMBER: _ClassVar[int]
    MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    name: str
    user: _user_pb2.User
    total_points: int
    referral: _points_pb2.Referral
    staking: _points_pb2.Staking
    activity: _points_pb2.Activity
    bonus: _points_pb2.Bonus
    multipliers: _containers.RepeatedCompositeFieldContainer[_points_pb2.Multiplier]
    def __init__(self, name: _Optional[str] = ..., user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., total_points: _Optional[int] = ..., referral: _Optional[_Union[_points_pb2.Referral, _Mapping]] = ..., staking: _Optional[_Union[_points_pb2.Staking, _Mapping]] = ..., activity: _Optional[_Union[_points_pb2.Activity, _Mapping]] = ..., bonus: _Optional[_Union[_points_pb2.Bonus, _Mapping]] = ..., multipliers: _Optional[_Iterable[_Union[_points_pb2.Multiplier, _Mapping]]] = ...) -> None: ...

class ListSquareMemberRankingsAggregateRequest(_message.Message):
    __slots__ = ("square", "rank_type", "page_size", "page_token")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    RANK_TYPE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    square: str
    rank_type: _square_pb2.SquareMemberRankType
    page_size: int
    page_token: str
    def __init__(self, square: _Optional[str] = ..., rank_type: _Optional[_Union[_square_pb2.SquareMemberRankType, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListSquareMemberRankingsAggregateResponse(_message.Message):
    __slots__ = ("rankings_aggregate", "next_page_token")
    RANKINGS_AGGREGATE_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rankings_aggregate: _containers.RepeatedCompositeFieldContainer[SquareMemberRankingAggregate]
    next_page_token: str
    def __init__(self, rankings_aggregate: _Optional[_Iterable[_Union[SquareMemberRankingAggregate, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class SquareMemberRankingAggregate(_message.Message):
    __slots__ = ("rank", "points", "member")
    RANK_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    MEMBER_FIELD_NUMBER: _ClassVar[int]
    rank: int
    points: int
    member: SquareMemberAggregate
    def __init__(self, rank: _Optional[int] = ..., points: _Optional[int] = ..., member: _Optional[_Union[SquareMemberAggregate, _Mapping]] = ...) -> None: ...

class SquareMemberAggregate(_message.Message):
    __slots__ = ("name", "square_token_id", "user", "type", "total_points", "join_time")
    NAME_FIELD_NUMBER: _ClassVar[int]
    SQUARE_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    JOIN_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    square_token_id: str
    user: _user_pb2.User
    type: _square_pb2.SquareMemberType
    total_points: int
    join_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., square_token_id: _Optional[str] = ..., user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., type: _Optional[_Union[_square_pb2.SquareMemberType, str]] = ..., total_points: _Optional[int] = ..., join_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetSquareAggregateRequest(_message.Message):
    __slots__ = ("square", "view")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    VIEW_FIELD_NUMBER: _ClassVar[int]
    square: str
    view: _square_pb2.SquareView
    def __init__(self, square: _Optional[str] = ..., view: _Optional[_Union[_square_pb2.SquareView, str]] = ...) -> None: ...

class SquareAggregate(_message.Message):
    __slots__ = ("name", "token_id", "owner", "create_time", "state", "signature_id", "join_type", "public", "private", "token_gated", "display_name", "introduction", "minimum_staking_amount_to_join_in_eth", "total_members_staking_amount_in_eth", "multiplier", "total_points", "capacity", "occupancy", "occupancy_including_pending", "pfp_boost", "nft", "spirits", "stars", "total_spirits", "weekly_spirits")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_ID_FIELD_NUMBER: _ClassVar[int]
    JOIN_TYPE_FIELD_NUMBER: _ClassVar[int]
    PUBLIC_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_FIELD_NUMBER: _ClassVar[int]
    TOKEN_GATED_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    INTRODUCTION_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_STAKING_AMOUNT_TO_JOIN_IN_ETH_FIELD_NUMBER: _ClassVar[int]
    TOTAL_MEMBERS_STAKING_AMOUNT_IN_ETH_FIELD_NUMBER: _ClassVar[int]
    MULTIPLIER_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    OCCUPANCY_FIELD_NUMBER: _ClassVar[int]
    OCCUPANCY_INCLUDING_PENDING_FIELD_NUMBER: _ClassVar[int]
    PFP_BOOST_FIELD_NUMBER: _ClassVar[int]
    NFT_FIELD_NUMBER: _ClassVar[int]
    SPIRITS_FIELD_NUMBER: _ClassVar[int]
    STARS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_SPIRITS_FIELD_NUMBER: _ClassVar[int]
    WEEKLY_SPIRITS_FIELD_NUMBER: _ClassVar[int]
    name: str
    token_id: str
    owner: _user_pb2.User
    create_time: _timestamp_pb2.Timestamp
    state: _square_pb2.SquareState
    signature_id: str
    join_type: _square_pb2.SquareJoinType
    public: _square_pb2.Public
    private: _square_pb2.Private
    token_gated: _square_pb2.TokenGated
    display_name: str
    introduction: str
    minimum_staking_amount_to_join_in_eth: float
    total_members_staking_amount_in_eth: float
    multiplier: float
    total_points: int
    capacity: int
    occupancy: int
    occupancy_including_pending: int
    pfp_boost: _square_pb2.PFPBoost
    nft: _square_pb2.SquareNFT
    spirits: int
    stars: int
    total_spirits: int
    weekly_spirits: int
    def __init__(self, name: _Optional[str] = ..., token_id: _Optional[str] = ..., owner: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., state: _Optional[_Union[_square_pb2.SquareState, str]] = ..., signature_id: _Optional[str] = ..., join_type: _Optional[_Union[_square_pb2.SquareJoinType, str]] = ..., public: _Optional[_Union[_square_pb2.Public, _Mapping]] = ..., private: _Optional[_Union[_square_pb2.Private, _Mapping]] = ..., token_gated: _Optional[_Union[_square_pb2.TokenGated, _Mapping]] = ..., display_name: _Optional[str] = ..., introduction: _Optional[str] = ..., minimum_staking_amount_to_join_in_eth: _Optional[float] = ..., total_members_staking_amount_in_eth: _Optional[float] = ..., multiplier: _Optional[float] = ..., total_points: _Optional[int] = ..., capacity: _Optional[int] = ..., occupancy: _Optional[int] = ..., occupancy_including_pending: _Optional[int] = ..., pfp_boost: _Optional[_Union[_square_pb2.PFPBoost, _Mapping]] = ..., nft: _Optional[_Union[_square_pb2.SquareNFT, _Mapping]] = ..., spirits: _Optional[int] = ..., stars: _Optional[int] = ..., total_spirits: _Optional[int] = ..., weekly_spirits: _Optional[int] = ...) -> None: ...

class ListSquaresAggregateRequest(_message.Message):
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

class ListSquaresAggregateResponse(_message.Message):
    __slots__ = ("squares_aggregate", "next_page_token")
    SQUARES_AGGREGATE_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    squares_aggregate: _containers.RepeatedCompositeFieldContainer[SquareAggregate]
    next_page_token: str
    def __init__(self, squares_aggregate: _Optional[_Iterable[_Union[SquareAggregate, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

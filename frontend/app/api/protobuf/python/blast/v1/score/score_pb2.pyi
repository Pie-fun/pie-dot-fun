from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.type import decimal_pb2 as _decimal_pb2
from blast.v1.chain import sign_pb2 as _sign_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GameType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    GAME_TYPE_UNSPECIFIED: _ClassVar[GameType]
    STAR_SWEEPERS: _ClassVar[GameType]

class PlayMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PLAY_MODE_UNSPECIFIED: _ClassVar[PlayMode]
    SINGLE_PLAYER: _ClassVar[PlayMode]

class ScoreState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCORE_STATE_UNSPECIFIED: _ClassVar[ScoreState]
    CREATED: _ClassVar[ScoreState]
    UPLOADED: _ClassVar[ScoreState]

class ScoreRankUserType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCORE_RANK_USER_TYPE_UNSPECIFIED: _ClassVar[ScoreRankUserType]
    ALL_USERS: _ClassVar[ScoreRankUserType]
    ALL_MEMBERS: _ClassVar[ScoreRankUserType]
    SQUARE_MEMBERS: _ClassVar[ScoreRankUserType]
    SQUARE_USERS: _ClassVar[ScoreRankUserType]

class ScoreRankTimePeriod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCORE_RANK_TIME_PERIOD_UNSPECIFIED: _ClassVar[ScoreRankTimePeriod]
    ALL_TIME: _ClassVar[ScoreRankTimePeriod]
    WEEKLY: _ClassVar[ScoreRankTimePeriod]
    WEEKLY_FULL_WEEK_BASED: _ClassVar[ScoreRankTimePeriod]
    MONTHLY_FULL_WEEK_BASED: _ClassVar[ScoreRankTimePeriod]

class ScoreRankScoreType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCORE_RANK_SCORE_TYPE_UNSPECIFIED: _ClassVar[ScoreRankScoreType]
    BEST_SCORE: _ClassVar[ScoreRankScoreType]
    CUMULATIVE_SCORE: _ClassVar[ScoreRankScoreType]

class ScoreRankEntitiyType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCORE_RANK_ENTITY_TYPE_UNSPECIFIED: _ClassVar[ScoreRankEntitiyType]
    USER: _ClassVar[ScoreRankEntitiyType]
    SQUARE: _ClassVar[ScoreRankEntitiyType]
GAME_TYPE_UNSPECIFIED: GameType
STAR_SWEEPERS: GameType
PLAY_MODE_UNSPECIFIED: PlayMode
SINGLE_PLAYER: PlayMode
SCORE_STATE_UNSPECIFIED: ScoreState
CREATED: ScoreState
UPLOADED: ScoreState
SCORE_RANK_USER_TYPE_UNSPECIFIED: ScoreRankUserType
ALL_USERS: ScoreRankUserType
ALL_MEMBERS: ScoreRankUserType
SQUARE_MEMBERS: ScoreRankUserType
SQUARE_USERS: ScoreRankUserType
SCORE_RANK_TIME_PERIOD_UNSPECIFIED: ScoreRankTimePeriod
ALL_TIME: ScoreRankTimePeriod
WEEKLY: ScoreRankTimePeriod
WEEKLY_FULL_WEEK_BASED: ScoreRankTimePeriod
MONTHLY_FULL_WEEK_BASED: ScoreRankTimePeriod
SCORE_RANK_SCORE_TYPE_UNSPECIFIED: ScoreRankScoreType
BEST_SCORE: ScoreRankScoreType
CUMULATIVE_SCORE: ScoreRankScoreType
SCORE_RANK_ENTITY_TYPE_UNSPECIFIED: ScoreRankEntitiyType
USER: ScoreRankEntitiyType
SQUARE: ScoreRankEntitiyType

class RewardRequest(_message.Message):
    __slots__ = ("type",)
    class RewardType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        REWARD_TYPE_UNSPECIFIED: _ClassVar[RewardRequest.RewardType]
        WEEKLY_ALL_USERS_LEADERBOARD: _ClassVar[RewardRequest.RewardType]
        WEEKLY_SQUARE_MEMBERS_LEADERBOARD: _ClassVar[RewardRequest.RewardType]
        WEEKLY_SS_CHALLENGE: _ClassVar[RewardRequest.RewardType]
        MONTHLY_SS_CHALLENGE: _ClassVar[RewardRequest.RewardType]
        MONTHLY_SQUARE_COMPETITION: _ClassVar[RewardRequest.RewardType]
    REWARD_TYPE_UNSPECIFIED: RewardRequest.RewardType
    WEEKLY_ALL_USERS_LEADERBOARD: RewardRequest.RewardType
    WEEKLY_SQUARE_MEMBERS_LEADERBOARD: RewardRequest.RewardType
    WEEKLY_SS_CHALLENGE: RewardRequest.RewardType
    MONTHLY_SS_CHALLENGE: RewardRequest.RewardType
    MONTHLY_SQUARE_COMPETITION: RewardRequest.RewardType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    type: RewardRequest.RewardType
    def __init__(self, type: _Optional[_Union[RewardRequest.RewardType, str]] = ...) -> None: ...

class RewardResponse(_message.Message):
    __slots__ = ("user_rewards",)
    class UserReward(_message.Message):
        __slots__ = ("user_address", "points", "blast_points", "blast_gold")
        USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
        POINTS_FIELD_NUMBER: _ClassVar[int]
        BLAST_POINTS_FIELD_NUMBER: _ClassVar[int]
        BLAST_GOLD_FIELD_NUMBER: _ClassVar[int]
        user_address: str
        points: _decimal_pb2.Decimal
        blast_points: _decimal_pb2.Decimal
        blast_gold: _decimal_pb2.Decimal
        def __init__(self, user_address: _Optional[str] = ..., points: _Optional[_Union[_decimal_pb2.Decimal, _Mapping]] = ..., blast_points: _Optional[_Union[_decimal_pb2.Decimal, _Mapping]] = ..., blast_gold: _Optional[_Union[_decimal_pb2.Decimal, _Mapping]] = ...) -> None: ...
    USER_REWARDS_FIELD_NUMBER: _ClassVar[int]
    user_rewards: _containers.RepeatedCompositeFieldContainer[RewardResponse.UserReward]
    def __init__(self, user_rewards: _Optional[_Iterable[_Union[RewardResponse.UserReward, _Mapping]]] = ...) -> None: ...

class ValidateUploadScoreAndSignRequest(_message.Message):
    __slots__ = ("score", "nonce")
    SCORE_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    score: str
    nonce: str
    def __init__(self, score: _Optional[str] = ..., nonce: _Optional[str] = ...) -> None: ...

class ValidateUploadScoreAndSignResponse(_message.Message):
    __slots__ = ("signature", "params")
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    signature: str
    params: _sign_pb2.UploadScoreParams
    def __init__(self, signature: _Optional[str] = ..., params: _Optional[_Union[_sign_pb2.UploadScoreParams, _Mapping]] = ...) -> None: ...

class CreateScoreRequest(_message.Message):
    __slots__ = ("name", "score")
    NAME_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    name: str
    score: Score
    def __init__(self, name: _Optional[str] = ..., score: _Optional[_Union[Score, _Mapping]] = ...) -> None: ...

class GetScoreRequest(_message.Message):
    __slots__ = ("score",)
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: str
    def __init__(self, score: _Optional[str] = ...) -> None: ...

class GetUserBestScoreRankingRequest(_message.Message):
    __slots__ = ("userBestScoreRanking", "user_type", "time_period", "context")
    USERBESTSCORERANKING_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    userBestScoreRanking: str
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    context: str
    def __init__(self, userBestScoreRanking: _Optional[str] = ..., user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ...) -> None: ...

class ListUserBestScoreRankingsRequest(_message.Message):
    __slots__ = ("user_type", "time_period", "context", "page_size", "page_token")
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    context: str
    page_size: int
    page_token: str
    def __init__(self, user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListUserBestScoreRankingsResponse(_message.Message):
    __slots__ = ("rankings", "next_page_token")
    RANKINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rankings: _containers.RepeatedCompositeFieldContainer[UserBestScoreRanking]
    next_page_token: str
    def __init__(self, rankings: _Optional[_Iterable[_Union[UserBestScoreRanking, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetUserCumulativeScoreRankingRequest(_message.Message):
    __slots__ = ("userCumulativeScoreRanking", "user_type", "time_period", "context")
    USERCUMULATIVESCORERANKING_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    userCumulativeScoreRanking: str
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    context: str
    def __init__(self, userCumulativeScoreRanking: _Optional[str] = ..., user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ...) -> None: ...

class ListUserCumulativeScoreRankingsRequest(_message.Message):
    __slots__ = ("user_type", "time_period", "context", "page_size", "page_token")
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    context: str
    page_size: int
    page_token: str
    def __init__(self, user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListUserCumulativeScoreRankingsResponse(_message.Message):
    __slots__ = ("rankings", "next_page_token")
    RANKINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rankings: _containers.RepeatedCompositeFieldContainer[UserCumulativeScoreRanking]
    next_page_token: str
    def __init__(self, rankings: _Optional[_Iterable[_Union[UserCumulativeScoreRanking, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetSquareCumulativeScoreRankingRequest(_message.Message):
    __slots__ = ("squareCumulativeScoreRanking", "time_period", "context")
    SQUARECUMULATIVESCORERANKING_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    squareCumulativeScoreRanking: str
    time_period: ScoreRankTimePeriod
    context: str
    def __init__(self, squareCumulativeScoreRanking: _Optional[str] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ...) -> None: ...

class ListSquareCumulativeScoreRankingsRequest(_message.Message):
    __slots__ = ("time_period", "context", "page_size", "page_token")
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    time_period: ScoreRankTimePeriod
    context: str
    page_size: int
    page_token: str
    def __init__(self, time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., context: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListSquareCumulativeScoreRankingsResponse(_message.Message):
    __slots__ = ("rankings", "next_page_token")
    RANKINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rankings: _containers.RepeatedCompositeFieldContainer[SquareCumulativeScoreRanking]
    next_page_token: str
    def __init__(self, rankings: _Optional[_Iterable[_Union[SquareCumulativeScoreRanking, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class InvalidateScoreRankingsByUserRequest(_message.Message):
    __slots__ = ("users", "context")
    USERS_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    users: _containers.RepeatedScalarFieldContainer[str]
    context: str
    def __init__(self, users: _Optional[_Iterable[str]] = ..., context: _Optional[str] = ...) -> None: ...

class Score(_message.Message):
    __slots__ = ("name", "user_address", "game_id", "create_time", "state", "points", "game_type", "play_mode", "week", "snapshot_square_token_id", "blast_gold")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    GAME_ID_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    GAME_TYPE_FIELD_NUMBER: _ClassVar[int]
    PLAY_MODE_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_SQUARE_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    BLAST_GOLD_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    game_id: str
    create_time: _timestamp_pb2.Timestamp
    state: ScoreState
    points: int
    game_type: GameType
    play_mode: PlayMode
    week: int
    snapshot_square_token_id: str
    blast_gold: float
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., game_id: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., state: _Optional[_Union[ScoreState, str]] = ..., points: _Optional[int] = ..., game_type: _Optional[_Union[GameType, str]] = ..., play_mode: _Optional[_Union[PlayMode, str]] = ..., week: _Optional[int] = ..., snapshot_square_token_id: _Optional[str] = ..., blast_gold: _Optional[float] = ...) -> None: ...

class UserBestScoreRanking(_message.Message):
    __slots__ = ("rank", "user_type", "time_period", "score")
    RANK_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    rank: int
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    score: Score
    def __init__(self, rank: _Optional[int] = ..., user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., score: _Optional[_Union[Score, _Mapping]] = ...) -> None: ...

class UserCumulativeScoreRanking(_message.Message):
    __slots__ = ("rank", "user_type", "time_period", "user_address", "total_points")
    RANK_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    rank: int
    user_type: ScoreRankUserType
    time_period: ScoreRankTimePeriod
    user_address: str
    total_points: int
    def __init__(self, rank: _Optional[int] = ..., user_type: _Optional[_Union[ScoreRankUserType, str]] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., user_address: _Optional[str] = ..., total_points: _Optional[int] = ...) -> None: ...

class SquareCumulativeScoreRanking(_message.Message):
    __slots__ = ("rank", "time_period", "square_token_id", "total_points", "points_count", "participants_count")
    RANK_FIELD_NUMBER: _ClassVar[int]
    TIME_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SQUARE_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    POINTS_COUNT_FIELD_NUMBER: _ClassVar[int]
    PARTICIPANTS_COUNT_FIELD_NUMBER: _ClassVar[int]
    rank: int
    time_period: ScoreRankTimePeriod
    square_token_id: str
    total_points: int
    points_count: int
    participants_count: int
    def __init__(self, rank: _Optional[int] = ..., time_period: _Optional[_Union[ScoreRankTimePeriod, str]] = ..., square_token_id: _Optional[str] = ..., total_points: _Optional[int] = ..., points_count: _Optional[int] = ..., participants_count: _Optional[int] = ...) -> None: ...

from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from ethereum.v1.outpost import nft_pb2 as _nft_pb2
from ethereum.v1.score import score_pb2 as _score_pb2
from ethereum.v1.profile import profile_pb2 as _profile_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetTopRankerLeaderboardRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "week", "season", "play_mode", "game_mode")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SEASON_FIELD_NUMBER: _ClassVar[int]
    PLAY_MODE_FIELD_NUMBER: _ClassVar[int]
    GAME_MODE_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    week: int
    season: int
    play_mode: _score_pb2.PlayMode
    game_mode: _score_pb2.GameMode
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., week: _Optional[int] = ..., season: _Optional[int] = ..., play_mode: _Optional[_Union[_score_pb2.PlayMode, str]] = ..., game_mode: _Optional[_Union[_score_pb2.GameMode, str]] = ...) -> None: ...

class GetTopRankerLeaderboardResponse(_message.Message):
    __slots__ = ("top_rankers", "next_page_token", "deadline")
    TOP_RANKERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    DEADLINE_FIELD_NUMBER: _ClassVar[int]
    top_rankers: _containers.RepeatedCompositeFieldContainer[TopRanker]
    next_page_token: str
    deadline: _timestamp_pb2.Timestamp
    def __init__(self, top_rankers: _Optional[_Iterable[_Union[TopRanker, _Mapping]]] = ..., next_page_token: _Optional[str] = ..., deadline: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetTopRankerRequest(_message.Message):
    __slots__ = ("profile_address", "week", "play_mode", "game_mode")
    PROFILE_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    PLAY_MODE_FIELD_NUMBER: _ClassVar[int]
    GAME_MODE_FIELD_NUMBER: _ClassVar[int]
    profile_address: str
    week: int
    play_mode: _score_pb2.PlayMode
    game_mode: _score_pb2.GameMode
    def __init__(self, profile_address: _Optional[str] = ..., week: _Optional[int] = ..., play_mode: _Optional[_Union[_score_pb2.PlayMode, str]] = ..., game_mode: _Optional[_Union[_score_pb2.GameMode, str]] = ...) -> None: ...

class RenderTopRankerLeaderboardRequest(_message.Message):
    __slots__ = ("week", "season", "play_mode", "game_mode", "me")
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SEASON_FIELD_NUMBER: _ClassVar[int]
    PLAY_MODE_FIELD_NUMBER: _ClassVar[int]
    GAME_MODE_FIELD_NUMBER: _ClassVar[int]
    ME_FIELD_NUMBER: _ClassVar[int]
    week: int
    season: int
    play_mode: _score_pb2.PlayMode
    game_mode: _score_pb2.GameMode
    me: str
    def __init__(self, week: _Optional[int] = ..., season: _Optional[int] = ..., play_mode: _Optional[_Union[_score_pb2.PlayMode, str]] = ..., game_mode: _Optional[_Union[_score_pb2.GameMode, str]] = ..., me: _Optional[str] = ...) -> None: ...

class GetWeeklyTopCollectorLeaderboardRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "week", "season")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SEASON_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    week: int
    season: int
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., week: _Optional[int] = ..., season: _Optional[int] = ...) -> None: ...

class GetWeeklyTopCollectorLeaderboardResponse(_message.Message):
    __slots__ = ("top_collectors", "next_page_token", "deadline")
    TOP_COLLECTORS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    DEADLINE_FIELD_NUMBER: _ClassVar[int]
    top_collectors: _containers.RepeatedCompositeFieldContainer[StarHunter]
    next_page_token: str
    deadline: _timestamp_pb2.Timestamp
    def __init__(self, top_collectors: _Optional[_Iterable[_Union[StarHunter, _Mapping]]] = ..., next_page_token: _Optional[str] = ..., deadline: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetWeeklyTopCollectorRequest(_message.Message):
    __slots__ = ("profile_address", "week")
    PROFILE_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    profile_address: str
    week: int
    def __init__(self, profile_address: _Optional[str] = ..., week: _Optional[int] = ...) -> None: ...

class GetAllTimeTopCollectorLeaderboardRequest(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class GetAllTimeTopCollectorLeaderboardResponse(_message.Message):
    __slots__ = ("top_collectors", "next_page_token")
    TOP_COLLECTORS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    top_collectors: _containers.RepeatedCompositeFieldContainer[StarHunter]
    next_page_token: str
    def __init__(self, top_collectors: _Optional[_Iterable[_Union[StarHunter, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class RenderWeeklyStarHunterLeaderboardRequest(_message.Message):
    __slots__ = ("week", "season", "me")
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SEASON_FIELD_NUMBER: _ClassVar[int]
    ME_FIELD_NUMBER: _ClassVar[int]
    week: int
    season: int
    me: str
    def __init__(self, week: _Optional[int] = ..., season: _Optional[int] = ..., me: _Optional[str] = ...) -> None: ...

class GetWeeklyStarHunterLeaderboardRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "week", "season")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    SEASON_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    week: int
    season: int
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., week: _Optional[int] = ..., season: _Optional[int] = ...) -> None: ...

class GetWeeklyStarHunterLeaderboardResponse(_message.Message):
    __slots__ = ("star_hunters", "next_page_token", "deadline")
    STAR_HUNTERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    DEADLINE_FIELD_NUMBER: _ClassVar[int]
    star_hunters: _containers.RepeatedCompositeFieldContainer[StarHunter]
    next_page_token: str
    deadline: _timestamp_pb2.Timestamp
    def __init__(self, star_hunters: _Optional[_Iterable[_Union[StarHunter, _Mapping]]] = ..., next_page_token: _Optional[str] = ..., deadline: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetWeeklyStarHunterRequest(_message.Message):
    __slots__ = ("profile_address", "week")
    PROFILE_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    profile_address: str
    week: int
    def __init__(self, profile_address: _Optional[str] = ..., week: _Optional[int] = ...) -> None: ...

class GetAllTimeStarHunterLeaderboardRequest(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class GetAllTimeStarHunterLeaderboardResponse(_message.Message):
    __slots__ = ("star_hunters", "next_page_token")
    STAR_HUNTERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    star_hunters: _containers.RepeatedCompositeFieldContainer[StarHunter]
    next_page_token: str
    def __init__(self, star_hunters: _Optional[_Iterable[_Union[StarHunter, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ImageResponse(_message.Message):
    __slots__ = ("image",)
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    image: bytes
    def __init__(self, image: _Optional[bytes] = ...) -> None: ...

class TopRanker(_message.Message):
    __slots__ = ("rank", "profile", "score")
    RANK_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    rank: int
    profile: _profile_pb2.Profile
    score: _score_pb2.Score
    def __init__(self, rank: _Optional[int] = ..., profile: _Optional[_Union[_profile_pb2.Profile, _Mapping]] = ..., score: _Optional[_Union[_score_pb2.Score, _Mapping]] = ...) -> None: ...

class StarHunter(_message.Message):
    __slots__ = ("rank", "profile", "total_stars")
    RANK_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_STARS_FIELD_NUMBER: _ClassVar[int]
    rank: int
    profile: _profile_pb2.Profile
    total_stars: int
    def __init__(self, rank: _Optional[int] = ..., profile: _Optional[_Union[_profile_pb2.Profile, _Mapping]] = ..., total_stars: _Optional[int] = ...) -> None: ...

class RenderStarHuntersLeaderboardImageRequest(_message.Message):
    __slots__ = ("star_hunters", "me")
    STAR_HUNTERS_FIELD_NUMBER: _ClassVar[int]
    ME_FIELD_NUMBER: _ClassVar[int]
    star_hunters: _containers.RepeatedCompositeFieldContainer[StarHunterSlim]
    me: StarHunterSlim
    def __init__(self, star_hunters: _Optional[_Iterable[_Union[StarHunterSlim, _Mapping]]] = ..., me: _Optional[_Union[StarHunterSlim, _Mapping]] = ...) -> None: ...

class RenderTopRankerLeaderboardImageRequest(_message.Message):
    __slots__ = ("top_rankers", "me")
    TOP_RANKERS_FIELD_NUMBER: _ClassVar[int]
    ME_FIELD_NUMBER: _ClassVar[int]
    top_rankers: _containers.RepeatedCompositeFieldContainer[TopRankerSlim]
    me: TopRankerSlim
    def __init__(self, top_rankers: _Optional[_Iterable[_Union[TopRankerSlim, _Mapping]]] = ..., me: _Optional[_Union[TopRankerSlim, _Mapping]] = ...) -> None: ...

class StarHunterSlim(_message.Message):
    __slots__ = ("rank", "profile", "total_stars")
    RANK_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_STARS_FIELD_NUMBER: _ClassVar[int]
    rank: int
    profile: str
    total_stars: int
    def __init__(self, rank: _Optional[int] = ..., profile: _Optional[str] = ..., total_stars: _Optional[int] = ...) -> None: ...

class TopRankerSlim(_message.Message):
    __slots__ = ("rank", "profile", "score_point")
    RANK_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    SCORE_POINT_FIELD_NUMBER: _ClassVar[int]
    rank: int
    profile: str
    score_point: int
    def __init__(self, rank: _Optional[int] = ..., profile: _Optional[str] = ..., score_point: _Optional[int] = ...) -> None: ...

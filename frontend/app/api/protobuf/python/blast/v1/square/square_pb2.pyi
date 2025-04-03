from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from blast.v1.nft import nft_pb2 as _nft_pb2
from blast.v1.user import user_pb2 as _user_pb2
from blast.v1.chain import sign_pb2 as _sign_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SquareView(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SQUARE_VIEW_UNSPECIFIED: _ClassVar[SquareView]
    SQUARE_VIEW_OWNER: _ClassVar[SquareView]
    SQUARE_VIEW_MEMBER: _ClassVar[SquareView]
    SQUARE_VIEW_NOT_MEMBER: _ClassVar[SquareView]

class SquareState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[SquareState]
    CREATED_PENDING: _ClassVar[SquareState]
    OWNED: _ClassVar[SquareState]
    UNOWNED: _ClassVar[SquareState]

class SquareJoinType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[SquareJoinType]
    PUBLIC: _ClassVar[SquareJoinType]
    PRIVATE: _ClassVar[SquareJoinType]
    TOKEN_GATED: _ClassVar[SquareJoinType]

class SquareMemberType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SQUARE_MEMBER_TYPE_UNSPECIFIED: _ClassVar[SquareMemberType]
    OWNER: _ClassVar[SquareMemberType]
    MEMBER: _ClassVar[SquareMemberType]

class SquareMemberRankType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SQUARE_MEMBER_RANK_TYPE_UNSPECIFIED: _ClassVar[SquareMemberRankType]
    ALL_TIME: _ClassVar[SquareMemberRankType]
    WEEKLY: _ClassVar[SquareMemberRankType]

class RejectMintCode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REJECT_MINT_CODE_UNSPECIFIED: _ClassVar[RejectMintCode]
    NO_ELIGIBILITY: _ClassVar[RejectMintCode]
    ROUND_TIME_NOT_MATCH: _ClassVar[RejectMintCode]
    ALREADY_MINTED: _ClassVar[RejectMintCode]

class RejectJoinSquareCode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REJECT_JOIN_CODE_UNSPECIFIED: _ClassVar[RejectJoinSquareCode]
    REJECT_JOIN_FULLY_OCCUPIED: _ClassVar[RejectJoinSquareCode]
    REJECT_JOIN_NOT_ENOUGH_STAKING_AMOUNT: _ClassVar[RejectJoinSquareCode]
    REJECT_JOIN_INCORRECT_PRIVATE_CODE: _ClassVar[RejectJoinSquareCode]
    REJECT_JOIN_NOT_TOKEN_HOLDER: _ClassVar[RejectJoinSquareCode]
    REJECT_JOIN_ALREADY_JOINED: _ClassVar[RejectJoinSquareCode]

class RejectTransferSquareCode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    REJECT_TRANSFER_CODE_UNSPECIFIED: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_FULLY_OCCUPIED: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_NOT_ENOUGH_STAKING_AMOUNT: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_INCORRECT_PRIVATE_CODE: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_NOT_TOKEN_HOLDER: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_NOT_SQUARE_MEMBER: _ClassVar[RejectTransferSquareCode]
    REJECT_TRANSFER_NOT_AFTER_COOLDOWN_TIME: _ClassVar[RejectTransferSquareCode]

class MintEligibility(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MINT_ELIGIBILITY_UNSPECIFIED: _ClassVar[MintEligibility]
    NOT_ELIGIBLE: _ClassVar[MintEligibility]
    ELIGIBLE_ROUND1: _ClassVar[MintEligibility]
    ELIGIBLE_ROUND2: _ClassVar[MintEligibility]
    ELIGIBLE_ROUND1_AND_ROUND2: _ClassVar[MintEligibility]

class TransferMemberType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TRANSFER_MEMBER_TYPE_UNSPECIFIED: _ClassVar[TransferMemberType]
    DEFAULT: _ClassVar[TransferMemberType]
    KICKED_OUT: _ClassVar[TransferMemberType]
    TO_OWNER: _ClassVar[TransferMemberType]

class SpiritType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SQUARE_SPIRIT_TYPE_UNSPECIFIED: _ClassVar[SpiritType]
    VOTING: _ClassVar[SpiritType]
    SUMMON_BEBOB_SUCCESS: _ClassVar[SpiritType]
    ATTACK_BEBOB_SUCCESS: _ClassVar[SpiritType]
    COLLECT_STARS: _ClassVar[SpiritType]
    COMMUNITY_EVENT: _ClassVar[SpiritType]
SQUARE_VIEW_UNSPECIFIED: SquareView
SQUARE_VIEW_OWNER: SquareView
SQUARE_VIEW_MEMBER: SquareView
SQUARE_VIEW_NOT_MEMBER: SquareView
STATE_UNSPECIFIED: SquareState
CREATED_PENDING: SquareState
OWNED: SquareState
UNOWNED: SquareState
TYPE_UNSPECIFIED: SquareJoinType
PUBLIC: SquareJoinType
PRIVATE: SquareJoinType
TOKEN_GATED: SquareJoinType
SQUARE_MEMBER_TYPE_UNSPECIFIED: SquareMemberType
OWNER: SquareMemberType
MEMBER: SquareMemberType
SQUARE_MEMBER_RANK_TYPE_UNSPECIFIED: SquareMemberRankType
ALL_TIME: SquareMemberRankType
WEEKLY: SquareMemberRankType
REJECT_MINT_CODE_UNSPECIFIED: RejectMintCode
NO_ELIGIBILITY: RejectMintCode
ROUND_TIME_NOT_MATCH: RejectMintCode
ALREADY_MINTED: RejectMintCode
REJECT_JOIN_CODE_UNSPECIFIED: RejectJoinSquareCode
REJECT_JOIN_FULLY_OCCUPIED: RejectJoinSquareCode
REJECT_JOIN_NOT_ENOUGH_STAKING_AMOUNT: RejectJoinSquareCode
REJECT_JOIN_INCORRECT_PRIVATE_CODE: RejectJoinSquareCode
REJECT_JOIN_NOT_TOKEN_HOLDER: RejectJoinSquareCode
REJECT_JOIN_ALREADY_JOINED: RejectJoinSquareCode
REJECT_TRANSFER_CODE_UNSPECIFIED: RejectTransferSquareCode
REJECT_TRANSFER_FULLY_OCCUPIED: RejectTransferSquareCode
REJECT_TRANSFER_NOT_ENOUGH_STAKING_AMOUNT: RejectTransferSquareCode
REJECT_TRANSFER_INCORRECT_PRIVATE_CODE: RejectTransferSquareCode
REJECT_TRANSFER_NOT_TOKEN_HOLDER: RejectTransferSquareCode
REJECT_TRANSFER_NOT_SQUARE_MEMBER: RejectTransferSquareCode
REJECT_TRANSFER_NOT_AFTER_COOLDOWN_TIME: RejectTransferSquareCode
MINT_ELIGIBILITY_UNSPECIFIED: MintEligibility
NOT_ELIGIBLE: MintEligibility
ELIGIBLE_ROUND1: MintEligibility
ELIGIBLE_ROUND2: MintEligibility
ELIGIBLE_ROUND1_AND_ROUND2: MintEligibility
TRANSFER_MEMBER_TYPE_UNSPECIFIED: TransferMemberType
DEFAULT: TransferMemberType
KICKED_OUT: TransferMemberType
TO_OWNER: TransferMemberType
SQUARE_SPIRIT_TYPE_UNSPECIFIED: SpiritType
VOTING: SpiritType
SUMMON_BEBOB_SUCCESS: SpiritType
ATTACK_BEBOB_SUCCESS: SpiritType
COLLECT_STARS: SpiritType
COMMUNITY_EVENT: SpiritType

class GetSquareRequest(_message.Message):
    __slots__ = ("square", "view")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    VIEW_FIELD_NUMBER: _ClassVar[int]
    square: str
    view: SquareView
    def __init__(self, square: _Optional[str] = ..., view: _Optional[_Union[SquareView, str]] = ...) -> None: ...

class ListSquaresRequest(_message.Message):
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

class ListSquaresResponse(_message.Message):
    __slots__ = ("squares", "next_page_token")
    SQUARES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    squares: _containers.RepeatedCompositeFieldContainer[Square]
    next_page_token: str
    def __init__(self, squares: _Optional[_Iterable[_Union[Square, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ValidateDisplayNameAvailabilityRequest(_message.Message):
    __slots__ = ("display_name",)
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    display_name: str
    def __init__(self, display_name: _Optional[str] = ...) -> None: ...

class ValidateDisplayNameAvailabilityResponse(_message.Message):
    __slots__ = ("display_name", "available", "reason")
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    display_name: str
    available: bool
    reason: str
    def __init__(self, display_name: _Optional[str] = ..., available: bool = ..., reason: _Optional[str] = ...) -> None: ...

class CreateSquareAndSignRequest(_message.Message):
    __slots__ = ("nonce", "square")
    NONCE_FIELD_NUMBER: _ClassVar[int]
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    nonce: str
    square: Square
    def __init__(self, nonce: _Optional[str] = ..., square: _Optional[_Union[Square, _Mapping]] = ...) -> None: ...

class CreateSquareAndSignResponse(_message.Message):
    __slots__ = ("square", "signature", "params")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    square: Square
    signature: str
    params: _sign_pb2.MintAndCreateSquareParams
    def __init__(self, square: _Optional[_Union[Square, _Mapping]] = ..., signature: _Optional[str] = ..., params: _Optional[_Union[_sign_pb2.MintAndCreateSquareParams, _Mapping]] = ...) -> None: ...

class ListUsersSquaresRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class ListUsersSquaresResponse(_message.Message):
    __slots__ = ("squares",)
    SQUARES_FIELD_NUMBER: _ClassVar[int]
    squares: _containers.RepeatedCompositeFieldContainer[Square]
    def __init__(self, squares: _Optional[_Iterable[_Union[Square, _Mapping]]] = ...) -> None: ...

class UpdateSquareRequest(_message.Message):
    __slots__ = ("square", "update_mask")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    square: Square
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, square: _Optional[_Union[Square, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class GetSquareWeeklySpiritsRequest(_message.Message):
    __slots__ = ("square", "week")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    square: str
    week: int
    def __init__(self, square: _Optional[str] = ..., week: _Optional[int] = ...) -> None: ...

class GetSquareWeeklySpiritsResponse(_message.Message):
    __slots__ = ("weekly_spirits",)
    WEEKLY_SPIRITS_FIELD_NUMBER: _ClassVar[int]
    weekly_spirits: int
    def __init__(self, weekly_spirits: _Optional[int] = ...) -> None: ...

class CheckMintEligibilityRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class CheckMintEligibilityResponse(_message.Message):
    __slots__ = ("user", "eligibility", "available", "reject_code")
    USER_FIELD_NUMBER: _ClassVar[int]
    ELIGIBILITY_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    REJECT_CODE_FIELD_NUMBER: _ClassVar[int]
    user: str
    eligibility: MintEligibility
    available: bool
    reject_code: RejectMintCode
    def __init__(self, user: _Optional[str] = ..., eligibility: _Optional[_Union[MintEligibility, str]] = ..., available: bool = ..., reject_code: _Optional[_Union[RejectMintCode, str]] = ...) -> None: ...

class ApproveJoinSquareAndSignRequest(_message.Message):
    __slots__ = ("square", "user", "private_code", "nonce")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_CODE_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    square: str
    user: str
    private_code: str
    nonce: str
    def __init__(self, square: _Optional[str] = ..., user: _Optional[str] = ..., private_code: _Optional[str] = ..., nonce: _Optional[str] = ...) -> None: ...

class ApproveJoinSquareAndSignResponse(_message.Message):
    __slots__ = ("approved", "signature", "reject_code", "params")
    APPROVED_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    REJECT_CODE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    approved: bool
    signature: str
    reject_code: RejectJoinSquareCode
    params: _sign_pb2.JoinSquareParams
    def __init__(self, approved: bool = ..., signature: _Optional[str] = ..., reject_code: _Optional[_Union[RejectJoinSquareCode, str]] = ..., params: _Optional[_Union[_sign_pb2.JoinSquareParams, _Mapping]] = ...) -> None: ...

class ApproveTransferSquareAndSignRequest(_message.Message):
    __slots__ = ("square", "user", "private_code", "nonce")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_CODE_FIELD_NUMBER: _ClassVar[int]
    NONCE_FIELD_NUMBER: _ClassVar[int]
    square: str
    user: str
    private_code: str
    nonce: str
    def __init__(self, square: _Optional[str] = ..., user: _Optional[str] = ..., private_code: _Optional[str] = ..., nonce: _Optional[str] = ...) -> None: ...

class ApproveTransferSquareAndSignResponse(_message.Message):
    __slots__ = ("approved", "signature", "reject_code", "params")
    APPROVED_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    REJECT_CODE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    approved: bool
    signature: str
    reject_code: RejectTransferSquareCode
    params: _sign_pb2.TransferSquareParams
    def __init__(self, approved: bool = ..., signature: _Optional[str] = ..., reject_code: _Optional[_Union[RejectTransferSquareCode, str]] = ..., params: _Optional[_Union[_sign_pb2.TransferSquareParams, _Mapping]] = ...) -> None: ...

class GetSquareWeeklyPointsRequest(_message.Message):
    __slots__ = ("square", "week")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    square: str
    week: int
    def __init__(self, square: _Optional[str] = ..., week: _Optional[int] = ...) -> None: ...

class GetSquareWeeklyPointsResponse(_message.Message):
    __slots__ = ("weekly_points", "week")
    WEEKLY_POINTS_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    weekly_points: int
    week: int
    def __init__(self, weekly_points: _Optional[int] = ..., week: _Optional[int] = ...) -> None: ...

class ListSquareSpiritHistoriesRequest(_message.Message):
    __slots__ = ("square", "page_size", "page_token")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    square: str
    page_size: int
    page_token: str
    def __init__(self, square: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListSquareSpiritHistoriesResposne(_message.Message):
    __slots__ = ("histories", "next_page_token")
    HISTORIES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    histories: _containers.RepeatedCompositeFieldContainer[SquareSpiritHistory]
    next_page_token: str
    def __init__(self, histories: _Optional[_Iterable[_Union[SquareSpiritHistory, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListSquareMembersRequest(_message.Message):
    __slots__ = ("square", "page_size", "page_token", "filter", "order_by")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    square: str
    page_size: int
    page_token: str
    filter: str
    order_by: str
    def __init__(self, square: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListSquareMembersResponse(_message.Message):
    __slots__ = ("members", "next_page_token")
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    members: _containers.RepeatedCompositeFieldContainer[SquareMember]
    next_page_token: str
    def __init__(self, members: _Optional[_Iterable[_Union[SquareMember, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListSquareMemberRankingsRequest(_message.Message):
    __slots__ = ("square", "rank_type", "page_size", "page_token")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    RANK_TYPE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    square: str
    rank_type: SquareMemberRankType
    page_size: int
    page_token: str
    def __init__(self, square: _Optional[str] = ..., rank_type: _Optional[_Union[SquareMemberRankType, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListSquareMemberRankingsResponse(_message.Message):
    __slots__ = ("rankings", "next_page_token")
    RANKINGS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    rankings: _containers.RepeatedCompositeFieldContainer[SquareMemberRanking]
    next_page_token: str
    def __init__(self, rankings: _Optional[_Iterable[_Union[SquareMemberRanking, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class Square(_message.Message):
    __slots__ = ("name", "token_id", "owner_address", "create_time", "state", "signature_id", "join_type", "public", "private", "token_gated", "display_name", "introduction", "minimum_staking_amount_to_join_in_eth", "total_members_staking_amount_in_eth", "multiplier", "total_points", "capacity", "occupancy", "occupancy_including_pending", "pfp_boost", "nft", "spirits", "stars", "total_spirits", "weekly_spirits")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
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
    owner_address: str
    create_time: _timestamp_pb2.Timestamp
    state: SquareState
    signature_id: str
    join_type: SquareJoinType
    public: Public
    private: Private
    token_gated: TokenGated
    display_name: str
    introduction: str
    minimum_staking_amount_to_join_in_eth: float
    total_members_staking_amount_in_eth: float
    multiplier: float
    total_points: int
    capacity: int
    occupancy: int
    occupancy_including_pending: int
    pfp_boost: PFPBoost
    nft: SquareNFT
    spirits: int
    stars: int
    total_spirits: int
    weekly_spirits: int
    def __init__(self, name: _Optional[str] = ..., token_id: _Optional[str] = ..., owner_address: _Optional[str] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., state: _Optional[_Union[SquareState, str]] = ..., signature_id: _Optional[str] = ..., join_type: _Optional[_Union[SquareJoinType, str]] = ..., public: _Optional[_Union[Public, _Mapping]] = ..., private: _Optional[_Union[Private, _Mapping]] = ..., token_gated: _Optional[_Union[TokenGated, _Mapping]] = ..., display_name: _Optional[str] = ..., introduction: _Optional[str] = ..., minimum_staking_amount_to_join_in_eth: _Optional[float] = ..., total_members_staking_amount_in_eth: _Optional[float] = ..., multiplier: _Optional[float] = ..., total_points: _Optional[int] = ..., capacity: _Optional[int] = ..., occupancy: _Optional[int] = ..., occupancy_including_pending: _Optional[int] = ..., pfp_boost: _Optional[_Union[PFPBoost, _Mapping]] = ..., nft: _Optional[_Union[SquareNFT, _Mapping]] = ..., spirits: _Optional[int] = ..., stars: _Optional[int] = ..., total_spirits: _Optional[int] = ..., weekly_spirits: _Optional[int] = ...) -> None: ...

class PFPBoost(_message.Message):
    __slots__ = ("percentage", "member_count", "nft_contract")
    PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    MEMBER_COUNT_FIELD_NUMBER: _ClassVar[int]
    NFT_CONTRACT_FIELD_NUMBER: _ClassVar[int]
    percentage: float
    member_count: int
    nft_contract: str
    def __init__(self, percentage: _Optional[float] = ..., member_count: _Optional[int] = ..., nft_contract: _Optional[str] = ...) -> None: ...

class Public(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Private(_message.Message):
    __slots__ = ("code",)
    CODE_FIELD_NUMBER: _ClassVar[int]
    code: str
    def __init__(self, code: _Optional[str] = ...) -> None: ...

class TokenGated(_message.Message):
    __slots__ = ("nft_contract",)
    NFT_CONTRACT_FIELD_NUMBER: _ClassVar[int]
    nft_contract: str
    def __init__(self, nft_contract: _Optional[str] = ...) -> None: ...

class SquareNFT(_message.Message):
    __slots__ = ("token_id", "image_uri", "metadata_uri")
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    METADATA_URI_FIELD_NUMBER: _ClassVar[int]
    token_id: int
    image_uri: str
    metadata_uri: str
    def __init__(self, token_id: _Optional[int] = ..., image_uri: _Optional[str] = ..., metadata_uri: _Optional[str] = ...) -> None: ...

class SquareMember(_message.Message):
    __slots__ = ("name", "square_token_id", "user_address", "type", "total_points", "join_time")
    NAME_FIELD_NUMBER: _ClassVar[int]
    SQUARE_TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    JOIN_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    square_token_id: str
    user_address: str
    type: SquareMemberType
    total_points: int
    join_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., square_token_id: _Optional[str] = ..., user_address: _Optional[str] = ..., type: _Optional[_Union[SquareMemberType, str]] = ..., total_points: _Optional[int] = ..., join_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SquareMemberRanking(_message.Message):
    __slots__ = ("rank", "points", "member")
    RANK_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    MEMBER_FIELD_NUMBER: _ClassVar[int]
    rank: int
    points: int
    member: SquareMember
    def __init__(self, rank: _Optional[int] = ..., points: _Optional[int] = ..., member: _Optional[_Union[SquareMember, _Mapping]] = ...) -> None: ...

class SquareSpiritHistory(_message.Message):
    __slots__ = ("square", "type", "amount", "create_time")
    SQUARE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    square: str
    type: SpiritType
    amount: int
    create_time: _timestamp_pb2.Timestamp
    def __init__(self, square: _Optional[str] = ..., type: _Optional[_Union[SpiritType, str]] = ..., amount: _Optional[int] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

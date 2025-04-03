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

class BlastPointsType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[BlastPointsType]
    LIQUIDITY: _ClassVar[BlastPointsType]
    DEVELOPER: _ClassVar[BlastPointsType]

class BlastPointsTransferType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TRANSFER_UNSPECIFIED: _ClassVar[BlastPointsTransferType]
    POINTS_STAKING: _ClassVar[BlastPointsTransferType]
    GOLD_REFERRAL: _ClassVar[BlastPointsTransferType]
    GOLD_RAFFLE: _ClassVar[BlastPointsTransferType]
    GOLD_WEEKLY_SPACEBAR_POINTS: _ClassVar[BlastPointsTransferType]
    GOLD_SCORE_UPLOAD: _ClassVar[BlastPointsTransferType]
    GOLD_SCORE_RANKINGS_WINNER: _ClassVar[BlastPointsTransferType]
    GOLD_COMMUNITY_EVENT: _ClassVar[BlastPointsTransferType]
    GOLD_SS_CHALLENGE_WINNER: _ClassVar[BlastPointsTransferType]
    GOLD_SS_INVITATIONAL: _ClassVar[BlastPointsTransferType]

class BlastPointsBatchState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STATE_UNSPECIFIED: _ClassVar[BlastPointsBatchState]
    PENDING: _ClassVar[BlastPointsBatchState]
    CANCELLED: _ClassVar[BlastPointsBatchState]
    FINALIZING: _ClassVar[BlastPointsBatchState]
    FINALIZED: _ClassVar[BlastPointsBatchState]

class ReservationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RESERVATION_TYPE_UNSPECIFIED: _ClassVar[ReservationType]
    WEEKLY_SPACEBAR_POINTS: _ClassVar[ReservationType]
    REFERREE_WITH_STAKING: _ClassVar[ReservationType]
    SCORE_RANKINGS_WINNER: _ClassVar[ReservationType]
    SCORE_UPLOAD_BACKFILL: _ClassVar[ReservationType]
    COMMUNITY_EVENT_WINNER: _ClassVar[ReservationType]
    SS_CHALLENGE_WINNER: _ClassVar[ReservationType]
    SS_INVITATIONAL: _ClassVar[ReservationType]

class ReservationState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RESERVATION_STATE_UNSPECIFIED: _ClassVar[ReservationState]
    RESERVED: _ClassVar[ReservationState]
    TRANSFERRED: _ClassVar[ReservationState]
TYPE_UNSPECIFIED: BlastPointsType
LIQUIDITY: BlastPointsType
DEVELOPER: BlastPointsType
TRANSFER_UNSPECIFIED: BlastPointsTransferType
POINTS_STAKING: BlastPointsTransferType
GOLD_REFERRAL: BlastPointsTransferType
GOLD_RAFFLE: BlastPointsTransferType
GOLD_WEEKLY_SPACEBAR_POINTS: BlastPointsTransferType
GOLD_SCORE_UPLOAD: BlastPointsTransferType
GOLD_SCORE_RANKINGS_WINNER: BlastPointsTransferType
GOLD_COMMUNITY_EVENT: BlastPointsTransferType
GOLD_SS_CHALLENGE_WINNER: BlastPointsTransferType
GOLD_SS_INVITATIONAL: BlastPointsTransferType
STATE_UNSPECIFIED: BlastPointsBatchState
PENDING: BlastPointsBatchState
CANCELLED: BlastPointsBatchState
FINALIZING: BlastPointsBatchState
FINALIZED: BlastPointsBatchState
RESERVATION_TYPE_UNSPECIFIED: ReservationType
WEEKLY_SPACEBAR_POINTS: ReservationType
REFERREE_WITH_STAKING: ReservationType
SCORE_RANKINGS_WINNER: ReservationType
SCORE_UPLOAD_BACKFILL: ReservationType
COMMUNITY_EVENT_WINNER: ReservationType
SS_CHALLENGE_WINNER: ReservationType
SS_INVITATIONAL: ReservationType
RESERVATION_STATE_UNSPECIFIED: ReservationState
RESERVED: ReservationState
TRANSFERRED: ReservationState

class GetBlastPointsRequest(_message.Message):
    __slots__ = ("blast_points",)
    BLAST_POINTS_FIELD_NUMBER: _ClassVar[int]
    blast_points: str
    def __init__(self, blast_points: _Optional[str] = ...) -> None: ...

class GetBlastBalanceRequest(_message.Message):
    __slots__ = ("blast_balance", "contract_address", "phase")
    BLAST_BALANCE_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    blast_balance: str
    contract_address: str
    phase: int
    def __init__(self, blast_balance: _Optional[str] = ..., contract_address: _Optional[str] = ..., phase: _Optional[int] = ...) -> None: ...

class ListAllPendingTransfersRequest(_message.Message):
    __slots__ = ("blast_points", "points_type")
    BLAST_POINTS_FIELD_NUMBER: _ClassVar[int]
    POINTS_TYPE_FIELD_NUMBER: _ClassVar[int]
    blast_points: str
    points_type: BlastPointsType
    def __init__(self, blast_points: _Optional[str] = ..., points_type: _Optional[_Union[BlastPointsType, str]] = ...) -> None: ...

class ListAllPendingTransfersResponse(_message.Message):
    __slots__ = ("transfers",)
    TRANSFERS_FIELD_NUMBER: _ClassVar[int]
    transfers: _containers.RepeatedCompositeFieldContainer[Transfer]
    def __init__(self, transfers: _Optional[_Iterable[_Union[Transfer, _Mapping]]] = ...) -> None: ...

class BlastPoints(_message.Message):
    __slots__ = ("name", "user_address", "liquidity_points", "developer_points", "phase1", "phase2")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    LIQUIDITY_POINTS_FIELD_NUMBER: _ClassVar[int]
    DEVELOPER_POINTS_FIELD_NUMBER: _ClassVar[int]
    PHASE1_FIELD_NUMBER: _ClassVar[int]
    PHASE2_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    liquidity_points: float
    developer_points: float
    phase1: Points
    phase2: Points
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., liquidity_points: _Optional[float] = ..., developer_points: _Optional[float] = ..., phase1: _Optional[_Union[Points, _Mapping]] = ..., phase2: _Optional[_Union[Points, _Mapping]] = ...) -> None: ...

class Points(_message.Message):
    __slots__ = ("liquidity_points", "developer_points")
    LIQUIDITY_POINTS_FIELD_NUMBER: _ClassVar[int]
    DEVELOPER_POINTS_FIELD_NUMBER: _ClassVar[int]
    liquidity_points: float
    developer_points: float
    def __init__(self, liquidity_points: _Optional[float] = ..., developer_points: _Optional[float] = ...) -> None: ...

class Transfer(_message.Message):
    __slots__ = ("user_address", "state", "points_type", "points", "create_time", "phase", "transfer_type")
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    POINTS_TYPE_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    TRANSFER_TYPE_FIELD_NUMBER: _ClassVar[int]
    user_address: str
    state: BlastPointsBatchState
    points_type: BlastPointsType
    points: float
    create_time: _timestamp_pb2.Timestamp
    phase: int
    transfer_type: BlastPointsTransferType
    def __init__(self, user_address: _Optional[str] = ..., state: _Optional[_Union[BlastPointsBatchState, str]] = ..., points_type: _Optional[_Union[BlastPointsType, str]] = ..., points: _Optional[float] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., phase: _Optional[int] = ..., transfer_type: _Optional[_Union[BlastPointsTransferType, str]] = ...) -> None: ...

class TransferBatch(_message.Message):
    __slots__ = ("batch_id", "contract_address", "state", "points_type", "transfers", "total_points", "create_time", "phase")
    BATCH_ID_FIELD_NUMBER: _ClassVar[int]
    CONTRACT_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    POINTS_TYPE_FIELD_NUMBER: _ClassVar[int]
    TRANSFERS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_POINTS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    batch_id: str
    contract_address: str
    state: BlastPointsBatchState
    points_type: BlastPointsType
    transfers: _containers.RepeatedCompositeFieldContainer[Transfer]
    total_points: float
    create_time: _timestamp_pb2.Timestamp
    phase: int
    def __init__(self, batch_id: _Optional[str] = ..., contract_address: _Optional[str] = ..., state: _Optional[_Union[BlastPointsBatchState, str]] = ..., points_type: _Optional[_Union[BlastPointsType, str]] = ..., transfers: _Optional[_Iterable[_Union[Transfer, _Mapping]]] = ..., total_points: _Optional[float] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., phase: _Optional[int] = ...) -> None: ...

class BlastBalance(_message.Message):
    __slots__ = ("address", "liquidity", "developer")
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    LIQUIDITY_FIELD_NUMBER: _ClassVar[int]
    DEVELOPER_FIELD_NUMBER: _ClassVar[int]
    address: str
    liquidity: Balance
    developer: Balance
    def __init__(self, address: _Optional[str] = ..., liquidity: _Optional[_Union[Balance, _Mapping]] = ..., developer: _Optional[_Union[Balance, _Mapping]] = ...) -> None: ...

class Balance(_message.Message):
    __slots__ = ("available", "pending_sent", "earned_cumulative", "received_cumulative", "finalized_sent_cumulative")
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    PENDING_SENT_FIELD_NUMBER: _ClassVar[int]
    EARNED_CUMULATIVE_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_CUMULATIVE_FIELD_NUMBER: _ClassVar[int]
    FINALIZED_SENT_CUMULATIVE_FIELD_NUMBER: _ClassVar[int]
    available: str
    pending_sent: str
    earned_cumulative: str
    received_cumulative: str
    finalized_sent_cumulative: str
    def __init__(self, available: _Optional[str] = ..., pending_sent: _Optional[str] = ..., earned_cumulative: _Optional[str] = ..., received_cumulative: _Optional[str] = ..., finalized_sent_cumulative: _Optional[str] = ...) -> None: ...

class BlastGoldReservation(_message.Message):
    __slots__ = ("name", "user_address", "amount", "reservation_type", "state", "create_time", "transfer_time")
    NAME_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    RESERVATION_TYPE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    TRANSFER_TIME_FIELD_NUMBER: _ClassVar[int]
    name: str
    user_address: str
    amount: str
    reservation_type: ReservationType
    state: ReservationState
    create_time: _timestamp_pb2.Timestamp
    transfer_time: _timestamp_pb2.Timestamp
    def __init__(self, name: _Optional[str] = ..., user_address: _Optional[str] = ..., amount: _Optional[str] = ..., reservation_type: _Optional[_Union[ReservationType, str]] = ..., state: _Optional[_Union[ReservationState, str]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., transfer_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class BatchCreateBlastGoldReservationsRequest(_message.Message):
    __slots__ = ("requests",)
    REQUESTS_FIELD_NUMBER: _ClassVar[int]
    requests: _containers.RepeatedCompositeFieldContainer[CreateBlastGoldReservationRequest]
    def __init__(self, requests: _Optional[_Iterable[_Union[CreateBlastGoldReservationRequest, _Mapping]]] = ...) -> None: ...

class CreateBlastGoldReservationRequest(_message.Message):
    __slots__ = ("reservation",)
    RESERVATION_FIELD_NUMBER: _ClassVar[int]
    reservation: BlastGoldReservation
    def __init__(self, reservation: _Optional[_Union[BlastGoldReservation, _Mapping]] = ...) -> None: ...

class BatchCreateBlastGoldReservationsResponse(_message.Message):
    __slots__ = ("reservations",)
    RESERVATIONS_FIELD_NUMBER: _ClassVar[int]
    reservations: _containers.RepeatedCompositeFieldContainer[BlastGoldReservation]
    def __init__(self, reservations: _Optional[_Iterable[_Union[BlastGoldReservation, _Mapping]]] = ...) -> None: ...

class ListBlastGoldReservationsRequest(_message.Message):
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

class ListBlastGoldReservationsResponse(_message.Message):
    __slots__ = ("reservations", "next_page_token")
    RESERVATIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    reservations: _containers.RepeatedCompositeFieldContainer[BlastGoldReservation]
    next_page_token: str
    def __init__(self, reservations: _Optional[_Iterable[_Union[BlastGoldReservation, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class TransferReservedBlastGoldsRequest(_message.Message):
    __slots__ = ("reservation_type",)
    RESERVATION_TYPE_FIELD_NUMBER: _ClassVar[int]
    reservation_type: ReservationType
    def __init__(self, reservation_type: _Optional[_Union[ReservationType, str]] = ...) -> None: ...

class TransferReservedBlastGoldsResponse(_message.Message):
    __slots__ = ("reservations",)
    RESERVATIONS_FIELD_NUMBER: _ClassVar[int]
    reservations: _containers.RepeatedCompositeFieldContainer[BlastGoldReservation]
    def __init__(self, reservations: _Optional[_Iterable[_Union[BlastGoldReservation, _Mapping]]] = ...) -> None: ...

// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBlastPointsRequest {
    /// The name of the points to retrieve.
    /// Format: users/{address}/blastPoints
    #[prost(string, tag="1")]
    pub blast_points: ::prost::alloc::string::String,
}
/// GetBlastBalanceRequest this rpc only can be accessed by the admin role
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBlastBalanceRequest {
    #[prost(string, tag="1")]
    pub blast_balance: ::prost::alloc::string::String,
    /// The contract address of the token.
    /// This field is required if the blast_balance has skipped the blast_points field.
    #[prost(string, tag="2")]
    pub contract_address: ::prost::alloc::string::String,
    /// Which phase of blast points API
    #[prost(int32, tag="3")]
    pub phase: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAllPendingTransfersRequest {
    /// The name of the points to retrieve.
    /// Format: users/{address}/blastPoints
    #[prost(string, tag="1")]
    pub blast_points: ::prost::alloc::string::String,
    /// The type of the points to retrieve.
    /// IF not set, it will return LIQUIDITY points.
    #[prost(enumeration="BlastPointsType", tag="2")]
    pub points_type: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAllPendingTransfersResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub transfers: ::prost::alloc::vec::Vec<Transfer>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlastPoints {
    /// The resource name of the Points.
    /// Format: users/{address}/blastPoints
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    /// DEPRECATED in favor of phase1.liquidity_points
    #[prost(float, tag="3")]
    pub liquidity_points: f32,
    /// DEPRECATED in favor of phase1.developer_points
    #[prost(float, tag="4")]
    pub developer_points: f32,
    #[prost(message, optional, tag="5")]
    pub phase1: ::core::option::Option<Points>,
    #[prost(message, optional, tag="6")]
    pub phase2: ::core::option::Option<Points>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Points {
    #[prost(float, tag="1")]
    pub liquidity_points: f32,
    #[prost(float, tag="2")]
    pub developer_points: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transfer {
    ///
    #[prost(string, tag="1")]
    pub user_address: ::prost::alloc::string::String,
    #[prost(enumeration="BlastPointsBatchState", tag="2")]
    pub state: i32,
    #[prost(enumeration="BlastPointsType", tag="3")]
    pub points_type: i32,
    #[prost(float, tag="4")]
    pub points: f32,
    #[prost(message, optional, tag="6")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(int32, tag="7")]
    pub phase: i32,
    #[prost(enumeration="BlastPointsTransferType", tag="8")]
    pub transfer_type: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferBatch {
    #[prost(string, tag="1")]
    pub batch_id: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub contract_address: ::prost::alloc::string::String,
    #[prost(enumeration="BlastPointsBatchState", tag="3")]
    pub state: i32,
    #[prost(enumeration="BlastPointsType", tag="4")]
    pub points_type: i32,
    #[prost(message, repeated, tag="5")]
    pub transfers: ::prost::alloc::vec::Vec<Transfer>,
    #[prost(float, tag="6")]
    pub total_points: f32,
    #[prost(message, optional, tag="7")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(int32, tag="8")]
    pub phase: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlastBalance {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub liquidity: ::core::option::Option<Balance>,
    #[prost(message, optional, tag="3")]
    pub developer: ::core::option::Option<Balance>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Balance {
    #[prost(string, tag="1")]
    pub available: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub pending_sent: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub earned_cumulative: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub received_cumulative: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub finalized_sent_cumulative: ::prost::alloc::string::String,
}
/// BlastGoldReservation
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlastGoldReservation {
    /// The resource name of the BlastGoldReservation.
    /// Format: blastGoldReservations/{blast_gold_reservation}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The user address of the user to reserve the points.
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    /// The amount of points to reserve.
    #[prost(string, tag="3")]
    pub amount: ::prost::alloc::string::String,
    /// The type of the reservation.
    #[prost(enumeration="ReservationType", tag="4")]
    pub reservation_type: i32,
    /// The state of the reservation.
    #[prost(enumeration="ReservationState", tag="5")]
    pub state: i32,
    /// The create time of the reservation.
    #[prost(message, optional, tag="6")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The transfer time of the reservation.
    #[prost(message, optional, tag="7")]
    pub transfer_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// BatchCreateBlastGoldReservationsRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BatchCreateBlastGoldReservationsRequest {
    #[prost(message, repeated, tag="1")]
    pub requests: ::prost::alloc::vec::Vec<CreateBlastGoldReservationRequest>,
}
/// CreateBlastGoldReservationRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateBlastGoldReservationRequest {
    #[prost(message, optional, tag="1")]
    pub reservation: ::core::option::Option<BlastGoldReservation>,
}
/// BatchCreateBlastGoldReservationsResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BatchCreateBlastGoldReservationsResponse {
    #[prost(message, repeated, tag="1")]
    pub reservations: ::prost::alloc::vec::Vec<BlastGoldReservation>,
}
/// ListBlastGoldReservationsRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBlastGoldReservationsRequest {
    /// The maximum number of BlastGoldReservations to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 100 rows will be returned.
    /// The maximum value is 1000.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListBlastGoldReservationsRequest` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// filter
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// One or more fields to compare and use to sort the output. (optional)
    /// Default order for a field is ascending by create_time
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * "create_time"
    ///
    /// Examples
    /// * order_by=create_time desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListBlastGoldReservationsResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBlastGoldReservationsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub reservations: ::prost::alloc::vec::Vec<BlastGoldReservation>,
    /// The token to retrieve the next page of results, or empty if there are no more results.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
/// TransferReservedBlastGoldsRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferReservedBlastGoldsRequest {
    /// type of the reservation to transfer
    #[prost(enumeration="ReservationType", tag="1")]
    pub reservation_type: i32,
}
/// TransferReservedBlastGoldsResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferReservedBlastGoldsResponse {
    /// transfered reservations
    #[prost(message, repeated, tag="1")]
    pub reservations: ::prost::alloc::vec::Vec<BlastGoldReservation>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BlastPointsType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    Liquidity = 1,
    Developer = 2,
}
impl BlastPointsType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BlastPointsType::TypeUnspecified => "TYPE_UNSPECIFIED",
            BlastPointsType::Liquidity => "LIQUIDITY",
            BlastPointsType::Developer => "DEVELOPER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "LIQUIDITY" => Some(Self::Liquidity),
            "DEVELOPER" => Some(Self::Developer),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BlastPointsTransferType {
    /// default value. this value is unused.
    TransferUnspecified = 0,
    PointsStaking = 1,
    GoldReferral = 2,
    GoldRaffle = 3,
    GoldWeeklySpacebarPoints = 4,
    GoldScoreUpload = 5,
    GoldScoreRankingsWinner = 6,
    GoldCommunityEvent = 7,
    GoldSsChallengeWinner = 100,
    GoldSsInvitational = 200,
}
impl BlastPointsTransferType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BlastPointsTransferType::TransferUnspecified => "TRANSFER_UNSPECIFIED",
            BlastPointsTransferType::PointsStaking => "POINTS_STAKING",
            BlastPointsTransferType::GoldReferral => "GOLD_REFERRAL",
            BlastPointsTransferType::GoldRaffle => "GOLD_RAFFLE",
            BlastPointsTransferType::GoldWeeklySpacebarPoints => "GOLD_WEEKLY_SPACEBAR_POINTS",
            BlastPointsTransferType::GoldScoreUpload => "GOLD_SCORE_UPLOAD",
            BlastPointsTransferType::GoldScoreRankingsWinner => "GOLD_SCORE_RANKINGS_WINNER",
            BlastPointsTransferType::GoldCommunityEvent => "GOLD_COMMUNITY_EVENT",
            BlastPointsTransferType::GoldSsChallengeWinner => "GOLD_SS_CHALLENGE_WINNER",
            BlastPointsTransferType::GoldSsInvitational => "GOLD_SS_INVITATIONAL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TRANSFER_UNSPECIFIED" => Some(Self::TransferUnspecified),
            "POINTS_STAKING" => Some(Self::PointsStaking),
            "GOLD_REFERRAL" => Some(Self::GoldReferral),
            "GOLD_RAFFLE" => Some(Self::GoldRaffle),
            "GOLD_WEEKLY_SPACEBAR_POINTS" => Some(Self::GoldWeeklySpacebarPoints),
            "GOLD_SCORE_UPLOAD" => Some(Self::GoldScoreUpload),
            "GOLD_SCORE_RANKINGS_WINNER" => Some(Self::GoldScoreRankingsWinner),
            "GOLD_COMMUNITY_EVENT" => Some(Self::GoldCommunityEvent),
            "GOLD_SS_CHALLENGE_WINNER" => Some(Self::GoldSsChallengeWinner),
            "GOLD_SS_INVITATIONAL" => Some(Self::GoldSsInvitational),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BlastPointsBatchState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    /// The batch is pending.
    Pending = 1,
    /// The batch is cancelled.
    Cancelled = 2,
    /// The batch is finalizing.
    Finalizing = 3,
    /// The batch is finalized.
    Finalized = 4,
}
impl BlastPointsBatchState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BlastPointsBatchState::StateUnspecified => "STATE_UNSPECIFIED",
            BlastPointsBatchState::Pending => "PENDING",
            BlastPointsBatchState::Cancelled => "CANCELLED",
            BlastPointsBatchState::Finalizing => "FINALIZING",
            BlastPointsBatchState::Finalized => "FINALIZED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "PENDING" => Some(Self::Pending),
            "CANCELLED" => Some(Self::Cancelled),
            "FINALIZING" => Some(Self::Finalizing),
            "FINALIZED" => Some(Self::Finalized),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ReservationType {
    /// default value. this value is unused.
    Unspecified = 0,
    WeeklySpacebarPoints = 1,
    ReferreeWithStaking = 2,
    ScoreRankingsWinner = 3,
    ScoreUploadBackfill = 4,
    CommunityEventWinner = 5,
    SsChallengeWinner = 6,
    SsInvitational = 7,
}
impl ReservationType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ReservationType::Unspecified => "RESERVATION_TYPE_UNSPECIFIED",
            ReservationType::WeeklySpacebarPoints => "WEEKLY_SPACEBAR_POINTS",
            ReservationType::ReferreeWithStaking => "REFERREE_WITH_STAKING",
            ReservationType::ScoreRankingsWinner => "SCORE_RANKINGS_WINNER",
            ReservationType::ScoreUploadBackfill => "SCORE_UPLOAD_BACKFILL",
            ReservationType::CommunityEventWinner => "COMMUNITY_EVENT_WINNER",
            ReservationType::SsChallengeWinner => "SS_CHALLENGE_WINNER",
            ReservationType::SsInvitational => "SS_INVITATIONAL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "RESERVATION_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "WEEKLY_SPACEBAR_POINTS" => Some(Self::WeeklySpacebarPoints),
            "REFERREE_WITH_STAKING" => Some(Self::ReferreeWithStaking),
            "SCORE_RANKINGS_WINNER" => Some(Self::ScoreRankingsWinner),
            "SCORE_UPLOAD_BACKFILL" => Some(Self::ScoreUploadBackfill),
            "COMMUNITY_EVENT_WINNER" => Some(Self::CommunityEventWinner),
            "SS_CHALLENGE_WINNER" => Some(Self::SsChallengeWinner),
            "SS_INVITATIONAL" => Some(Self::SsInvitational),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ReservationState {
    /// default value. this value is unused.
    Unspecified = 0,
    Reserved = 1,
    Transferred = 2,
}
impl ReservationState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ReservationState::Unspecified => "RESERVATION_STATE_UNSPECIFIED",
            ReservationState::Reserved => "RESERVED",
            ReservationState::Transferred => "TRANSFERRED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "RESERVATION_STATE_UNSPECIFIED" => Some(Self::Unspecified),
            "RESERVED" => Some(Self::Reserved),
            "TRANSFERRED" => Some(Self::Transferred),
            _ => None,
        }
    }
}
include!("blast.v1.blastpoints.tonic.rs");
// @@protoc_insertion_point(module)
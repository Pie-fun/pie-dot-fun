// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetPointsRequest {
    /// The name of the points to retrieve.
    /// Format: users/{address}/points
    #[prost(string, tag="1")]
    pub points: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsRequest {
    /// The maximum number of points to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListPoints` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    /// * user_address
    ///    * `=`
    ///
    /// Examples
    /// * name="points/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// One or more fields to compare and use to sort the output. (optional)
    /// Default order for a field is descending by id
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * "id", "user_address", "points"
    ///
    /// Examples
    /// * order_by=points desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListPointsResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub points: ::prost::alloc::vec::Vec<Points>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EarnStakingInterestRequest {
    /// The name of the points to retrieve.
    /// Format: users/{address}/points
    #[prost(string, tag="1")]
    pub points: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsReferralBonusesRequest {
    /// The maximum number of points to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 10 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListPointsReferralBonuses` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
}
/// ListPointsReferralBonusResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsReferralBonusesResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub referral_bonuses: ::prost::alloc::vec::Vec<PointsReferralBonus>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Points {
    /// The resource name of the Points.
    /// Format: users/{address}/points
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    ///
    #[prost(uint32, tag="3")]
    pub total_points: u32,
    #[prost(message, optional, tag="5")]
    pub referral: ::core::option::Option<Referral>,
    #[prost(message, optional, tag="6")]
    pub staking: ::core::option::Option<Staking>,
    #[prost(message, optional, tag="7")]
    pub activity: ::core::option::Option<Activity>,
    #[prost(message, optional, tag="8")]
    pub bonus: ::core::option::Option<Bonus>,
    #[prost(message, repeated, tag="9")]
    pub multipliers: ::prost::alloc::vec::Vec<Multiplier>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Referral {
    #[prost(uint32, tag="1")]
    pub referred_by_points: u32,
    #[prost(uint32, tag="2")]
    pub referred_points: u32,
    #[prost(uint32, tag="3")]
    pub points: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Staking {
    #[prost(uint32, tag="1")]
    pub points: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Activity {
    #[prost(uint32, tag="1")]
    pub points: u32,
    #[prost(uint32, tag="2")]
    pub daily_checkin: u32,
    #[prost(uint32, tag="3")]
    pub gm: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Bonus {
    /// Owner bonus
    #[prost(uint32, tag="1")]
    pub square_owner: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Multiplier {
    #[prost(enumeration="MultiplierType", tag="1")]
    pub r#type: i32,
    #[prost(float, tag="2")]
    pub percentage: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PointsHistory {
    #[prost(string, tag="1")]
    pub user_address: ::prost::alloc::string::String,
    #[prost(float, tag="2")]
    pub amount: f32,
    #[prost(enumeration="PointsType", tag="3")]
    pub points_type: i32,
    #[prost(enumeration="PointsTypeBehaviorGroup", tag="4")]
    pub points_type_behavior_group: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PointsReferralBonus {
    #[prost(message, optional, tag="1")]
    pub referred: ::core::option::Option<super::user::User>,
    #[prost(bool, tag="2")]
    pub same_collection: bool,
    #[prost(uint32, tag="3")]
    pub amount: u32,
}
/// PointsType 을 유저의 행동군에 따라 2차 그룹핑함.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PointsTypeBehaviorGroup {
    /// default value. this value is unused.
    GroupUnspecified = 0,
    Referral = 1,
    Staking = 2,
    Activity = 3,
    Bonus = 4,
}
impl PointsTypeBehaviorGroup {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PointsTypeBehaviorGroup::GroupUnspecified => "GROUP_UNSPECIFIED",
            PointsTypeBehaviorGroup::Referral => "REFERRAL",
            PointsTypeBehaviorGroup::Staking => "STAKING",
            PointsTypeBehaviorGroup::Activity => "ACTIVITY",
            PointsTypeBehaviorGroup::Bonus => "BONUS",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "GROUP_UNSPECIFIED" => Some(Self::GroupUnspecified),
            "REFERRAL" => Some(Self::Referral),
            "STAKING" => Some(Self::Staking),
            "ACTIVITY" => Some(Self::Activity),
            "BONUS" => Some(Self::Bonus),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PointsType {
    /// default value. this value is unused.
    TypeUnknown = 0,
    Welcome = 1,
    ReferralRefferedBy = 100,
    ReferralReferrerBonus = 101,
    StakingInterest = 200,
    ActivityDailyCheckin = 300,
    ActivityCommunityEventWinner = 301,
    ActivityCommunityContribution = 302,
    ActivityGm = 303,
    ActivitySquareBebobSummon = 304,
    ActivitySquareBebobAttack = 305,
    ActivityScoreUpload = 306,
    ActivityScoreLeaderboardWinner = 307,
    ActivityScoreLeaderboardRaffle = 308,
    BonusSquareOwner = 400,
    BonusSquareMember = 401,
}
impl PointsType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PointsType::TypeUnknown => "TYPE_UNKNOWN",
            PointsType::Welcome => "WELCOME",
            PointsType::ReferralRefferedBy => "REFERRAL_REFFERED_BY",
            PointsType::ReferralReferrerBonus => "REFERRAL_REFERRER_BONUS",
            PointsType::StakingInterest => "STAKING_INTEREST",
            PointsType::ActivityDailyCheckin => "ACTIVITY_DAILY_CHECKIN",
            PointsType::ActivityCommunityEventWinner => "ACTIVITY_COMMUNITY_EVENT_WINNER",
            PointsType::ActivityCommunityContribution => "ACTIVITY_COMMUNITY_CONTRIBUTION",
            PointsType::ActivityGm => "ACTIVITY_GM",
            PointsType::ActivitySquareBebobSummon => "ACTIVITY_SQUARE_BEBOB_SUMMON",
            PointsType::ActivitySquareBebobAttack => "ACTIVITY_SQUARE_BEBOB_ATTACK",
            PointsType::ActivityScoreUpload => "ACTIVITY_SCORE_UPLOAD",
            PointsType::ActivityScoreLeaderboardWinner => "ACTIVITY_SCORE_LEADERBOARD_WINNER",
            PointsType::ActivityScoreLeaderboardRaffle => "ACTIVITY_SCORE_LEADERBOARD_RAFFLE",
            PointsType::BonusSquareOwner => "BONUS_SQUARE_OWNER",
            PointsType::BonusSquareMember => "BONUS_SQUARE_MEMBER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNKNOWN" => Some(Self::TypeUnknown),
            "WELCOME" => Some(Self::Welcome),
            "REFERRAL_REFFERED_BY" => Some(Self::ReferralRefferedBy),
            "REFERRAL_REFERRER_BONUS" => Some(Self::ReferralReferrerBonus),
            "STAKING_INTEREST" => Some(Self::StakingInterest),
            "ACTIVITY_DAILY_CHECKIN" => Some(Self::ActivityDailyCheckin),
            "ACTIVITY_COMMUNITY_EVENT_WINNER" => Some(Self::ActivityCommunityEventWinner),
            "ACTIVITY_COMMUNITY_CONTRIBUTION" => Some(Self::ActivityCommunityContribution),
            "ACTIVITY_GM" => Some(Self::ActivityGm),
            "ACTIVITY_SQUARE_BEBOB_SUMMON" => Some(Self::ActivitySquareBebobSummon),
            "ACTIVITY_SQUARE_BEBOB_ATTACK" => Some(Self::ActivitySquareBebobAttack),
            "ACTIVITY_SCORE_UPLOAD" => Some(Self::ActivityScoreUpload),
            "ACTIVITY_SCORE_LEADERBOARD_WINNER" => Some(Self::ActivityScoreLeaderboardWinner),
            "ACTIVITY_SCORE_LEADERBOARD_RAFFLE" => Some(Self::ActivityScoreLeaderboardRaffle),
            "BONUS_SQUARE_OWNER" => Some(Self::BonusSquareOwner),
            "BONUS_SQUARE_MEMBER" => Some(Self::BonusSquareMember),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum MultiplierType {
    /// default value. this value is unused.
    Unspecified = 0,
    SquareOwnerBonus = 1,
    SquareMultiplier = 2,
    SquarePfpCollectionBoost = 3,
}
impl MultiplierType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            MultiplierType::Unspecified => "MULTIPLIER_TYPE_UNSPECIFIED",
            MultiplierType::SquareOwnerBonus => "SQUARE_OWNER_BONUS",
            MultiplierType::SquareMultiplier => "SQUARE_MULTIPLIER",
            MultiplierType::SquarePfpCollectionBoost => "SQUARE_PFP_COLLECTION_BOOST",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "MULTIPLIER_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "SQUARE_OWNER_BONUS" => Some(Self::SquareOwnerBonus),
            "SQUARE_MULTIPLIER" => Some(Self::SquareMultiplier),
            "SQUARE_PFP_COLLECTION_BOOST" => Some(Self::SquarePfpCollectionBoost),
            _ => None,
        }
    }
}
include!("blast.v1.points.tonic.rs");
// @@protoc_insertion_point(module)
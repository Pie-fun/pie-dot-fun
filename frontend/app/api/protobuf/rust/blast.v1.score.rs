// @generated
/// SSIndividualInvitationalEvent
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SsIndividualInvitationalEvent {
    /// The resource name of SSIndividualInvitationalEvent.
    /// Format: invitationals/SSIndividual/events/{event}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// target year month.
    /// This invitational event is held monthly.
    /// iso 8601 format. ex) 2024-02
    #[prost(string, tag="2")]
    pub year_month: ::prost::alloc::string::String,
    /// The invitational event start date.
    #[prost(message, optional, tag="3")]
    pub start_date: ::core::option::Option<::prost_types::Timestamp>,
    /// The invitational event end date.
    #[prost(message, optional, tag="4")]
    pub end_date: ::core::option::Option<::prost_types::Timestamp>,
    /// The user should write username in discord.
    #[prost(string, tag="5")]
    pub form_link: ::prost::alloc::string::String,
}
/// SSIndividualInvitational
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SsIndividualInvitational {
    /// The resource name of SSIndividualInvitational.
    /// Format: invitationals/SSIndividuals/{invitational}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// target year month.
    /// This invitational is held monthly.
    /// iso 8601 format. ex) 2024-02
    #[prost(string, tag="2")]
    pub year_month: ::prost::alloc::string::String,
    /// The invitational start date.
    #[prost(message, optional, tag="3")]
    pub start_date: ::core::option::Option<::prost_types::Timestamp>,
    /// The invitational end date.
    #[prost(message, optional, tag="4")]
    pub end_date: ::core::option::Option<::prost_types::Timestamp>,
    /// The user should write username in discord.
    #[prost(string, tag="5")]
    pub form_link: ::prost::alloc::string::String,
}
/// ListSSIndividualInvitationalEventsRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSsIndividualInvitationalEventsRequest {
    /// page size
    #[prost(int32, tag="1")]
    pub page_size: i32,
}
/// ListSSIndividualInvitationalEventsResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSsIndividualInvitationalEventsResponse {
    /// The list of SSIndividualInvitationalEvents.
    #[prost(message, repeated, tag="1")]
    pub invitational_events: ::prost::alloc::vec::Vec<SsIndividualInvitationalEvent>,
}
/// CreateSSIndividualInvitationalEventRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateSsIndividualInvitationalEventRequest {
    /// The SSIndividualInvitationalEvent to create.
    #[prost(message, optional, tag="1")]
    pub invitational_event: ::core::option::Option<SsIndividualInvitationalEvent>,
}
/// GetSSIndividualInvitationalLetterRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSsIndividualInvitationalLetterRequest {
}
/// SSIndividualInvitationalLetter
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SsIndividualInvitationalLetter {
    /// invitational
    #[prost(message, optional, tag="1")]
    pub invitational: ::core::option::Option<SsIndividualInvitational>,
}
/// InviteSSIndividualInvitationalEventRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InviteSsIndividualInvitationalEventRequest {
    /// The resource name of SSIndividualInvitationalEvent.
    /// Format: invitationals/SSIndividual/events/{event}
    #[prost(string, tag="1")]
    pub invitational_event: ::prost::alloc::string::String,
    /// The list of invitees.
    /// Format: users/{user}
    #[prost(string, repeated, tag="2")]
    pub invitees: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// letter viewable start time
    #[prost(message, optional, tag="3")]
    pub viewable_start_time: ::core::option::Option<::prost_types::Timestamp>,
    /// letter viewable end time
    #[prost(message, optional, tag="4")]
    pub viewable_end_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// InviteSSIndividualInvitationalEventResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InviteSsIndividualInvitationalEventResponse {
    /// The resource name of SSIndividualInvitationalEvent.
    /// Format: invitationals/SSIndividual/events/{event}
    #[prost(string, tag="1")]
    pub invitational_event: ::prost::alloc::string::String,
    /// The list of invitees.
    /// Format: users/{user}
    #[prost(string, repeated, tag="2")]
    pub invitees: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// letter viewable start time
    #[prost(message, optional, tag="3")]
    pub viewable_start_time: ::core::option::Option<::prost_types::Timestamp>,
    /// letter viewable end time
    #[prost(message, optional, tag="4")]
    pub viewable_end_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// RewardRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardRequest {
    /// type
    #[prost(enumeration="reward_request::RewardType", tag="1")]
    pub r#type: i32,
}
/// Nested message and enum types in `RewardRequest`.
pub mod reward_request {
    /// RewardType
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum RewardType {
        /// default value.
        Unspecified = 0,
        WeeklyAllUsersLeaderboard = 1,
        WeeklySquareMembersLeaderboard = 2,
        WeeklySsChallenge = 3,
        MonthlySsChallenge = 4,
        MonthlySquareCompetition = 5,
    }
    impl RewardType {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                RewardType::Unspecified => "REWARD_TYPE_UNSPECIFIED",
                RewardType::WeeklyAllUsersLeaderboard => "WEEKLY_ALL_USERS_LEADERBOARD",
                RewardType::WeeklySquareMembersLeaderboard => "WEEKLY_SQUARE_MEMBERS_LEADERBOARD",
                RewardType::WeeklySsChallenge => "WEEKLY_SS_CHALLENGE",
                RewardType::MonthlySsChallenge => "MONTHLY_SS_CHALLENGE",
                RewardType::MonthlySquareCompetition => "MONTHLY_SQUARE_COMPETITION",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "REWARD_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
                "WEEKLY_ALL_USERS_LEADERBOARD" => Some(Self::WeeklyAllUsersLeaderboard),
                "WEEKLY_SQUARE_MEMBERS_LEADERBOARD" => Some(Self::WeeklySquareMembersLeaderboard),
                "WEEKLY_SS_CHALLENGE" => Some(Self::WeeklySsChallenge),
                "MONTHLY_SS_CHALLENGE" => Some(Self::MonthlySsChallenge),
                "MONTHLY_SQUARE_COMPETITION" => Some(Self::MonthlySquareCompetition),
                _ => None,
            }
        }
    }
}
/// RewardResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardResponse {
    /// user rewards
    #[prost(message, repeated, tag="1")]
    pub user_rewards: ::prost::alloc::vec::Vec<reward_response::UserReward>,
}
/// Nested message and enum types in `RewardResponse`.
pub mod reward_response {
    /// user reward
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct UserReward {
        /// user address
        #[prost(string, tag="1")]
        pub user_address: ::prost::alloc::string::String,
        /// spacebar points
        #[prost(message, optional, tag="2")]
        pub points: ::core::option::Option<super::super::super::super::google::r#type::Decimal>,
        /// blast points
        #[prost(message, optional, tag="3")]
        pub blast_points: ::core::option::Option<super::super::super::super::google::r#type::Decimal>,
        /// blast gold
        #[prost(message, optional, tag="4")]
        pub blast_gold: ::core::option::Option<super::super::super::super::google::r#type::Decimal>,
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateUploadScoreAndSignRequest {
    /// The name of the score to create.
    /// Format: users/{user_address}/scores/{game_id}
    #[prost(string, tag="1")]
    pub score: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub nonce: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateUploadScoreAndSignResponse {
    #[prost(string, tag="1")]
    pub signature: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub params: ::core::option::Option<super::chain::UploadScoreParams>,
}
/// CreateScoreRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateScoreRequest {
    /// The name of the score to create.
    /// Format: users/{user_address}/scores/{game_id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// score to create
    #[prost(message, optional, tag="2")]
    pub score: ::core::option::Option<Score>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetScoreRequest {
    /// The name of the score to retrieve.
    /// Format: users/{user_address}/scores/{game_id}
    #[prost(string, tag="1")]
    pub score: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetUserBestScoreRankingRequest {
    /// The name of the score ranking to retrieve.
    /// Format: rankings/bestScores/users/{user_address}
    #[prost(string, tag="1")]
    pub user_best_score_ranking: ::prost::alloc::string::String,
    /// The user type of the ranking to retrieve.
    #[prost(enumeration="ScoreRankUserType", tag="2")]
    pub user_type: i32,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="3")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If rank type is one of ALL_MEMBERS, SQUARE_MEMBERS, the context should contain the square.
    /// * snapshot_square="squares/{square_token_id}"
    /// * snapshot_square_token_id="{square_token_id}"
    ///
    /// If rank type is ALL_USERS, the context should be empty.
    ///
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    #[prost(string, tag="4")]
    pub context: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUserBestScoreRankingsRequest {
    /// The user type of the ranking to retrieve.
    #[prost(enumeration="ScoreRankUserType", tag="1")]
    pub user_type: i32,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="2")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If rank type is one of ALL_MEMBERS, SQUARE_MEMBERS, the context should contain the square.
    /// * snapshot_square="squares/{square_token_id}"
    /// * snapshot_square_token_id="{square_token_id}"
    ///
    /// If rank type is ALL_USERS, the context should be empty.
    ///
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    #[prost(string, tag="3")]
    pub context: ::prost::alloc::string::String,
    /// The maximum number of points to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="4")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListPoints` must match
    /// the call that provided the page token.
    #[prost(string, tag="5")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUserBestScoreRankingsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub rankings: ::prost::alloc::vec::Vec<UserBestScoreRanking>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetUserCumulativeScoreRankingRequest {
    /// The name of the score ranking to retrieve.
    /// Format: rankings/cumulativeScores/users/{user_address}
    #[prost(string, tag="1")]
    pub user_cumulative_score_ranking: ::prost::alloc::string::String,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankUserType", tag="2")]
    pub user_type: i32,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="3")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If rank type is one of ALL_MEMBERS, SQUARE_MEMBERS, the context should contain the square.
    /// * snapshot_square="squares/{square_token_id}"
    /// * snapshot_square_token_id="{square_token_id}"
    ///
    /// If rank type is ALL_USERS, the context should be empty.
    ///
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    /// If time period is WEEKLY_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_week="2024-08-W1"
    /// If time period is MONTH_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_month="2024-08"
    #[prost(string, tag="4")]
    pub context: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUserCumulativeScoreRankingsRequest {
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankUserType", tag="1")]
    pub user_type: i32,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="2")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If rank type is one of ALL_MEMBERS, SQUARE_MEMBERS, the context should contain the square.
    /// * snapshot_square="squares/{square_token_id}"
    /// * snapshot_square_token_id="{square_token_id}"
    ///
    /// If rank type is ALL_USERS, the context should be empty.
    ///
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    /// If time period is WEEKLY_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_week="2024-08-W1"
    /// If time period is MONTH_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_month="2024-08"
    #[prost(string, tag="3")]
    pub context: ::prost::alloc::string::String,
    /// The maximum number of points to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="4")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListPoints` must match
    /// the call that provided the page token.
    #[prost(string, tag="5")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUserCumulativeScoreRankingsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub rankings: ::prost::alloc::vec::Vec<UserCumulativeScoreRanking>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareCumulativeScoreRankingRequest {
    /// The name of the score ranking to retrieve.
    /// Format: rankings/cumulativeScores/squares/{square_address}
    #[prost(string, tag="1")]
    pub square_cumulative_score_ranking: ::prost::alloc::string::String,
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="2")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    /// If time period is WEEKLY_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_week="2024-08-W1"
    /// If time period is MONTH_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_month="2024-08"
    #[prost(string, optional, tag="3")]
    pub context: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareCumulativeScoreRankingsRequest {
    /// The type of ranking to retrieve.
    #[prost(enumeration="ScoreRankTimePeriod", tag="1")]
    pub time_period: i32,
    /// The context needed to get the ranking according to the rank type.
    /// If time period is WEEKLY, the week can be set. If not set, the current week will be used.
    /// * week=10
    /// If time period is WEEKLY_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_week="2024-08-W1"
    /// If time period is MONTH_FULL_WEEK_BASED, the week can be set.
    /// * full_week_based_month="2024-08"
    #[prost(string, optional, tag="2")]
    pub context: ::core::option::Option<::prost::alloc::string::String>,
    /// The maximum number of points to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="3")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListPoints` must match
    /// the call that provided the page token.
    #[prost(string, tag="4")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareCumulativeScoreRankingsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub rankings: ::prost::alloc::vec::Vec<SquareCumulativeScoreRanking>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InvalidateScoreRankingsByUserRequest {
    /// The name of the score ranking to invalidate.
    /// Format: users/{user_address}
    #[prost(string, repeated, tag="1")]
    pub users: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// The context needed to decumulate the ranking according to the rank type.
    /// Context for square is always required.
    /// * snapshot_square="squares/{square_token_id}"
    /// * snapshot_square_token_id="{square_token_id}"
    /// Context for week is optional. If not set, the current week will be used.
    /// * week=10
    /// Context for full week based week is optional. If not set, the current date will be used.
    /// * full_week_based_week="2024-08-W1"
    /// Context for full week based month is optional. If not set, the current date will be used.
    /// * full_week_based_month="2024-08"
    #[prost(string, tag="2")]
    pub context: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Score {
    /// The resource name of the Score.
    /// Format: "users/{user_address}/scores/{game_id}"
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The user address of the member.
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    /// The game ID of the Score.
    #[prost(string, tag="3")]
    pub game_id: ::prost::alloc::string::String,
    /// created time of score
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(enumeration="ScoreState", tag="5")]
    pub state: i32,
    /// points got from game
    #[prost(uint32, tag="6")]
    pub points: u32,
    // spacebar points got from game
    //   uint32 point = 7;

    /// Game mode of score.
    #[prost(enumeration="GameType", tag="8")]
    pub game_type: i32,
    /// Play mode of score.
    #[prost(enumeration="PlayMode", tag="9")]
    pub play_mode: i32,
    /// week of score
    #[prost(uint32, tag="10")]
    pub week: u32,
    /// The snapshot square token ID of the Score.
    /// This field can be null if the score is not related to any square.
    #[prost(string, optional, tag="11")]
    pub snapshot_square_token_id: ::core::option::Option<::prost::alloc::string::String>,
    /// Thie field is internal use only.
    #[prost(float, optional, tag="12")]
    pub blast_gold: ::core::option::Option<f32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserBestScoreRanking {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(enumeration="ScoreRankUserType", tag="2")]
    pub user_type: i32,
    #[prost(enumeration="ScoreRankTimePeriod", tag="3")]
    pub time_period: i32,
    #[prost(message, optional, tag="4")]
    pub score: ::core::option::Option<Score>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserCumulativeScoreRanking {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(enumeration="ScoreRankUserType", tag="2")]
    pub user_type: i32,
    #[prost(enumeration="ScoreRankTimePeriod", tag="3")]
    pub time_period: i32,
    #[prost(string, tag="5")]
    pub user_address: ::prost::alloc::string::String,
    #[prost(uint64, tag="6")]
    pub total_points: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareCumulativeScoreRanking {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(enumeration="ScoreRankTimePeriod", tag="2")]
    pub time_period: i32,
    #[prost(string, tag="5")]
    pub square_token_id: ::prost::alloc::string::String,
    #[prost(uint64, tag="6")]
    pub total_points: u64,
    #[prost(uint32, tag="7")]
    pub points_count: u32,
    #[prost(uint32, tag="8")]
    pub participants_count: u32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum GameType {
    /// default value. this value is unused.
    Unspecified = 0,
    StarSweepers = 1,
}
impl GameType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            GameType::Unspecified => "GAME_TYPE_UNSPECIFIED",
            GameType::StarSweepers => "STAR_SWEEPERS",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "GAME_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "STAR_SWEEPERS" => Some(Self::StarSweepers),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PlayMode {
    /// default value. this value is unused.
    Unspecified = 0,
    ///
    SinglePlayer = 1,
}
impl PlayMode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PlayMode::Unspecified => "PLAY_MODE_UNSPECIFIED",
            PlayMode::SinglePlayer => "SINGLE_PLAYER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PLAY_MODE_UNSPECIFIED" => Some(Self::Unspecified),
            "SINGLE_PLAYER" => Some(Self::SinglePlayer),
            _ => None,
        }
    }
}
/// The state of score
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScoreState {
    /// default value. this value is unused.
    Unspecified = 0,
    Created = 1,
    /// The score is uploaded to onchain.
    Uploaded = 2,
}
impl ScoreState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScoreState::Unspecified => "SCORE_STATE_UNSPECIFIED",
            ScoreState::Created => "CREATED",
            ScoreState::Uploaded => "UPLOADED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SCORE_STATE_UNSPECIFIED" => Some(Self::Unspecified),
            "CREATED" => Some(Self::Created),
            "UPLOADED" => Some(Self::Uploaded),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScoreRankUserType {
    /// default value. this value is unused.
    Unspecified = 0,
    /// All users in the spacebar.
    /// Ranking persists regardless of the square.
    AllUsers = 1,
    /// All members in the square.
    /// Ranking persists only when the user is a member of the snapshot square.
    AllMembers = 2,
    /// Members in the specific square.
    /// Ranking persists only when the user is a member of the snapshot square.
    SquareMembers = 3,
    /// All users in the specific square.
    /// Ranking persists regardless of the square.
    SquareUsers = 4,
}
impl ScoreRankUserType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScoreRankUserType::Unspecified => "SCORE_RANK_USER_TYPE_UNSPECIFIED",
            ScoreRankUserType::AllUsers => "ALL_USERS",
            ScoreRankUserType::AllMembers => "ALL_MEMBERS",
            ScoreRankUserType::SquareMembers => "SQUARE_MEMBERS",
            ScoreRankUserType::SquareUsers => "SQUARE_USERS",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SCORE_RANK_USER_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "ALL_USERS" => Some(Self::AllUsers),
            "ALL_MEMBERS" => Some(Self::AllMembers),
            "SQUARE_MEMBERS" => Some(Self::SquareMembers),
            "SQUARE_USERS" => Some(Self::SquareUsers),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScoreRankTimePeriod {
    /// default value. this value is unused.
    Unspecified = 0,
    AllTime = 1,
    Weekly = 2,
    WeeklyFullWeekBased = 21,
    MonthlyFullWeekBased = 31,
}
impl ScoreRankTimePeriod {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScoreRankTimePeriod::Unspecified => "SCORE_RANK_TIME_PERIOD_UNSPECIFIED",
            ScoreRankTimePeriod::AllTime => "ALL_TIME",
            ScoreRankTimePeriod::Weekly => "WEEKLY",
            ScoreRankTimePeriod::WeeklyFullWeekBased => "WEEKLY_FULL_WEEK_BASED",
            ScoreRankTimePeriod::MonthlyFullWeekBased => "MONTHLY_FULL_WEEK_BASED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SCORE_RANK_TIME_PERIOD_UNSPECIFIED" => Some(Self::Unspecified),
            "ALL_TIME" => Some(Self::AllTime),
            "WEEKLY" => Some(Self::Weekly),
            "WEEKLY_FULL_WEEK_BASED" => Some(Self::WeeklyFullWeekBased),
            "MONTHLY_FULL_WEEK_BASED" => Some(Self::MonthlyFullWeekBased),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScoreRankScoreType {
    /// default value. this value is unused.
    Unspecified = 0,
    BestScore = 1,
    CumulativeScore = 2,
}
impl ScoreRankScoreType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScoreRankScoreType::Unspecified => "SCORE_RANK_SCORE_TYPE_UNSPECIFIED",
            ScoreRankScoreType::BestScore => "BEST_SCORE",
            ScoreRankScoreType::CumulativeScore => "CUMULATIVE_SCORE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SCORE_RANK_SCORE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "BEST_SCORE" => Some(Self::BestScore),
            "CUMULATIVE_SCORE" => Some(Self::CumulativeScore),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScoreRankEntitiyType {
    /// default value. this value is unused.
    ScoreRankEntityTypeUnspecified = 0,
    User = 1,
    Square = 2,
}
impl ScoreRankEntitiyType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScoreRankEntitiyType::ScoreRankEntityTypeUnspecified => "SCORE_RANK_ENTITY_TYPE_UNSPECIFIED",
            ScoreRankEntitiyType::User => "USER",
            ScoreRankEntitiyType::Square => "SQUARE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SCORE_RANK_ENTITY_TYPE_UNSPECIFIED" => Some(Self::ScoreRankEntityTypeUnspecified),
            "USER" => Some(Self::User),
            "SQUARE" => Some(Self::Square),
            _ => None,
        }
    }
}
include!("blast.v1.score.tonic.rs");
// @@protoc_insertion_point(module)
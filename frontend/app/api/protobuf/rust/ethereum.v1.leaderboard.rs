// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTopRankerLeaderboardRequest {
    /// The maximum number of scores to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 5 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `GetLeaderbaord` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="3")]
    pub week: u32,
    /// The corresponding season of leaderboard.
    /// The default value is 1
    #[prost(uint32, tag="4")]
    pub season: u32,
    /// The corresponding play_mode of leaderboard.
    /// The default value is "TIME_ATTACK"
    #[prost(enumeration="super::score::PlayMode", tag="5")]
    pub play_mode: i32,
    /// The corresponding game_mode of leaderboard.
    /// The default value is "SINGLE_PLAYER"
    #[prost(enumeration="super::score::GameMode", tag="6")]
    pub game_mode: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTopRankerLeaderboardResponse {
    #[prost(message, repeated, tag="1")]
    pub top_rankers: ::prost::alloc::vec::Vec<TopRanker>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub deadline: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTopRankerRequest {
    #[prost(string, tag="1")]
    pub profile_address: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="2")]
    pub week: u32,
    /// The corresponding play_mode of leaderboard.
    /// The default value is "TIME_ATTACK"
    #[prost(enumeration="super::score::PlayMode", tag="3")]
    pub play_mode: i32,
    /// The corresponding game_mode of leaderboard.
    /// The default value is "SINGLE_PLAYER"
    #[prost(enumeration="super::score::GameMode", tag="4")]
    pub game_mode: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RenderTopRankerLeaderboardRequest {
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="1")]
    pub week: u32,
    /// The corresponding season of leaderboard.
    /// The default value is 1
    #[prost(uint32, tag="2")]
    pub season: u32,
    /// The corresponding play_mode of leaderboard.
    /// The default value is "TIME_ATTACK"
    #[prost(enumeration="super::score::PlayMode", tag="3")]
    pub play_mode: i32,
    /// The corresponding game_mode of leaderboard.
    /// The default value is "SINGLE_PLAYER"
    #[prost(enumeration="super::score::GameMode", tag="4")]
    pub game_mode: i32,
    #[prost(string, tag="5")]
    pub me: ::prost::alloc::string::String,
}
/// GetWeeklyTopCollectorLeaderboardRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyTopCollectorLeaderboardRequest {
    /// The maximum number of scores to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 5 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListWeeklytimeTopCollectors` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="3")]
    pub week: u32,
    /// The corresponding season of leaderboard.
    /// The default value is 1
    #[prost(uint32, tag="4")]
    pub season: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyTopCollectorLeaderboardResponse {
    #[prost(message, repeated, tag="1")]
    pub top_collectors: ::prost::alloc::vec::Vec<StarHunter>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub deadline: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyTopCollectorRequest {
    #[prost(string, tag="1")]
    pub profile_address: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="2")]
    pub week: u32,
}
/// GetAllTimeTopCollectorsLeaderboardRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetAllTimeTopCollectorLeaderboardRequest {
    /// The maximum number of scores to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 5 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `GetAllTimeTopCollectorLeaderboard` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetAllTimeTopCollectorLeaderboardResponse {
    #[prost(message, repeated, tag="1")]
    pub top_collectors: ::prost::alloc::vec::Vec<StarHunter>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RenderWeeklyStarHunterLeaderboardRequest {
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="1")]
    pub week: u32,
    /// The corresponding season of leaderboard.
    /// The default value is 1
    #[prost(uint32, tag="2")]
    pub season: u32,
    #[prost(string, tag="3")]
    pub me: ::prost::alloc::string::String,
}
/// GetWeeklyStarHunterLeaderboardRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyStarHunterLeaderboardRequest {
    /// The maximum number of scores to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 5 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListWeeklytimeTopCollectors` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="3")]
    pub week: u32,
    /// The corresponding season of leaderboard.
    /// The default value is 1
    #[prost(uint32, tag="4")]
    pub season: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyStarHunterLeaderboardResponse {
    #[prost(message, repeated, tag="1")]
    pub star_hunters: ::prost::alloc::vec::Vec<StarHunter>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub deadline: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWeeklyStarHunterRequest {
    #[prost(string, tag="1")]
    pub profile_address: ::prost::alloc::string::String,
    /// The corresponding week of leaderboard.
    /// If unspecified, the current week will be used.
    #[prost(uint32, tag="2")]
    pub week: u32,
}
/// GetAllTimeStarHuntersLeaderboardRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetAllTimeStarHunterLeaderboardRequest {
    /// The maximum number of scores to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 5 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `GetAllTimeStarHunterLeaderboard` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetAllTimeStarHunterLeaderboardResponse {
    #[prost(message, repeated, tag="1")]
    pub star_hunters: ::prost::alloc::vec::Vec<StarHunter>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ImageResponse {
    #[prost(bytes="vec", tag="1")]
    pub image: ::prost::alloc::vec::Vec<u8>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TopRanker {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(message, optional, tag="2")]
    pub profile: ::core::option::Option<super::profile::Profile>,
    #[prost(message, optional, tag="3")]
    pub score: ::core::option::Option<super::score::Score>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StarHunter {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(message, optional, tag="2")]
    pub profile: ::core::option::Option<super::profile::Profile>,
    #[prost(uint32, tag="3")]
    pub total_stars: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RenderStarHuntersLeaderboardImageRequest {
    #[prost(message, repeated, tag="1")]
    pub star_hunters: ::prost::alloc::vec::Vec<StarHunterSlim>,
    #[prost(message, optional, tag="2")]
    pub me: ::core::option::Option<StarHunterSlim>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RenderTopRankerLeaderboardImageRequest {
    #[prost(message, repeated, tag="1")]
    pub top_rankers: ::prost::alloc::vec::Vec<TopRankerSlim>,
    #[prost(message, optional, tag="2")]
    pub me: ::core::option::Option<TopRankerSlim>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StarHunterSlim {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(string, tag="2")]
    pub profile: ::prost::alloc::string::String,
    #[prost(uint32, tag="3")]
    pub total_stars: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TopRankerSlim {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(string, tag="2")]
    pub profile: ::prost::alloc::string::String,
    #[prost(uint32, tag="3")]
    pub score_point: u32,
}
include!("ethereum.v1.leaderboard.tonic.rs");
// @@protoc_insertion_point(module)
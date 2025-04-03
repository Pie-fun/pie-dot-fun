// @generated
/// CreateScoreRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateScoreRequest {
    /// score to create
    #[prost(message, optional, tag="1")]
    pub score: ::core::option::Option<Score>,
}
/// ListScoresRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListScoresRequest {
    /// The maximum number of scores to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListScores` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * point
    ///    * `>`, `>=`, `=`, `<=`, `<`
    /// * week
    ///    * `>`, `>=`, `=`, `<=`, `<`
    /// * minted
    ///    * `negation`
    /// * play_mode
    ///    * equal`
    /// * game_mode
    ///    * equal`
    ///
    /// Examples
    /// * filter=week=10
    /// * filter=point>300
    /// * filter=minted
    /// * filter=game_mode="SINGLE_PLAYER"
    /// * filter=play_mode="TIME_ATTACK"
    /// * filter=week=10 AND minted AND play_mode="TIME_ATTACK"
    /// * filter=week>10 AND week<20 AND minted AND play_mode="TIME_ATTACK"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// Optional. One or more fields to compare and use to sort the output.
    /// Default order for a field is descending by create_time
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Examples
    /// * order_by="point desc,create_time asc"
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListScoresResponse response
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListScoresResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub scores: ::prost::alloc::vec::Vec<Score>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetScoreRequest {
    /// The name of the score to retrieve.
    /// Format: scores/{score_uuid}
    #[prost(string, tag="1")]
    pub score: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Score {
    /// The resource name of the Score.
    /// Format: scores/{uuid}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The resource name of the owner Profile.
    /// Format: profiles/{address}
    #[prost(string, tag="2")]
    pub profile: ::prost::alloc::string::String,
    /// created time of score
    #[prost(message, optional, tag="3")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// point of score
    #[prost(uint32, tag="4")]
    pub point: u32,
    /// Game mode of score.
    #[prost(enumeration="GameMode", tag="5")]
    pub game_mode: i32,
    /// Play mode of score.
    #[prost(enumeration="PlayMode", tag="6")]
    pub play_mode: i32,
    /// week of score
    #[prost(uint32, tag="7")]
    pub week: u32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum GameMode {
    /// default value. this value is unused.
    Unspecified = 0,
    /// time_attack
    TimeAttack = 1,
}
impl GameMode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            GameMode::Unspecified => "GAME_MODE_UNSPECIFIED",
            GameMode::TimeAttack => "TIME_ATTACK",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "GAME_MODE_UNSPECIFIED" => Some(Self::Unspecified),
            "TIME_ATTACK" => Some(Self::TimeAttack),
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
include!("ethereum.v1.score.tonic.rs");
// @@protoc_insertion_point(module)
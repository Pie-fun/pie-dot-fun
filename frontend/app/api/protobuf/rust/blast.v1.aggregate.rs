// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsAggregateRequest {
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
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPointsAggregateResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub points_aggregate: ::prost::alloc::vec::Vec<PointsAggregate>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PointsAggregate {
    /// The resource name of the Points.
    /// Format: users/{address}/points
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    ///
    #[prost(message, optional, tag="2")]
    pub user: ::core::option::Option<super::user::User>,
    ///
    #[prost(uint32, tag="3")]
    pub total_points: u32,
    #[prost(message, optional, tag="5")]
    pub referral: ::core::option::Option<super::points::Referral>,
    #[prost(message, optional, tag="6")]
    pub staking: ::core::option::Option<super::points::Staking>,
    #[prost(message, optional, tag="7")]
    pub activity: ::core::option::Option<super::points::Activity>,
    #[prost(message, optional, tag="8")]
    pub bonus: ::core::option::Option<super::points::Bonus>,
    #[prost(message, repeated, tag="9")]
    pub multipliers: ::prost::alloc::vec::Vec<super::points::Multiplier>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareMemberRankingsAggregateRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    #[prost(enumeration="super::square::SquareMemberRankType", tag="2")]
    pub rank_type: i32,
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
pub struct ListSquareMemberRankingsAggregateResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub rankings_aggregate: ::prost::alloc::vec::Vec<SquareMemberRankingAggregate>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareMemberRankingAggregate {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(uint32, tag="2")]
    pub points: u32,
    #[prost(message, optional, tag="3")]
    pub member: ::core::option::Option<SquareMemberAggregate>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareMemberAggregate {
    /// The resource name of the Square.
    /// Format: squares/{square_token_id}/members/{user_address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The token ID of the Square.
    #[prost(string, tag="2")]
    pub square_token_id: ::prost::alloc::string::String,
    /// The user address of the member.
    #[prost(message, optional, tag="3")]
    pub user: ::core::option::Option<super::user::User>,
    /// The member type of the square.
    #[prost(enumeration="super::square::SquareMemberType", tag="4")]
    pub r#type: i32,
    #[prost(uint32, tag="5")]
    pub total_points: u32,
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="8")]
    pub join_time: ::core::option::Option<::prost_types::Timestamp>,
}
///
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareAggregateRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The view of the square.
    #[prost(enumeration="super::square::SquareView", tag="2")]
    pub view: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareAggregate {
    /// The resource name of the Square.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// ERC721 token ID of the Square.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    ///
    #[prost(message, optional, tag="3")]
    pub owner: ::core::option::Option<super::user::User>,
    /// The created time of Square.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(enumeration="super::square::SquareState", tag="5")]
    pub state: i32,
    /// The signature id of the Square.
    /// This field is used for multi signature when minting the Square NFT.
    #[prost(string, tag="6")]
    pub signature_id: ::prost::alloc::string::String,
    /// The join type of the square.
    #[prost(enumeration="super::square::SquareJoinType", tag="7")]
    pub join_type: i32,
    /// The display name of the square.
    #[prost(string, tag="11")]
    pub display_name: ::prost::alloc::string::String,
    /// The introduction of the square.
    #[prost(string, tag="12")]
    pub introduction: ::prost::alloc::string::String,
    /// The minimum required staking amount to join the square in ETH.
    #[prost(float, tag="13")]
    pub minimum_staking_amount_to_join_in_eth: f32,
    /// The total staking amount of all members in the square in ETH.
    #[prost(float, tag="14")]
    pub total_members_staking_amount_in_eth: f32,
    /// The multiplier of the square.
    #[prost(float, tag="15")]
    pub multiplier: f32,
    /// The all-time total points of the square.
    #[prost(uint32, tag="16")]
    pub total_points: u32,
    /// The total capacity of the square.
    #[prost(uint32, tag="17")]
    pub capacity: u32,
    /// The current number of members in the square.
    #[prost(uint32, tag="18")]
    pub occupancy: u32,
    /// The occupancy of the square including join pending members.
    #[prost(uint32, tag="19")]
    pub occupancy_including_pending: u32,
    /// The PFP boost of the square.
    #[prost(message, optional, tag="20")]
    pub pfp_boost: ::core::option::Option<super::square::PfpBoost>,
    /// The NFT of the square.
    #[prost(message, optional, tag="21")]
    pub nft: ::core::option::Option<super::square::SquareNft>,
    ///
    #[prost(uint32, tag="22")]
    pub spirits: u32,
    ///
    #[prost(uint32, tag="23")]
    pub stars: u32,
    #[prost(uint32, tag="24")]
    pub total_spirits: u32,
    #[prost(uint32, tag="25")]
    pub weekly_spirits: u32,
    #[prost(oneof="square_aggregate::Join", tags="8, 9, 10")]
    pub join: ::core::option::Option<square_aggregate::Join>,
}
/// Nested message and enum types in `SquareAggregate`.
pub mod square_aggregate {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Join {
        #[prost(message, tag="8")]
        Public(super::super::square::Public),
        #[prost(message, tag="9")]
        Private(super::super::square::Private),
        #[prost(message, tag="10")]
        TokenGated(super::super::square::TokenGated),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquaresAggregateRequest {
    /// The maximum number of squares to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListSquares` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    /// * token_id
    ///    * `=`
    /// * signature_id
    ///    * `=`
    /// * state
    ///    * `=`
    /// * join_type
    ///    * `=`
    /// * display_name
    ///    * `=`
    ///
    /// Examples
    /// * name="squares/10"
    /// * token_id="10"
    /// * signature_id="3ed92b99-00be-4417-b69f-dca2d8d14c7f"
    /// * join_type=TOKEN_GATED
    /// * display_name="SQUARE"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// Optional. One or more fields to compare and use to sort the output.
    /// Default order for a field is descending by id
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * "token_id", "total_points", "spirits"
    ///
    /// Examples
    /// * order_by=token_id asc
    /// * order_by=total_points desc
    /// * order_by=spirits asc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListSquaresAggregateResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquaresAggregateResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub squares_aggregate: ::prost::alloc::vec::Vec<SquareAggregate>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
include!("blast.v1.aggregate.tonic.rs");
// @@protoc_insertion_point(module)
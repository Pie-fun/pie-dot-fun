// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// Optional. The view to return.
    /// Defaults to SQUARE_VIEW_NOT_MEMBER if not set.
    /// If set to SQUARE_VIEW_OWNER or SQUARE_VIEW_MEMBER, but the user does not have permission to do so, the API will return a PERMISSION_DENIED error.
    ///
    /// SquareView enumeration represents the view of a square.
    /// The view controls the amount of information returned.
    ///
    /// Reference
    /// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
    /// <https://google.aip.dev/157>
    #[prost(enumeration="SquareView", tag="2")]
    pub view: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquaresRequest {
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
    /// * occupied
    ///    * `negation`
    ///
    /// Examples
    /// * name="squares/10"
    /// * token_id="10"
    /// * signature_id="3ed92b99-00be-4417-b69f-dca2d8d14c7f"
    /// * join_type=TOKEN_GATED
    /// * display_name="SQUARE"
    /// * join_type=TOKEN_GATED AND not occupied
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
    /// * order_by=spirits desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListSquaresResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquaresResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub squares: ::prost::alloc::vec::Vec<Square>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateDisplayNameAvailabilityRequest {
    /// The display_name of Square.
    #[prost(string, tag="1")]
    pub display_name: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateDisplayNameAvailabilityResponse {
    /// The display_name of Square.
    #[prost(string, tag="1")]
    pub display_name: ::prost::alloc::string::String,
    /// The availability of the nickname.
    #[prost(bool, tag="2")]
    pub available: bool,
    /// The reason of the display_name is not available.
    /// Example:
    /// - display name already exists
    /// - display name should more or equal than 4
    /// - display name should less or equal than 10
    /// - display name contains non uppercase character
    #[prost(string, optional, tag="3")]
    pub reason: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateSquareAndSignRequest {
    #[prost(string, tag="1")]
    pub nonce: ::prost::alloc::string::String,
    /// square to create
    #[prost(message, optional, tag="2")]
    pub square: ::core::option::Option<Square>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateSquareAndSignResponse {
    /// square to create
    #[prost(message, optional, tag="1")]
    pub square: ::core::option::Option<Square>,
    /// signature to sign the onchain tx
    #[prost(string, tag="2")]
    pub signature: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub params: ::core::option::Option<super::chain::MintAndCreateSquareParams>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersSquaresRequest {
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersSquaresResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub squares: ::prost::alloc::vec::Vec<Square>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateSquareRequest {
    /// Square to update
    /// Format: squares/{token_id}
    #[prost(message, optional, tag="1")]
    pub square: ::core::option::Option<Square>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    ///
    /// Supported Fields
    /// * "display_name", "description", "join"
    ///
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["display_name"\]
    /// ["display_name", "description"]
    /// \["join"\]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareWeeklySpiritsRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The week number to retrieve.
    /// If unspecified, the current week will be returned.
    #[prost(uint32, optional, tag="2")]
    pub week: ::core::option::Option<u32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareWeeklySpiritsResponse {
    #[prost(uint32, tag="1")]
    pub weekly_spirits: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CheckMintEligibilityRequest {
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CheckMintEligibilityResponse {
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
    /// Whether the user is eligible to mint the Square NFT
    #[prost(enumeration="MintEligibility", tag="2")]
    pub eligibility: i32,
    /// Whether the user is currently available to mint the Square NFT
    /// If the user is not available, the reason code will be set.
    /// If the user is available, the reason code will be empty.
    /// Can be unavailable though the eligibility is ELIGIBLE_ROUND1 or ELIGIBLE_ROUND2 if it is not appropriate round time.
    #[prost(bool, tag="3")]
    pub available: bool,
    /// The reason code of the user is not eligible to mint the Square NFT.
    #[prost(enumeration="RejectMintCode", optional, tag="4")]
    pub reject_code: ::core::option::Option<i32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ApproveJoinSquareAndSignRequest {
    /// The resource name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The resource name of the user to join.
    /// Format: users/{address}
    #[prost(string, tag="2")]
    pub user: ::prost::alloc::string::String,
    /// The private code of the square.
    /// This field is required if the square is private.
    /// Otherwise, this field should be empty.
    #[prost(string, optional, tag="3")]
    pub private_code: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, tag="4")]
    pub nonce: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ApproveJoinSquareAndSignResponse {
    #[prost(bool, tag="1")]
    pub approved: bool,
    #[prost(string, tag="2")]
    pub signature: ::prost::alloc::string::String,
    #[prost(enumeration="RejectJoinSquareCode", optional, tag="3")]
    pub reject_code: ::core::option::Option<i32>,
    #[prost(message, optional, tag="4")]
    pub params: ::core::option::Option<super::chain::JoinSquareParams>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ApproveTransferSquareAndSignRequest {
    /// The resource name of the square to transfer.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The resource name of the user to transfer.
    /// Format: users/{address}
    #[prost(string, tag="2")]
    pub user: ::prost::alloc::string::String,
    /// The private code of the square.
    /// This field is required if the square is private.
    /// Otherwise, this field should be empty.
    #[prost(string, optional, tag="3")]
    pub private_code: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, tag="4")]
    pub nonce: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ApproveTransferSquareAndSignResponse {
    #[prost(bool, tag="1")]
    pub approved: bool,
    #[prost(string, tag="2")]
    pub signature: ::prost::alloc::string::String,
    #[prost(enumeration="RejectTransferSquareCode", optional, tag="3")]
    pub reject_code: ::core::option::Option<i32>,
    #[prost(message, optional, tag="4")]
    pub params: ::core::option::Option<super::chain::TransferSquareParams>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareWeeklyPointsRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The week number to retrieve.
    /// If unspecified, the current week will be returned.
    #[prost(uint32, tag="2")]
    pub week: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSquareWeeklyPointsResponse {
    /// The weekly points of the square.
    #[prost(uint32, tag="1")]
    pub weekly_points: u32,
    /// The week number of the points.
    #[prost(uint32, tag="2")]
    pub week: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareSpiritHistoriesRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The maximum number of spirits to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="2")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListSquareSpiritHistories` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareSpiritHistoriesResposne {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub histories: ::prost::alloc::vec::Vec<SquareSpiritHistory>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content
    /// of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareMembersRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    /// The maximum number of squares to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="2")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListSquareMembers` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * user
    ///    * `=`
    /// * member
    ///    * `=`
    /// * member_address
    ///    * `=`
    /// * join_time
    ///    * `>`, `<`, `>=`, `<=`
    /// * show_left
    ///    * `NOT`
    ///
    /// Examples
    /// * member_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * join_time>"2024-04-10T11:30:00Z"
    /// * show_left
    #[prost(string, tag="4")]
    pub filter: ::prost::alloc::string::String,
    /// Optional. One or more fields to compare and use to sort the output.
    /// Default order for a field is descending by id
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * "total_points", "join_time"
    ///
    /// Examples
    /// * order_by=join_time asc
    /// * order_by=total_points desc, join_time asc
    #[prost(string, tag="5")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListSquareMembersResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareMembersResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub members: ::prost::alloc::vec::Vec<SquareMember>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSquareMemberRankingsRequest {
    /// The name of the square to retrieve.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub square: ::prost::alloc::string::String,
    #[prost(enumeration="SquareMemberRankType", tag="2")]
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
pub struct ListSquareMemberRankingsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub rankings: ::prost::alloc::vec::Vec<SquareMemberRanking>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Square {
    /// The resource name of the Square.
    /// Format: squares/{token_id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// ERC721 token ID of the Square.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="3")]
    pub owner_address: ::prost::alloc::string::String,
    /// The created time of Square.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(enumeration="SquareState", tag="5")]
    pub state: i32,
    /// The signature id of the Square.
    /// This field is used for multi signature when minting the Square NFT.
    #[prost(string, tag="6")]
    pub signature_id: ::prost::alloc::string::String,
    /// The join type of the square.
    #[prost(enumeration="SquareJoinType", tag="7")]
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
    pub pfp_boost: ::core::option::Option<PfpBoost>,
    /// The NFT of the square.
    #[prost(message, optional, tag="21")]
    pub nft: ::core::option::Option<SquareNft>,
    #[prost(uint32, tag="22")]
    pub spirits: u32,
    ///
    #[prost(uint32, tag="23")]
    pub stars: u32,
    /// DEPRECATED: Use spirits instead.
    #[prost(uint32, tag="24")]
    pub total_spirits: u32,
    /// DEPRECATED: Use GetSquareWeeklySpirits API instead.
    #[prost(uint32, tag="25")]
    pub weekly_spirits: u32,
    #[prost(oneof="square::Join", tags="8, 9, 10")]
    pub join: ::core::option::Option<square::Join>,
}
/// Nested message and enum types in `Square`.
pub mod square {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Join {
        #[prost(message, tag="8")]
        Public(super::Public),
        #[prost(message, tag="9")]
        Private(super::Private),
        #[prost(message, tag="10")]
        TokenGated(super::TokenGated),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PfpBoost {
    #[prost(float, tag="1")]
    pub percentage: f32,
    #[prost(uint32, tag="2")]
    pub member_count: u32,
    /// The resource name of the NFT contract.
    /// Format: nfts/{chain_type}/{contract_address}
    #[prost(string, tag="3")]
    pub nft_contract: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Public {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Private {
    #[prost(string, tag="1")]
    pub code: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TokenGated {
    /// The resource name of the NFT contract.
    /// Format: nfts/{chain_type}/{contract_address}
    #[prost(string, tag="1")]
    pub nft_contract: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareNft {
    /// Token ID of the NFT asset.
    #[prost(uint32, tag="1")]
    pub token_id: u32,
    /// The URI of the NFT asset's image.
    /// This URI is cached version of image original URI
    /// e.g. "<https://cdn.spacebar.xyz/nfts/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/609">
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The URI of the NFT asset's metadata.
    #[prost(string, tag="3")]
    pub metadata_uri: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareMember {
    /// The resource name of the Square.
    /// Format: squares/{square_token_id}/members/{user_address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The token ID of the Square.
    #[prost(string, tag="2")]
    pub square_token_id: ::prost::alloc::string::String,
    /// The user address of the member.
    #[prost(string, tag="3")]
    pub user_address: ::prost::alloc::string::String,
    /// The member type of the square.
    #[prost(enumeration="SquareMemberType", tag="4")]
    pub r#type: i32,
    #[prost(uint32, tag="5")]
    pub total_points: u32,
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="8")]
    pub join_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareMemberRanking {
    #[prost(uint32, tag="1")]
    pub rank: u32,
    #[prost(uint32, tag="2")]
    pub points: u32,
    #[prost(message, optional, tag="3")]
    pub member: ::core::option::Option<SquareMember>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SquareSpiritHistory {
    /// The name of the Square
    /// Format: squares/{token_id}
    #[prost(string, tag="2")]
    pub square: ::prost::alloc::string::String,
    /// The spirit type of the square.
    #[prost(enumeration="SpiritType", tag="3")]
    pub r#type: i32,
    /// The user address of the member.
    #[prost(uint32, tag="4")]
    pub amount: u32,
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// SquareView enumeration represents the view of a square.
/// The view controls the amount of information returned.
///
/// Reference
/// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
/// <https://google.aip.dev/157>
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SquareView {
    /// The default / unset value.
    /// The API will default to the SQUARE_VIEW_NOT_MEMBER view.
    Unspecified = 0,
    /// Include everything.
    Owner = 1,
    /// Include only fields that are safe to be exposed to members
    /// Do not include `private``
    Member = 2,
    /// Include only fields that are safe to be exposed to non-members
    /// Do not include `private`
    /// This is the default value for GetSquare.
    NotMember = 3,
}
impl SquareView {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SquareView::Unspecified => "SQUARE_VIEW_UNSPECIFIED",
            SquareView::Owner => "SQUARE_VIEW_OWNER",
            SquareView::Member => "SQUARE_VIEW_MEMBER",
            SquareView::NotMember => "SQUARE_VIEW_NOT_MEMBER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SQUARE_VIEW_UNSPECIFIED" => Some(Self::Unspecified),
            "SQUARE_VIEW_OWNER" => Some(Self::Owner),
            "SQUARE_VIEW_MEMBER" => Some(Self::Member),
            "SQUARE_VIEW_NOT_MEMBER" => Some(Self::NotMember),
            _ => None,
        }
    }
}
/// The state of square
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SquareState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    /// The square is created at server side and pending for onchain tx is finalized
    CreatedPending = 1,
    /// The square is owned by Spacebar user.
    Owned = 2,
    /// The owner of the square is not a Spacebar user.
    Unowned = 3,
}
impl SquareState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SquareState::StateUnspecified => "STATE_UNSPECIFIED",
            SquareState::CreatedPending => "CREATED_PENDING",
            SquareState::Owned => "OWNED",
            SquareState::Unowned => "UNOWNED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "CREATED_PENDING" => Some(Self::CreatedPending),
            "OWNED" => Some(Self::Owned),
            "UNOWNED" => Some(Self::Unowned),
            _ => None,
        }
    }
}
/// The join type of square
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SquareJoinType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    /// Anyone can join the square.
    Public = 1,
    /// Only user with the code can join the square.
    Private = 2,
    /// Only user with the specific token can join the square.
    TokenGated = 3,
}
impl SquareJoinType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SquareJoinType::TypeUnspecified => "TYPE_UNSPECIFIED",
            SquareJoinType::Public => "PUBLIC",
            SquareJoinType::Private => "PRIVATE",
            SquareJoinType::TokenGated => "TOKEN_GATED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "PUBLIC" => Some(Self::Public),
            "PRIVATE" => Some(Self::Private),
            "TOKEN_GATED" => Some(Self::TokenGated),
            _ => None,
        }
    }
}
/// The member type of square
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SquareMemberType {
    /// default value. this value is unused.
    Unspecified = 0,
    Owner = 1,
    Member = 2,
}
impl SquareMemberType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SquareMemberType::Unspecified => "SQUARE_MEMBER_TYPE_UNSPECIFIED",
            SquareMemberType::Owner => "OWNER",
            SquareMemberType::Member => "MEMBER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SQUARE_MEMBER_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "OWNER" => Some(Self::Owner),
            "MEMBER" => Some(Self::Member),
            _ => None,
        }
    }
}
// enum SquareMemberState {
//   // default value. this value is unused.
//   SQUARE_MEMBER_STATE_UNSPECIFIED = 0;
//
//   // The member is pending to join the square.
//   // JoinSquare signature is not finalized to blockchain.
//   JOINED_PENDING = 1;
//
//   // The member has joined the square.
//   JOINED = 2;
//
//   // The member has left the square.
//   LEAVED = 3;
//
//   // The member is kicked out from the square.
//   KICKED_OUT = 4;
// }

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SquareMemberRankType {
    Unspecified = 0,
    AllTime = 1,
    Weekly = 2,
}
impl SquareMemberRankType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SquareMemberRankType::Unspecified => "SQUARE_MEMBER_RANK_TYPE_UNSPECIFIED",
            SquareMemberRankType::AllTime => "ALL_TIME",
            SquareMemberRankType::Weekly => "WEEKLY",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SQUARE_MEMBER_RANK_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "ALL_TIME" => Some(Self::AllTime),
            "WEEKLY" => Some(Self::Weekly),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RejectMintCode {
    Unspecified = 0,
    /// The user is not whitelisted to mint the Square NFT.
    NoEligibility = 1,
    /// The Square NFT is already minted.
    RoundTimeNotMatch = 2,
    /// The Square NFT is already minted.
    AlreadyMinted = 3,
}
impl RejectMintCode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RejectMintCode::Unspecified => "REJECT_MINT_CODE_UNSPECIFIED",
            RejectMintCode::NoEligibility => "NO_ELIGIBILITY",
            RejectMintCode::RoundTimeNotMatch => "ROUND_TIME_NOT_MATCH",
            RejectMintCode::AlreadyMinted => "ALREADY_MINTED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "REJECT_MINT_CODE_UNSPECIFIED" => Some(Self::Unspecified),
            "NO_ELIGIBILITY" => Some(Self::NoEligibility),
            "ROUND_TIME_NOT_MATCH" => Some(Self::RoundTimeNotMatch),
            "ALREADY_MINTED" => Some(Self::AlreadyMinted),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RejectJoinSquareCode {
    RejectJoinCodeUnspecified = 0,
    /// The square is fully occupied.
    RejectJoinFullyOccupied = 1,
    /// The user's staking amount is below the minimum required amount to join the square.
    RejectJoinNotEnoughStakingAmount = 2,
    /// The private code is incorrect.
    RejectJoinIncorrectPrivateCode = 3,
    /// The user is not a token holder of the token gated square.
    RejectJoinNotTokenHolder = 4,
    /// The user is already memeber of the square.
    RejectJoinAlreadyJoined = 5,
}
impl RejectJoinSquareCode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RejectJoinSquareCode::RejectJoinCodeUnspecified => "REJECT_JOIN_CODE_UNSPECIFIED",
            RejectJoinSquareCode::RejectJoinFullyOccupied => "REJECT_JOIN_FULLY_OCCUPIED",
            RejectJoinSquareCode::RejectJoinNotEnoughStakingAmount => "REJECT_JOIN_NOT_ENOUGH_STAKING_AMOUNT",
            RejectJoinSquareCode::RejectJoinIncorrectPrivateCode => "REJECT_JOIN_INCORRECT_PRIVATE_CODE",
            RejectJoinSquareCode::RejectJoinNotTokenHolder => "REJECT_JOIN_NOT_TOKEN_HOLDER",
            RejectJoinSquareCode::RejectJoinAlreadyJoined => "REJECT_JOIN_ALREADY_JOINED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "REJECT_JOIN_CODE_UNSPECIFIED" => Some(Self::RejectJoinCodeUnspecified),
            "REJECT_JOIN_FULLY_OCCUPIED" => Some(Self::RejectJoinFullyOccupied),
            "REJECT_JOIN_NOT_ENOUGH_STAKING_AMOUNT" => Some(Self::RejectJoinNotEnoughStakingAmount),
            "REJECT_JOIN_INCORRECT_PRIVATE_CODE" => Some(Self::RejectJoinIncorrectPrivateCode),
            "REJECT_JOIN_NOT_TOKEN_HOLDER" => Some(Self::RejectJoinNotTokenHolder),
            "REJECT_JOIN_ALREADY_JOINED" => Some(Self::RejectJoinAlreadyJoined),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RejectTransferSquareCode {
    RejectTransferCodeUnspecified = 0,
    /// The square is fully occupied.
    RejectTransferFullyOccupied = 1,
    /// The user's staking amount is below the minimum required amount to join the square.
    RejectTransferNotEnoughStakingAmount = 2,
    /// The private code is incorrect.
    RejectTransferIncorrectPrivateCode = 3,
    /// The user is not a token holder of the token gated square.
    RejectTransferNotTokenHolder = 4,
    /// The user is not member of any square.
    RejectTransferNotSquareMember = 5,
    /// The user transfer or join the square within the cooldown time.
    RejectTransferNotAfterCooldownTime = 6,
}
impl RejectTransferSquareCode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RejectTransferSquareCode::RejectTransferCodeUnspecified => "REJECT_TRANSFER_CODE_UNSPECIFIED",
            RejectTransferSquareCode::RejectTransferFullyOccupied => "REJECT_TRANSFER_FULLY_OCCUPIED",
            RejectTransferSquareCode::RejectTransferNotEnoughStakingAmount => "REJECT_TRANSFER_NOT_ENOUGH_STAKING_AMOUNT",
            RejectTransferSquareCode::RejectTransferIncorrectPrivateCode => "REJECT_TRANSFER_INCORRECT_PRIVATE_CODE",
            RejectTransferSquareCode::RejectTransferNotTokenHolder => "REJECT_TRANSFER_NOT_TOKEN_HOLDER",
            RejectTransferSquareCode::RejectTransferNotSquareMember => "REJECT_TRANSFER_NOT_SQUARE_MEMBER",
            RejectTransferSquareCode::RejectTransferNotAfterCooldownTime => "REJECT_TRANSFER_NOT_AFTER_COOLDOWN_TIME",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "REJECT_TRANSFER_CODE_UNSPECIFIED" => Some(Self::RejectTransferCodeUnspecified),
            "REJECT_TRANSFER_FULLY_OCCUPIED" => Some(Self::RejectTransferFullyOccupied),
            "REJECT_TRANSFER_NOT_ENOUGH_STAKING_AMOUNT" => Some(Self::RejectTransferNotEnoughStakingAmount),
            "REJECT_TRANSFER_INCORRECT_PRIVATE_CODE" => Some(Self::RejectTransferIncorrectPrivateCode),
            "REJECT_TRANSFER_NOT_TOKEN_HOLDER" => Some(Self::RejectTransferNotTokenHolder),
            "REJECT_TRANSFER_NOT_SQUARE_MEMBER" => Some(Self::RejectTransferNotSquareMember),
            "REJECT_TRANSFER_NOT_AFTER_COOLDOWN_TIME" => Some(Self::RejectTransferNotAfterCooldownTime),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum MintEligibility {
    Unspecified = 0,
    /// The user is not eligible to mint the Square NFT.
    NotEligible = 1,
    /// The user is eligible to mint the Square NFT in round 1.
    EligibleRound1 = 2,
    /// The user is eligible to mint the Square NFT in round 2.
    EligibleRound2 = 3,
    /// The user is eligible to mint the Square NFT in round 1 and round 2.
    EligibleRound1AndRound2 = 4,
}
impl MintEligibility {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            MintEligibility::Unspecified => "MINT_ELIGIBILITY_UNSPECIFIED",
            MintEligibility::NotEligible => "NOT_ELIGIBLE",
            MintEligibility::EligibleRound1 => "ELIGIBLE_ROUND1",
            MintEligibility::EligibleRound2 => "ELIGIBLE_ROUND2",
            MintEligibility::EligibleRound1AndRound2 => "ELIGIBLE_ROUND1_AND_ROUND2",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "MINT_ELIGIBILITY_UNSPECIFIED" => Some(Self::Unspecified),
            "NOT_ELIGIBLE" => Some(Self::NotEligible),
            "ELIGIBLE_ROUND1" => Some(Self::EligibleRound1),
            "ELIGIBLE_ROUND2" => Some(Self::EligibleRound2),
            "ELIGIBLE_ROUND1_AND_ROUND2" => Some(Self::EligibleRound1AndRound2),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TransferMemberType {
    Unspecified = 0,
    Default = 1,
    KickedOut = 2,
    ToOwner = 3,
}
impl TransferMemberType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            TransferMemberType::Unspecified => "TRANSFER_MEMBER_TYPE_UNSPECIFIED",
            TransferMemberType::Default => "DEFAULT",
            TransferMemberType::KickedOut => "KICKED_OUT",
            TransferMemberType::ToOwner => "TO_OWNER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TRANSFER_MEMBER_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "DEFAULT" => Some(Self::Default),
            "KICKED_OUT" => Some(Self::KickedOut),
            "TO_OWNER" => Some(Self::ToOwner),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SpiritType {
    SquareSpiritTypeUnspecified = 0,
    Voting = 1,
    SummonBebobSuccess = 2,
    AttackBebobSuccess = 3,
    CollectStars = 4,
    CommunityEvent = 5,
}
impl SpiritType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SpiritType::SquareSpiritTypeUnspecified => "SQUARE_SPIRIT_TYPE_UNSPECIFIED",
            SpiritType::Voting => "VOTING",
            SpiritType::SummonBebobSuccess => "SUMMON_BEBOB_SUCCESS",
            SpiritType::AttackBebobSuccess => "ATTACK_BEBOB_SUCCESS",
            SpiritType::CollectStars => "COLLECT_STARS",
            SpiritType::CommunityEvent => "COMMUNITY_EVENT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SQUARE_SPIRIT_TYPE_UNSPECIFIED" => Some(Self::SquareSpiritTypeUnspecified),
            "VOTING" => Some(Self::Voting),
            "SUMMON_BEBOB_SUCCESS" => Some(Self::SummonBebobSuccess),
            "ATTACK_BEBOB_SUCCESS" => Some(Self::AttackBebobSuccess),
            "COLLECT_STARS" => Some(Self::CollectStars),
            "COMMUNITY_EVENT" => Some(Self::CommunityEvent),
            _ => None,
        }
    }
}
include!("blast.v1.square.tonic.rs");
// @@protoc_insertion_point(module)
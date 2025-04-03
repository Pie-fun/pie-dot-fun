// @generated
/// MySpace message represents a profile's MySpace.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MySpace {
    /// The name of Profile of the MySpace
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// The profile's assets.
    #[prost(message, optional, tag="2")]
    pub assets: ::core::option::Option<Assets>,
    /// The profile's StarDoodles.
    #[prost(message, optional, tag="3")]
    pub star_doodles: ::core::option::Option<StarDoodles>,
}
/// Assets message represents a profile's assets.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Assets {
    /// The profile's Spaceships assets.
    #[prost(message, repeated, tag="1")]
    pub spaceships: ::prost::alloc::vec::Vec<SpaceshipAsset>,
    /// The profile's Badges assets.
    #[prost(message, repeated, tag="2")]
    pub badges: ::prost::alloc::vec::Vec<BadgeAsset>,
    /// The profile's Scores assets.
    #[prost(message, repeated, tag="3")]
    pub scores: ::prost::alloc::vec::Vec<ScoreAsset>,
    /// The profile's Alphabets assets.
    #[prost(message, repeated, tag="4")]
    pub alphabets: ::prost::alloc::vec::Vec<AlphabetAsset>,
    /// The profile's Blocks assets.
    #[prost(message, repeated, tag="5")]
    pub blocks: ::prost::alloc::vec::Vec<BlockAsset>,
}
/// SpaceshipReference message represents a Spaceship.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpaceshipReference {
    /// The resource name of the Spaceship.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The nickname of the Spaceship.
    #[prost(string, tag="2")]
    pub nickname: ::prost::alloc::string::String,
    /// The token_id of Spaceship NFT.
    #[prost(string, tag="3")]
    pub token_id: ::prost::alloc::string::String,
    /// The image uri of Spaceship NFT.
    #[prost(string, tag="4")]
    pub image_uri: ::prost::alloc::string::String,
}
/// BadgeReference message represents a Badge.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BadgeReference {
    /// The resource name of the Badge.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
}
/// ScoreReference message represents a Score.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ScoreReference {
    /// The resource name of the Score.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The token_id of Score NFT.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    /// The image uri of Score NFT.
    #[prost(string, tag="3")]
    pub image_uri: ::prost::alloc::string::String,
}
/// SpaceshipAsset message represents a Spaceship asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpaceshipAsset {
    /// The ID of the Spaceship asset.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The URI of the Spaceship asset image.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The position of the Spaceship asset.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    /// The timestamp of the Spaceship asset creation.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The timestamp of the Spaceship asset update.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The reference to the Spaceship.
    #[prost(message, optional, tag="6")]
    pub reference: ::core::option::Option<SpaceshipReference>,
}
/// BadgeAsset message represents a Badge asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BadgeAsset {
    /// The ID of the Badge asset.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The URI of the Badge asset image.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The position of the Badge asset.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    /// The timestamp of the Badge asset creation.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The timestamp of the Badge asset update.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The reference to the Badge.
    #[prost(message, optional, tag="6")]
    pub reference: ::core::option::Option<BadgeReference>,
}
/// ScoreAsset message represents a Score asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ScoreAsset {
    /// The ID of the Score asset.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The URI of the Score asset image.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The position of the Score asset.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    /// The timestamp of the Score asset creation.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The timestamp of the Score asset update.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The reference to the Score.
    #[prost(message, optional, tag="6")]
    pub reference: ::core::option::Option<ScoreReference>,
}
/// AlphabetAsset message represents an Alphabet asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AlphabetAsset {
    /// The ID of the Alphabet asset.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The URI of the Alphabet asset image.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The position of the Alphabet asset.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    /// The timestamp of the Alphabet asset creation.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The timestamp of the Alphabet asset update.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The character of the Alphabet asset.
    #[prost(uint32, tag="6")]
    pub character: u32,
}
/// BlockAsset message represents a Block asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockAsset {
    /// The ID of the Block asset.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The URI of the Block asset image.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The position of the Block asset.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    /// The timestamp of the Alphabet block creation.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The timestamp of the Alphabet block update.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// StarDoodles message represents a profile's StarDoodles.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StarDoodles {
    /// The URI of the StarDoodles image.
    #[prost(string, tag="1")]
    pub image_uri: ::prost::alloc::string::String,
    /// The positions of the StarDoodles.
    #[prost(message, repeated, tag="2")]
    pub positions: ::prost::alloc::vec::Vec<Position>,
}
/// Position message represents a position.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Position {
    /// The left position.
    #[prost(int32, tag="1")]
    pub left: i32,
    /// The top position.
    #[prost(int32, tag="2")]
    pub top: i32,
    /// The right position.
    #[prost(int32, tag="3")]
    pub right: i32,
    /// The bottom position.
    #[prost(int32, tag="4")]
    pub bottom: i32,
}
/// ExternalProfile message represents an external profile.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExternalProfile {
    /// The name of the external profile.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The image uri of the external profile.
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The link of the external profile.
    #[prost(string, tag="3")]
    pub link: ::prost::alloc::string::String,
}
/// SNSConnection message represents a profile's connection.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SnsConnection {
    /// The profile resource name of the connection.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// The type of the SNS.
    #[prost(enumeration="SnsType", tag="3")]
    pub r#type: i32,
    /// The external profile.
    #[prost(message, optional, tag="4")]
    pub external_profile: ::core::option::Option<ExternalProfile>,
}
/// SNSType enumeration represents the type of sns.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SnsType {
    /// Unspecified sns type.
    SnsUnspecified = 0,
    /// Twitter sns type.
    SnsTwitter = 1,
}
impl SnsType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SnsType::SnsUnspecified => "SNS_UNSPECIFIED",
            SnsType::SnsTwitter => "SNS_TWITTER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SNS_UNSPECIFIED" => Some(Self::SnsUnspecified),
            "SNS_TWITTER" => Some(Self::SnsTwitter),
            _ => None,
        }
    }
}
/// ListProfilesRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListProfilesRequest {
    /// The maximum number of profiles to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListProfiles` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * create_time
    ///    * `>`
    /// * identified
    ///    * Equal`
    ///
    /// Examples
    /// * name="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * create_time>"2020-04-21T11:30:00Z"
    /// * identifed
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// Optional. The view to return.
    /// Defaults to FULL if not set.
    ///
    /// ProfileView enumeration represents the view of a profile.
    /// The view controls the amount of information returned.
    /// The BASIC view omits the following fields:
    /// star_balance, sns_connections, gm_stats
    ///
    /// Reference
    /// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
    /// <https://google.aip.dev/157>
    #[prost(enumeration="ProfileView", tag="4")]
    pub view: i32,
}
/// ListProfilesResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListProfilesResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub profiles: ::prost::alloc::vec::Vec<Profile>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
/// GetProfileRequest.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetProfileRequest {
    /// The name of the profile to retrieve.
    /// Format: profiles/{address}
    /// Alias "profiles/me" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// Optional. The view to return.
    /// Defaults to FULL if not set.
    ///
    /// ProfileView enumeration represents the view of a profile.
    /// The view controls the amount of information returned.
    /// The BASIC view omits the following fields:
    /// star_balance, sns_connections, gm_stats
    ///
    /// Reference
    /// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
    /// <https://google.aip.dev/157>
    #[prost(enumeration="ProfileView", tag="2")]
    pub view: i32,
}
/// UpdateProfileRequest.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateProfileRequest {
    /// Profile to update
    /// Format: profiles/{address}
    #[prost(message, optional, tag="1")]
    pub profile: ::core::option::Option<Profile>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["nickname"\]
    /// ["nickname", "nft"]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
/// CompleteTutorialRequest message represents a request to complete a tutorial.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CompleteTutorialRequest {
    /// The profile to complete the tutorial for.
    /// Format: profiles/{address}
    /// Resource name alias "profiles/me" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
/// CompleteTutorialResponse message represents a response from completing a tutorial.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CompleteTutorialResponse {
    /// The ID of the completed tutorial.
    #[prost(string, tag="1")]
    pub tutorial_id: ::prost::alloc::string::String,
    /// The timestamp of when the tutorial was completed.
    #[prost(message, optional, tag="2")]
    pub completed_timestamp: ::core::option::Option<::prost_types::Timestamp>,
}
/// GetMySpaceRequest message represents the request to list my space assets.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetMySpaceRequest {
    /// The profile whose my space assets should be listed.
    /// Format: profiles/{address}
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
/// UpdateMySpaceRequest message represents the request to update my space assets.
/// There is no update_mask for this request because always upate all my space assets.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateMySpaceRequest {
    /// The profile whose my space assets should be updated.
    /// Format: profiles/{address}
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub my_space: ::core::option::Option<MySpace>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetProfileDailyPlayCountRequest {
    /// Format: profiles/{address}
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetProfileDailyPlayCountResponse {
    /// The daily play count of the profile.
    #[prost(uint32, tag="1")]
    pub daily_play_count: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IncrementProfileDailyPlayCountRequest {
    /// Format: profiles/{address}
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IncrementProfileDailyPlayCountResponse {
    /// The daily play count of the profile.
    #[prost(uint32, tag="1")]
    pub daily_play_count: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ConnectSnsRequest {
    /// The profile to connect the SNS.
    /// Format: profiles/{address}
    /// Resource name alias "profiles/me" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// The SNS type to connect.
    #[prost(enumeration="SnsType", tag="2")]
    pub sns_type: i32,
    /// The access token for the SNS API.
    /// NOTE: This field can be changed depending on the implementation or SNS type.
    #[prost(string, tag="3")]
    pub access_token: ::prost::alloc::string::String,
    /// The access token secret for the SNS API.
    #[prost(string, tag="4")]
    pub access_token_secret: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Profile {
    /// The resource name of the Profile.
    /// Format: profiles/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// EIP-6551 TBA Address of the Profile NFT.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The created time of Profile.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="3")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The last updated time of Profile.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The number of Profile.
    #[prost(uint64, tag="5")]
    pub number: u64,
    /// The state of Profile
    #[prost(enumeration="ProfileState", tag="6")]
    pub state: i32,
    /// The current pfp nft of Profile.
    #[prost(message, optional, tag="7")]
    pub nft: ::core::option::Option<ProfileNft>,
    /// The star account of Profile
    #[prost(message, optional, tag="8")]
    pub star_account: ::core::option::Option<StarAccount>,
    /// The ens of profile
    /// This field is optional
    #[prost(string, optional, tag="9")]
    pub ens: ::core::option::Option<::prost::alloc::string::String>,
    /// The nickname of Profile.
    /// This field is optional.
    #[prost(string, optional, tag="10")]
    pub nickname: ::core::option::Option<::prost::alloc::string::String>,
    /// Whether Profile finished tutorial or not
    #[prost(bool, tag="11")]
    pub is_tutorial_done: bool,
    /// Whether Profile is identified or not
    #[prost(bool, tag="12")]
    pub is_identified: bool,
}
/// 다양한 tutorial 이 생길 예정
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Tutorial {
    /// whether tutorial is done or not
    #[prost(bool, tag="1")]
    pub is_done: bool,
    /// The completed time of tutorial.
    #[prost(message, optional, tag="2")]
    pub complete_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// StarAccount message represents a balance of stars for a profile.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StarAccount {
    /// The current balance of stars.
    #[prost(uint32, tag="1")]
    pub balance: u32,
    /// The cumulative total of stars.
    #[prost(uint32, tag="2")]
    pub cumulative_total: u32,
}
/// GMStatsSlim message represents the statistics for a gm count.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GmStatsSlim {
    /// The number of messages sent.
    #[prost(uint32, tag="1")]
    pub sent_count: u32,
    /// The number of messages received.
    #[prost(uint32, tag="2")]
    pub received_count: u32,
}
/// ProfileNFT message represents an Profile's NFT.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProfileNft {
    /// The resource name of the NFT asset.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// Token ID of the NFT asset.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    /// Token Name of the NFT asset.
    #[prost(string, tag="3")]
    pub token_name: ::prost::alloc::string::String,
    /// The URI of the NFT asset's image.
    /// This URI is cached version of image original URI
    /// e.g. "<https://cdn.spacebar.xyz/nfts/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/609">
    #[prost(string, tag="4")]
    pub image_uri: ::prost::alloc::string::String,
    /// The contract that owns the NFT asset.
    /// Output only.
    #[prost(message, optional, tag="5")]
    pub contract: ::core::option::Option<ProfileNftContract>,
}
/// NFTContract message represents an NFT contract.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProfileNftContract {
    /// The address of the NFT contract.
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    /// The name of the NFT contract schema.
    #[prost(string, tag="2")]
    pub display_name: ::prost::alloc::string::String,
    /// The symbol of the NFT contract.
    #[prost(string, tag="3")]
    pub symbol: ::prost::alloc::string::String,
    /// The blockchain on which the NFT contract resides.
    #[prost(enumeration="super::outpost::ChainType", tag="4")]
    pub chain: i32,
    /// The URI of the contract image
    #[prost(string, tag="5")]
    pub image_uri: ::prost::alloc::string::String,
}
/// The state of profile
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ProfileState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    /// Profile was firstly created but not started to rent base spaceship.
    /// This state is very transitory state because next transaction will change it to PROTOSHIP_MINTED or OWNERSHIP_ACQUIRED state immediately.
    Created = 1,
    /// Profile was firstly created with base spaceship rental.
    ProtoshipMinted = 2,
    /// Profile was created with base spaceship rental but failed to acquire
    ProtoshipBurned = 3,
    /// Profile has acquired ownership.
    OwnershipAcquired = 4,
}
impl ProfileState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ProfileState::StateUnspecified => "STATE_UNSPECIFIED",
            ProfileState::Created => "CREATED",
            ProfileState::ProtoshipMinted => "PROTOSHIP_MINTED",
            ProfileState::ProtoshipBurned => "PROTOSHIP_BURNED",
            ProfileState::OwnershipAcquired => "OWNERSHIP_ACQUIRED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "CREATED" => Some(Self::Created),
            "PROTOSHIP_MINTED" => Some(Self::ProtoshipMinted),
            "PROTOSHIP_BURNED" => Some(Self::ProtoshipBurned),
            "OWNERSHIP_ACQUIRED" => Some(Self::OwnershipAcquired),
            _ => None,
        }
    }
}
/// ProfileView enumeration represents the view of a profile.
/// The view controls the amount of information returned.
/// The BASIC view omits the following fields:
/// star_balance, sns_connections, gm_stats
///
/// Reference
/// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
/// <https://google.aip.dev/157>
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ProfileView {
    /// The default / unset value.
    /// The API will default to the FULL view.
    Unspecified = 0,
    /// Include only basic info.
    /// Do not include `nft`, `star_balance`, `sns_connections`, `gm_stats`
    Basic = 1,
    /// Include everything.
    /// This is the default value for both ListProfiles and GetProfile.
    Full = 2,
}
impl ProfileView {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ProfileView::Unspecified => "Profile_VIEW_UNSPECIFIED",
            ProfileView::Basic => "BASIC",
            ProfileView::Full => "FULL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "Profile_VIEW_UNSPECIFIED" => Some(Self::Unspecified),
            "BASIC" => Some(Self::Basic),
            "FULL" => Some(Self::Full),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBackspaceRequest {
    /// The name of the profile to retrieve.
    /// Format: profiles/{address}
    /// Wildcard (*) is not allowed.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBackspaceRequest {
    /// Backspace to update
    #[prost(message, optional, tag="1")]
    pub backspace: ::core::option::Option<Backspace>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Backspace {
    /// The resource name of the Backspace.
    /// Format: profiles/{address}/backspace
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// Introduction chat message of the Backspace.
    #[prost(string, tag="2")]
    pub introduction_chat: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDailyStarRewardRequest {
    /// Format: profiles/{address}
    /// Resource name alias "profiles/me" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClaimMyDailyStarRewardRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DailyStarReward {
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub current_streak: u32,
    #[prost(bool, tag="3")]
    pub is_claimable: bool,
    #[prost(uint32, tag="4")]
    pub star_reward: u32,
    #[prost(message, optional, tag="5")]
    pub last_claim: ::core::option::Option<DailyStarRewardClaim>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DailyStarRewardClaim {
    #[prost(uint32, tag="1")]
    pub streak: u32,
    #[prost(message, optional, tag="2")]
    pub claim_time: ::core::option::Option<::prost_types::Timestamp>,
}
include!("ethereum.v1.profile.tonic.rs");
// @@protoc_insertion_point(module)
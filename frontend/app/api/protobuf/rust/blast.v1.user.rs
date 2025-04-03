// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetUserRequest {
    /// The name of the user to retrieve.
    /// Format: users/{address}
    /// Alias "users/me" is supported.
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
/// ListUsersRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersRequest {
    /// The maximum number of users to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListUsers` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * address
    ///    * Equal`
    /// * nickname
    ///    * Equal`
    /// * state
    ///    * Equal`
    ///
    /// Examples
    /// * name="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * nickname="Alice"
    /// * state=SQUARE_OWNED
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
/// ListUsersResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub users: ::prost::alloc::vec::Vec<User>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateUserRequest {
    /// User to update
    /// Format: users/{address}
    #[prost(message, optional, tag="1")]
    pub user: ::core::option::Option<User>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["nickname"\]
    /// \["nft"\]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IdentifyUserRequest {
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
    /// The nickname of User.
    #[prost(string, tag="2")]
    pub nickname: ::prost::alloc::string::String,
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    #[prost(string, tag="3")]
    pub nft: ::prost::alloc::string::String,
    /// The referrer code of User.
    #[prost(string, tag="4")]
    pub referral_code: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNicknameAvailabilityRequest {
    /// The nickname of User.
    #[prost(string, tag="1")]
    pub nickname: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNicknameAvailabilityResponse {
    /// The nickname of User.
    #[prost(string, tag="1")]
    pub nickname: ::prost::alloc::string::String,
    /// The availability of the nickname.
    #[prost(bool, tag="2")]
    pub available: bool,
    /// The reason of the nickname is not available.
    /// Example:
    /// - nickname should be less or equal than 12 characters
    /// - nickname should be more or equal than 4 characters
    /// - nickname should start with alphabet
    /// - nickname should be alphanumeric
    #[prost(string, optional, tag="3")]
    pub reason: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct User {
    /// The resource name of the User.
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The address of User, mostly EOA address.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The created time of User.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="3")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The last updated time of User.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The last updated time of User's NFT.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub last_nft_update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The type of User
    #[prost(enumeration="UserType", tag="6")]
    pub r#type: i32,
    /// The state of User
    /// Deprecated: Use type instead
    #[prost(enumeration="UserState", tag="7")]
    pub state: i32,
    /// The current pfp nft of User.
    #[prost(message, optional, tag="8")]
    pub nft: ::core::option::Option<UserNft>,
    //   // The star account of User
    //   StarAccount star_account = 8 [
    //     (google.api.field_behavior) = OUTPUT_ONLY
    //   ];

    /// The ens of user
    /// This field is optional
    #[prost(string, optional, tag="9")]
    pub ens: ::core::option::Option<::prost::alloc::string::String>,
    /// The nickname of User.
    #[prost(string, tag="10")]
    pub nickname: ::prost::alloc::string::String,
}
/// UserNFT message represents an User's NFT.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserNft {
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
    pub contract: ::core::option::Option<UserNftContract>,
}
/// NFTContract message represents an NFT contract.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserNftContract {
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
    #[prost(enumeration="super::nft::ChainType", tag="4")]
    pub chain: i32,
    /// The URI of the contract image
    #[prost(string, tag="5")]
    pub image_uri: ::prost::alloc::string::String,
}
/// The state of user
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum UserState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    /// User was firstly created but nickname, nft is not set yet.
    /// After nickname and nft is set, state will be changed to CREATED.
    CreatedPending = 1,
    /// User is neither owner nor member.
    Created = 2,
    /// User is owner.
    SquareOwned = 3,
    /// User is member.
    SquareJoined = 4,
}
impl UserState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            UserState::StateUnspecified => "STATE_UNSPECIFIED",
            UserState::CreatedPending => "CREATED_PENDING",
            UserState::Created => "CREATED",
            UserState::SquareOwned => "SQUARE_OWNED",
            UserState::SquareJoined => "SQUARE_JOINED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "CREATED_PENDING" => Some(Self::CreatedPending),
            "CREATED" => Some(Self::Created),
            "SQUARE_OWNED" => Some(Self::SquareOwned),
            "SQUARE_JOINED" => Some(Self::SquareJoined),
            _ => None,
        }
    }
}
/// The state of user
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum UserType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    ///
    Independent = 1,
    ///
    SquareOwner = 2,
    ///
    SquareMember = 3,
}
impl UserType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            UserType::TypeUnspecified => "TYPE_UNSPECIFIED",
            UserType::Independent => "INDEPENDENT",
            UserType::SquareOwner => "SQUARE_OWNER",
            UserType::SquareMember => "SQUARE_MEMBER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "INDEPENDENT" => Some(Self::Independent),
            "SQUARE_OWNER" => Some(Self::SquareOwner),
            "SQUARE_MEMBER" => Some(Self::SquareMember),
            _ => None,
        }
    }
}
/// UserView enumeration represents the view of a user.
/// The view controls the amount of information returned.
/// The BASIC view omits the following fields:
/// star_balance, sns_connections, gm_stats
///
/// Reference
/// <https://cloud.google.com/apis/design/design_patterns#list_flattening> and
/// <https://google.aip.dev/157>
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum UserView {
    /// The default / unset value.
    /// The API will default to the FULL view.
    Unspecified = 0,
    /// Include only basic info.
    /// Do not include `nft`, `star_balance`, `sns_connections`, `gm_stats`
    Basic = 1,
    /// Include everything.
    /// This is the default value for both ListUsers and GetUser.
    Full = 2,
}
impl UserView {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            UserView::Unspecified => "User_VIEW_UNSPECIFIED",
            UserView::Basic => "BASIC",
            UserView::Full => "FULL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "User_VIEW_UNSPECIFIED" => Some(Self::Unspecified),
            "BASIC" => Some(Self::Basic),
            "FULL" => Some(Self::Full),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBackspaceRequest {
    /// The name of the user to retrieve.
    /// Format: users/{address}
    /// Wildcard (*) is not allowed.
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
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
    /// Format: users/{address}/backspace
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// Introduction chat message of the Backspace.
    #[prost(string, tag="2")]
    pub introduction_chat: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDailyCheckinRequest {
    /// Format: users/{address}
    /// Resource name alias "users/me" is supported.
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClaimDailyCheckinRequest {
    /// Format: users/{address}
    /// Resource name alias "users/me" is supported.
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DailyCheckin {
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub current_streak: u32,
    #[prost(bool, tag="3")]
    pub is_claimable: bool,
    #[prost(uint32, tag="4")]
    pub points: u32,
    #[prost(message, optional, tag="5")]
    pub last_claim: ::core::option::Option<DailyCheckinClaim>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DailyCheckinClaim {
    #[prost(uint32, tag="1")]
    pub streak: u32,
    #[prost(uint32, tag="2")]
    pub points: u32,
    #[prost(message, optional, tag="3")]
    pub claim_time: ::core::option::Option<::prost_types::Timestamp>,
}
include!("blast.v1.user.tonic.rs");
// @@protoc_insertion_point(module)
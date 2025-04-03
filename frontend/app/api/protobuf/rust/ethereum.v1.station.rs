// @generated
/// CreateSpaceshipRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateSpaceshipRequest {
    /// spaceship to create
    #[prost(message, optional, tag="1")]
    pub spaceship: ::core::option::Option<Spaceship>,
}
/// GetSpaceshipRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSpaceshipRequest {
    /// The name of the spaceship to retrieve.
    /// Format: spaceships/{spaceship}
    #[prost(string, tag="1")]
    pub spaceship: ::prost::alloc::string::String,
}
/// UpdateSpaceshipRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateSpaceshipRequest {
    /// spaceship to update
    #[prost(message, optional, tag="1")]
    pub spaceship: ::core::option::Option<Spaceship>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["nft.metadata[left_wing]"\]
    /// ["nickname", "nft.metadata"]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
/// GetSpaceshipRequest
///
///
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MintSpaceshipRequest {
}
/// ListSpaceshipsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSpaceshipsRequest {
    /// The maximum number of spaceships to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListSpaceships` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `equal`
    /// * profile
    ///    * `equal`
    /// * create_time
    ///    * `>`
    /// * title
    ///    * `contains`
    /// * state
    ///    * `equal`
    /// * type
    ///    * `equal`
    /// * is_upgraded
    ///    * `negation`
    ///
    /// Examples
    /// * filter=profile="profiles/0x927c3Ba1B0F8300E1Cc5DcA825411d756A8D4001"
    /// * filter=state=RENT_WAITING
    /// * filter=NOT rentable
    /// * filter=rentable
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
/// ListSpaceshipsResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListSpaceshipsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub spaceships: ::prost::alloc::vec::Vec<Spaceship>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
/// Spaceship is type of Spaceship
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Spaceship {
    /// The resource name of Spaceship.
    /// Format: spaceships/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// 6551 address of Spaceship NFT
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The owner address of Spaceship.
    /// This address can be PFP NFT TBA or EOA.
    /// This field will be empty if the Spaceship is burned.
    #[prost(string, tag="3")]
    pub owner_address: ::prost::alloc::string::String,
    /// The created time of Spaceship
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The last updated time of Spaceship
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The nickname of Spaceship.
    /// Internship has null value.
    /// This field is optional
    #[prost(string, optional, tag="6")]
    pub nickname: ::core::option::Option<::prost::alloc::string::String>,
    /// state of Spaceship
    #[prost(enumeration="SpaceshipState", tag="7")]
    pub state: i32,
    #[prost(enumeration="SpaceshipType", tag="8")]
    pub r#type: i32,
    /// Whether the Spaceship is upgraded to Ownership
    #[prost(bool, tag="9")]
    pub is_upgraded: bool,
    /// NFT of Spaceship
    #[prost(message, optional, tag="10")]
    pub nft: ::core::option::Option<SpaceshipNft>,
}
/// SpaceshipNFT message represents an Spaceship's NFT.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpaceshipNft {
    /// The resource name of the NFT asset.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// Token ID of the NFT asset.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    /// The URI of the NFT asset's image.
    /// This URI can be cached version of image original URI
    /// e.g. "<https://i.seadn.io/gcs/files/f3564ef33373939b024fb791f21ec37b.png?w=500&auto=format">
    #[prost(string, tag="3")]
    pub image_uri: ::prost::alloc::string::String,
    /// The Metadata URI of the NFT asset.
    #[prost(string, tag="4")]
    pub metadata_uri: ::prost::alloc::string::String,
}
/// SpaceshipState
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SpaceshipState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    ///
    Rented = 1,
    ///
    Burned = 2,
    /// means upgraded to ownership
    Upgraded = 3,
}
impl SpaceshipState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SpaceshipState::StateUnspecified => "STATE_UNSPECIFIED",
            SpaceshipState::Rented => "RENTED",
            SpaceshipState::Burned => "BURNED",
            SpaceshipState::Upgraded => "UPGRADED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "RENTED" => Some(Self::Rented),
            "BURNED" => Some(Self::Burned),
            "UPGRADED" => Some(Self::Upgraded),
            _ => None,
        }
    }
}
/// SpaceshipType
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SpaceshipType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    ///
    Protoship = 1,
    /// Semantic lock for rent.
    Ownership = 2,
}
impl SpaceshipType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SpaceshipType::TypeUnspecified => "TYPE_UNSPECIFIED",
            SpaceshipType::Protoship => "PROTOSHIP",
            SpaceshipType::Ownership => "OWNERSHIP",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "PROTOSHIP" => Some(Self::Protoship),
            "OWNERSHIP" => Some(Self::Ownership),
            _ => None,
        }
    }
}
include!("ethereum.v1.station.tonic.rs");
// @@protoc_insertion_point(module)
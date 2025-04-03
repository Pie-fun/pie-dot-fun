// @generated
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
    ///    * `Equal`
    /// * create_time
    ///    * `>`
    /// * identified
    ///    * Equal`
    ///
    /// Examples
    /// * name="spaceships/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * create_time>"2020-04-21T11:30:00Z"
    /// * identifed
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSpaceshipRequest {
    /// The name of the spaceship to retrieve.
    /// Format: spaceships/{address}
    /// Alias "spaceships/me" is supported.
    #[prost(string, tag="1")]
    pub spaceship: ::prost::alloc::string::String,
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
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateSpaceshipRequest {
    /// Spaceship to update
    /// Format: spaceships/{address}
    #[prost(message, optional, tag="1")]
    pub spaceship: ::core::option::Option<Spaceship>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["nickname"\]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Spaceship {
    /// The resource name of the Spaceship.
    /// Format: spaceships/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// EIP-6551 TBA Address of the Spaceship NFT.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="3")]
    pub owner_address: ::prost::alloc::string::String,
    ///
    #[prost(enumeration="SpaceshipType", tag="4")]
    pub r#type: i32,
    /// The created time of Spaceship.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The updated time of Spaceship.
    #[prost(message, optional, tag="6")]
    pub nft: ::core::option::Option<SpaceshipNft>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpaceshipNft {
    /// Token ID of the NFT asset.
    #[prost(string, tag="1")]
    pub token_id: ::prost::alloc::string::String,
    /// The URI of the NFT asset's image.
    /// This URI is cached version of image original URI
    /// e.g. "<https://cdn.spacebar.xyz/nfts/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/609">
    #[prost(string, tag="2")]
    pub image_uri: ::prost::alloc::string::String,
    /// The URI of the NFT asset's metadata.
    #[prost(string, tag="3")]
    pub metadata_uri: ::prost::alloc::string::String,
}
/// The state of spaceship
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SpaceshipType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    ///
    Protoship = 1,
    ///
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
include!("blast.v1.spaceship.tonic.rs");
// @@protoc_insertion_point(module)
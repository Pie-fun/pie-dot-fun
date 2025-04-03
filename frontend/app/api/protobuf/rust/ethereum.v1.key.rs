// @generated
/// ListKeysRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListKeysRequest {
    /// The name of the profile.
    /// Format: profiles/{address}
    /// Wildcard "profiles/*" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// The maximum number of keys to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListKeys` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * owner, profile
    ///    * `=`
    /// * state
    ///    * `=`
    /// * primary_type
    ///    * `=`
    /// * secondary_type
    ///    * `=`
    /// * create_time
    ///    * `>`
    /// * minted
    ///    * Equal`
    ///
    /// Examples
    /// * filter=name="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/keys/0x79FCDEF22feeD20eDDacbB2587640e45491b757f"
    /// * filter=owner="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * filter=profile="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * filter=state=CREATED
    /// * filter=primary_tupe=A_KEY
    /// * filter=minted
    #[prost(string, tag="4")]
    pub filter: ::prost::alloc::string::String,
    /// One or more fields to compare and use to sort the output. (optional)
    /// Default order for a field is descending by id
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * "owner_address", "primary_type", "secondary_type", "token_id", "create_time", "mint_time"
    ///
    /// Examples
    /// * order_by=mint_time asc
    /// * order_by=primary_type asc, secondary_type asc
    /// * order_by=token_id asc
    #[prost(string, tag="5")]
    pub order_by: ::prost::alloc::string::String,
}
/// ListKeysResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListKeysResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub keys: ::prost::alloc::vec::Vec<Key>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
    /// The total number of keys that matched with the filter query.
    #[prost(uint32, tag="3")]
    pub total_size: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListKeyVOsRequest {
    /// Available Sequence and Operator
    /// * primary_type
    ///    * `=`
    /// * secondary_type
    ///    * `=`
    ///
    /// Examples
    /// * primary_tupe="S_KEY"
    /// * secondary_type="TIER_1"
    #[prost(string, tag="1")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListKeyVOsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub key_value_objects: ::prost::alloc::vec::Vec<KeyVo>,
}
/// CreateKeyVORequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateKeyVoRequest {
    /// score to create
    #[prost(message, optional, tag="1")]
    pub key_vo: ::core::option::Option<KeyVo>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Key {
    /// The resource name of the Key.
    /// Format: profiles/{profile_address}/keys/{key_address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// EIP-6551 TBA Address of the Key.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The owner of Key.
    /// Format: profiles/{address}
    #[prost(string, tag="3")]
    pub owner: ::prost::alloc::string::String,
    /// The state of Key
    #[prost(enumeration="State", tag="4")]
    pub state: i32,
    /// The created time of Key.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The minted time of Key.
    /// This field is only set when Key is minted. (optional)
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="6")]
    pub mint_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The transaction hash for minting key.
    /// This field is only set when Key is minted. (optional)
    #[prost(string, optional, tag="7")]
    pub mint_tx_hash: ::core::option::Option<::prost::alloc::string::String>,
    /// The amount of Eth Contribution (nominated as wei)
    /// This field is only set when Key is minted. (optional)
    #[prost(string, optional, tag="8")]
    pub eth_contribution: ::core::option::Option<::prost::alloc::string::String>,
    /// Whether Key finished tutorial or not
    #[prost(bool, tag="9")]
    pub is_minted: bool,
    /// Key value object
    #[prost(message, optional, tag="10")]
    pub vo: ::core::option::Option<KeyVo>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct KeyVo {
    /// EIP-6551 TBA Address of the Key VO.
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    /// Token ID of the Key VO.
    /// Output only.
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
    /// The primary type of the Key VO.
    /// Output only.
    #[prost(enumeration="PrimaryType", tag="3")]
    pub primary_type: i32,
    /// The secondary type of the Key VO.
    /// Output only.
    #[prost(enumeration="SecondaryType", tag="4")]
    pub secondary_type: i32,
    /// The cached URI of the Key VO's image.
    /// Output only.
    #[prost(string, tag="5")]
    pub cached_image_uri: ::prost::alloc::string::String,
    /// The original URI of the Key VO's image.
    /// e.g. ipfs://Qm...
    /// Output only.
    #[prost(string, tag="6")]
    pub original_image_uri: ::prost::alloc::string::String,
    /// The URI of the Key VO's image.
    /// Output only.
    #[prost(string, tag="7")]
    pub metadata_uri: ::prost::alloc::string::String,
    /// The contract that owns the Key VO.
    /// Output only.
    #[prost(string, tag="8")]
    pub contract_address: ::prost::alloc::string::String,
}
/// The state of key
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum State {
    /// default value. this value is unused.
    Unspecified = 0,
    /// Key was firstly created but not minted yet.
    Created = 1,
    /// Key was firstly created with base spaceship rental.
    Minted = 2,
}
impl State {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            State::Unspecified => "STATE_UNSPECIFIED",
            State::Created => "CREATED",
            State::Minted => "MINTED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::Unspecified),
            "CREATED" => Some(Self::Created),
            "MINTED" => Some(Self::Minted),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PrimaryType {
    /// default value. this value is unused.
    Unspecified = 0,
    /// Whitelist.
    WKey = 1,
    /// Star Gatherer
    GKey = 2,
    /// Doodle Artist
    AKey = 3,
    /// Star Hunter
    HKey = 4,
    /// Top Ranker
    RKey = 5,
}
impl PrimaryType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PrimaryType::Unspecified => "PRIMARY_TYPE_UNSPECIFIED",
            PrimaryType::WKey => "W_KEY",
            PrimaryType::GKey => "G_KEY",
            PrimaryType::AKey => "A_KEY",
            PrimaryType::HKey => "H_KEY",
            PrimaryType::RKey => "R_KEY",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PRIMARY_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "W_KEY" => Some(Self::WKey),
            "G_KEY" => Some(Self::GKey),
            "A_KEY" => Some(Self::AKey),
            "H_KEY" => Some(Self::HKey),
            "R_KEY" => Some(Self::RKey),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SecondaryType {
    Unspecified = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3,
    Tier4 = 4,
    Tier5 = 5,
}
impl SecondaryType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SecondaryType::Unspecified => "SECONDARY_TYPE_UNSPECIFIED",
            SecondaryType::Tier1 => "TIER_1",
            SecondaryType::Tier2 => "TIER_2",
            SecondaryType::Tier3 => "TIER_3",
            SecondaryType::Tier4 => "TIER_4",
            SecondaryType::Tier5 => "TIER_5",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SECONDARY_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "TIER_1" => Some(Self::Tier1),
            "TIER_2" => Some(Self::Tier2),
            "TIER_3" => Some(Self::Tier3),
            "TIER_4" => Some(Self::Tier4),
            "TIER_5" => Some(Self::Tier5),
            _ => None,
        }
    }
}
include!("ethereum.v1.key.tonic.rs");
// @@protoc_insertion_point(module)
// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetStakingRequest {
    /// The name of the staking to retrieve.
    /// Format: users/{user_address}/stakings
    #[prost(string, tag="1")]
    pub staking: ::prost::alloc::string::String,
}
/// ListStakingsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStakingsRequest {
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
    /// When paginating, all other parameters provided to `ListStakings` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * user_address
    ///    * Equal`
    ///
    /// Examples
    /// * name="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/stakings"
    /// * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
/// ListStakingsResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStakingsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub stakings: ::prost::alloc::vec::Vec<Staking>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetStakingTotalAmountRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetStakingTotalAmountResponse {
    /// The total amount of the staking.
    #[prost(float, tag="1")]
    pub total_amount: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Staking {
    /// The resource name of the Staking.
    /// Format: users/{user_address}/stakings
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    //
    //   string square_address = 3 [
    //     (google.api.field_behavior) = OUTPUT_ONLY
    //   ];

    ///
    #[prost(enumeration="StakingCurrency", tag="4")]
    pub currency: i32,
    ///
    #[prost(float, tag="5")]
    pub amount: f32,
    ///
    #[prost(enumeration="StakingState", tag="6")]
    pub state: i32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum StakingCurrency {
    /// default value. this value is unused.
    CurrencyUnspecified = 0,
    Eth = 1,
}
impl StakingCurrency {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            StakingCurrency::CurrencyUnspecified => "CURRENCY_UNSPECIFIED",
            StakingCurrency::Eth => "ETH",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CURRENCY_UNSPECIFIED" => Some(Self::CurrencyUnspecified),
            "ETH" => Some(Self::Eth),
            _ => None,
        }
    }
}
/// The state of staking
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum StakingState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    ///
    Active = 1,
    ///
    Inactive = 2,
}
impl StakingState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            StakingState::StateUnspecified => "STATE_UNSPECIFIED",
            StakingState::Active => "ACTIVE",
            StakingState::Inactive => "INACTIVE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "ACTIVE" => Some(Self::Active),
            "INACTIVE" => Some(Self::Inactive),
            _ => None,
        }
    }
}
include!("blast.v1.staking.tonic.rs");
// @@protoc_insertion_point(module)
// @generated
/// ListReferralsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListReferralsRequest {
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
    /// When paginating, all other parameters provided to `ListReferrals` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * user_address
    ///    * Equal`
    /// * state
    ///    * Equal`
    ///
    /// Examples
    /// * name="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/referrals"
    /// * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * state=ACTIVATED
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
/// ListReferralsResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListReferralsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub referrals: ::prost::alloc::vec::Vec<Referral>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetReferralRequest {
    /// The name of the referral to retrieve.
    /// Format: users/{address}/referrals
    #[prost(string, tag="1")]
    pub referral: ::prost::alloc::string::String,
}
/// RefferedByRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RefferedByRequest {
    /// The name of the referral to retrieve.
    /// Format: users/{address}/referrals
    #[prost(string, tag="1")]
    pub referral: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub code: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Referral {
    /// The resource name of the Referral.
    /// Format: users/{address}/referrals
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    ///
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    ///
    #[prost(enumeration="ReferralState", tag="3")]
    pub state: i32,
    #[prost(string, tag="4")]
    pub collection: ::prost::alloc::string::String,
    #[prost(message, optional, tag="5")]
    pub referred_by: ::core::option::Option<ReferredBy>,
    #[prost(message, optional, tag="6")]
    pub referred: ::core::option::Option<Referred>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReferredBy {
    #[prost(string, tag="1")]
    pub code: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Referred {
    #[prost(string, tag="1")]
    pub code: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub same_collection: u32,
    #[prost(uint32, tag="3")]
    pub other_collection: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Reference {
    #[prost(string, tag="1")]
    pub referrer: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub referred_by: ::prost::alloc::string::String,
    #[prost(bool, tag="3")]
    pub same_collection: bool,
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ReferralState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    /// Referral code was deactivated.
    Deactivated = 1,
    /// Referral code was activated.
    Activated = 2,
}
impl ReferralState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ReferralState::StateUnspecified => "STATE_UNSPECIFIED",
            ReferralState::Deactivated => "DEACTIVATED",
            ReferralState::Activated => "ACTIVATED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "DEACTIVATED" => Some(Self::Deactivated),
            "ACTIVATED" => Some(Self::Activated),
            _ => None,
        }
    }
}
include!("blast.v1.referral.tonic.rs");
// @@protoc_insertion_point(module)
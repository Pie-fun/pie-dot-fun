// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignInRequest {
    #[prost(string, tag="1")]
    pub eoa_address: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub timestamp: u64,
    #[prost(string, tag="3")]
    pub signature: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignInResponse {
    #[prost(string, repeated, tag="1")]
    pub access_tokens: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, repeated, tag="2")]
    pub refresh_tokens: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, tag="3")]
    pub eoa_address: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="4")]
    pub profiles: ::prost::alloc::vec::Vec<Profile>,
    #[prost(bool, tag="5")]
    pub has_accepted_terms: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Profile {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(string, repeated, tag="2")]
    pub spaceship_addresses: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RefreshTokenRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RefreshTokenResponse {
    #[prost(string, optional, tag="1")]
    pub access_token: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag="2")]
    pub refresh_token: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignoutRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignoutResponse {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SelectAccountRequest {
    #[prost(string, tag="1")]
    pub spaceship_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SelectAccountResponse {
    #[prost(string, optional, tag="1")]
    pub access_token: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag="2")]
    pub refresh_token: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AcceptTermsOfServiceRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AuthenticateRequest {
    #[prost(string, tag="1")]
    pub access_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AuthenticateResponse {
    #[prost(string, tag="1")]
    pub eoa_address: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub profile_address: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub spaceship_address: ::prost::alloc::string::String,
    #[prost(bool, tag="4")]
    pub has_accepted_terms: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTempTokenRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTempTokenResponse {
    #[prost(string, tag="1")]
    pub access_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DownloadRequest {
    #[prost(string, tag="1")]
    pub url: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DownloadResponse {
    #[prost(string, tag="1")]
    pub header: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub body: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AccessTokenClaim {
    #[prost(string, tag="1")]
    pub session_id: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub eoa_address: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub profile_address: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub spaceship_address: ::prost::alloc::string::String,
    #[prost(bool, tag="5")]
    pub has_accepted_terms: bool,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum AccessLogType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    ///
    Signin = 1,
    ///
    Refresh = 2,
    ///
    Signout = 3,
}
impl AccessLogType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            AccessLogType::TypeUnspecified => "TYPE_UNSPECIFIED",
            AccessLogType::Signin => "SIGNIN",
            AccessLogType::Refresh => "REFRESH",
            AccessLogType::Signout => "SIGNOUT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "SIGNIN" => Some(Self::Signin),
            "REFRESH" => Some(Self::Refresh),
            "SIGNOUT" => Some(Self::Signout),
            _ => None,
        }
    }
}
include!("ethereum.v1.auth.tonic.rs");
// @@protoc_insertion_point(module)
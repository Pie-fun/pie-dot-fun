// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetGmStatsRequest {
    /// The user whom the GM stats should be retrieved.
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
/// SendGMRequest message represents the request to send a GM message.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SendGmRequest {
    /// The user whom the GM should be sent from.
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub from: ::prost::alloc::string::String,
    /// The user whom the GM should be sent to.
    /// Format: users/{address}
    #[prost(string, tag="2")]
    pub to: ::prost::alloc::string::String,
}
/// Prefligjt GM Request message represents the request to preflight a GM message.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PreflightGmRequest {
    /// The user whom the GM should be sent from.
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub from: ::prost::alloc::string::String,
    /// The user whom the GM should be sent to.
    /// Format: users/{address}
    #[prost(string, tag="2")]
    pub to: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PreflightGmResponse {
    #[prost(bool, tag="1")]
    pub can_send: bool,
    /// The reason why the GM cannot be sent.
    /// This field is only populated when can_send is false.
    #[prost(enumeration="RejectPreflightGmCode", optional, tag="2")]
    pub reject_code: ::core::option::Option<i32>,
}
/// Request message for ListGMs.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListGMsRequest {
    /// The maximum number of gms to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListGMs` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * from
    ///    * `=`
    /// * to
    ///    * `=`
    ///
    /// Examples
    /// * from="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
    /// * to="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
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
    /// * "create_time"
    ///
    /// Examples
    /// * order_by=create_time desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
/// Response message for ListGMs.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListGMsResponse {
    /// The list of GM messages that match the filters.
    #[prost(message, repeated, tag="1")]
    pub gms: ::prost::alloc::vec::Vec<Gm>,
    /// Pagination token used to retrieve the next page of results.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GmStats {
    /// The resource name of the GM message.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The user address of the user.
    #[prost(string, tag="2")]
    pub user_address: ::prost::alloc::string::String,
    #[prost(uint32, tag="3")]
    pub sent_count: u32,
    #[prost(uint32, tag="4")]
    pub received_count: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Gm {
    /// The resource name of the GM message.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The user name of the sender.
    #[prost(string, tag="3")]
    pub from: ::prost::alloc::string::String,
    /// The user name of the receiver.
    #[prost(string, tag="4")]
    pub to: ::prost::alloc::string::String,
    /// The time when the message was sent or received.
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RejectPreflightGmCode {
    Unspecified = 0,
    /// The GM has already been sent to same user.
    RejectPreflightGmAlreadySentToSameUser = 1,
    RejectPreflightGmExceedQuota = 2,
    RejectPreflightGmSelfSend = 3,
}
impl RejectPreflightGmCode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RejectPreflightGmCode::Unspecified => "REJECT_PREFLIGHT_GM_CODE_UNSPECIFIED",
            RejectPreflightGmCode::RejectPreflightGmAlreadySentToSameUser => "REJECT_PREFLIGHT_GM_ALREADY_SENT_TO_SAME_USER",
            RejectPreflightGmCode::RejectPreflightGmExceedQuota => "REJECT_PREFLIGHT_GM_EXCEED_QUOTA",
            RejectPreflightGmCode::RejectPreflightGmSelfSend => "REJECT_PREFLIGHT_GM_SELF_SEND",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "REJECT_PREFLIGHT_GM_CODE_UNSPECIFIED" => Some(Self::Unspecified),
            "REJECT_PREFLIGHT_GM_ALREADY_SENT_TO_SAME_USER" => Some(Self::RejectPreflightGmAlreadySentToSameUser),
            "REJECT_PREFLIGHT_GM_EXCEED_QUOTA" => Some(Self::RejectPreflightGmExceedQuota),
            "REJECT_PREFLIGHT_GM_SELF_SEND" => Some(Self::RejectPreflightGmSelfSend),
            _ => None,
        }
    }
}
include!("blast.v1.gm.tonic.rs");
// @@protoc_insertion_point(module)
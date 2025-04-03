// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNotificationsRequest {
    /// The resource name of User.
    /// User is required.
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub parent: ::prost::alloc::string::String,
    /// The maximum number of items to return. The service may return fewer than this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="2")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListNotifications` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * state
    ///    * `Equal`
    /// * type
    ///    * `Equal`
    ///
    /// Examples
    /// * state=CREATED
    /// * type=INFO_POINTS_GIVEN
    #[prost(string, tag="4")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNotificationsResponse {
    #[prost(message, repeated, tag="1")]
    pub notifications: ::prost::alloc::vec::Vec<Notification>,
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AcknowledgeNotificationRequest {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Notification {
    /// The resource name of the Notification.
    /// Format: users/{user_address}/notifications/{id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The resource name of User.
    /// Format: users/{address}
    #[prost(string, tag="2")]
    pub user: ::prost::alloc::string::String,
    /// The id of Notification.
    #[prost(uint64, tag="3")]
    pub id: u64,
    #[prost(enumeration="NotificationType", tag="4")]
    pub r#type: i32,
    #[prost(enumeration="NotificationAction", tag="5")]
    pub action: i32,
    #[prost(enumeration="NotificationState", tag="6")]
    pub state: i32,
    #[prost(enumeration="NotificationContentIcon", tag="7")]
    pub icon: i32,
    #[prost(string, tag="8")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag="9")]
    pub body: ::prost::alloc::string::String,
    #[prost(map="string, string", tag="10")]
    pub metadata: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
    /// The created time of Notification.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="13")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The expire time of Notification if exists.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="14")]
    pub expire_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The acknowledged time of Notification.
    #[prost(message, optional, tag="15")]
    pub acknowledge_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// Type of the notification.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum NotificationType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    /// Plain text info message.
    Info = 100,
    /// DEPRECATED: Use INFO_SPACEBAR_POINTS_GIVEN instead.
    InfoPointsGiven = 101,
    InfoSpacebarPointsGiven = 110,
    InfoBlastGoldGiven = 111,
    InfoBlastTokenGiven = 112,
}
impl NotificationType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationType::TypeUnspecified => "TYPE_UNSPECIFIED",
            NotificationType::Info => "INFO",
            NotificationType::InfoPointsGiven => "INFO_POINTS_GIVEN",
            NotificationType::InfoSpacebarPointsGiven => "INFO_SPACEBAR_POINTS_GIVEN",
            NotificationType::InfoBlastGoldGiven => "INFO_BLAST_GOLD_GIVEN",
            NotificationType::InfoBlastTokenGiven => "INFO_BLAST_TOKEN_GIVEN",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "INFO" => Some(Self::Info),
            "INFO_POINTS_GIVEN" => Some(Self::InfoPointsGiven),
            "INFO_SPACEBAR_POINTS_GIVEN" => Some(Self::InfoSpacebarPointsGiven),
            "INFO_BLAST_GOLD_GIVEN" => Some(Self::InfoBlastGoldGiven),
            "INFO_BLAST_TOKEN_GIVEN" => Some(Self::InfoBlastTokenGiven),
            _ => None,
        }
    }
}
/// Action type that can be performed on the notification.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum NotificationAction {
    /// default value. this value is unused.
    ActionUnspecified = 0,
    /// No operation.
    NoOp = 1,
    /// Navigate to the points page.
    NavigatePointsPage = 100,
}
impl NotificationAction {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationAction::ActionUnspecified => "ACTION_UNSPECIFIED",
            NotificationAction::NoOp => "NO_OP",
            NotificationAction::NavigatePointsPage => "NAVIGATE_POINTS_PAGE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "ACTION_UNSPECIFIED" => Some(Self::ActionUnspecified),
            "NO_OP" => Some(Self::NoOp),
            "NAVIGATE_POINTS_PAGE" => Some(Self::NavigatePointsPage),
            _ => None,
        }
    }
}
/// State of the notification.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum NotificationState {
    /// default value. this value is unused.
    StateUnspecified = 0,
    ///
    Created = 1,
    ///
    Acknowledged = 2,
    ///
    Expired = 3,
}
impl NotificationState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationState::StateUnspecified => "STATE_UNSPECIFIED",
            NotificationState::Created => "CREATED",
            NotificationState::Acknowledged => "ACKNOWLEDGED",
            NotificationState::Expired => "EXPIRED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "STATE_UNSPECIFIED" => Some(Self::StateUnspecified),
            "CREATED" => Some(Self::Created),
            "ACKNOWLEDGED" => Some(Self::Acknowledged),
            "EXPIRED" => Some(Self::Expired),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum NotificationContentIcon {
    /// default value. this value is unused.
    IconUnspecified = 0,
    IconSpacebarPoints = 1,
    IconBlastGold = 2,
    IconBlastToken = 3,
}
impl NotificationContentIcon {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationContentIcon::IconUnspecified => "ICON_UNSPECIFIED",
            NotificationContentIcon::IconSpacebarPoints => "ICON_SPACEBAR_POINTS",
            NotificationContentIcon::IconBlastGold => "ICON_BLAST_GOLD",
            NotificationContentIcon::IconBlastToken => "ICON_BLAST_TOKEN",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "ICON_UNSPECIFIED" => Some(Self::IconUnspecified),
            "ICON_SPACEBAR_POINTS" => Some(Self::IconSpacebarPoints),
            "ICON_BLAST_GOLD" => Some(Self::IconBlastGold),
            "ICON_BLAST_TOKEN" => Some(Self::IconBlastToken),
            _ => None,
        }
    }
}
include!("blast.v1.notification.tonic.rs");
// @@protoc_insertion_point(module)
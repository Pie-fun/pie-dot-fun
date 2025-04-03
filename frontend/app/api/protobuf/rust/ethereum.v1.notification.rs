// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNotificationsRequest {
    /// The maximum number of items to return. The service may return fewer than this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListNotifications` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// The resource name of Profile.
    /// Profile is required.
    /// Format: profiles/{address}
    #[prost(string, tag="3")]
    pub profile: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * state
    ///    * `Equal`
    /// * type
    ///    * `Equal`
    ///
    /// Examples
    /// * state=CREATED
    /// * type=REWARD_DAILY_ATTENDANCE
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
    pub notification: ::prost::alloc::string::String,
}
/// CreateNotificationRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateNotificationRequest {
    /// notification to create
    #[prost(message, optional, tag="1")]
    pub notification: ::core::option::Option<Notification>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NotificationContent {
    #[prost(enumeration="NotificationContentIcon", tag="1")]
    pub icon: i32,
    #[prost(string, tag="2")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub body: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Notification {
    /// The resource name of the Notification.
    /// Format: notifications/{id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The id of Notification.
    #[prost(uint64, tag="2")]
    pub id: u64,
    /// The resource name of Profile.
    /// Format: profiles/{address}
    #[prost(string, tag="3")]
    pub profile: ::prost::alloc::string::String,
    #[prost(enumeration="NotificationType", tag="4")]
    pub r#type: i32,
    #[prost(enumeration="NotificationAction", tag="5")]
    pub action: i32,
    #[prost(enumeration="NotificationState", tag="6")]
    pub state: i32,
    #[prost(message, optional, tag="7")]
    pub content: ::core::option::Option<NotificationContent>,
    /// The created time of Notification.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="8")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The expire time of Notification if exists.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="9")]
    pub expire_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The acknowledged time of Notification.
    #[prost(message, optional, tag="10")]
    pub acknowledge_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The Metadata of Notification.
    #[prost(map="string, string", tag="11")]
    pub metadata: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
}
/// Type of the notification.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum NotificationType {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    /// Plain text info message.
    InfoMessage = 1,
    RewardDailyAttendance = 2,
    RewardWeeklyMission = 3,
    RewardWeeklyDoodler = 4,
    RewardChanllengeRace = 5,
    RewardHangoutQuiz = 6,
    RewardCustom = 7,
    InfoKeyCreated = 8,
}
impl NotificationType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationType::TypeUnspecified => "TYPE_UNSPECIFIED",
            NotificationType::InfoMessage => "INFO_MESSAGE",
            NotificationType::RewardDailyAttendance => "REWARD_DAILY_ATTENDANCE",
            NotificationType::RewardWeeklyMission => "REWARD_WEEKLY_MISSION",
            NotificationType::RewardWeeklyDoodler => "REWARD_WEEKLY_DOODLER",
            NotificationType::RewardChanllengeRace => "REWARD_CHANLLENGE_RACE",
            NotificationType::RewardHangoutQuiz => "REWARD_HANGOUT_QUIZ",
            NotificationType::RewardCustom => "REWARD_CUSTOM",
            NotificationType::InfoKeyCreated => "INFO_KEY_CREATED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "INFO_MESSAGE" => Some(Self::InfoMessage),
            "REWARD_DAILY_ATTENDANCE" => Some(Self::RewardDailyAttendance),
            "REWARD_WEEKLY_MISSION" => Some(Self::RewardWeeklyMission),
            "REWARD_WEEKLY_DOODLER" => Some(Self::RewardWeeklyDoodler),
            "REWARD_CHANLLENGE_RACE" => Some(Self::RewardChanllengeRace),
            "REWARD_HANGOUT_QUIZ" => Some(Self::RewardHangoutQuiz),
            "REWARD_CUSTOM" => Some(Self::RewardCustom),
            "INFO_KEY_CREATED" => Some(Self::InfoKeyCreated),
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
    /// STAR token can be claimed.
    ClaimStar = 2,
    /// Key can be claimed.
    ClaimKey = 3,
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
            NotificationAction::ClaimStar => "CLAIM_STAR",
            NotificationAction::ClaimKey => "CLAIM_KEY",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "ACTION_UNSPECIFIED" => Some(Self::ActionUnspecified),
            "NO_OP" => Some(Self::NoOp),
            "CLAIM_STAR" => Some(Self::ClaimStar),
            "CLAIM_KEY" => Some(Self::ClaimKey),
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
    Badge = 1,
    Gift = 2,
    Alert = 3,
    Warning = 4,
    Sapceship = 5,
    Star = 6,
    Crown = 7,
    Dart = 8,
    KeyG = 9,
    KeyA = 10,
    KeyH = 11,
    KeyR = 12,
}
impl NotificationContentIcon {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            NotificationContentIcon::IconUnspecified => "ICON_UNSPECIFIED",
            NotificationContentIcon::Badge => "BADGE",
            NotificationContentIcon::Gift => "GIFT",
            NotificationContentIcon::Alert => "ALERT",
            NotificationContentIcon::Warning => "WARNING",
            NotificationContentIcon::Sapceship => "SAPCESHIP",
            NotificationContentIcon::Star => "STAR",
            NotificationContentIcon::Crown => "CROWN",
            NotificationContentIcon::Dart => "DART",
            NotificationContentIcon::KeyG => "KEY_G",
            NotificationContentIcon::KeyA => "KEY_A",
            NotificationContentIcon::KeyH => "KEY_H",
            NotificationContentIcon::KeyR => "KEY_R",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "ICON_UNSPECIFIED" => Some(Self::IconUnspecified),
            "BADGE" => Some(Self::Badge),
            "GIFT" => Some(Self::Gift),
            "ALERT" => Some(Self::Alert),
            "WARNING" => Some(Self::Warning),
            "SAPCESHIP" => Some(Self::Sapceship),
            "STAR" => Some(Self::Star),
            "CROWN" => Some(Self::Crown),
            "DART" => Some(Self::Dart),
            "KEY_G" => Some(Self::KeyG),
            "KEY_A" => Some(Self::KeyA),
            "KEY_H" => Some(Self::KeyH),
            "KEY_R" => Some(Self::KeyR),
            _ => None,
        }
    }
}
include!("ethereum.v1.notification.tonic.rs");
// @@protoc_insertion_point(module)
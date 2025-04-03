// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDailyPlayCountRequest {
    /// Format: users/{address}
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDailyPlayCountResponse {
    /// The daily play count of the user.
    #[prost(uint32, tag="1")]
    pub daily_play_count: u32,
    /// The daily play count of the user.
    #[prost(uint32, tag="2")]
    pub daily_play_count_quota: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClientMessage {
    #[prost(enumeration="ClientMessageType", tag="1")]
    pub msg_type: i32,
    #[prost(string, tag="2")]
    pub payload: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ServerMessage {
    #[prost(enumeration="ServerMessageType", tag="1")]
    pub msg_type: i32,
    #[prost(enumeration="ServerAckType", tag="2")]
    pub ack_type: i32,
    #[prost(string, tag="3")]
    pub payload: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ConnectServerPayload {
    #[prost(string, tag="1")]
    pub session_id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub game: ::core::option::Option<Game>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReconnectServerPayload {
    #[prost(string, tag="1")]
    pub session_id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub game: ::core::option::Option<Game>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EndGameServerPayload {
    #[prost(string, tag="1")]
    pub game_id: ::prost::alloc::string::String,
    #[prost(int32, tag="2")]
    pub score: i32,
    #[prost(float, tag="3")]
    pub blast_gold: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TakeStarClientPayload {
    #[prost(string, tag="1")]
    pub star_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TakeStarServerPayload {
    #[prost(string, tag="1")]
    pub star_id: ::prost::alloc::string::String,
    #[prost(int32, tag="2")]
    pub total_score: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TakeBlastGoldClientPayload {
    #[prost(string, tag="1")]
    pub blast_gold_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DestroyCapsuleClientPayload {
    #[prost(string, tag="1")]
    pub capsule_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DestroyMeteorClientPayload {
    #[prost(message, optional, tag="1")]
    pub position: ::core::option::Option<Position>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpceshipPosiitionClientPayload {
    #[prost(message, optional, tag="1")]
    pub position: ::core::option::Option<Position>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpaceshipEventClientPayload {
    #[prost(string, tag="1")]
    pub event: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct KeyboardEventClientPayload {
    #[prost(string, tag="1")]
    pub event: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ShootBulletClientPayload {
    #[prost(int32, tag="1")]
    pub remaining_bullets: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EmployBoostClientPayload {
    #[prost(int32, tag="1")]
    pub remaining_boosts: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct LifeStatusClientPayload {
    #[prost(int32, tag="1")]
    pub remaining_lives: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AlertSuspiciousUserClientPayload {
    #[prost(enumeration="SuspiciousReason", tag="1")]
    pub reason: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Star {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, optional, tag="2")]
    pub capsule_id: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
    #[prost(int32, tag="4")]
    pub score: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Capsule {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub position: ::core::option::Option<Position>,
    #[prost(enumeration="CapsuleRewardType", tag="3")]
    pub reward_type: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlastGold {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub capsule_id: ::prost::alloc::string::String,
    #[prost(float, tag="3")]
    pub amount: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Meteor {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub position: ::core::option::Option<Position>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Position {
    #[prost(float, tag="1")]
    pub x: f32,
    #[prost(float, tag="2")]
    pub y: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Map {
    #[prost(message, repeated, tag="1")]
    pub stars: ::prost::alloc::vec::Vec<Star>,
    #[prost(message, repeated, tag="2")]
    pub capsules: ::prost::alloc::vec::Vec<Capsule>,
    #[prost(message, repeated, tag="3")]
    pub blast_golds: ::prost::alloc::vec::Vec<BlastGold>,
    #[prost(message, repeated, tag="4")]
    pub meteors: ::prost::alloc::vec::Vec<Meteor>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Spaceship {
    #[prost(message, optional, tag="1")]
    pub position: ::core::option::Option<Position>,
    #[prost(int32, tag="2")]
    pub booster: i32,
    #[prost(int32, tag="3")]
    pub bullet: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Game {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub map: ::core::option::Option<Map>,
    #[prost(message, optional, tag="3")]
    pub spaceship: ::core::option::Option<Spaceship>,
    #[prost(int32, tag="4")]
    pub score: i32,
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="6")]
    pub start_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ClientMessageType {
    Unspecified = 0,
    ClientConnect = 1,
    /// DEPRECATED - Use CLIENT_TERMINATE instead for permanent disconnection
    ClientDisconnect = 2,
    /// Terminate the connection which means delete session permanently
    /// The client should send this message when the client wants to terminate the connection
    /// Disconnected connections other than this message will be considered as a temporary disconnection (soft delete) and can be reonnectable
    /// If want to reconnect, the client should connect with the same auth token that was used to create the session (CLIENT_CONNECT)
    ClientTerminate = 3,
    ClientStartGame = 20,
    ClientEndGame = 21,
    ClientTakeStar = 22,
    ClientTakeBlastGold = 23,
    ClientDestroyCapsule = 24,
    ClientDestroyMeteor = 25,
    ClientShootBullet = 26,
    ClientEmployBoost = 27,
    ClientSpaceshipPosition = 40,
    ClientSpaceshipEvent = 41,
    ClientKeyboardEvent = 42,
    ClientAlertSuspiciousUser = 60,
}
impl ClientMessageType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ClientMessageType::Unspecified => "CLIENT_MESSAGE_TYPE_UNSPECIFIED",
            ClientMessageType::ClientConnect => "CLIENT_CONNECT",
            ClientMessageType::ClientDisconnect => "CLIENT_DISCONNECT",
            ClientMessageType::ClientTerminate => "CLIENT_TERMINATE",
            ClientMessageType::ClientStartGame => "CLIENT_START_GAME",
            ClientMessageType::ClientEndGame => "CLIENT_END_GAME",
            ClientMessageType::ClientTakeStar => "CLIENT_TAKE_STAR",
            ClientMessageType::ClientTakeBlastGold => "CLIENT_TAKE_BLAST_GOLD",
            ClientMessageType::ClientDestroyCapsule => "CLIENT_DESTROY_CAPSULE",
            ClientMessageType::ClientDestroyMeteor => "CLIENT_DESTROY_METEOR",
            ClientMessageType::ClientShootBullet => "CLIENT_SHOOT_BULLET",
            ClientMessageType::ClientEmployBoost => "CLIENT_EMPLOY_BOOST",
            ClientMessageType::ClientSpaceshipPosition => "CLIENT_SPACESHIP_POSITION",
            ClientMessageType::ClientSpaceshipEvent => "CLIENT_SPACESHIP_EVENT",
            ClientMessageType::ClientKeyboardEvent => "CLIENT_KEYBOARD_EVENT",
            ClientMessageType::ClientAlertSuspiciousUser => "CLIENT_ALERT_SUSPICIOUS_USER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CLIENT_MESSAGE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "CLIENT_CONNECT" => Some(Self::ClientConnect),
            "CLIENT_DISCONNECT" => Some(Self::ClientDisconnect),
            "CLIENT_TERMINATE" => Some(Self::ClientTerminate),
            "CLIENT_START_GAME" => Some(Self::ClientStartGame),
            "CLIENT_END_GAME" => Some(Self::ClientEndGame),
            "CLIENT_TAKE_STAR" => Some(Self::ClientTakeStar),
            "CLIENT_TAKE_BLAST_GOLD" => Some(Self::ClientTakeBlastGold),
            "CLIENT_DESTROY_CAPSULE" => Some(Self::ClientDestroyCapsule),
            "CLIENT_DESTROY_METEOR" => Some(Self::ClientDestroyMeteor),
            "CLIENT_SHOOT_BULLET" => Some(Self::ClientShootBullet),
            "CLIENT_EMPLOY_BOOST" => Some(Self::ClientEmployBoost),
            "CLIENT_SPACESHIP_POSITION" => Some(Self::ClientSpaceshipPosition),
            "CLIENT_SPACESHIP_EVENT" => Some(Self::ClientSpaceshipEvent),
            "CLIENT_KEYBOARD_EVENT" => Some(Self::ClientKeyboardEvent),
            "CLIENT_ALERT_SUSPICIOUS_USER" => Some(Self::ClientAlertSuspiciousUser),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ServerMessageType {
    Unspecified = 0,
    ServerConnect = 1,
    ServerTerminate = 2,
    ServerReconnect = 3,
    ServerStartGame = 20,
    ServerEndGame = 21,
    ServerTakeStar = 22,
    ServerTakeBlastGold = 23,
    ServerDestroyCapsule = 24,
    ServerDestroyMeteor = 25,
    ServerShootBullet = 26,
    ServerEmployBoost = 27,
    ServerSpaceshipPosition = 40,
    ServerSpaceshipEvent = 41,
    ServerKeyboardEvent = 42,
    ServerAlertSuspiciousUser = 60,
}
impl ServerMessageType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ServerMessageType::Unspecified => "SERVER_MESSAGE_TYPE_UNSPECIFIED",
            ServerMessageType::ServerConnect => "SERVER_CONNECT",
            ServerMessageType::ServerTerminate => "SERVER_TERMINATE",
            ServerMessageType::ServerReconnect => "SERVER_RECONNECT",
            ServerMessageType::ServerStartGame => "SERVER_START_GAME",
            ServerMessageType::ServerEndGame => "SERVER_END_GAME",
            ServerMessageType::ServerTakeStar => "SERVER_TAKE_STAR",
            ServerMessageType::ServerTakeBlastGold => "SERVER_TAKE_BLAST_GOLD",
            ServerMessageType::ServerDestroyCapsule => "SERVER_DESTROY_CAPSULE",
            ServerMessageType::ServerDestroyMeteor => "SERVER_DESTROY_METEOR",
            ServerMessageType::ServerShootBullet => "SERVER_SHOOT_BULLET",
            ServerMessageType::ServerEmployBoost => "SERVER_EMPLOY_BOOST",
            ServerMessageType::ServerSpaceshipPosition => "SERVER_SPACESHIP_POSITION",
            ServerMessageType::ServerSpaceshipEvent => "SERVER_SPACESHIP_EVENT",
            ServerMessageType::ServerKeyboardEvent => "SERVER_KEYBOARD_EVENT",
            ServerMessageType::ServerAlertSuspiciousUser => "SERVER_ALERT_SUSPICIOUS_USER",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SERVER_MESSAGE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "SERVER_CONNECT" => Some(Self::ServerConnect),
            "SERVER_TERMINATE" => Some(Self::ServerTerminate),
            "SERVER_RECONNECT" => Some(Self::ServerReconnect),
            "SERVER_START_GAME" => Some(Self::ServerStartGame),
            "SERVER_END_GAME" => Some(Self::ServerEndGame),
            "SERVER_TAKE_STAR" => Some(Self::ServerTakeStar),
            "SERVER_TAKE_BLAST_GOLD" => Some(Self::ServerTakeBlastGold),
            "SERVER_DESTROY_CAPSULE" => Some(Self::ServerDestroyCapsule),
            "SERVER_DESTROY_METEOR" => Some(Self::ServerDestroyMeteor),
            "SERVER_SHOOT_BULLET" => Some(Self::ServerShootBullet),
            "SERVER_EMPLOY_BOOST" => Some(Self::ServerEmployBoost),
            "SERVER_SPACESHIP_POSITION" => Some(Self::ServerSpaceshipPosition),
            "SERVER_SPACESHIP_EVENT" => Some(Self::ServerSpaceshipEvent),
            "SERVER_KEYBOARD_EVENT" => Some(Self::ServerKeyboardEvent),
            "SERVER_ALERT_SUSPICIOUS_USER" => Some(Self::ServerAlertSuspiciousUser),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ServerAckType {
    ServerResponseTypeUnspecified = 0,
    /// Message sent to client when message from client is accepted
    Ack = 100,
    /// Message sent to client when message from client is rejected
    Nack = 200,
    ///
    NackUnauthenticated = 201,
    ///
    NackUnautorizaed = 202,
    ///
    NackSessionAlreadyExists = 203,
    ///
    NackDailyRoundExceeded = 204,
    ///
    NackBlastGoldNotAcquirable = 205,
    ///
    NackPlaytimeOut = 206,
    ///
    NackSybilUser = 207,
    ///
    NackSessionNotFound = 208,
    /// Message sent to client when internal server error occurs
    Err = 300,
}
impl ServerAckType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ServerAckType::ServerResponseTypeUnspecified => "SERVER_RESPONSE_TYPE_UNSPECIFIED",
            ServerAckType::Ack => "ACK",
            ServerAckType::Nack => "NACK",
            ServerAckType::NackUnauthenticated => "NACK_UNAUTHENTICATED",
            ServerAckType::NackUnautorizaed => "NACK_UNAUTORIZAED",
            ServerAckType::NackSessionAlreadyExists => "NACK_SESSION_ALREADY_EXISTS",
            ServerAckType::NackDailyRoundExceeded => "NACK_DAILY_ROUND_EXCEEDED",
            ServerAckType::NackBlastGoldNotAcquirable => "NACK_BLAST_GOLD_NOT_ACQUIRABLE",
            ServerAckType::NackPlaytimeOut => "NACK_PLAYTIME_OUT",
            ServerAckType::NackSybilUser => "NACK_SYBIL_USER",
            ServerAckType::NackSessionNotFound => "NACK_SESSION_NOT_FOUND",
            ServerAckType::Err => "ERR",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SERVER_RESPONSE_TYPE_UNSPECIFIED" => Some(Self::ServerResponseTypeUnspecified),
            "ACK" => Some(Self::Ack),
            "NACK" => Some(Self::Nack),
            "NACK_UNAUTHENTICATED" => Some(Self::NackUnauthenticated),
            "NACK_UNAUTORIZAED" => Some(Self::NackUnautorizaed),
            "NACK_SESSION_ALREADY_EXISTS" => Some(Self::NackSessionAlreadyExists),
            "NACK_DAILY_ROUND_EXCEEDED" => Some(Self::NackDailyRoundExceeded),
            "NACK_BLAST_GOLD_NOT_ACQUIRABLE" => Some(Self::NackBlastGoldNotAcquirable),
            "NACK_PLAYTIME_OUT" => Some(Self::NackPlaytimeOut),
            "NACK_SYBIL_USER" => Some(Self::NackSybilUser),
            "NACK_SESSION_NOT_FOUND" => Some(Self::NackSessionNotFound),
            "ERR" => Some(Self::Err),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum CapsuleRewardType {
    Unspecified = 0,
    CapsuleRewardStar = 1,
    CapsuleRewardBlastGold = 2,
}
impl CapsuleRewardType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            CapsuleRewardType::Unspecified => "CAPSULE_REWARD_TYPE_UNSPECIFIED",
            CapsuleRewardType::CapsuleRewardStar => "CAPSULE_REWARD_STAR",
            CapsuleRewardType::CapsuleRewardBlastGold => "CAPSULE_REWARD_BLAST_GOLD",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CAPSULE_REWARD_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "CAPSULE_REWARD_STAR" => Some(Self::CapsuleRewardStar),
            "CAPSULE_REWARD_BLAST_GOLD" => Some(Self::CapsuleRewardBlastGold),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SuspiciousReason {
    Unspecified = 0,
    DebugConsoleOpened = 1,
}
impl SuspiciousReason {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SuspiciousReason::Unspecified => "SUSPICIOUS_REASON_UNSPECIFIED",
            SuspiciousReason::DebugConsoleOpened => "SUSPICIOUS_REASON_DEBUG_CONSOLE_OPENED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SUSPICIOUS_REASON_UNSPECIFIED" => Some(Self::Unspecified),
            "SUSPICIOUS_REASON_DEBUG_CONSOLE_OPENED" => Some(Self::DebugConsoleOpened),
            _ => None,
        }
    }
}
include!("blast.v1.game.tonic.rs");
// @@protoc_insertion_point(module)
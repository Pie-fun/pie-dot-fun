// @generated
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
pub struct TakeStarClientPayload {
    #[prost(message, optional, tag="1")]
    pub star: ::core::option::Option<Star>,
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
pub struct DestroyObjectClientPayload {
    #[prost(message, optional, tag="1")]
    pub position: ::core::option::Option<Position>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Star {
    #[prost(string, tag="1")]
    pub id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub position: ::core::option::Option<Position>,
    #[prost(int32, tag="3")]
    pub score: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Capsule {
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
    /// UUID of the game. Used to identify the game in the api server which means new game score will be created using this id.
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
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ClientMessageType {
    Unspecified = 0,
    ClientStartGame = 1,
    ClientEndGame = 2,
    ClientTakeStar = 3,
    ClientDestroyObject = 4,
    ClientSpaceshipPosition = 5,
    ClientSpaceshipEvent = 6,
    ClientKeyboardEvent = 7,
    ClientDiconnect = 8,
}
impl ClientMessageType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ClientMessageType::Unspecified => "CLIENT_MESSAGE_TYPE_UNSPECIFIED",
            ClientMessageType::ClientStartGame => "CLIENT_START_GAME",
            ClientMessageType::ClientEndGame => "CLIENT_END_GAME",
            ClientMessageType::ClientTakeStar => "CLIENT_TAKE_STAR",
            ClientMessageType::ClientDestroyObject => "CLIENT_DESTROY_OBJECT",
            ClientMessageType::ClientSpaceshipPosition => "CLIENT_SPACESHIP_POSITION",
            ClientMessageType::ClientSpaceshipEvent => "CLIENT_SPACESHIP_EVENT",
            ClientMessageType::ClientKeyboardEvent => "CLIENT_KEYBOARD_EVENT",
            ClientMessageType::ClientDiconnect => "CLIENT_DICONNECT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CLIENT_MESSAGE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "CLIENT_START_GAME" => Some(Self::ClientStartGame),
            "CLIENT_END_GAME" => Some(Self::ClientEndGame),
            "CLIENT_TAKE_STAR" => Some(Self::ClientTakeStar),
            "CLIENT_DESTROY_OBJECT" => Some(Self::ClientDestroyObject),
            "CLIENT_SPACESHIP_POSITION" => Some(Self::ClientSpaceshipPosition),
            "CLIENT_SPACESHIP_EVENT" => Some(Self::ClientSpaceshipEvent),
            "CLIENT_KEYBOARD_EVENT" => Some(Self::ClientKeyboardEvent),
            "CLIENT_DICONNECT" => Some(Self::ClientDiconnect),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ServerMessageType {
    Unspecified = 0,
    ServerConnect = 1,
    ServerDisconnect = 2,
    ServerStartGame = 3,
    ServerEndGame = 4,
    ServerTakeStar = 5,
    ServerDestroyObject = 6,
    ServerSpaceshipPosition = 7,
    ServerSpaceshipEvent = 8,
    ServerKeyboardEvent = 9,
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
            ServerMessageType::ServerDisconnect => "SERVER_DISCONNECT",
            ServerMessageType::ServerStartGame => "SERVER_START_GAME",
            ServerMessageType::ServerEndGame => "SERVER_END_GAME",
            ServerMessageType::ServerTakeStar => "SERVER_TAKE_STAR",
            ServerMessageType::ServerDestroyObject => "SERVER_DESTROY_OBJECT",
            ServerMessageType::ServerSpaceshipPosition => "SERVER_SPACESHIP_POSITION",
            ServerMessageType::ServerSpaceshipEvent => "SERVER_SPACESHIP_EVENT",
            ServerMessageType::ServerKeyboardEvent => "SERVER_KEYBOARD_EVENT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SERVER_MESSAGE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "SERVER_CONNECT" => Some(Self::ServerConnect),
            "SERVER_DISCONNECT" => Some(Self::ServerDisconnect),
            "SERVER_START_GAME" => Some(Self::ServerStartGame),
            "SERVER_END_GAME" => Some(Self::ServerEndGame),
            "SERVER_TAKE_STAR" => Some(Self::ServerTakeStar),
            "SERVER_DESTROY_OBJECT" => Some(Self::ServerDestroyObject),
            "SERVER_SPACESHIP_POSITION" => Some(Self::ServerSpaceshipPosition),
            "SERVER_SPACESHIP_EVENT" => Some(Self::ServerSpaceshipEvent),
            "SERVER_KEYBOARD_EVENT" => Some(Self::ServerKeyboardEvent),
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
    NackSessionAlreadyExists = 202,
    ///
    NackDailyRoundExceeded = 203,
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
            ServerAckType::NackSessionAlreadyExists => "NACK_SESSION_ALREADY_EXISTS",
            ServerAckType::NackDailyRoundExceeded => "NACK_DAILY_ROUND_EXCEEDED",
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
            "NACK_SESSION_ALREADY_EXISTS" => Some(Self::NackSessionAlreadyExists),
            "NACK_DAILY_ROUND_EXCEEDED" => Some(Self::NackDailyRoundExceeded),
            "ERR" => Some(Self::Err),
            _ => None,
        }
    }
}
// @@protoc_insertion_point(module)

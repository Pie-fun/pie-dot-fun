// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MintProtoShipUniverse1Request {
    #[prost(string, tag="1")]
    pub token_contract: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MintProtoShipUniverse1Response {
    #[prost(message, optional, tag="1")]
    pub transaction: ::core::option::Option<Transaction>,
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BurnProtoShipUniverse1Request {
    #[prost(string, tag="1")]
    pub token_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpgradeToOwnerShipUniverse1Request {
    #[prost(string, tag="1")]
    pub token_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transaction {
    #[prost(string, tag="1")]
    pub hash: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(uint64, tag="3")]
    pub nonce: u64,
    #[prost(string, tag="4")]
    pub gas_price: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="5")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum EventType {
    /// default value. this value is unused.
    Unspecified = 0,
    MintSpaceship = 1,
    BurnSpaceship = 2,
}
impl EventType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            EventType::Unspecified => "EVENT_TYPE_UNSPECIFIED",
            EventType::MintSpaceship => "MINT_SPACESHIP",
            EventType::BurnSpaceship => "BURN_SPACESHIP",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "EVENT_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "MINT_SPACESHIP" => Some(Self::MintSpaceship),
            "BURN_SPACESHIP" => Some(Self::BurnSpaceship),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryReceiptRequest {
    #[prost(string, tag="1")]
    pub tx_hash: ::prost::alloc::string::String,
    ///
    /// e.g. "60s", "5m", "1h30m"
    ///
    /// The amount of time to wait for the transaction to be mined.
    ///
    /// If the transaction is not mined within this time, server will return 504 Gateway Timeout(DEADLINE_EXCEEDED).
    ///
    /// The default is 5 minutes.
    ///
    /// The maximum allowed timeout is 30 minutes. If the value is greater than 30 minutes, server will automatically set it to 30 minutes.
    ///
    /// If longer timeout is needed, please retry after the previous request times out.
    #[prost(string, tag="2")]
    pub timeout: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryQueryTransactionCountRequest {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub block_number: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryQueryTransactionCountResponse {
    #[prost(uint64, tag="1")]
    pub count: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDelegateCashRequest {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(enumeration="super::outpost::ChainType", repeated, packed="false", tag="2")]
    pub chains: ::prost::alloc::vec::Vec<i32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDelegateCashResponse {
    #[prost(message, repeated, tag="1")]
    pub delegates: ::prost::alloc::vec::Vec<Delegate>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Delegate {
    #[prost(enumeration="DelegationType", tag="1")]
    pub r#type: i32,
    #[prost(string, tag="2")]
    pub from: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub to: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub contract: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub token_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Receipt {
    #[prost(enumeration="ReceiptStatus", tag="1")]
    pub status: i32,
    #[prost(string, tag="2")]
    pub transaction_hash: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub block_hash: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub block_number: ::prost::alloc::string::String,
    #[prost(uint64, tag="5")]
    pub cumulative_gas_used: u64,
    #[prost(uint64, tag="6")]
    pub gas_used: u64,
    #[prost(string, tag="7")]
    pub contract_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MintScoreEvent {
    #[prost(enumeration="mint_score_event::ScoreCategory", optional, tag="1")]
    pub category: ::core::option::Option<i32>,
    #[prost(uint64, optional, tag="2")]
    pub score: ::core::option::Option<u64>,
    #[prost(string, optional, tag="3")]
    pub address: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag="4")]
    pub token_id: ::core::option::Option<::prost::alloc::string::String>,
}
/// Nested message and enum types in `MintScoreEvent`.
pub mod mint_score_event {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum ScoreCategory {
        Unspecified = 0,
        SinglePlayer = 1,
        MultiPlayer = 2,
    }
    impl ScoreCategory {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                ScoreCategory::Unspecified => "SCORE_CATEGORY_UNSPECIFIED",
                ScoreCategory::SinglePlayer => "SINGLE_PLAYER",
                ScoreCategory::MultiPlayer => "MULTI_PLAYER",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "SCORE_CATEGORY_UNSPECIFIED" => Some(Self::Unspecified),
                "SINGLE_PLAYER" => Some(Self::SinglePlayer),
                "MULTI_PLAYER" => Some(Self::MultiPlayer),
                _ => None,
            }
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeployTbaAndMintProtoShipEvent {
    #[prost(string, tag="1")]
    pub profile_tba: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub token_id: ::prost::alloc::string::String,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum DelegationType {
    Unspecified = 0,
    All = 1,
    Contract = 2,
    Erc721 = 3,
}
impl DelegationType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            DelegationType::Unspecified => "DELEGATION_TYPE_UNSPECIFIED",
            DelegationType::All => "DELEGATION_TYPE_ALL",
            DelegationType::Contract => "DELEGATION_TYPE_CONTRACT",
            DelegationType::Erc721 => "DELEGATION_TYPE_ERC721",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "DELEGATION_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "DELEGATION_TYPE_ALL" => Some(Self::All),
            "DELEGATION_TYPE_CONTRACT" => Some(Self::Contract),
            "DELEGATION_TYPE_ERC721" => Some(Self::Erc721),
            _ => None,
        }
    }
}
/// The state of the transaction receipt.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ReceiptStatus {
    /// RECEIPT_STATUS_FAILED is the status code of a transaction if execution failed.
    Failed = 0,
    /// RECEIPT_STATUS_SUCCESSFUL is the status code of a transaction if execution succeeded.
    Successful = 1,
}
impl ReceiptStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ReceiptStatus::Failed => "RECEIPT_STATUS_FAILED",
            ReceiptStatus::Successful => "RECEIPT_STATUS_SUCCESSFUL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "RECEIPT_STATUS_FAILED" => Some(Self::Failed),
            "RECEIPT_STATUS_SUCCESSFUL" => Some(Self::Successful),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignWKeyMintRequest {
    #[prost(string, tag="1")]
    pub eoa_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignKeyMintRequest {
    /// This field will be injected from the auth token by Gateway, which means web client do not need to pass this field.
    #[prost(string, optional, tag="1")]
    pub profile_contract_address: ::core::option::Option<::prost::alloc::string::String>,
    /// This field will be injected from the auth token by Gateway, which means web client do not need to pass this field.
    #[prost(string, optional, tag="2")]
    pub profile_token_id: ::core::option::Option<::prost::alloc::string::String>,
    /// This field will be injected from the auth token by Gateway, which means web client do not need to pass this field.
    #[prost(string, optional, tag="3")]
    pub spaceship_token_id: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, tag="4")]
    pub key_token_id: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub eth_contribution: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignScoreMintRequest {
    #[prost(string, tag="1")]
    pub profile_address: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub score_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignMessageRequest {
    #[prost(string, tag="1")]
    pub message: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignatureResponse {
    #[prost(string, tag="1")]
    pub signature: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub message: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignatureTypedResponse {
    #[prost(string, tag="1")]
    pub signature: ::prost::alloc::string::String,
    #[prost(map="string, string", tag="2")]
    pub message: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
}
include!("ethereum.v1.chain.tonic.rs");
// @@protoc_insertion_point(module)
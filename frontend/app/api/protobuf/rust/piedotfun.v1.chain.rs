// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RebalanceCommand {
    #[prost(oneof="rebalance_command::Strategy", tags="1, 2, 3")]
    pub strategy: ::core::option::Option<rebalance_command::Strategy>,
}
/// Nested message and enum types in `RebalanceCommand`.
pub mod rebalance_command {
    /// Equal Market Cap Weight Strategy
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct EqualMarketCapWeight {
    }
    /// Manual Market Cap Weight Strategy
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct ManualMarketCapWeight {
        /// sum of weights should be 1
        #[prost(message, repeated, tag="1")]
        pub requests: ::prost::alloc::vec::Vec<manual_market_cap_weight::Request>,
    }
    /// Nested message and enum types in `ManualMarketCapWeight`.
    pub mod manual_market_cap_weight {
        #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
        pub struct Request {
            #[prost(string, tag="1")]
            pub fungible_token: ::prost::alloc::string::String,
            /// Weigh limits: 0 - 1.0
            #[prost(double, tag="2")]
            pub weight: f64,
        }
    }
    /// Trade Strategy
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Trade {
        #[prost(message, repeated, tag="1")]
        pub requests: ::prost::alloc::vec::Vec<trade::Request>,
    }
    /// Nested message and enum types in `Trade`.
    pub mod trade {
        #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
        pub struct Request {
            #[prost(string, tag="1")]
            pub fungible_token: ::prost::alloc::string::String,
            #[prost(bool, tag="2")]
            pub is_buy: bool,
            #[prost(string, tag="3")]
            pub formatted_amount: ::prost::alloc::string::String,
        }
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Strategy {
        #[prost(message, tag="1")]
        EqualWeight(EqualMarketCapWeight),
        #[prost(message, tag="2")]
        ManualWeight(ManualMarketCapWeight),
        #[prost(message, tag="3")]
        Trade(Trade),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RebalanceBasketTokenRequest {
    #[prost(string, tag="1")]
    pub basket_token: ::prost::alloc::string::String,
    /// if false, it will perform a dry run.
    #[prost(bool, tag="2")]
    pub execute: bool,
    #[prost(message, optional, tag="3")]
    pub command: ::core::option::Option<RebalanceCommand>,
    #[prost(message, optional, tag="4")]
    pub execution_option: ::core::option::Option<ExecutionOption>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RebalanceBasketTokenResponse {
    #[prost(string, tag="1")]
    pub result_html: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExecutionOption {
    #[prost(double, tag="1")]
    pub sell_ratio_per_iteration: f64,
    #[prost(double, tag="2")]
    pub slippage: f64,
    /// Exit condition
    #[prost(int32, tag="3")]
    pub max_iteration_count: i32,
    #[prost(double, tag="4")]
    pub exit_remaining_execution_value: f64,
    #[prost(double, tag="5")]
    pub exit_remaining_execution_value_ratio: f64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFungibleTokenDecimalsRequest {
    #[prost(string, tag="1")]
    pub fungible_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFungibleTokenDecimalsResponse {
    #[prost(int32, tag="1")]
    pub decimals: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFungibleTokenMetadataRequest {
    #[prost(string, tag="1")]
    pub fungible_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFungibleTokenMetadataResponse {
    #[prost(string, tag="1")]
    pub uri: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub metadata: ::core::option::Option<Metadata>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Metadata {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub image: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub one_liner: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub website: ::prost::alloc::string::String,
    #[prost(string, tag="7")]
    pub email: ::prost::alloc::string::String,
    #[prost(string, tag="8")]
    pub twitter: ::prost::alloc::string::String,
    #[prost(string, tag="9")]
    pub telegram: ::prost::alloc::string::String,
    #[prost(string, tag="10")]
    pub discord: ::prost::alloc::string::String,
}
/// BasketComponent represents a component of a basket with its mint and ratio
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketComponent {
    /// solana.PublicKey
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub ratio: ::prost::alloc::string::String,
}
/// CreateBasketEvent represents the event of creating a new basket
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateBasketEvent {
    #[prost(uint64, tag="1")]
    pub basket_id: u64,
    #[prost(string, tag="2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub uri: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="5")]
    pub creator: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="6")]
    pub mint: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="7")]
    pub components: ::prost::alloc::vec::Vec<BasketComponent>,
}
/// StartRebalancingEvent represents the event of starting basket rebalancing
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StartRebalancingEvent {
    #[prost(uint64, tag="1")]
    pub basket_id: u64,
    /// solana.PublicKey
    #[prost(string, tag="2")]
    pub mint: ::prost::alloc::string::String,
    #[prost(int64, tag="3")]
    pub timestamp: i64,
}
/// StopRebalancingEvent represents the event of stopping basket rebalancing
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StopRebalancingEvent {
    #[prost(uint64, tag="1")]
    pub basket_id: u64,
    /// solana.PublicKey
    #[prost(string, tag="2")]
    pub mint: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="3")]
    pub components: ::prost::alloc::vec::Vec<BasketComponent>,
    #[prost(int64, tag="4")]
    pub timestamp: i64,
}
/// RedeemBasketTokenEvent represents the event of redeeming basket tokens
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedeemBasketTokenEvent {
    #[prost(uint64, tag="1")]
    pub basket_id: u64,
    /// solana.PublicKey
    #[prost(string, tag="2")]
    pub user: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="3")]
    pub basket_mint: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub amount: u64,
}
/// MintBasketTokenEvent represents the event of minting basket tokens
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MintBasketTokenEvent {
    #[prost(uint64, tag="1")]
    pub basket_id: u64,
    /// solana.PublicKey
    #[prost(string, tag="2")]
    pub user: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="3")]
    pub basket_mint: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub amount: u64,
}
/// TransferBasketEvent represents the event of transferring basket tokens
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferBasketEvent {
    /// solana.PublicKey
    #[prost(string, tag="1")]
    pub basket_mint: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="2")]
    pub from: ::prost::alloc::string::String,
    /// solana.PublicKey
    #[prost(string, tag="3")]
    pub to: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub amount: u64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BasketEventExtraInfoKey {
    BasketExtraInfoKeyUnspecified = 0,
    BasketExtraInfoKeyValueUsdc = 1,
    BasketExtraInfoKeyValueSol = 2,
}
impl BasketEventExtraInfoKey {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BasketEventExtraInfoKey::BasketExtraInfoKeyUnspecified => "BASKET_EXTRA_INFO_KEY_UNSPECIFIED",
            BasketEventExtraInfoKey::BasketExtraInfoKeyValueUsdc => "BASKET_EXTRA_INFO_KEY_VALUE_USDC",
            BasketEventExtraInfoKey::BasketExtraInfoKeyValueSol => "BASKET_EXTRA_INFO_KEY_VALUE_SOL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "BASKET_EXTRA_INFO_KEY_UNSPECIFIED" => Some(Self::BasketExtraInfoKeyUnspecified),
            "BASKET_EXTRA_INFO_KEY_VALUE_USDC" => Some(Self::BasketExtraInfoKeyValueUsdc),
            "BASKET_EXTRA_INFO_KEY_VALUE_SOL" => Some(Self::BasketExtraInfoKeyValueSol),
            _ => None,
        }
    }
}
include!("piedotfun.v1.chain.tonic.rs");
// @@protoc_insertion_point(module)
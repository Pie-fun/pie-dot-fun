// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Quantity {
    #[prost(string, tag="1")]
    pub formatted_amount: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub raw_amount: ::prost::alloc::string::String,
    #[prost(uint32, tag="3")]
    pub decimals: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Money {
    #[prost(enumeration="Currency", tag="1")]
    pub currency: i32,
    #[prost(string, tag="2")]
    pub formatted_amount: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub raw_amount: ::prost::alloc::string::String,
    #[prost(uint32, tag="4")]
    pub decimals: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Percentage {
    #[prost(double, tag="1")]
    pub value: f64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PnLsByPeriod {
    /// map from period to PnL
    #[prost(map="string, message", tag="1")]
    pub pnls: ::std::collections::HashMap<::prost::alloc::string::String, PnL>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PnL {
    #[prost(message, optional, tag="1")]
    pub nominal_value: ::core::option::Option<Money>,
    #[prost(message, optional, tag="2")]
    pub percentage_change: ::core::option::Option<Percentage>,
    #[prost(enumeration="PnLPeriod", tag="3")]
    pub period: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PriceChange {
    #[prost(message, optional, tag="1")]
    pub nominal_value: ::core::option::Option<Money>,
    #[prost(message, optional, tag="2")]
    pub percentage_change: ::core::option::Option<Percentage>,
    #[prost(enumeration="PriceChangePeriod", tag="3")]
    pub period: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PriceChangesByPeriod {
    /// PriceChangePeriod enum sring to PriceChange
    #[prost(map="string, message", tag="1")]
    pub price_changes: ::std::collections::HashMap<::prost::alloc::string::String, PriceChange>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Sns {
    #[prost(enumeration="sns::SnsType", tag="1")]
    pub r#type: i32,
    #[prost(string, tag="3")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub profile_url: ::prost::alloc::string::String,
}
/// Nested message and enum types in `SNS`.
pub mod sns {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum SnsType {
        Unspecified = 0,
        Email = 1,
        Google = 2,
        Twitter = 3,
    }
    impl SnsType {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                SnsType::Unspecified => "SNS_TYPE_UNSPECIFIED",
                SnsType::Email => "EMAIL",
                SnsType::Google => "GOOGLE",
                SnsType::Twitter => "TWITTER",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "SNS_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
                "EMAIL" => Some(Self::Email),
                "GOOGLE" => Some(Self::Google),
                "TWITTER" => Some(Self::Twitter),
                _ => None,
            }
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ChainType {
    /// Unspecified blockchain type.
    ChainUnspecified = 0,
    /// Solana Mainnet blockchain.
    Solana = 1,
    /// Solana Testnet blockchain.
    SolanaTestnet = 1001,
    /// Solana Devnet blockchain.
    SolanaDevnet = 2001,
    Ethereum = 2,
    EthereumSepolia = 1002,
    Base = 3,
    BaseSepolia = 1003,
}
impl ChainType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ChainType::ChainUnspecified => "CHAIN_UNSPECIFIED",
            ChainType::Solana => "SOLANA",
            ChainType::SolanaTestnet => "SOLANA_TESTNET",
            ChainType::SolanaDevnet => "SOLANA_DEVNET",
            ChainType::Ethereum => "ETHEREUM",
            ChainType::EthereumSepolia => "ETHEREUM_SEPOLIA",
            ChainType::Base => "BASE",
            ChainType::BaseSepolia => "BASE_SEPOLIA",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CHAIN_UNSPECIFIED" => Some(Self::ChainUnspecified),
            "SOLANA" => Some(Self::Solana),
            "SOLANA_TESTNET" => Some(Self::SolanaTestnet),
            "SOLANA_DEVNET" => Some(Self::SolanaDevnet),
            "ETHEREUM" => Some(Self::Ethereum),
            "ETHEREUM_SEPOLIA" => Some(Self::EthereumSepolia),
            "BASE" => Some(Self::Base),
            "BASE_SEPOLIA" => Some(Self::BaseSepolia),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum VmType {
    /// Unspecified VM type.
    VmUnspecified = 0,
    /// Solana Virtual Machine.
    Svm = 1,
    /// Ethereum Virtual Machine.
    Evm = 2,
}
impl VmType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            VmType::VmUnspecified => "VM_UNSPECIFIED",
            VmType::Svm => "SVM",
            VmType::Evm => "EVM",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "VM_UNSPECIFIED" => Some(Self::VmUnspecified),
            "SVM" => Some(Self::Svm),
            "EVM" => Some(Self::Evm),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum Currency {
    Unspecified = 0,
    Sol = 1,
    Usdc = 2,
    Eth = 3,
}
impl Currency {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Currency::Unspecified => "CURRENCY_UNSPECIFIED",
            Currency::Sol => "CURRENCY_SOL",
            Currency::Usdc => "CURRENCY_USDC",
            Currency::Eth => "CURRENCY_ETH",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CURRENCY_UNSPECIFIED" => Some(Self::Unspecified),
            "CURRENCY_SOL" => Some(Self::Sol),
            "CURRENCY_USDC" => Some(Self::Usdc),
            "CURRENCY_ETH" => Some(Self::Eth),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PnLPeriod {
    PnlPeriodUnspecified = 0,
    PnlPeriod1Hour = 1,
    PnlPeriod24Hour = 2,
    PnlPeriodAllTime = 5,
}
impl PnLPeriod {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PnLPeriod::PnlPeriodUnspecified => "PNL_PERIOD_UNSPECIFIED",
            PnLPeriod::PnlPeriod1Hour => "PNL_PERIOD_1_HOUR",
            PnLPeriod::PnlPeriod24Hour => "PNL_PERIOD_24_HOUR",
            PnLPeriod::PnlPeriodAllTime => "PNL_PERIOD_ALL_TIME",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PNL_PERIOD_UNSPECIFIED" => Some(Self::PnlPeriodUnspecified),
            "PNL_PERIOD_1_HOUR" => Some(Self::PnlPeriod1Hour),
            "PNL_PERIOD_24_HOUR" => Some(Self::PnlPeriod24Hour),
            "PNL_PERIOD_ALL_TIME" => Some(Self::PnlPeriodAllTime),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PriceChangePeriod {
    Unspecified = 0,
    PriceChangePeriod1Hour = 1,
    PriceChangePeriod24Hour = 2,
    PriceChangePeriod7Day = 3,
    PriceChangePeriod30Day = 4,
    AllTime = 5,
}
impl PriceChangePeriod {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PriceChangePeriod::Unspecified => "PRICE_CHANGE_PERIOD_UNSPECIFIED",
            PriceChangePeriod::PriceChangePeriod1Hour => "PRICE_CHANGE_PERIOD_1_HOUR",
            PriceChangePeriod::PriceChangePeriod24Hour => "PRICE_CHANGE_PERIOD_24_HOUR",
            PriceChangePeriod::PriceChangePeriod7Day => "PRICE_CHANGE_PERIOD_7_DAY",
            PriceChangePeriod::PriceChangePeriod30Day => "PRICE_CHANGE_PERIOD_30_DAY",
            PriceChangePeriod::AllTime => "PRICE_CHANGE_PERIOD_ALL_TIME",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PRICE_CHANGE_PERIOD_UNSPECIFIED" => Some(Self::Unspecified),
            "PRICE_CHANGE_PERIOD_1_HOUR" => Some(Self::PriceChangePeriod1Hour),
            "PRICE_CHANGE_PERIOD_24_HOUR" => Some(Self::PriceChangePeriod24Hour),
            "PRICE_CHANGE_PERIOD_7_DAY" => Some(Self::PriceChangePeriod7Day),
            "PRICE_CHANGE_PERIOD_30_DAY" => Some(Self::PriceChangePeriod30Day),
            "PRICE_CHANGE_PERIOD_ALL_TIME" => Some(Self::AllTime),
            _ => None,
        }
    }
}
/// BasketTokenMarket contains the market data for a basket token.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketTokenMarket {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub basket_token: ::prost::alloc::string::String,
    /// Native token symbol of the chain the basket-token belongs to.
    /// Not dollar(USDT, USDC), 
    /// and the prices and market cap fields will display dollar values together.
    #[prost(enumeration="Currency", tag="3")]
    pub native_currency: i32,
    // Key is the currency enum string, 
    // value is the INAV(Indicated Net Asset Value) with the currency.

    #[prost(map="string, message", tag="5")]
    pub values: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// Key is the currency enum string, 
    /// value is the market cap with the currency.
    #[prost(map="string, message", tag="6")]
    pub market_caps: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// Key is the currency enum string,
    /// value is the INAV changes with the currency.
    /// {
    ///    "CURRENCY_USDC": {
    ///      "PRICE_CHANGE_PERIOD_1_HOUR": {
    ///        "nominal_value": {
    ///          "currency": "CURRENCY_USDC",
    ///          "amount": 0.0001
    ///        },
    ///        "percentage_change": {
    ///          "value": 0.0001
    ///        },
    ///        "period": "PRICE_CHANGE_PERIOD_1_HOUR"
    ///      },
    ///      "CURRENTCY_SOL": { ... }
    /// }
    /// Support Periods
    /// * PRICE_CHANGE_PERIOD_1_HOUR
    /// * PRICE_CHANGE_PERIOD_24_HOUR
    /// * PRICE_CHANGE_PERIOD_7_DAY
    /// * PRICE_CHANGE_PERIOD_30_DAY
    /// * PRICE_CHANGE_PERIOD_ALL_TIME
    #[prost(map="string, message", tag="7")]
    pub value_changes: ::std::collections::HashMap<::prost::alloc::string::String, PriceChangesByPeriod>,
    /// Percentage of lowest after the previous highest.
    /// {(`previous highest` - `lowest` after `previous highest`) / `previous highest`} * 100
    #[prost(message, optional, tag="8")]
    pub maximum_draw_down: ::core::option::Option<Percentage>,
    /// Current NAV(Net Asset Value) per BasketToken.
    #[prost(message, optional, tag="9")]
    pub value: ::core::option::Option<Money>,
    /// Market cap is based on the current NAV(Net Asset Value) per BasketToken.
    #[prost(message, optional, tag="10")]
    pub market_cap: ::core::option::Option<Money>,
    /// Example
    /// {
    ///    "PRICE_CHANGE_PERIOD_1_HOUR": {
    ///        "nominal_value": {
    ///            "currency": "CURRENCY_USDC",
    ///            "amount": 0.0001
    ///        },
    ///        "percentage_change": {
    ///            "value": 0.0001
    ///        },
    ///        "period": "PRICE_CHANGE_PERIOD_1_HOUR"
    ///    },
    ///    "PRICE_CHANGE_PERIOD_24_HOUR": {...},
    ///    ...
    /// }
    /// Support Periods
    /// * PRICE_CHANGE_PERIOD_1_HOUR
    /// * PRICE_CHANGE_PERIOD_24_HOUR
    /// * PRICE_CHANGE_PERIOD_7_DAY
    /// * PRICE_CHANGE_PERIOD_30_DAY
    /// * PRICE_CHANGE_PERIOD_ALL_TIME
    #[prost(message, optional, tag="11")]
    pub value_change: ::core::option::Option<PriceChangesByPeriod>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateBasketTokenMarketRequest {
    /// The basket token market to create.
    #[prost(message, optional, tag="1")]
    pub basket_token_market: ::core::option::Option<BasketTokenMarket>,
    /// display_name
    #[prost(string, tag="2")]
    pub display_name: ::prost::alloc::string::String,
    /// Symbol
    #[prost(string, tag="3")]
    pub symbol: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CustomCreateBasketTokenMarketRequest {
    /// The basket token market to create.
    #[prost(message, optional, tag="1")]
    pub basket_token_market: ::core::option::Option<BasketTokenMarket>,
    #[prost(message, repeated, tag="2")]
    pub components: ::prost::alloc::vec::Vec<custom_create_basket_token_market_request::Component>,
    /// display_name
    #[prost(string, tag="3")]
    pub display_name: ::prost::alloc::string::String,
    /// Symbol
    #[prost(string, tag="4")]
    pub symbol: ::prost::alloc::string::String,
}
/// Nested message and enum types in `CustomCreateBasketTokenMarketRequest`.
pub mod custom_create_basket_token_market_request {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Component {
        /// The name of the fungible token.
        /// Format : "fungibleTokens/{chain}/{token_address}"
        #[prost(string, tag="1")]
        pub fungible_token: ::prost::alloc::string::String,
        /// Number of component token per one BasketToken.
        #[prost(message, optional, tag="2")]
        pub quantity: ::core::option::Option<super::Quantity>,
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketTokenMarketRequest {
    /// The name of the market  to retrieve.
    /// Format : "basketTokens/{chain}/{token_address}/market"
    #[prost(string, tag="1")]
    pub basket_token_market: ::prost::alloc::string::String,
    /// Display the price in this currency. Default is USD.
    #[prost(enumeration="Currency", tag="2")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokensMarketsRequest {
    /// If unspecified, at most 50 books will be returned.
    /// The maximum value is 1000; values above 1000 will be coerced to 1000.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    ///
    /// Examples
    /// * name="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9/market"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// One or more fields to compare and use to sort the output.
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * 
    ///
    /// Examples
    /// * 
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
    /// Display the price in this currency. Default is USD.
    #[prost(enumeration="Currency", tag="5")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokensMarketsResponse {
    #[prost(message, repeated, tag="1")]
    pub basket_token_markets: ::prost::alloc::vec::Vec<BasketTokenMarket>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBasketTokenMarketComponentsRequest {
    /// The name of the market to update.
    /// Format : "basketTokens/{chain}/{token_address}/market"
    #[prost(string, tag="1")]
    pub basket_token_market: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="2")]
    pub components: ::prost::alloc::vec::Vec<update_basket_token_market_components_request::Component>,
    /// The block number to update the components.
    #[prost(uint64, tag="3")]
    pub update_block_number: u64,
}
/// Nested message and enum types in `UpdateBasketTokenMarketComponentsRequest`.
pub mod update_basket_token_market_components_request {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Component {
        /// The name of the fungible token.
        /// Format : "fungibleTokens/{chain}/{token_address}"
        #[prost(string, tag="1")]
        pub fungible_token: ::prost::alloc::string::String,
        /// Number of component token per one BasketToken.
        #[prost(message, optional, tag="2")]
        pub quantity: ::core::option::Option<super::Quantity>,
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBasketTokenMarketComponentsResponse {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokenTicksRequest {
    /// Format : "basketTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub parent: ::prost::alloc::string::String,
    /// If not set time, the current time will be used.
    #[prost(message, optional, tag="2")]
    pub start_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="3")]
    pub end_time: ::core::option::Option<::prost_types::Timestamp>,
    /// default size: 200. Max size: 1000
    #[prost(int32, optional, tag="4")]
    pub size: ::core::option::Option<i32>,
    /// Default is USD.
    #[prost(enumeration="Currency", tag="5")]
    pub currency: i32,
    #[prost(enumeration="TickInterval", tag="6")]
    pub interval: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokenTicksResponse {
    #[prost(message, repeated, tag="1")]
    pub ticks: ::prost::alloc::vec::Vec<Tick>,
    #[prost(enumeration="Currency", tag="2")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Tick {
    #[prost(message, optional, tag="1")]
    pub open_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(double, tag="2")]
    pub open: f64,
    #[prost(double, tag="3")]
    pub high: f64,
    #[prost(double, tag="4")]
    pub low: f64,
    #[prost(double, tag="5")]
    pub close: f64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TickInterval {
    IntervalUnspecified = 0,
    Interval1Second = 1,
    Interval1Minute = 2,
    Interval15Minutes = 3,
    Interval1Hour = 4,
    Interval4Hour = 5,
    Interval1Day = 6,
}
impl TickInterval {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            TickInterval::IntervalUnspecified => "INTERVAL_UNSPECIFIED",
            TickInterval::Interval1Second => "INTERVAL_1_SECOND",
            TickInterval::Interval1Minute => "INTERVAL_1_MINUTE",
            TickInterval::Interval15Minutes => "INTERVAL_15_MINUTES",
            TickInterval::Interval1Hour => "INTERVAL_1_HOUR",
            TickInterval::Interval4Hour => "INTERVAL_4_HOUR",
            TickInterval::Interval1Day => "INTERVAL_1_DAY",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "INTERVAL_UNSPECIFIED" => Some(Self::IntervalUnspecified),
            "INTERVAL_1_SECOND" => Some(Self::Interval1Second),
            "INTERVAL_1_MINUTE" => Some(Self::Interval1Minute),
            "INTERVAL_15_MINUTES" => Some(Self::Interval15Minutes),
            "INTERVAL_1_HOUR" => Some(Self::Interval1Hour),
            "INTERVAL_4_HOUR" => Some(Self::Interval4Hour),
            "INTERVAL_1_DAY" => Some(Self::Interval1Day),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketTokenRequest {
    /// The name of the basket token to retrieve.
    /// Format : "basketTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub basket_token: ::prost::alloc::string::String,
}
/// ListBasketTokensRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokensRequest {
    /// The maximum number of basket tokens to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListBasketTokens` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    /// * chain
    ///    * `=`
    /// * display_name
    ///    * `=`
    /// * symbol
    ///    * `=`
    /// * state
    ///    * `=` (CREATED, LISTED)
    /// * onchain_id
    ///    * `=`
    /// * market_cap_sol
    ///    * `=`, `>`, `<`, `>=`, `<=`
    /// * market_cap_usdc
    ///    * `=`, `>`, `<`, `>=`, `<=`
    ///
    /// Examples
    /// * name="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * chain=SOLANA
    /// * symbol="MURAD"
    /// * state=LISTED
    /// * onchain_id="10"
    /// * market_cap_sol>=1000000
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
    /// * "create_time", "market_cap_sol", "market_cap_usdc"
    ///
    /// Examples
    /// * order_by=create_time desc
    /// * order_by=market_cap_sol desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBasketTokensResponse {
    #[prost(message, repeated, tag="1")]
    pub basket_tokens: ::prost::alloc::vec::Vec<BasketToken>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRebalancingHistoriesRequest {
    /// The name of the basket token to retrieve.
    /// Format : "basketTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub basket_token: ::prost::alloc::string::String,
    /// The maximum number of histories to return. The service may return fewer than
    /// this value.
    /// If unspecified, at most 50 rows will be returned.
    /// The maximum value is 1024; values above 1024 will be coerced to 1024.
    #[prost(int32, tag="2")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    ///
    /// When paginating, all other parameters provided to `ListUsers` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * components_changed
    ///    * `negation`
    ///
    /// Examples
    /// * filter=components_changed
    /// * filter=NOT components_changed
    #[prost(string, tag="4")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListRebalancingHistoriesResponse {
    #[prost(message, repeated, tag="1")]
    pub rebalancing_histories: ::prost::alloc::vec::Vec<BasketTokenRebanlancingHistory>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketToken {
    /// Format : "basketTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(enumeration="ChainType", tag="2")]
    pub chain: i32,
    #[prost(string, tag="3")]
    pub address: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub display_name: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub icon_image_uri: ::prost::alloc::string::String,
    #[prost(string, tag="7")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag="8")]
    pub one_line_description: ::prost::alloc::string::String,
    #[prost(enumeration="BasketTokenState", tag="9")]
    pub state: i32,
    #[prost(enumeration="TokenStrategy", tag="10")]
    pub strategy: i32,
    #[prost(enumeration="RebalanceFrequency", tag="11")]
    pub rebalance_frequency: i32,
    #[prost(bool, tag="12")]
    pub is_rebalancing: bool,
    //   // map from currency to market value
    //   map<string, Money> market_values = 9 [
    //     (google.api.field_behavior) = OUTPUT_ONLY
    //   ];
    //
    //   // map from currency to market value
    //   map<string, Money> price_changes = 10 [
    //     (google.api.field_behavior) = OUTPUT_ONLY
    //   ];

    #[prost(message, repeated, tag="15")]
    pub components: ::prost::alloc::vec::Vec<Component>,
    /// The creator of the basket token
    /// Format : "users/{user_id}"
    #[prost(string, tag="16")]
    pub creator: ::prost::alloc::string::String,
    #[prost(message, optional, tag="17")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="18")]
    pub expire_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="19")]
    pub last_rebalance_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="20")]
    pub total_supply: ::core::option::Option<Quantity>,
    #[prost(uint64, tag="21")]
    pub total_holders: u64,
    #[prost(string, tag="22")]
    pub onchain_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Component {
    /// Format : "fungibleTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub fungible_token: ::prost::alloc::string::String,
    #[prost(enumeration="ChainType", tag="2")]
    pub chain: i32,
    #[prost(string, tag="3")]
    pub address: ::prost::alloc::string::String,
    /// The weight of the component in the basket token.
    /// The weight is a percentage of the total value within the basket token. (0.0 ~ 100.0 %)
    #[prost(message, optional, tag="4")]
    pub weight: ::core::option::Option<Percentage>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketTokenRebanlancingHistory {
    #[prost(string, repeated, tag="1")]
    pub tx_signatures: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(message, repeated, tag="2")]
    pub before_components: ::prost::alloc::vec::Vec<Component>,
    #[prost(message, repeated, tag="3")]
    pub after_components: ::prost::alloc::vec::Vec<Component>,
    #[prost(message, optional, tag="4")]
    pub rebalance_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(bool, tag="5")]
    pub components_changed: bool,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BasketTokenState {
    Unspecified = 0,
    /// 온체인 상에서만 생성되고, 아직 우리 서비스에서 리스팅은 되지 않은 상태
    Created = 1,
    /// 우리 서비스에서 리스팅된 상태
    Listed = 2,
}
impl BasketTokenState {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BasketTokenState::Unspecified => "BASKET_TOKEN_STATE_UNSPECIFIED",
            BasketTokenState::Created => "CREATED",
            BasketTokenState::Listed => "LISTED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "BASKET_TOKEN_STATE_UNSPECIFIED" => Some(Self::Unspecified),
            "CREATED" => Some(Self::Created),
            "LISTED" => Some(Self::Listed),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TokenStrategy {
    Unspecified = 0,
    MarketCapWeighted = 1,
    EqualWeighted = 2,
    FactorWeighted = 3,
    FundamentalWeighted = 4,
    RiskWeighted = 5,
    MomentumWeighted = 6,
    CustomWeighted = 7,
}
impl TokenStrategy {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            TokenStrategy::Unspecified => "TOKEN_STRATEGY_UNSPECIFIED",
            TokenStrategy::MarketCapWeighted => "MARKET_CAP_WEIGHTED",
            TokenStrategy::EqualWeighted => "EQUAL_WEIGHTED",
            TokenStrategy::FactorWeighted => "FACTOR_WEIGHTED",
            TokenStrategy::FundamentalWeighted => "FUNDAMENTAL_WEIGHTED",
            TokenStrategy::RiskWeighted => "RISK_WEIGHTED",
            TokenStrategy::MomentumWeighted => "MOMENTUM_WEIGHTED",
            TokenStrategy::CustomWeighted => "CUSTOM_WEIGHTED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TOKEN_STRATEGY_UNSPECIFIED" => Some(Self::Unspecified),
            "MARKET_CAP_WEIGHTED" => Some(Self::MarketCapWeighted),
            "EQUAL_WEIGHTED" => Some(Self::EqualWeighted),
            "FACTOR_WEIGHTED" => Some(Self::FactorWeighted),
            "FUNDAMENTAL_WEIGHTED" => Some(Self::FundamentalWeighted),
            "RISK_WEIGHTED" => Some(Self::RiskWeighted),
            "MOMENTUM_WEIGHTED" => Some(Self::MomentumWeighted),
            "CUSTOM_WEIGHTED" => Some(Self::CustomWeighted),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RebalanceFrequency {
    Unspecified = 0,
    Manual = 1,
    Daily = 2,
    Weekly = 3,
    Monthly = 4,
}
impl RebalanceFrequency {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RebalanceFrequency::Unspecified => "REBALANCE_FREQUENCY_UNSPECIFIED",
            RebalanceFrequency::Manual => "MANUAL",
            RebalanceFrequency::Daily => "DAILY",
            RebalanceFrequency::Weekly => "WEEKLY",
            RebalanceFrequency::Monthly => "MONTHLY",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "REBALANCE_FREQUENCY_UNSPECIFIED" => Some(Self::Unspecified),
            "MANUAL" => Some(Self::Manual),
            "DAILY" => Some(Self::Daily),
            "WEEKLY" => Some(Self::Weekly),
            "MONTHLY" => Some(Self::Monthly),
            _ => None,
        }
    }
}
/// FungibleTokenMarket contains the market data for a fungible token.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FungibleTokenMarket {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub fungible_token: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub display_name: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub symbol: ::prost::alloc::string::String,
    /// Native token symbol of the chain the fungible-token belongs to.
    /// Not dollar(USDT, USDC), 
    /// and the prices and market cap fields will display dollar values together.
    #[prost(enumeration="Currency", tag="5")]
    pub native_currency: i32,
    /// Key is the `Currency` enum string, 
    /// value is the price with the `Currency`.
    #[prost(map="string, message", tag="7")]
    pub prices: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// Key is the `Currency` enum string, 
    /// value is the market cap with the `Currency`.
    #[prost(map="string, message", tag="8")]
    pub market_caps: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// Key is the `Currency` enum string,
    /// value is the price changes with the `Currency`.
    /// {
    ///    "CURRENCY_USDC": {
    ///      "PRICE_CHANGE_PERIOD_1_HOUR": {
    ///        "nominal_value": {
    ///          "currency": "CURRENCY_USDC",
    ///          "amount": 0.0001
    ///        },
    ///        "percentage_change": {
    ///          "value": 0.0001
    ///        },
    ///        "period": "PRICE_CHANGE_PERIOD_1_HOUR"
    ///      },
    ///      "CURRENCY_SOL": { ... }
    /// }
    /// Support Periods
    /// * PRICE_CHANGE_PERIOD_7_DAY
    #[prost(map="string, message", tag="9")]
    pub price_changes: ::std::collections::HashMap<::prost::alloc::string::String, PriceChangesByPeriod>,
    /// current price
    #[prost(message, optional, tag="10")]
    pub price: ::core::option::Option<Money>,
    /// market cap
    #[deprecated]
    #[prost(message, optional, tag="11")]
    pub market_cap: ::core::option::Option<Money>,
    /// Example
    /// {
    ///    "PRICE_CHANGE_PERIOD_7_DAY": {
    ///        "nominal_value": {
    ///            "currency": "CURRENCY_USDC",
    ///            "amount": 0.0001
    ///        },
    ///        "percentage_change": {
    ///            "value": 0.0001
    ///        },
    ///        "period": "PRICE_CHANGE_PERIOD_7_DAY"
    ///    }
    ///    ...
    /// }
    /// Support Periods
    /// * PRICE_CHANGE_PERIOD_7_DAY
    #[prost(message, optional, tag="12")]
    pub price_change: ::core::option::Option<PriceChangesByPeriod>,
    /// Fully Diluted Valuations
    /// Key is the `Currency` enum string, 
    /// value is the market cap with the `Currency`.
    #[prost(map="string, message", tag="13")]
    pub fdvs: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetFungibleTokenMarketRequest {
    /// The name of the market  to retrieve.
    /// Format : "fungibleTokens/{chain}/{token_address}/market"
    #[prost(string, tag="1")]
    pub fungible_token_market: ::prost::alloc::string::String,
    /// Display the price in this currency. Default is USD.
    #[prost(enumeration="Currency", tag="2")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListFungibleTokensMarketsRequest {
    /// If unspecified, at most 50 books will be returned.
    /// The maximum value is 1000; values above 1000 will be coerced to 1000.
    #[prost(int32, tag="1")]
    pub page_size: i32,
    /// Token of the page to retrieve. If not specified, the first
    /// page of results will be returned. Use the value obtained from
    /// `next_page_token` in the previous response in order to request
    /// the next page of results.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    ///
    /// Examples
    /// * name="fungibleTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9/market"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
    /// One or more fields to compare and use to sort the output.
    /// To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
    ///
    /// Reference
    /// * <https://google.aip.dev/132#ordering.>
    ///
    /// Supported Fields
    /// * 
    ///
    /// Examples
    /// * 
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
    /// Display the price in this currency. Default is USD.
    #[prost(enumeration="Currency", tag="5")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListFungibleTokensMarketsResponse {
    #[prost(message, repeated, tag="1")]
    pub fungible_token_markets: ::prost::alloc::vec::Vec<FungibleTokenMarket>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetFungibleTokenRequest {
    /// The name of the fungible token to retrieve.
    /// Format : "fungibleTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub fungible_token: ::prost::alloc::string::String,
}
/// ListFungibleTokensRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListFungibleTokensRequest {
    /// The maximum number of fungible tokens to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListFungibleTokens` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `=`
    /// * chain
    ///    * `=`
    /// * symbol
    ///    * `=`
    /// * market_cap_sol
    ///    * `=`, `>`, `<`, `>=`, `<=`
    /// * market_cap_usdc
    ///    * `=`, `>`, `<`, `>=`, `<=`
    ///
    /// Examples
    /// * name="fungibleTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * chain=SOLANA
    /// * symbol="MURAD"
    /// * market_cap_sol>=1,000,000
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
    /// * "market_cap", "create_date"
    ///
    /// Examples
    /// * order_by=create_date desc
    /// * order_by=market_cap desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListFungibleTokensResponse {
    #[prost(message, repeated, tag="1")]
    pub fungible_tokens: ::prost::alloc::vec::Vec<FungibleToken>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FungibleToken {
    /// Format : "fungibleTokens/{chain}/{token_address}"
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(enumeration="ChainType", tag="2")]
    pub chain: i32,
    #[prost(string, tag="3")]
    pub address: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub display_name: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub icon_image_url: ::prost::alloc::string::String,
    #[prost(int32, tag="7")]
    pub decimals: i32,
    #[prost(message, repeated, tag="8")]
    pub sns: ::prost::alloc::vec::Vec<Sns>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetHoldingWalletRequest {
    /// The name of the holding_wallet to retrieve.
    /// Format: holdingWallets/{vm_type}/{address}
    #[prost(string, tag="1")]
    pub holding_wallet: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListHoldingWalletsRequest {
    /// The maximum number of holdings to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListHoldingWallets` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * user
    ///    * `=`
    ///
    /// * user="users/1"
    /// * market_value_sol>=10
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListHoldingWalletsResponse {
    #[prost(message, repeated, tag="1")]
    pub holding_wallets: ::prost::alloc::vec::Vec<HoldingWallet>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HoldingWallet {
    /// The name of the holding_wallet.
    /// Format: holdingWallets/{vm_type}/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(enumeration="VmType", tag="2")]
    pub vm_type: i32,
    #[prost(string, tag="3")]
    pub address: ::prost::alloc::string::String,
    #[prost(string, optional, tag="4")]
    pub user: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetHoldingRequest {
    /// The name of the holding to retrieve.
    /// Format : "holdings/{chain}/basketTokens/{token_address}/holdingWallets/{holding_wallet_address}"
    #[prost(string, tag="1")]
    pub holding: ::prost::alloc::string::String,
    /// Display the value in this currency. Default is USD.
    #[deprecated]
    #[prost(enumeration="Currency", tag="2")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListHoldingsRequest {
    /// The maximum number of holdings to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListHoldings` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * basket_token
    ///    * `=`
    /// * holding_wallet
    ///    * `=`
    /// * formatted_quantity, quantity (alias of formatted_quantity)
    ///    * `>=`, `<=`, `>`, `<`
    /// * raw_quantity
    ///    * `>=`, `<=`, `>`, `<`
    /// * market_value_sol
    ///    * `>=`, `<=`, `>`, `<`
    /// * market_value_usdc
    ///    * `>=`, `<=`, `>`, `<`
    ///
    /// At least one filter is required. If none is provided, the service will return an error.
    /// Examples
    /// * basket_token="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * holding_wallet="holdingWallets/SVM/9b3b4b4b-1b1b-4b4b-9b9b-1b1b4b4b4b4b"
    /// * quantity>"0"
    /// * market_value_sol>="100"
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
    /// * "market_value"
    ///
    /// Examples
    /// * order_by=market_value desc
    #[prost(string, tag="4")]
    pub order_by: ::prost::alloc::string::String,
    /// Display the value in this currency. Default is USD.
    #[deprecated]
    #[prost(enumeration="Currency", tag="5")]
    pub currency: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListHoldingsResponse {
    #[prost(message, repeated, tag="1")]
    pub holdings: ::prost::alloc::vec::Vec<Holding>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetHoldingsStatisticsRequest {
    /// Available Sequence and Operator
    /// * basket_token
    ///    * `=`
    /// * holding_wallet
    ///    * `=`
    /// * user
    ///    * `=`
    /// * symbol
    ///    * `=`
    /// * market_value_sol
    ///    * `>=`, `<=`, `>`, `<`
    /// * market_value_usdc
    ///    * `>=`, `<=`, `>`, `<`
    ///
    /// At least one filter is required. If none is provided, the service will return an error.
    /// Examples
    /// * basket_token="basketTokens/SOLANA/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * holding_wallet="holdingWallets/SOLANA/9b3b4b4b-1b1b-4b4b-9b9b-1b1b4b4b4b4b"
    /// * user="users/1"
    /// * symbol="MURAD"
    /// * market_value_sol>=10
    #[prost(string, tag="1")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetHoldingsStatisticsResponse {
    #[prost(int32, tag="1")]
    pub count: i32,
    #[prost(message, repeated, tag="2")]
    pub total_market_values: ::prost::alloc::vec::Vec<Money>,
    #[prost(message, repeated, tag="3")]
    pub total_pnls: ::prost::alloc::vec::Vec<PnL>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Holding {
    /// Format : "holdings/{chain}/basketTokens/{token_address}/holdingWallets/{holding_wallet_address}"
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(enumeration="ChainType", tag="2")]
    pub chain: i32,
    #[prost(string, tag="3")]
    pub basket_token: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub holding_wallet: ::prost::alloc::string::String,
    #[prost(message, optional, tag="5")]
    pub quantity: ::core::option::Option<Quantity>,
    /// map from currency to average buy price
    #[prost(map="string, message", tag="6")]
    pub average_buy_prices: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// map from currency to market value
    #[prost(map="string, message", tag="7")]
    pub market_values: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    /// map from currency to PnLsByPeriod
    #[prost(map="string, message", tag="8")]
    pub pnls: ::std::collections::HashMap<::prost::alloc::string::String, PnLsByPeriod>,
    /// Percentage of holding value in the basket token
    #[prost(message, optional, tag="9")]
    pub ownership_percentage: ::core::option::Option<Percentage>,
    #[prost(message, optional, tag="11")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag="12")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    #[deprecated]
    #[prost(message, optional, tag="13")]
    pub average_buy_price: ::core::option::Option<Money>,
    #[deprecated]
    #[prost(message, optional, tag="14")]
    pub market_value: ::core::option::Option<Money>,
    #[deprecated]
    #[prost(message, optional, tag="15")]
    pub pnl: ::core::option::Option<PnLsByPeriod>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketVaultRequest {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketVaultResponse {
    #[prost(message, repeated, tag="1")]
    pub vault: ::prost::alloc::vec::Vec<BasketVaultElement>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketVaultElement {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub balance: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RebalanceAction {
    #[prost(string, tag="1")]
    pub input_mint: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub output_mint: ::prost::alloc::string::String,
    #[prost(enumeration="BaseType", tag="3")]
    pub base_type: i32,
    /// Raw amount of the mint that `base_type` references.
    /// BASE_IN: amount of `input_mint`
    /// BASE_OUT: amount of `output_mint`
    #[prost(string, tag="4")]
    pub amount: ::prost::alloc::string::String,
    /// Threshold for the other amount
    /// BASE_IN: Minimum amount of `output_mint` token to be received
    /// BASE_OUT: Maximum amount of `input_mint` token to be spent
    #[prost(string, optional, tag="5")]
    pub other_amount_threshold: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SerializedTxBundle {
    #[prost(string, repeated, tag="1")]
    pub serialized_txs: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BuildRebalanceTxRequest {
    #[prost(string, tag="1")]
    pub basket_mint: ::prost::alloc::string::String,
    #[prost(double, tag="2")]
    pub slippage_percentage: f64,
    #[prost(message, repeated, tag="3")]
    pub actions: ::prost::alloc::vec::Vec<RebalanceAction>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BuySwapData {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub amount_in: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub max_amount_in: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub amount_out: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BuildMintTxRequest {
    #[prost(string, tag="1")]
    pub basket_mint: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub mint_amount: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub input_amount: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub owner_address: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="5")]
    pub buy_swap_data: ::prost::alloc::vec::Vec<BuySwapData>,
    /// percentage
    /// If null, value is set to 10(%)
    #[prost(uint64, optional, tag="6")]
    pub max_slippage: ::core::option::Option<u64>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BuildRedeemTxRequest {
    #[prost(string, tag="1")]
    pub basket_mint: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub amount: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub owner_address: ::prost::alloc::string::String,
    /// percentage
    /// If null, value is set to 10(%)
    #[prost(uint64, optional, tag="4")]
    pub max_slippage: ::core::option::Option<u64>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketConfigByIdRequest {
    #[prost(string, tag="1")]
    pub basket_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketMintByIdRequest {
    #[prost(string, tag="1")]
    pub basket_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketMintByIdResponse {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CommandCreateBasketRequest {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBasketRequest {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BatchCreateTokenPoolsRequest {
    #[prost(message, repeated, tag="1")]
    pub token_pools: ::prost::alloc::vec::Vec<TokenPool>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BatchCreateTokenPoolsResponse {
    #[prost(message, repeated, tag="1")]
    pub token_pools: ::prost::alloc::vec::Vec<TokenPool>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TxResponse {
    #[prost(string, tag="1")]
    pub tx: ::prost::alloc::string::String,
}
//

#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Basket {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub basket_id: u64,
    #[prost(string, tag="3")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub uri: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="6")]
    pub components: ::prost::alloc::vec::Vec<BasketComponent>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TokenPool {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    #[prost(enumeration="PoolType", tag="2")]
    pub pool_type: i32,
    #[prost(string, tag="3")]
    pub pool_id: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub lookup_table: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProgramState {
    #[prost(uint32, tag="1")]
    pub bump: u32,
    #[prost(string, tag="2")]
    pub admin: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub platform_fee_wallet: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub basket_counter: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub rebalance_margin_lamports: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub creator_fee_percentage: ::prost::alloc::string::String,
    #[prost(string, tag="7")]
    pub platform_fee_percentage: ::prost::alloc::string::String,
    #[prost(bool, tag="8")]
    pub enable_creator: bool,
    #[prost(bool, tag="9")]
    pub is_initialized: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketConfig {
    #[prost(uint32, tag="1")]
    pub bump: u32,
    #[prost(uint64, tag="2")]
    pub id: u64,
    #[prost(string, tag="3")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub rebalancer: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub mint: ::prost::alloc::string::String,
    #[prost(bool, tag="6")]
    pub is_rebalancing: bool,
    #[prost(message, repeated, tag="7")]
    pub components: ::prost::alloc::vec::Vec<BasketComponent>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasketComponent {
    #[prost(string, tag="1")]
    pub mint: ::prost::alloc::string::String,
    /// In system raw amount
    ///
    /// quantityInSysDecimal. quantity * 10^6
    #[prost(uint64, tag="2")]
    pub quantity: u64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PoolType {
    Unspecified = 0,
    Amm = 1,
    Clmm = 2,
    Cpmm = 3,
}
impl PoolType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PoolType::Unspecified => "POOL_TYPE_UNSPECIFIED",
            PoolType::Amm => "AMM",
            PoolType::Clmm => "CLMM",
            PoolType::Cpmm => "CPMM",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "POOL_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "AMM" => Some(Self::Amm),
            "CLMM" => Some(Self::Clmm),
            "CPMM" => Some(Self::Cpmm),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum BaseType {
    Unspecified = 0,
    BaseIn = 1,
    BaseOut = 2,
}
impl BaseType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            BaseType::Unspecified => "BASE_TYPE_UNSPECIFIED",
            BaseType::BaseIn => "BASE_IN",
            BaseType::BaseOut => "BASE_OUT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "BASE_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "BASE_IN" => Some(Self::BaseIn),
            "BASE_OUT" => Some(Self::BaseOut),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetTransactionRequest {
    /// The name of the transaction to retrieve.
    /// Format: transactions/{chain}/{signature}
    #[prost(string, tag="1")]
    pub transaction: ::prost::alloc::string::String,
}
/// ListTransactionsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListTransactionsRequest {
    /// The maximum number of transactions to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListTransactions` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * chain
    ///    * `Equal`
    /// * signature
    ///    * `Equal`
    /// * basket_token
    ///    * `Equal`
    /// * from_holding_wallet
    ///    * Equal`
    /// * to_holding_wallet
    ///    * Equal`
    /// * type
    ///    * Equal`
    ///
    /// Examples
    /// * name="transactions/SOLANA/2ksFVPax4AKHEQDpUusmbifTYNMU2evzmcxdBpVu5N9koMaRGqvBJsn3JQsk8DUqnNwEZNN3o6ujfXLnZ1hks9Zc"
    /// * basket_token="basketTokens/{chain}/{address}"
    /// * from_holding_wallet="holdingWallets/{chain}/{address}"
    /// * to_holding_wallet="holdingWallets/{chain}/{address}"
    /// * type=MINT
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListTransactionsResponse {
    #[prost(message, repeated, tag="1")]
    pub transactions: ::prost::alloc::vec::Vec<Transaction>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transaction {
    /// Format : "transactions/{chain}/{signature}"
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(enumeration="ChainType", tag="2")]
    pub chain: i32,
    #[prost(string, tag="3")]
    pub signature: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub basket_token: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub from: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub to: ::prost::alloc::string::String,
    #[prost(enumeration="TransactionType", tag="8")]
    pub r#type: i32,
    #[prost(int64, tag="9")]
    pub quantity: i64,
    #[prost(map="string, message", tag="10")]
    pub execution_price: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    #[prost(map="string, message", tag="11")]
    pub total_value: ::std::collections::HashMap<::prost::alloc::string::String, Money>,
    #[prost(message, optional, tag="13")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TransactionType {
    Unspecified = 0,
    Mint = 1,
    Transfer = 2,
    Redeem = 3,
}
impl TransactionType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            TransactionType::Unspecified => "TRANSACTION_TYPE_UNSPECIFIED",
            TransactionType::Mint => "TRANSACTION_TYPE_MINT",
            TransactionType::Transfer => "TRANSACTION_TYPE_TRANSFER",
            TransactionType::Redeem => "TRANSACTION_TYPE_REDEEM",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TRANSACTION_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "TRANSACTION_TYPE_MINT" => Some(Self::Mint),
            "TRANSACTION_TYPE_TRANSFER" => Some(Self::Transfer),
            "TRANSACTION_TYPE_REDEEM" => Some(Self::Redeem),
            _ => None,
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetUserRequest {
    /// The name of the user to retrieve.
    /// Format: users/{id}
    /// Alias "users/me" is supported.
    #[prost(string, tag="1")]
    pub user: ::prost::alloc::string::String,
}
/// ListUsersRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersRequest {
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
    /// When paginating, all other parameters provided to `ListUsers` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `Equal`
    /// * address
    ///    * Equal`
    /// * display_name
    ///    * Equal`
    ///
    /// Examples
    /// * name="users/FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * address="FZ4MT1HYJHd9GK8D5mJ9f3r7irLaDL5NxBNLjGqrLqs9"
    /// * display_name="Alice"
    #[prost(string, tag="3")]
    pub filter: ::prost::alloc::string::String,
}
/// ListUsersResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListUsersResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub users: ::prost::alloc::vec::Vec<User>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateUserRequest {
    /// User to update
    /// Format: users/{id}
    #[prost(message, optional, tag="1")]
    pub user: ::core::option::Option<User>,
    /// Field mask that specifies the fields to update.
    /// If no field mask is set, all fields will be updated.
    /// Wildcards are supported.
    /// Examples
    /// \["*"\]
    /// \["nickname"\]
    /// \["biography"\]
    #[prost(message, optional, tag="2")]
    pub update_mask: ::core::option::Option<::prost_types::FieldMask>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNicknameAvailabilityRequest {
    /// The nickname of User.
    #[prost(string, tag="1")]
    pub nickname: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNicknameAvailabilityResponse {
    /// The nickname of User.
    #[prost(string, tag="1")]
    pub nickname: ::prost::alloc::string::String,
    /// The availability of the nickname.
    #[prost(bool, tag="2")]
    pub available: bool,
    /// The reason of the nickname is not available.
    /// Example:
    /// - display name should be less or equal than 15 characters
    /// - display name should be more or equal than 4 characters
    /// - display name may only contain letters, numbers, hyphens, and periods
    #[prost(string, tag="3")]
    pub reason: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct User {
    /// The resource name of the User.
    /// Format: users/{id}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The Auth ID of User. (generated by Privy or Web3Auth)
    #[prost(string, tag="2")]
    pub id: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="3")]
    pub wallets: ::prost::alloc::vec::Vec<UserWallet>,
    /// The created time of User.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The last updated time of User.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="6")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The display name of User.
    #[prost(string, tag="7")]
    pub display_name: ::prost::alloc::string::String,
    /// The biography of User.
    #[prost(string, tag="8")]
    pub biography: ::prost::alloc::string::String,
    /// The SNS connections of User.
    #[prost(message, repeated, tag="9")]
    pub sns: ::prost::alloc::vec::Vec<Sns>,
    #[prost(string, tag="10")]
    pub profile_image_url: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserWallet {
    #[prost(enumeration="VmType", tag="1")]
    pub vm_type: i32,
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
}
include!("piedotfun.v1.tonic.rs");
// @@protoc_insertion_point(module)
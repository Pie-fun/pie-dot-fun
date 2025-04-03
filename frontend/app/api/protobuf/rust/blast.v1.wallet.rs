// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetWalletRequest {
    /// The name of the wallet to retrieve.
    /// Format: wallets/{address}
    /// Alias "wallets/me" is supported.
    #[prost(string, tag="1")]
    pub wallet: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Wallet {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub total_points: u32,
    #[prost(message, optional, tag="3")]
    pub early_access: ::core::option::Option<EarlyAccess>,
    #[prost(message, optional, tag="4")]
    pub blast_bridge: ::core::option::Option<BlastBridge>,
    #[prost(message, optional, tag="5")]
    pub nft_assets: ::core::option::Option<NftAssets>,
    #[prost(message, optional, tag="6")]
    pub crypto_og: ::core::option::Option<CryptoOg>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EarlyAccess {
    #[prost(uint32, tag="1")]
    pub galxe_points: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlastBridge {
    #[prost(float, tag="1")]
    pub eth: f32,
    #[prost(float, tag="2")]
    pub st_eth: f32,
    #[prost(float, tag="3")]
    pub dai: f32,
    #[prost(float, tag="4")]
    pub usdt: f32,
    #[prost(float, tag="5")]
    pub usdc: f32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NftAssets {
    #[prost(uint32, tag="1")]
    pub count: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CryptoOg {
    #[prost(bool, tag="1")]
    pub og: bool,
}
include!("blast.v1.wallet.tonic.rs");
// @@protoc_insertion_point(module)
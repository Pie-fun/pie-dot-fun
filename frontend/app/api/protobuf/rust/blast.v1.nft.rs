// @generated
/// ListNFTsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNfTsRequest {
    /// The owner address of the profile.
    /// This field is required if `sync_onchain` is true.
    /// When `sync_onchain` is true, only EOA address is supported.
    #[prost(string, tag="1")]
    pub owner_address: ::prost::alloc::string::String,
    /// The maximum number of nfts to return. The service may return fewer than
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
    /// When page token is not specified, nft assets are synced with the blockchain. If
    /// page token is specified, nft assets are not synced with the blockchain and retrieved from the database.
    ///
    /// The page token is valid for only 2 hours.
    ///
    /// When paginating, all other parameters provided to `ListNFTs` must match
    /// the call that provided the page token.
    #[prost(string, tag="3")]
    pub page_token: ::prost::alloc::string::String,
    /// Available Sequence and Operator
    /// * name
    ///    * `equal`
    /// * has_image
    ///    * `negation`
    /// * address
    ///    * `equal`
    /// * contract.address
    ///    * `equal`
    /// * contract.display_name
    ///    * `equal`
    /// * contract.chain
    ///    * supported value is [ETHEREUM, POLYGON, ARBITRUM, OPTIMISM, BASE, STARKNET, ETHEREUM_SEPOLIA, POLYGON_MUMBAI]
    ///    * `equal`
    /// * contract.type
    ///    * `equal`
    ///
    /// Examples
    /// * filter=name="nfts/MUMBAI/0xb4Afd0Ecb77460f0d8F93E7Fba93D7c18491f7a3/424"
    /// * filter=has_image
    /// * filter=address="0xa3d8090e4ea02d4cc76ecb2e8b09ab140cd11dee"
    /// * filter=contract.address="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    /// * filter=contract.display_name="CryptoKitties"
    /// * filter=contract.chain=ETHEREUM
    /// * filter=contract.type=ERC721
    #[prost(string, tag="4")]
    pub filter: ::prost::alloc::string::String,
    /// Supported value is ["true", "1", "yes", "y"], other then all this value will be treated as false.
    /// If true, the service will fetch assets using third party NFT APIs.
    #[prost(string, tag="5")]
    pub sync_onchain: ::prost::alloc::string::String,
}
/// ListNFTsResponse response
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNfTsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub nfts: ::prost::alloc::vec::Vec<Nft>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
/// ListNFTsDelegateRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNfTsDelegateRequest {
    /// The owner address of the profile.
    /// This field is required if `sync_onchain` is true.
    /// When `sync_onchain` is true, only EOA address is supported.
    #[prost(string, tag="1")]
    pub owner_address: ::prost::alloc::string::String,
}
/// ListNFTsDelegateRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListNfTsDelegateResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub nfts: ::prost::alloc::vec::Vec<Nft>,
}
/// GetNFTRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetNftRequest {
    /// The resource name of the nft to retrieve.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub nft: ::prost::alloc::string::String,
}
/// ValidateNFTAccessRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNftAccessRequest {
    /// The resource name of the nft to retrieve.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub nft: ::prost::alloc::string::String,
    /// The owner address of the NFT asset.
    #[prost(string, tag="2")]
    pub owner_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNftAccessResponse {
    #[prost(message, optional, tag="1")]
    pub nft: ::core::option::Option<Nft>,
    #[prost(bool, tag="2")]
    pub access: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListOwnersRequest {
    #[prost(string, repeated, tag="1")]
    pub nfts: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListOwnersResponse {
    #[prost(map="string, message", tag="1")]
    pub owners: ::std::collections::HashMap<::prost::alloc::string::String, list_owners_response::NfTs>,
}
/// Nested message and enum types in `ListOwnersResponse`.
pub mod list_owners_response {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct NfTs {
        #[prost(string, repeated, tag="1")]
        pub nfts: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    }
}
/// ValidateNFTRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNftRequest {
    /// The resource name of the nft to retrieve.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub nft: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidateNftResponse {
    #[prost(bool, tag="2")]
    pub valid: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetContractRequest {
    /// The resource name of the nft contract to retrieve.
    /// Format: nfts/{chain_type}/{contract_address}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
    #[prost(string, tag="1")]
    pub nft_contract: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CheckHolderOfContractRequest {
    /// The resource name of the nft contract to retrieve.
    /// Format: nfts/{chain_type}/{contract_address}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
    #[prost(string, tag="1")]
    pub nft_contract: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub wallet_address: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CheckHolderOfContractResponse {
    #[prost(bool, tag="1")]
    pub is_holder: bool,
}
/// NFT message represents an NFT asset.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Nft {
    /// The resource name of the NFT asset.
    /// Format: nfts/{chain_type}/{contract_address}/{token_id}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// EIP-6551 TBA Address of the NFT asset.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// Token ID of the NFT asset.
    #[prost(string, tag="3")]
    pub token_id: ::prost::alloc::string::String,
    /// Token Name of the NFT asset.
    #[prost(string, tag="4")]
    pub token_name: ::prost::alloc::string::String,
    /// The URI of the NFT asset's image.
    /// This URI can be cached version of image original URI
    /// e.g. "<https://i.seadn.io/gcs/files/f3564ef33373939b024fb791f21ec37b.png?w=500&auto=format">
    #[prost(string, tag="5")]
    pub image_uri: ::prost::alloc::string::String,
    /// The URI of the NFT asset's original image.
    /// e.g. "<https://www.larvalabs.com/cryptopunks/cryptopunk1.png">
    #[prost(string, tag="6")]
    pub image_original_uri: ::prost::alloc::string::String,
    /// The URI of the NFT asset's animation.
    /// This URI can be cached version of animation original URI
    /// This field is optional
    #[prost(string, optional, tag="7")]
    pub animation_uri: ::core::option::Option<::prost::alloc::string::String>,
    /// The URI of the NFT asset's original animation.
    /// This field is optional
    #[prost(string, optional, tag="8")]
    pub animation_original_uri: ::core::option::Option<::prost::alloc::string::String>,
    /// Additional metadata about the NFT asset.
    #[prost(string, tag="9")]
    pub metadata_uri: ::prost::alloc::string::String,
    /// The owner address of the NFT asset.
    /// This field is optional
    #[prost(string, optional, tag="10")]
    pub owner_address: ::core::option::Option<::prost::alloc::string::String>,
    /// The contract that owns the NFT asset.
    /// Output only.
    #[prost(message, optional, tag="11")]
    pub contract: ::core::option::Option<NftContract>,
}
/// NFTContract message represents an NFT contract.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NftContract {
    /// The resource name of the nft contract.
    /// Format: nfts/{chain_type}/{contract_address}
    /// Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The address of the NFT contract.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The display name of the NFT contract.
    #[prost(string, tag="3")]
    pub display_name: ::prost::alloc::string::String,
    /// The symbol of the NFT contract.
    #[prost(string, tag="4")]
    pub symbol: ::prost::alloc::string::String,
    /// The blockchain on which the NFT contract resides.
    #[prost(enumeration="ChainType", tag="5")]
    pub chain: i32,
    /// The type of the NFT contract.
    #[prost(enumeration="ContractType", tag="6")]
    pub r#type: i32,
    /// The URI of the contract image
    #[prost(string, tag="7")]
    pub image_uri: ::prost::alloc::string::String,
}
/// ChainType enumeration represents the type of blockchain.
/// Does not support optimism, zksync, bsc yet
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ChainType {
    /// Unspecified blockchain type.
    ChainUnspecified = 0,
    /// Ethereum Mainnet blockchain.
    Ethereum = 1,
    /// Polygon Mainnet blockchain.
    Polygon = 137,
    /// Arbitrum Mainnet blockchain.
    Arbitrum = 42161,
    /// Optimism Mainnet blockchain.
    Optimism = 10,
    /// Base Mainnet blockchain.
    Base = 8453,
    /// Blast Mainnet blockchain.
    Blast = 81457,
    /// Sepolia Testnet blockchain.
    EthereumSepolia = 11155111,
    /// Polygon Testnet blockchain.
    PolygonMumbai = 80001,
    /// Blast Testnet blockchain.
    BlastSepolia = 168587773,
}
impl ChainType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ChainType::ChainUnspecified => "CHAIN_UNSPECIFIED",
            ChainType::Ethereum => "ETHEREUM",
            ChainType::Polygon => "POLYGON",
            ChainType::Arbitrum => "ARBITRUM",
            ChainType::Optimism => "OPTIMISM",
            ChainType::Base => "BASE",
            ChainType::Blast => "BLAST",
            ChainType::EthereumSepolia => "ETHEREUM_SEPOLIA",
            ChainType::PolygonMumbai => "POLYGON_MUMBAI",
            ChainType::BlastSepolia => "BLAST_SEPOLIA",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CHAIN_UNSPECIFIED" => Some(Self::ChainUnspecified),
            "ETHEREUM" => Some(Self::Ethereum),
            "POLYGON" => Some(Self::Polygon),
            "ARBITRUM" => Some(Self::Arbitrum),
            "OPTIMISM" => Some(Self::Optimism),
            "BASE" => Some(Self::Base),
            "BLAST" => Some(Self::Blast),
            "ETHEREUM_SEPOLIA" => Some(Self::EthereumSepolia),
            "POLYGON_MUMBAI" => Some(Self::PolygonMumbai),
            "BLAST_SEPOLIA" => Some(Self::BlastSepolia),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ContractType {
    /// Unspecified contract type.
    Unspecified = 0,
    /// ERC721 contract type.
    Erc721 = 1,
    /// ERC1155 contract type.
    Erc1155 = 2,
}
impl ContractType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ContractType::Unspecified => "CONTRACT_TYPE_UNSPECIFIED",
            ContractType::Erc721 => "ERC721",
            ContractType::Erc1155 => "ERC1155",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CONTRACT_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "ERC721" => Some(Self::Erc721),
            "ERC1155" => Some(Self::Erc1155),
            _ => None,
        }
    }
}
include!("blast.v1.nft.tonic.rs");
// @@protoc_insertion_point(module)
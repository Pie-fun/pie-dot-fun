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
/// TransferRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferRequest {
    /// transfer star token from whom
    #[prost(string, tag="1")]
    pub account: ::prost::alloc::string::String,
    /// transfer star token to whom
    #[prost(string, tag="2")]
    pub to: ::prost::alloc::string::String,
    /// amount of star token to transfer
    #[prost(uint32, tag="3")]
    pub amount: u32,
    /// etag determine whether a resource has changed since the last request.
    /// This checksum is computed by the server based on the value of other
    /// fields, and may be sent on requests to ensure the
    /// client has an up-to-date value before proceeding.
    /// If the ETag does not match, send a 412 Precondition Failed response
    #[prost(string, tag="4")]
    pub etag: ::prost::alloc::string::String,
}
/// WithdrawOptimisticRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct WithdrawOptimisticRequest {
    /// The account to withdraw from.
    #[prost(string, tag="1")]
    pub account: ::prost::alloc::string::String,
    /// amount of star token to supply
    #[prost(uint32, tag="2")]
    pub amount: u32,
}
/// DepositOptimisticRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DepositOptimisticRequest {
    /// The account to deposit star token
    #[prost(string, tag="1")]
    pub account: ::prost::alloc::string::String,
    /// amount of star token to absob
    #[prost(uint32, tag="2")]
    pub amount: u32,
}
/// GetStarTokenBalanceRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetAccountRequest {
    /// The name of the account to retrieve.
    /// Format: accounts/{address}
    #[prost(string, tag="1")]
    pub account: ::prost::alloc::string::String,
}
/// ListAccountsRequest payload
/// (-- api-linter: core::0158::request-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
/// (-- api-linter: core::0132::request-unknown-fields=disabled
///      aip.dev/not-precedent: We really need this field because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAccountsRequest {
    /// The maximum number of accounts to return. The service may return fewer than
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
    /// When paginating, all other parameters provided to `ListAccounts` must match
    /// the call that provided the page token.
    #[prost(string, tag="2")]
    pub page_token: ::prost::alloc::string::String,
}
/// ListAccountsResponse
/// (-- api-linter: core::0158::response-next-page-token-field=disabled
///      aip.dev/not-precedent: We need to do this because reasons. --)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAccountsResponse {
    /// The list of rows that matched the query.
    #[prost(message, repeated, tag="1")]
    pub accounts: ::prost::alloc::vec::Vec<Account>,
    /// Pagination token used to retrieve the next page of results.
    /// Pass the content of this string as the `page_token` attribute of
    /// the next request. `next_page_token` is not returned for the last
    /// page.
    #[prost(string, tag="2")]
    pub next_page_token: ::prost::alloc::string::String,
}
/// Account message represents a Account.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Account {
    /// name
    /// format: accounts/{address}
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The address of the account.
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
    /// The balance of the account.
    #[prost(message, optional, tag="4")]
    pub balance: ::core::option::Option<Balance>,
    /// The list of transactions associated with the account.
    #[prost(message, repeated, tag="6")]
    pub last_transactions: ::prost::alloc::vec::Vec<Transaction>,
    /// The create time of the account.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="7")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
    /// The update time of the account.
    /// RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
    #[prost(message, optional, tag="8")]
    pub update_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// Balance message represents a currency.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Balance {
    /// The currency symbol.
    #[prost(enumeration="Symbol", tag="1")]
    pub symbol: i32,
    /// The amount of currency.
    #[prost(uint32, tag="2")]
    pub amount: u32,
    /// The cumulative total of currency.
    #[prost(uint32, tag="3")]
    pub cumulative_total: u32,
}
/// Money message represents a currency.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Money {
    /// The currency symbol.
    #[prost(enumeration="Symbol", tag="1")]
    pub symbol: i32,
    /// The amount of currency.
    #[prost(uint32, tag="2")]
    pub amount: u32,
}
/// Transaction message represents a financial transaction.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transaction {
    /// The ID of the transaction.
    #[prost(uint64, tag="1")]
    pub id: u64,
    /// The type of the transaction.
    #[prost(enumeration="transaction::Type", tag="2")]
    pub r#type: i32,
    /// The amount of currency involved in the transaction.
    #[prost(message, optional, tag="3")]
    pub money: ::core::option::Option<Money>,
    /// The destination of the transaction.
    /// This field is optional
    #[prost(string, optional, tag="4")]
    pub recipient: ::core::option::Option<::prost::alloc::string::String>,
    /// The create time of the transaction.
    #[prost(message, optional, tag="5")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// Nested message and enum types in `Transaction`.
pub mod transaction {
    /// Type enum represents the type of a transaction.
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Type {
        Unspecified = 0,
        Deposit = 1,
        Withdrawal = 2,
        Transfer = 3,
    }
    impl Type {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Type::Unspecified => "TYPE_UNSPECIFIED",
                Type::Deposit => "DEPOSIT",
                Type::Withdrawal => "WITHDRAWAL",
                Type::Transfer => "TRANSFER",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "TYPE_UNSPECIFIED" => Some(Self::Unspecified),
                "DEPOSIT" => Some(Self::Deposit),
                "WITHDRAWAL" => Some(Self::Withdrawal),
                "TRANSFER" => Some(Self::Transfer),
                _ => None,
            }
        }
    }
}
/// SymbolType enum represents the symbol of a currency.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum Symbol {
    Unspecified = 0,
    /// STAR
    Star = 1,
}
impl Symbol {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Symbol::Unspecified => "SYMBOL_UNSPECIFIED",
            Symbol::Star => "STAR",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "SYMBOL_UNSPECIFIED" => Some(Self::Unspecified),
            "STAR" => Some(Self::Star),
            _ => None,
        }
    }
}
/// SendGMRequest message represents the request to send a GM message.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SendGmRequest {
    /// The profile whom the GM should be sent from.
    /// Format: profiles/{address}
    /// Resource name alias for the sender, "profiles/me" is supported.
    #[prost(string, tag="1")]
    pub profile: ::prost::alloc::string::String,
    /// The profile whom the GM should be sent to.
    /// Format: profiles/{address}
    #[prost(string, tag="2")]
    pub to: ::prost::alloc::string::String,
}
/// Request message for ListGMs.
/// At least one of the following fields must be set
/// if both "from" and "to" are empty, the server will return an error
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
    /// Optional. The resource name of the profile to list GM messages from.
    /// Format: profiles/{address}
    #[prost(string, tag="3")]
    pub from: ::prost::alloc::string::String,
    /// Optional. The resource name of the profile to list GM messages to.
    /// Format: profiles/{address}
    #[prost(string, tag="4")]
    pub to: ::prost::alloc::string::String,
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
/// GMStats message represents the statistics of a profile's profile.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GmStats {
    /// The resource name of the profile.
    /// Format: profiles/{address}/gm_statistics
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The profile name.
    #[prost(string, tag="2")]
    pub profile: ::prost::alloc::string::String,
    /// The number of messages sent by the profile.
    #[prost(int32, tag="3")]
    pub sent_count: i32,
    /// The number of messages received by the profile.
    #[prost(int32, tag="4")]
    pub received_count: i32,
    /// The list of messages sent by the profile.
    #[prost(message, repeated, tag="5")]
    pub sent_gms: ::prost::alloc::vec::Vec<Gm>,
    /// The list of messages received by the profile.
    #[prost(message, repeated, tag="6")]
    pub received_gms: ::prost::alloc::vec::Vec<Gm>,
}
/// GM message represents a message sent or received by a profile.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Gm {
    /// The resource name of the GM message.
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    /// The profile name of the sender.
    #[prost(string, tag="2")]
    pub from: ::prost::alloc::string::String,
    /// The profile name of the receiver.
    #[prost(string, tag="3")]
    pub to: ::prost::alloc::string::String,
    /// The time when the message was sent or received.
    #[prost(message, optional, tag="4")]
    pub create_time: ::core::option::Option<::prost_types::Timestamp>,
}
/// Request message for ListStarDoodles.
/// If location filter is not specified, the server will return an error.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStarDoodlesRequest {
    /// Available Sequence and Operator
    /// * location
    ///    * `Equal`
    ///
    /// Examples
    /// * filter=location="SQUARE"
    /// * filter=location="BACKSPACE/0x06fAfC5d2fe61fF8d15A5Ca55FD6D3cf6069E2aB"
    #[prost(string, tag="1")]
    pub filter: ::prost::alloc::string::String,
}
/// Response message for ListStarDoodles.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListStarDoodlesResponse {
    /// The list of StarDoodle messages that match the filters.
    #[prost(message, repeated, tag="1")]
    pub star_doodles: ::prost::alloc::vec::Vec<StarDoodle>,
}
/// StarDoodle message represents the star doodle
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StarDoodle {
    /// The profile name of doodle the star
    /// Format: profiles/{wallet_address}
    #[prost(string, tag="1")]
    pub doodler: ::prost::alloc::string::String,
    /// To where the star is doodled.
    #[prost(enumeration="star_doodle::LocationType", tag="2")]
    pub location_type: i32,
    /// The coordinates of the star doodle.
    #[prost(message, optional, tag="3")]
    pub position: ::core::option::Option<Position>,
}
/// Nested message and enum types in `StarDoodle`.
pub mod star_doodle {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum LocationType {
        /// default value. this value is unused.
        TypeUnspecified = 0,
        ///
        Square = 1,
        ///
        Backspace = 2,
    }
    impl LocationType {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                LocationType::TypeUnspecified => "TYPE_UNSPECIFIED",
                LocationType::Square => "SQUARE",
                LocationType::Backspace => "BACKSPACE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
                "SQUARE" => Some(Self::Square),
                "BACKSPACE" => Some(Self::Backspace),
                _ => None,
            }
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Position {
    /// The x coordinate of the star doodle.
    #[prost(int32, tag="1")]
    pub x: i32,
    /// The y coordinate of the star doodle.
    #[prost(int32, tag="2")]
    pub y: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Star {
    #[prost(enumeration="star::StarColor", tag="1")]
    pub color: i32,
}
/// Nested message and enum types in `Star`.
pub mod star {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum StarColor {
        /// default value. this value is unused.
        ColorUnspecified = 0,
        ///
        Yellow = 1,
        ///
        Red = 2,
        Green = 3,
        Blue = 4,
    }
    impl StarColor {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                StarColor::ColorUnspecified => "COLOR_UNSPECIFIED",
                StarColor::Yellow => "YELLOW",
                StarColor::Red => "RED",
                StarColor::Green => "GREEN",
                StarColor::Blue => "BLUE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "COLOR_UNSPECIFIED" => Some(Self::ColorUnspecified),
                "YELLOW" => Some(Self::Yellow),
                "RED" => Some(Self::Red),
                "GREEN" => Some(Self::Green),
                "BLUE" => Some(Self::Blue),
                _ => None,
            }
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum StarDoodleAction {
    /// default value. this value is unused.
    TypeUnspecified = 0,
    ///
    Doodle = 1,
    ///
    Mine = 2,
}
impl StarDoodleAction {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            StarDoodleAction::TypeUnspecified => "TYPE_UNSPECIFIED",
            StarDoodleAction::Doodle => "DOODLE",
            StarDoodleAction::Mine => "MINE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "TYPE_UNSPECIFIED" => Some(Self::TypeUnspecified),
            "DOODLE" => Some(Self::Doodle),
            "MINE" => Some(Self::Mine),
            _ => None,
        }
    }
}
include!("ethereum.v1.outpost.tonic.rs");
// @@protoc_insertion_point(module)
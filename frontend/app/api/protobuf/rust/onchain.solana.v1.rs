// @generated
/// Trade
/// Reference: <https://github.com/Topledger/solana-programs/blob/b6532ee5b9c0608903d6b8b9270cce7b161adf55/dex-trades/proto/output.proto>
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Trade {
    /// 블록 날짜
    #[prost(string, tag="1")]
    pub block_date: ::prost::alloc::string::String,
    /// 블록 생성 시간 (Unix timestamp)
    #[prost(int64, tag="2")]
    pub block_time: i64,
    /// 블록 슬롯 번호
    #[prost(uint64, tag="3")]
    pub block_slot: u64,
    /// 트랜잭션 ID (시그니처)
    #[prost(string, tag="4")]
    pub tx_id: ::prost::alloc::string::String,
    /// 트랜잭션 서명자의 주소
    #[prost(string, tag="5")]
    pub signer: ::prost::alloc::string::String,
    /// 유동성 풀의 주소
    #[prost(string, tag="6")]
    pub pool_address: ::prost::alloc::string::String,
    /// 기준 토큰(base token)의 민트 주소
    #[prost(string, tag="7")]
    pub base_mint: ::prost::alloc::string::String,
    /// 상대 토큰(quote token)의 민트 주소
    #[prost(string, tag="8")]
    pub quote_mint: ::prost::alloc::string::String,
    /// 기준 토큰의 보관 계정 주소
    #[prost(string, tag="9")]
    pub base_vault: ::prost::alloc::string::String,
    /// 상대 토큰의 보관 계정 주소
    #[prost(string, tag="10")]
    pub quote_vault: ::prost::alloc::string::String,
    /// 기준 토큰의 거래량
    #[prost(double, tag="11")]
    pub base_amount: f64,
    /// 상대 토큰의 거래량
    #[prost(double, tag="12")]
    pub quote_amount: f64,
    /// 내부 인스트럭션 여부
    #[prost(bool, tag="13")]
    pub is_inner_instruction: bool,
    /// 인스트럭션 인덱스
    #[prost(uint32, tag="14")]
    pub instruction_index: u32,
    /// 인스트럭션 타입 (예: swap, deposit 등)
    #[prost(string, tag="15")]
    pub instruction_type: ::prost::alloc::string::String,
    /// 내부 인스트럭션의 인덱스
    #[prost(uint32, tag="16")]
    pub inner_instruxtion_index: u32,
    /// 외부 프로그램 ID (호출한 프로그램)
    #[prost(string, tag="17")]
    pub outer_program: ::prost::alloc::string::String,
    /// 내부 프로그램 ID (실제 실행된 프로그램)
    #[prost(string, tag="18")]
    pub inner_program: ::prost::alloc::string::String,
    /// 트랜잭션 수수료 (lamports 단위)
    #[prost(uint64, tag="19")]
    pub txn_fee_lamports: u64,
    /// 서명자의 SOL 잔액 변화량 (lamports 단위)
    #[prost(int64, tag="20")]
    pub signer_lamports_change: i64,
}
// @@protoc_insertion_point(module)

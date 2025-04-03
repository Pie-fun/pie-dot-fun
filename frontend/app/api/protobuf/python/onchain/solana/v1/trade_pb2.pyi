from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class Trade(_message.Message):
    __slots__ = ("block_date", "block_time", "block_slot", "tx_id", "signer", "pool_address", "base_mint", "quote_mint", "base_vault", "quote_vault", "base_amount", "quote_amount", "is_inner_instruction", "instruction_index", "instruction_type", "inner_instruxtion_index", "outer_program", "inner_program", "txn_fee_lamports", "signer_lamports_change")
    BLOCK_DATE_FIELD_NUMBER: _ClassVar[int]
    BLOCK_TIME_FIELD_NUMBER: _ClassVar[int]
    BLOCK_SLOT_FIELD_NUMBER: _ClassVar[int]
    TX_ID_FIELD_NUMBER: _ClassVar[int]
    SIGNER_FIELD_NUMBER: _ClassVar[int]
    POOL_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BASE_MINT_FIELD_NUMBER: _ClassVar[int]
    QUOTE_MINT_FIELD_NUMBER: _ClassVar[int]
    BASE_VAULT_FIELD_NUMBER: _ClassVar[int]
    QUOTE_VAULT_FIELD_NUMBER: _ClassVar[int]
    BASE_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    QUOTE_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    IS_INNER_INSTRUCTION_FIELD_NUMBER: _ClassVar[int]
    INSTRUCTION_INDEX_FIELD_NUMBER: _ClassVar[int]
    INSTRUCTION_TYPE_FIELD_NUMBER: _ClassVar[int]
    INNER_INSTRUXTION_INDEX_FIELD_NUMBER: _ClassVar[int]
    OUTER_PROGRAM_FIELD_NUMBER: _ClassVar[int]
    INNER_PROGRAM_FIELD_NUMBER: _ClassVar[int]
    TXN_FEE_LAMPORTS_FIELD_NUMBER: _ClassVar[int]
    SIGNER_LAMPORTS_CHANGE_FIELD_NUMBER: _ClassVar[int]
    block_date: str
    block_time: int
    block_slot: int
    tx_id: str
    signer: str
    pool_address: str
    base_mint: str
    quote_mint: str
    base_vault: str
    quote_vault: str
    base_amount: float
    quote_amount: float
    is_inner_instruction: bool
    instruction_index: int
    instruction_type: str
    inner_instruxtion_index: int
    outer_program: str
    inner_program: str
    txn_fee_lamports: int
    signer_lamports_change: int
    def __init__(self, block_date: _Optional[str] = ..., block_time: _Optional[int] = ..., block_slot: _Optional[int] = ..., tx_id: _Optional[str] = ..., signer: _Optional[str] = ..., pool_address: _Optional[str] = ..., base_mint: _Optional[str] = ..., quote_mint: _Optional[str] = ..., base_vault: _Optional[str] = ..., quote_vault: _Optional[str] = ..., base_amount: _Optional[float] = ..., quote_amount: _Optional[float] = ..., is_inner_instruction: bool = ..., instruction_index: _Optional[int] = ..., instruction_type: _Optional[str] = ..., inner_instruxtion_index: _Optional[int] = ..., outer_program: _Optional[str] = ..., inner_program: _Optional[str] = ..., txn_fee_lamports: _Optional[int] = ..., signer_lamports_change: _Optional[int] = ...) -> None: ...

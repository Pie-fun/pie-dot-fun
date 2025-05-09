# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ethereum/v1/outpost/bank.proto
# Protobuf Python Version: 6.30.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    6,
    30,
    1,
    '',
    'ethereum/v1/outpost/bank.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.api import field_behavior_pb2 as google_dot_api_dot_field__behavior__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.api import resource_pb2 as google_dot_api_dot_resource__pb2
from google.api import client_pb2 as google_dot_api_dot_client__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1e\x65thereum/v1/outpost/bank.proto\x12\x13\x65thereum.v1.outpost\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"\xc9\x01\n\x0fTransferRequest\x12\x43\n\x07\x61\x63\x63ount\x18\x01 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n outpost.spacebarapis.xyz/AccountR\x07\x61\x63\x63ount\x12\x39\n\x02to\x18\x02 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n outpost.spacebarapis.xyz/AccountR\x02to\x12\x1c\n\x06\x61mount\x18\x03 \x01(\rB\x04\xe2\x41\x01\x02R\x06\x61mount\x12\x18\n\x04\x65tag\x18\x04 \x01(\tB\x04\xe2\x41\x01\x02R\x04\x65tag\"~\n\x19WithdrawOptimisticRequest\x12\x43\n\x07\x61\x63\x63ount\x18\x01 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n outpost.spacebarapis.xyz/AccountR\x07\x61\x63\x63ount\x12\x1c\n\x06\x61mount\x18\x02 \x01(\rB\x04\xe2\x41\x01\x02R\x06\x61mount\"}\n\x18\x44\x65positOptimisticRequest\x12\x43\n\x07\x61\x63\x63ount\x18\x01 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n outpost.spacebarapis.xyz/AccountR\x07\x61\x63\x63ount\x12\x1c\n\x06\x61mount\x18\x02 \x01(\rB\x04\xe2\x41\x01\x02R\x06\x61mount\"X\n\x11GetAccountRequest\x12\x43\n\x07\x61\x63\x63ount\x18\x01 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n outpost.spacebarapis.xyz/AccountR\x07\x61\x63\x63ount\"Q\n\x13ListAccountsRequest\x12\x1b\n\tpage_size\x18\x01 \x01(\x05R\x08pageSize\x12\x1d\n\npage_token\x18\x02 \x01(\tR\tpageToken\"x\n\x14ListAccountsResponse\x12\x38\n\x08\x61\x63\x63ounts\x18\x01 \x03(\x0b\x32\x1c.ethereum.v1.outpost.AccountR\x08\x61\x63\x63ounts\x12&\n\x0fnext_page_token\x18\x02 \x01(\tR\rnextPageToken\"\x91\x03\n\x07\x41\x63\x63ount\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x1e\n\x07\x61\x64\x64ress\x18\x02 \x01(\tB\x04\xe2\x41\x01\x03R\x07\x61\x64\x64ress\x12<\n\x07\x62\x61lance\x18\x04 \x01(\x0b\x32\x1c.ethereum.v1.outpost.BalanceB\x04\xe2\x41\x01\x03R\x07\x62\x61lance\x12S\n\x11last_transactions\x18\x06 \x03(\x0b\x32 .ethereum.v1.outpost.TransactionB\x04\xe2\x41\x01\x03R\x10lastTransactions\x12\x41\n\x0b\x63reate_time\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\ncreateTime\x12\x41\n\x0bupdate_time\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\nupdateTime:9\xea\x41\x36\n outpost.spacebarapis.xyz/Account\x12\x12\x61\x63\x63ounts/{address}\"\x81\x01\n\x07\x42\x61lance\x12\x33\n\x06symbol\x18\x01 \x01(\x0e\x32\x1b.ethereum.v1.outpost.SymbolR\x06symbol\x12\x16\n\x06\x61mount\x18\x02 \x01(\rR\x06\x61mount\x12)\n\x10\x63umulative_total\x18\x03 \x01(\rR\x0f\x63umulativeTotal\"T\n\x05Money\x12\x33\n\x06symbol\x18\x01 \x01(\x0e\x32\x1b.ethereum.v1.outpost.SymbolR\x06symbol\x12\x16\n\x06\x61mount\x18\x02 \x01(\rR\x06\x61mount\"\xec\x02\n\x0bTransaction\x12\x0e\n\x02id\x18\x01 \x01(\x04R\x02id\x12\x39\n\x04type\x18\x02 \x01(\x0e\x32%.ethereum.v1.outpost.Transaction.TypeR\x04type\x12\x30\n\x05money\x18\x03 \x01(\x0b\x32\x1a.ethereum.v1.outpost.MoneyR\x05money\x12L\n\trecipient\x18\x04 \x01(\tB)\xe2\x41\x01\x03\xfa\x41\"\n outpost.spacebarapis.xyz/AccountH\x00R\trecipient\x88\x01\x01\x12;\n\x0b\x63reate_time\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\ncreateTime\"G\n\x04Type\x12\x14\n\x10TYPE_UNSPECIFIED\x10\x00\x12\x0b\n\x07\x44\x45POSIT\x10\x01\x12\x0e\n\nWITHDRAWAL\x10\x02\x12\x0c\n\x08TRANSFER\x10\x03\x42\x0c\n\n_recipient**\n\x06Symbol\x12\x16\n\x12SYMBOL_UNSPECIFIED\x10\x00\x12\x08\n\x04STAR\x10\x01\x32\xc4\x04\n\x0b\x42\x61nkService\x12\x98\x01\n\x1a\x44\x65positStarTokenOptimistic\x12-.ethereum.v1.outpost.DepositOptimisticRequest\x1a\x1c.ethereum.v1.outpost.Account\"-\x82\xd3\xe4\x93\x02\'\"\"/v1/tokens/STAR:deposit_optimistic:\x01*\x12\x9b\x01\n\x1bWithdrawStarTokenOptimistic\x12..ethereum.v1.outpost.WithdrawOptimisticRequest\x1a\x1c.ethereum.v1.outpost.Account\".\x82\xd3\xe4\x93\x02(\"#/v1/tokens/STAR:withdraw_optimistic:\x01*\x12~\n\nGetAccount\x12&.ethereum.v1.outpost.GetAccountRequest\x1a\x1c.ethereum.v1.outpost.Account\"*\xda\x41\x07\x61\x63\x63ount\x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/{account=accounts/*}\x12|\n\x0cListAccounts\x12(.ethereum.v1.outpost.ListAccountsRequest\x1a).ethereum.v1.outpost.ListAccountsResponse\"\x17\xda\x41\x00\x82\xd3\xe4\x93\x02\x0e\x12\x0c/v1/accountsBAZ?github.com/ao-labs/spacebar-apis/go/ethereum/v1/outpost;outpostb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ethereum.v1.outpost.bank_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z?github.com/ao-labs/spacebar-apis/go/ethereum/v1/outpost;outpost'
  _globals['_TRANSFERREQUEST'].fields_by_name['account']._loaded_options = None
  _globals['_TRANSFERREQUEST'].fields_by_name['account']._serialized_options = b'\342A\001\002\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_TRANSFERREQUEST'].fields_by_name['to']._loaded_options = None
  _globals['_TRANSFERREQUEST'].fields_by_name['to']._serialized_options = b'\342A\001\002\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_TRANSFERREQUEST'].fields_by_name['amount']._loaded_options = None
  _globals['_TRANSFERREQUEST'].fields_by_name['amount']._serialized_options = b'\342A\001\002'
  _globals['_TRANSFERREQUEST'].fields_by_name['etag']._loaded_options = None
  _globals['_TRANSFERREQUEST'].fields_by_name['etag']._serialized_options = b'\342A\001\002'
  _globals['_WITHDRAWOPTIMISTICREQUEST'].fields_by_name['account']._loaded_options = None
  _globals['_WITHDRAWOPTIMISTICREQUEST'].fields_by_name['account']._serialized_options = b'\342A\001\002\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_WITHDRAWOPTIMISTICREQUEST'].fields_by_name['amount']._loaded_options = None
  _globals['_WITHDRAWOPTIMISTICREQUEST'].fields_by_name['amount']._serialized_options = b'\342A\001\002'
  _globals['_DEPOSITOPTIMISTICREQUEST'].fields_by_name['account']._loaded_options = None
  _globals['_DEPOSITOPTIMISTICREQUEST'].fields_by_name['account']._serialized_options = b'\342A\001\002\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_DEPOSITOPTIMISTICREQUEST'].fields_by_name['amount']._loaded_options = None
  _globals['_DEPOSITOPTIMISTICREQUEST'].fields_by_name['amount']._serialized_options = b'\342A\001\002'
  _globals['_GETACCOUNTREQUEST'].fields_by_name['account']._loaded_options = None
  _globals['_GETACCOUNTREQUEST'].fields_by_name['account']._serialized_options = b'\342A\001\002\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_ACCOUNT'].fields_by_name['address']._loaded_options = None
  _globals['_ACCOUNT'].fields_by_name['address']._serialized_options = b'\342A\001\003'
  _globals['_ACCOUNT'].fields_by_name['balance']._loaded_options = None
  _globals['_ACCOUNT'].fields_by_name['balance']._serialized_options = b'\342A\001\003'
  _globals['_ACCOUNT'].fields_by_name['last_transactions']._loaded_options = None
  _globals['_ACCOUNT'].fields_by_name['last_transactions']._serialized_options = b'\342A\001\003'
  _globals['_ACCOUNT'].fields_by_name['create_time']._loaded_options = None
  _globals['_ACCOUNT'].fields_by_name['create_time']._serialized_options = b'\342A\001\003'
  _globals['_ACCOUNT'].fields_by_name['update_time']._loaded_options = None
  _globals['_ACCOUNT'].fields_by_name['update_time']._serialized_options = b'\342A\001\003'
  _globals['_ACCOUNT']._loaded_options = None
  _globals['_ACCOUNT']._serialized_options = b'\352A6\n outpost.spacebarapis.xyz/Account\022\022accounts/{address}'
  _globals['_TRANSACTION'].fields_by_name['recipient']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['recipient']._serialized_options = b'\342A\001\003\372A\"\n outpost.spacebarapis.xyz/Account'
  _globals['_BANKSERVICE'].methods_by_name['DepositStarTokenOptimistic']._loaded_options = None
  _globals['_BANKSERVICE'].methods_by_name['DepositStarTokenOptimistic']._serialized_options = b'\202\323\344\223\002\'\"\"/v1/tokens/STAR:deposit_optimistic:\001*'
  _globals['_BANKSERVICE'].methods_by_name['WithdrawStarTokenOptimistic']._loaded_options = None
  _globals['_BANKSERVICE'].methods_by_name['WithdrawStarTokenOptimistic']._serialized_options = b'\202\323\344\223\002(\"#/v1/tokens/STAR:withdraw_optimistic:\001*'
  _globals['_BANKSERVICE'].methods_by_name['GetAccount']._loaded_options = None
  _globals['_BANKSERVICE'].methods_by_name['GetAccount']._serialized_options = b'\332A\007account\202\323\344\223\002\032\022\030/v1/{account=accounts/*}'
  _globals['_BANKSERVICE'].methods_by_name['ListAccounts']._loaded_options = None
  _globals['_BANKSERVICE'].methods_by_name['ListAccounts']._serialized_options = b'\332A\000\202\323\344\223\002\016\022\014/v1/accounts'
  _globals['_SYMBOL']._serialized_start=2009
  _globals['_SYMBOL']._serialized_end=2051
  _globals['_TRANSFERREQUEST']._serialized_start=267
  _globals['_TRANSFERREQUEST']._serialized_end=468
  _globals['_WITHDRAWOPTIMISTICREQUEST']._serialized_start=470
  _globals['_WITHDRAWOPTIMISTICREQUEST']._serialized_end=596
  _globals['_DEPOSITOPTIMISTICREQUEST']._serialized_start=598
  _globals['_DEPOSITOPTIMISTICREQUEST']._serialized_end=723
  _globals['_GETACCOUNTREQUEST']._serialized_start=725
  _globals['_GETACCOUNTREQUEST']._serialized_end=813
  _globals['_LISTACCOUNTSREQUEST']._serialized_start=815
  _globals['_LISTACCOUNTSREQUEST']._serialized_end=896
  _globals['_LISTACCOUNTSRESPONSE']._serialized_start=898
  _globals['_LISTACCOUNTSRESPONSE']._serialized_end=1018
  _globals['_ACCOUNT']._serialized_start=1021
  _globals['_ACCOUNT']._serialized_end=1422
  _globals['_BALANCE']._serialized_start=1425
  _globals['_BALANCE']._serialized_end=1554
  _globals['_MONEY']._serialized_start=1556
  _globals['_MONEY']._serialized_end=1640
  _globals['_TRANSACTION']._serialized_start=1643
  _globals['_TRANSACTION']._serialized_end=2007
  _globals['_TRANSACTION_TYPE']._serialized_start=1922
  _globals['_TRANSACTION_TYPE']._serialized_end=1993
  _globals['_BANKSERVICE']._serialized_start=2054
  _globals['_BANKSERVICE']._serialized_end=2634
# @@protoc_insertion_point(module_scope)

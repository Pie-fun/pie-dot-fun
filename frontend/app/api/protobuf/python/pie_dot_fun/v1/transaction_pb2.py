# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/transaction.proto
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
    'pie-dot-fun/v1/transaction.proto'
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
from pie_dot_fun.v1 import auth_pb2 as pie__dot__fun_dot_v1_dot_auth__pb2
from pie_dot_fun.v1 import common_pb2 as pie__dot__fun_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n pie-dot-fun/v1/transaction.proto\x12\x0cpiedotfun.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x19pie-dot-fun/v1/auth.proto\x1a\x1bpie-dot-fun/v1/common.proto\"j\n\x15GetTransactionRequest\x12Q\n\x0btransaction\x18\x01 \x01(\tB/\xe2\x41\x01\x02\xfa\x41(\n&piedotfun.spacebarapis.xyz/TransactionR\x0btransaction\"m\n\x17ListTransactionsRequest\x12\x1b\n\tpage_size\x18\x01 \x01(\x05R\x08pageSize\x12\x1d\n\npage_token\x18\x02 \x01(\tR\tpageToken\x12\x16\n\x06\x66ilter\x18\x03 \x01(\tR\x06\x66ilter\"\x87\x01\n\x18ListTransactionsResponse\x12\x43\n\x0ctransactions\x18\x01 \x03(\x0b\x32\x19.piedotfun.v1.TransactionB\x04\xe2\x41\x01\x02R\x0ctransactions\x12&\n\x0fnext_page_token\x18\x02 \x01(\tR\rnextPageToken\"\xa1\x07\n\x0bTransaction\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x33\n\x05\x63hain\x18\x02 \x01(\x0e\x32\x17.piedotfun.v1.ChainTypeB\x04\xe2\x41\x01\x03R\x05\x63hain\x12\"\n\tsignature\x18\x03 \x01(\tB\x04\xe2\x41\x01\x03R\tsignature\x12R\n\x0c\x62\x61sket_token\x18\x04 \x01(\tB/\xe2\x41\x01\x03\xfa\x41(\n&piedotfun.spacebarapis.xyz/BasketTokenR\x0b\x62\x61sketToken\x12\x45\n\x04\x66rom\x18\x05 \x01(\tB1\xe2\x41\x01\x03\xfa\x41*\n(piedotfun.spacebarapis.xyz/HoldingWalletR\x04\x66rom\x12\x41\n\x02to\x18\x06 \x01(\tB1\xe2\x41\x01\x03\xfa\x41*\n(piedotfun.spacebarapis.xyz/HoldingWalletR\x02to\x12\x37\n\x04type\x18\x08 \x01(\x0e\x32\x1d.piedotfun.v1.TransactionTypeB\x04\xe2\x41\x01\x03R\x04type\x12 \n\x08quantity\x18\t \x01(\x03\x42\x04\xe2\x41\x01\x03R\x08quantity\x12\\\n\x0f\x65xecution_price\x18\n \x03(\x0b\x32-.piedotfun.v1.Transaction.ExecutionPriceEntryB\x04\xe2\x41\x01\x03R\x0e\x65xecutionPrice\x12P\n\x0btotal_value\x18\x0b \x03(\x0b\x32).piedotfun.v1.Transaction.TotalValueEntryB\x04\xe2\x41\x01\x03R\ntotalValue\x12\x41\n\x0b\x63reate_time\x18\r \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\ncreateTime\x1aV\n\x13\x45xecutionPriceEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x05value:\x02\x38\x01\x1aR\n\x0fTotalValueEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x05value:\x02\x38\x01:M\xea\x41J\n&piedotfun.spacebarapis.xyz/Transaction\x12 transactions/{chain}/{signature}*\x8a\x01\n\x0fTransactionType\x12 \n\x1cTRANSACTION_TYPE_UNSPECIFIED\x10\x00\x12\x19\n\x15TRANSACTION_TYPE_MINT\x10\x01\x12\x1d\n\x19TRANSACTION_TYPE_TRANSFER\x10\x02\x12\x1b\n\x17TRANSACTION_TYPE_REDEEM\x10\x03\x32\xb5\x02\n\x12TransactionService\x12\x94\x01\n\x0eGetTransaction\x12#.piedotfun.v1.GetTransactionRequest\x1a\x19.piedotfun.v1.Transaction\"B\xda\x41\x0btransaction\x88\xb5\x18\x01\x90\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02\"\x12 /v1/{transaction=transactions/*}\x12\x87\x01\n\x10ListTransactions\x12%.piedotfun.v1.ListTransactionsRequest\x1a&.piedotfun.v1.ListTransactionsResponse\"$\x88\xb5\x18\x01\x90\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02\x12\x12\x10/v1/transactionsB>Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfunb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.transaction_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfun'
  _globals['_GETTRANSACTIONREQUEST'].fields_by_name['transaction']._loaded_options = None
  _globals['_GETTRANSACTIONREQUEST'].fields_by_name['transaction']._serialized_options = b'\342A\001\002\372A(\n&piedotfun.spacebarapis.xyz/Transaction'
  _globals['_LISTTRANSACTIONSRESPONSE'].fields_by_name['transactions']._loaded_options = None
  _globals['_LISTTRANSACTIONSRESPONSE'].fields_by_name['transactions']._serialized_options = b'\342A\001\002'
  _globals['_TRANSACTION_EXECUTIONPRICEENTRY']._loaded_options = None
  _globals['_TRANSACTION_EXECUTIONPRICEENTRY']._serialized_options = b'8\001'
  _globals['_TRANSACTION_TOTALVALUEENTRY']._loaded_options = None
  _globals['_TRANSACTION_TOTALVALUEENTRY']._serialized_options = b'8\001'
  _globals['_TRANSACTION'].fields_by_name['chain']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['chain']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['signature']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['signature']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['basket_token']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['basket_token']._serialized_options = b'\342A\001\003\372A(\n&piedotfun.spacebarapis.xyz/BasketToken'
  _globals['_TRANSACTION'].fields_by_name['from']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['from']._serialized_options = b'\342A\001\003\372A*\n(piedotfun.spacebarapis.xyz/HoldingWallet'
  _globals['_TRANSACTION'].fields_by_name['to']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['to']._serialized_options = b'\342A\001\003\372A*\n(piedotfun.spacebarapis.xyz/HoldingWallet'
  _globals['_TRANSACTION'].fields_by_name['type']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['type']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['quantity']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['quantity']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['execution_price']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['execution_price']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['total_value']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['total_value']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION'].fields_by_name['create_time']._loaded_options = None
  _globals['_TRANSACTION'].fields_by_name['create_time']._serialized_options = b'\342A\001\003'
  _globals['_TRANSACTION']._loaded_options = None
  _globals['_TRANSACTION']._serialized_options = b'\352AJ\n&piedotfun.spacebarapis.xyz/Transaction\022 transactions/{chain}/{signature}'
  _globals['_TRANSACTIONSERVICE'].methods_by_name['GetTransaction']._loaded_options = None
  _globals['_TRANSACTIONSERVICE'].methods_by_name['GetTransaction']._serialized_options = b'\332A\013transaction\210\265\030\001\220\265\030\001\230\265\030\001\202\323\344\223\002\"\022 /v1/{transaction=transactions/*}'
  _globals['_TRANSACTIONSERVICE'].methods_by_name['ListTransactions']._loaded_options = None
  _globals['_TRANSACTIONSERVICE'].methods_by_name['ListTransactions']._serialized_options = b'\210\265\030\001\220\265\030\001\230\265\030\001\202\323\344\223\002\022\022\020/v1/transactions'
  _globals['_TRANSACTIONTYPE']._serialized_start=1607
  _globals['_TRANSACTIONTYPE']._serialized_end=1745
  _globals['_GETTRANSACTIONREQUEST']._serialized_start=317
  _globals['_GETTRANSACTIONREQUEST']._serialized_end=423
  _globals['_LISTTRANSACTIONSREQUEST']._serialized_start=425
  _globals['_LISTTRANSACTIONSREQUEST']._serialized_end=534
  _globals['_LISTTRANSACTIONSRESPONSE']._serialized_start=537
  _globals['_LISTTRANSACTIONSRESPONSE']._serialized_end=672
  _globals['_TRANSACTION']._serialized_start=675
  _globals['_TRANSACTION']._serialized_end=1604
  _globals['_TRANSACTION_EXECUTIONPRICEENTRY']._serialized_start=1355
  _globals['_TRANSACTION_EXECUTIONPRICEENTRY']._serialized_end=1441
  _globals['_TRANSACTION_TOTALVALUEENTRY']._serialized_start=1443
  _globals['_TRANSACTION_TOTALVALUEENTRY']._serialized_end=1525
  _globals['_TRANSACTIONSERVICE']._serialized_start=1748
  _globals['_TRANSACTIONSERVICE']._serialized_end=2057
# @@protoc_insertion_point(module_scope)

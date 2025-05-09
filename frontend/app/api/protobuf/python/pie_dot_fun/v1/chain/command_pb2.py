# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/chain/command.proto
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
    'pie-dot-fun/v1/chain/command.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\"pie-dot-fun/v1/chain/command.proto\x12\x12piedotfun.v1.chain\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x19pie-dot-fun/v1/auth.proto\"\xb6\x06\n\x10RebalanceCommand\x12^\n\x0c\x65qual_weight\x18\x01 \x01(\x0b\x32\x39.piedotfun.v1.chain.RebalanceCommand.EqualMarketCapWeightH\x00R\x0b\x65qualWeight\x12\x61\n\rmanual_weight\x18\x02 \x01(\x0b\x32:.piedotfun.v1.chain.RebalanceCommand.ManualMarketCapWeightH\x00R\x0cmanualWeight\x12\x42\n\x05trade\x18\x03 \x01(\x0b\x32*.piedotfun.v1.chain.RebalanceCommand.TradeH\x00R\x05trade\x1a\x16\n\x14\x45qualMarketCapWeight\x1a\xf4\x01\n\x15ManualMarketCapWeight\x12^\n\x08requests\x18\x01 \x03(\x0b\x32\x42.piedotfun.v1.chain.RebalanceCommand.ManualMarketCapWeight.RequestR\x08requests\x1a{\n\x07Request\x12X\n\x0e\x66ungible_token\x18\x01 \x01(\tB1\xe2\x41\x01\x02\xfa\x41*\n(piedotfun.spacebarapis.xyz/FungibleTokenR\rfungibleToken\x12\x16\n\x06weight\x18\x02 \x01(\x01R\x06weight\x1a\xff\x01\n\x05Trade\x12N\n\x08requests\x18\x01 \x03(\x0b\x32\x32.piedotfun.v1.chain.RebalanceCommand.Trade.RequestR\x08requests\x1a\xa5\x01\n\x07Request\x12X\n\x0e\x66ungible_token\x18\x01 \x01(\tB1\xe2\x41\x01\x02\xfa\x41*\n(piedotfun.spacebarapis.xyz/FungibleTokenR\rfungibleToken\x12\x15\n\x06is_buy\x18\x02 \x01(\x08R\x05isBuy\x12)\n\x10\x66ormatted_amount\x18\x03 \x01(\tR\x0f\x66ormattedAmountB\n\n\x08strategy\"\xa1\x02\n\x1bRebalanceBasketTokenRequest\x12R\n\x0c\x62\x61sket_token\x18\x01 \x01(\tB/\xe2\x41\x01\x02\xfa\x41(\n&piedotfun.spacebarapis.xyz/BasketTokenR\x0b\x62\x61sketToken\x12\x18\n\x07\x65xecute\x18\x02 \x01(\x08R\x07\x65xecute\x12\x44\n\x07\x63ommand\x18\x03 \x01(\x0b\x32$.piedotfun.v1.chain.RebalanceCommandB\x04\xe2\x41\x01\x02R\x07\x63ommand\x12N\n\x10\x65xecution_option\x18\x04 \x01(\x0b\x32#.piedotfun.v1.chain.ExecutionOptionR\x0f\x65xecutionOption\"?\n\x1cRebalanceBasketTokenResponse\x12\x1f\n\x0bresult_html\x18\x01 \x01(\tR\nresultHtml\"\xab\x02\n\x0f\x45xecutionOption\x12\x37\n\x18sell_ratio_per_iteration\x18\x01 \x01(\x01R\x15sellRatioPerIteration\x12\x1a\n\x08slippage\x18\x02 \x01(\x01R\x08slippage\x12.\n\x13max_iteration_count\x18\x03 \x01(\x05R\x11maxIterationCount\x12\x43\n\x1e\x65xit_remaining_execution_value\x18\x04 \x01(\x01R\x1b\x65xitRemainingExecutionValue\x12N\n$exit_remaining_execution_value_ratio\x18\x05 \x01(\x01R exitRemainingExecutionValueRatio2\xdf\x01\n\x13\x43hainCommandService\x12\xc7\x01\n\x14RebalanceBasketToken\x12/.piedotfun.v1.chain.RebalanceBasketTokenRequest\x1a\x30.piedotfun.v1.chain.RebalanceBasketTokenResponse\"L\xda\x41\x0c\x62\x61sket_token\x88\xb5\x18\x01\x90\xb5\x18\x00\x98\xb5\x18\x00\x82\xd3\xe4\x93\x02+\"&/v1/chain/command:rebalanceBasketToken:\x01*B@Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chainb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.chain.command_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chain'
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT_REQUEST'].fields_by_name['fungible_token']._loaded_options = None
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT_REQUEST'].fields_by_name['fungible_token']._serialized_options = b'\342A\001\002\372A*\n(piedotfun.spacebarapis.xyz/FungibleToken'
  _globals['_REBALANCECOMMAND_TRADE_REQUEST'].fields_by_name['fungible_token']._loaded_options = None
  _globals['_REBALANCECOMMAND_TRADE_REQUEST'].fields_by_name['fungible_token']._serialized_options = b'\342A\001\002\372A*\n(piedotfun.spacebarapis.xyz/FungibleToken'
  _globals['_REBALANCEBASKETTOKENREQUEST'].fields_by_name['basket_token']._loaded_options = None
  _globals['_REBALANCEBASKETTOKENREQUEST'].fields_by_name['basket_token']._serialized_options = b'\342A\001\002\372A(\n&piedotfun.spacebarapis.xyz/BasketToken'
  _globals['_REBALANCEBASKETTOKENREQUEST'].fields_by_name['command']._loaded_options = None
  _globals['_REBALANCEBASKETTOKENREQUEST'].fields_by_name['command']._serialized_options = b'\342A\001\002'
  _globals['_CHAINCOMMANDSERVICE'].methods_by_name['RebalanceBasketToken']._loaded_options = None
  _globals['_CHAINCOMMANDSERVICE'].methods_by_name['RebalanceBasketToken']._serialized_options = b'\332A\014basket_token\210\265\030\001\220\265\030\000\230\265\030\000\202\323\344\223\002+\"&/v1/chain/command:rebalanceBasketToken:\001*'
  _globals['_REBALANCECOMMAND']._serialized_start=297
  _globals['_REBALANCECOMMAND']._serialized_end=1119
  _globals['_REBALANCECOMMAND_EQUALMARKETCAPWEIGHT']._serialized_start=580
  _globals['_REBALANCECOMMAND_EQUALMARKETCAPWEIGHT']._serialized_end=602
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT']._serialized_start=605
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT']._serialized_end=849
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT_REQUEST']._serialized_start=726
  _globals['_REBALANCECOMMAND_MANUALMARKETCAPWEIGHT_REQUEST']._serialized_end=849
  _globals['_REBALANCECOMMAND_TRADE']._serialized_start=852
  _globals['_REBALANCECOMMAND_TRADE']._serialized_end=1107
  _globals['_REBALANCECOMMAND_TRADE_REQUEST']._serialized_start=942
  _globals['_REBALANCECOMMAND_TRADE_REQUEST']._serialized_end=1107
  _globals['_REBALANCEBASKETTOKENREQUEST']._serialized_start=1122
  _globals['_REBALANCEBASKETTOKENREQUEST']._serialized_end=1411
  _globals['_REBALANCEBASKETTOKENRESPONSE']._serialized_start=1413
  _globals['_REBALANCEBASKETTOKENRESPONSE']._serialized_end=1476
  _globals['_EXECUTIONOPTION']._serialized_start=1479
  _globals['_EXECUTIONOPTION']._serialized_end=1778
  _globals['_CHAINCOMMANDSERVICE']._serialized_start=1781
  _globals['_CHAINCOMMANDSERVICE']._serialized_end=2004
# @@protoc_insertion_point(module_scope)

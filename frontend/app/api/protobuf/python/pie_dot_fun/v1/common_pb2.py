# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/common.proto
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
    'pie-dot-fun/v1/common.proto'
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
from google.type import decimal_pb2 as google_dot_type_dot_decimal__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1bpie-dot-fun/v1/common.proto\x12\x0cpiedotfun.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x19google/type/decimal.proto\"p\n\x08Quantity\x12)\n\x10\x66ormatted_amount\x18\x01 \x01(\tR\x0f\x66ormattedAmount\x12\x1d\n\nraw_amount\x18\x02 \x01(\tR\trawAmount\x12\x1a\n\x08\x64\x65\x63imals\x18\x03 \x01(\rR\x08\x64\x65\x63imals\"\xa1\x01\n\x05Money\x12\x32\n\x08\x63urrency\x18\x01 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyR\x08\x63urrency\x12)\n\x10\x66ormatted_amount\x18\x02 \x01(\tR\x0f\x66ormattedAmount\x12\x1d\n\nraw_amount\x18\x03 \x01(\tR\trawAmount\x12\x1a\n\x08\x64\x65\x63imals\x18\x04 \x01(\rR\x08\x64\x65\x63imals\"\"\n\nPercentage\x12\x14\n\x05value\x18\x01 \x01(\x01R\x05value\"\x94\x01\n\x0cPnLsByPeriod\x12\x38\n\x04pnls\x18\x01 \x03(\x0b\x32$.piedotfun.v1.PnLsByPeriod.PnlsEntryR\x04pnls\x1aJ\n\tPnlsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\'\n\x05value\x18\x02 \x01(\x0b\x32\x11.piedotfun.v1.PnLR\x05value:\x02\x38\x01\"\xb7\x01\n\x03PnL\x12\x38\n\rnominal_value\x18\x01 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x0cnominalValue\x12\x45\n\x11percentage_change\x18\x02 \x01(\x0b\x32\x18.piedotfun.v1.PercentageR\x10percentageChange\x12/\n\x06period\x18\x03 \x01(\x0e\x32\x17.piedotfun.v1.PnLPeriodR\x06period\"\xc7\x01\n\x0bPriceChange\x12\x38\n\rnominal_value\x18\x01 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x0cnominalValue\x12\x45\n\x11percentage_change\x18\x02 \x01(\x0b\x32\x18.piedotfun.v1.PercentageR\x10percentageChange\x12\x37\n\x06period\x18\x03 \x01(\x0e\x32\x1f.piedotfun.v1.PriceChangePeriodR\x06period\"\xcd\x01\n\x14PriceChangesByPeriod\x12Y\n\rprice_changes\x18\x01 \x03(\x0b\x32\x34.piedotfun.v1.PriceChangesByPeriod.PriceChangesEntryR\x0cpriceChanges\x1aZ\n\x11PriceChangesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12/\n\x05value\x18\x02 \x01(\x0b\x32\x19.piedotfun.v1.PriceChangeR\x05value:\x02\x38\x01\"\xb2\x01\n\x03SNS\x12-\n\x04type\x18\x01 \x01(\x0e\x32\x19.piedotfun.v1.SNS.SNSTypeR\x04type\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\x12\x1f\n\x0bprofile_url\x18\x04 \x01(\tR\nprofileUrl\"G\n\x07SNSType\x12\x18\n\x14SNS_TYPE_UNSPECIFIED\x10\x00\x12\t\n\x05\x45MAIL\x10\x01\x12\n\n\x06GOOGLE\x10\x02\x12\x0b\n\x07TWITTER\x10\x03*\x99\x01\n\tChainType\x12\x15\n\x11\x43HAIN_UNSPECIFIED\x10\x00\x12\n\n\x06SOLANA\x10\x01\x12\x13\n\x0eSOLANA_TESTNET\x10\xe9\x07\x12\x12\n\rSOLANA_DEVNET\x10\xd1\x0f\x12\x0c\n\x08\x45THEREUM\x10\x02\x12\x15\n\x10\x45THEREUM_SEPOLIA\x10\xea\x07\x12\x08\n\x04\x42\x41SE\x10\x03\x12\x11\n\x0c\x42\x41SE_SEPOLIA\x10\xeb\x07*.\n\x06VMType\x12\x12\n\x0eVM_UNSPECIFIED\x10\x00\x12\x07\n\x03SVM\x10\x01\x12\x07\n\x03\x45VM\x10\x02*[\n\x08\x43urrency\x12\x18\n\x14\x43URRENCY_UNSPECIFIED\x10\x00\x12\x10\n\x0c\x43URRENCY_SOL\x10\x01\x12\x11\n\rCURRENCY_USDC\x10\x02\x12\x10\n\x0c\x43URRENCY_ETH\x10\x03*o\n\tPnLPeriod\x12\x1a\n\x16PNL_PERIOD_UNSPECIFIED\x10\x00\x12\x15\n\x11PNL_PERIOD_1_HOUR\x10\x01\x12\x16\n\x12PNL_PERIOD_24_HOUR\x10\x02\x12\x17\n\x13PNL_PERIOD_ALL_TIME\x10\x05*\xda\x01\n\x11PriceChangePeriod\x12#\n\x1fPRICE_CHANGE_PERIOD_UNSPECIFIED\x10\x00\x12\x1e\n\x1aPRICE_CHANGE_PERIOD_1_HOUR\x10\x01\x12\x1f\n\x1bPRICE_CHANGE_PERIOD_24_HOUR\x10\x02\x12\x1d\n\x19PRICE_CHANGE_PERIOD_7_DAY\x10\x03\x12\x1e\n\x1aPRICE_CHANGE_PERIOD_30_DAY\x10\x04\x12 \n\x1cPRICE_CHANGE_PERIOD_ALL_TIME\x10\x05\x42>Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfunb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.common_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfun'
  _globals['_PNLSBYPERIOD_PNLSENTRY']._loaded_options = None
  _globals['_PNLSBYPERIOD_PNLSENTRY']._serialized_options = b'8\001'
  _globals['_PRICECHANGESBYPERIOD_PRICECHANGESENTRY']._loaded_options = None
  _globals['_PRICECHANGESBYPERIOD_PRICECHANGESENTRY']._serialized_options = b'8\001'
  _globals['_CHAINTYPE']._serialized_start=1526
  _globals['_CHAINTYPE']._serialized_end=1679
  _globals['_VMTYPE']._serialized_start=1681
  _globals['_VMTYPE']._serialized_end=1727
  _globals['_CURRENCY']._serialized_start=1729
  _globals['_CURRENCY']._serialized_end=1820
  _globals['_PNLPERIOD']._serialized_start=1822
  _globals['_PNLPERIOD']._serialized_end=1933
  _globals['_PRICECHANGEPERIOD']._serialized_start=1936
  _globals['_PRICECHANGEPERIOD']._serialized_end=2154
  _globals['_QUANTITY']._serialized_start=283
  _globals['_QUANTITY']._serialized_end=395
  _globals['_MONEY']._serialized_start=398
  _globals['_MONEY']._serialized_end=559
  _globals['_PERCENTAGE']._serialized_start=561
  _globals['_PERCENTAGE']._serialized_end=595
  _globals['_PNLSBYPERIOD']._serialized_start=598
  _globals['_PNLSBYPERIOD']._serialized_end=746
  _globals['_PNLSBYPERIOD_PNLSENTRY']._serialized_start=672
  _globals['_PNLSBYPERIOD_PNLSENTRY']._serialized_end=746
  _globals['_PNL']._serialized_start=749
  _globals['_PNL']._serialized_end=932
  _globals['_PRICECHANGE']._serialized_start=935
  _globals['_PRICECHANGE']._serialized_end=1134
  _globals['_PRICECHANGESBYPERIOD']._serialized_start=1137
  _globals['_PRICECHANGESBYPERIOD']._serialized_end=1342
  _globals['_PRICECHANGESBYPERIOD_PRICECHANGESENTRY']._serialized_start=1252
  _globals['_PRICECHANGESBYPERIOD_PRICECHANGESENTRY']._serialized_end=1342
  _globals['_SNS']._serialized_start=1345
  _globals['_SNS']._serialized_end=1523
  _globals['_SNS_SNSTYPE']._serialized_start=1452
  _globals['_SNS_SNSTYPE']._serialized_end=1523
# @@protoc_insertion_point(module_scope)

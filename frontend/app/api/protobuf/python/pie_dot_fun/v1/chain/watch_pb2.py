# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/chain/watch.proto
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
    'pie-dot-fun/v1/chain/watch.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n pie-dot-fun/v1/chain/watch.proto\x12\x12piedotfun.v1.chain\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\";\n\x0f\x42\x61sketComponent\x12\x12\n\x04mint\x18\x01 \x01(\tR\x04mint\x12\x14\n\x05ratio\x18\x02 \x01(\tR\x05ratio\"\xe1\x01\n\x11\x43reateBasketEvent\x12\x1b\n\tbasket_id\x18\x01 \x01(\x04R\x08\x62\x61sketId\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x16\n\x06symbol\x18\x03 \x01(\tR\x06symbol\x12\x10\n\x03uri\x18\x04 \x01(\tR\x03uri\x12\x18\n\x07\x63reator\x18\x05 \x01(\tR\x07\x63reator\x12\x12\n\x04mint\x18\x06 \x01(\tR\x04mint\x12\x43\n\ncomponents\x18\x07 \x03(\x0b\x32#.piedotfun.v1.chain.BasketComponentR\ncomponents\"f\n\x15StartRebalancingEvent\x12\x1b\n\tbasket_id\x18\x01 \x01(\x04R\x08\x62\x61sketId\x12\x12\n\x04mint\x18\x02 \x01(\tR\x04mint\x12\x1c\n\ttimestamp\x18\x03 \x01(\x03R\ttimestamp\"\xaa\x01\n\x14StopRebalancingEvent\x12\x1b\n\tbasket_id\x18\x01 \x01(\x04R\x08\x62\x61sketId\x12\x12\n\x04mint\x18\x02 \x01(\tR\x04mint\x12\x43\n\ncomponents\x18\x03 \x03(\x0b\x32#.piedotfun.v1.chain.BasketComponentR\ncomponents\x12\x1c\n\ttimestamp\x18\x04 \x01(\x03R\ttimestamp\"\x82\x01\n\x16RedeemBasketTokenEvent\x12\x1b\n\tbasket_id\x18\x01 \x01(\x04R\x08\x62\x61sketId\x12\x12\n\x04user\x18\x02 \x01(\tR\x04user\x12\x1f\n\x0b\x62\x61sket_mint\x18\x03 \x01(\tR\nbasketMint\x12\x16\n\x06\x61mount\x18\x04 \x01(\x04R\x06\x61mount\"\x80\x01\n\x14MintBasketTokenEvent\x12\x1b\n\tbasket_id\x18\x01 \x01(\x04R\x08\x62\x61sketId\x12\x12\n\x04user\x18\x02 \x01(\tR\x04user\x12\x1f\n\x0b\x62\x61sket_mint\x18\x03 \x01(\tR\nbasketMint\x12\x16\n\x06\x61mount\x18\x04 \x01(\x04R\x06\x61mount\"r\n\x13TransferBasketEvent\x12\x1f\n\x0b\x62\x61sket_mint\x18\x01 \x01(\tR\nbasketMint\x12\x12\n\x04\x66rom\x18\x02 \x01(\tR\x04\x66rom\x12\x0e\n\x02to\x18\x03 \x01(\tR\x02to\x12\x16\n\x06\x61mount\x18\x04 \x01(\x04R\x06\x61mount*\x8b\x01\n\x17\x42\x61sketEventExtraInfoKey\x12%\n!BASKET_EXTRA_INFO_KEY_UNSPECIFIED\x10\x00\x12$\n BASKET_EXTRA_INFO_KEY_VALUE_USDC\x10\x01\x12#\n\x1f\x42\x41SKET_EXTRA_INFO_KEY_VALUE_SOL\x10\x02\x42@Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chainb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.chain.watch_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chain'
  _globals['_BASKETEVENTEXTRAINFOKEY']._serialized_start=1214
  _globals['_BASKETEVENTEXTRAINFOKEY']._serialized_end=1353
  _globals['_BASKETCOMPONENT']._serialized_start=267
  _globals['_BASKETCOMPONENT']._serialized_end=326
  _globals['_CREATEBASKETEVENT']._serialized_start=329
  _globals['_CREATEBASKETEVENT']._serialized_end=554
  _globals['_STARTREBALANCINGEVENT']._serialized_start=556
  _globals['_STARTREBALANCINGEVENT']._serialized_end=658
  _globals['_STOPREBALANCINGEVENT']._serialized_start=661
  _globals['_STOPREBALANCINGEVENT']._serialized_end=831
  _globals['_REDEEMBASKETTOKENEVENT']._serialized_start=834
  _globals['_REDEEMBASKETTOKENEVENT']._serialized_end=964
  _globals['_MINTBASKETTOKENEVENT']._serialized_start=967
  _globals['_MINTBASKETTOKENEVENT']._serialized_end=1095
  _globals['_TRANSFERBASKETEVENT']._serialized_start=1097
  _globals['_TRANSFERBASKETEVENT']._serialized_end=1211
# @@protoc_insertion_point(module_scope)

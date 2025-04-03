# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/chain/query.proto
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
    'pie-dot-fun/v1/chain/query.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n pie-dot-fun/v1/chain/query.proto\x12\x12piedotfun.v1.chain\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x19pie-dot-fun/v1/auth.proto\"}\n!QueryFungibleTokenDecimalsRequest\x12X\n\x0e\x66ungible_token\x18\x01 \x01(\tB1\xe2\x41\x01\x02\xfa\x41*\n(piedotfun.spacebarapis.xyz/FungibleTokenR\rfungibleToken\"@\n\"QueryFungibleTokenDecimalsResponse\x12\x1a\n\x08\x64\x65\x63imals\x18\x01 \x01(\x05R\x08\x64\x65\x63imals\"}\n!QueryFungibleTokenMetadataRequest\x12X\n\x0e\x66ungible_token\x18\x01 \x01(\tB1\xe2\x41\x01\x02\xfa\x41*\n(piedotfun.spacebarapis.xyz/FungibleTokenR\rfungibleToken\"p\n\"QueryFungibleTokenMetadataResponse\x12\x10\n\x03uri\x18\x01 \x01(\tR\x03uri\x12\x38\n\x08metadata\x18\x02 \x01(\x0b\x32\x1c.piedotfun.v1.chain.MetadataR\x08metadata\"\x8b\x02\n\x08Metadata\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x16\n\x06symbol\x18\x02 \x01(\tR\x06symbol\x12\x14\n\x05image\x18\x03 \x01(\tR\x05image\x12 \n\x0b\x64\x65scription\x18\x04 \x01(\tR\x0b\x64\x65scription\x12\x1b\n\tone_liner\x18\x05 \x01(\tR\x08oneLiner\x12\x18\n\x07website\x18\x06 \x01(\tR\x07website\x12\x14\n\x05\x65mail\x18\x07 \x01(\tR\x05\x65mail\x12\x18\n\x07twitter\x18\x08 \x01(\tR\x07twitter\x12\x1a\n\x08telegram\x18\t \x01(\tR\x08telegram\x12\x18\n\x07\x64iscord\x18\n \x01(\tR\x07\x64iscord2\xc9\x03\n\x11\x43hainQueryService\x12\xd8\x01\n\x1aQueryFungibleTokenDecimals\x12\x35.piedotfun.v1.chain.QueryFungibleTokenDecimalsRequest\x1a\x36.piedotfun.v1.chain.QueryFungibleTokenDecimalsResponse\"K\xda\x41\x0e\x66ungible_token\x88\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02,\"\'/v1/chain/query:fungible_token_decimals:\x01*\x12\xd8\x01\n\x1aQueryFungibleTokenMetadata\x12\x35.piedotfun.v1.chain.QueryFungibleTokenMetadataRequest\x1a\x36.piedotfun.v1.chain.QueryFungibleTokenMetadataResponse\"K\xda\x41\x0e\x66ungible_token\x88\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02,\"\'/v1/chain/query:fungible_token_metadata:\x01*B@Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chainb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.chain.query_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z>github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1/chain;chain'
  _globals['_QUERYFUNGIBLETOKENDECIMALSREQUEST'].fields_by_name['fungible_token']._loaded_options = None
  _globals['_QUERYFUNGIBLETOKENDECIMALSREQUEST'].fields_by_name['fungible_token']._serialized_options = b'\342A\001\002\372A*\n(piedotfun.spacebarapis.xyz/FungibleToken'
  _globals['_QUERYFUNGIBLETOKENMETADATAREQUEST'].fields_by_name['fungible_token']._loaded_options = None
  _globals['_QUERYFUNGIBLETOKENMETADATAREQUEST'].fields_by_name['fungible_token']._serialized_options = b'\342A\001\002\372A*\n(piedotfun.spacebarapis.xyz/FungibleToken'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryFungibleTokenDecimals']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryFungibleTokenDecimals']._serialized_options = b'\332A\016fungible_token\210\265\030\001\230\265\030\001\202\323\344\223\002,\"\'/v1/chain/query:fungible_token_decimals:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryFungibleTokenMetadata']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryFungibleTokenMetadata']._serialized_options = b'\332A\016fungible_token\210\265\030\001\230\265\030\001\202\323\344\223\002,\"\'/v1/chain/query:fungible_token_metadata:\001*'
  _globals['_QUERYFUNGIBLETOKENDECIMALSREQUEST']._serialized_start=294
  _globals['_QUERYFUNGIBLETOKENDECIMALSREQUEST']._serialized_end=419
  _globals['_QUERYFUNGIBLETOKENDECIMALSRESPONSE']._serialized_start=421
  _globals['_QUERYFUNGIBLETOKENDECIMALSRESPONSE']._serialized_end=485
  _globals['_QUERYFUNGIBLETOKENMETADATAREQUEST']._serialized_start=487
  _globals['_QUERYFUNGIBLETOKENMETADATAREQUEST']._serialized_end=612
  _globals['_QUERYFUNGIBLETOKENMETADATARESPONSE']._serialized_start=614
  _globals['_QUERYFUNGIBLETOKENMETADATARESPONSE']._serialized_end=726
  _globals['_METADATA']._serialized_start=729
  _globals['_METADATA']._serialized_end=996
  _globals['_CHAINQUERYSERVICE']._serialized_start=999
  _globals['_CHAINQUERYSERVICE']._serialized_end=1456
# @@protoc_insertion_point(module_scope)

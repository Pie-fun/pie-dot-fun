# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: blast/v1/sybil/sybil.proto
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
    'blast/v1/sybil/sybil.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1a\x62last/v1/sybil/sybil.proto\x12\x0e\x62last.v1.sybil\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"+\n\x0fGetSybilRequest\x12\x18\n\x04name\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x04name\"\x93\x01\n\x05Sybil\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x41\n\x0b\x63reate_time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\ncreateTime:3\xea\x41\x30\n\x1estation.spacebarapis.xyz/Sybil\x12\x0esybils/{sybil}2v\n\x0cSybilService\x12\x66\n\x08GetSybil\x12\x1f.blast.v1.sybil.GetSybilRequest\x1a\x15.blast.v1.sybil.Sybil\"\"\xda\x41\x04name\x82\xd3\xe4\x93\x02\x15\x12\x13/v1/{name=sybils/*}B:Z8github.com/ao-labs/spacebar-apis/go/blast/v1/sybil;sybilb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'blast.v1.sybil.sybil_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z8github.com/ao-labs/spacebar-apis/go/blast/v1/sybil;sybil'
  _globals['_GETSYBILREQUEST'].fields_by_name['name']._loaded_options = None
  _globals['_GETSYBILREQUEST'].fields_by_name['name']._serialized_options = b'\342A\001\002'
  _globals['_SYBIL'].fields_by_name['create_time']._loaded_options = None
  _globals['_SYBIL'].fields_by_name['create_time']._serialized_options = b'\342A\001\003'
  _globals['_SYBIL']._loaded_options = None
  _globals['_SYBIL']._serialized_options = b'\352A0\n\036station.spacebarapis.xyz/Sybil\022\016sybils/{sybil}'
  _globals['_SYBILSERVICE'].methods_by_name['GetSybil']._loaded_options = None
  _globals['_SYBILSERVICE'].methods_by_name['GetSybil']._serialized_options = b'\332A\004name\202\323\344\223\002\025\022\023/v1/{name=sybils/*}'
  _globals['_GETSYBILREQUEST']._serialized_start=257
  _globals['_GETSYBILREQUEST']._serialized_end=300
  _globals['_SYBIL']._serialized_start=303
  _globals['_SYBIL']._serialized_end=450
  _globals['_SYBILSERVICE']._serialized_start=452
  _globals['_SYBILSERVICE']._serialized_end=570
# @@protoc_insertion_point(module_scope)

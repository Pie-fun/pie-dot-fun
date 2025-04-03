# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: blast/v1/user/backspace.proto
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
    'blast/v1/user/backspace.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1d\x62last/v1/user/backspace.proto\x12\rblast.v1.user\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"Q\n\x13GetBackspaceRequest\x12:\n\x04user\x18\x01 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x04user\"V\n\x16UpdateBackspaceRequest\x12<\n\tbackspace\x18\x01 \x01(\x0b\x32\x18.blast.v1.user.BackspaceB\x04\xe2\x41\x01\x02R\tbackspace\"\x8b\x01\n\tBackspace\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12+\n\x11introduction_chat\x18\x02 \x01(\tR\x10introductionChat:=\xea\x41:\n\"station.spacebarapis.xyz/Backspace\x12\x14\x62\x61\x63kspaces/{address}2\xb5\x02\n\x10\x42\x61\x63kspaceService\x12y\n\x0cGetBackspace\x12\".blast.v1.user.GetBackspaceRequest\x1a\x18.blast.v1.user.Backspace\"+\xda\x41\x04user\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/{user=users/*}/backspace\x12\xa5\x01\n\x0fUpdateBackspace\x12%.blast.v1.user.UpdateBackspaceRequest\x1a\x18.blast.v1.user.Backspace\"Q\xda\x41\x15\x62\x61\x63kspace,update_mask\x82\xd3\xe4\x93\x02\x33\x32&/v1/{backspace.name=users/*/backspace}:\tbackspaceB8Z6github.com/ao-labs/spacebar-apis/go/blast/v1/user;userb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'blast.v1.user.backspace_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z6github.com/ao-labs/spacebar-apis/go/blast/v1/user;user'
  _globals['_GETBACKSPACEREQUEST'].fields_by_name['user']._loaded_options = None
  _globals['_GETBACKSPACEREQUEST'].fields_by_name['user']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_UPDATEBACKSPACEREQUEST'].fields_by_name['backspace']._loaded_options = None
  _globals['_UPDATEBACKSPACEREQUEST'].fields_by_name['backspace']._serialized_options = b'\342A\001\002'
  _globals['_BACKSPACE']._loaded_options = None
  _globals['_BACKSPACE']._serialized_options = b'\352A:\n\"station.spacebarapis.xyz/Backspace\022\024backspaces/{address}'
  _globals['_BACKSPACESERVICE'].methods_by_name['GetBackspace']._loaded_options = None
  _globals['_BACKSPACESERVICE'].methods_by_name['GetBackspace']._serialized_options = b'\332A\004user\202\323\344\223\002\036\022\034/v1/{user=users/*}/backspace'
  _globals['_BACKSPACESERVICE'].methods_by_name['UpdateBackspace']._loaded_options = None
  _globals['_BACKSPACESERVICE'].methods_by_name['UpdateBackspace']._serialized_options = b'\332A\025backspace,update_mask\202\323\344\223\00232&/v1/{backspace.name=users/*/backspace}:\tbackspace'
  _globals['_GETBACKSPACEREQUEST']._serialized_start=259
  _globals['_GETBACKSPACEREQUEST']._serialized_end=340
  _globals['_UPDATEBACKSPACEREQUEST']._serialized_start=342
  _globals['_UPDATEBACKSPACEREQUEST']._serialized_end=428
  _globals['_BACKSPACE']._serialized_start=431
  _globals['_BACKSPACE']._serialized_end=570
  _globals['_BACKSPACESERVICE']._serialized_start=573
  _globals['_BACKSPACESERVICE']._serialized_end=882
# @@protoc_insertion_point(module_scope)

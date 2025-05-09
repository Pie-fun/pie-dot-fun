# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: blast/v1/gm/gm.proto
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
    'blast/v1/gm/gm.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x62last/v1/gm/gm.proto\x12\x0b\x62last.v1.gm\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"O\n\x11GetGMStatsRequest\x12:\n\x04user\x18\x01 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x04user\"\x83\x01\n\rSendGMRequest\x12:\n\x04\x66rom\x18\x01 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x04\x66rom\x12\x36\n\x02to\x18\x02 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x02to\"\x88\x01\n\x12PreflightGMRequest\x12:\n\x04\x66rom\x18\x01 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x04\x66rom\x12\x36\n\x02to\x18\x02 \x01(\tB&\xe2\x41\x01\x02\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x02to\"\x8a\x01\n\x13PreflightGMResponse\x12\x19\n\x08\x63\x61n_send\x18\x01 \x01(\x08R\x07\x63\x61nSend\x12H\n\x0breject_code\x18\x02 \x01(\x0e\x32\".blast.v1.gm.RejectPreflightGMCodeH\x00R\nrejectCode\x88\x01\x01\x42\x0e\n\x0c_reject_code\"\x7f\n\x0eListGMsRequest\x12\x1b\n\tpage_size\x18\x01 \x01(\x05R\x08pageSize\x12\x1d\n\npage_token\x18\x02 \x01(\tR\tpageToken\x12\x16\n\x06\x66ilter\x18\x03 \x01(\tR\x06\x66ilter\x12\x19\n\x08order_by\x18\x04 \x01(\tR\x07orderBy\"\\\n\x0fListGMsResponse\x12!\n\x03gms\x18\x01 \x03(\x0b\x32\x0f.blast.v1.gm.GMR\x03gms\x12&\n\x0fnext_page_token\x18\x02 \x01(\tR\rnextPageToken\"\xdd\x01\n\x07GMStats\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\'\n\x0cuser_address\x18\x02 \x01(\tB\x04\xe2\x41\x01\x03R\x0buserAddress\x12#\n\nsent_count\x18\x03 \x01(\rB\x04\xe2\x41\x01\x03R\tsentCount\x12+\n\x0ereceived_count\x18\x04 \x01(\rB\x04\xe2\x41\x01\x03R\rreceivedCount:C\xea\x41@\n station.spacebarapis.xyz/GMStats\x12\x1cusers/{user_address}/gmStats\"\xf3\x01\n\x02GM\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x36\n\x04\x66rom\x18\x03 \x01(\tB\"\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x04\x66rom\x12\x32\n\x02to\x18\x04 \x01(\tB\"\xfa\x41\x1f\n\x1dstation.spacebarapis.xyz/UserR\x02to\x12\x41\n\x0b\x63reate_time\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\ncreateTime:*\xea\x41\'\n\x1bstation.spacebarapis.xyz/GM\x12\x08gms/{id}*\xbd\x01\n\x15RejectPreflightGMCode\x12(\n$REJECT_PREFLIGHT_GM_CODE_UNSPECIFIED\x10\x00\x12\x31\n-REJECT_PREFLIGHT_GM_ALREADY_SENT_TO_SAME_USER\x10\x01\x12$\n REJECT_PREFLIGHT_GM_EXCEED_QUOTA\x10\x02\x12!\n\x1dREJECT_PREFLIGHT_GM_SELF_SEND\x10\x03\x32\xa0\x03\n\tGMService\x12m\n\nGetGMStats\x12\x1e.blast.v1.gm.GetGMStatsRequest\x1a\x14.blast.v1.gm.GMStats\")\xda\x41\x04user\x82\xd3\xe4\x93\x02\x1c\x12\x1a/v1/{user=users/*}/gmStats\x12N\n\x06SendGM\x12\x1a.blast.v1.gm.SendGMRequest\x1a\x0f.blast.v1.gm.GM\"\x17\xda\x41\x02to\x82\xd3\xe4\x93\x02\x0c\"\x07/v1/gms:\x01*\x12s\n\x0bPreflightGM\x12\x1f.blast.v1.gm.PreflightGMRequest\x1a .blast.v1.gm.PreflightGMResponse\"!\xda\x41\x02to\x82\xd3\xe4\x93\x02\x16\"\x11/v1/gms:preflight:\x01*\x12_\n\x07ListGMs\x12\x1b.blast.v1.gm.ListGMsRequest\x1a\x1c.blast.v1.gm.ListGMsResponse\"\x19\xda\x41\x07\x66rom,to\x82\xd3\xe4\x93\x02\t\x12\x07/v1/gmsB4Z2github.com/ao-labs/spacebar-apis/go/blast/v1/gm;gmb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'blast.v1.gm.gm_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z2github.com/ao-labs/spacebar-apis/go/blast/v1/gm;gm'
  _globals['_GETGMSTATSREQUEST'].fields_by_name['user']._loaded_options = None
  _globals['_GETGMSTATSREQUEST'].fields_by_name['user']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_SENDGMREQUEST'].fields_by_name['from']._loaded_options = None
  _globals['_SENDGMREQUEST'].fields_by_name['from']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_SENDGMREQUEST'].fields_by_name['to']._loaded_options = None
  _globals['_SENDGMREQUEST'].fields_by_name['to']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_PREFLIGHTGMREQUEST'].fields_by_name['from']._loaded_options = None
  _globals['_PREFLIGHTGMREQUEST'].fields_by_name['from']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_PREFLIGHTGMREQUEST'].fields_by_name['to']._loaded_options = None
  _globals['_PREFLIGHTGMREQUEST'].fields_by_name['to']._serialized_options = b'\342A\001\002\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_GMSTATS'].fields_by_name['user_address']._loaded_options = None
  _globals['_GMSTATS'].fields_by_name['user_address']._serialized_options = b'\342A\001\003'
  _globals['_GMSTATS'].fields_by_name['sent_count']._loaded_options = None
  _globals['_GMSTATS'].fields_by_name['sent_count']._serialized_options = b'\342A\001\003'
  _globals['_GMSTATS'].fields_by_name['received_count']._loaded_options = None
  _globals['_GMSTATS'].fields_by_name['received_count']._serialized_options = b'\342A\001\003'
  _globals['_GMSTATS']._loaded_options = None
  _globals['_GMSTATS']._serialized_options = b'\352A@\n station.spacebarapis.xyz/GMStats\022\034users/{user_address}/gmStats'
  _globals['_GM'].fields_by_name['from']._loaded_options = None
  _globals['_GM'].fields_by_name['from']._serialized_options = b'\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_GM'].fields_by_name['to']._loaded_options = None
  _globals['_GM'].fields_by_name['to']._serialized_options = b'\372A\037\n\035station.spacebarapis.xyz/User'
  _globals['_GM'].fields_by_name['create_time']._loaded_options = None
  _globals['_GM'].fields_by_name['create_time']._serialized_options = b'\342A\001\003'
  _globals['_GM']._loaded_options = None
  _globals['_GM']._serialized_options = b'\352A\'\n\033station.spacebarapis.xyz/GM\022\010gms/{id}'
  _globals['_GMSERVICE'].methods_by_name['GetGMStats']._loaded_options = None
  _globals['_GMSERVICE'].methods_by_name['GetGMStats']._serialized_options = b'\332A\004user\202\323\344\223\002\034\022\032/v1/{user=users/*}/gmStats'
  _globals['_GMSERVICE'].methods_by_name['SendGM']._loaded_options = None
  _globals['_GMSERVICE'].methods_by_name['SendGM']._serialized_options = b'\332A\002to\202\323\344\223\002\014\"\007/v1/gms:\001*'
  _globals['_GMSERVICE'].methods_by_name['PreflightGM']._loaded_options = None
  _globals['_GMSERVICE'].methods_by_name['PreflightGM']._serialized_options = b'\332A\002to\202\323\344\223\002\026\"\021/v1/gms:preflight:\001*'
  _globals['_GMSERVICE'].methods_by_name['ListGMs']._loaded_options = None
  _globals['_GMSERVICE'].methods_by_name['ListGMs']._serialized_options = b'\332A\007from,to\202\323\344\223\002\t\022\007/v1/gms'
  _globals['_REJECTPREFLIGHTGMCODE']._serialized_start=1437
  _globals['_REJECTPREFLIGHTGMCODE']._serialized_end=1626
  _globals['_GETGMSTATSREQUEST']._serialized_start=248
  _globals['_GETGMSTATSREQUEST']._serialized_end=327
  _globals['_SENDGMREQUEST']._serialized_start=330
  _globals['_SENDGMREQUEST']._serialized_end=461
  _globals['_PREFLIGHTGMREQUEST']._serialized_start=464
  _globals['_PREFLIGHTGMREQUEST']._serialized_end=600
  _globals['_PREFLIGHTGMRESPONSE']._serialized_start=603
  _globals['_PREFLIGHTGMRESPONSE']._serialized_end=741
  _globals['_LISTGMSREQUEST']._serialized_start=743
  _globals['_LISTGMSREQUEST']._serialized_end=870
  _globals['_LISTGMSRESPONSE']._serialized_start=872
  _globals['_LISTGMSRESPONSE']._serialized_end=964
  _globals['_GMSTATS']._serialized_start=967
  _globals['_GMSTATS']._serialized_end=1188
  _globals['_GM']._serialized_start=1191
  _globals['_GM']._serialized_end=1434
  _globals['_GMSERVICE']._serialized_start=1629
  _globals['_GMSERVICE']._serialized_end=2045
# @@protoc_insertion_point(module_scope)

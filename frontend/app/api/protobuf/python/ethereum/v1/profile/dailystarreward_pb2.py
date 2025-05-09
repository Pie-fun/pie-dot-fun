# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ethereum/v1/profile/dailystarreward.proto
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
    'ethereum/v1/profile/dailystarreward.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n)ethereum/v1/profile/dailystarreward.proto\x12\x13\x65thereum.v1.profile\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"`\n\x19GetDailyStarRewardRequest\x12\x43\n\x07profile\x18\x01 \x01(\tB)\xe2\x41\x01\x02\xfa\x41\"\n station.spacebarapis.xyz/ProfileR\x07profile\"\x1f\n\x1d\x43laimMyDailyStarRewardRequest\"\x87\x02\n\x0f\x44\x61ilyStarReward\x12?\n\x07profile\x18\x01 \x01(\tB%\xfa\x41\"\n station.spacebarapis.xyz/ProfileR\x07profile\x12%\n\x0e\x63urrent_streak\x18\x02 \x01(\rR\rcurrentStreak\x12!\n\x0cis_claimable\x18\x03 \x01(\x08R\x0bisClaimable\x12\x1f\n\x0bstar_reward\x18\x04 \x01(\rR\nstarReward\x12H\n\nlast_claim\x18\x05 \x01(\x0b\x32).ethereum.v1.profile.DailyStarRewardClaimR\tlastClaim\"i\n\x14\x44\x61ilyStarRewardClaim\x12\x16\n\x06streak\x18\x01 \x01(\rR\x06streak\x12\x39\n\nclaim_time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tclaimTime2\xe9\x02\n\x16\x44\x61ilyStarRewardService\x12\xa8\x01\n\x12GetDailyStarReward\x12..ethereum.v1.profile.GetDailyStarRewardRequest\x1a$.ethereum.v1.profile.DailyStarReward\"<\xda\x41\x07profile\x82\xd3\xe4\x93\x02,\x12*/v1/{profile=profiles/*}/daily_star_reward\x12\xa3\x01\n\x16\x43laimMyDailyStarReward\x12\x32.ethereum.v1.profile.ClaimMyDailyStarRewardRequest\x1a$.ethereum.v1.profile.DailyStarReward\"/\x82\xd3\xe4\x93\x02)\"\'/v1/profiles/me/daily_star_reward:claimBAZ?github.com/ao-labs/spacebar-apis/go/ethereum/v1/profile;profileb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ethereum.v1.profile.dailystarreward_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z?github.com/ao-labs/spacebar-apis/go/ethereum/v1/profile;profile'
  _globals['_GETDAILYSTARREWARDREQUEST'].fields_by_name['profile']._loaded_options = None
  _globals['_GETDAILYSTARREWARDREQUEST'].fields_by_name['profile']._serialized_options = b'\342A\001\002\372A\"\n station.spacebarapis.xyz/Profile'
  _globals['_DAILYSTARREWARD'].fields_by_name['profile']._loaded_options = None
  _globals['_DAILYSTARREWARD'].fields_by_name['profile']._serialized_options = b'\372A\"\n station.spacebarapis.xyz/Profile'
  _globals['_DAILYSTARREWARDSERVICE'].methods_by_name['GetDailyStarReward']._loaded_options = None
  _globals['_DAILYSTARREWARDSERVICE'].methods_by_name['GetDailyStarReward']._serialized_options = b'\332A\007profile\202\323\344\223\002,\022*/v1/{profile=profiles/*}/daily_star_reward'
  _globals['_DAILYSTARREWARDSERVICE'].methods_by_name['ClaimMyDailyStarReward']._loaded_options = None
  _globals['_DAILYSTARREWARDSERVICE'].methods_by_name['ClaimMyDailyStarReward']._serialized_options = b'\202\323\344\223\002)\"\'/v1/profiles/me/daily_star_reward:claim'
  _globals['_GETDAILYSTARREWARDREQUEST']._serialized_start=277
  _globals['_GETDAILYSTARREWARDREQUEST']._serialized_end=373
  _globals['_CLAIMMYDAILYSTARREWARDREQUEST']._serialized_start=375
  _globals['_CLAIMMYDAILYSTARREWARDREQUEST']._serialized_end=406
  _globals['_DAILYSTARREWARD']._serialized_start=409
  _globals['_DAILYSTARREWARD']._serialized_end=672
  _globals['_DAILYSTARREWARDCLAIM']._serialized_start=674
  _globals['_DAILYSTARREWARDCLAIM']._serialized_end=779
  _globals['_DAILYSTARREWARDSERVICE']._serialized_start=782
  _globals['_DAILYSTARREWARDSERVICE']._serialized_end=1143
# @@protoc_insertion_point(module_scope)

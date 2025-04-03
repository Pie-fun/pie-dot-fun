# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ethereum/v1/chain/sign.proto
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
    'ethereum/v1/chain/sign.proto'
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1c\x65thereum/v1/chain/sign.proto\x12\x11\x65thereum.v1.chain\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\"<\n\x13SignWKeyMintRequest\x12%\n\x0b\x65oa_address\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\neoaAddress\"\xd7\x02\n\x12SignKeyMintRequest\x12=\n\x18profile_contract_address\x18\x01 \x01(\tH\x00R\x16profileContractAddress\x88\x01\x01\x12-\n\x10profile_token_id\x18\x02 \x01(\tH\x01R\x0eprofileTokenId\x88\x01\x01\x12\x31\n\x12spaceship_token_id\x18\x03 \x01(\tH\x02R\x10spaceshipTokenId\x88\x01\x01\x12&\n\x0ckey_token_id\x18\x04 \x01(\tB\x04\xe2\x41\x01\x02R\nkeyTokenId\x12/\n\x10\x65th_contribution\x18\x05 \x01(\tB\x04\xe2\x41\x01\x02R\x0f\x65thContributionB\x1b\n\x19_profile_contract_addressB\x13\n\x11_profile_token_idB\x15\n\x13_spaceship_token_id\"f\n\x14SignScoreMintRequest\x12-\n\x0fprofile_address\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x0eprofileAddress\x12\x1f\n\x08score_id\x18\x02 \x01(\tB\x04\xe2\x41\x01\x02R\x07scoreId\"4\n\x12SignMessageRequest\x12\x1e\n\x07message\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x07message\"K\n\x11SignatureResponse\x12\x1c\n\tsignature\x18\x01 \x01(\tR\tsignature\x12\x18\n\x07message\x18\x02 \x01(\tR\x07message\"\xc4\x01\n\x16SignatureTypedResponse\x12\x1c\n\tsignature\x18\x01 \x01(\tR\tsignature\x12P\n\x07message\x18\x02 \x03(\x0b\x32\x36.ethereum.v1.chain.SignatureTypedResponse.MessageEntryR\x07message\x1a:\n\x0cMessageEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x32\x9a\x04\n\x10\x43hainSignService\x12\x7f\n\x0cSignWkeyMint\x12&.ethereum.v1.chain.SignWKeyMintRequest\x1a$.ethereum.v1.chain.SignatureResponse\"!\x82\xd3\xe4\x93\x02\x1b\"\x16/v1/chain:signWKeyMint:\x01*\x12\x81\x01\n\x0bSignKeyMint\x12%.ethereum.v1.chain.SignKeyMintRequest\x1a).ethereum.v1.chain.SignatureTypedResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x15/v1/chain:signKeyMint:\x01*\x12\x82\x01\n\rSignScoreMint\x12\'.ethereum.v1.chain.SignScoreMintRequest\x1a$.ethereum.v1.chain.SignatureResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x17/v1/chain:signScoreMint:\x01*\x12|\n\x0bSignMessage\x12%.ethereum.v1.chain.SignMessageRequest\x1a$.ethereum.v1.chain.SignatureResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x15/v1/chain:signMessage:\x01*B=Z;github.com/ao-labs/spacebar-apis/go/ethereum/v1/chain;chainb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ethereum.v1.chain.sign_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z;github.com/ao-labs/spacebar-apis/go/ethereum/v1/chain;chain'
  _globals['_SIGNWKEYMINTREQUEST'].fields_by_name['eoa_address']._loaded_options = None
  _globals['_SIGNWKEYMINTREQUEST'].fields_by_name['eoa_address']._serialized_options = b'\342A\001\002'
  _globals['_SIGNKEYMINTREQUEST'].fields_by_name['key_token_id']._loaded_options = None
  _globals['_SIGNKEYMINTREQUEST'].fields_by_name['key_token_id']._serialized_options = b'\342A\001\002'
  _globals['_SIGNKEYMINTREQUEST'].fields_by_name['eth_contribution']._loaded_options = None
  _globals['_SIGNKEYMINTREQUEST'].fields_by_name['eth_contribution']._serialized_options = b'\342A\001\002'
  _globals['_SIGNSCOREMINTREQUEST'].fields_by_name['profile_address']._loaded_options = None
  _globals['_SIGNSCOREMINTREQUEST'].fields_by_name['profile_address']._serialized_options = b'\342A\001\002'
  _globals['_SIGNSCOREMINTREQUEST'].fields_by_name['score_id']._loaded_options = None
  _globals['_SIGNSCOREMINTREQUEST'].fields_by_name['score_id']._serialized_options = b'\342A\001\002'
  _globals['_SIGNMESSAGEREQUEST'].fields_by_name['message']._loaded_options = None
  _globals['_SIGNMESSAGEREQUEST'].fields_by_name['message']._serialized_options = b'\342A\001\002'
  _globals['_SIGNATURETYPEDRESPONSE_MESSAGEENTRY']._loaded_options = None
  _globals['_SIGNATURETYPEDRESPONSE_MESSAGEENTRY']._serialized_options = b'8\001'
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignWkeyMint']._loaded_options = None
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignWkeyMint']._serialized_options = b'\202\323\344\223\002\033\"\026/v1/chain:signWKeyMint:\001*'
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignKeyMint']._loaded_options = None
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignKeyMint']._serialized_options = b'\202\323\344\223\002\032\"\025/v1/chain:signKeyMint:\001*'
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignScoreMint']._loaded_options = None
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignScoreMint']._serialized_options = b'\202\323\344\223\002\034\"\027/v1/chain:signScoreMint:\001*'
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignMessage']._loaded_options = None
  _globals['_CHAINSIGNSERVICE'].methods_by_name['SignMessage']._serialized_options = b'\202\323\344\223\002\032\"\025/v1/chain:signMessage:\001*'
  _globals['_SIGNWKEYMINTREQUEST']._serialized_start=262
  _globals['_SIGNWKEYMINTREQUEST']._serialized_end=322
  _globals['_SIGNKEYMINTREQUEST']._serialized_start=325
  _globals['_SIGNKEYMINTREQUEST']._serialized_end=668
  _globals['_SIGNSCOREMINTREQUEST']._serialized_start=670
  _globals['_SIGNSCOREMINTREQUEST']._serialized_end=772
  _globals['_SIGNMESSAGEREQUEST']._serialized_start=774
  _globals['_SIGNMESSAGEREQUEST']._serialized_end=826
  _globals['_SIGNATURERESPONSE']._serialized_start=828
  _globals['_SIGNATURERESPONSE']._serialized_end=903
  _globals['_SIGNATURETYPEDRESPONSE']._serialized_start=906
  _globals['_SIGNATURETYPEDRESPONSE']._serialized_end=1102
  _globals['_SIGNATURETYPEDRESPONSE_MESSAGEENTRY']._serialized_start=1044
  _globals['_SIGNATURETYPEDRESPONSE_MESSAGEENTRY']._serialized_end=1102
  _globals['_CHAINSIGNSERVICE']._serialized_start=1105
  _globals['_CHAINSIGNSERVICE']._serialized_end=1643
# @@protoc_insertion_point(module_scope)

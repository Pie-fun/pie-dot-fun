# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: blast/v1/chain/query.proto
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
    'blast/v1/chain/query.proto'
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
from blast.v1.nft import nft_pb2 as blast_dot_v1_dot_nft_dot_nft__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1a\x62last/v1/chain/query.proto\x12\x0e\x62last.v1.chain\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x16\x62last/v1/nft/nft.proto\"N\n\x13QueryReceiptRequest\x12\x1d\n\x07tx_hash\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x06txHash\x12\x18\n\x07timeout\x18\x02 \x01(\tR\x07timeout\"f\n!QueryQueryTransactionCountRequest\x12\x1e\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x07\x61\x64\x64ress\x12!\n\x0c\x62lock_number\x18\x02 \x01(\x04R\x0b\x62lockNumber\":\n\"QueryQueryTransactionCountResponse\x12\x14\n\x05\x63ount\x18\x01 \x01(\x04R\x05\x63ount\"q\n\x18QueryDelegateCashRequest\x12\x1e\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x07\x61\x64\x64ress\x12\x35\n\x06\x63hains\x18\x02 \x03(\x0e\x32\x17.blast.v1.nft.ChainTypeB\x04\xe2\x41\x01\x02R\x06\x63hains\"S\n\x19QueryDelegateCashResponse\x12\x36\n\tdelegates\x18\x01 \x03(\x0b\x32\x18.blast.v1.chain.DelegateR\tdelegates\"D\n\"QueryStakingContractAddressRequest\x12\x1e\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x07\x61\x64\x64ress\"P\n#QueryStakingContractAddressResponse\x12)\n\x10\x63ontract_address\x18\x01 \x01(\tR\x0f\x63ontractAddress\";\n\x19QueryStakingAmountRequest\x12\x1e\n\x07\x61\x64\x64ress\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x07\x61\x64\x64ress\"C\n\x1aQueryStakingAmountResponse\x12%\n\x0estaking_amount\x18\x01 \x01(\tR\rstakingAmount\"g\n\x13QueryOwnerOfRequest\x12/\n\x10\x63ontract_address\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x0f\x63ontractAddress\x12\x1f\n\x08token_id\x18\x02 \x01(\tB\x04\xe2\x41\x01\x02R\x07tokenId\";\n\x14QueryOwnerOfResponse\x12#\n\rowner_address\x18\x01 \x01(\tR\x0cownerAddress\"s\n\x15QueryBalanceOfRequest\x12/\n\x10\x63ontract_address\x18\x01 \x01(\tB\x04\xe2\x41\x01\x02R\x0f\x63ontractAddress\x12)\n\rowner_address\x18\x02 \x01(\tB\x04\xe2\x41\x01\x02R\x0cownerAddress\"2\n\x16QueryBalanceOfResponse\x12\x18\n\x07\x62\x61lance\x18\x01 \x01(\rR\x07\x62\x61lance\"\x99\x01\n\x08\x44\x65legate\x12\x32\n\x04type\x18\x01 \x01(\x0e\x32\x1e.blast.v1.chain.DelegationTypeR\x04type\x12\x12\n\x04\x66rom\x18\x02 \x01(\tR\x04\x66rom\x12\x0e\n\x02to\x18\x03 \x01(\tR\x02to\x12\x1a\n\x08\x63ontract\x18\x04 \x01(\tR\x08\x63ontract\x12\x19\n\x08token_id\x18\x05 \x01(\tR\x07tokenId\"\xa3\x02\n\x07Receipt\x12\x35\n\x06status\x18\x01 \x01(\x0e\x32\x1d.blast.v1.chain.ReceiptStatusR\x06status\x12)\n\x10transaction_hash\x18\x02 \x01(\tR\x0ftransactionHash\x12\x1d\n\nblock_hash\x18\x03 \x01(\tR\tblockHash\x12!\n\x0c\x62lock_number\x18\x04 \x01(\tR\x0b\x62lockNumber\x12.\n\x13\x63umulative_gas_used\x18\x05 \x01(\x04R\x11\x63umulativeGasUsed\x12\x19\n\x08gas_used\x18\x06 \x01(\x04R\x07gasUsed\x12)\n\x10\x63ontract_address\x18\x07 \x01(\tR\x0f\x63ontractAddress\"\xbf\x02\n\x0eMintScoreEvent\x12M\n\x08\x63\x61tegory\x18\x01 \x01(\x0e\x32,.blast.v1.chain.MintScoreEvent.ScoreCategoryH\x00R\x08\x63\x61tegory\x88\x01\x01\x12\x19\n\x05score\x18\x02 \x01(\x04H\x01R\x05score\x88\x01\x01\x12\x1d\n\x07\x61\x64\x64ress\x18\x03 \x01(\tH\x02R\x07\x61\x64\x64ress\x88\x01\x01\x12\x1e\n\x08token_id\x18\x04 \x01(\tH\x03R\x07tokenId\x88\x01\x01\"T\n\rScoreCategory\x12\x1e\n\x1aSCORE_CATEGORY_UNSPECIFIED\x10\x00\x12\x11\n\rSINGLE_PLAYER\x10\x01\x12\x10\n\x0cMULTI_PLAYER\x10\x02\x42\x0b\n\t_categoryB\x08\n\x06_scoreB\n\n\x08_addressB\x0b\n\t_token_id\"\\\n\x1e\x44\x65ployTBAAndMintProtoShipEvent\x12\x1f\n\x0bprofile_tba\x18\x01 \x01(\tR\nprofileTba\x12\x19\n\x08token_id\x18\x02 \x01(\tR\x07tokenId*\x84\x01\n\x0e\x44\x65legationType\x12\x1f\n\x1b\x44\x45LEGATION_TYPE_UNSPECIFIED\x10\x00\x12\x17\n\x13\x44\x45LEGATION_TYPE_ALL\x10\x01\x12\x1c\n\x18\x44\x45LEGATION_TYPE_CONTRACT\x10\x02\x12\x1a\n\x16\x44\x45LEGATION_TYPE_ERC721\x10\x03*I\n\rReceiptStatus\x12\x19\n\x15RECEIPT_STATUS_FAILED\x10\x00\x12\x1d\n\x19RECEIPT_STATUS_SUCCESSFUL\x10\x01\x32\x9b\x08\n\x11\x43hainQueryService\x12o\n\x0cQueryReceipt\x12#.blast.v1.chain.QueryReceiptRequest\x1a\x17.blast.v1.chain.Receipt\"!\x82\xd3\xe4\x93\x02\x1b\"\x16/v1/chain:queryReceipt:\x01*\x12\xaa\x01\n\x15QueryTransactionCount\x12\x31.blast.v1.chain.QueryQueryTransactionCountRequest\x1a\x32.blast.v1.chain.QueryQueryTransactionCountResponse\"*\x82\xd3\xe4\x93\x02$\"\x1f/v1/chain:queryTransactionCount:\x01*\x12\x90\x01\n\x11QueryDelegateCash\x12(.blast.v1.chain.QueryDelegateCashRequest\x1a).blast.v1.chain.QueryDelegateCashResponse\"&\x82\xd3\xe4\x93\x02 \"\x1b/v1/chain:queryDelegateCash:\x01*\x12\xb8\x01\n\x1bQueryStakingContractAddress\x12\x32.blast.v1.chain.QueryStakingContractAddressRequest\x1a\x33.blast.v1.chain.QueryStakingContractAddressResponse\"0\x82\xd3\xe4\x93\x02*\"%/v1/chain:queryStakingContractAddress:\x01*\x12\x94\x01\n\x12QueryStakingAmount\x12).blast.v1.chain.QueryStakingAmountRequest\x1a*.blast.v1.chain.QueryStakingAmountResponse\"\'\x82\xd3\xe4\x93\x02!\"\x1c/v1/chain:queryStakingAmount:\x01*\x12|\n\x0cQueryOwnerOf\x12#.blast.v1.chain.QueryOwnerOfRequest\x1a$.blast.v1.chain.QueryOwnerOfResponse\"!\x82\xd3\xe4\x93\x02\x1b\"\x16/v1/chain:queryOwnerOf:\x01*\x12\x84\x01\n\x0eQueryBalanceOf\x12%.blast.v1.chain.QueryBalanceOfRequest\x1a&.blast.v1.chain.QueryBalanceOfResponse\"#\x82\xd3\xe4\x93\x02\x1d\"\x18/v1/chain:queryBalanceOf:\x01*B:Z8github.com/ao-labs/spacebar-apis/go/blast/v1/chain;chainb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'blast.v1.chain.query_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z8github.com/ao-labs/spacebar-apis/go/blast/v1/chain;chain'
  _globals['_QUERYRECEIPTREQUEST'].fields_by_name['tx_hash']._loaded_options = None
  _globals['_QUERYRECEIPTREQUEST'].fields_by_name['tx_hash']._serialized_options = b'\342A\001\002'
  _globals['_QUERYQUERYTRANSACTIONCOUNTREQUEST'].fields_by_name['address']._loaded_options = None
  _globals['_QUERYQUERYTRANSACTIONCOUNTREQUEST'].fields_by_name['address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYDELEGATECASHREQUEST'].fields_by_name['address']._loaded_options = None
  _globals['_QUERYDELEGATECASHREQUEST'].fields_by_name['address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYDELEGATECASHREQUEST'].fields_by_name['chains']._loaded_options = None
  _globals['_QUERYDELEGATECASHREQUEST'].fields_by_name['chains']._serialized_options = b'\342A\001\002'
  _globals['_QUERYSTAKINGCONTRACTADDRESSREQUEST'].fields_by_name['address']._loaded_options = None
  _globals['_QUERYSTAKINGCONTRACTADDRESSREQUEST'].fields_by_name['address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYSTAKINGAMOUNTREQUEST'].fields_by_name['address']._loaded_options = None
  _globals['_QUERYSTAKINGAMOUNTREQUEST'].fields_by_name['address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYOWNEROFREQUEST'].fields_by_name['contract_address']._loaded_options = None
  _globals['_QUERYOWNEROFREQUEST'].fields_by_name['contract_address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYOWNEROFREQUEST'].fields_by_name['token_id']._loaded_options = None
  _globals['_QUERYOWNEROFREQUEST'].fields_by_name['token_id']._serialized_options = b'\342A\001\002'
  _globals['_QUERYBALANCEOFREQUEST'].fields_by_name['contract_address']._loaded_options = None
  _globals['_QUERYBALANCEOFREQUEST'].fields_by_name['contract_address']._serialized_options = b'\342A\001\002'
  _globals['_QUERYBALANCEOFREQUEST'].fields_by_name['owner_address']._loaded_options = None
  _globals['_QUERYBALANCEOFREQUEST'].fields_by_name['owner_address']._serialized_options = b'\342A\001\002'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryReceipt']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryReceipt']._serialized_options = b'\202\323\344\223\002\033\"\026/v1/chain:queryReceipt:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryTransactionCount']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryTransactionCount']._serialized_options = b'\202\323\344\223\002$\"\037/v1/chain:queryTransactionCount:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryDelegateCash']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryDelegateCash']._serialized_options = b'\202\323\344\223\002 \"\033/v1/chain:queryDelegateCash:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryStakingContractAddress']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryStakingContractAddress']._serialized_options = b'\202\323\344\223\002*\"%/v1/chain:queryStakingContractAddress:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryStakingAmount']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryStakingAmount']._serialized_options = b'\202\323\344\223\002!\"\034/v1/chain:queryStakingAmount:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryOwnerOf']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryOwnerOf']._serialized_options = b'\202\323\344\223\002\033\"\026/v1/chain:queryOwnerOf:\001*'
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryBalanceOf']._loaded_options = None
  _globals['_CHAINQUERYSERVICE'].methods_by_name['QueryBalanceOf']._serialized_options = b'\202\323\344\223\002\035\"\030/v1/chain:queryBalanceOf:\001*'
  _globals['_DELEGATIONTYPE']._serialized_start=2209
  _globals['_DELEGATIONTYPE']._serialized_end=2341
  _globals['_RECEIPTSTATUS']._serialized_start=2343
  _globals['_RECEIPTSTATUS']._serialized_end=2416
  _globals['_QUERYRECEIPTREQUEST']._serialized_start=281
  _globals['_QUERYRECEIPTREQUEST']._serialized_end=359
  _globals['_QUERYQUERYTRANSACTIONCOUNTREQUEST']._serialized_start=361
  _globals['_QUERYQUERYTRANSACTIONCOUNTREQUEST']._serialized_end=463
  _globals['_QUERYQUERYTRANSACTIONCOUNTRESPONSE']._serialized_start=465
  _globals['_QUERYQUERYTRANSACTIONCOUNTRESPONSE']._serialized_end=523
  _globals['_QUERYDELEGATECASHREQUEST']._serialized_start=525
  _globals['_QUERYDELEGATECASHREQUEST']._serialized_end=638
  _globals['_QUERYDELEGATECASHRESPONSE']._serialized_start=640
  _globals['_QUERYDELEGATECASHRESPONSE']._serialized_end=723
  _globals['_QUERYSTAKINGCONTRACTADDRESSREQUEST']._serialized_start=725
  _globals['_QUERYSTAKINGCONTRACTADDRESSREQUEST']._serialized_end=793
  _globals['_QUERYSTAKINGCONTRACTADDRESSRESPONSE']._serialized_start=795
  _globals['_QUERYSTAKINGCONTRACTADDRESSRESPONSE']._serialized_end=875
  _globals['_QUERYSTAKINGAMOUNTREQUEST']._serialized_start=877
  _globals['_QUERYSTAKINGAMOUNTREQUEST']._serialized_end=936
  _globals['_QUERYSTAKINGAMOUNTRESPONSE']._serialized_start=938
  _globals['_QUERYSTAKINGAMOUNTRESPONSE']._serialized_end=1005
  _globals['_QUERYOWNEROFREQUEST']._serialized_start=1007
  _globals['_QUERYOWNEROFREQUEST']._serialized_end=1110
  _globals['_QUERYOWNEROFRESPONSE']._serialized_start=1112
  _globals['_QUERYOWNEROFRESPONSE']._serialized_end=1171
  _globals['_QUERYBALANCEOFREQUEST']._serialized_start=1173
  _globals['_QUERYBALANCEOFREQUEST']._serialized_end=1288
  _globals['_QUERYBALANCEOFRESPONSE']._serialized_start=1290
  _globals['_QUERYBALANCEOFRESPONSE']._serialized_end=1340
  _globals['_DELEGATE']._serialized_start=1343
  _globals['_DELEGATE']._serialized_end=1496
  _globals['_RECEIPT']._serialized_start=1499
  _globals['_RECEIPT']._serialized_end=1790
  _globals['_MINTSCOREEVENT']._serialized_start=1793
  _globals['_MINTSCOREEVENT']._serialized_end=2112
  _globals['_MINTSCOREEVENT_SCORECATEGORY']._serialized_start=1980
  _globals['_MINTSCOREEVENT_SCORECATEGORY']._serialized_end=2064
  _globals['_DEPLOYTBAANDMINTPROTOSHIPEVENT']._serialized_start=2114
  _globals['_DEPLOYTBAANDMINTPROTOSHIPEVENT']._serialized_end=2206
  _globals['_CHAINQUERYSERVICE']._serialized_start=2419
  _globals['_CHAINQUERYSERVICE']._serialized_end=3470
# @@protoc_insertion_point(module_scope)

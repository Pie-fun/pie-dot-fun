# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: pie-dot-fun/v1/basket-token-market.proto
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
    'pie-dot-fun/v1/basket-token-market.proto'
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
from pie_dot_fun.v1 import common_pb2 as pie__dot__fun_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n(pie-dot-fun/v1/basket-token-market.proto\x12\x0cpiedotfun.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x19google/api/resource.proto\x1a\x17google/api/client.proto\x1a\x19pie-dot-fun/v1/auth.proto\x1a\x1bpie-dot-fun/v1/common.proto\"\xbc\x08\n\x11\x42\x61sketTokenMarket\x12\x18\n\x04name\x18\x01 \x01(\tB\x04\xe2\x41\x01\x03R\x04name\x12R\n\x0c\x62\x61sket_token\x18\x02 \x01(\tB/\xe2\x41\x01\x03\xfa\x41(\n&piedotfun.spacebarapis.xyz/BasketTokenR\x0b\x62\x61sketToken\x12\x45\n\x0fnative_currency\x18\x03 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyB\x04\xe2\x41\x01\x03R\x0enativeCurrency\x12K\n\x06values\x18\x05 \x03(\x0b\x32+.piedotfun.v1.BasketTokenMarket.ValuesEntryB\x06\x18\x01\xe2\x41\x01\x03R\x06values\x12X\n\x0bmarket_caps\x18\x06 \x03(\x0b\x32/.piedotfun.v1.BasketTokenMarket.MarketCapsEntryB\x06\x18\x01\xe2\x41\x01\x03R\nmarketCaps\x12^\n\rvalue_changes\x18\x07 \x03(\x0b\x32\x31.piedotfun.v1.BasketTokenMarket.ValueChangesEntryB\x06\x18\x01\xe2\x41\x01\x03R\x0cvalueChanges\x12J\n\x11maximum_draw_down\x18\x08 \x01(\x0b\x32\x18.piedotfun.v1.PercentageB\x04\xe2\x41\x01\x03R\x0fmaximumDrawDown\x12/\n\x05value\x18\t \x01(\x0b\x32\x13.piedotfun.v1.MoneyB\x04\xe2\x41\x01\x03R\x05value\x12\x38\n\nmarket_cap\x18\n \x01(\x0b\x32\x13.piedotfun.v1.MoneyB\x04\xe2\x41\x01\x03R\tmarketCap\x12K\n\x0cvalue_change\x18\x0b \x01(\x0b\x32\".piedotfun.v1.PriceChangesByPeriodB\x04\xe2\x41\x01\x03R\x0bvalueChange\x1aN\n\x0bValuesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x05value:\x02\x38\x01\x1aR\n\x0fMarketCapsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x13.piedotfun.v1.MoneyR\x05value:\x02\x38\x01\x1a\x63\n\x11ValueChangesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x38\n\x05value\x18\x02 \x01(\x0b\x32\".piedotfun.v1.PriceChangesByPeriodR\x05value:\x02\x38\x01:X\xea\x41U\n,piedotfun.spacebarapis.xyz/BasketTokenMarket\x12%basketTokens/{chain}/{address}/marketJ\x04\x08\x04\x10\x05\"\xb2\x01\n\x1e\x43reateBasketTokenMarketRequest\x12U\n\x13\x62\x61sket_token_market\x18\x01 \x01(\x0b\x32\x1f.piedotfun.v1.BasketTokenMarketB\x04\xe2\x41\x01\x02R\x11\x62\x61sketTokenMarket\x12!\n\x0c\x64isplay_name\x18\x02 \x01(\tR\x0b\x64isplayName\x12\x16\n\x06symbol\x18\x03 \x01(\tR\x06symbol\"\xfe\x02\n$CustomCreateBasketTokenMarketRequest\x12U\n\x13\x62\x61sket_token_market\x18\x01 \x01(\x0b\x32\x1f.piedotfun.v1.BasketTokenMarketB\x04\xe2\x41\x01\x02R\x11\x62\x61sketTokenMarket\x12\\\n\ncomponents\x18\x02 \x03(\x0b\x32<.piedotfun.v1.CustomCreateBasketTokenMarketRequest.ComponentR\ncomponents\x12!\n\x0c\x64isplay_name\x18\x03 \x01(\tR\x0b\x64isplayName\x12\x16\n\x06symbol\x18\x04 \x01(\tR\x06symbol\x1a\x66\n\tComponent\x12%\n\x0e\x66ungible_token\x18\x01 \x01(\tR\rfungibleToken\x12\x32\n\x08quantity\x18\x02 \x01(\x0b\x32\x16.piedotfun.v1.QuantityR\x08quantity\"\xb8\x01\n\x1bGetBasketTokenMarketRequest\x12\x65\n\x13\x62\x61sket_token_market\x18\x01 \x01(\tB5\xe2\x41\x01\x02\xfa\x41.\n,piedotfun.spacebarapis.xyz/BasketTokenMarketR\x11\x62\x61sketTokenMarket\x12\x32\n\x08\x63urrency\x18\x02 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyR\x08\x63urrency\"\xc3\x01\n\x1eListBasketTokensMarketsRequest\x12\x1b\n\tpage_size\x18\x01 \x01(\x05R\x08pageSize\x12\x1d\n\npage_token\x18\x02 \x01(\tR\tpageToken\x12\x16\n\x06\x66ilter\x18\x03 \x01(\tR\x06\x66ilter\x12\x19\n\x08order_by\x18\x04 \x01(\tR\x07orderBy\x12\x32\n\x08\x63urrency\x18\x05 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyR\x08\x63urrency\"\x9c\x01\n\x1fListBasketTokensMarketsResponse\x12Q\n\x14\x62\x61sket_token_markets\x18\x01 \x03(\x0b\x32\x1f.piedotfun.v1.BasketTokenMarketR\x12\x62\x61sketTokenMarkets\x12&\n\x0fnext_page_token\x18\x02 \x01(\tR\rnextPageToken\"\x89\x03\n(UpdateBasketTokenMarketComponentsRequest\x12\x65\n\x13\x62\x61sket_token_market\x18\x01 \x01(\tB5\xe2\x41\x01\x02\xfa\x41.\n,piedotfun.spacebarapis.xyz/BasketTokenMarketR\x11\x62\x61sketTokenMarket\x12`\n\ncomponents\x18\x02 \x03(\x0b\x32@.piedotfun.v1.UpdateBasketTokenMarketComponentsRequest.ComponentR\ncomponents\x12,\n\x11updateBlockNumber\x18\x03 \x01(\x04R\x11updateBlockNumber\x1a\x66\n\tComponent\x12%\n\x0e\x66ungible_token\x18\x01 \x01(\tR\rfungibleToken\x12\x32\n\x08quantity\x18\x02 \x01(\x0b\x32\x16.piedotfun.v1.QuantityR\x08quantity\"+\n)UpdateBasketTokenMarketComponentsResponse\"\x8c\x03\n\x1bListBasketTokenTicksRequest\x12G\n\x06parent\x18\x01 \x01(\tB/\xe2\x41\x01\x02\xfa\x41(\n&piedotfun.spacebarapis.xyz/BasketTokenR\x06parent\x12>\n\nstart_time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00R\tstartTime\x88\x01\x01\x12:\n\x08\x65nd_time\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x01R\x07\x65ndTime\x88\x01\x01\x12\x17\n\x04size\x18\x04 \x01(\x05H\x02R\x04size\x88\x01\x01\x12\x32\n\x08\x63urrency\x18\x05 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyR\x08\x63urrency\x12\x36\n\x08interval\x18\x06 \x01(\x0e\x32\x1a.piedotfun.v1.TickIntervalR\x08intervalB\r\n\x0b_start_timeB\x0b\n\t_end_timeB\x07\n\x05_size\"|\n\x1cListBasketTokenTicksResponse\x12(\n\x05ticks\x18\x01 \x03(\x0b\x32\x12.piedotfun.v1.TickR\x05ticks\x12\x32\n\x08\x63urrency\x18\x02 \x01(\x0e\x32\x16.piedotfun.v1.CurrencyR\x08\x63urrency\"\x8f\x01\n\x04Tick\x12\x37\n\topen_time\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x08openTime\x12\x12\n\x04open\x18\x02 \x01(\x01R\x04open\x12\x12\n\x04high\x18\x03 \x01(\x01R\x04high\x12\x10\n\x03low\x18\x04 \x01(\x01R\x03low\x12\x14\n\x05\x63lose\x18\x05 \x01(\x01R\x05\x63lose*\xb1\x01\n\x0cTickInterval\x12\x18\n\x14INTERVAL_UNSPECIFIED\x10\x00\x12\x19\n\x11INTERVAL_1_SECOND\x10\x01\x1a\x02\x08\x01\x12\x15\n\x11INTERVAL_1_MINUTE\x10\x02\x12\x17\n\x13INTERVAL_15_MINUTES\x10\x03\x12\x13\n\x0fINTERVAL_1_HOUR\x10\x04\x12\x13\n\x0fINTERVAL_4_HOUR\x10\x05\x12\x12\n\x0eINTERVAL_1_DAY\x10\x06\x32\xab\t\n\x18\x42\x61sketTokenMarketService\x12\xb2\x01\n\x17\x43reateBasketTokenMarket\x12,.piedotfun.v1.CreateBasketTokenMarketRequest\x1a\x1f.piedotfun.v1.BasketTokenMarket\"H\xda\x41\x00\x88\xb5\x18\x01\x90\xb5\x18\x00\x98\xb5\x18\x00\x82\xd3\xe4\x93\x02\x33\"\x1c/v1/basketTokens/-/-/markets:\x13\x62\x61sket_token_market\x12\xb3\x01\n\x1d\x43ustomCreateBasketTokenMarket\x12\x32.piedotfun.v1.CustomCreateBasketTokenMarketRequest\x1a\x1f.piedotfun.v1.BasketTokenMarket\"=\xda\x41\x00\x88\xb5\x18\x01\x90\xb5\x18\x00\x98\xb5\x18\x00\x82\xd3\xe4\x93\x02(\"#/v1/basketTokens/-/-/markets:create:\x01*\x12\xbf\x01\n\x14GetBasketTokenMarket\x12).piedotfun.v1.GetBasketTokenMarketRequest\x1a\x1f.piedotfun.v1.BasketTokenMarket\"[\xda\x41\x13\x62\x61sket_token_market\x88\xb5\x18\x01\x90\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02\x33\x12\x31/v1/{basket_token_market=basketTokens/*/*/market}\x12\xa7\x01\n\x16ListBasketTokenMarkets\x12,.piedotfun.v1.ListBasketTokensMarketsRequest\x1a-.piedotfun.v1.ListBasketTokensMarketsResponse\"0\x88\xb5\x18\x01\x90\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/basketTokens/-/-/markets\x12\x85\x02\n!UpdateBasketTokenMarketComponents\x12\x36.piedotfun.v1.UpdateBasketTokenMarketComponentsRequest\x1a\x37.piedotfun.v1.UpdateBasketTokenMarketComponentsResponse\"o\xda\x41\x13\x62\x61sket_token_market\x88\xb5\x18\x01\x90\xb5\x18\x00\x98\xb5\x18\x00\x82\xd3\xe4\x93\x02G\"B/v1/{basket_token_market=basketTokens/*/*/market}:updateComponents:\x01*\x12\xaf\x01\n\x14ListBasketTokenTicks\x12).piedotfun.v1.ListBasketTokenTicksRequest\x1a*.piedotfun.v1.ListBasketTokenTicksResponse\"@\xda\x41\x06parent\x88\xb5\x18\x01\x90\xb5\x18\x01\x98\xb5\x18\x01\x82\xd3\xe4\x93\x02%\x12#/v1/{parent=basketTokens/*/*}/ticksB>Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfunb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pie_dot_fun.v1.basket_token_market_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z<github.com/ao-labs/spacebar-apis/go/pie-dot-fun/v1;piedotfun'
  _globals['_TICKINTERVAL'].values_by_name["INTERVAL_1_SECOND"]._loaded_options = None
  _globals['_TICKINTERVAL'].values_by_name["INTERVAL_1_SECOND"]._serialized_options = b'\010\001'
  _globals['_BASKETTOKENMARKET_VALUESENTRY']._loaded_options = None
  _globals['_BASKETTOKENMARKET_VALUESENTRY']._serialized_options = b'8\001'
  _globals['_BASKETTOKENMARKET_MARKETCAPSENTRY']._loaded_options = None
  _globals['_BASKETTOKENMARKET_MARKETCAPSENTRY']._serialized_options = b'8\001'
  _globals['_BASKETTOKENMARKET_VALUECHANGESENTRY']._loaded_options = None
  _globals['_BASKETTOKENMARKET_VALUECHANGESENTRY']._serialized_options = b'8\001'
  _globals['_BASKETTOKENMARKET'].fields_by_name['name']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['name']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['basket_token']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['basket_token']._serialized_options = b'\342A\001\003\372A(\n&piedotfun.spacebarapis.xyz/BasketToken'
  _globals['_BASKETTOKENMARKET'].fields_by_name['native_currency']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['native_currency']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['values']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['values']._serialized_options = b'\030\001\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['market_caps']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['market_caps']._serialized_options = b'\030\001\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['value_changes']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['value_changes']._serialized_options = b'\030\001\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['maximum_draw_down']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['maximum_draw_down']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['value']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['value']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['market_cap']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['market_cap']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET'].fields_by_name['value_change']._loaded_options = None
  _globals['_BASKETTOKENMARKET'].fields_by_name['value_change']._serialized_options = b'\342A\001\003'
  _globals['_BASKETTOKENMARKET']._loaded_options = None
  _globals['_BASKETTOKENMARKET']._serialized_options = b'\352AU\n,piedotfun.spacebarapis.xyz/BasketTokenMarket\022%basketTokens/{chain}/{address}/market'
  _globals['_CREATEBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._loaded_options = None
  _globals['_CREATEBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._serialized_options = b'\342A\001\002'
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._loaded_options = None
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._serialized_options = b'\342A\001\002'
  _globals['_GETBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._loaded_options = None
  _globals['_GETBASKETTOKENMARKETREQUEST'].fields_by_name['basket_token_market']._serialized_options = b'\342A\001\002\372A.\n,piedotfun.spacebarapis.xyz/BasketTokenMarket'
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST'].fields_by_name['basket_token_market']._loaded_options = None
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST'].fields_by_name['basket_token_market']._serialized_options = b'\342A\001\002\372A.\n,piedotfun.spacebarapis.xyz/BasketTokenMarket'
  _globals['_LISTBASKETTOKENTICKSREQUEST'].fields_by_name['parent']._loaded_options = None
  _globals['_LISTBASKETTOKENTICKSREQUEST'].fields_by_name['parent']._serialized_options = b'\342A\001\002\372A(\n&piedotfun.spacebarapis.xyz/BasketToken'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['CreateBasketTokenMarket']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['CreateBasketTokenMarket']._serialized_options = b'\332A\000\210\265\030\001\220\265\030\000\230\265\030\000\202\323\344\223\0023\"\034/v1/basketTokens/-/-/markets:\023basket_token_market'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['CustomCreateBasketTokenMarket']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['CustomCreateBasketTokenMarket']._serialized_options = b'\332A\000\210\265\030\001\220\265\030\000\230\265\030\000\202\323\344\223\002(\"#/v1/basketTokens/-/-/markets:create:\001*'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['GetBasketTokenMarket']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['GetBasketTokenMarket']._serialized_options = b'\332A\023basket_token_market\210\265\030\001\220\265\030\001\230\265\030\001\202\323\344\223\0023\0221/v1/{basket_token_market=basketTokens/*/*/market}'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['ListBasketTokenMarkets']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['ListBasketTokenMarkets']._serialized_options = b'\210\265\030\001\220\265\030\001\230\265\030\001\202\323\344\223\002\036\022\034/v1/basketTokens/-/-/markets'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['UpdateBasketTokenMarketComponents']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['UpdateBasketTokenMarketComponents']._serialized_options = b'\332A\023basket_token_market\210\265\030\001\220\265\030\000\230\265\030\000\202\323\344\223\002G\"B/v1/{basket_token_market=basketTokens/*/*/market}:updateComponents:\001*'
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['ListBasketTokenTicks']._loaded_options = None
  _globals['_BASKETTOKENMARKETSERVICE'].methods_by_name['ListBasketTokenTicks']._serialized_options = b'\332A\006parent\210\265\030\001\220\265\030\001\230\265\030\001\202\323\344\223\002%\022#/v1/{parent=basketTokens/*/*}/ticks'
  _globals['_TICKINTERVAL']._serialized_start=3635
  _globals['_TICKINTERVAL']._serialized_end=3812
  _globals['_BASKETTOKENMARKET']._serialized_start=326
  _globals['_BASKETTOKENMARKET']._serialized_end=1410
  _globals['_BASKETTOKENMARKET_VALUESENTRY']._serialized_start=1051
  _globals['_BASKETTOKENMARKET_VALUESENTRY']._serialized_end=1129
  _globals['_BASKETTOKENMARKET_MARKETCAPSENTRY']._serialized_start=1131
  _globals['_BASKETTOKENMARKET_MARKETCAPSENTRY']._serialized_end=1213
  _globals['_BASKETTOKENMARKET_VALUECHANGESENTRY']._serialized_start=1215
  _globals['_BASKETTOKENMARKET_VALUECHANGESENTRY']._serialized_end=1314
  _globals['_CREATEBASKETTOKENMARKETREQUEST']._serialized_start=1413
  _globals['_CREATEBASKETTOKENMARKETREQUEST']._serialized_end=1591
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST']._serialized_start=1594
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST']._serialized_end=1976
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST_COMPONENT']._serialized_start=1874
  _globals['_CUSTOMCREATEBASKETTOKENMARKETREQUEST_COMPONENT']._serialized_end=1976
  _globals['_GETBASKETTOKENMARKETREQUEST']._serialized_start=1979
  _globals['_GETBASKETTOKENMARKETREQUEST']._serialized_end=2163
  _globals['_LISTBASKETTOKENSMARKETSREQUEST']._serialized_start=2166
  _globals['_LISTBASKETTOKENSMARKETSREQUEST']._serialized_end=2361
  _globals['_LISTBASKETTOKENSMARKETSRESPONSE']._serialized_start=2364
  _globals['_LISTBASKETTOKENSMARKETSRESPONSE']._serialized_end=2520
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST']._serialized_start=2523
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST']._serialized_end=2916
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST_COMPONENT']._serialized_start=1874
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSREQUEST_COMPONENT']._serialized_end=1976
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSRESPONSE']._serialized_start=2918
  _globals['_UPDATEBASKETTOKENMARKETCOMPONENTSRESPONSE']._serialized_end=2961
  _globals['_LISTBASKETTOKENTICKSREQUEST']._serialized_start=2964
  _globals['_LISTBASKETTOKENTICKSREQUEST']._serialized_end=3360
  _globals['_LISTBASKETTOKENTICKSRESPONSE']._serialized_start=3362
  _globals['_LISTBASKETTOKENTICKSRESPONSE']._serialized_end=3486
  _globals['_TICK']._serialized_start=3489
  _globals['_TICK']._serialized_end=3632
  _globals['_BASKETTOKENMARKETSERVICE']._serialized_start=3815
  _globals['_BASKETTOKENMARKETSERVICE']._serialized_end=5010
# @@protoc_insertion_point(module_scope)

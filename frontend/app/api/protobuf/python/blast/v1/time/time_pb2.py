# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: blast/v1/time/time.proto
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
    'blast/v1/time/time.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.api import field_behavior_pb2 as google_dot_api_dot_field__behavior__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.type import date_pb2 as google_dot_type_dot_date__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18\x62last/v1/time/time.proto\x12\rblast.v1.time\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/api/field_behavior.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x16google/type/date.proto\"\xf0\x03\n\x0cSpacebarWeek\x12\x12\n\x04week\x18\x01 \x01(\rR\x04week\x12\x30\n\nstart_date\x18\x02 \x01(\x0b\x32\x11.google.type.DateR\tstartDate\x12,\n\x08\x65nd_date\x18\x03 \x01(\x0b\x32\x11.google.type.DateR\x07\x65ndDate\x12\x34\n\x14\x66ull_week_based_year\x18\x04 \x01(\rH\x00R\x11\x66ullWeekBasedYear\x88\x01\x01\x12\x36\n\x15\x66ull_week_based_month\x18\x05 \x01(\rH\x01R\x12\x66ullWeekBasedMonth\x88\x01\x01\x12\x34\n\x14\x66ull_week_based_week\x18\x06 \x01(\rH\x02R\x11\x66ullWeekBasedWeek\x88\x01\x01\x12<\n\x1b\x66ull_week_based_week_string\x18\x07 \x01(\tR\x17\x66ullWeekBasedWeekString\x12>\n\x1c\x66ull_week_based_month_string\x18\x08 \x01(\tR\x18\x66ullWeekBasedMonthStringB\x17\n\x15_full_week_based_yearB\x18\n\x16_full_week_based_monthB\x17\n\x15_full_week_based_week\"N\n\x16GetCurrentTimeResponse\x12\x34\n\x04time\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x04\xe2\x41\x01\x03R\x04time\",\n\x16GetCurrentWeekResponse\x12\x12\n\x04week\x18\x01 \x01(\rR\x04week\",\n\x16GetSpacebarWeekRequest\x12\x12\n\x04week\x18\x01 \x01(\rR\x04week\"S\n\x1cGetSpacebarWeekByDateRequest\x12*\n\x04\x64\x61te\x18\x01 \x01(\x0b\x32\x11.google.type.DateH\x00R\x04\x64\x61te\x88\x01\x01\x42\x07\n\x05_date\"m\n#GetCurrentFullWeekBasedWeekResponse\x12!\n\x0c\x63urrent_week\x18\x01 \x01(\tR\x0b\x63urrentWeek\x12#\n\rprevious_week\x18\x02 \x01(\tR\x0cpreviousWeek\"d\n\x1bGetFullWeekBasedWeekRequest\x12\'\n\x04\x64\x61te\x18\x01 \x01(\x0b\x32\x11.google.type.DateH\x00R\x04\x64\x61te\x12\x14\n\x04week\x18\x02 \x01(\rH\x00R\x04weekB\x06\n\x04\x62\x61se\"2\n\x1cGetFullWeekBasedWeekResponse\x12\x12\n\x04week\x18\x01 \x01(\tR\x04week\"r\n$GetCurrentFullWeekBasedMonthResponse\x12#\n\rcurrent_month\x18\x01 \x01(\tR\x0c\x63urrentMonth\x12%\n\x0eprevious_month\x18\x02 \x01(\tR\rpreviousMonth2\x82\x07\n\x0bTimeService\x12m\n\x0eGetCurrentTime\x12\x16.google.protobuf.Empty\x1a%.blast.v1.time.GetCurrentTimeResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/time/currentTime\x12\x80\x01\n\x0eGetCurrentWeek\x12\x16.google.protobuf.Empty\x1a%.blast.v1.time.GetCurrentWeekResponse\"/\x88\x02\x01\x82\xd3\xe4\x93\x02&\x12\x14/v1/time/currentWeekZ\x0e\x12\x0c/currentWeek\x12~\n\x0fGetSpacebarWeek\x12%.blast.v1.time.GetSpacebarWeekRequest\x1a\x1b.blast.v1.time.SpacebarWeek\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/time/spacebarWeeks/{week=*}\x12\x8e\x01\n\x15GetSpacebarWeekByDate\x12+.blast.v1.time.GetSpacebarWeekByDateRequest\x1a\x1b.blast.v1.time.SpacebarWeek\"+\x82\xd3\xe4\x93\x02%\" /v1/time/spacebarWeeks:getByDate:\x01*\x12\xb4\x01\n\x1bGetCurrentFullWeekBasedWeek\x12\x16.google.protobuf.Empty\x1a\x32.blast.v1.time.GetCurrentFullWeekBasedWeekResponse\"I\x88\x02\x01\x82\xd3\xe4\x93\x02@\x12!/v1/time/currentFullWeekBasedWeekZ\x1b\x12\x19/currentFullWeekBasedWeek\x12\xb8\x01\n\x1cGetCurrentFullWeekBasedMonth\x12\x16.google.protobuf.Empty\x1a\x33.blast.v1.time.GetCurrentFullWeekBasedMonthResponse\"K\x88\x02\x01\x82\xd3\xe4\x93\x02\x42\x12\"/v1/time/currentFullWeekBasedMonthZ\x1c\x12\x1a/currentFullWeekBasedMonthB8Z6github.com/ao-labs/spacebar-apis/go/blast/v1/time;timeb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'blast.v1.time.time_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z6github.com/ao-labs/spacebar-apis/go/blast/v1/time;time'
  _globals['_GETCURRENTTIMERESPONSE'].fields_by_name['time']._loaded_options = None
  _globals['_GETCURRENTTIMERESPONSE'].fields_by_name['time']._serialized_options = b'\342A\001\003'
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentTime']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentTime']._serialized_options = b'\202\323\344\223\002\026\022\024/v1/time/currentTime'
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentWeek']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentWeek']._serialized_options = b'\210\002\001\202\323\344\223\002&\022\024/v1/time/currentWeekZ\016\022\014/currentWeek'
  _globals['_TIMESERVICE'].methods_by_name['GetSpacebarWeek']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetSpacebarWeek']._serialized_options = b'\202\323\344\223\002!\022\037/v1/time/spacebarWeeks/{week=*}'
  _globals['_TIMESERVICE'].methods_by_name['GetSpacebarWeekByDate']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetSpacebarWeekByDate']._serialized_options = b'\202\323\344\223\002%\" /v1/time/spacebarWeeks:getByDate:\001*'
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentFullWeekBasedWeek']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentFullWeekBasedWeek']._serialized_options = b'\210\002\001\202\323\344\223\002@\022!/v1/time/currentFullWeekBasedWeekZ\033\022\031/currentFullWeekBasedWeek'
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentFullWeekBasedMonth']._loaded_options = None
  _globals['_TIMESERVICE'].methods_by_name['GetCurrentFullWeekBasedMonth']._serialized_options = b'\210\002\001\202\323\344\223\002B\022\"/v1/time/currentFullWeekBasedMonthZ\034\022\032/currentFullWeekBasedMonth'
  _globals['_SPACEBARWEEK']._serialized_start=193
  _globals['_SPACEBARWEEK']._serialized_end=689
  _globals['_GETCURRENTTIMERESPONSE']._serialized_start=691
  _globals['_GETCURRENTTIMERESPONSE']._serialized_end=769
  _globals['_GETCURRENTWEEKRESPONSE']._serialized_start=771
  _globals['_GETCURRENTWEEKRESPONSE']._serialized_end=815
  _globals['_GETSPACEBARWEEKREQUEST']._serialized_start=817
  _globals['_GETSPACEBARWEEKREQUEST']._serialized_end=861
  _globals['_GETSPACEBARWEEKBYDATEREQUEST']._serialized_start=863
  _globals['_GETSPACEBARWEEKBYDATEREQUEST']._serialized_end=946
  _globals['_GETCURRENTFULLWEEKBASEDWEEKRESPONSE']._serialized_start=948
  _globals['_GETCURRENTFULLWEEKBASEDWEEKRESPONSE']._serialized_end=1057
  _globals['_GETFULLWEEKBASEDWEEKREQUEST']._serialized_start=1059
  _globals['_GETFULLWEEKBASEDWEEKREQUEST']._serialized_end=1159
  _globals['_GETFULLWEEKBASEDWEEKRESPONSE']._serialized_start=1161
  _globals['_GETFULLWEEKBASEDWEEKRESPONSE']._serialized_end=1211
  _globals['_GETCURRENTFULLWEEKBASEDMONTHRESPONSE']._serialized_start=1213
  _globals['_GETCURRENTFULLWEEKBASEDMONTHRESPONSE']._serialized_end=1327
  _globals['_TIMESERVICE']._serialized_start=1330
  _globals['_TIMESERVICE']._serialized_end=2228
# @@protoc_insertion_point(module_scope)

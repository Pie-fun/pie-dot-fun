from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.type import date_pb2 as _date_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SpacebarWeek(_message.Message):
    __slots__ = ("week", "start_date", "end_date", "full_week_based_year", "full_week_based_month", "full_week_based_week", "full_week_based_week_string", "full_week_based_month_string")
    WEEK_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    END_DATE_FIELD_NUMBER: _ClassVar[int]
    FULL_WEEK_BASED_YEAR_FIELD_NUMBER: _ClassVar[int]
    FULL_WEEK_BASED_MONTH_FIELD_NUMBER: _ClassVar[int]
    FULL_WEEK_BASED_WEEK_FIELD_NUMBER: _ClassVar[int]
    FULL_WEEK_BASED_WEEK_STRING_FIELD_NUMBER: _ClassVar[int]
    FULL_WEEK_BASED_MONTH_STRING_FIELD_NUMBER: _ClassVar[int]
    week: int
    start_date: _date_pb2.Date
    end_date: _date_pb2.Date
    full_week_based_year: int
    full_week_based_month: int
    full_week_based_week: int
    full_week_based_week_string: str
    full_week_based_month_string: str
    def __init__(self, week: _Optional[int] = ..., start_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., end_date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., full_week_based_year: _Optional[int] = ..., full_week_based_month: _Optional[int] = ..., full_week_based_week: _Optional[int] = ..., full_week_based_week_string: _Optional[str] = ..., full_week_based_month_string: _Optional[str] = ...) -> None: ...

class GetCurrentTimeResponse(_message.Message):
    __slots__ = ("time",)
    TIME_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    def __init__(self, time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetCurrentWeekResponse(_message.Message):
    __slots__ = ("week",)
    WEEK_FIELD_NUMBER: _ClassVar[int]
    week: int
    def __init__(self, week: _Optional[int] = ...) -> None: ...

class GetSpacebarWeekRequest(_message.Message):
    __slots__ = ("week",)
    WEEK_FIELD_NUMBER: _ClassVar[int]
    week: int
    def __init__(self, week: _Optional[int] = ...) -> None: ...

class GetSpacebarWeekByDateRequest(_message.Message):
    __slots__ = ("date",)
    DATE_FIELD_NUMBER: _ClassVar[int]
    date: _date_pb2.Date
    def __init__(self, date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ...) -> None: ...

class GetCurrentFullWeekBasedWeekResponse(_message.Message):
    __slots__ = ("current_week", "previous_week")
    CURRENT_WEEK_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_WEEK_FIELD_NUMBER: _ClassVar[int]
    current_week: str
    previous_week: str
    def __init__(self, current_week: _Optional[str] = ..., previous_week: _Optional[str] = ...) -> None: ...

class GetFullWeekBasedWeekRequest(_message.Message):
    __slots__ = ("date", "week")
    DATE_FIELD_NUMBER: _ClassVar[int]
    WEEK_FIELD_NUMBER: _ClassVar[int]
    date: _date_pb2.Date
    week: int
    def __init__(self, date: _Optional[_Union[_date_pb2.Date, _Mapping]] = ..., week: _Optional[int] = ...) -> None: ...

class GetFullWeekBasedWeekResponse(_message.Message):
    __slots__ = ("week",)
    WEEK_FIELD_NUMBER: _ClassVar[int]
    week: str
    def __init__(self, week: _Optional[str] = ...) -> None: ...

class GetCurrentFullWeekBasedMonthResponse(_message.Message):
    __slots__ = ("current_month", "previous_month")
    CURRENT_MONTH_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_MONTH_FIELD_NUMBER: _ClassVar[int]
    current_month: str
    previous_month: str
    def __init__(self, current_month: _Optional[str] = ..., previous_month: _Optional[str] = ...) -> None: ...

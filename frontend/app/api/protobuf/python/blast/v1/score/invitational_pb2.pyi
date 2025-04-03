from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SSIndividualInvitationalEvent(_message.Message):
    __slots__ = ("name", "year_month", "start_date", "end_date", "form_link")
    NAME_FIELD_NUMBER: _ClassVar[int]
    YEAR_MONTH_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    END_DATE_FIELD_NUMBER: _ClassVar[int]
    FORM_LINK_FIELD_NUMBER: _ClassVar[int]
    name: str
    year_month: str
    start_date: _timestamp_pb2.Timestamp
    end_date: _timestamp_pb2.Timestamp
    form_link: str
    def __init__(self, name: _Optional[str] = ..., year_month: _Optional[str] = ..., start_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., form_link: _Optional[str] = ...) -> None: ...

class SSIndividualInvitational(_message.Message):
    __slots__ = ("name", "year_month", "start_date", "end_date", "form_link")
    NAME_FIELD_NUMBER: _ClassVar[int]
    YEAR_MONTH_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    END_DATE_FIELD_NUMBER: _ClassVar[int]
    FORM_LINK_FIELD_NUMBER: _ClassVar[int]
    name: str
    year_month: str
    start_date: _timestamp_pb2.Timestamp
    end_date: _timestamp_pb2.Timestamp
    form_link: str
    def __init__(self, name: _Optional[str] = ..., year_month: _Optional[str] = ..., start_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., end_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., form_link: _Optional[str] = ...) -> None: ...

class ListSSIndividualInvitationalEventsRequest(_message.Message):
    __slots__ = ("page_size",)
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    def __init__(self, page_size: _Optional[int] = ...) -> None: ...

class ListSSIndividualInvitationalEventsResponse(_message.Message):
    __slots__ = ("invitational_events",)
    INVITATIONAL_EVENTS_FIELD_NUMBER: _ClassVar[int]
    invitational_events: _containers.RepeatedCompositeFieldContainer[SSIndividualInvitationalEvent]
    def __init__(self, invitational_events: _Optional[_Iterable[_Union[SSIndividualInvitationalEvent, _Mapping]]] = ...) -> None: ...

class CreateSSIndividualInvitationalEventRequest(_message.Message):
    __slots__ = ("invitational_event",)
    INVITATIONAL_EVENT_FIELD_NUMBER: _ClassVar[int]
    invitational_event: SSIndividualInvitationalEvent
    def __init__(self, invitational_event: _Optional[_Union[SSIndividualInvitationalEvent, _Mapping]] = ...) -> None: ...

class GetSSIndividualInvitationalLetterRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SSIndividualInvitationalLetter(_message.Message):
    __slots__ = ("invitational",)
    INVITATIONAL_FIELD_NUMBER: _ClassVar[int]
    invitational: SSIndividualInvitational
    def __init__(self, invitational: _Optional[_Union[SSIndividualInvitational, _Mapping]] = ...) -> None: ...

class InviteSSIndividualInvitationalEventRequest(_message.Message):
    __slots__ = ("invitational_event", "invitees", "viewable_start_time", "viewable_end_time")
    INVITATIONAL_EVENT_FIELD_NUMBER: _ClassVar[int]
    INVITEES_FIELD_NUMBER: _ClassVar[int]
    VIEWABLE_START_TIME_FIELD_NUMBER: _ClassVar[int]
    VIEWABLE_END_TIME_FIELD_NUMBER: _ClassVar[int]
    invitational_event: str
    invitees: _containers.RepeatedScalarFieldContainer[str]
    viewable_start_time: _timestamp_pb2.Timestamp
    viewable_end_time: _timestamp_pb2.Timestamp
    def __init__(self, invitational_event: _Optional[str] = ..., invitees: _Optional[_Iterable[str]] = ..., viewable_start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., viewable_end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class InviteSSIndividualInvitationalEventResponse(_message.Message):
    __slots__ = ("invitational_event", "invitees", "viewable_start_time", "viewable_end_time")
    INVITATIONAL_EVENT_FIELD_NUMBER: _ClassVar[int]
    INVITEES_FIELD_NUMBER: _ClassVar[int]
    VIEWABLE_START_TIME_FIELD_NUMBER: _ClassVar[int]
    VIEWABLE_END_TIME_FIELD_NUMBER: _ClassVar[int]
    invitational_event: str
    invitees: _containers.RepeatedScalarFieldContainer[str]
    viewable_start_time: _timestamp_pb2.Timestamp
    viewable_end_time: _timestamp_pb2.Timestamp
    def __init__(self, invitational_event: _Optional[str] = ..., invitees: _Optional[_Iterable[str]] = ..., viewable_start_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., viewable_end_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

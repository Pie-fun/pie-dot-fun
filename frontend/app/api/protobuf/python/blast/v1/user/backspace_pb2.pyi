from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetBackspaceRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class UpdateBackspaceRequest(_message.Message):
    __slots__ = ("backspace",)
    BACKSPACE_FIELD_NUMBER: _ClassVar[int]
    backspace: Backspace
    def __init__(self, backspace: _Optional[_Union[Backspace, _Mapping]] = ...) -> None: ...

class Backspace(_message.Message):
    __slots__ = ("name", "introduction_chat")
    NAME_FIELD_NUMBER: _ClassVar[int]
    INTRODUCTION_CHAT_FIELD_NUMBER: _ClassVar[int]
    name: str
    introduction_chat: str
    def __init__(self, name: _Optional[str] = ..., introduction_chat: _Optional[str] = ...) -> None: ...

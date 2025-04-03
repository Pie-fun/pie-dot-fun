from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SNSType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SNS_UNSPECIFIED: _ClassVar[SNSType]
    SNS_TWITTER: _ClassVar[SNSType]
SNS_UNSPECIFIED: SNSType
SNS_TWITTER: SNSType

class ExternalProfile(_message.Message):
    __slots__ = ("name", "image_uri", "link")
    NAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URI_FIELD_NUMBER: _ClassVar[int]
    LINK_FIELD_NUMBER: _ClassVar[int]
    name: str
    image_uri: str
    link: str
    def __init__(self, name: _Optional[str] = ..., image_uri: _Optional[str] = ..., link: _Optional[str] = ...) -> None: ...

class SNSConnection(_message.Message):
    __slots__ = ("profile", "type", "external_profile")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: str
    type: SNSType
    external_profile: ExternalProfile
    def __init__(self, profile: _Optional[str] = ..., type: _Optional[_Union[SNSType, str]] = ..., external_profile: _Optional[_Union[ExternalProfile, _Mapping]] = ...) -> None: ...

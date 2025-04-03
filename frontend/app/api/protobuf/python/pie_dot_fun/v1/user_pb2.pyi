from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from pie_dot_fun.v1 import auth_pb2 as _auth_pb2
from pie_dot_fun.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetUserRequest(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: str
    def __init__(self, user: _Optional[str] = ...) -> None: ...

class ListUsersRequest(_message.Message):
    __slots__ = ("page_size", "page_token", "filter")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    filter: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., filter: _Optional[str] = ...) -> None: ...

class ListUsersResponse(_message.Message):
    __slots__ = ("users", "next_page_token")
    USERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    users: _containers.RepeatedCompositeFieldContainer[User]
    next_page_token: str
    def __init__(self, users: _Optional[_Iterable[_Union[User, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateUserRequest(_message.Message):
    __slots__ = ("user", "update_mask")
    USER_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    user: User
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class ValidateNicknameAvailabilityRequest(_message.Message):
    __slots__ = ("nickname",)
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    nickname: str
    def __init__(self, nickname: _Optional[str] = ...) -> None: ...

class ValidateNicknameAvailabilityResponse(_message.Message):
    __slots__ = ("nickname", "available", "reason")
    NICKNAME_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    nickname: str
    available: bool
    reason: str
    def __init__(self, nickname: _Optional[str] = ..., available: bool = ..., reason: _Optional[str] = ...) -> None: ...

class User(_message.Message):
    __slots__ = ("name", "id", "wallets", "create_time", "update_time", "display_name", "biography", "sns", "profile_image_url")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    WALLETS_FIELD_NUMBER: _ClassVar[int]
    CREATE_TIME_FIELD_NUMBER: _ClassVar[int]
    UPDATE_TIME_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    BIOGRAPHY_FIELD_NUMBER: _ClassVar[int]
    SNS_FIELD_NUMBER: _ClassVar[int]
    PROFILE_IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    name: str
    id: str
    wallets: _containers.RepeatedCompositeFieldContainer[UserWallet]
    create_time: _timestamp_pb2.Timestamp
    update_time: _timestamp_pb2.Timestamp
    display_name: str
    biography: str
    sns: _containers.RepeatedCompositeFieldContainer[_common_pb2.SNS]
    profile_image_url: str
    def __init__(self, name: _Optional[str] = ..., id: _Optional[str] = ..., wallets: _Optional[_Iterable[_Union[UserWallet, _Mapping]]] = ..., create_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., update_time: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., display_name: _Optional[str] = ..., biography: _Optional[str] = ..., sns: _Optional[_Iterable[_Union[_common_pb2.SNS, _Mapping]]] = ..., profile_image_url: _Optional[str] = ...) -> None: ...

class UserWallet(_message.Message):
    __slots__ = ("vm_type", "address")
    VM_TYPE_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    vm_type: _common_pb2.VMType
    address: str
    def __init__(self, vm_type: _Optional[_Union[_common_pb2.VMType, str]] = ..., address: _Optional[str] = ...) -> None: ...

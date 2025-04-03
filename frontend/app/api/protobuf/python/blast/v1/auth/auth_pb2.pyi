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
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AuthRole(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ROLE_UNSPECIFIED: _ClassVar[AuthRole]
    ADMIN: _ClassVar[AuthRole]
    USER: _ClassVar[AuthRole]

class AccessLogType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[AccessLogType]
    SIGNIN: _ClassVar[AccessLogType]
    REFRESH: _ClassVar[AccessLogType]
    SIGNOUT: _ClassVar[AccessLogType]
ROLE_UNSPECIFIED: AuthRole
ADMIN: AuthRole
USER: AuthRole
TYPE_UNSPECIFIED: AccessLogType
SIGNIN: AccessLogType
REFRESH: AccessLogType
SIGNOUT: AccessLogType

class SignInRequest(_message.Message):
    __slots__ = ("eoa_address", "timestamp", "signature")
    EOA_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    eoa_address: str
    timestamp: int
    signature: str
    def __init__(self, eoa_address: _Optional[str] = ..., timestamp: _Optional[int] = ..., signature: _Optional[str] = ...) -> None: ...

class SignInResponse(_message.Message):
    __slots__ = ("access_token", "refresh_token", "eoa_address", "has_spaceship", "has_nickname", "has_accepted_terms")
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    EOA_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    HAS_SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    HAS_NICKNAME_FIELD_NUMBER: _ClassVar[int]
    HAS_ACCEPTED_TERMS_FIELD_NUMBER: _ClassVar[int]
    access_token: str
    refresh_token: str
    eoa_address: str
    has_spaceship: bool
    has_nickname: bool
    has_accepted_terms: bool
    def __init__(self, access_token: _Optional[str] = ..., refresh_token: _Optional[str] = ..., eoa_address: _Optional[str] = ..., has_spaceship: bool = ..., has_nickname: bool = ..., has_accepted_terms: bool = ...) -> None: ...

class RefreshTokenRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class RefreshTokenResponse(_message.Message):
    __slots__ = ("access_token", "refresh_token")
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    access_token: str
    refresh_token: str
    def __init__(self, access_token: _Optional[str] = ..., refresh_token: _Optional[str] = ...) -> None: ...

class SignoutRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SignoutResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AuthenticateRequest(_message.Message):
    __slots__ = ("access_token",)
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    access_token: str
    def __init__(self, access_token: _Optional[str] = ...) -> None: ...

class AuthenticateResponse(_message.Message):
    __slots__ = ("eoa_address", "has_spaceship", "has_nickname", "has_accepted_terms")
    EOA_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    HAS_SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    HAS_NICKNAME_FIELD_NUMBER: _ClassVar[int]
    HAS_ACCEPTED_TERMS_FIELD_NUMBER: _ClassVar[int]
    eoa_address: str
    has_spaceship: bool
    has_nickname: bool
    has_accepted_terms: bool
    def __init__(self, eoa_address: _Optional[str] = ..., has_spaceship: bool = ..., has_nickname: bool = ..., has_accepted_terms: bool = ...) -> None: ...

class GetTempTokenRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetTempTokenResponse(_message.Message):
    __slots__ = ("access_token",)
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    access_token: str
    def __init__(self, access_token: _Optional[str] = ...) -> None: ...

class DownloadRequest(_message.Message):
    __slots__ = ("url",)
    URL_FIELD_NUMBER: _ClassVar[int]
    url: str
    def __init__(self, url: _Optional[str] = ...) -> None: ...

class DownloadResponse(_message.Message):
    __slots__ = ("header", "body")
    HEADER_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    header: str
    body: str
    def __init__(self, header: _Optional[str] = ..., body: _Optional[str] = ...) -> None: ...

class AccessTokenClaim(_message.Message):
    __slots__ = ("session_id", "user_address", "has_spaceship", "has_nickname", "has_accepted_terms", "role")
    SESSION_ID_FIELD_NUMBER: _ClassVar[int]
    USER_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    HAS_SPACESHIP_FIELD_NUMBER: _ClassVar[int]
    HAS_NICKNAME_FIELD_NUMBER: _ClassVar[int]
    HAS_ACCEPTED_TERMS_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    session_id: str
    user_address: str
    has_spaceship: bool
    has_nickname: bool
    has_accepted_terms: bool
    role: AuthRole
    def __init__(self, session_id: _Optional[str] = ..., user_address: _Optional[str] = ..., has_spaceship: bool = ..., has_nickname: bool = ..., has_accepted_terms: bool = ..., role: _Optional[_Union[AuthRole, str]] = ...) -> None: ...

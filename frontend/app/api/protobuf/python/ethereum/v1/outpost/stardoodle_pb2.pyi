from google.api import annotations_pb2 as _annotations_pb2
from google.api import field_behavior_pb2 as _field_behavior_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.api import resource_pb2 as _resource_pb2
from google.api import client_pb2 as _client_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class StarDoodleAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TYPE_UNSPECIFIED: _ClassVar[StarDoodleAction]
    DOODLE: _ClassVar[StarDoodleAction]
    MINE: _ClassVar[StarDoodleAction]
TYPE_UNSPECIFIED: StarDoodleAction
DOODLE: StarDoodleAction
MINE: StarDoodleAction

class ListStarDoodlesRequest(_message.Message):
    __slots__ = ("filter",)
    FILTER_FIELD_NUMBER: _ClassVar[int]
    filter: str
    def __init__(self, filter: _Optional[str] = ...) -> None: ...

class ListStarDoodlesResponse(_message.Message):
    __slots__ = ("star_doodles",)
    STAR_DOODLES_FIELD_NUMBER: _ClassVar[int]
    star_doodles: _containers.RepeatedCompositeFieldContainer[StarDoodle]
    def __init__(self, star_doodles: _Optional[_Iterable[_Union[StarDoodle, _Mapping]]] = ...) -> None: ...

class StarDoodle(_message.Message):
    __slots__ = ("doodler", "location_type", "position")
    class LocationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        TYPE_UNSPECIFIED: _ClassVar[StarDoodle.LocationType]
        SQUARE: _ClassVar[StarDoodle.LocationType]
        BACKSPACE: _ClassVar[StarDoodle.LocationType]
    TYPE_UNSPECIFIED: StarDoodle.LocationType
    SQUARE: StarDoodle.LocationType
    BACKSPACE: StarDoodle.LocationType
    DOODLER_FIELD_NUMBER: _ClassVar[int]
    LOCATION_TYPE_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    doodler: str
    location_type: StarDoodle.LocationType
    position: Position
    def __init__(self, doodler: _Optional[str] = ..., location_type: _Optional[_Union[StarDoodle.LocationType, str]] = ..., position: _Optional[_Union[Position, _Mapping]] = ...) -> None: ...

class Position(_message.Message):
    __slots__ = ("x", "y")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: int
    y: int
    def __init__(self, x: _Optional[int] = ..., y: _Optional[int] = ...) -> None: ...

class Star(_message.Message):
    __slots__ = ("color",)
    class StarColor(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        COLOR_UNSPECIFIED: _ClassVar[Star.StarColor]
        YELLOW: _ClassVar[Star.StarColor]
        RED: _ClassVar[Star.StarColor]
        GREEN: _ClassVar[Star.StarColor]
        BLUE: _ClassVar[Star.StarColor]
    COLOR_UNSPECIFIED: Star.StarColor
    YELLOW: Star.StarColor
    RED: Star.StarColor
    GREEN: Star.StarColor
    BLUE: Star.StarColor
    COLOR_FIELD_NUMBER: _ClassVar[int]
    color: Star.StarColor
    def __init__(self, color: _Optional[_Union[Star.StarColor, str]] = ...) -> None: ...

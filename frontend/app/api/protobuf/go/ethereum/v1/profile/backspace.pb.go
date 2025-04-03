// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: ethereum/v1/profile/backspace.proto

package profile

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/emptypb"
	_ "google.golang.org/protobuf/types/known/fieldmaskpb"
	_ "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetBackspaceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the profile to retrieve.
	// Format: profiles/{address}
	// Wildcard (*) is not allowed.
	Profile string `protobuf:"bytes,1,opt,name=profile,proto3" json:"profile,omitempty"`
}

func (x *GetBackspaceRequest) Reset() {
	*x = GetBackspaceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBackspaceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBackspaceRequest) ProtoMessage() {}

func (x *GetBackspaceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBackspaceRequest.ProtoReflect.Descriptor instead.
func (*GetBackspaceRequest) Descriptor() ([]byte, []int) {
	return file_ethereum_v1_profile_backspace_proto_rawDescGZIP(), []int{0}
}

func (x *GetBackspaceRequest) GetProfile() string {
	if x != nil {
		return x.Profile
	}
	return ""
}

type UpdateBackspaceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Backspace to update
	Backspace *Backspace `protobuf:"bytes,1,opt,name=backspace,proto3" json:"backspace,omitempty"`
}

func (x *UpdateBackspaceRequest) Reset() {
	*x = UpdateBackspaceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateBackspaceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateBackspaceRequest) ProtoMessage() {}

func (x *UpdateBackspaceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateBackspaceRequest.ProtoReflect.Descriptor instead.
func (*UpdateBackspaceRequest) Descriptor() ([]byte, []int) {
	return file_ethereum_v1_profile_backspace_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateBackspaceRequest) GetBackspace() *Backspace {
	if x != nil {
		return x.Backspace
	}
	return nil
}

type Backspace struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The resource name of the Backspace.
	// Format: profiles/{address}/backspace
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Introduction chat message of the Backspace.
	IntroductionChat string `protobuf:"bytes,2,opt,name=introduction_chat,json=introductionChat,proto3" json:"introduction_chat,omitempty"`
}

func (x *Backspace) Reset() {
	*x = Backspace{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Backspace) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Backspace) ProtoMessage() {}

func (x *Backspace) ProtoReflect() protoreflect.Message {
	mi := &file_ethereum_v1_profile_backspace_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Backspace.ProtoReflect.Descriptor instead.
func (*Backspace) Descriptor() ([]byte, []int) {
	return file_ethereum_v1_profile_backspace_proto_rawDescGZIP(), []int{2}
}

func (x *Backspace) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Backspace) GetIntroductionChat() string {
	if x != nil {
		return x.IntroductionChat
	}
	return ""
}

var File_ethereum_v1_profile_backspace_proto protoreflect.FileDescriptor

var file_ethereum_v1_profile_backspace_proto_rawDesc = []byte{
	0x0a, 0x23, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6d, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6d, 0x2e,
	0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76,
	0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c,
	0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d,
	0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x5a, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x43, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x29, 0xe2, 0x41, 0x01, 0x02, 0xfa, 0x41, 0x22, 0x0a, 0x20,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x73, 0x70, 0x61, 0x63, 0x65, 0x62, 0x61, 0x72,
	0x61, 0x70, 0x69, 0x73, 0x2e, 0x78, 0x79, 0x7a, 0x2f, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x52, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x22, 0x5c, 0x0a, 0x16, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x42, 0x0a, 0x09, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75,
	0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x42, 0x61, 0x63,
	0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x09, 0x62, 0x61,
	0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x22, 0x8b, 0x01, 0x0a, 0x09, 0x42, 0x61, 0x63, 0x6b,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x69, 0x6e, 0x74,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63, 0x68, 0x61, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x43, 0x68, 0x61, 0x74, 0x3a, 0x3d, 0xea, 0x41, 0x3a, 0x0a, 0x22, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x73, 0x70, 0x61, 0x63, 0x65, 0x62, 0x61, 0x72, 0x61, 0x70, 0x69,
	0x73, 0x2e, 0x78, 0x79, 0x7a, 0x2f, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12,
	0x14, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x2f, 0x7b, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x7d, 0x32, 0xda, 0x02, 0x0a, 0x10, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x8e, 0x01, 0x0a, 0x0c, 0x47,
	0x65, 0x74, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x28, 0x2e, 0x65, 0x74,
	0x68, 0x65, 0x72, 0x65, 0x75, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6d,
	0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x42, 0x61, 0x63, 0x6b,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x22, 0x34, 0xda, 0x41, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x24, 0x12, 0x22, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x3d, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x2f, 0x2a,
	0x7d, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0xb4, 0x01, 0x0a, 0x0f,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12,
	0x2b, 0x2e, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x61, 0x63, 0x6b,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x65,
	0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x2e, 0x42, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x22, 0x54, 0xda, 0x41,
	0x15, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x2c, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x36, 0x3a, 0x09, 0x62, 0x61,
	0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x32, 0x29, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x62, 0x61,
	0x63, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x73, 0x2f, 0x2a, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x73, 0x70, 0x61, 0x63,
	0x65, 0x7d, 0x42, 0x41, 0x5a, 0x3f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x61, 0x6f, 0x2d, 0x6c, 0x61, 0x62, 0x73, 0x2f, 0x73, 0x70, 0x61, 0x63, 0x65, 0x62, 0x61,
	0x72, 0x2d, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x74, 0x68, 0x65, 0x72, 0x65,
	0x75, 0x6d, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x3b, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ethereum_v1_profile_backspace_proto_rawDescOnce sync.Once
	file_ethereum_v1_profile_backspace_proto_rawDescData = file_ethereum_v1_profile_backspace_proto_rawDesc
)

func file_ethereum_v1_profile_backspace_proto_rawDescGZIP() []byte {
	file_ethereum_v1_profile_backspace_proto_rawDescOnce.Do(func() {
		file_ethereum_v1_profile_backspace_proto_rawDescData = protoimpl.X.CompressGZIP(file_ethereum_v1_profile_backspace_proto_rawDescData)
	})
	return file_ethereum_v1_profile_backspace_proto_rawDescData
}

var file_ethereum_v1_profile_backspace_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ethereum_v1_profile_backspace_proto_goTypes = []interface{}{
	(*GetBackspaceRequest)(nil),    // 0: ethereum.v1.profile.GetBackspaceRequest
	(*UpdateBackspaceRequest)(nil), // 1: ethereum.v1.profile.UpdateBackspaceRequest
	(*Backspace)(nil),              // 2: ethereum.v1.profile.Backspace
}
var file_ethereum_v1_profile_backspace_proto_depIdxs = []int32{
	2, // 0: ethereum.v1.profile.UpdateBackspaceRequest.backspace:type_name -> ethereum.v1.profile.Backspace
	0, // 1: ethereum.v1.profile.BackspaceService.GetBackspace:input_type -> ethereum.v1.profile.GetBackspaceRequest
	1, // 2: ethereum.v1.profile.BackspaceService.UpdateBackspace:input_type -> ethereum.v1.profile.UpdateBackspaceRequest
	2, // 3: ethereum.v1.profile.BackspaceService.GetBackspace:output_type -> ethereum.v1.profile.Backspace
	2, // 4: ethereum.v1.profile.BackspaceService.UpdateBackspace:output_type -> ethereum.v1.profile.Backspace
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_ethereum_v1_profile_backspace_proto_init() }
func file_ethereum_v1_profile_backspace_proto_init() {
	if File_ethereum_v1_profile_backspace_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ethereum_v1_profile_backspace_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBackspaceRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ethereum_v1_profile_backspace_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateBackspaceRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ethereum_v1_profile_backspace_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Backspace); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ethereum_v1_profile_backspace_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ethereum_v1_profile_backspace_proto_goTypes,
		DependencyIndexes: file_ethereum_v1_profile_backspace_proto_depIdxs,
		MessageInfos:      file_ethereum_v1_profile_backspace_proto_msgTypes,
	}.Build()
	File_ethereum_v1_profile_backspace_proto = out.File
	file_ethereum_v1_profile_backspace_proto_rawDesc = nil
	file_ethereum_v1_profile_backspace_proto_goTypes = nil
	file_ethereum_v1_profile_backspace_proto_depIdxs = nil
}

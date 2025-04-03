// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: blast/v1/time/time.proto

package time

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TimeServiceClient is the client API for TimeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TimeServiceClient interface {
	// GetCurrentTime
	GetCurrentTime(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentTimeResponse, error)
	// Deprecated: Do not use.
	// GetCurrentWeek
	GetCurrentWeek(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentWeekResponse, error)
	// GetSpacebarWeek
	GetSpacebarWeek(ctx context.Context, in *GetSpacebarWeekRequest, opts ...grpc.CallOption) (*SpacebarWeek, error)
	// GetSpacebarWeekByDate
	GetSpacebarWeekByDate(ctx context.Context, in *GetSpacebarWeekByDateRequest, opts ...grpc.CallOption) (*SpacebarWeek, error)
	// Deprecated: Do not use.
	// GetCurrentFullWeekBasedWeek
	GetCurrentFullWeekBasedWeek(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentFullWeekBasedWeekResponse, error)
	// Deprecated: Do not use.
	// GetCurrentFullWeekBasedMonth
	GetCurrentFullWeekBasedMonth(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentFullWeekBasedMonthResponse, error)
}

type timeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTimeServiceClient(cc grpc.ClientConnInterface) TimeServiceClient {
	return &timeServiceClient{cc}
}

func (c *timeServiceClient) GetCurrentTime(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentTimeResponse, error) {
	out := new(GetCurrentTimeResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetCurrentTime", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Deprecated: Do not use.
func (c *timeServiceClient) GetCurrentWeek(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentWeekResponse, error) {
	out := new(GetCurrentWeekResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetCurrentWeek", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *timeServiceClient) GetSpacebarWeek(ctx context.Context, in *GetSpacebarWeekRequest, opts ...grpc.CallOption) (*SpacebarWeek, error) {
	out := new(SpacebarWeek)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetSpacebarWeek", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *timeServiceClient) GetSpacebarWeekByDate(ctx context.Context, in *GetSpacebarWeekByDateRequest, opts ...grpc.CallOption) (*SpacebarWeek, error) {
	out := new(SpacebarWeek)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetSpacebarWeekByDate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Deprecated: Do not use.
func (c *timeServiceClient) GetCurrentFullWeekBasedWeek(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentFullWeekBasedWeekResponse, error) {
	out := new(GetCurrentFullWeekBasedWeekResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetCurrentFullWeekBasedWeek", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Deprecated: Do not use.
func (c *timeServiceClient) GetCurrentFullWeekBasedMonth(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetCurrentFullWeekBasedMonthResponse, error) {
	out := new(GetCurrentFullWeekBasedMonthResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.time.TimeService/GetCurrentFullWeekBasedMonth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TimeServiceServer is the server API for TimeService service.
// All implementations must embed UnimplementedTimeServiceServer
// for forward compatibility
type TimeServiceServer interface {
	// GetCurrentTime
	GetCurrentTime(context.Context, *emptypb.Empty) (*GetCurrentTimeResponse, error)
	// Deprecated: Do not use.
	// GetCurrentWeek
	GetCurrentWeek(context.Context, *emptypb.Empty) (*GetCurrentWeekResponse, error)
	// GetSpacebarWeek
	GetSpacebarWeek(context.Context, *GetSpacebarWeekRequest) (*SpacebarWeek, error)
	// GetSpacebarWeekByDate
	GetSpacebarWeekByDate(context.Context, *GetSpacebarWeekByDateRequest) (*SpacebarWeek, error)
	// Deprecated: Do not use.
	// GetCurrentFullWeekBasedWeek
	GetCurrentFullWeekBasedWeek(context.Context, *emptypb.Empty) (*GetCurrentFullWeekBasedWeekResponse, error)
	// Deprecated: Do not use.
	// GetCurrentFullWeekBasedMonth
	GetCurrentFullWeekBasedMonth(context.Context, *emptypb.Empty) (*GetCurrentFullWeekBasedMonthResponse, error)
	mustEmbedUnimplementedTimeServiceServer()
}

// UnimplementedTimeServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTimeServiceServer struct {
}

func (UnimplementedTimeServiceServer) GetCurrentTime(context.Context, *emptypb.Empty) (*GetCurrentTimeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentTime not implemented")
}
func (UnimplementedTimeServiceServer) GetCurrentWeek(context.Context, *emptypb.Empty) (*GetCurrentWeekResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentWeek not implemented")
}
func (UnimplementedTimeServiceServer) GetSpacebarWeek(context.Context, *GetSpacebarWeekRequest) (*SpacebarWeek, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSpacebarWeek not implemented")
}
func (UnimplementedTimeServiceServer) GetSpacebarWeekByDate(context.Context, *GetSpacebarWeekByDateRequest) (*SpacebarWeek, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSpacebarWeekByDate not implemented")
}
func (UnimplementedTimeServiceServer) GetCurrentFullWeekBasedWeek(context.Context, *emptypb.Empty) (*GetCurrentFullWeekBasedWeekResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentFullWeekBasedWeek not implemented")
}
func (UnimplementedTimeServiceServer) GetCurrentFullWeekBasedMonth(context.Context, *emptypb.Empty) (*GetCurrentFullWeekBasedMonthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentFullWeekBasedMonth not implemented")
}
func (UnimplementedTimeServiceServer) mustEmbedUnimplementedTimeServiceServer() {}

// UnsafeTimeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TimeServiceServer will
// result in compilation errors.
type UnsafeTimeServiceServer interface {
	mustEmbedUnimplementedTimeServiceServer()
}

func RegisterTimeServiceServer(s grpc.ServiceRegistrar, srv TimeServiceServer) {
	s.RegisterService(&TimeService_ServiceDesc, srv)
}

func _TimeService_GetCurrentTime_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetCurrentTime(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetCurrentTime",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetCurrentTime(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _TimeService_GetCurrentWeek_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetCurrentWeek(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetCurrentWeek",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetCurrentWeek(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _TimeService_GetSpacebarWeek_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSpacebarWeekRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetSpacebarWeek(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetSpacebarWeek",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetSpacebarWeek(ctx, req.(*GetSpacebarWeekRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TimeService_GetSpacebarWeekByDate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSpacebarWeekByDateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetSpacebarWeekByDate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetSpacebarWeekByDate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetSpacebarWeekByDate(ctx, req.(*GetSpacebarWeekByDateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TimeService_GetCurrentFullWeekBasedWeek_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetCurrentFullWeekBasedWeek(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetCurrentFullWeekBasedWeek",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetCurrentFullWeekBasedWeek(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _TimeService_GetCurrentFullWeekBasedMonth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TimeServiceServer).GetCurrentFullWeekBasedMonth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.time.TimeService/GetCurrentFullWeekBasedMonth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TimeServiceServer).GetCurrentFullWeekBasedMonth(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// TimeService_ServiceDesc is the grpc.ServiceDesc for TimeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TimeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "blast.v1.time.TimeService",
	HandlerType: (*TimeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetCurrentTime",
			Handler:    _TimeService_GetCurrentTime_Handler,
		},
		{
			MethodName: "GetCurrentWeek",
			Handler:    _TimeService_GetCurrentWeek_Handler,
		},
		{
			MethodName: "GetSpacebarWeek",
			Handler:    _TimeService_GetSpacebarWeek_Handler,
		},
		{
			MethodName: "GetSpacebarWeekByDate",
			Handler:    _TimeService_GetSpacebarWeekByDate_Handler,
		},
		{
			MethodName: "GetCurrentFullWeekBasedWeek",
			Handler:    _TimeService_GetCurrentFullWeekBasedWeek_Handler,
		},
		{
			MethodName: "GetCurrentFullWeekBasedMonth",
			Handler:    _TimeService_GetCurrentFullWeekBasedMonth_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "blast/v1/time/time.proto",
}

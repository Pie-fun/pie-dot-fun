// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: blast/v1/referral/referral.proto

package referral

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ReferralServiceClient is the client API for ReferralService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReferralServiceClient interface {
	// GetReferral will return Referral.
	GetReferral(ctx context.Context, in *GetReferralRequest, opts ...grpc.CallOption) (*Referral, error)
	// ListReferrals
	// reads across collections, reference: https://google.aip.dev/159
	ListReferrals(ctx context.Context, in *ListReferralsRequest, opts ...grpc.CallOption) (*ListReferralsResponse, error)
	ReferredBy(ctx context.Context, in *RefferedByRequest, opts ...grpc.CallOption) (*Referral, error)
}

type referralServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewReferralServiceClient(cc grpc.ClientConnInterface) ReferralServiceClient {
	return &referralServiceClient{cc}
}

func (c *referralServiceClient) GetReferral(ctx context.Context, in *GetReferralRequest, opts ...grpc.CallOption) (*Referral, error) {
	out := new(Referral)
	err := c.cc.Invoke(ctx, "/blast.v1.referral.ReferralService/GetReferral", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *referralServiceClient) ListReferrals(ctx context.Context, in *ListReferralsRequest, opts ...grpc.CallOption) (*ListReferralsResponse, error) {
	out := new(ListReferralsResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.referral.ReferralService/ListReferrals", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *referralServiceClient) ReferredBy(ctx context.Context, in *RefferedByRequest, opts ...grpc.CallOption) (*Referral, error) {
	out := new(Referral)
	err := c.cc.Invoke(ctx, "/blast.v1.referral.ReferralService/ReferredBy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReferralServiceServer is the server API for ReferralService service.
// All implementations must embed UnimplementedReferralServiceServer
// for forward compatibility
type ReferralServiceServer interface {
	// GetReferral will return Referral.
	GetReferral(context.Context, *GetReferralRequest) (*Referral, error)
	// ListReferrals
	// reads across collections, reference: https://google.aip.dev/159
	ListReferrals(context.Context, *ListReferralsRequest) (*ListReferralsResponse, error)
	ReferredBy(context.Context, *RefferedByRequest) (*Referral, error)
	mustEmbedUnimplementedReferralServiceServer()
}

// UnimplementedReferralServiceServer must be embedded to have forward compatible implementations.
type UnimplementedReferralServiceServer struct {
}

func (UnimplementedReferralServiceServer) GetReferral(context.Context, *GetReferralRequest) (*Referral, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetReferral not implemented")
}
func (UnimplementedReferralServiceServer) ListReferrals(context.Context, *ListReferralsRequest) (*ListReferralsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListReferrals not implemented")
}
func (UnimplementedReferralServiceServer) ReferredBy(context.Context, *RefferedByRequest) (*Referral, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReferredBy not implemented")
}
func (UnimplementedReferralServiceServer) mustEmbedUnimplementedReferralServiceServer() {}

// UnsafeReferralServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReferralServiceServer will
// result in compilation errors.
type UnsafeReferralServiceServer interface {
	mustEmbedUnimplementedReferralServiceServer()
}

func RegisterReferralServiceServer(s grpc.ServiceRegistrar, srv ReferralServiceServer) {
	s.RegisterService(&ReferralService_ServiceDesc, srv)
}

func _ReferralService_GetReferral_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetReferralRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReferralServiceServer).GetReferral(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.referral.ReferralService/GetReferral",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReferralServiceServer).GetReferral(ctx, req.(*GetReferralRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReferralService_ListReferrals_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListReferralsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReferralServiceServer).ListReferrals(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.referral.ReferralService/ListReferrals",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReferralServiceServer).ListReferrals(ctx, req.(*ListReferralsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReferralService_ReferredBy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefferedByRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReferralServiceServer).ReferredBy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.referral.ReferralService/ReferredBy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReferralServiceServer).ReferredBy(ctx, req.(*RefferedByRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ReferralService_ServiceDesc is the grpc.ServiceDesc for ReferralService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ReferralService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "blast.v1.referral.ReferralService",
	HandlerType: (*ReferralServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetReferral",
			Handler:    _ReferralService_GetReferral_Handler,
		},
		{
			MethodName: "ListReferrals",
			Handler:    _ReferralService_ListReferrals_Handler,
		},
		{
			MethodName: "ReferredBy",
			Handler:    _ReferralService_ReferredBy_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "blast/v1/referral/referral.proto",
}

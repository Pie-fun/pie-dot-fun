// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: ethereum/v1/auth/auth.proto

package auth

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

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthServiceClient interface {
	// Signin signs in a user and returns a session id.
	SignIn(ctx context.Context, in *SignInRequest, opts ...grpc.CallOption) (*SignInResponse, error)
	// Refresh refreshes a session.
	Refresh(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*RefreshTokenResponse, error)
	// Signout signs out a user.
	SignOut(ctx context.Context, in *SignoutRequest, opts ...grpc.CallOption) (*SignoutResponse, error)
	// Select select account between multiple accounts.
	SelectAccount(ctx context.Context, in *SelectAccountRequest, opts ...grpc.CallOption) (*SelectAccountResponse, error)
	// AcceptTermsOfService accepts terms of service.
	AcceptTermsOfService(ctx context.Context, in *AcceptTermsOfServiceRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// Authenticate authenticates token
	Authenticate(ctx context.Context, in *AuthenticateRequest, opts ...grpc.CallOption) (*AuthenticateResponse, error)
	// GetTempToken returns a short-lived token.
	GetTempToken(ctx context.Context, in *GetTempTokenRequest, opts ...grpc.CallOption) (*GetTempTokenResponse, error)
	Download(ctx context.Context, in *DownloadRequest, opts ...grpc.CallOption) (*DownloadResponse, error)
}

type authServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthServiceClient(cc grpc.ClientConnInterface) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) SignIn(ctx context.Context, in *SignInRequest, opts ...grpc.CallOption) (*SignInResponse, error) {
	out := new(SignInResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/SignIn", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Refresh(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*RefreshTokenResponse, error) {
	out := new(RefreshTokenResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/Refresh", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) SignOut(ctx context.Context, in *SignoutRequest, opts ...grpc.CallOption) (*SignoutResponse, error) {
	out := new(SignoutResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/SignOut", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) SelectAccount(ctx context.Context, in *SelectAccountRequest, opts ...grpc.CallOption) (*SelectAccountResponse, error) {
	out := new(SelectAccountResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/SelectAccount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) AcceptTermsOfService(ctx context.Context, in *AcceptTermsOfServiceRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/AcceptTermsOfService", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Authenticate(ctx context.Context, in *AuthenticateRequest, opts ...grpc.CallOption) (*AuthenticateResponse, error) {
	out := new(AuthenticateResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/Authenticate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetTempToken(ctx context.Context, in *GetTempTokenRequest, opts ...grpc.CallOption) (*GetTempTokenResponse, error) {
	out := new(GetTempTokenResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/GetTempToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Download(ctx context.Context, in *DownloadRequest, opts ...grpc.CallOption) (*DownloadResponse, error) {
	out := new(DownloadResponse)
	err := c.cc.Invoke(ctx, "/ethereum.v1.auth.AuthService/Download", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
// All implementations must embed UnimplementedAuthServiceServer
// for forward compatibility
type AuthServiceServer interface {
	// Signin signs in a user and returns a session id.
	SignIn(context.Context, *SignInRequest) (*SignInResponse, error)
	// Refresh refreshes a session.
	Refresh(context.Context, *RefreshTokenRequest) (*RefreshTokenResponse, error)
	// Signout signs out a user.
	SignOut(context.Context, *SignoutRequest) (*SignoutResponse, error)
	// Select select account between multiple accounts.
	SelectAccount(context.Context, *SelectAccountRequest) (*SelectAccountResponse, error)
	// AcceptTermsOfService accepts terms of service.
	AcceptTermsOfService(context.Context, *AcceptTermsOfServiceRequest) (*emptypb.Empty, error)
	// Authenticate authenticates token
	Authenticate(context.Context, *AuthenticateRequest) (*AuthenticateResponse, error)
	// GetTempToken returns a short-lived token.
	GetTempToken(context.Context, *GetTempTokenRequest) (*GetTempTokenResponse, error)
	Download(context.Context, *DownloadRequest) (*DownloadResponse, error)
	mustEmbedUnimplementedAuthServiceServer()
}

// UnimplementedAuthServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (UnimplementedAuthServiceServer) SignIn(context.Context, *SignInRequest) (*SignInResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignIn not implemented")
}
func (UnimplementedAuthServiceServer) Refresh(context.Context, *RefreshTokenRequest) (*RefreshTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Refresh not implemented")
}
func (UnimplementedAuthServiceServer) SignOut(context.Context, *SignoutRequest) (*SignoutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignOut not implemented")
}
func (UnimplementedAuthServiceServer) SelectAccount(context.Context, *SelectAccountRequest) (*SelectAccountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SelectAccount not implemented")
}
func (UnimplementedAuthServiceServer) AcceptTermsOfService(context.Context, *AcceptTermsOfServiceRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AcceptTermsOfService not implemented")
}
func (UnimplementedAuthServiceServer) Authenticate(context.Context, *AuthenticateRequest) (*AuthenticateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authenticate not implemented")
}
func (UnimplementedAuthServiceServer) GetTempToken(context.Context, *GetTempTokenRequest) (*GetTempTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTempToken not implemented")
}
func (UnimplementedAuthServiceServer) Download(context.Context, *DownloadRequest) (*DownloadResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Download not implemented")
}
func (UnimplementedAuthServiceServer) mustEmbedUnimplementedAuthServiceServer() {}

// UnsafeAuthServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthServiceServer will
// result in compilation errors.
type UnsafeAuthServiceServer interface {
	mustEmbedUnimplementedAuthServiceServer()
}

func RegisterAuthServiceServer(s grpc.ServiceRegistrar, srv AuthServiceServer) {
	s.RegisterService(&AuthService_ServiceDesc, srv)
}

func _AuthService_SignIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignInRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).SignIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/SignIn",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).SignIn(ctx, req.(*SignInRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Refresh_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Refresh(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/Refresh",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Refresh(ctx, req.(*RefreshTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_SignOut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignoutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).SignOut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/SignOut",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).SignOut(ctx, req.(*SignoutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_SelectAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SelectAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).SelectAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/SelectAccount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).SelectAccount(ctx, req.(*SelectAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_AcceptTermsOfService_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AcceptTermsOfServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).AcceptTermsOfService(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/AcceptTermsOfService",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).AcceptTermsOfService(ctx, req.(*AcceptTermsOfServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Authenticate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthenticateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Authenticate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/Authenticate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Authenticate(ctx, req.(*AuthenticateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetTempToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTempTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetTempToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/GetTempToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetTempToken(ctx, req.(*GetTempTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Download_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DownloadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Download(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ethereum.v1.auth.AuthService/Download",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Download(ctx, req.(*DownloadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthService_ServiceDesc is the grpc.ServiceDesc for AuthService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ethereum.v1.auth.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SignIn",
			Handler:    _AuthService_SignIn_Handler,
		},
		{
			MethodName: "Refresh",
			Handler:    _AuthService_Refresh_Handler,
		},
		{
			MethodName: "SignOut",
			Handler:    _AuthService_SignOut_Handler,
		},
		{
			MethodName: "SelectAccount",
			Handler:    _AuthService_SelectAccount_Handler,
		},
		{
			MethodName: "AcceptTermsOfService",
			Handler:    _AuthService_AcceptTermsOfService_Handler,
		},
		{
			MethodName: "Authenticate",
			Handler:    _AuthService_Authenticate_Handler,
		},
		{
			MethodName: "GetTempToken",
			Handler:    _AuthService_GetTempToken_Handler,
		},
		{
			MethodName: "Download",
			Handler:    _AuthService_Download_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ethereum/v1/auth/auth.proto",
}

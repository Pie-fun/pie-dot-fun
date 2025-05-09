// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: pie-dot-fun/v1/proxy.proto

package piedotfun

import (
	grpc "google.golang.org/grpc"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ProxyServiceClient is the client API for ProxyService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProxyServiceClient interface {
}

type proxyServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProxyServiceClient(cc grpc.ClientConnInterface) ProxyServiceClient {
	return &proxyServiceClient{cc}
}

// ProxyServiceServer is the server API for ProxyService service.
// All implementations must embed UnimplementedProxyServiceServer
// for forward compatibility
type ProxyServiceServer interface {
	mustEmbedUnimplementedProxyServiceServer()
}

// UnimplementedProxyServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProxyServiceServer struct {
}

func (UnimplementedProxyServiceServer) mustEmbedUnimplementedProxyServiceServer() {}

// UnsafeProxyServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProxyServiceServer will
// result in compilation errors.
type UnsafeProxyServiceServer interface {
	mustEmbedUnimplementedProxyServiceServer()
}

func RegisterProxyServiceServer(s grpc.ServiceRegistrar, srv ProxyServiceServer) {
	s.RegisterService(&ProxyService_ServiceDesc, srv)
}

// ProxyService_ServiceDesc is the grpc.ServiceDesc for ProxyService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProxyService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "piedotfun.v1.ProxyService",
	HandlerType: (*ProxyServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "pie-dot-fun/v1/proxy.proto",
}

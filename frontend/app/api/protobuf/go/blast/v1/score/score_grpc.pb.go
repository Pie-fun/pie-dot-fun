// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: blast/v1/score/score.proto

package score

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

// ScoreServiceClient is the client API for ScoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ScoreServiceClient interface {
	// ValidateUploadScoreAndSign validate the upload score and then return signatrue if valid
	ValidateUploadScoreAndSign(ctx context.Context, in *ValidateUploadScoreAndSignRequest, opts ...grpc.CallOption) (*ValidateUploadScoreAndSignResponse, error)
	// CreateScore create Score with Score
	CreateScore(ctx context.Context, in *CreateScoreRequest, opts ...grpc.CallOption) (*Score, error)
	// GetScore
	GetScore(ctx context.Context, in *GetScoreRequest, opts ...grpc.CallOption) (*Score, error)
	// GetUserBestScoreRanking
	GetUserBestScoreRanking(ctx context.Context, in *GetUserBestScoreRankingRequest, opts ...grpc.CallOption) (*UserBestScoreRanking, error)
	// ListUserBestScoreRankings
	ListUserBestScoreRankings(ctx context.Context, in *ListUserBestScoreRankingsRequest, opts ...grpc.CallOption) (*ListUserBestScoreRankingsResponse, error)
	// GetUserCumulativeScoreRanking
	GetUserCumulativeScoreRanking(ctx context.Context, in *GetUserCumulativeScoreRankingRequest, opts ...grpc.CallOption) (*UserCumulativeScoreRanking, error)
	// ListUserCumulativeScoreRankings
	ListUserCumulativeScoreRankings(ctx context.Context, in *ListUserCumulativeScoreRankingsRequest, opts ...grpc.CallOption) (*ListUserCumulativeScoreRankingsResponse, error)
	// GetSquareCumulativeScoreRanking
	GetSquareCumulativeScoreRanking(ctx context.Context, in *GetSquareCumulativeScoreRankingRequest, opts ...grpc.CallOption) (*SquareCumulativeScoreRanking, error)
	// ListSquareCumulativeScoreRankings
	ListSquareCumulativeScoreRankings(ctx context.Context, in *ListSquareCumulativeScoreRankingsRequest, opts ...grpc.CallOption) (*ListSquareCumulativeScoreRankingsResponse, error)
	// InvalidateScoreRankingsByUser
	InvalidateScoreRankingsByUser(ctx context.Context, in *InvalidateScoreRankingsByUserRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// DryRunReward
	// for admin.
	DryRunReward(ctx context.Context, in *RewardRequest, opts ...grpc.CallOption) (*RewardResponse, error)
}

type scoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewScoreServiceClient(cc grpc.ClientConnInterface) ScoreServiceClient {
	return &scoreServiceClient{cc}
}

func (c *scoreServiceClient) ValidateUploadScoreAndSign(ctx context.Context, in *ValidateUploadScoreAndSignRequest, opts ...grpc.CallOption) (*ValidateUploadScoreAndSignResponse, error) {
	out := new(ValidateUploadScoreAndSignResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/ValidateUploadScoreAndSign", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) CreateScore(ctx context.Context, in *CreateScoreRequest, opts ...grpc.CallOption) (*Score, error) {
	out := new(Score)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/CreateScore", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) GetScore(ctx context.Context, in *GetScoreRequest, opts ...grpc.CallOption) (*Score, error) {
	out := new(Score)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/GetScore", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) GetUserBestScoreRanking(ctx context.Context, in *GetUserBestScoreRankingRequest, opts ...grpc.CallOption) (*UserBestScoreRanking, error) {
	out := new(UserBestScoreRanking)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/GetUserBestScoreRanking", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) ListUserBestScoreRankings(ctx context.Context, in *ListUserBestScoreRankingsRequest, opts ...grpc.CallOption) (*ListUserBestScoreRankingsResponse, error) {
	out := new(ListUserBestScoreRankingsResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/ListUserBestScoreRankings", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) GetUserCumulativeScoreRanking(ctx context.Context, in *GetUserCumulativeScoreRankingRequest, opts ...grpc.CallOption) (*UserCumulativeScoreRanking, error) {
	out := new(UserCumulativeScoreRanking)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/GetUserCumulativeScoreRanking", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) ListUserCumulativeScoreRankings(ctx context.Context, in *ListUserCumulativeScoreRankingsRequest, opts ...grpc.CallOption) (*ListUserCumulativeScoreRankingsResponse, error) {
	out := new(ListUserCumulativeScoreRankingsResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/ListUserCumulativeScoreRankings", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) GetSquareCumulativeScoreRanking(ctx context.Context, in *GetSquareCumulativeScoreRankingRequest, opts ...grpc.CallOption) (*SquareCumulativeScoreRanking, error) {
	out := new(SquareCumulativeScoreRanking)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/GetSquareCumulativeScoreRanking", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) ListSquareCumulativeScoreRankings(ctx context.Context, in *ListSquareCumulativeScoreRankingsRequest, opts ...grpc.CallOption) (*ListSquareCumulativeScoreRankingsResponse, error) {
	out := new(ListSquareCumulativeScoreRankingsResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/ListSquareCumulativeScoreRankings", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) InvalidateScoreRankingsByUser(ctx context.Context, in *InvalidateScoreRankingsByUserRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/InvalidateScoreRankingsByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scoreServiceClient) DryRunReward(ctx context.Context, in *RewardRequest, opts ...grpc.CallOption) (*RewardResponse, error) {
	out := new(RewardResponse)
	err := c.cc.Invoke(ctx, "/blast.v1.score.ScoreService/DryRunReward", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ScoreServiceServer is the server API for ScoreService service.
// All implementations must embed UnimplementedScoreServiceServer
// for forward compatibility
type ScoreServiceServer interface {
	// ValidateUploadScoreAndSign validate the upload score and then return signatrue if valid
	ValidateUploadScoreAndSign(context.Context, *ValidateUploadScoreAndSignRequest) (*ValidateUploadScoreAndSignResponse, error)
	// CreateScore create Score with Score
	CreateScore(context.Context, *CreateScoreRequest) (*Score, error)
	// GetScore
	GetScore(context.Context, *GetScoreRequest) (*Score, error)
	// GetUserBestScoreRanking
	GetUserBestScoreRanking(context.Context, *GetUserBestScoreRankingRequest) (*UserBestScoreRanking, error)
	// ListUserBestScoreRankings
	ListUserBestScoreRankings(context.Context, *ListUserBestScoreRankingsRequest) (*ListUserBestScoreRankingsResponse, error)
	// GetUserCumulativeScoreRanking
	GetUserCumulativeScoreRanking(context.Context, *GetUserCumulativeScoreRankingRequest) (*UserCumulativeScoreRanking, error)
	// ListUserCumulativeScoreRankings
	ListUserCumulativeScoreRankings(context.Context, *ListUserCumulativeScoreRankingsRequest) (*ListUserCumulativeScoreRankingsResponse, error)
	// GetSquareCumulativeScoreRanking
	GetSquareCumulativeScoreRanking(context.Context, *GetSquareCumulativeScoreRankingRequest) (*SquareCumulativeScoreRanking, error)
	// ListSquareCumulativeScoreRankings
	ListSquareCumulativeScoreRankings(context.Context, *ListSquareCumulativeScoreRankingsRequest) (*ListSquareCumulativeScoreRankingsResponse, error)
	// InvalidateScoreRankingsByUser
	InvalidateScoreRankingsByUser(context.Context, *InvalidateScoreRankingsByUserRequest) (*emptypb.Empty, error)
	// DryRunReward
	// for admin.
	DryRunReward(context.Context, *RewardRequest) (*RewardResponse, error)
	mustEmbedUnimplementedScoreServiceServer()
}

// UnimplementedScoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedScoreServiceServer struct {
}

func (UnimplementedScoreServiceServer) ValidateUploadScoreAndSign(context.Context, *ValidateUploadScoreAndSignRequest) (*ValidateUploadScoreAndSignResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateUploadScoreAndSign not implemented")
}
func (UnimplementedScoreServiceServer) CreateScore(context.Context, *CreateScoreRequest) (*Score, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateScore not implemented")
}
func (UnimplementedScoreServiceServer) GetScore(context.Context, *GetScoreRequest) (*Score, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetScore not implemented")
}
func (UnimplementedScoreServiceServer) GetUserBestScoreRanking(context.Context, *GetUserBestScoreRankingRequest) (*UserBestScoreRanking, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserBestScoreRanking not implemented")
}
func (UnimplementedScoreServiceServer) ListUserBestScoreRankings(context.Context, *ListUserBestScoreRankingsRequest) (*ListUserBestScoreRankingsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserBestScoreRankings not implemented")
}
func (UnimplementedScoreServiceServer) GetUserCumulativeScoreRanking(context.Context, *GetUserCumulativeScoreRankingRequest) (*UserCumulativeScoreRanking, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserCumulativeScoreRanking not implemented")
}
func (UnimplementedScoreServiceServer) ListUserCumulativeScoreRankings(context.Context, *ListUserCumulativeScoreRankingsRequest) (*ListUserCumulativeScoreRankingsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserCumulativeScoreRankings not implemented")
}
func (UnimplementedScoreServiceServer) GetSquareCumulativeScoreRanking(context.Context, *GetSquareCumulativeScoreRankingRequest) (*SquareCumulativeScoreRanking, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSquareCumulativeScoreRanking not implemented")
}
func (UnimplementedScoreServiceServer) ListSquareCumulativeScoreRankings(context.Context, *ListSquareCumulativeScoreRankingsRequest) (*ListSquareCumulativeScoreRankingsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSquareCumulativeScoreRankings not implemented")
}
func (UnimplementedScoreServiceServer) InvalidateScoreRankingsByUser(context.Context, *InvalidateScoreRankingsByUserRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InvalidateScoreRankingsByUser not implemented")
}
func (UnimplementedScoreServiceServer) DryRunReward(context.Context, *RewardRequest) (*RewardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DryRunReward not implemented")
}
func (UnimplementedScoreServiceServer) mustEmbedUnimplementedScoreServiceServer() {}

// UnsafeScoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ScoreServiceServer will
// result in compilation errors.
type UnsafeScoreServiceServer interface {
	mustEmbedUnimplementedScoreServiceServer()
}

func RegisterScoreServiceServer(s grpc.ServiceRegistrar, srv ScoreServiceServer) {
	s.RegisterService(&ScoreService_ServiceDesc, srv)
}

func _ScoreService_ValidateUploadScoreAndSign_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateUploadScoreAndSignRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).ValidateUploadScoreAndSign(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/ValidateUploadScoreAndSign",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).ValidateUploadScoreAndSign(ctx, req.(*ValidateUploadScoreAndSignRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_CreateScore_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateScoreRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).CreateScore(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/CreateScore",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).CreateScore(ctx, req.(*CreateScoreRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_GetScore_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetScoreRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).GetScore(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/GetScore",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).GetScore(ctx, req.(*GetScoreRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_GetUserBestScoreRanking_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserBestScoreRankingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).GetUserBestScoreRanking(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/GetUserBestScoreRanking",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).GetUserBestScoreRanking(ctx, req.(*GetUserBestScoreRankingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_ListUserBestScoreRankings_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserBestScoreRankingsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).ListUserBestScoreRankings(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/ListUserBestScoreRankings",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).ListUserBestScoreRankings(ctx, req.(*ListUserBestScoreRankingsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_GetUserCumulativeScoreRanking_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserCumulativeScoreRankingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).GetUserCumulativeScoreRanking(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/GetUserCumulativeScoreRanking",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).GetUserCumulativeScoreRanking(ctx, req.(*GetUserCumulativeScoreRankingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_ListUserCumulativeScoreRankings_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserCumulativeScoreRankingsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).ListUserCumulativeScoreRankings(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/ListUserCumulativeScoreRankings",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).ListUserCumulativeScoreRankings(ctx, req.(*ListUserCumulativeScoreRankingsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_GetSquareCumulativeScoreRanking_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSquareCumulativeScoreRankingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).GetSquareCumulativeScoreRanking(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/GetSquareCumulativeScoreRanking",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).GetSquareCumulativeScoreRanking(ctx, req.(*GetSquareCumulativeScoreRankingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_ListSquareCumulativeScoreRankings_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSquareCumulativeScoreRankingsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).ListSquareCumulativeScoreRankings(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/ListSquareCumulativeScoreRankings",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).ListSquareCumulativeScoreRankings(ctx, req.(*ListSquareCumulativeScoreRankingsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_InvalidateScoreRankingsByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InvalidateScoreRankingsByUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).InvalidateScoreRankingsByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/InvalidateScoreRankingsByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).InvalidateScoreRankingsByUser(ctx, req.(*InvalidateScoreRankingsByUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ScoreService_DryRunReward_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RewardRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScoreServiceServer).DryRunReward(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blast.v1.score.ScoreService/DryRunReward",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScoreServiceServer).DryRunReward(ctx, req.(*RewardRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ScoreService_ServiceDesc is the grpc.ServiceDesc for ScoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ScoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "blast.v1.score.ScoreService",
	HandlerType: (*ScoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ValidateUploadScoreAndSign",
			Handler:    _ScoreService_ValidateUploadScoreAndSign_Handler,
		},
		{
			MethodName: "CreateScore",
			Handler:    _ScoreService_CreateScore_Handler,
		},
		{
			MethodName: "GetScore",
			Handler:    _ScoreService_GetScore_Handler,
		},
		{
			MethodName: "GetUserBestScoreRanking",
			Handler:    _ScoreService_GetUserBestScoreRanking_Handler,
		},
		{
			MethodName: "ListUserBestScoreRankings",
			Handler:    _ScoreService_ListUserBestScoreRankings_Handler,
		},
		{
			MethodName: "GetUserCumulativeScoreRanking",
			Handler:    _ScoreService_GetUserCumulativeScoreRanking_Handler,
		},
		{
			MethodName: "ListUserCumulativeScoreRankings",
			Handler:    _ScoreService_ListUserCumulativeScoreRankings_Handler,
		},
		{
			MethodName: "GetSquareCumulativeScoreRanking",
			Handler:    _ScoreService_GetSquareCumulativeScoreRanking_Handler,
		},
		{
			MethodName: "ListSquareCumulativeScoreRankings",
			Handler:    _ScoreService_ListSquareCumulativeScoreRankings_Handler,
		},
		{
			MethodName: "InvalidateScoreRankingsByUser",
			Handler:    _ScoreService_InvalidateScoreRankingsByUser_Handler,
		},
		{
			MethodName: "DryRunReward",
			Handler:    _ScoreService_DryRunReward_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "blast/v1/score/score.proto",
}

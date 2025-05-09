// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/square/square.proto

package square

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockSquareServiceClient is a mock of SquareServiceClient interface.
type MockSquareServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockSquareServiceClientMockRecorder
}

// MockSquareServiceClientMockRecorder is the mock recorder for MockSquareServiceClient.
type MockSquareServiceClientMockRecorder struct {
	mock *MockSquareServiceClient
}

// NewMockSquareServiceClient creates a new mock instance.
func NewMockSquareServiceClient(ctrl *gomock.Controller) *MockSquareServiceClient {
	mock := &MockSquareServiceClient{ctrl: ctrl}
	mock.recorder = &MockSquareServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSquareServiceClient) EXPECT() *MockSquareServiceClientMockRecorder {
	return m.recorder
}

// ApproveJoinSquareAndSign mocks base method.
func (m *MockSquareServiceClient) ApproveJoinSquareAndSign(ctx context.Context, in *ApproveJoinSquareAndSignRequest, opts ...grpc.CallOption) (*ApproveJoinSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ApproveJoinSquareAndSign", varargs...)
	ret0, _ := ret[0].(*ApproveJoinSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ApproveJoinSquareAndSign indicates an expected call of ApproveJoinSquareAndSign.
func (mr *MockSquareServiceClientMockRecorder) ApproveJoinSquareAndSign(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ApproveJoinSquareAndSign", reflect.TypeOf((*MockSquareServiceClient)(nil).ApproveJoinSquareAndSign), varargs...)
}

// ApproveTransferSquareAndSign mocks base method.
func (m *MockSquareServiceClient) ApproveTransferSquareAndSign(ctx context.Context, in *ApproveTransferSquareAndSignRequest, opts ...grpc.CallOption) (*ApproveTransferSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ApproveTransferSquareAndSign", varargs...)
	ret0, _ := ret[0].(*ApproveTransferSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ApproveTransferSquareAndSign indicates an expected call of ApproveTransferSquareAndSign.
func (mr *MockSquareServiceClientMockRecorder) ApproveTransferSquareAndSign(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ApproveTransferSquareAndSign", reflect.TypeOf((*MockSquareServiceClient)(nil).ApproveTransferSquareAndSign), varargs...)
}

// CheckMintEligibility mocks base method.
func (m *MockSquareServiceClient) CheckMintEligibility(ctx context.Context, in *CheckMintEligibilityRequest, opts ...grpc.CallOption) (*CheckMintEligibilityResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "CheckMintEligibility", varargs...)
	ret0, _ := ret[0].(*CheckMintEligibilityResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CheckMintEligibility indicates an expected call of CheckMintEligibility.
func (mr *MockSquareServiceClientMockRecorder) CheckMintEligibility(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CheckMintEligibility", reflect.TypeOf((*MockSquareServiceClient)(nil).CheckMintEligibility), varargs...)
}

// CreateSquareAndSign mocks base method.
func (m *MockSquareServiceClient) CreateSquareAndSign(ctx context.Context, in *CreateSquareAndSignRequest, opts ...grpc.CallOption) (*CreateSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "CreateSquareAndSign", varargs...)
	ret0, _ := ret[0].(*CreateSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateSquareAndSign indicates an expected call of CreateSquareAndSign.
func (mr *MockSquareServiceClientMockRecorder) CreateSquareAndSign(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateSquareAndSign", reflect.TypeOf((*MockSquareServiceClient)(nil).CreateSquareAndSign), varargs...)
}

// GetSquare mocks base method.
func (m *MockSquareServiceClient) GetSquare(ctx context.Context, in *GetSquareRequest, opts ...grpc.CallOption) (*Square, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetSquare", varargs...)
	ret0, _ := ret[0].(*Square)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquare indicates an expected call of GetSquare.
func (mr *MockSquareServiceClientMockRecorder) GetSquare(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquare", reflect.TypeOf((*MockSquareServiceClient)(nil).GetSquare), varargs...)
}

// GetSquareWeeklyPoints mocks base method.
func (m *MockSquareServiceClient) GetSquareWeeklyPoints(ctx context.Context, in *GetSquareWeeklyPointsRequest, opts ...grpc.CallOption) (*GetSquareWeeklyPointsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetSquareWeeklyPoints", varargs...)
	ret0, _ := ret[0].(*GetSquareWeeklyPointsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareWeeklyPoints indicates an expected call of GetSquareWeeklyPoints.
func (mr *MockSquareServiceClientMockRecorder) GetSquareWeeklyPoints(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareWeeklyPoints", reflect.TypeOf((*MockSquareServiceClient)(nil).GetSquareWeeklyPoints), varargs...)
}

// GetSquareWeeklySpirits mocks base method.
func (m *MockSquareServiceClient) GetSquareWeeklySpirits(ctx context.Context, in *GetSquareWeeklySpiritsRequest, opts ...grpc.CallOption) (*GetSquareWeeklySpiritsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetSquareWeeklySpirits", varargs...)
	ret0, _ := ret[0].(*GetSquareWeeklySpiritsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareWeeklySpirits indicates an expected call of GetSquareWeeklySpirits.
func (mr *MockSquareServiceClientMockRecorder) GetSquareWeeklySpirits(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareWeeklySpirits", reflect.TypeOf((*MockSquareServiceClient)(nil).GetSquareWeeklySpirits), varargs...)
}

// ListSquareMemberRankings mocks base method.
func (m *MockSquareServiceClient) ListSquareMemberRankings(ctx context.Context, in *ListSquareMemberRankingsRequest, opts ...grpc.CallOption) (*ListSquareMemberRankingsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquareMemberRankings", varargs...)
	ret0, _ := ret[0].(*ListSquareMemberRankingsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMemberRankings indicates an expected call of ListSquareMemberRankings.
func (mr *MockSquareServiceClientMockRecorder) ListSquareMemberRankings(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMemberRankings", reflect.TypeOf((*MockSquareServiceClient)(nil).ListSquareMemberRankings), varargs...)
}

// ListSquareMembers mocks base method.
func (m *MockSquareServiceClient) ListSquareMembers(ctx context.Context, in *ListSquareMembersRequest, opts ...grpc.CallOption) (*ListSquareMembersResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquareMembers", varargs...)
	ret0, _ := ret[0].(*ListSquareMembersResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMembers indicates an expected call of ListSquareMembers.
func (mr *MockSquareServiceClientMockRecorder) ListSquareMembers(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMembers", reflect.TypeOf((*MockSquareServiceClient)(nil).ListSquareMembers), varargs...)
}

// ListSquareSpiritHistories mocks base method.
func (m *MockSquareServiceClient) ListSquareSpiritHistories(ctx context.Context, in *ListSquareSpiritHistoriesRequest, opts ...grpc.CallOption) (*ListSquareSpiritHistoriesResposne, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquareSpiritHistories", varargs...)
	ret0, _ := ret[0].(*ListSquareSpiritHistoriesResposne)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareSpiritHistories indicates an expected call of ListSquareSpiritHistories.
func (mr *MockSquareServiceClientMockRecorder) ListSquareSpiritHistories(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareSpiritHistories", reflect.TypeOf((*MockSquareServiceClient)(nil).ListSquareSpiritHistories), varargs...)
}

// ListSquares mocks base method.
func (m *MockSquareServiceClient) ListSquares(ctx context.Context, in *ListSquaresRequest, opts ...grpc.CallOption) (*ListSquaresResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquares", varargs...)
	ret0, _ := ret[0].(*ListSquaresResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquares indicates an expected call of ListSquares.
func (mr *MockSquareServiceClientMockRecorder) ListSquares(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquares", reflect.TypeOf((*MockSquareServiceClient)(nil).ListSquares), varargs...)
}

// UpdateSquare mocks base method.
func (m *MockSquareServiceClient) UpdateSquare(ctx context.Context, in *UpdateSquareRequest, opts ...grpc.CallOption) (*Square, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateSquare", varargs...)
	ret0, _ := ret[0].(*Square)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateSquare indicates an expected call of UpdateSquare.
func (mr *MockSquareServiceClientMockRecorder) UpdateSquare(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateSquare", reflect.TypeOf((*MockSquareServiceClient)(nil).UpdateSquare), varargs...)
}

// ValidateDisplayNameAvailability mocks base method.
func (m *MockSquareServiceClient) ValidateDisplayNameAvailability(ctx context.Context, in *ValidateDisplayNameAvailabilityRequest, opts ...grpc.CallOption) (*ValidateDisplayNameAvailabilityResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ValidateDisplayNameAvailability", varargs...)
	ret0, _ := ret[0].(*ValidateDisplayNameAvailabilityResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ValidateDisplayNameAvailability indicates an expected call of ValidateDisplayNameAvailability.
func (mr *MockSquareServiceClientMockRecorder) ValidateDisplayNameAvailability(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ValidateDisplayNameAvailability", reflect.TypeOf((*MockSquareServiceClient)(nil).ValidateDisplayNameAvailability), varargs...)
}

// MockSquareServiceServer is a mock of SquareServiceServer interface.
type MockSquareServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockSquareServiceServerMockRecorder
}

// MockSquareServiceServerMockRecorder is the mock recorder for MockSquareServiceServer.
type MockSquareServiceServerMockRecorder struct {
	mock *MockSquareServiceServer
}

// NewMockSquareServiceServer creates a new mock instance.
func NewMockSquareServiceServer(ctrl *gomock.Controller) *MockSquareServiceServer {
	mock := &MockSquareServiceServer{ctrl: ctrl}
	mock.recorder = &MockSquareServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSquareServiceServer) EXPECT() *MockSquareServiceServerMockRecorder {
	return m.recorder
}

// ApproveJoinSquareAndSign mocks base method.
func (m *MockSquareServiceServer) ApproveJoinSquareAndSign(ctx context.Context, in *ApproveJoinSquareAndSignRequest) (*ApproveJoinSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ApproveJoinSquareAndSign", ctx, in)
	ret0, _ := ret[0].(*ApproveJoinSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ApproveJoinSquareAndSign indicates an expected call of ApproveJoinSquareAndSign.
func (mr *MockSquareServiceServerMockRecorder) ApproveJoinSquareAndSign(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ApproveJoinSquareAndSign", reflect.TypeOf((*MockSquareServiceServer)(nil).ApproveJoinSquareAndSign), ctx, in)
}

// ApproveTransferSquareAndSign mocks base method.
func (m *MockSquareServiceServer) ApproveTransferSquareAndSign(ctx context.Context, in *ApproveTransferSquareAndSignRequest) (*ApproveTransferSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ApproveTransferSquareAndSign", ctx, in)
	ret0, _ := ret[0].(*ApproveTransferSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ApproveTransferSquareAndSign indicates an expected call of ApproveTransferSquareAndSign.
func (mr *MockSquareServiceServerMockRecorder) ApproveTransferSquareAndSign(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ApproveTransferSquareAndSign", reflect.TypeOf((*MockSquareServiceServer)(nil).ApproveTransferSquareAndSign), ctx, in)
}

// CheckMintEligibility mocks base method.
func (m *MockSquareServiceServer) CheckMintEligibility(ctx context.Context, in *CheckMintEligibilityRequest) (*CheckMintEligibilityResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CheckMintEligibility", ctx, in)
	ret0, _ := ret[0].(*CheckMintEligibilityResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CheckMintEligibility indicates an expected call of CheckMintEligibility.
func (mr *MockSquareServiceServerMockRecorder) CheckMintEligibility(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CheckMintEligibility", reflect.TypeOf((*MockSquareServiceServer)(nil).CheckMintEligibility), ctx, in)
}

// CreateSquareAndSign mocks base method.
func (m *MockSquareServiceServer) CreateSquareAndSign(ctx context.Context, in *CreateSquareAndSignRequest) (*CreateSquareAndSignResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateSquareAndSign", ctx, in)
	ret0, _ := ret[0].(*CreateSquareAndSignResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateSquareAndSign indicates an expected call of CreateSquareAndSign.
func (mr *MockSquareServiceServerMockRecorder) CreateSquareAndSign(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateSquareAndSign", reflect.TypeOf((*MockSquareServiceServer)(nil).CreateSquareAndSign), ctx, in)
}

// GetSquare mocks base method.
func (m *MockSquareServiceServer) GetSquare(ctx context.Context, in *GetSquareRequest) (*Square, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSquare", ctx, in)
	ret0, _ := ret[0].(*Square)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquare indicates an expected call of GetSquare.
func (mr *MockSquareServiceServerMockRecorder) GetSquare(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquare", reflect.TypeOf((*MockSquareServiceServer)(nil).GetSquare), ctx, in)
}

// GetSquareWeeklyPoints mocks base method.
func (m *MockSquareServiceServer) GetSquareWeeklyPoints(ctx context.Context, in *GetSquareWeeklyPointsRequest) (*GetSquareWeeklyPointsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSquareWeeklyPoints", ctx, in)
	ret0, _ := ret[0].(*GetSquareWeeklyPointsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareWeeklyPoints indicates an expected call of GetSquareWeeklyPoints.
func (mr *MockSquareServiceServerMockRecorder) GetSquareWeeklyPoints(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareWeeklyPoints", reflect.TypeOf((*MockSquareServiceServer)(nil).GetSquareWeeklyPoints), ctx, in)
}

// GetSquareWeeklySpirits mocks base method.
func (m *MockSquareServiceServer) GetSquareWeeklySpirits(ctx context.Context, in *GetSquareWeeklySpiritsRequest) (*GetSquareWeeklySpiritsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSquareWeeklySpirits", ctx, in)
	ret0, _ := ret[0].(*GetSquareWeeklySpiritsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareWeeklySpirits indicates an expected call of GetSquareWeeklySpirits.
func (mr *MockSquareServiceServerMockRecorder) GetSquareWeeklySpirits(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareWeeklySpirits", reflect.TypeOf((*MockSquareServiceServer)(nil).GetSquareWeeklySpirits), ctx, in)
}

// ListSquareMemberRankings mocks base method.
func (m *MockSquareServiceServer) ListSquareMemberRankings(ctx context.Context, in *ListSquareMemberRankingsRequest) (*ListSquareMemberRankingsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquareMemberRankings", ctx, in)
	ret0, _ := ret[0].(*ListSquareMemberRankingsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMemberRankings indicates an expected call of ListSquareMemberRankings.
func (mr *MockSquareServiceServerMockRecorder) ListSquareMemberRankings(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMemberRankings", reflect.TypeOf((*MockSquareServiceServer)(nil).ListSquareMemberRankings), ctx, in)
}

// ListSquareMembers mocks base method.
func (m *MockSquareServiceServer) ListSquareMembers(ctx context.Context, in *ListSquareMembersRequest) (*ListSquareMembersResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquareMembers", ctx, in)
	ret0, _ := ret[0].(*ListSquareMembersResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMembers indicates an expected call of ListSquareMembers.
func (mr *MockSquareServiceServerMockRecorder) ListSquareMembers(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMembers", reflect.TypeOf((*MockSquareServiceServer)(nil).ListSquareMembers), ctx, in)
}

// ListSquareSpiritHistories mocks base method.
func (m *MockSquareServiceServer) ListSquareSpiritHistories(ctx context.Context, in *ListSquareSpiritHistoriesRequest) (*ListSquareSpiritHistoriesResposne, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquareSpiritHistories", ctx, in)
	ret0, _ := ret[0].(*ListSquareSpiritHistoriesResposne)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareSpiritHistories indicates an expected call of ListSquareSpiritHistories.
func (mr *MockSquareServiceServerMockRecorder) ListSquareSpiritHistories(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareSpiritHistories", reflect.TypeOf((*MockSquareServiceServer)(nil).ListSquareSpiritHistories), ctx, in)
}

// ListSquares mocks base method.
func (m *MockSquareServiceServer) ListSquares(ctx context.Context, in *ListSquaresRequest) (*ListSquaresResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquares", ctx, in)
	ret0, _ := ret[0].(*ListSquaresResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquares indicates an expected call of ListSquares.
func (mr *MockSquareServiceServerMockRecorder) ListSquares(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquares", reflect.TypeOf((*MockSquareServiceServer)(nil).ListSquares), ctx, in)
}

// UpdateSquare mocks base method.
func (m *MockSquareServiceServer) UpdateSquare(ctx context.Context, in *UpdateSquareRequest) (*Square, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateSquare", ctx, in)
	ret0, _ := ret[0].(*Square)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateSquare indicates an expected call of UpdateSquare.
func (mr *MockSquareServiceServerMockRecorder) UpdateSquare(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateSquare", reflect.TypeOf((*MockSquareServiceServer)(nil).UpdateSquare), ctx, in)
}

// ValidateDisplayNameAvailability mocks base method.
func (m *MockSquareServiceServer) ValidateDisplayNameAvailability(ctx context.Context, in *ValidateDisplayNameAvailabilityRequest) (*ValidateDisplayNameAvailabilityResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ValidateDisplayNameAvailability", ctx, in)
	ret0, _ := ret[0].(*ValidateDisplayNameAvailabilityResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ValidateDisplayNameAvailability indicates an expected call of ValidateDisplayNameAvailability.
func (mr *MockSquareServiceServerMockRecorder) ValidateDisplayNameAvailability(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ValidateDisplayNameAvailability", reflect.TypeOf((*MockSquareServiceServer)(nil).ValidateDisplayNameAvailability), ctx, in)
}

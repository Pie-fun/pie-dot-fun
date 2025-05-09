// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/aggregate/aggregate.proto

package aggregate

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockAggregateServiceClient is a mock of AggregateServiceClient interface.
type MockAggregateServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockAggregateServiceClientMockRecorder
}

// MockAggregateServiceClientMockRecorder is the mock recorder for MockAggregateServiceClient.
type MockAggregateServiceClientMockRecorder struct {
	mock *MockAggregateServiceClient
}

// NewMockAggregateServiceClient creates a new mock instance.
func NewMockAggregateServiceClient(ctrl *gomock.Controller) *MockAggregateServiceClient {
	mock := &MockAggregateServiceClient{ctrl: ctrl}
	mock.recorder = &MockAggregateServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAggregateServiceClient) EXPECT() *MockAggregateServiceClientMockRecorder {
	return m.recorder
}

// GetSquareAggregate mocks base method.
func (m *MockAggregateServiceClient) GetSquareAggregate(ctx context.Context, in *GetSquareAggregateRequest, opts ...grpc.CallOption) (*SquareAggregate, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetSquareAggregate", varargs...)
	ret0, _ := ret[0].(*SquareAggregate)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareAggregate indicates an expected call of GetSquareAggregate.
func (mr *MockAggregateServiceClientMockRecorder) GetSquareAggregate(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareAggregate", reflect.TypeOf((*MockAggregateServiceClient)(nil).GetSquareAggregate), varargs...)
}

// ListPointsAggregate mocks base method.
func (m *MockAggregateServiceClient) ListPointsAggregate(ctx context.Context, in *ListPointsAggregateRequest, opts ...grpc.CallOption) (*ListPointsAggregateResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListPointsAggregate", varargs...)
	ret0, _ := ret[0].(*ListPointsAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListPointsAggregate indicates an expected call of ListPointsAggregate.
func (mr *MockAggregateServiceClientMockRecorder) ListPointsAggregate(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListPointsAggregate", reflect.TypeOf((*MockAggregateServiceClient)(nil).ListPointsAggregate), varargs...)
}

// ListSquareMemberRankingsAggregate mocks base method.
func (m *MockAggregateServiceClient) ListSquareMemberRankingsAggregate(ctx context.Context, in *ListSquareMemberRankingsAggregateRequest, opts ...grpc.CallOption) (*ListSquareMemberRankingsAggregateResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquareMemberRankingsAggregate", varargs...)
	ret0, _ := ret[0].(*ListSquareMemberRankingsAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMemberRankingsAggregate indicates an expected call of ListSquareMemberRankingsAggregate.
func (mr *MockAggregateServiceClientMockRecorder) ListSquareMemberRankingsAggregate(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMemberRankingsAggregate", reflect.TypeOf((*MockAggregateServiceClient)(nil).ListSquareMemberRankingsAggregate), varargs...)
}

// ListSquaresAggregate mocks base method.
func (m *MockAggregateServiceClient) ListSquaresAggregate(ctx context.Context, in *ListSquaresAggregateRequest, opts ...grpc.CallOption) (*ListSquaresAggregateResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListSquaresAggregate", varargs...)
	ret0, _ := ret[0].(*ListSquaresAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquaresAggregate indicates an expected call of ListSquaresAggregate.
func (mr *MockAggregateServiceClientMockRecorder) ListSquaresAggregate(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquaresAggregate", reflect.TypeOf((*MockAggregateServiceClient)(nil).ListSquaresAggregate), varargs...)
}

// MockAggregateServiceServer is a mock of AggregateServiceServer interface.
type MockAggregateServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockAggregateServiceServerMockRecorder
}

// MockAggregateServiceServerMockRecorder is the mock recorder for MockAggregateServiceServer.
type MockAggregateServiceServerMockRecorder struct {
	mock *MockAggregateServiceServer
}

// NewMockAggregateServiceServer creates a new mock instance.
func NewMockAggregateServiceServer(ctrl *gomock.Controller) *MockAggregateServiceServer {
	mock := &MockAggregateServiceServer{ctrl: ctrl}
	mock.recorder = &MockAggregateServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAggregateServiceServer) EXPECT() *MockAggregateServiceServerMockRecorder {
	return m.recorder
}

// GetSquareAggregate mocks base method.
func (m *MockAggregateServiceServer) GetSquareAggregate(ctx context.Context, in *GetSquareAggregateRequest) (*SquareAggregate, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSquareAggregate", ctx, in)
	ret0, _ := ret[0].(*SquareAggregate)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSquareAggregate indicates an expected call of GetSquareAggregate.
func (mr *MockAggregateServiceServerMockRecorder) GetSquareAggregate(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSquareAggregate", reflect.TypeOf((*MockAggregateServiceServer)(nil).GetSquareAggregate), ctx, in)
}

// ListPointsAggregate mocks base method.
func (m *MockAggregateServiceServer) ListPointsAggregate(ctx context.Context, in *ListPointsAggregateRequest) (*ListPointsAggregateResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListPointsAggregate", ctx, in)
	ret0, _ := ret[0].(*ListPointsAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListPointsAggregate indicates an expected call of ListPointsAggregate.
func (mr *MockAggregateServiceServerMockRecorder) ListPointsAggregate(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListPointsAggregate", reflect.TypeOf((*MockAggregateServiceServer)(nil).ListPointsAggregate), ctx, in)
}

// ListSquareMemberRankingsAggregate mocks base method.
func (m *MockAggregateServiceServer) ListSquareMemberRankingsAggregate(ctx context.Context, in *ListSquareMemberRankingsAggregateRequest) (*ListSquareMemberRankingsAggregateResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquareMemberRankingsAggregate", ctx, in)
	ret0, _ := ret[0].(*ListSquareMemberRankingsAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquareMemberRankingsAggregate indicates an expected call of ListSquareMemberRankingsAggregate.
func (mr *MockAggregateServiceServerMockRecorder) ListSquareMemberRankingsAggregate(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquareMemberRankingsAggregate", reflect.TypeOf((*MockAggregateServiceServer)(nil).ListSquareMemberRankingsAggregate), ctx, in)
}

// ListSquaresAggregate mocks base method.
func (m *MockAggregateServiceServer) ListSquaresAggregate(ctx context.Context, in *ListSquaresAggregateRequest) (*ListSquaresAggregateResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListSquaresAggregate", ctx, in)
	ret0, _ := ret[0].(*ListSquaresAggregateResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListSquaresAggregate indicates an expected call of ListSquaresAggregate.
func (mr *MockAggregateServiceServerMockRecorder) ListSquaresAggregate(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListSquaresAggregate", reflect.TypeOf((*MockAggregateServiceServer)(nil).ListSquaresAggregate), ctx, in)
}

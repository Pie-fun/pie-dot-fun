// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: pie-dot-fun/v1/holding.proto

package piedotfun

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockHoldingServiceClient is a mock of HoldingServiceClient interface.
type MockHoldingServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockHoldingServiceClientMockRecorder
}

// MockHoldingServiceClientMockRecorder is the mock recorder for MockHoldingServiceClient.
type MockHoldingServiceClientMockRecorder struct {
	mock *MockHoldingServiceClient
}

// NewMockHoldingServiceClient creates a new mock instance.
func NewMockHoldingServiceClient(ctrl *gomock.Controller) *MockHoldingServiceClient {
	mock := &MockHoldingServiceClient{ctrl: ctrl}
	mock.recorder = &MockHoldingServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockHoldingServiceClient) EXPECT() *MockHoldingServiceClientMockRecorder {
	return m.recorder
}

// GetHolding mocks base method.
func (m *MockHoldingServiceClient) GetHolding(ctx context.Context, in *GetHoldingRequest, opts ...grpc.CallOption) (*Holding, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetHolding", varargs...)
	ret0, _ := ret[0].(*Holding)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetHolding indicates an expected call of GetHolding.
func (mr *MockHoldingServiceClientMockRecorder) GetHolding(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetHolding", reflect.TypeOf((*MockHoldingServiceClient)(nil).GetHolding), varargs...)
}

// GetHoldingsStatistics mocks base method.
func (m *MockHoldingServiceClient) GetHoldingsStatistics(ctx context.Context, in *GetHoldingsStatisticsRequest, opts ...grpc.CallOption) (*GetHoldingsStatisticsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetHoldingsStatistics", varargs...)
	ret0, _ := ret[0].(*GetHoldingsStatisticsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetHoldingsStatistics indicates an expected call of GetHoldingsStatistics.
func (mr *MockHoldingServiceClientMockRecorder) GetHoldingsStatistics(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetHoldingsStatistics", reflect.TypeOf((*MockHoldingServiceClient)(nil).GetHoldingsStatistics), varargs...)
}

// ListHoldings mocks base method.
func (m *MockHoldingServiceClient) ListHoldings(ctx context.Context, in *ListHoldingsRequest, opts ...grpc.CallOption) (*ListHoldingsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListHoldings", varargs...)
	ret0, _ := ret[0].(*ListHoldingsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListHoldings indicates an expected call of ListHoldings.
func (mr *MockHoldingServiceClientMockRecorder) ListHoldings(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListHoldings", reflect.TypeOf((*MockHoldingServiceClient)(nil).ListHoldings), varargs...)
}

// MockHoldingServiceServer is a mock of HoldingServiceServer interface.
type MockHoldingServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockHoldingServiceServerMockRecorder
}

// MockHoldingServiceServerMockRecorder is the mock recorder for MockHoldingServiceServer.
type MockHoldingServiceServerMockRecorder struct {
	mock *MockHoldingServiceServer
}

// NewMockHoldingServiceServer creates a new mock instance.
func NewMockHoldingServiceServer(ctrl *gomock.Controller) *MockHoldingServiceServer {
	mock := &MockHoldingServiceServer{ctrl: ctrl}
	mock.recorder = &MockHoldingServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockHoldingServiceServer) EXPECT() *MockHoldingServiceServerMockRecorder {
	return m.recorder
}

// GetHolding mocks base method.
func (m *MockHoldingServiceServer) GetHolding(ctx context.Context, in *GetHoldingRequest) (*Holding, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetHolding", ctx, in)
	ret0, _ := ret[0].(*Holding)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetHolding indicates an expected call of GetHolding.
func (mr *MockHoldingServiceServerMockRecorder) GetHolding(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetHolding", reflect.TypeOf((*MockHoldingServiceServer)(nil).GetHolding), ctx, in)
}

// GetHoldingsStatistics mocks base method.
func (m *MockHoldingServiceServer) GetHoldingsStatistics(ctx context.Context, in *GetHoldingsStatisticsRequest) (*GetHoldingsStatisticsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetHoldingsStatistics", ctx, in)
	ret0, _ := ret[0].(*GetHoldingsStatisticsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetHoldingsStatistics indicates an expected call of GetHoldingsStatistics.
func (mr *MockHoldingServiceServerMockRecorder) GetHoldingsStatistics(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetHoldingsStatistics", reflect.TypeOf((*MockHoldingServiceServer)(nil).GetHoldingsStatistics), ctx, in)
}

// ListHoldings mocks base method.
func (m *MockHoldingServiceServer) ListHoldings(ctx context.Context, in *ListHoldingsRequest) (*ListHoldingsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListHoldings", ctx, in)
	ret0, _ := ret[0].(*ListHoldingsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListHoldings indicates an expected call of ListHoldings.
func (mr *MockHoldingServiceServerMockRecorder) ListHoldings(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListHoldings", reflect.TypeOf((*MockHoldingServiceServer)(nil).ListHoldings), ctx, in)
}

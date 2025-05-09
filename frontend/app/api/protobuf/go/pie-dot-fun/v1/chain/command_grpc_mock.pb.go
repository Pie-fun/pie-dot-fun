// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: pie-dot-fun/v1/chain/command.proto

package chain

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockChainCommandServiceClient is a mock of ChainCommandServiceClient interface.
type MockChainCommandServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockChainCommandServiceClientMockRecorder
}

// MockChainCommandServiceClientMockRecorder is the mock recorder for MockChainCommandServiceClient.
type MockChainCommandServiceClientMockRecorder struct {
	mock *MockChainCommandServiceClient
}

// NewMockChainCommandServiceClient creates a new mock instance.
func NewMockChainCommandServiceClient(ctrl *gomock.Controller) *MockChainCommandServiceClient {
	mock := &MockChainCommandServiceClient{ctrl: ctrl}
	mock.recorder = &MockChainCommandServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockChainCommandServiceClient) EXPECT() *MockChainCommandServiceClientMockRecorder {
	return m.recorder
}

// RebalanceBasketToken mocks base method.
func (m *MockChainCommandServiceClient) RebalanceBasketToken(ctx context.Context, in *RebalanceBasketTokenRequest, opts ...grpc.CallOption) (*RebalanceBasketTokenResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "RebalanceBasketToken", varargs...)
	ret0, _ := ret[0].(*RebalanceBasketTokenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RebalanceBasketToken indicates an expected call of RebalanceBasketToken.
func (mr *MockChainCommandServiceClientMockRecorder) RebalanceBasketToken(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RebalanceBasketToken", reflect.TypeOf((*MockChainCommandServiceClient)(nil).RebalanceBasketToken), varargs...)
}

// MockChainCommandServiceServer is a mock of ChainCommandServiceServer interface.
type MockChainCommandServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockChainCommandServiceServerMockRecorder
}

// MockChainCommandServiceServerMockRecorder is the mock recorder for MockChainCommandServiceServer.
type MockChainCommandServiceServerMockRecorder struct {
	mock *MockChainCommandServiceServer
}

// NewMockChainCommandServiceServer creates a new mock instance.
func NewMockChainCommandServiceServer(ctrl *gomock.Controller) *MockChainCommandServiceServer {
	mock := &MockChainCommandServiceServer{ctrl: ctrl}
	mock.recorder = &MockChainCommandServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockChainCommandServiceServer) EXPECT() *MockChainCommandServiceServerMockRecorder {
	return m.recorder
}

// RebalanceBasketToken mocks base method.
func (m *MockChainCommandServiceServer) RebalanceBasketToken(ctx context.Context, in *RebalanceBasketTokenRequest) (*RebalanceBasketTokenResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RebalanceBasketToken", ctx, in)
	ret0, _ := ret[0].(*RebalanceBasketTokenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RebalanceBasketToken indicates an expected call of RebalanceBasketToken.
func (mr *MockChainCommandServiceServerMockRecorder) RebalanceBasketToken(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RebalanceBasketToken", reflect.TypeOf((*MockChainCommandServiceServer)(nil).RebalanceBasketToken), ctx, in)
}

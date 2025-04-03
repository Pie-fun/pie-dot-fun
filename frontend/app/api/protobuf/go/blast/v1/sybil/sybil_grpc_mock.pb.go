// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/sybil/sybil.proto

package sybil

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockSybilServiceClient is a mock of SybilServiceClient interface.
type MockSybilServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockSybilServiceClientMockRecorder
}

// MockSybilServiceClientMockRecorder is the mock recorder for MockSybilServiceClient.
type MockSybilServiceClientMockRecorder struct {
	mock *MockSybilServiceClient
}

// NewMockSybilServiceClient creates a new mock instance.
func NewMockSybilServiceClient(ctrl *gomock.Controller) *MockSybilServiceClient {
	mock := &MockSybilServiceClient{ctrl: ctrl}
	mock.recorder = &MockSybilServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSybilServiceClient) EXPECT() *MockSybilServiceClientMockRecorder {
	return m.recorder
}

// GetSybil mocks base method.
func (m *MockSybilServiceClient) GetSybil(ctx context.Context, in *GetSybilRequest, opts ...grpc.CallOption) (*Sybil, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetSybil", varargs...)
	ret0, _ := ret[0].(*Sybil)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSybil indicates an expected call of GetSybil.
func (mr *MockSybilServiceClientMockRecorder) GetSybil(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSybil", reflect.TypeOf((*MockSybilServiceClient)(nil).GetSybil), varargs...)
}

// MockSybilServiceServer is a mock of SybilServiceServer interface.
type MockSybilServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockSybilServiceServerMockRecorder
}

// MockSybilServiceServerMockRecorder is the mock recorder for MockSybilServiceServer.
type MockSybilServiceServerMockRecorder struct {
	mock *MockSybilServiceServer
}

// NewMockSybilServiceServer creates a new mock instance.
func NewMockSybilServiceServer(ctrl *gomock.Controller) *MockSybilServiceServer {
	mock := &MockSybilServiceServer{ctrl: ctrl}
	mock.recorder = &MockSybilServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSybilServiceServer) EXPECT() *MockSybilServiceServerMockRecorder {
	return m.recorder
}

// GetSybil mocks base method.
func (m *MockSybilServiceServer) GetSybil(ctx context.Context, in *GetSybilRequest) (*Sybil, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetSybil", ctx, in)
	ret0, _ := ret[0].(*Sybil)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetSybil indicates an expected call of GetSybil.
func (mr *MockSybilServiceServerMockRecorder) GetSybil(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetSybil", reflect.TypeOf((*MockSybilServiceServer)(nil).GetSybil), ctx, in)
}

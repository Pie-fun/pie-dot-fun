// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: ethereum/v1/outpost/stardoodle.proto

package outpost

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockStarDoodleServiceClient is a mock of StarDoodleServiceClient interface.
type MockStarDoodleServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockStarDoodleServiceClientMockRecorder
}

// MockStarDoodleServiceClientMockRecorder is the mock recorder for MockStarDoodleServiceClient.
type MockStarDoodleServiceClientMockRecorder struct {
	mock *MockStarDoodleServiceClient
}

// NewMockStarDoodleServiceClient creates a new mock instance.
func NewMockStarDoodleServiceClient(ctrl *gomock.Controller) *MockStarDoodleServiceClient {
	mock := &MockStarDoodleServiceClient{ctrl: ctrl}
	mock.recorder = &MockStarDoodleServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockStarDoodleServiceClient) EXPECT() *MockStarDoodleServiceClientMockRecorder {
	return m.recorder
}

// ListStarDoodles mocks base method.
func (m *MockStarDoodleServiceClient) ListStarDoodles(ctx context.Context, in *ListStarDoodlesRequest, opts ...grpc.CallOption) (*ListStarDoodlesResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListStarDoodles", varargs...)
	ret0, _ := ret[0].(*ListStarDoodlesResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListStarDoodles indicates an expected call of ListStarDoodles.
func (mr *MockStarDoodleServiceClientMockRecorder) ListStarDoodles(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListStarDoodles", reflect.TypeOf((*MockStarDoodleServiceClient)(nil).ListStarDoodles), varargs...)
}

// MockStarDoodleServiceServer is a mock of StarDoodleServiceServer interface.
type MockStarDoodleServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockStarDoodleServiceServerMockRecorder
}

// MockStarDoodleServiceServerMockRecorder is the mock recorder for MockStarDoodleServiceServer.
type MockStarDoodleServiceServerMockRecorder struct {
	mock *MockStarDoodleServiceServer
}

// NewMockStarDoodleServiceServer creates a new mock instance.
func NewMockStarDoodleServiceServer(ctrl *gomock.Controller) *MockStarDoodleServiceServer {
	mock := &MockStarDoodleServiceServer{ctrl: ctrl}
	mock.recorder = &MockStarDoodleServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockStarDoodleServiceServer) EXPECT() *MockStarDoodleServiceServerMockRecorder {
	return m.recorder
}

// ListStarDoodles mocks base method.
func (m *MockStarDoodleServiceServer) ListStarDoodles(ctx context.Context, in *ListStarDoodlesRequest) (*ListStarDoodlesResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListStarDoodles", ctx, in)
	ret0, _ := ret[0].(*ListStarDoodlesResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListStarDoodles indicates an expected call of ListStarDoodles.
func (mr *MockStarDoodleServiceServerMockRecorder) ListStarDoodles(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListStarDoodles", reflect.TypeOf((*MockStarDoodleServiceServer)(nil).ListStarDoodles), ctx, in)
}

// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/wallet/wallet.proto

package wallet

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockWalletServiceClient is a mock of WalletServiceClient interface.
type MockWalletServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockWalletServiceClientMockRecorder
}

// MockWalletServiceClientMockRecorder is the mock recorder for MockWalletServiceClient.
type MockWalletServiceClientMockRecorder struct {
	mock *MockWalletServiceClient
}

// NewMockWalletServiceClient creates a new mock instance.
func NewMockWalletServiceClient(ctrl *gomock.Controller) *MockWalletServiceClient {
	mock := &MockWalletServiceClient{ctrl: ctrl}
	mock.recorder = &MockWalletServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockWalletServiceClient) EXPECT() *MockWalletServiceClientMockRecorder {
	return m.recorder
}

// GetWallet mocks base method.
func (m *MockWalletServiceClient) GetWallet(ctx context.Context, in *GetWalletRequest, opts ...grpc.CallOption) (*Wallet, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetWallet", varargs...)
	ret0, _ := ret[0].(*Wallet)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetWallet indicates an expected call of GetWallet.
func (mr *MockWalletServiceClientMockRecorder) GetWallet(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetWallet", reflect.TypeOf((*MockWalletServiceClient)(nil).GetWallet), varargs...)
}

// MockWalletServiceServer is a mock of WalletServiceServer interface.
type MockWalletServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockWalletServiceServerMockRecorder
}

// MockWalletServiceServerMockRecorder is the mock recorder for MockWalletServiceServer.
type MockWalletServiceServerMockRecorder struct {
	mock *MockWalletServiceServer
}

// NewMockWalletServiceServer creates a new mock instance.
func NewMockWalletServiceServer(ctrl *gomock.Controller) *MockWalletServiceServer {
	mock := &MockWalletServiceServer{ctrl: ctrl}
	mock.recorder = &MockWalletServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockWalletServiceServer) EXPECT() *MockWalletServiceServerMockRecorder {
	return m.recorder
}

// GetWallet mocks base method.
func (m *MockWalletServiceServer) GetWallet(ctx context.Context, in *GetWalletRequest) (*Wallet, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetWallet", ctx, in)
	ret0, _ := ret[0].(*Wallet)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetWallet indicates an expected call of GetWallet.
func (mr *MockWalletServiceServerMockRecorder) GetWallet(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetWallet", reflect.TypeOf((*MockWalletServiceServer)(nil).GetWallet), ctx, in)
}

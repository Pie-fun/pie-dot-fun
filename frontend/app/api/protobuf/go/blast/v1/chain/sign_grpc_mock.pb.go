// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/chain/sign.proto

package chain

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockChainSignServiceClient is a mock of ChainSignServiceClient interface.
type MockChainSignServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockChainSignServiceClientMockRecorder
}

// MockChainSignServiceClientMockRecorder is the mock recorder for MockChainSignServiceClient.
type MockChainSignServiceClientMockRecorder struct {
	mock *MockChainSignServiceClient
}

// NewMockChainSignServiceClient creates a new mock instance.
func NewMockChainSignServiceClient(ctrl *gomock.Controller) *MockChainSignServiceClient {
	mock := &MockChainSignServiceClient{ctrl: ctrl}
	mock.recorder = &MockChainSignServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockChainSignServiceClient) EXPECT() *MockChainSignServiceClientMockRecorder {
	return m.recorder
}

// SignJoinSquare mocks base method.
func (m *MockChainSignServiceClient) SignJoinSquare(ctx context.Context, in *SignJoinSquareRequest, opts ...grpc.CallOption) (*SignJoinSquareResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SignJoinSquare", varargs...)
	ret0, _ := ret[0].(*SignJoinSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignJoinSquare indicates an expected call of SignJoinSquare.
func (mr *MockChainSignServiceClientMockRecorder) SignJoinSquare(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignJoinSquare", reflect.TypeOf((*MockChainSignServiceClient)(nil).SignJoinSquare), varargs...)
}

// SignMessage mocks base method.
func (m *MockChainSignServiceClient) SignMessage(ctx context.Context, in *SignMessageRequest, opts ...grpc.CallOption) (*SignatureResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SignMessage", varargs...)
	ret0, _ := ret[0].(*SignatureResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignMessage indicates an expected call of SignMessage.
func (mr *MockChainSignServiceClientMockRecorder) SignMessage(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignMessage", reflect.TypeOf((*MockChainSignServiceClient)(nil).SignMessage), varargs...)
}

// SignMintSquare mocks base method.
func (m *MockChainSignServiceClient) SignMintSquare(ctx context.Context, in *SignMintSquareRequest, opts ...grpc.CallOption) (*SignMintSquareResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SignMintSquare", varargs...)
	ret0, _ := ret[0].(*SignMintSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignMintSquare indicates an expected call of SignMintSquare.
func (mr *MockChainSignServiceClientMockRecorder) SignMintSquare(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignMintSquare", reflect.TypeOf((*MockChainSignServiceClient)(nil).SignMintSquare), varargs...)
}

// SignTransferSquare mocks base method.
func (m *MockChainSignServiceClient) SignTransferSquare(ctx context.Context, in *SignTransferSquareRequest, opts ...grpc.CallOption) (*SignTransferSquareResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SignTransferSquare", varargs...)
	ret0, _ := ret[0].(*SignTransferSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignTransferSquare indicates an expected call of SignTransferSquare.
func (mr *MockChainSignServiceClientMockRecorder) SignTransferSquare(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignTransferSquare", reflect.TypeOf((*MockChainSignServiceClient)(nil).SignTransferSquare), varargs...)
}

// SignUploadScore mocks base method.
func (m *MockChainSignServiceClient) SignUploadScore(ctx context.Context, in *SignUploadScoreRequest, opts ...grpc.CallOption) (*SignUploadScoreResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SignUploadScore", varargs...)
	ret0, _ := ret[0].(*SignUploadScoreResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignUploadScore indicates an expected call of SignUploadScore.
func (mr *MockChainSignServiceClientMockRecorder) SignUploadScore(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignUploadScore", reflect.TypeOf((*MockChainSignServiceClient)(nil).SignUploadScore), varargs...)
}

// MockChainSignServiceServer is a mock of ChainSignServiceServer interface.
type MockChainSignServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockChainSignServiceServerMockRecorder
}

// MockChainSignServiceServerMockRecorder is the mock recorder for MockChainSignServiceServer.
type MockChainSignServiceServerMockRecorder struct {
	mock *MockChainSignServiceServer
}

// NewMockChainSignServiceServer creates a new mock instance.
func NewMockChainSignServiceServer(ctrl *gomock.Controller) *MockChainSignServiceServer {
	mock := &MockChainSignServiceServer{ctrl: ctrl}
	mock.recorder = &MockChainSignServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockChainSignServiceServer) EXPECT() *MockChainSignServiceServerMockRecorder {
	return m.recorder
}

// SignJoinSquare mocks base method.
func (m *MockChainSignServiceServer) SignJoinSquare(ctx context.Context, in *SignJoinSquareRequest) (*SignJoinSquareResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SignJoinSquare", ctx, in)
	ret0, _ := ret[0].(*SignJoinSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignJoinSquare indicates an expected call of SignJoinSquare.
func (mr *MockChainSignServiceServerMockRecorder) SignJoinSquare(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignJoinSquare", reflect.TypeOf((*MockChainSignServiceServer)(nil).SignJoinSquare), ctx, in)
}

// SignMessage mocks base method.
func (m *MockChainSignServiceServer) SignMessage(ctx context.Context, in *SignMessageRequest) (*SignatureResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SignMessage", ctx, in)
	ret0, _ := ret[0].(*SignatureResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignMessage indicates an expected call of SignMessage.
func (mr *MockChainSignServiceServerMockRecorder) SignMessage(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignMessage", reflect.TypeOf((*MockChainSignServiceServer)(nil).SignMessage), ctx, in)
}

// SignMintSquare mocks base method.
func (m *MockChainSignServiceServer) SignMintSquare(ctx context.Context, in *SignMintSquareRequest) (*SignMintSquareResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SignMintSquare", ctx, in)
	ret0, _ := ret[0].(*SignMintSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignMintSquare indicates an expected call of SignMintSquare.
func (mr *MockChainSignServiceServerMockRecorder) SignMintSquare(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignMintSquare", reflect.TypeOf((*MockChainSignServiceServer)(nil).SignMintSquare), ctx, in)
}

// SignTransferSquare mocks base method.
func (m *MockChainSignServiceServer) SignTransferSquare(ctx context.Context, in *SignTransferSquareRequest) (*SignTransferSquareResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SignTransferSquare", ctx, in)
	ret0, _ := ret[0].(*SignTransferSquareResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignTransferSquare indicates an expected call of SignTransferSquare.
func (mr *MockChainSignServiceServerMockRecorder) SignTransferSquare(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignTransferSquare", reflect.TypeOf((*MockChainSignServiceServer)(nil).SignTransferSquare), ctx, in)
}

// SignUploadScore mocks base method.
func (m *MockChainSignServiceServer) SignUploadScore(ctx context.Context, in *SignUploadScoreRequest) (*SignUploadScoreResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SignUploadScore", ctx, in)
	ret0, _ := ret[0].(*SignUploadScoreResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SignUploadScore indicates an expected call of SignUploadScore.
func (mr *MockChainSignServiceServerMockRecorder) SignUploadScore(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SignUploadScore", reflect.TypeOf((*MockChainSignServiceServer)(nil).SignUploadScore), ctx, in)
}

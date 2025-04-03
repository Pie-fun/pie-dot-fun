// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: blast/v1/referral/referral.proto

package referral

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockReferralServiceClient is a mock of ReferralServiceClient interface.
type MockReferralServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockReferralServiceClientMockRecorder
}

// MockReferralServiceClientMockRecorder is the mock recorder for MockReferralServiceClient.
type MockReferralServiceClientMockRecorder struct {
	mock *MockReferralServiceClient
}

// NewMockReferralServiceClient creates a new mock instance.
func NewMockReferralServiceClient(ctrl *gomock.Controller) *MockReferralServiceClient {
	mock := &MockReferralServiceClient{ctrl: ctrl}
	mock.recorder = &MockReferralServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockReferralServiceClient) EXPECT() *MockReferralServiceClientMockRecorder {
	return m.recorder
}

// GetReferral mocks base method.
func (m *MockReferralServiceClient) GetReferral(ctx context.Context, in *GetReferralRequest, opts ...grpc.CallOption) (*Referral, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetReferral", varargs...)
	ret0, _ := ret[0].(*Referral)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetReferral indicates an expected call of GetReferral.
func (mr *MockReferralServiceClientMockRecorder) GetReferral(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetReferral", reflect.TypeOf((*MockReferralServiceClient)(nil).GetReferral), varargs...)
}

// ListReferrals mocks base method.
func (m *MockReferralServiceClient) ListReferrals(ctx context.Context, in *ListReferralsRequest, opts ...grpc.CallOption) (*ListReferralsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListReferrals", varargs...)
	ret0, _ := ret[0].(*ListReferralsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListReferrals indicates an expected call of ListReferrals.
func (mr *MockReferralServiceClientMockRecorder) ListReferrals(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListReferrals", reflect.TypeOf((*MockReferralServiceClient)(nil).ListReferrals), varargs...)
}

// ReferredBy mocks base method.
func (m *MockReferralServiceClient) ReferredBy(ctx context.Context, in *RefferedByRequest, opts ...grpc.CallOption) (*Referral, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ReferredBy", varargs...)
	ret0, _ := ret[0].(*Referral)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ReferredBy indicates an expected call of ReferredBy.
func (mr *MockReferralServiceClientMockRecorder) ReferredBy(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReferredBy", reflect.TypeOf((*MockReferralServiceClient)(nil).ReferredBy), varargs...)
}

// MockReferralServiceServer is a mock of ReferralServiceServer interface.
type MockReferralServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockReferralServiceServerMockRecorder
}

// MockReferralServiceServerMockRecorder is the mock recorder for MockReferralServiceServer.
type MockReferralServiceServerMockRecorder struct {
	mock *MockReferralServiceServer
}

// NewMockReferralServiceServer creates a new mock instance.
func NewMockReferralServiceServer(ctrl *gomock.Controller) *MockReferralServiceServer {
	mock := &MockReferralServiceServer{ctrl: ctrl}
	mock.recorder = &MockReferralServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockReferralServiceServer) EXPECT() *MockReferralServiceServerMockRecorder {
	return m.recorder
}

// GetReferral mocks base method.
func (m *MockReferralServiceServer) GetReferral(ctx context.Context, in *GetReferralRequest) (*Referral, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetReferral", ctx, in)
	ret0, _ := ret[0].(*Referral)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetReferral indicates an expected call of GetReferral.
func (mr *MockReferralServiceServerMockRecorder) GetReferral(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetReferral", reflect.TypeOf((*MockReferralServiceServer)(nil).GetReferral), ctx, in)
}

// ListReferrals mocks base method.
func (m *MockReferralServiceServer) ListReferrals(ctx context.Context, in *ListReferralsRequest) (*ListReferralsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListReferrals", ctx, in)
	ret0, _ := ret[0].(*ListReferralsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListReferrals indicates an expected call of ListReferrals.
func (mr *MockReferralServiceServerMockRecorder) ListReferrals(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListReferrals", reflect.TypeOf((*MockReferralServiceServer)(nil).ListReferrals), ctx, in)
}

// ReferredBy mocks base method.
func (m *MockReferralServiceServer) ReferredBy(ctx context.Context, in *RefferedByRequest) (*Referral, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReferredBy", ctx, in)
	ret0, _ := ret[0].(*Referral)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ReferredBy indicates an expected call of ReferredBy.
func (mr *MockReferralServiceServerMockRecorder) ReferredBy(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReferredBy", reflect.TypeOf((*MockReferralServiceServer)(nil).ReferredBy), ctx, in)
}

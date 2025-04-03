// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: ethereum/v1/profile/profile.proto

package profile

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockProfileServiceClient is a mock of ProfileServiceClient interface.
type MockProfileServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockProfileServiceClientMockRecorder
}

// MockProfileServiceClientMockRecorder is the mock recorder for MockProfileServiceClient.
type MockProfileServiceClientMockRecorder struct {
	mock *MockProfileServiceClient
}

// NewMockProfileServiceClient creates a new mock instance.
func NewMockProfileServiceClient(ctrl *gomock.Controller) *MockProfileServiceClient {
	mock := &MockProfileServiceClient{ctrl: ctrl}
	mock.recorder = &MockProfileServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProfileServiceClient) EXPECT() *MockProfileServiceClientMockRecorder {
	return m.recorder
}

// GetMySpace mocks base method.
func (m *MockProfileServiceClient) GetMySpace(ctx context.Context, in *GetMySpaceRequest, opts ...grpc.CallOption) (*MySpace, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMySpace", varargs...)
	ret0, _ := ret[0].(*MySpace)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMySpace indicates an expected call of GetMySpace.
func (mr *MockProfileServiceClientMockRecorder) GetMySpace(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMySpace", reflect.TypeOf((*MockProfileServiceClient)(nil).GetMySpace), varargs...)
}

// GetProfile mocks base method.
func (m *MockProfileServiceClient) GetProfile(ctx context.Context, in *GetProfileRequest, opts ...grpc.CallOption) (*Profile, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetProfile", varargs...)
	ret0, _ := ret[0].(*Profile)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetProfile indicates an expected call of GetProfile.
func (mr *MockProfileServiceClientMockRecorder) GetProfile(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetProfile", reflect.TypeOf((*MockProfileServiceClient)(nil).GetProfile), varargs...)
}

// GetProfileDailyPlayCount mocks base method.
func (m *MockProfileServiceClient) GetProfileDailyPlayCount(ctx context.Context, in *GetProfileDailyPlayCountRequest, opts ...grpc.CallOption) (*GetProfileDailyPlayCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetProfileDailyPlayCount", varargs...)
	ret0, _ := ret[0].(*GetProfileDailyPlayCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetProfileDailyPlayCount indicates an expected call of GetProfileDailyPlayCount.
func (mr *MockProfileServiceClientMockRecorder) GetProfileDailyPlayCount(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetProfileDailyPlayCount", reflect.TypeOf((*MockProfileServiceClient)(nil).GetProfileDailyPlayCount), varargs...)
}

// IncrementProfileDailyPlayCount mocks base method.
func (m *MockProfileServiceClient) IncrementProfileDailyPlayCount(ctx context.Context, in *IncrementProfileDailyPlayCountRequest, opts ...grpc.CallOption) (*IncrementProfileDailyPlayCountResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "IncrementProfileDailyPlayCount", varargs...)
	ret0, _ := ret[0].(*IncrementProfileDailyPlayCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// IncrementProfileDailyPlayCount indicates an expected call of IncrementProfileDailyPlayCount.
func (mr *MockProfileServiceClientMockRecorder) IncrementProfileDailyPlayCount(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "IncrementProfileDailyPlayCount", reflect.TypeOf((*MockProfileServiceClient)(nil).IncrementProfileDailyPlayCount), varargs...)
}

// ListProfiles mocks base method.
func (m *MockProfileServiceClient) ListProfiles(ctx context.Context, in *ListProfilesRequest, opts ...grpc.CallOption) (*ListProfilesResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListProfiles", varargs...)
	ret0, _ := ret[0].(*ListProfilesResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListProfiles indicates an expected call of ListProfiles.
func (mr *MockProfileServiceClientMockRecorder) ListProfiles(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListProfiles", reflect.TypeOf((*MockProfileServiceClient)(nil).ListProfiles), varargs...)
}

// UpdateMySpace mocks base method.
func (m *MockProfileServiceClient) UpdateMySpace(ctx context.Context, in *UpdateMySpaceRequest, opts ...grpc.CallOption) (*MySpace, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateMySpace", varargs...)
	ret0, _ := ret[0].(*MySpace)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateMySpace indicates an expected call of UpdateMySpace.
func (mr *MockProfileServiceClientMockRecorder) UpdateMySpace(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateMySpace", reflect.TypeOf((*MockProfileServiceClient)(nil).UpdateMySpace), varargs...)
}

// UpdateProfile mocks base method.
func (m *MockProfileServiceClient) UpdateProfile(ctx context.Context, in *UpdateProfileRequest, opts ...grpc.CallOption) (*Profile, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateProfile", varargs...)
	ret0, _ := ret[0].(*Profile)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateProfile indicates an expected call of UpdateProfile.
func (mr *MockProfileServiceClientMockRecorder) UpdateProfile(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateProfile", reflect.TypeOf((*MockProfileServiceClient)(nil).UpdateProfile), varargs...)
}

// MockProfileServiceServer is a mock of ProfileServiceServer interface.
type MockProfileServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockProfileServiceServerMockRecorder
}

// MockProfileServiceServerMockRecorder is the mock recorder for MockProfileServiceServer.
type MockProfileServiceServerMockRecorder struct {
	mock *MockProfileServiceServer
}

// NewMockProfileServiceServer creates a new mock instance.
func NewMockProfileServiceServer(ctrl *gomock.Controller) *MockProfileServiceServer {
	mock := &MockProfileServiceServer{ctrl: ctrl}
	mock.recorder = &MockProfileServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProfileServiceServer) EXPECT() *MockProfileServiceServerMockRecorder {
	return m.recorder
}

// GetMySpace mocks base method.
func (m *MockProfileServiceServer) GetMySpace(ctx context.Context, in *GetMySpaceRequest) (*MySpace, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetMySpace", ctx, in)
	ret0, _ := ret[0].(*MySpace)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMySpace indicates an expected call of GetMySpace.
func (mr *MockProfileServiceServerMockRecorder) GetMySpace(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMySpace", reflect.TypeOf((*MockProfileServiceServer)(nil).GetMySpace), ctx, in)
}

// GetProfile mocks base method.
func (m *MockProfileServiceServer) GetProfile(ctx context.Context, in *GetProfileRequest) (*Profile, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetProfile", ctx, in)
	ret0, _ := ret[0].(*Profile)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetProfile indicates an expected call of GetProfile.
func (mr *MockProfileServiceServerMockRecorder) GetProfile(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetProfile", reflect.TypeOf((*MockProfileServiceServer)(nil).GetProfile), ctx, in)
}

// GetProfileDailyPlayCount mocks base method.
func (m *MockProfileServiceServer) GetProfileDailyPlayCount(ctx context.Context, in *GetProfileDailyPlayCountRequest) (*GetProfileDailyPlayCountResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetProfileDailyPlayCount", ctx, in)
	ret0, _ := ret[0].(*GetProfileDailyPlayCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetProfileDailyPlayCount indicates an expected call of GetProfileDailyPlayCount.
func (mr *MockProfileServiceServerMockRecorder) GetProfileDailyPlayCount(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetProfileDailyPlayCount", reflect.TypeOf((*MockProfileServiceServer)(nil).GetProfileDailyPlayCount), ctx, in)
}

// IncrementProfileDailyPlayCount mocks base method.
func (m *MockProfileServiceServer) IncrementProfileDailyPlayCount(ctx context.Context, in *IncrementProfileDailyPlayCountRequest) (*IncrementProfileDailyPlayCountResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "IncrementProfileDailyPlayCount", ctx, in)
	ret0, _ := ret[0].(*IncrementProfileDailyPlayCountResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// IncrementProfileDailyPlayCount indicates an expected call of IncrementProfileDailyPlayCount.
func (mr *MockProfileServiceServerMockRecorder) IncrementProfileDailyPlayCount(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "IncrementProfileDailyPlayCount", reflect.TypeOf((*MockProfileServiceServer)(nil).IncrementProfileDailyPlayCount), ctx, in)
}

// ListProfiles mocks base method.
func (m *MockProfileServiceServer) ListProfiles(ctx context.Context, in *ListProfilesRequest) (*ListProfilesResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListProfiles", ctx, in)
	ret0, _ := ret[0].(*ListProfilesResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListProfiles indicates an expected call of ListProfiles.
func (mr *MockProfileServiceServerMockRecorder) ListProfiles(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListProfiles", reflect.TypeOf((*MockProfileServiceServer)(nil).ListProfiles), ctx, in)
}

// UpdateMySpace mocks base method.
func (m *MockProfileServiceServer) UpdateMySpace(ctx context.Context, in *UpdateMySpaceRequest) (*MySpace, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateMySpace", ctx, in)
	ret0, _ := ret[0].(*MySpace)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateMySpace indicates an expected call of UpdateMySpace.
func (mr *MockProfileServiceServerMockRecorder) UpdateMySpace(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateMySpace", reflect.TypeOf((*MockProfileServiceServer)(nil).UpdateMySpace), ctx, in)
}

// UpdateProfile mocks base method.
func (m *MockProfileServiceServer) UpdateProfile(ctx context.Context, in *UpdateProfileRequest) (*Profile, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateProfile", ctx, in)
	ret0, _ := ret[0].(*Profile)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateProfile indicates an expected call of UpdateProfile.
func (mr *MockProfileServiceServerMockRecorder) UpdateProfile(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateProfile", reflect.TypeOf((*MockProfileServiceServer)(nil).UpdateProfile), ctx, in)
}

// Code generated by protoc-gen-go-grpc-mock. DO NOT EDIT.
// source: pie-dot-fun/v1/basket-token-market.proto

package piedotfun

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockBasketTokenMarketServiceClient is a mock of BasketTokenMarketServiceClient interface.
type MockBasketTokenMarketServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockBasketTokenMarketServiceClientMockRecorder
}

// MockBasketTokenMarketServiceClientMockRecorder is the mock recorder for MockBasketTokenMarketServiceClient.
type MockBasketTokenMarketServiceClientMockRecorder struct {
	mock *MockBasketTokenMarketServiceClient
}

// NewMockBasketTokenMarketServiceClient creates a new mock instance.
func NewMockBasketTokenMarketServiceClient(ctrl *gomock.Controller) *MockBasketTokenMarketServiceClient {
	mock := &MockBasketTokenMarketServiceClient{ctrl: ctrl}
	mock.recorder = &MockBasketTokenMarketServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockBasketTokenMarketServiceClient) EXPECT() *MockBasketTokenMarketServiceClientMockRecorder {
	return m.recorder
}

// CreateBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceClient) CreateBasketTokenMarket(ctx context.Context, in *CreateBasketTokenMarketRequest, opts ...grpc.CallOption) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "CreateBasketTokenMarket", varargs...)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateBasketTokenMarket indicates an expected call of CreateBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) CreateBasketTokenMarket(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).CreateBasketTokenMarket), varargs...)
}

// CustomCreateBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceClient) CustomCreateBasketTokenMarket(ctx context.Context, in *CustomCreateBasketTokenMarketRequest, opts ...grpc.CallOption) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "CustomCreateBasketTokenMarket", varargs...)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CustomCreateBasketTokenMarket indicates an expected call of CustomCreateBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) CustomCreateBasketTokenMarket(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CustomCreateBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).CustomCreateBasketTokenMarket), varargs...)
}

// GetBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceClient) GetBasketTokenMarket(ctx context.Context, in *GetBasketTokenMarketRequest, opts ...grpc.CallOption) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetBasketTokenMarket", varargs...)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetBasketTokenMarket indicates an expected call of GetBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) GetBasketTokenMarket(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).GetBasketTokenMarket), varargs...)
}

// ListBasketTokenMarkets mocks base method.
func (m *MockBasketTokenMarketServiceClient) ListBasketTokenMarkets(ctx context.Context, in *ListBasketTokensMarketsRequest, opts ...grpc.CallOption) (*ListBasketTokensMarketsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListBasketTokenMarkets", varargs...)
	ret0, _ := ret[0].(*ListBasketTokensMarketsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListBasketTokenMarkets indicates an expected call of ListBasketTokenMarkets.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) ListBasketTokenMarkets(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListBasketTokenMarkets", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).ListBasketTokenMarkets), varargs...)
}

// ListBasketTokenTicks mocks base method.
func (m *MockBasketTokenMarketServiceClient) ListBasketTokenTicks(ctx context.Context, in *ListBasketTokenTicksRequest, opts ...grpc.CallOption) (*ListBasketTokenTicksResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ListBasketTokenTicks", varargs...)
	ret0, _ := ret[0].(*ListBasketTokenTicksResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListBasketTokenTicks indicates an expected call of ListBasketTokenTicks.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) ListBasketTokenTicks(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListBasketTokenTicks", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).ListBasketTokenTicks), varargs...)
}

// UpdateBasketTokenMarketComponents mocks base method.
func (m *MockBasketTokenMarketServiceClient) UpdateBasketTokenMarketComponents(ctx context.Context, in *UpdateBasketTokenMarketComponentsRequest, opts ...grpc.CallOption) (*UpdateBasketTokenMarketComponentsResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, in}
	for _, a := range opts {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateBasketTokenMarketComponents", varargs...)
	ret0, _ := ret[0].(*UpdateBasketTokenMarketComponentsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateBasketTokenMarketComponents indicates an expected call of UpdateBasketTokenMarketComponents.
func (mr *MockBasketTokenMarketServiceClientMockRecorder) UpdateBasketTokenMarketComponents(ctx, in interface{}, opts ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, in}, opts...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateBasketTokenMarketComponents", reflect.TypeOf((*MockBasketTokenMarketServiceClient)(nil).UpdateBasketTokenMarketComponents), varargs...)
}

// MockBasketTokenMarketServiceServer is a mock of BasketTokenMarketServiceServer interface.
type MockBasketTokenMarketServiceServer struct {
	ctrl     *gomock.Controller
	recorder *MockBasketTokenMarketServiceServerMockRecorder
}

// MockBasketTokenMarketServiceServerMockRecorder is the mock recorder for MockBasketTokenMarketServiceServer.
type MockBasketTokenMarketServiceServerMockRecorder struct {
	mock *MockBasketTokenMarketServiceServer
}

// NewMockBasketTokenMarketServiceServer creates a new mock instance.
func NewMockBasketTokenMarketServiceServer(ctrl *gomock.Controller) *MockBasketTokenMarketServiceServer {
	mock := &MockBasketTokenMarketServiceServer{ctrl: ctrl}
	mock.recorder = &MockBasketTokenMarketServiceServerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockBasketTokenMarketServiceServer) EXPECT() *MockBasketTokenMarketServiceServerMockRecorder {
	return m.recorder
}

// CreateBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceServer) CreateBasketTokenMarket(ctx context.Context, in *CreateBasketTokenMarketRequest) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateBasketTokenMarket", ctx, in)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateBasketTokenMarket indicates an expected call of CreateBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) CreateBasketTokenMarket(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).CreateBasketTokenMarket), ctx, in)
}

// CustomCreateBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceServer) CustomCreateBasketTokenMarket(ctx context.Context, in *CustomCreateBasketTokenMarketRequest) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CustomCreateBasketTokenMarket", ctx, in)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CustomCreateBasketTokenMarket indicates an expected call of CustomCreateBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) CustomCreateBasketTokenMarket(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CustomCreateBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).CustomCreateBasketTokenMarket), ctx, in)
}

// GetBasketTokenMarket mocks base method.
func (m *MockBasketTokenMarketServiceServer) GetBasketTokenMarket(ctx context.Context, in *GetBasketTokenMarketRequest) (*BasketTokenMarket, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetBasketTokenMarket", ctx, in)
	ret0, _ := ret[0].(*BasketTokenMarket)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetBasketTokenMarket indicates an expected call of GetBasketTokenMarket.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) GetBasketTokenMarket(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetBasketTokenMarket", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).GetBasketTokenMarket), ctx, in)
}

// ListBasketTokenMarkets mocks base method.
func (m *MockBasketTokenMarketServiceServer) ListBasketTokenMarkets(ctx context.Context, in *ListBasketTokensMarketsRequest) (*ListBasketTokensMarketsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListBasketTokenMarkets", ctx, in)
	ret0, _ := ret[0].(*ListBasketTokensMarketsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListBasketTokenMarkets indicates an expected call of ListBasketTokenMarkets.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) ListBasketTokenMarkets(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListBasketTokenMarkets", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).ListBasketTokenMarkets), ctx, in)
}

// ListBasketTokenTicks mocks base method.
func (m *MockBasketTokenMarketServiceServer) ListBasketTokenTicks(ctx context.Context, in *ListBasketTokenTicksRequest) (*ListBasketTokenTicksResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListBasketTokenTicks", ctx, in)
	ret0, _ := ret[0].(*ListBasketTokenTicksResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListBasketTokenTicks indicates an expected call of ListBasketTokenTicks.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) ListBasketTokenTicks(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListBasketTokenTicks", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).ListBasketTokenTicks), ctx, in)
}

// UpdateBasketTokenMarketComponents mocks base method.
func (m *MockBasketTokenMarketServiceServer) UpdateBasketTokenMarketComponents(ctx context.Context, in *UpdateBasketTokenMarketComponentsRequest) (*UpdateBasketTokenMarketComponentsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateBasketTokenMarketComponents", ctx, in)
	ret0, _ := ret[0].(*UpdateBasketTokenMarketComponentsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateBasketTokenMarketComponents indicates an expected call of UpdateBasketTokenMarketComponents.
func (mr *MockBasketTokenMarketServiceServerMockRecorder) UpdateBasketTokenMarketComponents(ctx, in interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateBasketTokenMarketComponents", reflect.TypeOf((*MockBasketTokenMarketServiceServer)(nil).UpdateBasketTokenMarketComponents), ctx, in)
}

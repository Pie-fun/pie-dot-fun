// Code generated by protoc-gen-fake. DO NOT EDIT.

package piedotfun

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for BasketTokenMarketService
var DefaultBasketTokenMarketServiceResponses = map[string]fake.Response{
	"/piedotfun.v1.BasketTokenMarketService/CreateBasketTokenMarket": {
		Method: "/piedotfun.v1.BasketTokenMarketService/CreateBasketTokenMarket",
		Response: &BasketTokenMarket{
			Name:            "fake_Name",
			BasketToken:     "fake_BasketToken",
			NativeCurrency:  0,
			Values:          nil,
			MarketCaps:      nil,
			ValueChanges:    nil,
			MaximumDrawDown: nil,
			Value:           nil,
			MarketCap:       nil,
			ValueChange:     nil,
		},
	},
	"/piedotfun.v1.BasketTokenMarketService/CustomCreateBasketTokenMarket": {
		Method: "/piedotfun.v1.BasketTokenMarketService/CustomCreateBasketTokenMarket",
		Response: &BasketTokenMarket{
			Name:            "fake_Name",
			BasketToken:     "fake_BasketToken",
			NativeCurrency:  0,
			Values:          nil,
			MarketCaps:      nil,
			ValueChanges:    nil,
			MaximumDrawDown: nil,
			Value:           nil,
			MarketCap:       nil,
			ValueChange:     nil,
		},
	},
	"/piedotfun.v1.BasketTokenMarketService/GetBasketTokenMarket": {
		Method: "/piedotfun.v1.BasketTokenMarketService/GetBasketTokenMarket",
		Response: &BasketTokenMarket{
			Name:            "fake_Name",
			BasketToken:     "fake_BasketToken",
			NativeCurrency:  0,
			Values:          nil,
			MarketCaps:      nil,
			ValueChanges:    nil,
			MaximumDrawDown: nil,
			Value:           nil,
			MarketCap:       nil,
			ValueChange:     nil,
		},
	},
	"/piedotfun.v1.BasketTokenMarketService/ListBasketTokenMarkets": {
		Method: "/piedotfun.v1.BasketTokenMarketService/ListBasketTokenMarkets",
		Response: &ListBasketTokensMarketsResponse{
			BasketTokenMarkets: nil,
			NextPageToken:      "fake_NextPageToken",
		},
	},
	"/piedotfun.v1.BasketTokenMarketService/UpdateBasketTokenMarketComponents": {
		Method:   "/piedotfun.v1.BasketTokenMarketService/UpdateBasketTokenMarketComponents",
		Response: &UpdateBasketTokenMarketComponentsResponse{},
	},
	"/piedotfun.v1.BasketTokenMarketService/ListBasketTokenTicks": {
		Method: "/piedotfun.v1.BasketTokenMarketService/ListBasketTokenTicks",
		Response: &ListBasketTokenTicksResponse{
			Ticks:    nil,
			Currency: 0,
		},
	},
}

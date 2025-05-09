// Code generated by protoc-gen-fake. DO NOT EDIT.

package piedotfun

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for HoldingService
var DefaultHoldingServiceResponses = map[string]fake.Response{
	"/piedotfun.v1.HoldingService/GetHolding": {
		Method: "/piedotfun.v1.HoldingService/GetHolding",
		Response: &Holding{
			Name:                "fake_Name",
			Chain:               0,
			BasketToken:         "fake_BasketToken",
			HoldingWallet:       "fake_HoldingWallet",
			Quantity:            nil,
			AverageBuyPrices:    nil,
			MarketValues:        nil,
			Pnls:                nil,
			OwnershipPercentage: nil,
			CreateTime:          nil,
			UpdateTime:          nil,
			AverageBuyPrice:     nil,
			MarketValue:         nil,
			Pnl:                 nil,
		},
	},
	"/piedotfun.v1.HoldingService/ListHoldings": {
		Method: "/piedotfun.v1.HoldingService/ListHoldings",
		Response: &ListHoldingsResponse{
			Holdings:      nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
	"/piedotfun.v1.HoldingService/GetHoldingsStatistics": {
		Method: "/piedotfun.v1.HoldingService/GetHoldingsStatistics",
		Response: &GetHoldingsStatisticsResponse{
			Count:             42,
			TotalMarketValues: nil,
			TotalPnls:         nil,
		},
	},
}

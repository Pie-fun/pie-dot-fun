// Code generated by protoc-gen-fake. DO NOT EDIT.

package gm

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for GMService
var DefaultGMServiceResponses = map[string]fake.Response{
	"/blast.v1.gm.GMService/GetGMStats": {
		Method: "/blast.v1.gm.GMService/GetGMStats",
		Response: &GMStats{
			Name:          "fake_Name",
			UserAddress:   "fake_UserAddress",
			SentCount:     42,
			ReceivedCount: 42,
		},
	},
	"/blast.v1.gm.GMService/SendGM": {
		Method: "/blast.v1.gm.GMService/SendGM",
		Response: &GM{
			Name:       "fake_Name",
			From:       "fake_From",
			To:         "fake_To",
			CreateTime: nil,
		},
	},
	"/blast.v1.gm.GMService/PreflightGM": {
		Method: "/blast.v1.gm.GMService/PreflightGM",
		Response: &PreflightGMResponse{
			CanSend: true,
		},
	},
	"/blast.v1.gm.GMService/ListGMs": {
		Method: "/blast.v1.gm.GMService/ListGMs",
		Response: &ListGMsResponse{
			Gms:           nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
}

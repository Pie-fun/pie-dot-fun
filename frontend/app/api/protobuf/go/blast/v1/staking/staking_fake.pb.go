// Code generated by protoc-gen-fake. DO NOT EDIT.

package staking

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for StakingService
var DefaultStakingServiceResponses = map[string]fake.Response{
	"/blast.v1.staking.StakingService/GetStaking": {
		Method: "/blast.v1.staking.StakingService/GetStaking",
		Response: &Staking{
			Name:        "fake_Name",
			UserAddress: "fake_UserAddress",
			Currency:    0,
			Amount:      3.14,
			State:       0,
		},
	},
	"/blast.v1.staking.StakingService/ListStakings": {
		Method: "/blast.v1.staking.StakingService/ListStakings",
		Response: &ListStakingsResponse{
			Stakings:      nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
	"/blast.v1.staking.StakingService/GetStakingTotalAmount": {
		Method: "/blast.v1.staking.StakingService/GetStakingTotalAmount",
		Response: &GetStakingTotalAmountResponse{
			TotalAmount: 3.14,
		},
	},
}

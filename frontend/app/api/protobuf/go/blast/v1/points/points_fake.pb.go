// Code generated by protoc-gen-fake. DO NOT EDIT.

package points

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for PointsService
var DefaultPointsServiceResponses = map[string]fake.Response{
	"/blast.v1.points.PointsService/GetPoints": {
		Method: "/blast.v1.points.PointsService/GetPoints",
		Response: &Points{
			Name:        "fake_Name",
			UserAddress: "fake_UserAddress",
			TotalPoints: 42,
			Referral:    nil,
			Staking:     nil,
			Activity:    nil,
			Bonus:       nil,
			Multipliers: nil,
		},
	},
	"/blast.v1.points.PointsService/ListPoints": {
		Method: "/blast.v1.points.PointsService/ListPoints",
		Response: &ListPointsResponse{
			Points:        nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
	"/blast.v1.points.PointsService/EarnStakingInterest": {
		Method: "/blast.v1.points.PointsService/EarnStakingInterest",
		Response: &Points{
			Name:        "fake_Name",
			UserAddress: "fake_UserAddress",
			TotalPoints: 42,
			Referral:    nil,
			Staking:     nil,
			Activity:    nil,
			Bonus:       nil,
			Multipliers: nil,
		},
	},
}

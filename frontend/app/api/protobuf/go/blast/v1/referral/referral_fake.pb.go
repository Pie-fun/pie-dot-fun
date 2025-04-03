// Code generated by protoc-gen-fake. DO NOT EDIT.

package referral

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for ReferralService
var DefaultReferralServiceResponses = map[string]fake.Response{
	"/blast.v1.referral.ReferralService/GetReferral": {
		Method: "/blast.v1.referral.ReferralService/GetReferral",
		Response: &Referral{
			Name:        "fake_Name",
			UserAddress: "fake_UserAddress",
			State:       0,
			Collection:  "fake_Collection",
		},
	},
	"/blast.v1.referral.ReferralService/ListReferrals": {
		Method: "/blast.v1.referral.ReferralService/ListReferrals",
		Response: &ListReferralsResponse{
			Referrals:     nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
	"/blast.v1.referral.ReferralService/ReferredBy": {
		Method: "/blast.v1.referral.ReferralService/ReferredBy",
		Response: &Referral{
			Name:        "fake_Name",
			UserAddress: "fake_UserAddress",
			State:       0,
			Collection:  "fake_Collection",
		},
	},
}

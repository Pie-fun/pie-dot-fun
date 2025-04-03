// Code generated by protoc-gen-fake. DO NOT EDIT.

package outpost

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for BankService
var DefaultBankServiceResponses = map[string]fake.Response{
	"/ethereum.v1.outpost.BankService/DepositStarTokenOptimistic": {
		Method: "/ethereum.v1.outpost.BankService/DepositStarTokenOptimistic",
		Response: &Account{
			Name:             "fake_Name",
			Address:          "fake_Address",
			Balance:          nil,
			LastTransactions: nil,
			CreateTime:       nil,
			UpdateTime:       nil,
		},
	},
	"/ethereum.v1.outpost.BankService/WithdrawStarTokenOptimistic": {
		Method: "/ethereum.v1.outpost.BankService/WithdrawStarTokenOptimistic",
		Response: &Account{
			Name:             "fake_Name",
			Address:          "fake_Address",
			Balance:          nil,
			LastTransactions: nil,
			CreateTime:       nil,
			UpdateTime:       nil,
		},
	},
	"/ethereum.v1.outpost.BankService/GetAccount": {
		Method: "/ethereum.v1.outpost.BankService/GetAccount",
		Response: &Account{
			Name:             "fake_Name",
			Address:          "fake_Address",
			Balance:          nil,
			LastTransactions: nil,
			CreateTime:       nil,
			UpdateTime:       nil,
		},
	},
	"/ethereum.v1.outpost.BankService/ListAccounts": {
		Method: "/ethereum.v1.outpost.BankService/ListAccounts",
		Response: &ListAccountsResponse{
			Accounts:      nil,
			NextPageToken: "fake_NextPageToken",
		},
	},
}

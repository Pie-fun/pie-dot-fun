// Code generated by protoc-gen-fake. DO NOT EDIT.

package wallet

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for WalletService
var DefaultWalletServiceResponses = map[string]fake.Response{
	"/blast.v1.wallet.WalletService/GetWallet": {
		Method: "/blast.v1.wallet.WalletService/GetWallet",
		Response: &Wallet{
			Address:     "fake_Address",
			TotalPoints: 42,
			EarlyAccess: nil,
			BlastBridge: nil,
			NftAssets:   nil,
			CryptoOg:    nil,
		},
	},
}

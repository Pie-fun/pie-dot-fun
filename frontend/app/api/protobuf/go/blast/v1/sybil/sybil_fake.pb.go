// Code generated by protoc-gen-fake. DO NOT EDIT.

package sybil

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for SybilService
var DefaultSybilServiceResponses = map[string]fake.Response{
	"/blast.v1.sybil.SybilService/GetSybil": {
		Method: "/blast.v1.sybil.SybilService/GetSybil",
		Response: &Sybil{
			Name:       "fake_Name",
			CreateTime: nil,
		},
	},
}

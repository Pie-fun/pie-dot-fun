// Code generated by protoc-gen-fake. DO NOT EDIT.

package game

import (
	"github.com/ao-labs/protoc-gen-fake/pkg/fake"
)

// Default responses for GameService
var DefaultGameServiceResponses = map[string]fake.Response{
	"/blast.v1.game.GameService/GetDailyPlayCount": {
		Method: "/blast.v1.game.GameService/GetDailyPlayCount",
		Response: &GetDailyPlayCountResponse{
			DailyPlayCount:      42,
			DailyPlayCountQuota: 42,
		},
	},
}

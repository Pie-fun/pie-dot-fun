// @generated by protoc-gen-es v1.6.0
// @generated from file pie-dot-fun/v1/chain/query.proto (package piedotfun.v1.chain, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message piedotfun.v1.chain.QueryFungibleTokenDecimalsRequest
 */
export const QueryFungibleTokenDecimalsRequest = proto3.makeMessageType(
  "piedotfun.v1.chain.QueryFungibleTokenDecimalsRequest",
  () => [
    { no: 1, name: "fungible_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message piedotfun.v1.chain.QueryFungibleTokenDecimalsResponse
 */
export const QueryFungibleTokenDecimalsResponse = proto3.makeMessageType(
  "piedotfun.v1.chain.QueryFungibleTokenDecimalsResponse",
  () => [
    { no: 1, name: "decimals", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message piedotfun.v1.chain.QueryFungibleTokenMetadataRequest
 */
export const QueryFungibleTokenMetadataRequest = proto3.makeMessageType(
  "piedotfun.v1.chain.QueryFungibleTokenMetadataRequest",
  () => [
    { no: 1, name: "fungible_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message piedotfun.v1.chain.QueryFungibleTokenMetadataResponse
 */
export const QueryFungibleTokenMetadataResponse = proto3.makeMessageType(
  "piedotfun.v1.chain.QueryFungibleTokenMetadataResponse",
  () => [
    { no: 1, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
  ],
);

/**
 * @generated from message piedotfun.v1.chain.Metadata
 */
export const Metadata = proto3.makeMessageType(
  "piedotfun.v1.chain.Metadata",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "one_liner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "website", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "twitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "telegram", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "discord", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


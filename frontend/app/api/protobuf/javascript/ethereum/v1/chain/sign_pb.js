// @generated by protoc-gen-es v1.6.0
// @generated from file ethereum/v1/chain/sign.proto (package ethereum.v1.chain, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message ethereum.v1.chain.SignWKeyMintRequest
 */
export const SignWKeyMintRequest = proto3.makeMessageType(
  "ethereum.v1.chain.SignWKeyMintRequest",
  () => [
    { no: 1, name: "eoa_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ethereum.v1.chain.SignKeyMintRequest
 */
export const SignKeyMintRequest = proto3.makeMessageType(
  "ethereum.v1.chain.SignKeyMintRequest",
  () => [
    { no: 1, name: "profile_contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "profile_token_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "spaceship_token_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "key_token_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "eth_contribution", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ethereum.v1.chain.SignScoreMintRequest
 */
export const SignScoreMintRequest = proto3.makeMessageType(
  "ethereum.v1.chain.SignScoreMintRequest",
  () => [
    { no: 1, name: "profile_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "score_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ethereum.v1.chain.SignMessageRequest
 */
export const SignMessageRequest = proto3.makeMessageType(
  "ethereum.v1.chain.SignMessageRequest",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ethereum.v1.chain.SignatureResponse
 */
export const SignatureResponse = proto3.makeMessageType(
  "ethereum.v1.chain.SignatureResponse",
  () => [
    { no: 1, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ethereum.v1.chain.SignatureTypedResponse
 */
export const SignatureTypedResponse = proto3.makeMessageType(
  "ethereum.v1.chain.SignatureTypedResponse",
  () => [
    { no: 1, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);


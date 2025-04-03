// @generated by protoc-gen-es v1.6.0
// @generated from file blast/v1/sybil/sybil.proto (package blast.v1.sybil, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GetSybilRequest
 *
 * @generated from message blast.v1.sybil.GetSybilRequest
 */
export declare class GetSybilRequest extends Message<GetSybilRequest> {
  /**
   * The resource name of the Sybil.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<GetSybilRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.sybil.GetSybilRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSybilRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSybilRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSybilRequest;

  static equals(a: GetSybilRequest | PlainMessage<GetSybilRequest> | undefined, b: GetSybilRequest | PlainMessage<GetSybilRequest> | undefined): boolean;
}

/**
 * @generated from message blast.v1.sybil.Sybil
 */
export declare class Sybil extends Message<Sybil> {
  /**
   * The resource name of the Sybil.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Sybil>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.sybil.Sybil";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sybil;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sybil;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sybil;

  static equals(a: Sybil | PlainMessage<Sybil> | undefined, b: Sybil | PlainMessage<Sybil> | undefined): boolean;
}


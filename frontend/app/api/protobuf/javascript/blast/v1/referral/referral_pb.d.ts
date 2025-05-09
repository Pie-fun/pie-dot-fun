// @generated by protoc-gen-es v1.6.0
// @generated from file blast/v1/referral/referral.proto (package blast.v1.referral, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum blast.v1.referral.ReferralState
 */
export declare enum ReferralState {
  /**
   * default value. this value is unused.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Referral code was deactivated.
   *
   * @generated from enum value: DEACTIVATED = 1;
   */
  DEACTIVATED = 1,

  /**
   * Referral code was activated.
   *
   * @generated from enum value: ACTIVATED = 2;
   */
  ACTIVATED = 2,
}

/**
 * ListReferralsRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 *
 * @generated from message blast.v1.referral.ListReferralsRequest
 */
export declare class ListReferralsRequest extends Message<ListReferralsRequest> {
  /**
   * The maximum number of users to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 rows will be returned.
   * The maximum value is 1024; values above 1024 will be coerced to 1024.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * Token of the page to retrieve. If not specified, the first
   * page of results will be returned. Use the value obtained from
   * `next_page_token` in the previous response in order to request
   * the next page of results.
   *
   * When paginating, all other parameters provided to `ListReferrals` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * user_address
   *   * Equal`
   * * state
   *   * Equal`
   *
   * Examples
   * * name="users/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442/referrals"
   * * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * state=ACTIVATED
   *
   * @generated from field: string filter = 3;
   */
  filter: string;

  constructor(data?: PartialMessage<ListReferralsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.ListReferralsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListReferralsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListReferralsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListReferralsRequest;

  static equals(a: ListReferralsRequest | PlainMessage<ListReferralsRequest> | undefined, b: ListReferralsRequest | PlainMessage<ListReferralsRequest> | undefined): boolean;
}

/**
 * ListReferralsResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 *
 * @generated from message blast.v1.referral.ListReferralsResponse
 */
export declare class ListReferralsResponse extends Message<ListReferralsResponse> {
  /**
   * The list of rows that matched the query.
   *
   * @generated from field: repeated blast.v1.referral.Referral referrals = 1;
   */
  referrals: Referral[];

  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListReferralsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.ListReferralsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListReferralsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListReferralsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListReferralsResponse;

  static equals(a: ListReferralsResponse | PlainMessage<ListReferralsResponse> | undefined, b: ListReferralsResponse | PlainMessage<ListReferralsResponse> | undefined): boolean;
}

/**
 * @generated from message blast.v1.referral.GetReferralRequest
 */
export declare class GetReferralRequest extends Message<GetReferralRequest> {
  /**
   * The name of the referral to retrieve.
   * Format: users/{address}/referrals
   *
   * @generated from field: string referral = 1;
   */
  referral: string;

  constructor(data?: PartialMessage<GetReferralRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.GetReferralRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReferralRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReferralRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReferralRequest;

  static equals(a: GetReferralRequest | PlainMessage<GetReferralRequest> | undefined, b: GetReferralRequest | PlainMessage<GetReferralRequest> | undefined): boolean;
}

/**
 * RefferedByRequest
 *
 * @generated from message blast.v1.referral.RefferedByRequest
 */
export declare class RefferedByRequest extends Message<RefferedByRequest> {
  /**
   * The name of the referral to retrieve.
   * Format: users/{address}/referrals
   *
   * @generated from field: string referral = 1;
   */
  referral: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;

  constructor(data?: PartialMessage<RefferedByRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.RefferedByRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefferedByRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefferedByRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefferedByRequest;

  static equals(a: RefferedByRequest | PlainMessage<RefferedByRequest> | undefined, b: RefferedByRequest | PlainMessage<RefferedByRequest> | undefined): boolean;
}

/**
 * @generated from message blast.v1.referral.Referral
 */
export declare class Referral extends Message<Referral> {
  /**
   * The resource name of the Referral.
   * Format: users/{address}/referrals
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string user_address = 2;
   */
  userAddress: string;

  /**
   * @generated from field: blast.v1.referral.ReferralState state = 3;
   */
  state: ReferralState;

  /**
   * @generated from field: string collection = 4;
   */
  collection: string;

  /**
   * @generated from field: optional blast.v1.referral.ReferredBy referred_by = 5;
   */
  referredBy?: ReferredBy;

  /**
   * @generated from field: optional blast.v1.referral.Referred referred = 6;
   */
  referred?: Referred;

  constructor(data?: PartialMessage<Referral>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.Referral";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Referral;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Referral;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Referral;

  static equals(a: Referral | PlainMessage<Referral> | undefined, b: Referral | PlainMessage<Referral> | undefined): boolean;
}

/**
 * @generated from message blast.v1.referral.ReferredBy
 */
export declare class ReferredBy extends Message<ReferredBy> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * @generated from field: string user_address = 2;
   */
  userAddress: string;

  constructor(data?: PartialMessage<ReferredBy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.ReferredBy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferredBy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferredBy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferredBy;

  static equals(a: ReferredBy | PlainMessage<ReferredBy> | undefined, b: ReferredBy | PlainMessage<ReferredBy> | undefined): boolean;
}

/**
 * @generated from message blast.v1.referral.Referred
 */
export declare class Referred extends Message<Referred> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * @generated from field: uint32 same_collection = 2;
   */
  sameCollection: number;

  /**
   * @generated from field: uint32 other_collection = 3;
   */
  otherCollection: number;

  constructor(data?: PartialMessage<Referred>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.Referred";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Referred;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Referred;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Referred;

  static equals(a: Referred | PlainMessage<Referred> | undefined, b: Referred | PlainMessage<Referred> | undefined): boolean;
}

/**
 * @generated from message blast.v1.referral.Reference
 */
export declare class Reference extends Message<Reference> {
  /**
   * @generated from field: string referrer = 1;
   */
  referrer: string;

  /**
   * @generated from field: string referred_by = 2;
   */
  referredBy: string;

  /**
   * @generated from field: bool same_collection = 3;
   */
  sameCollection: boolean;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Reference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "blast.v1.referral.Reference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reference;

  static equals(a: Reference | PlainMessage<Reference> | undefined, b: Reference | PlainMessage<Reference> | undefined): boolean;
}


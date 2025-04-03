// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/points/points.proto

/* eslint-disable */
import { type User } from "../user/user";

export const protobufPackage = "blast.v1.points";

/** PointsType 을 유저의 행동군에 따라 2차 그룹핑함. */
export enum PointsTypeBehaviorGroup {
  /** GROUP_UNSPECIFIED - default value. this value is unused. */
  GROUP_UNSPECIFIED = "GROUP_UNSPECIFIED",
  REFERRAL = "REFERRAL",
  STAKING = "STAKING",
  ACTIVITY = "ACTIVITY",
  BONUS = "BONUS",
}

export enum PointsType {
  /** TYPE_UNKNOWN - default value. this value is unused. */
  TYPE_UNKNOWN = "TYPE_UNKNOWN",
  WELCOME = "WELCOME",
  REFERRAL_REFFERED_BY = "REFERRAL_REFFERED_BY",
  REFERRAL_REFERRER_BONUS = "REFERRAL_REFERRER_BONUS",
  STAKING_INTEREST = "STAKING_INTEREST",
  ACTIVITY_DAILY_CHECKIN = "ACTIVITY_DAILY_CHECKIN",
  ACTIVITY_COMMUNITY_EVENT_WINNER = "ACTIVITY_COMMUNITY_EVENT_WINNER",
  ACTIVITY_COMMUNITY_CONTRIBUTION = "ACTIVITY_COMMUNITY_CONTRIBUTION",
  ACTIVITY_GM = "ACTIVITY_GM",
  ACTIVITY_SQUARE_BEBOB_SUMMON = "ACTIVITY_SQUARE_BEBOB_SUMMON",
  ACTIVITY_SQUARE_BEBOB_ATTACK = "ACTIVITY_SQUARE_BEBOB_ATTACK",
  ACTIVITY_SCORE_UPLOAD = "ACTIVITY_SCORE_UPLOAD",
  ACTIVITY_SCORE_LEADERBOARD_WINNER = "ACTIVITY_SCORE_LEADERBOARD_WINNER",
  ACTIVITY_SCORE_LEADERBOARD_RAFFLE = "ACTIVITY_SCORE_LEADERBOARD_RAFFLE",
  BONUS_SQUARE_OWNER = "BONUS_SQUARE_OWNER",
  BONUS_SQUARE_MEMBER = "BONUS_SQUARE_MEMBER",
}

export enum MultiplierType {
  /** MULTIPLIER_TYPE_UNSPECIFIED - default value. this value is unused. */
  MULTIPLIER_TYPE_UNSPECIFIED = "MULTIPLIER_TYPE_UNSPECIFIED",
  SQUARE_OWNER_BONUS = "SQUARE_OWNER_BONUS",
  SQUARE_MULTIPLIER = "SQUARE_MULTIPLIER",
  SQUARE_PFP_COLLECTION_BOOST = "SQUARE_PFP_COLLECTION_BOOST",
}

export interface GetPointsRequest {
  /**
   * The name of the points to retrieve.
   * Format: users/{address}/points
   */
  points: string;
}

export interface ListPointsRequest {
  /**
   * The maximum number of points to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 rows will be returned.
   * The maximum value is 1024; values above 1024 will be coerced to 1024.
   */
  pageSize: number;
  /**
   * Token of the page to retrieve. If not specified, the first
   * page of results will be returned. Use the value obtained from
   * `next_page_token` in the previous response in order to request
   * the next page of results.
   *
   * When paginating, all other parameters provided to `ListPoints` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `=`
   * * user_address
   *   * `=`
   *
   * Examples
   * * name="points/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * user_address="0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   */
  filter: string;
  /**
   * One or more fields to compare and use to sort the output. (optional)
   * Default order for a field is descending by id
   * To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
   *
   * Reference
   * * https://google.aip.dev/132#ordering.
   *
   * Supported Fields
   * * "id", "user_address", "points"
   *
   * Examples
   * * order_by=points desc
   */
  orderBy: string;
}

/**
 * ListPointsResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListPointsResponse {
  /** The list of rows that matched the query. */
  points: Points[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface EarnStakingInterestRequest {
  /**
   * The name of the points to retrieve.
   * Format: users/{address}/points
   */
  points: string;
}

export interface ListPointsReferralBonusesRequest {
  /**
   * The maximum number of points to return. The service may return fewer than
   * this value.
   * If unspecified, at most 10 rows will be returned.
   * The maximum value is 1024; values above 1024 will be coerced to 1024.
   */
  pageSize: number;
  /**
   * Token of the page to retrieve. If not specified, the first
   * page of results will be returned. Use the value obtained from
   * `next_page_token` in the previous response in order to request
   * the next page of results.
   *
   * When paginating, all other parameters provided to `ListPointsReferralBonuses` must match
   * the call that provided the page token.
   */
  pageToken: string;
}

/**
 * ListPointsReferralBonusResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListPointsReferralBonusesResponse {
  /** The list of rows that matched the query. */
  referralBonuses: PointsReferralBonus[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface Points {
  /**
   * The resource name of the Points.
   * Format: users/{address}/points
   */
  name: string;
  /**  */
  userAddress: string;
  /**  */
  totalPoints: number;
  referral: Referral | undefined;
  staking: Staking | undefined;
  activity: Activity | undefined;
  bonus: Bonus | undefined;
  multipliers: Multiplier[];
}

export interface Referral {
  referredByPoints: number;
  referredPoints: number;
  points: number;
}

export interface Staking {
  points: number;
}

export interface Activity {
  points: number;
  dailyCheckin: number;
  gm: number;
}

export interface Bonus {
  /** Owner bonus */
  squareOwner: number;
}

export interface Multiplier {
  type: MultiplierType;
  percentage: number;
}

export interface PointsHistory {
  userAddress: string;
  amount: number;
  pointsType: PointsType;
  pointsTypeBehaviorGroup: PointsTypeBehaviorGroup;
}

export interface PointsReferralBonus {
  referred: User | undefined;
  sameCollection: boolean;
  amount: number;
}

/** PointsService contains the function to interact with the Points of the spacebar */
export interface PointsService {
  /** GetPoints will return Points. */
  GetPoints(request: GetPointsRequest): Promise<Points>;
  /**
   * ListPoints will return Points.
   * reads across collections, reference: https://google.aip.dev/159
   */
  ListPoints(request: ListPointsRequest): Promise<ListPointsResponse>;
  /**
   * EarnStakingInterestPoints will earn Staking Interest Points.
   * This function will be called by internal service and not open to the public.
   */
  EarnStakingInterest(request: EarnStakingInterestRequest): Promise<Points>;
}

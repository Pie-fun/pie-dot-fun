// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/aggregate/aggregate.proto

/* eslint-disable */
import { type Activity, type Bonus, type Multiplier, type Referral, type Staking } from "../points/points";
import {
  type PFPBoost,
  type Private,
  type Public,
  type SquareJoinType,
  type SquareMemberRankType,
  type SquareMemberType,
  type SquareNFT,
  type SquareState,
  type SquareView,
  type TokenGated,
} from "../square/square";
import { type User } from "../user/user";

export const protobufPackage = "blast.v1.aggregate";

export interface ListPointsAggregateRequest {
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

/** ListPointsResponse */
export interface ListPointsAggregateResponse {
  /** The list of rows that matched the query. */
  pointsAggregate: PointsAggregate[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface PointsAggregate {
  /**
   * The resource name of the Points.
   * Format: users/{address}/points
   */
  name: string;
  /**  */
  user:
    | User
    | undefined;
  /**  */
  totalPoints: number;
  referral: Referral | undefined;
  staking: Staking | undefined;
  activity: Activity | undefined;
  bonus: Bonus | undefined;
  multipliers: Multiplier[];
}

export interface ListSquareMemberRankingsAggregateRequest {
  /**
   * The name of the square to retrieve.
   * Format: squares/{token_id}
   */
  square: string;
  rankType: SquareMemberRankType;
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
}

export interface ListSquareMemberRankingsAggregateResponse {
  /** The list of rows that matched the query. */
  rankingsAggregate: SquareMemberRankingAggregate[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface SquareMemberRankingAggregate {
  rank: number;
  points: number;
  member: SquareMemberAggregate | undefined;
}

export interface SquareMemberAggregate {
  /**
   * The resource name of the Square.
   * Format: squares/{square_token_id}/members/{user_address}
   */
  name: string;
  /** The token ID of the Square. */
  squareTokenId: string;
  /** The user address of the member. */
  user:
    | User
    | undefined;
  /** The member type of the square. */
  type: SquareMemberType;
  totalPoints: number;
  /** RFC3339 format e.g. "2006-01-02T15:04:05Z07:00" */
  joinTime: string | undefined;
}

/**  */
export interface GetSquareAggregateRequest {
  /**
   * The name of the square to retrieve.
   * Format: squares/{token_id}
   */
  square: string;
  /** The view of the square. */
  view: SquareView;
}

export interface SquareAggregate {
  /**
   * The resource name of the Square.
   * Format: squares/{token_id}
   */
  name: string;
  /** ERC721 token ID of the Square. */
  tokenId: string;
  /**  */
  owner:
    | User
    | undefined;
  /**
   * The created time of Square.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime: string | undefined;
  state: SquareState;
  /**
   * The signature id of the Square.
   * This field is used for multi signature when minting the Square NFT.
   */
  signatureId: string;
  /** The join type of the square. */
  joinType: SquareJoinType;
  join?:
    | { $case: "public"; public: Public }
    | { $case: "private"; private: Private }
    | { $case: "tokenGated"; tokenGated: TokenGated }
    | undefined;
  /** The display name of the square. */
  displayName: string;
  /** The introduction of the square. */
  introduction: string;
  /** The minimum required staking amount to join the square in ETH. */
  minimumStakingAmountToJoinInEth: number;
  /** The total staking amount of all members in the square in ETH. */
  totalMembersStakingAmountInEth: number;
  /** The multiplier of the square. */
  multiplier: number;
  /** The all-time total points of the square. */
  totalPoints: number;
  /** The total capacity of the square. */
  capacity: number;
  /** The current number of members in the square. */
  occupancy: number;
  /** The occupancy of the square including join pending members. */
  occupancyIncludingPending: number;
  /** The PFP boost of the square. */
  pfpBoost:
    | PFPBoost
    | undefined;
  /** The NFT of the square. */
  nft:
    | SquareNFT
    | undefined;
  /**  */
  spirits: number;
  /**  */
  stars: number;
  totalSpirits: number;
  weeklySpirits: number;
}

export interface ListSquaresAggregateRequest {
  /**
   * The maximum number of squares to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListSquares` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `=`
   * * token_id
   *   * `=`
   * * signature_id
   *   * `=`
   * * state
   *   * `=`
   * * join_type
   *   * `=`
   * * display_name
   *   * `=`
   *
   * Examples
   * * name="squares/10"
   * * token_id="10"
   * * signature_id="3ed92b99-00be-4417-b69f-dca2d8d14c7f"
   * * join_type=TOKEN_GATED
   * * display_name="SQUARE"
   */
  filter: string;
  /**
   * Optional. One or more fields to compare and use to sort the output.
   * Default order for a field is descending by id
   * To specify ascending or descending order, append " asc" or " desc" to the field name. If not specified, the order is ascending.
   *
   * Reference
   * * https://google.aip.dev/132#ordering.
   *
   * Supported Fields
   * * "token_id", "total_points", "spirits"
   *
   * Examples
   * * order_by=token_id asc
   * * order_by=total_points desc
   * * order_by=spirits asc
   */
  orderBy: string;
}

/** ListSquaresAggregateResponse */
export interface ListSquaresAggregateResponse {
  /** The list of rows that matched the query. */
  squaresAggregate: SquareAggregate[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

/** AggregateService contains the method to read full aggregate resources. */
export interface AggregateService {
  /** ListPointsAggregate returns the PointsAggregate for the given request. */
  ListPointsAggregate(request: ListPointsAggregateRequest): Promise<ListPointsAggregateResponse>;
  /** ListSquareMemberRankingsAggregate returns the SquareMemberRankingsAggregate for the given request. */
  ListSquareMemberRankingsAggregate(
    request: ListSquareMemberRankingsAggregateRequest,
  ): Promise<ListSquareMemberRankingsAggregateResponse>;
  /** GetSquareAggregate returns the GetSquareAggregate for the given request. */
  GetSquareAggregate(request: GetSquareAggregateRequest): Promise<SquareAggregate>;
  /** ListSquaresAggregate returns the ListSquaresAggregate for the given request. */
  ListSquaresAggregate(request: ListSquaresAggregateRequest): Promise<ListSquaresAggregateResponse>;
}

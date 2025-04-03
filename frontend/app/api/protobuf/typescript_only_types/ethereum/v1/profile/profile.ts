// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: ethereum/v1/profile/profile.proto

/* eslint-disable */
import { type ChainType } from "../outpost/nft";
import { type MySpace } from "./my_space";
import { type SNSType } from "./sns_connection";

export const protobufPackage = "ethereum.v1.profile";

/** The state of profile */
export enum ProfileState {
  /** STATE_UNSPECIFIED - default value. this value is unused. */
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  /**
   * CREATED - Profile was firstly created but not started to rent base spaceship.
   * This state is very transitory state because next transaction will change it to PROTOSHIP_MINTED or OWNERSHIP_ACQUIRED state immediately.
   */
  CREATED = "CREATED",
  /** PROTOSHIP_MINTED - Profile was firstly created with base spaceship rental. */
  PROTOSHIP_MINTED = "PROTOSHIP_MINTED",
  /** PROTOSHIP_BURNED - Profile was created with base spaceship rental but failed to acquire */
  PROTOSHIP_BURNED = "PROTOSHIP_BURNED",
  /** OWNERSHIP_ACQUIRED - Profile has acquired ownership. */
  OWNERSHIP_ACQUIRED = "OWNERSHIP_ACQUIRED",
}

/**
 * ProfileView enumeration represents the view of a profile.
 * The view controls the amount of information returned.
 * The BASIC view omits the following fields:
 * star_balance, sns_connections, gm_stats
 *
 * Reference
 * https://cloud.google.com/apis/design/design_patterns#list_flattening and
 * https://google.aip.dev/157
 */
export enum ProfileView {
  /**
   * Profile_VIEW_UNSPECIFIED - The default / unset value.
   * The API will default to the FULL view.
   */
  Profile_VIEW_UNSPECIFIED = "Profile_VIEW_UNSPECIFIED",
  /**
   * BASIC - Include only basic info.
   * Do not include `nft`, `star_balance`, `sns_connections`, `gm_stats`
   */
  BASIC = "BASIC",
  /**
   * FULL - Include everything.
   * This is the default value for both ListProfiles and GetProfile.
   */
  FULL = "FULL",
}

/**
 * ListProfilesRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListProfilesRequest {
  /**
   * The maximum number of profiles to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListProfiles` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * name
   *   * `Equal`
   * * create_time
   *   * `>`
   * * identified
   *   * Equal`
   *
   * Examples
   * * name="profiles/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * create_time>"2020-04-21T11:30:00Z"
   * * identifed
   */
  filter: string;
  /**
   * Optional. The view to return.
   * Defaults to FULL if not set.
   *
   * ProfileView enumeration represents the view of a profile.
   * The view controls the amount of information returned.
   * The BASIC view omits the following fields:
   * star_balance, sns_connections, gm_stats
   *
   * Reference
   * https://cloud.google.com/apis/design/design_patterns#list_flattening and
   * https://google.aip.dev/157
   */
  view: ProfileView;
}

/**
 * ListProfilesResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListProfilesResponse {
  /** The list of rows that matched the query. */
  profiles: Profile[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

/** GetProfileRequest. */
export interface GetProfileRequest {
  /**
   * The name of the profile to retrieve.
   * Format: profiles/{address}
   * Alias "profiles/me" is supported.
   */
  profile: string;
  /**
   * Optional. The view to return.
   * Defaults to FULL if not set.
   *
   * ProfileView enumeration represents the view of a profile.
   * The view controls the amount of information returned.
   * The BASIC view omits the following fields:
   * star_balance, sns_connections, gm_stats
   *
   * Reference
   * https://cloud.google.com/apis/design/design_patterns#list_flattening and
   * https://google.aip.dev/157
   */
  view: ProfileView;
}

/** UpdateProfileRequest. */
export interface UpdateProfileRequest {
  /**
   * Profile to update
   * Format: profiles/{address}
   */
  profile:
    | Profile
    | undefined;
  /**
   * Field mask that specifies the fields to update.
   * If no field mask is set, all fields will be updated.
   * Wildcards are supported.
   * Examples
   * ["*"]
   * ["nickname"]
   * ["nickname", "nft"]
   */
  updateMask: string[] | undefined;
}

/** CompleteTutorialRequest message represents a request to complete a tutorial. */
export interface CompleteTutorialRequest {
  /**
   * The profile to complete the tutorial for.
   * Format: profiles/{address}
   * Resource name alias "profiles/me" is supported.
   */
  profile: string;
}

/** CompleteTutorialResponse message represents a response from completing a tutorial. */
export interface CompleteTutorialResponse {
  /** The ID of the completed tutorial. */
  tutorialId: string;
  /** The timestamp of when the tutorial was completed. */
  completedTimestamp: string | undefined;
}

/** GetMySpaceRequest message represents the request to list my space assets. */
export interface GetMySpaceRequest {
  /**
   * The profile whose my space assets should be listed.
   * Format: profiles/{address}
   */
  profile: string;
}

/**
 * UpdateMySpaceRequest message represents the request to update my space assets.
 * There is no update_mask for this request because always upate all my space assets.
 */
export interface UpdateMySpaceRequest {
  /**
   * The profile whose my space assets should be updated.
   * Format: profiles/{address}
   */
  profile: string;
  mySpace: MySpace | undefined;
}

export interface GetProfileDailyPlayCountRequest {
  /** Format: profiles/{address} */
  profile: string;
}

export interface GetProfileDailyPlayCountResponse {
  /** The daily play count of the profile. */
  dailyPlayCount: number;
}

export interface IncrementProfileDailyPlayCountRequest {
  /** Format: profiles/{address} */
  profile: string;
}

export interface IncrementProfileDailyPlayCountResponse {
  /** The daily play count of the profile. */
  dailyPlayCount: number;
}

export interface ConnectSNSRequest {
  /**
   * The profile to connect the SNS.
   * Format: profiles/{address}
   * Resource name alias "profiles/me" is supported.
   */
  profile: string;
  /** The SNS type to connect. */
  snsType: SNSType;
  /**
   * The access token for the SNS API.
   * NOTE: This field can be changed depending on the implementation or SNS type.
   */
  accessToken: string;
  /** The access token secret for the SNS API. */
  accessTokenSecret: string;
}

export interface Profile {
  /**
   * The resource name of the Profile.
   * Format: profiles/{address}
   */
  name: string;
  /** EIP-6551 TBA Address of the Profile NFT. */
  address: string;
  /**
   * The created time of Profile.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime:
    | string
    | undefined;
  /**
   * The last updated time of Profile.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  updateTime:
    | string
    | undefined;
  /** The number of Profile. */
  number: number;
  /** The state of Profile */
  state: ProfileState;
  /** The current pfp nft of Profile. */
  nft:
    | ProfileNFT
    | undefined;
  /** The star account of Profile */
  starAccount:
    | StarAccount
    | undefined;
  /**
   * The ens of profile
   * This field is optional
   */
  ens?:
    | string
    | undefined;
  /**
   * The nickname of Profile.
   * This field is optional.
   */
  nickname?:
    | string
    | undefined;
  /** Whether Profile finished tutorial or not */
  isTutorialDone: boolean;
  /** Whether Profile is identified or not */
  isIdentified: boolean;
}

/** 다양한 tutorial 이 생길 예정 */
export interface Tutorial {
  /** whether tutorial is done or not */
  isDone: boolean;
  /** The completed time of tutorial. */
  completeTime: string | undefined;
}

/** StarAccount message represents a balance of stars for a profile. */
export interface StarAccount {
  /** The current balance of stars. */
  balance: number;
  /** The cumulative total of stars. */
  cumulativeTotal: number;
}

/** GMStatsSlim message represents the statistics for a gm count. */
export interface GMStatsSlim {
  /** The number of messages sent. */
  sentCount: number;
  /** The number of messages received. */
  receivedCount: number;
}

/** ProfileNFT message represents an Profile's NFT. */
export interface ProfileNFT {
  /**
   * The resource name of the NFT asset.
   * Format: nfts/{chain_type}/{contract_address}/{token_id}
   * Examples: nfts/ETHEREUM/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326/1
   */
  name: string;
  /** Token ID of the NFT asset. */
  tokenId: string;
  /** Token Name of the NFT asset. */
  tokenName: string;
  /**
   * The URI of the NFT asset's image.
   * This URI is cached version of image original URI
   * e.g. "https://cdn.spacebar.xyz/nfts/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/609"
   */
  imageUri: string;
  /**
   * The contract that owns the NFT asset.
   * Output only.
   */
  contract: ProfileNFTContract | undefined;
}

/** NFTContract message represents an NFT contract. */
export interface ProfileNFTContract {
  /** The address of the NFT contract. */
  address: string;
  /** The name of the NFT contract schema. */
  displayName: string;
  /** The symbol of the NFT contract. */
  symbol: string;
  /** The blockchain on which the NFT contract resides. */
  chain: ChainType;
  /** The URI of the contract image */
  imageUri: string;
}

/** ProfileService contains the function to interact with the Profile of the spacebar */
export interface ProfileService {
  /** ListProfiles will return Profiles. */
  ListProfiles(request: ListProfilesRequest): Promise<ListProfilesResponse>;
  /** GetProfile will return Profile. */
  GetProfile(request: GetProfileRequest): Promise<Profile>;
  /** UpdateProfile update Profile. */
  UpdateProfile(request: UpdateProfileRequest): Promise<Profile>;
  /** GetMySpace will return the Profile's MySpace. */
  GetMySpace(request: GetMySpaceRequest): Promise<MySpace>;
  /** UpdateMySpace update Profile's MySpace. */
  UpdateMySpace(request: UpdateMySpaceRequest): Promise<MySpace>;
  /** GetProfileDailyPlayCount will return the Profile's daily play count. */
  GetProfileDailyPlayCount(request: GetProfileDailyPlayCountRequest): Promise<GetProfileDailyPlayCountResponse>;
  /** IncrementProfileDailyPlayCount will return the Profile's daily play count. */
  IncrementProfileDailyPlayCount(
    request: IncrementProfileDailyPlayCountRequest,
  ): Promise<IncrementProfileDailyPlayCountResponse>;
}

// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/spaceship/spaceship.proto

/* eslint-disable */

export const protobufPackage = "blast.v1.spaceship";

/** The state of spaceship */
export enum SpaceshipType {
  /** TYPE_UNSPECIFIED - default value. this value is unused. */
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  /** PROTOSHIP -  */
  PROTOSHIP = "PROTOSHIP",
  /** OWNERSHIP -  */
  OWNERSHIP = "OWNERSHIP",
}

export interface ListSpaceshipsRequest {
  /**
   * The maximum number of spaceships to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListSpaceships` must match
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
   * * name="spaceships/0x6F11EF2c07f2E381CbE514198DdE87A0c0a19442"
   * * create_time>"2020-04-21T11:30:00Z"
   * * identifed
   */
  filter: string;
}

export interface GetSpaceshipRequest {
  /**
   * The name of the spaceship to retrieve.
   * Format: spaceships/{address}
   * Alias "spaceships/me" is supported.
   */
  spaceship: string;
}

/**
 * ListSpaceshipsResponse
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListSpaceshipsResponse {
  /** The list of rows that matched the query. */
  spaceships: Spaceship[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface UpdateSpaceshipRequest {
  /**
   * Spaceship to update
   * Format: spaceships/{address}
   */
  spaceship:
    | Spaceship
    | undefined;
  /**
   * Field mask that specifies the fields to update.
   * If no field mask is set, all fields will be updated.
   * Wildcards are supported.
   * Examples
   * ["*"]
   * ["nickname"]
   */
  updateMask: string[] | undefined;
}

export interface Spaceship {
  /**
   * The resource name of the Spaceship.
   * Format: spaceships/{address}
   */
  name: string;
  /** EIP-6551 TBA Address of the Spaceship NFT. */
  address: string;
  /**  */
  ownerAddress: string;
  /**  */
  type: SpaceshipType;
  /**
   * The created time of Spaceship.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   */
  createTime:
    | string
    | undefined;
  /** The updated time of Spaceship. */
  nft: SpaceshipNFT | undefined;
}

export interface SpaceshipNFT {
  /** Token ID of the NFT asset. */
  tokenId: string;
  /**
   * The URI of the NFT asset's image.
   * This URI is cached version of image original URI
   * e.g. "https://cdn.spacebar.xyz/nfts/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/609"
   */
  imageUri: string;
  /** The URI of the NFT asset's metadata. */
  metadataUri: string;
}

/** SpaceshipService contains the function to interact with the Spaceship of the spacebar */
export interface SpaceshipService {
  GetSpaceship(request: GetSpaceshipRequest): Promise<Spaceship>;
}

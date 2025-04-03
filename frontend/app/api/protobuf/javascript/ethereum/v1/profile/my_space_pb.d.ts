// @generated by protoc-gen-es v1.6.0
// @generated from file ethereum/v1/profile/my_space.proto (package ethereum.v1.profile, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MySpace message represents a profile's MySpace.
 *
 * @generated from message ethereum.v1.profile.MySpace
 */
export declare class MySpace extends Message<MySpace> {
  /**
   * The name of Profile of the MySpace
   *
   * @generated from field: string profile = 1;
   */
  profile: string;

  /**
   * The profile's assets.
   *
   * @generated from field: ethereum.v1.profile.Assets assets = 2;
   */
  assets?: Assets;

  /**
   * The profile's StarDoodles.
   *
   * @generated from field: ethereum.v1.profile.StarDoodles star_doodles = 3;
   */
  starDoodles?: StarDoodles;

  constructor(data?: PartialMessage<MySpace>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.MySpace";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MySpace;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MySpace;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MySpace;

  static equals(a: MySpace | PlainMessage<MySpace> | undefined, b: MySpace | PlainMessage<MySpace> | undefined): boolean;
}

/**
 * Assets message represents a profile's assets.
 *
 * @generated from message ethereum.v1.profile.Assets
 */
export declare class Assets extends Message<Assets> {
  /**
   * The profile's Spaceships assets.
   *
   * @generated from field: repeated ethereum.v1.profile.SpaceshipAsset spaceships = 1;
   */
  spaceships: SpaceshipAsset[];

  /**
   * The profile's Badges assets.
   *
   * @generated from field: repeated ethereum.v1.profile.BadgeAsset badges = 2;
   */
  badges: BadgeAsset[];

  /**
   * The profile's Scores assets.
   *
   * @generated from field: repeated ethereum.v1.profile.ScoreAsset scores = 3;
   */
  scores: ScoreAsset[];

  /**
   * The profile's Alphabets assets.
   *
   * @generated from field: repeated ethereum.v1.profile.AlphabetAsset alphabets = 4;
   */
  alphabets: AlphabetAsset[];

  /**
   * The profile's Blocks assets.
   *
   * @generated from field: repeated ethereum.v1.profile.BlockAsset blocks = 5;
   */
  blocks: BlockAsset[];

  constructor(data?: PartialMessage<Assets>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.Assets";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Assets;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Assets;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Assets;

  static equals(a: Assets | PlainMessage<Assets> | undefined, b: Assets | PlainMessage<Assets> | undefined): boolean;
}

/**
 * SpaceshipReference message represents a Spaceship.
 *
 * @generated from message ethereum.v1.profile.SpaceshipReference
 */
export declare class SpaceshipReference extends Message<SpaceshipReference> {
  /**
   * The resource name of the Spaceship.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The nickname of the Spaceship.
   *
   * @generated from field: string nickname = 2;
   */
  nickname: string;

  /**
   * The token_id of Spaceship NFT.
   *
   * @generated from field: string token_id = 3;
   */
  tokenId: string;

  /**
   * The image uri of Spaceship NFT.
   *
   * @generated from field: string image_uri = 4;
   */
  imageUri: string;

  constructor(data?: PartialMessage<SpaceshipReference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.SpaceshipReference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpaceshipReference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpaceshipReference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpaceshipReference;

  static equals(a: SpaceshipReference | PlainMessage<SpaceshipReference> | undefined, b: SpaceshipReference | PlainMessage<SpaceshipReference> | undefined): boolean;
}

/**
 * BadgeReference message represents a Badge.
 *
 * @generated from message ethereum.v1.profile.BadgeReference
 */
export declare class BadgeReference extends Message<BadgeReference> {
  /**
   * The resource name of the Badge.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<BadgeReference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.BadgeReference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BadgeReference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BadgeReference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BadgeReference;

  static equals(a: BadgeReference | PlainMessage<BadgeReference> | undefined, b: BadgeReference | PlainMessage<BadgeReference> | undefined): boolean;
}

/**
 * ScoreReference message represents a Score.
 *
 * @generated from message ethereum.v1.profile.ScoreReference
 */
export declare class ScoreReference extends Message<ScoreReference> {
  /**
   * The resource name of the Score.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The token_id of Score NFT.
   *
   * @generated from field: string token_id = 2;
   */
  tokenId: string;

  /**
   * The image uri of Score NFT.
   *
   * @generated from field: string image_uri = 3;
   */
  imageUri: string;

  constructor(data?: PartialMessage<ScoreReference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.ScoreReference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScoreReference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScoreReference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScoreReference;

  static equals(a: ScoreReference | PlainMessage<ScoreReference> | undefined, b: ScoreReference | PlainMessage<ScoreReference> | undefined): boolean;
}

/**
 * SpaceshipAsset message represents a Spaceship asset.
 *
 * @generated from message ethereum.v1.profile.SpaceshipAsset
 */
export declare class SpaceshipAsset extends Message<SpaceshipAsset> {
  /**
   * The ID of the Spaceship asset.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * The URI of the Spaceship asset image.
   *
   * @generated from field: string image_uri = 2;
   */
  imageUri: string;

  /**
   * The position of the Spaceship asset.
   *
   * @generated from field: ethereum.v1.profile.Position position = 3;
   */
  position?: Position;

  /**
   * The timestamp of the Spaceship asset creation.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * The timestamp of the Spaceship asset update.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  /**
   * The reference to the Spaceship.
   *
   * @generated from field: ethereum.v1.profile.SpaceshipReference reference = 6;
   */
  reference?: SpaceshipReference;

  constructor(data?: PartialMessage<SpaceshipAsset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.SpaceshipAsset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpaceshipAsset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpaceshipAsset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpaceshipAsset;

  static equals(a: SpaceshipAsset | PlainMessage<SpaceshipAsset> | undefined, b: SpaceshipAsset | PlainMessage<SpaceshipAsset> | undefined): boolean;
}

/**
 * BadgeAsset message represents a Badge asset.
 *
 * @generated from message ethereum.v1.profile.BadgeAsset
 */
export declare class BadgeAsset extends Message<BadgeAsset> {
  /**
   * The ID of the Badge asset.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * The URI of the Badge asset image.
   *
   * @generated from field: string image_uri = 2;
   */
  imageUri: string;

  /**
   * The position of the Badge asset.
   *
   * @generated from field: ethereum.v1.profile.Position position = 3;
   */
  position?: Position;

  /**
   * The timestamp of the Badge asset creation.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * The timestamp of the Badge asset update.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  /**
   * The reference to the Badge.
   *
   * @generated from field: ethereum.v1.profile.BadgeReference reference = 6;
   */
  reference?: BadgeReference;

  constructor(data?: PartialMessage<BadgeAsset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.BadgeAsset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BadgeAsset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BadgeAsset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BadgeAsset;

  static equals(a: BadgeAsset | PlainMessage<BadgeAsset> | undefined, b: BadgeAsset | PlainMessage<BadgeAsset> | undefined): boolean;
}

/**
 * ScoreAsset message represents a Score asset.
 *
 * @generated from message ethereum.v1.profile.ScoreAsset
 */
export declare class ScoreAsset extends Message<ScoreAsset> {
  /**
   * The ID of the Score asset.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * The URI of the Score asset image.
   *
   * @generated from field: string image_uri = 2;
   */
  imageUri: string;

  /**
   * The position of the Score asset.
   *
   * @generated from field: ethereum.v1.profile.Position position = 3;
   */
  position?: Position;

  /**
   * The timestamp of the Score asset creation.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * The timestamp of the Score asset update.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  /**
   * The reference to the Score.
   *
   * @generated from field: ethereum.v1.profile.ScoreReference reference = 6;
   */
  reference?: ScoreReference;

  constructor(data?: PartialMessage<ScoreAsset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.ScoreAsset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScoreAsset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScoreAsset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScoreAsset;

  static equals(a: ScoreAsset | PlainMessage<ScoreAsset> | undefined, b: ScoreAsset | PlainMessage<ScoreAsset> | undefined): boolean;
}

/**
 * AlphabetAsset message represents an Alphabet asset.
 *
 * @generated from message ethereum.v1.profile.AlphabetAsset
 */
export declare class AlphabetAsset extends Message<AlphabetAsset> {
  /**
   * The ID of the Alphabet asset.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * The URI of the Alphabet asset image.
   *
   * @generated from field: string image_uri = 2;
   */
  imageUri: string;

  /**
   * The position of the Alphabet asset.
   *
   * @generated from field: ethereum.v1.profile.Position position = 3;
   */
  position?: Position;

  /**
   * The timestamp of the Alphabet asset creation.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * The timestamp of the Alphabet asset update.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  /**
   * The character of the Alphabet asset.
   *
   * @generated from field: uint32 character = 6;
   */
  character: number;

  constructor(data?: PartialMessage<AlphabetAsset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.AlphabetAsset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AlphabetAsset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AlphabetAsset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AlphabetAsset;

  static equals(a: AlphabetAsset | PlainMessage<AlphabetAsset> | undefined, b: AlphabetAsset | PlainMessage<AlphabetAsset> | undefined): boolean;
}

/**
 * BlockAsset message represents a Block asset.
 *
 * @generated from message ethereum.v1.profile.BlockAsset
 */
export declare class BlockAsset extends Message<BlockAsset> {
  /**
   * The ID of the Block asset.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * The URI of the Block asset image.
   *
   * @generated from field: string image_uri = 2;
   */
  imageUri: string;

  /**
   * The position of the Block asset.
   *
   * @generated from field: ethereum.v1.profile.Position position = 3;
   */
  position?: Position;

  /**
   * The timestamp of the Alphabet block creation.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * The timestamp of the Alphabet block update.
   * RFC3339 format e.g. "2006-01-02T15:04:05Z07:00"
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  constructor(data?: PartialMessage<BlockAsset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.BlockAsset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockAsset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockAsset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockAsset;

  static equals(a: BlockAsset | PlainMessage<BlockAsset> | undefined, b: BlockAsset | PlainMessage<BlockAsset> | undefined): boolean;
}

/**
 * StarDoodles message represents a profile's StarDoodles.
 *
 * @generated from message ethereum.v1.profile.StarDoodles
 */
export declare class StarDoodles extends Message<StarDoodles> {
  /**
   * The URI of the StarDoodles image.
   *
   * @generated from field: string image_uri = 1;
   */
  imageUri: string;

  /**
   * The positions of the StarDoodles.
   *
   * @generated from field: repeated ethereum.v1.profile.Position positions = 2;
   */
  positions: Position[];

  constructor(data?: PartialMessage<StarDoodles>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.StarDoodles";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StarDoodles;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StarDoodles;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StarDoodles;

  static equals(a: StarDoodles | PlainMessage<StarDoodles> | undefined, b: StarDoodles | PlainMessage<StarDoodles> | undefined): boolean;
}

/**
 * Position message represents a position.
 *
 * @generated from message ethereum.v1.profile.Position
 */
export declare class Position extends Message<Position> {
  /**
   * The left position.
   *
   * @generated from field: int32 left = 1;
   */
  left: number;

  /**
   * The top position.
   *
   * @generated from field: int32 top = 2;
   */
  top: number;

  /**
   * The right position.
   *
   * @generated from field: int32 right = 3;
   */
  right: number;

  /**
   * The bottom position.
   *
   * @generated from field: int32 bottom = 4;
   */
  bottom: number;

  constructor(data?: PartialMessage<Position>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ethereum.v1.profile.Position";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Position;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Position;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Position;

  static equals(a: Position | PlainMessage<Position> | undefined, b: Position | PlainMessage<Position> | undefined): boolean;
}


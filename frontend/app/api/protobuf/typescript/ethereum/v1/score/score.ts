// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: ethereum/v1/score/score.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "ethereum.v1.score";

export enum GameMode {
  /** GAME_MODE_UNSPECIFIED - default value. this value is unused. */
  GAME_MODE_UNSPECIFIED = "GAME_MODE_UNSPECIFIED",
  /** TIME_ATTACK - time_attack */
  TIME_ATTACK = "TIME_ATTACK",
}

export function gameModeFromJSON(object: any): GameMode {
  switch (object) {
    case 0:
    case "GAME_MODE_UNSPECIFIED":
      return GameMode.GAME_MODE_UNSPECIFIED;
    case 1:
    case "TIME_ATTACK":
      return GameMode.TIME_ATTACK;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum GameMode");
  }
}

export function gameModeToJSON(object: GameMode): string {
  switch (object) {
    case GameMode.GAME_MODE_UNSPECIFIED:
      return "GAME_MODE_UNSPECIFIED";
    case GameMode.TIME_ATTACK:
      return "TIME_ATTACK";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum GameMode");
  }
}

export function gameModeToNumber(object: GameMode): number {
  switch (object) {
    case GameMode.GAME_MODE_UNSPECIFIED:
      return 0;
    case GameMode.TIME_ATTACK:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum GameMode");
  }
}

export enum PlayMode {
  /** PLAY_MODE_UNSPECIFIED - default value. this value is unused. */
  PLAY_MODE_UNSPECIFIED = "PLAY_MODE_UNSPECIFIED",
  /** SINGLE_PLAYER -  */
  SINGLE_PLAYER = "SINGLE_PLAYER",
}

export function playModeFromJSON(object: any): PlayMode {
  switch (object) {
    case 0:
    case "PLAY_MODE_UNSPECIFIED":
      return PlayMode.PLAY_MODE_UNSPECIFIED;
    case 1:
    case "SINGLE_PLAYER":
      return PlayMode.SINGLE_PLAYER;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlayMode");
  }
}

export function playModeToJSON(object: PlayMode): string {
  switch (object) {
    case PlayMode.PLAY_MODE_UNSPECIFIED:
      return "PLAY_MODE_UNSPECIFIED";
    case PlayMode.SINGLE_PLAYER:
      return "SINGLE_PLAYER";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlayMode");
  }
}

export function playModeToNumber(object: PlayMode): number {
  switch (object) {
    case PlayMode.PLAY_MODE_UNSPECIFIED:
      return 0;
    case PlayMode.SINGLE_PLAYER:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlayMode");
  }
}

/** CreateScoreRequest */
export interface CreateScoreRequest {
  /** score to create */
  score: Score | undefined;
}

/**
 * ListScoresRequest payload
 * (-- api-linter: core::0158::request-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 * (-- api-linter: core::0132::request-unknown-fields=disabled
 *     aip.dev/not-precedent: We really need this field because reasons. --)
 */
export interface ListScoresRequest {
  /**
   * The maximum number of scores to return. The service may return fewer than
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
   * When paginating, all other parameters provided to `ListScores` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /**
   * Available Sequence and Operator
   * * point
   *   * `>`, `>=`, `=`, `<=`, `<`
   * * week
   *   * `>`, `>=`, `=`, `<=`, `<`
   * * minted
   *   * `negation`
   * * play_mode
   *   * equal`
   * * game_mode
   *   * equal`
   *
   * Examples
   * * filter=week=10
   * * filter=point>300
   * * filter=minted
   * * filter=game_mode="SINGLE_PLAYER"
   * * filter=play_mode="TIME_ATTACK"
   * * filter=week=10 AND minted AND play_mode="TIME_ATTACK"
   * * filter=week>10 AND week<20 AND minted AND play_mode="TIME_ATTACK"
   */
  filter: string;
  /**
   * Optional. One or more fields to compare and use to sort the output.
   * Default order for a field is descending by create_time
   * Reference
   * * https://google.aip.dev/132#ordering.
   *
   * Examples
   * * order_by="point desc,create_time asc"
   */
  orderBy: string;
}

/**
 * ListScoresResponse response
 * (-- api-linter: core::0158::response-next-page-token-field=disabled
 *     aip.dev/not-precedent: We need to do this because reasons. --)
 */
export interface ListScoresResponse {
  /** The list of rows that matched the query. */
  scores: Score[];
  /**
   * Pagination token used to retrieve the next page of results.
   * Pass the content of this string as the `page_token` attribute of
   * the next request. `next_page_token` is not returned for the last
   * page.
   */
  nextPageToken: string;
}

export interface GetScoreRequest {
  /**
   * The name of the score to retrieve.
   * Format: scores/{score_uuid}
   */
  score: string;
}

export interface Score {
  /**
   * The resource name of the Score.
   * Format: scores/{uuid}
   */
  name: string;
  /**
   * The resource name of the owner Profile.
   * Format: profiles/{address}
   */
  profile: string;
  /** created time of score */
  createTime:
    | string
    | undefined;
  /** point of score */
  point: number;
  /** Game mode of score. */
  gameMode: GameMode;
  /** Play mode of score. */
  playMode: PlayMode;
  /** week of score */
  week: number;
}

function createBaseCreateScoreRequest(): CreateScoreRequest {
  return { score: undefined };
}

export const CreateScoreRequest = {
  encode(message: CreateScoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== undefined) {
      Score.encode(message.score, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateScoreRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateScoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.score = Score.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateScoreRequest {
    return { score: isSet(object.score) ? Score.fromJSON(object.score) : undefined };
  },

  toJSON(message: CreateScoreRequest): unknown {
    const obj: any = {};
    if (message.score !== undefined) {
      obj.score = Score.toJSON(message.score);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateScoreRequest>, I>>(base?: I): CreateScoreRequest {
    return CreateScoreRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateScoreRequest>, I>>(object: I): CreateScoreRequest {
    const message = createBaseCreateScoreRequest();
    message.score = (object.score !== undefined && object.score !== null) ? Score.fromPartial(object.score) : undefined;
    return message;
  },
};

function createBaseListScoresRequest(): ListScoresRequest {
  return { pageSize: 0, pageToken: "", filter: "", orderBy: "" };
}

export const ListScoresRequest = {
  encode(message: ListScoresRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(34).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScoresRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScoresRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListScoresRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListScoresRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== undefined) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== undefined) {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== undefined) {
      obj.filter = message.filter;
    }
    if (message.orderBy !== undefined) {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScoresRequest>, I>>(base?: I): ListScoresRequest {
    return ListScoresRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScoresRequest>, I>>(object: I): ListScoresRequest {
    const message = createBaseListScoresRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

function createBaseListScoresResponse(): ListScoresResponse {
  return { scores: [], nextPageToken: "" };
}

export const ListScoresResponse = {
  encode(message: ListScoresResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scores) {
      Score.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListScoresResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListScoresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scores.push(Score.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListScoresResponse {
    return {
      scores: globalThis.Array.isArray(object?.scores) ? object.scores.map((e: any) => Score.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListScoresResponse): unknown {
    const obj: any = {};
    if (message.scores?.length) {
      obj.scores = message.scores.map((e) => Score.toJSON(e));
    }
    if (message.nextPageToken !== undefined) {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScoresResponse>, I>>(base?: I): ListScoresResponse {
    return ListScoresResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScoresResponse>, I>>(object: I): ListScoresResponse {
    const message = createBaseListScoresResponse();
    message.scores = object.scores?.map((e) => Score.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetScoreRequest(): GetScoreRequest {
  return { score: "" };
}

export const GetScoreRequest = {
  encode(message: GetScoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== "") {
      writer.uint32(10).string(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScoreRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.score = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScoreRequest {
    return { score: isSet(object.score) ? globalThis.String(object.score) : "" };
  },

  toJSON(message: GetScoreRequest): unknown {
    const obj: any = {};
    if (message.score !== undefined) {
      obj.score = message.score;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScoreRequest>, I>>(base?: I): GetScoreRequest {
    return GetScoreRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScoreRequest>, I>>(object: I): GetScoreRequest {
    const message = createBaseGetScoreRequest();
    message.score = object.score ?? "";
    return message;
  },
};

function createBaseScore(): Score {
  return {
    name: "",
    profile: "",
    createTime: undefined,
    point: 0,
    gameMode: GameMode.GAME_MODE_UNSPECIFIED,
    playMode: PlayMode.PLAY_MODE_UNSPECIFIED,
    week: 0,
  };
}

export const Score = {
  encode(message: Score, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.profile !== "") {
      writer.uint32(18).string(message.profile);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.point !== 0) {
      writer.uint32(32).uint32(message.point);
    }
    if (message.gameMode !== GameMode.GAME_MODE_UNSPECIFIED) {
      writer.uint32(40).int32(gameModeToNumber(message.gameMode));
    }
    if (message.playMode !== PlayMode.PLAY_MODE_UNSPECIFIED) {
      writer.uint32(48).int32(playModeToNumber(message.playMode));
    }
    if (message.week !== 0) {
      writer.uint32(56).uint32(message.week);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Score {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.profile = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.point = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gameMode = gameModeFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.playMode = playModeFromJSON(reader.int32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.week = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Score {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      profile: isSet(object.profile) ? globalThis.String(object.profile) : "",
      createTime: isSet(object.createTime) ? globalThis.String(object.createTime) : undefined,
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
      gameMode: isSet(object.gameMode) ? gameModeFromJSON(object.gameMode) : GameMode.GAME_MODE_UNSPECIFIED,
      playMode: isSet(object.playMode) ? playModeFromJSON(object.playMode) : PlayMode.PLAY_MODE_UNSPECIFIED,
      week: isSet(object.week) ? globalThis.Number(object.week) : 0,
    };
  },

  toJSON(message: Score): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.profile !== undefined) {
      obj.profile = message.profile;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime;
    }
    if (message.point !== undefined) {
      obj.point = Math.round(message.point);
    }
    if (message.gameMode !== undefined) {
      obj.gameMode = gameModeToJSON(message.gameMode);
    }
    if (message.playMode !== undefined) {
      obj.playMode = playModeToJSON(message.playMode);
    }
    if (message.week !== undefined) {
      obj.week = Math.round(message.week);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Score>, I>>(base?: I): Score {
    return Score.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Score>, I>>(object: I): Score {
    const message = createBaseScore();
    message.name = object.name ?? "";
    message.profile = object.profile ?? "";
    message.createTime = object.createTime ?? undefined;
    message.point = object.point ?? 0;
    message.gameMode = object.gameMode ?? GameMode.GAME_MODE_UNSPECIFIED;
    message.playMode = object.playMode ?? PlayMode.PLAY_MODE_UNSPECIFIED;
    message.week = object.week ?? 0;
    return message;
  },
};

/** ScoreService contains the function to interact with the Score of the spacebar */
export interface ScoreService {
  /** CreateScore create Score with Score */
  CreateScore(request: CreateScoreRequest): Promise<Score>;
  /** ListScores will return scores. */
  ListScores(request: ListScoresRequest): Promise<ListScoresResponse>;
  /** GetScore */
  GetScore(request: GetScoreRequest): Promise<Score>;
}

export const ScoreServiceServiceName = "ethereum.v1.score.ScoreService";
export class ScoreServiceClientImpl implements ScoreService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ScoreServiceServiceName;
    this.rpc = rpc;
    this.CreateScore = this.CreateScore.bind(this);
    this.ListScores = this.ListScores.bind(this);
    this.GetScore = this.GetScore.bind(this);
  }
  CreateScore(request: CreateScoreRequest): Promise<Score> {
    const data = CreateScoreRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateScore", data);
    return promise.then((data) => Score.decode(_m0.Reader.create(data)));
  }

  ListScores(request: ListScoresRequest): Promise<ListScoresResponse> {
    const data = ListScoresRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListScores", data);
    return promise.then((data) => ListScoresResponse.decode(_m0.Reader.create(data)));
  }

  GetScore(request: GetScoreRequest): Promise<Score> {
    const data = GetScoreRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetScore", data);
    return promise.then((data) => Score.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(dateStr: string): Timestamp {
  const date = new globalThis.Date(dateStr);
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis).toISOString();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

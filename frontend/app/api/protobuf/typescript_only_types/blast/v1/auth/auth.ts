// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/auth/auth.proto

/* eslint-disable */

export const protobufPackage = "blast.v1.auth";

export enum AuthRole {
  /** ROLE_UNSPECIFIED - default value. this value is unused. */
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum AccessLogType {
  /** TYPE_UNSPECIFIED - default value. this value is unused. */
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  /** SIGNIN -  */
  SIGNIN = "SIGNIN",
  /** REFRESH -  */
  REFRESH = "REFRESH",
  /** SIGNOUT -  */
  SIGNOUT = "SIGNOUT",
}

export interface SignInRequest {
  eoaAddress: string;
  timestamp: number;
  signature: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  eoaAddress: string;
  hasSpaceship: boolean;
  hasNickname: boolean;
  hasAcceptedTerms: boolean;
}

export interface RefreshTokenRequest {
}

export interface RefreshTokenResponse {
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
}

export interface SignoutRequest {
}

export interface SignoutResponse {
}

export interface AuthenticateRequest {
  accessToken: string;
}

export interface AuthenticateResponse {
  eoaAddress: string;
  hasSpaceship: boolean;
  hasNickname: boolean;
  hasAcceptedTerms: boolean;
}

export interface GetTempTokenRequest {
}

export interface GetTempTokenResponse {
  accessToken: string;
}

export interface DownloadRequest {
  url: string;
}

export interface DownloadResponse {
  header: string;
  body: string;
}

export interface AccessTokenClaim {
  sessionId: string;
  userAddress: string;
  hasSpaceship: boolean;
  hasNickname: boolean;
  hasAcceptedTerms: boolean;
  role?: AuthRole | undefined;
}

/** AuthService contains the function to interact with the Auth of the spacebar */
export interface AuthService {
  /** Signin signs in a user and returns a session id. */
  SignIn(request: SignInRequest): Promise<SignInResponse>;
  /** Refresh refreshes a session. */
  Refresh(request: RefreshTokenRequest): Promise<RefreshTokenResponse>;
  /** Signout signs out a user. */
  SignOut(request: SignoutRequest): Promise<SignoutResponse>;
  /** Authenticate authenticates token */
  Authenticate(request: AuthenticateRequest): Promise<AuthenticateResponse>;
  /** GetTempToken returns a short-lived token. */
  GetTempToken(request: GetTempTokenRequest): Promise<GetTempTokenResponse>;
  Download(request: DownloadRequest): Promise<DownloadResponse>;
}

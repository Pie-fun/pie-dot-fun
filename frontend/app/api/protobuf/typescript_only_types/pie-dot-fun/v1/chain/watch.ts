// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/chain/watch.proto

/* eslint-disable */

export const protobufPackage = "piedotfun.v1.chain";

export enum BasketEventExtraInfoKey {
  BASKET_EXTRA_INFO_KEY_UNSPECIFIED = "BASKET_EXTRA_INFO_KEY_UNSPECIFIED",
  BASKET_EXTRA_INFO_KEY_VALUE_USDC = "BASKET_EXTRA_INFO_KEY_VALUE_USDC",
  BASKET_EXTRA_INFO_KEY_VALUE_SOL = "BASKET_EXTRA_INFO_KEY_VALUE_SOL",
}

/** BasketComponent represents a component of a basket with its mint and ratio */
export interface BasketComponent {
  /** solana.PublicKey */
  mint: string;
  ratio: string;
}

/** CreateBasketEvent represents the event of creating a new basket */
export interface CreateBasketEvent {
  basketId: number;
  name: string;
  symbol: string;
  uri: string;
  /** solana.PublicKey */
  creator: string;
  /** solana.PublicKey */
  mint: string;
  components: BasketComponent[];
}

/** StartRebalancingEvent represents the event of starting basket rebalancing */
export interface StartRebalancingEvent {
  basketId: number;
  /** solana.PublicKey */
  mint: string;
  timestamp: number;
}

/** StopRebalancingEvent represents the event of stopping basket rebalancing */
export interface StopRebalancingEvent {
  basketId: number;
  /** solana.PublicKey */
  mint: string;
  components: BasketComponent[];
  timestamp: number;
}

/** RedeemBasketTokenEvent represents the event of redeeming basket tokens */
export interface RedeemBasketTokenEvent {
  basketId: number;
  /** solana.PublicKey */
  user: string;
  /** solana.PublicKey */
  basketMint: string;
  amount: number;
}

/** MintBasketTokenEvent represents the event of minting basket tokens */
export interface MintBasketTokenEvent {
  basketId: number;
  /** solana.PublicKey */
  user: string;
  /** solana.PublicKey */
  basketMint: string;
  amount: number;
}

/** TransferBasketEvent represents the event of transferring basket tokens */
export interface TransferBasketEvent {
  /** solana.PublicKey */
  basketMint: string;
  /** solana.PublicKey */
  from: string;
  /** solana.PublicKey */
  to: string;
  amount: number;
}

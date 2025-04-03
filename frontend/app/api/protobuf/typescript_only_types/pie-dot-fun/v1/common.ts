// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/common.proto

/* eslint-disable */

export const protobufPackage = "piedotfun.v1";

export enum ChainType {
  /** CHAIN_UNSPECIFIED - Unspecified blockchain type. */
  CHAIN_UNSPECIFIED = "CHAIN_UNSPECIFIED",
  /** SOLANA - Solana Mainnet blockchain. */
  SOLANA = "SOLANA",
  /** SOLANA_TESTNET - Solana Testnet blockchain. */
  SOLANA_TESTNET = "SOLANA_TESTNET",
  /** SOLANA_DEVNET - Solana Devnet blockchain. */
  SOLANA_DEVNET = "SOLANA_DEVNET",
  ETHEREUM = "ETHEREUM",
  ETHEREUM_SEPOLIA = "ETHEREUM_SEPOLIA",
  BASE = "BASE",
  BASE_SEPOLIA = "BASE_SEPOLIA",
}

export enum VMType {
  /** VM_UNSPECIFIED - Unspecified VM type. */
  VM_UNSPECIFIED = "VM_UNSPECIFIED",
  /** SVM - Solana Virtual Machine. */
  SVM = "SVM",
  /** EVM - Ethereum Virtual Machine. */
  EVM = "EVM",
}

export enum Currency {
  CURRENCY_UNSPECIFIED = "CURRENCY_UNSPECIFIED",
  CURRENCY_SOL = "CURRENCY_SOL",
  CURRENCY_USDC = "CURRENCY_USDC",
  CURRENCY_ETH = "CURRENCY_ETH",
}

export enum PnLPeriod {
  PNL_PERIOD_UNSPECIFIED = "PNL_PERIOD_UNSPECIFIED",
  PNL_PERIOD_1_HOUR = "PNL_PERIOD_1_HOUR",
  PNL_PERIOD_24_HOUR = "PNL_PERIOD_24_HOUR",
  PNL_PERIOD_ALL_TIME = "PNL_PERIOD_ALL_TIME",
}

export enum PriceChangePeriod {
  PRICE_CHANGE_PERIOD_UNSPECIFIED = "PRICE_CHANGE_PERIOD_UNSPECIFIED",
  PRICE_CHANGE_PERIOD_1_HOUR = "PRICE_CHANGE_PERIOD_1_HOUR",
  PRICE_CHANGE_PERIOD_24_HOUR = "PRICE_CHANGE_PERIOD_24_HOUR",
  PRICE_CHANGE_PERIOD_7_DAY = "PRICE_CHANGE_PERIOD_7_DAY",
  PRICE_CHANGE_PERIOD_30_DAY = "PRICE_CHANGE_PERIOD_30_DAY",
  PRICE_CHANGE_PERIOD_ALL_TIME = "PRICE_CHANGE_PERIOD_ALL_TIME",
}

export interface Quantity {
  formattedAmount: string;
  rawAmount: string;
  decimals: number;
}

export interface Money {
  currency: Currency;
  formattedAmount: string;
  rawAmount: string;
  decimals: number;
}

export interface Percentage {
  value: number;
}

export interface PnLsByPeriod {
  /** map from period to PnL */
  pnls: { [key: string]: PnL };
}

export interface PnLsByPeriod_PnlsEntry {
  key: string;
  value: PnL | undefined;
}

export interface PnL {
  nominalValue: Money | undefined;
  percentageChange: Percentage | undefined;
  period: PnLPeriod;
}

export interface PriceChange {
  nominalValue: Money | undefined;
  percentageChange: Percentage | undefined;
  period: PriceChangePeriod;
}

export interface PriceChangesByPeriod {
  /** PriceChangePeriod enum sring to PriceChange */
  priceChanges: { [key: string]: PriceChange };
}

export interface PriceChangesByPeriod_PriceChangesEntry {
  key: string;
  value: PriceChange | undefined;
}

export interface SNS {
  type: SNS_SNSType;
  name: string;
  profileUrl: string;
}

export enum SNS_SNSType {
  SNS_TYPE_UNSPECIFIED = "SNS_TYPE_UNSPECIFIED",
  EMAIL = "EMAIL",
  GOOGLE = "GOOGLE",
  TWITTER = "TWITTER",
}

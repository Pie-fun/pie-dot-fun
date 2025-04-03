// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: pie-dot-fun/v1/common.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";

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

export function chainTypeFromJSON(object: any): ChainType {
  switch (object) {
    case 0:
    case "CHAIN_UNSPECIFIED":
      return ChainType.CHAIN_UNSPECIFIED;
    case 1:
    case "SOLANA":
      return ChainType.SOLANA;
    case 1001:
    case "SOLANA_TESTNET":
      return ChainType.SOLANA_TESTNET;
    case 2001:
    case "SOLANA_DEVNET":
      return ChainType.SOLANA_DEVNET;
    case 2:
    case "ETHEREUM":
      return ChainType.ETHEREUM;
    case 1002:
    case "ETHEREUM_SEPOLIA":
      return ChainType.ETHEREUM_SEPOLIA;
    case 3:
    case "BASE":
      return ChainType.BASE;
    case 1003:
    case "BASE_SEPOLIA":
      return ChainType.BASE_SEPOLIA;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChainType");
  }
}

export function chainTypeToJSON(object: ChainType): string {
  switch (object) {
    case ChainType.CHAIN_UNSPECIFIED:
      return "CHAIN_UNSPECIFIED";
    case ChainType.SOLANA:
      return "SOLANA";
    case ChainType.SOLANA_TESTNET:
      return "SOLANA_TESTNET";
    case ChainType.SOLANA_DEVNET:
      return "SOLANA_DEVNET";
    case ChainType.ETHEREUM:
      return "ETHEREUM";
    case ChainType.ETHEREUM_SEPOLIA:
      return "ETHEREUM_SEPOLIA";
    case ChainType.BASE:
      return "BASE";
    case ChainType.BASE_SEPOLIA:
      return "BASE_SEPOLIA";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChainType");
  }
}

export function chainTypeToNumber(object: ChainType): number {
  switch (object) {
    case ChainType.CHAIN_UNSPECIFIED:
      return 0;
    case ChainType.SOLANA:
      return 1;
    case ChainType.SOLANA_TESTNET:
      return 1001;
    case ChainType.SOLANA_DEVNET:
      return 2001;
    case ChainType.ETHEREUM:
      return 2;
    case ChainType.ETHEREUM_SEPOLIA:
      return 1002;
    case ChainType.BASE:
      return 3;
    case ChainType.BASE_SEPOLIA:
      return 1003;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChainType");
  }
}

export enum VMType {
  /** VM_UNSPECIFIED - Unspecified VM type. */
  VM_UNSPECIFIED = "VM_UNSPECIFIED",
  /** SVM - Solana Virtual Machine. */
  SVM = "SVM",
  /** EVM - Ethereum Virtual Machine. */
  EVM = "EVM",
}

export function vMTypeFromJSON(object: any): VMType {
  switch (object) {
    case 0:
    case "VM_UNSPECIFIED":
      return VMType.VM_UNSPECIFIED;
    case 1:
    case "SVM":
      return VMType.SVM;
    case 2:
    case "EVM":
      return VMType.EVM;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum VMType");
  }
}

export function vMTypeToJSON(object: VMType): string {
  switch (object) {
    case VMType.VM_UNSPECIFIED:
      return "VM_UNSPECIFIED";
    case VMType.SVM:
      return "SVM";
    case VMType.EVM:
      return "EVM";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum VMType");
  }
}

export function vMTypeToNumber(object: VMType): number {
  switch (object) {
    case VMType.VM_UNSPECIFIED:
      return 0;
    case VMType.SVM:
      return 1;
    case VMType.EVM:
      return 2;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum VMType");
  }
}

export enum Currency {
  CURRENCY_UNSPECIFIED = "CURRENCY_UNSPECIFIED",
  CURRENCY_SOL = "CURRENCY_SOL",
  CURRENCY_USDC = "CURRENCY_USDC",
  CURRENCY_ETH = "CURRENCY_ETH",
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case "CURRENCY_UNSPECIFIED":
      return Currency.CURRENCY_UNSPECIFIED;
    case 1:
    case "CURRENCY_SOL":
      return Currency.CURRENCY_SOL;
    case 2:
    case "CURRENCY_USDC":
      return Currency.CURRENCY_USDC;
    case 3:
    case "CURRENCY_ETH":
      return Currency.CURRENCY_ETH;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Currency");
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.CURRENCY_UNSPECIFIED:
      return "CURRENCY_UNSPECIFIED";
    case Currency.CURRENCY_SOL:
      return "CURRENCY_SOL";
    case Currency.CURRENCY_USDC:
      return "CURRENCY_USDC";
    case Currency.CURRENCY_ETH:
      return "CURRENCY_ETH";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Currency");
  }
}

export function currencyToNumber(object: Currency): number {
  switch (object) {
    case Currency.CURRENCY_UNSPECIFIED:
      return 0;
    case Currency.CURRENCY_SOL:
      return 1;
    case Currency.CURRENCY_USDC:
      return 2;
    case Currency.CURRENCY_ETH:
      return 3;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Currency");
  }
}

export enum PnLPeriod {
  PNL_PERIOD_UNSPECIFIED = "PNL_PERIOD_UNSPECIFIED",
  PNL_PERIOD_1_HOUR = "PNL_PERIOD_1_HOUR",
  PNL_PERIOD_24_HOUR = "PNL_PERIOD_24_HOUR",
  PNL_PERIOD_ALL_TIME = "PNL_PERIOD_ALL_TIME",
}

export function pnLPeriodFromJSON(object: any): PnLPeriod {
  switch (object) {
    case 0:
    case "PNL_PERIOD_UNSPECIFIED":
      return PnLPeriod.PNL_PERIOD_UNSPECIFIED;
    case 1:
    case "PNL_PERIOD_1_HOUR":
      return PnLPeriod.PNL_PERIOD_1_HOUR;
    case 2:
    case "PNL_PERIOD_24_HOUR":
      return PnLPeriod.PNL_PERIOD_24_HOUR;
    case 5:
    case "PNL_PERIOD_ALL_TIME":
      return PnLPeriod.PNL_PERIOD_ALL_TIME;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PnLPeriod");
  }
}

export function pnLPeriodToJSON(object: PnLPeriod): string {
  switch (object) {
    case PnLPeriod.PNL_PERIOD_UNSPECIFIED:
      return "PNL_PERIOD_UNSPECIFIED";
    case PnLPeriod.PNL_PERIOD_1_HOUR:
      return "PNL_PERIOD_1_HOUR";
    case PnLPeriod.PNL_PERIOD_24_HOUR:
      return "PNL_PERIOD_24_HOUR";
    case PnLPeriod.PNL_PERIOD_ALL_TIME:
      return "PNL_PERIOD_ALL_TIME";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PnLPeriod");
  }
}

export function pnLPeriodToNumber(object: PnLPeriod): number {
  switch (object) {
    case PnLPeriod.PNL_PERIOD_UNSPECIFIED:
      return 0;
    case PnLPeriod.PNL_PERIOD_1_HOUR:
      return 1;
    case PnLPeriod.PNL_PERIOD_24_HOUR:
      return 2;
    case PnLPeriod.PNL_PERIOD_ALL_TIME:
      return 5;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PnLPeriod");
  }
}

export enum PriceChangePeriod {
  PRICE_CHANGE_PERIOD_UNSPECIFIED = "PRICE_CHANGE_PERIOD_UNSPECIFIED",
  PRICE_CHANGE_PERIOD_1_HOUR = "PRICE_CHANGE_PERIOD_1_HOUR",
  PRICE_CHANGE_PERIOD_24_HOUR = "PRICE_CHANGE_PERIOD_24_HOUR",
  PRICE_CHANGE_PERIOD_7_DAY = "PRICE_CHANGE_PERIOD_7_DAY",
  PRICE_CHANGE_PERIOD_30_DAY = "PRICE_CHANGE_PERIOD_30_DAY",
  PRICE_CHANGE_PERIOD_ALL_TIME = "PRICE_CHANGE_PERIOD_ALL_TIME",
}

export function priceChangePeriodFromJSON(object: any): PriceChangePeriod {
  switch (object) {
    case 0:
    case "PRICE_CHANGE_PERIOD_UNSPECIFIED":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED;
    case 1:
    case "PRICE_CHANGE_PERIOD_1_HOUR":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR;
    case 2:
    case "PRICE_CHANGE_PERIOD_24_HOUR":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR;
    case 3:
    case "PRICE_CHANGE_PERIOD_7_DAY":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY;
    case 4:
    case "PRICE_CHANGE_PERIOD_30_DAY":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY;
    case 5:
    case "PRICE_CHANGE_PERIOD_ALL_TIME":
      return PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PriceChangePeriod");
  }
}

export function priceChangePeriodToJSON(object: PriceChangePeriod): string {
  switch (object) {
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED:
      return "PRICE_CHANGE_PERIOD_UNSPECIFIED";
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR:
      return "PRICE_CHANGE_PERIOD_1_HOUR";
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR:
      return "PRICE_CHANGE_PERIOD_24_HOUR";
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY:
      return "PRICE_CHANGE_PERIOD_7_DAY";
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY:
      return "PRICE_CHANGE_PERIOD_30_DAY";
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME:
      return "PRICE_CHANGE_PERIOD_ALL_TIME";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PriceChangePeriod");
  }
}

export function priceChangePeriodToNumber(object: PriceChangePeriod): number {
  switch (object) {
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED:
      return 0;
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_1_HOUR:
      return 1;
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_24_HOUR:
      return 2;
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_7_DAY:
      return 3;
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_30_DAY:
      return 4;
    case PriceChangePeriod.PRICE_CHANGE_PERIOD_ALL_TIME:
      return 5;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PriceChangePeriod");
  }
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

export function sNS_SNSTypeFromJSON(object: any): SNS_SNSType {
  switch (object) {
    case 0:
    case "SNS_TYPE_UNSPECIFIED":
      return SNS_SNSType.SNS_TYPE_UNSPECIFIED;
    case 1:
    case "EMAIL":
      return SNS_SNSType.EMAIL;
    case 2:
    case "GOOGLE":
      return SNS_SNSType.GOOGLE;
    case 3:
    case "TWITTER":
      return SNS_SNSType.TWITTER;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SNS_SNSType");
  }
}

export function sNS_SNSTypeToJSON(object: SNS_SNSType): string {
  switch (object) {
    case SNS_SNSType.SNS_TYPE_UNSPECIFIED:
      return "SNS_TYPE_UNSPECIFIED";
    case SNS_SNSType.EMAIL:
      return "EMAIL";
    case SNS_SNSType.GOOGLE:
      return "GOOGLE";
    case SNS_SNSType.TWITTER:
      return "TWITTER";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SNS_SNSType");
  }
}

export function sNS_SNSTypeToNumber(object: SNS_SNSType): number {
  switch (object) {
    case SNS_SNSType.SNS_TYPE_UNSPECIFIED:
      return 0;
    case SNS_SNSType.EMAIL:
      return 1;
    case SNS_SNSType.GOOGLE:
      return 2;
    case SNS_SNSType.TWITTER:
      return 3;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SNS_SNSType");
  }
}

function createBaseQuantity(): Quantity {
  return { formattedAmount: "", rawAmount: "", decimals: 0 };
}

export const Quantity = {
  encode(message: Quantity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.formattedAmount !== "") {
      writer.uint32(10).string(message.formattedAmount);
    }
    if (message.rawAmount !== "") {
      writer.uint32(18).string(message.rawAmount);
    }
    if (message.decimals !== 0) {
      writer.uint32(24).uint32(message.decimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quantity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.formattedAmount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rawAmount = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quantity {
    return {
      formattedAmount: isSet(object.formattedAmount) ? globalThis.String(object.formattedAmount) : "",
      rawAmount: isSet(object.rawAmount) ? globalThis.String(object.rawAmount) : "",
      decimals: isSet(object.decimals) ? globalThis.Number(object.decimals) : 0,
    };
  },

  toJSON(message: Quantity): unknown {
    const obj: any = {};
    if (message.formattedAmount !== undefined) {
      obj.formattedAmount = message.formattedAmount;
    }
    if (message.rawAmount !== undefined) {
      obj.rawAmount = message.rawAmount;
    }
    if (message.decimals !== undefined) {
      obj.decimals = Math.round(message.decimals);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Quantity>, I>>(base?: I): Quantity {
    return Quantity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Quantity>, I>>(object: I): Quantity {
    const message = createBaseQuantity();
    message.formattedAmount = object.formattedAmount ?? "";
    message.rawAmount = object.rawAmount ?? "";
    message.decimals = object.decimals ?? 0;
    return message;
  },
};

function createBaseMoney(): Money {
  return { currency: Currency.CURRENCY_UNSPECIFIED, formattedAmount: "", rawAmount: "", decimals: 0 };
}

export const Money = {
  encode(message: Money, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== Currency.CURRENCY_UNSPECIFIED) {
      writer.uint32(8).int32(currencyToNumber(message.currency));
    }
    if (message.formattedAmount !== "") {
      writer.uint32(18).string(message.formattedAmount);
    }
    if (message.rawAmount !== "") {
      writer.uint32(26).string(message.rawAmount);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).uint32(message.decimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Money {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currency = currencyFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.formattedAmount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rawAmount = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Money {
    return {
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : Currency.CURRENCY_UNSPECIFIED,
      formattedAmount: isSet(object.formattedAmount) ? globalThis.String(object.formattedAmount) : "",
      rawAmount: isSet(object.rawAmount) ? globalThis.String(object.rawAmount) : "",
      decimals: isSet(object.decimals) ? globalThis.Number(object.decimals) : 0,
    };
  },

  toJSON(message: Money): unknown {
    const obj: any = {};
    if (message.currency !== undefined) {
      obj.currency = currencyToJSON(message.currency);
    }
    if (message.formattedAmount !== undefined) {
      obj.formattedAmount = message.formattedAmount;
    }
    if (message.rawAmount !== undefined) {
      obj.rawAmount = message.rawAmount;
    }
    if (message.decimals !== undefined) {
      obj.decimals = Math.round(message.decimals);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Money>, I>>(base?: I): Money {
    return Money.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Money>, I>>(object: I): Money {
    const message = createBaseMoney();
    message.currency = object.currency ?? Currency.CURRENCY_UNSPECIFIED;
    message.formattedAmount = object.formattedAmount ?? "";
    message.rawAmount = object.rawAmount ?? "";
    message.decimals = object.decimals ?? 0;
    return message;
  },
};

function createBasePercentage(): Percentage {
  return { value: 0 };
}

export const Percentage = {
  encode(message: Percentage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Percentage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Percentage {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: Percentage): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Percentage>, I>>(base?: I): Percentage {
    return Percentage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Percentage>, I>>(object: I): Percentage {
    const message = createBasePercentage();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePnLsByPeriod(): PnLsByPeriod {
  return { pnls: {} };
}

export const PnLsByPeriod = {
  encode(message: PnLsByPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.pnls).forEach(([key, value]) => {
      PnLsByPeriod_PnlsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PnLsByPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePnLsByPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = PnLsByPeriod_PnlsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.pnls[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PnLsByPeriod {
    return {
      pnls: isObject(object.pnls)
        ? Object.entries(object.pnls).reduce<{ [key: string]: PnL }>((acc, [key, value]) => {
          acc[key] = PnL.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PnLsByPeriod): unknown {
    const obj: any = {};
    if (message.pnls) {
      const entries = Object.entries(message.pnls);
      if (entries.length > 0) {
        obj.pnls = {};
        entries.forEach(([k, v]) => {
          obj.pnls[k] = PnL.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PnLsByPeriod>, I>>(base?: I): PnLsByPeriod {
    return PnLsByPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PnLsByPeriod>, I>>(object: I): PnLsByPeriod {
    const message = createBasePnLsByPeriod();
    message.pnls = Object.entries(object.pnls ?? {}).reduce<{ [key: string]: PnL }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = PnL.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePnLsByPeriod_PnlsEntry(): PnLsByPeriod_PnlsEntry {
  return { key: "", value: undefined };
}

export const PnLsByPeriod_PnlsEntry = {
  encode(message: PnLsByPeriod_PnlsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PnL.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PnLsByPeriod_PnlsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePnLsByPeriod_PnlsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = PnL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PnLsByPeriod_PnlsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PnL.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PnLsByPeriod_PnlsEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PnL.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PnLsByPeriod_PnlsEntry>, I>>(base?: I): PnLsByPeriod_PnlsEntry {
    return PnLsByPeriod_PnlsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PnLsByPeriod_PnlsEntry>, I>>(object: I): PnLsByPeriod_PnlsEntry {
    const message = createBasePnLsByPeriod_PnlsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? PnL.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBasePnL(): PnL {
  return { nominalValue: undefined, percentageChange: undefined, period: PnLPeriod.PNL_PERIOD_UNSPECIFIED };
}

export const PnL = {
  encode(message: PnL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nominalValue !== undefined) {
      Money.encode(message.nominalValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.percentageChange !== undefined) {
      Percentage.encode(message.percentageChange, writer.uint32(18).fork()).ldelim();
    }
    if (message.period !== PnLPeriod.PNL_PERIOD_UNSPECIFIED) {
      writer.uint32(24).int32(pnLPeriodToNumber(message.period));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PnL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePnL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nominalValue = Money.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.percentageChange = Percentage.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.period = pnLPeriodFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PnL {
    return {
      nominalValue: isSet(object.nominalValue) ? Money.fromJSON(object.nominalValue) : undefined,
      percentageChange: isSet(object.percentageChange) ? Percentage.fromJSON(object.percentageChange) : undefined,
      period: isSet(object.period) ? pnLPeriodFromJSON(object.period) : PnLPeriod.PNL_PERIOD_UNSPECIFIED,
    };
  },

  toJSON(message: PnL): unknown {
    const obj: any = {};
    if (message.nominalValue !== undefined) {
      obj.nominalValue = Money.toJSON(message.nominalValue);
    }
    if (message.percentageChange !== undefined) {
      obj.percentageChange = Percentage.toJSON(message.percentageChange);
    }
    if (message.period !== undefined) {
      obj.period = pnLPeriodToJSON(message.period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PnL>, I>>(base?: I): PnL {
    return PnL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PnL>, I>>(object: I): PnL {
    const message = createBasePnL();
    message.nominalValue = (object.nominalValue !== undefined && object.nominalValue !== null)
      ? Money.fromPartial(object.nominalValue)
      : undefined;
    message.percentageChange = (object.percentageChange !== undefined && object.percentageChange !== null)
      ? Percentage.fromPartial(object.percentageChange)
      : undefined;
    message.period = object.period ?? PnLPeriod.PNL_PERIOD_UNSPECIFIED;
    return message;
  },
};

function createBasePriceChange(): PriceChange {
  return {
    nominalValue: undefined,
    percentageChange: undefined,
    period: PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED,
  };
}

export const PriceChange = {
  encode(message: PriceChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nominalValue !== undefined) {
      Money.encode(message.nominalValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.percentageChange !== undefined) {
      Percentage.encode(message.percentageChange, writer.uint32(18).fork()).ldelim();
    }
    if (message.period !== PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED) {
      writer.uint32(24).int32(priceChangePeriodToNumber(message.period));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nominalValue = Money.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.percentageChange = Percentage.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.period = priceChangePeriodFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceChange {
    return {
      nominalValue: isSet(object.nominalValue) ? Money.fromJSON(object.nominalValue) : undefined,
      percentageChange: isSet(object.percentageChange) ? Percentage.fromJSON(object.percentageChange) : undefined,
      period: isSet(object.period)
        ? priceChangePeriodFromJSON(object.period)
        : PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED,
    };
  },

  toJSON(message: PriceChange): unknown {
    const obj: any = {};
    if (message.nominalValue !== undefined) {
      obj.nominalValue = Money.toJSON(message.nominalValue);
    }
    if (message.percentageChange !== undefined) {
      obj.percentageChange = Percentage.toJSON(message.percentageChange);
    }
    if (message.period !== undefined) {
      obj.period = priceChangePeriodToJSON(message.period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceChange>, I>>(base?: I): PriceChange {
    return PriceChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PriceChange>, I>>(object: I): PriceChange {
    const message = createBasePriceChange();
    message.nominalValue = (object.nominalValue !== undefined && object.nominalValue !== null)
      ? Money.fromPartial(object.nominalValue)
      : undefined;
    message.percentageChange = (object.percentageChange !== undefined && object.percentageChange !== null)
      ? Percentage.fromPartial(object.percentageChange)
      : undefined;
    message.period = object.period ?? PriceChangePeriod.PRICE_CHANGE_PERIOD_UNSPECIFIED;
    return message;
  },
};

function createBasePriceChangesByPeriod(): PriceChangesByPeriod {
  return { priceChanges: {} };
}

export const PriceChangesByPeriod = {
  encode(message: PriceChangesByPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.priceChanges).forEach(([key, value]) => {
      PriceChangesByPeriod_PriceChangesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceChangesByPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceChangesByPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = PriceChangesByPeriod_PriceChangesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.priceChanges[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceChangesByPeriod {
    return {
      priceChanges: isObject(object.priceChanges)
        ? Object.entries(object.priceChanges).reduce<{ [key: string]: PriceChange }>((acc, [key, value]) => {
          acc[key] = PriceChange.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PriceChangesByPeriod): unknown {
    const obj: any = {};
    if (message.priceChanges) {
      const entries = Object.entries(message.priceChanges);
      if (entries.length > 0) {
        obj.priceChanges = {};
        entries.forEach(([k, v]) => {
          obj.priceChanges[k] = PriceChange.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceChangesByPeriod>, I>>(base?: I): PriceChangesByPeriod {
    return PriceChangesByPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PriceChangesByPeriod>, I>>(object: I): PriceChangesByPeriod {
    const message = createBasePriceChangesByPeriod();
    message.priceChanges = Object.entries(object.priceChanges ?? {}).reduce<{ [key: string]: PriceChange }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PriceChange.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePriceChangesByPeriod_PriceChangesEntry(): PriceChangesByPeriod_PriceChangesEntry {
  return { key: "", value: undefined };
}

export const PriceChangesByPeriod_PriceChangesEntry = {
  encode(message: PriceChangesByPeriod_PriceChangesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PriceChange.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceChangesByPeriod_PriceChangesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceChangesByPeriod_PriceChangesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = PriceChange.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceChangesByPeriod_PriceChangesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PriceChange.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PriceChangesByPeriod_PriceChangesEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PriceChange.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceChangesByPeriod_PriceChangesEntry>, I>>(
    base?: I,
  ): PriceChangesByPeriod_PriceChangesEntry {
    return PriceChangesByPeriod_PriceChangesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PriceChangesByPeriod_PriceChangesEntry>, I>>(
    object: I,
  ): PriceChangesByPeriod_PriceChangesEntry {
    const message = createBasePriceChangesByPeriod_PriceChangesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PriceChange.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSNS(): SNS {
  return { type: SNS_SNSType.SNS_TYPE_UNSPECIFIED, name: "", profileUrl: "" };
}

export const SNS = {
  encode(message: SNS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== SNS_SNSType.SNS_TYPE_UNSPECIFIED) {
      writer.uint32(8).int32(sNS_SNSTypeToNumber(message.type));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.profileUrl !== "") {
      writer.uint32(34).string(message.profileUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SNS {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSNS();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = sNS_SNSTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profileUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SNS {
    return {
      type: isSet(object.type) ? sNS_SNSTypeFromJSON(object.type) : SNS_SNSType.SNS_TYPE_UNSPECIFIED,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      profileUrl: isSet(object.profileUrl) ? globalThis.String(object.profileUrl) : "",
    };
  },

  toJSON(message: SNS): unknown {
    const obj: any = {};
    if (message.type !== undefined) {
      obj.type = sNS_SNSTypeToJSON(message.type);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.profileUrl !== undefined) {
      obj.profileUrl = message.profileUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SNS>, I>>(base?: I): SNS {
    return SNS.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SNS>, I>>(object: I): SNS {
    const message = createBaseSNS();
    message.type = object.type ?? SNS_SNSType.SNS_TYPE_UNSPECIFIED;
    message.name = object.name ?? "";
    message.profileUrl = object.profileUrl ?? "";
    return message;
  },
};

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export enum TokenType {
  USDT = 'USDT',
}

export type ChainAndTokenType = ChainType | TokenType

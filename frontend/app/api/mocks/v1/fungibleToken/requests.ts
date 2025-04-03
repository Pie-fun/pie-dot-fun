import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  FungibleToken,
  ListFungibleTokensResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token'
import {
  ChainType,
  SNS_SNSType,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

export async function listFungibleTokens() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListFungibleTokensResponse>({
    fungibleTokens: [
      {
        address: 'fungibleTokens1',
        chain: ChainType.SOLANA,
        displayName: 'peanut',
        iconImageUrl: 'https://picsum.photos/seed/fungibleTokens1/50/50',
        name: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
        sns: [
          {
            name: 'PNUT-sns',
            profileUrl: 'https://picsum.photos/seed/fungibleTokens1-sns/50/50',
            type: SNS_SNSType.TWITTER,
          },
        ],
        symbol: 'PNUT',
        decimals: 6,
      },
      {
        address: 'fungibleTokens2',
        chain: ChainType.SOLANA,
        displayName: 'sigma',
        iconImageUrl: 'https://picsum.photos/seed/fungibleTokens2/50/50',
        name: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens2`,
        sns: [
          {
            name: 'SIGMA-sns',
            profileUrl: 'https://picsum.photos/seed/fungibleTokens2-sns/50/50',
            type: SNS_SNSType.TWITTER,
          },
        ],
        symbol: 'SIGMA',
        decimals: 6,
      },
    ],
    nextPageToken: '',
  })
}

export async function getFungibleToken() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<FungibleToken>({
    address: 'fungibleTokens1',
    chain: ChainType.SOLANA,
    displayName: 'peanut',
    iconImageUrl: 'https://picsum.photos/seed/fungibleTokens1/50/50',
    name: `fungibleTokens/${ChainType.SOLANA}/fungibleTokens1`,
    sns: [
      {
        name: 'PNUT-sns',
        profileUrl: 'https://picsum.photos/seed/fungibleTokens1-sns/50/50',
        type: SNS_SNSType.TWITTER,
      },
    ],
    symbol: 'PNUT',
    decimals: 6,
  })
}

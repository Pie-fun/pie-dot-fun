import {
  FungibleToken,
  GetFungibleTokenRequest,
  ListFungibleTokensRequest,
  ListFungibleTokensResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData } from '@/libs/fetch/types'

export async function listFungibleTokens({
  ...params
}: ListData<ListFungibleTokensRequest>): Promise<ListFungibleTokensResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: '/fungibleTokens',
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function getFungibleToken({
  fungibleToken,
  ...params
}: GetFungibleTokenRequest): Promise<FungibleToken> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${fungibleToken}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

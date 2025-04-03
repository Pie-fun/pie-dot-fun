import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import { CustomFetchError } from '@/libs/fetch/types'
import { ExtractGraphqlQueryType, PromiseReturnType } from '@/types/utility'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: CustomFetchError
  }
}

export type FetchParameters<T> = Omit<T, 'options'>

export type SolanaNodeParameters<T> = Omit<T, 'cluster' | 'connection'>

export type BaseInfiniteQueryOptions<
  // You never know what might come in.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any) => any,
> = UseInfiniteQueryOptions<
  PromiseReturnType<T>,
  CustomFetchError,
  InfiniteData<PromiseReturnType<T>, string>,
  PromiseReturnType<T>,
  QueryKey,
  string
>

export type BaseQueryOptions<
  // You never know what might come in.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any) => any,
> = UseQueryOptions<PromiseReturnType<T>, CustomFetchError>

export type BaseInfiniteGraphqlQueryOptions<T> = UseInfiniteQueryOptions<
  ExtractGraphqlQueryType<T>,
  CustomFetchError,
  InfiniteData<ExtractGraphqlQueryType<T>, string>,
  ExtractGraphqlQueryType<T>,
  QueryKey,
  string
>

export type BaseGraphqlQueryOptions<T> = UseQueryOptions<
  ExtractGraphqlQueryType<T>,
  CustomFetchError
>

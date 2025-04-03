import { TypedDocumentString } from '@/libs/graphql/graphql'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from 'react'

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>['ref']

export type PolymorphicComponentProps<T extends ElementType, Props = object> = {
  as?: T
} & Props &
  ComponentPropsWithoutRef<T>

export type PolymorphicComponent<T extends ElementType, Props = object> = (
  props: PolymorphicComponentProps<T> &
    Props & {
      ref?: PolymorphicRef<T>
    },
) => ReactElement | null

export type AsChildProps<T> = T & {
  asChild?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FirstParameter<T> = T extends (arg: infer P) => any
  ? P
  : Record<string, never>

export type EthereumAddress = `0x${string}`

type PromiseType<T> = T extends Promise<infer U> ? U : T

// You never know what might come in.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromiseReturnType<T extends (...args: any) => any> = PromiseType<
  ReturnType<T>
>

export type ExtractGraphqlQueryType<T> =
  // You never know what might come in.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends TypedDocumentString<infer QueryType, any> ? QueryType : unknown

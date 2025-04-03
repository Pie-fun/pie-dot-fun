import { customFetch } from '@/libs/fetch/fetch'
import type { TypedDocumentString } from '@/libs/graphql/graphql'

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return (await customFetch(
    {
      app: 'frontend',
      version: 'v1',
      path: '/graphql',
    },
    {
      credentials: 'omit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/graphql-response+json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  )) as TResult
}

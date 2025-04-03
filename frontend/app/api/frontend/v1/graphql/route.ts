import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import { BasketTokenResolver } from '@/app/api/frontend/v1/graphql/schemas/basketToken/resolver'
import { CustomFetchError } from '@/libs/fetch/types'
import { buildSchema } from 'type-graphql'
import {
  ListData,
  Money,
  Percentage,
  PriceChange,
  PriceChanges,
  PriceChangesByPeriod,
  Quantity,
} from '@/app/api/frontend/v1/graphql/schemas/common/typeDefs'
import { BasketTokenMarketResolver } from '@/app/api/frontend/v1/graphql/schemas/basketTokenMarket/resolver'
import { CombinedResolver } from '@/app/api/frontend/v1/graphql/schemas/combined/resolver'
import { FungibleTokenResolver } from '@/app/api/frontend/v1/graphql/schemas/fungibleToken/resolver'
import { FungibleTokenMarketResolver } from '@/app/api/frontend/v1/graphql/schemas/fungibleTokenMarket/resolver'

type OriginalError = Error & { thrownValue?: CustomFetchError }

const schema = await buildSchema({
  resolvers: [
    BasketTokenResolver,
    BasketTokenMarketResolver,
    FungibleTokenResolver,
    FungibleTokenMarketResolver,
    CombinedResolver,
  ],
  emitSchemaFile:
    process.env.NODE_ENV !== 'production'
      ? './app/api/frontend/v1/graphql/schema.graphql'
      : false,
  orphanedTypes: [
    ListData,
    Money,
    Percentage,
    PriceChange,
    PriceChanges,
    PriceChangesByPeriod,
    Quantity,
  ],
})

const server = new ApolloServer({
  schema,
  plugins: [
    {
      async requestDidStart() {
        return {
          async willSendResponse({ response, errors }) {
            if (errors && errors.length > 0) {
              const { originalError } = errors[0]
              const { thrownValue } = originalError as OriginalError

              if (originalError && thrownValue) {
                response.http.status = thrownValue.status

                response.body = {
                  kind: 'single',
                  singleResult: {
                    data: {
                      ...thrownValue.data,
                    },
                  },
                }
              }
            }
          },
        }
      },
    },
  ],
  introspection: process.env.NEXT_PUBLIC_ENV !== 'prod',
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
})

export { handler as GET, handler as POST }

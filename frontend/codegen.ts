import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    './app/api/frontend/v1/graphql/schema.graphql',
    '!./node_modules/**',
  ],
  documents: ['./**/*.{ts,tsx}', '!./node_modules/**'],
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    './libs/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        namingConvention: 'keep',
      },
    },
  },
}

export default config

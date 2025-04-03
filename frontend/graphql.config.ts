const config = {
  schema: [
    './app/api/frontend/v1/graphql/schema.graphql',
    '!./node_modules/**',
  ],
  documents: ['**/*.{graphql,js,ts,jsx,tsx}', '!./node_modules/**'],
}

export default config

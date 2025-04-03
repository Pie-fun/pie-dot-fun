import { execSync } from 'child_process'

const env = process.env.VERCEL_ENV
const branch = process.env.VERCEL_GIT_COMMIT_REF

function build() {
  console.info(`\u001B[1m\u001B[32m[BUILD]\u001B[39m\u001B[22m Running build...
    - env: ${env}
    - branch : ${branch}`)

  if (env === 'production') {
    execSync('pnpm build:prod', { stdio: 'inherit' })

    return
  }

  if (env === 'preview' && branch === 'qa') {
    execSync('pnpm build:qa', { stdio: 'inherit' })

    return
  }

  if (env === 'preview' && branch === 'stg') {
    execSync('pnpm build:stg', { stdio: 'inherit' })

    return
  }

  if (env === 'preview') {
    execSync('pnpm build:dev', { stdio: 'inherit' })
  }
}

build()

import { copyFile, readFile, writeFile } from 'fs/promises'
import { checkFile, makeDirectoryIfNotExists, prettify } from './utils'

const dirPath = 'types'
const envFileName = '.env'
const typeFileName = 'environment.d.ts'

async function writeEnvsFile() {
  const targetEnv = process.env.TARGET_ENV ?? 'local'
  const path = `envs/.env.${targetEnv}`

  if (!targetEnv) {
    console.info(
      `\u001B[1m\u001B[31m[ERROR]\u001B[39m\u001B[22m TARGET_ENV does not exist.`,
    )
    process.exit(1)
  }

  await checkFile({
    path,
    onError: () => {
      console.info(
        `\u001B[1m\u001B[31m[ERROR]\u001B[39m\u001B[22m .env.${targetEnv} does not exist.`,
      )
      process.exit(1)
    },
  })

  await copyFile(path, envFileName)
}

async function writeEnvironmentsTypeFile() {
  await checkFile({
    path: envFileName,
    onError: () => {
      console.info(
        `\u001B[1m\u001B[31m[ERROR]\u001B[39m\u001B[22m .env does not exist.`,
      )
      process.exit(1)
    },
  })

  const fileContent = await readFile(envFileName, 'utf-8')
  const lines = fileContent.split('\n')

  const envTypes = lines
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => {
      const [key] = line.split('=')

      return `readonly ${key.trim()}: string`
    })
    .join('\n')

  const typeDefinitions = `declare namespace NodeJS { export interface ProcessEnv { ${envTypes} } }`

  await writeFile(`${dirPath}/${typeFileName}`, typeDefinitions, 'utf-8')
}

async function makeEnvs() {
  try {
    await writeEnvsFile()
    await makeDirectoryIfNotExists({
      path: dirPath,
      options: { recursive: true },
    })
    await writeEnvironmentsTypeFile()
    await prettify({ path: `${dirPath}/${typeFileName}` })
    console.info(
      `\u001B[1m\u001B[32m[ADDED]\u001B[39m\u001B[22m ${envFileName} are added successfully!`,
    )
  } catch (error) {
    console.error(error)
  }
}

makeEnvs()

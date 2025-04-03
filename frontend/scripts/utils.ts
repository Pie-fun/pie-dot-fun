import { exec } from 'child_process'
import { mkdir, access, rm } from 'fs/promises'
import { PathLike } from 'node:fs'
import { promisify } from 'util'
import type { MakeDirectoryOptions, RmOptions } from 'fs'

const execute = promisify(exec)

type CheckFileParams = {
  path: PathLike
  onSuccess?: () => void
  onError?: (e: unknown) => void
}

export async function checkFile({ path, onSuccess, onError }: CheckFileParams) {
  try {
    await access(path)
    onSuccess?.()
  } catch (e) {
    onError?.(e)
  }
}

type MakeDirectoryIfNotExistsParams = {
  path: string
  options?: MakeDirectoryOptions
}

export async function makeDirectoryIfNotExists({
  path,
  options,
}: MakeDirectoryIfNotExistsParams) {
  try {
    await access(path)
  } catch {
    await mkdir(path, options)
  }
}

type CleanUpDirectoryParams = {
  path: string
  options?: RmOptions
}

export async function cleanUpDirectory({
  path,
  options,
}: CleanUpDirectoryParams) {
  try {
    await rm(path, options)
  } catch (e) {
    console.error(e)
  }
}

type PrettifyParams = {
  path: string
}

export async function prettify({ path }: PrettifyParams) {
  await execute(`
    #!/bin/bash
    prettier --write ${path}
  `)
}

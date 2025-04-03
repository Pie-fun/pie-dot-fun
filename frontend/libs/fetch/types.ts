export type CustomError = {
  code?: string
  message?: string
  details?: {
    '@type'?: string
    reason?: string
    domain?: string
    metadata?: {
      code?: string
    }
  }[]
  name?: string
  cause?: {
    code?: string
  }
}

export type CustomFetchError = Error & {
  status?: number
  statusText?: string
  data?: CustomError
}

export type ListData<T = unknown> = Omit<
  T,
  'filter' | 'orderBy' | 'pageSize' | 'pageToken'
> & {
  filter?: string
  orderBy?: string
  pageSize?: number
  pageToken?: string
}

export type PatchMethod<T extends unknown | undefined> = {
  resourceName: string
  updateMask: (keyof NonNullable<T>)[]
} & {
  [K in keyof Partial<T>]: NonNullable<T>[K]
}

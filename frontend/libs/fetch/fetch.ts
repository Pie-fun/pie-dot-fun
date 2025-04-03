import { isClient } from '@/utils/isClient'
import { isVercelPreview } from '@/utils/isVercelPreview'

type App = 'frontend' | 'backend' | 'mock'
type ApiVersion = 'v1'
type SearchParamsType = Record<
  string,
  string | number | Array<unknown> | undefined
>
type RequestURLConfigType =
  | {
      app?: App
      version?: ApiVersion
      path: string
      params?: SearchParamsType
    }
  | { url: string; params?: SearchParamsType }

export const mockDataPrefix = 'mock'

export const getSearch = (params: SearchParamsType = {}) => {
  const falsyRemovedObject = Object.keys(params).reduce(
    (acc: { [key: string]: string }, key) => {
      const value = params[key]

      if (value) {
        acc[key] = value.toString()
      }

      return acc
    },
    {},
  )

  const searchParams = new URLSearchParams(falsyRemovedObject).toString()

  return searchParams ? `?${searchParams}` : ''
}

export const getRequestURL = (configs: RequestURLConfigType) => {
  const { params } = configs

  if ('url' in configs) {
    return `${configs.url}${getSearch(params)}`
  }

  const { app, version, path } = configs

  if (app === 'mock') {
    return `${mockDataPrefix}/${version}${path}${getSearch(params)}`
  }

  if (app === 'frontend') {
    const baseUrl = isVercelPreview()
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL}`
      : `${process.env.NEXT_PUBLIC_FRONT_END_API_PROTOCOL}://${process.env.NEXT_PUBLIC_FRONT_END_API_HOST}:${process.env.NEXT_PUBLIC_FRONT_END_API_PORT}`

    return `${baseUrl}/api/frontend${version ? `/${version}` : ''}${path}${getSearch(params)}`
  }

  return `${process.env.NEXT_PUBLIC_BACK_END_API_PROTOCOL}://${process.env.NEXT_PUBLIC_BACK_END_API_HOST}:${process.env.NEXT_PUBLIC_BACK_END_API_PORT}${
    version ? `/${version}` : ''
  }${path}${getSearch(params)}`
}

const getIsGraphqlResponse = (response: Response) => {
  const contentType = response.headers.get('content-type')

  return contentType?.includes('application/graphql')
}

const returnResponse = async (response: Response) => {
  try {
    const data = await response.json()

    if (getIsGraphqlResponse(response)) {
      return data.data
    }

    return data
  } catch {
    return response
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    if (getIsGraphqlResponse(response)) {
      const data = await returnResponse(response)

      throw {
        status: response.status,
        statusText: response.statusText,
        ...data,
      }
    }

    throw {
      status: response.status,
      statusText: response.statusText,
      data: await returnResponse(response),
    }
  }

  return returnResponse(response)
}

export const customFetch = async (
  requestURLConfig: RequestURLConfigType,
  { headers, credentials = 'include', ...init }: RequestInit = {},
) => {
  const requestURL = getRequestURL(requestURLConfig)
  let accessToken: string | undefined = undefined

  if (isClient()) {
    accessToken = window.localStorage
      .getItem('privy:token')
      ?.replaceAll('"', '')
  } else {
    const cookies = await (await import('next/headers')).cookies()

    accessToken = cookies.get('privy-token')?.value
  }

  const response = await fetch(requestURL, {
    credentials,
    headers: {
      ...(credentials === 'include' && process.env.NEXT_PUBLIC_ENV === 'local'
        ? {
            Authorization: `Bearer ${accessToken}`,
            ...headers,
          }
        : headers),
    },
    ...init,
  })

  return handleResponse(response)
}

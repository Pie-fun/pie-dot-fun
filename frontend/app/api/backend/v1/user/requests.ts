import {
  GetUserRequest,
  ListUsersRequest,
  ListUsersResponse,
  UpdateUserRequest,
  User,
  ValidateNicknameAvailabilityRequest,
  ValidateNicknameAvailabilityResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/user'
import { customFetch } from '@/libs/fetch/fetch'
import { ListData, PatchMethod } from '@/libs/fetch/types'

export async function getUser({
  user,
  ...params
}: GetUserRequest): Promise<User> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${user}`,
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function listUsers({
  ...params
}: ListData<ListUsersRequest>): Promise<ListUsersResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: '/users',
      params,
    },
    {
      method: 'GET',
    },
  )
}

export async function validateNicknameAvailability({
  ...params
}: ValidateNicknameAvailabilityRequest): Promise<ValidateNicknameAvailabilityResponse> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/users:validateNicknameAvailablity`,
    },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export async function updateUser({
  resourceName,
  updateMask,
  ...params
}: PatchMethod<UpdateUserRequest['user']>): Promise<User> {
  return await customFetch(
    {
      app: 'backend',
      version: 'v1',
      path: `/${resourceName}`,
      params: {
        updateMask,
      },
    },
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

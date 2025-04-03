import { HttpResponse, delay } from 'msw'
import { DEFAULT_DELAY } from '@/libs/msw/handlers'
import {
  ListUsersResponse,
  User,
  ValidateNicknameAvailabilityResponse,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/user'
import {
  SNS_SNSType,
  VMType,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { getRandom } from '@/utils/getRandom'

export async function getUser() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<User>({
    createTime: '2021-10-01T00:00:00Z',
    displayName: 'JohnDoe',
    id: '1',
    profileImageUrl: 'https://picsum.photos/seed/user1/50/50',
    name: 'users/1',
    sns: [
      {
        type: SNS_SNSType.EMAIL,
        name: 'John Doe Gmail',
        profileUrl: 'https://picsum.photos/seed/user1/50/50',
      },
    ],
    updateTime: '2021-10-01T00:00:00Z',
    wallets: [
      {
        address: '0x11f974f9A218A62d899df6a5936e1547f10c4807',
        vmType: VMType.EVM,
      },
      {
        address: 'B4SZanWF7ff1zFBcZRWxU5ab4979BZ1HgGCXiF4sK1GM',
        vmType: VMType.SVM,
      },
    ],
    biography: 'Hello, I am John Doe',
  })
}

export async function listUsers() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<ListUsersResponse>({
    users: [
      {
        createTime: '2021-10-01T00:00:00Z',
        displayName: 'JohnDoe',
        id: '1',
        profileImageUrl: 'https://picsum.photos/seed/user1/50/50',
        name: 'users/1',
        sns: [
          {
            type: SNS_SNSType.EMAIL,
            name: 'John Doe Gmail',
            profileUrl: 'https://picsum.photos/seed/user1/50/50',
          },
        ],
        updateTime: '2021-10-01T00:00:00Z',
        wallets: [
          {
            address: '0x1234567890',
            vmType: VMType.EVM,
          },
          {
            address: '0x1234567890',
            vmType: VMType.SVM,
          },
        ],
        biography: 'Hello, I am John Doe',
      },
    ],
    nextPageToken: '',
  })
}

export async function validateNicknameAvailability() {
  await delay(DEFAULT_DELAY)

  const available = getRandom({ min: 0, max: 10 })

  return HttpResponse.json<ValidateNicknameAvailabilityResponse>({
    available: available >= 5,
    nickname: 'nickname',
    reason: '',
  })
}

export async function updateUser() {
  await delay(DEFAULT_DELAY)

  return HttpResponse.json<User>({
    createTime: '2021-10-01T00:00:00Z',
    displayName: 'JohnDoe',
    id: '1',
    profileImageUrl: 'https://picsum.photos/seed/user1/50/50',
    name: 'users/1',
    sns: [
      {
        type: SNS_SNSType.EMAIL,
        name: 'John Doe Gmail',
        profileUrl: 'https://picsum.photos/seed/user1/50/50',
      },
    ],
    updateTime: '2021-10-01T00:00:00Z',
    wallets: [
      {
        address: '0x1234567890',
        vmType: VMType.EVM,
      },
      {
        address: '0x1234567890',
        vmType: VMType.SVM,
      },
    ],
    biography: 'Hello, I am John Doe',
  })
}

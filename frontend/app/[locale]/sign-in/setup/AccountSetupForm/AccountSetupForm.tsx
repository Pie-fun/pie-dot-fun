'use client'

import {
  AccountSetupSchema,
  useAccountSetupSchema,
} from '@/app/[locale]/sign-in/setup/AccountSetupForm/useAccountSetupSchema'
import { useUpdateUser } from '@/app/api/backend/v1/user/hooks'
import { getUserResource } from '@/app/api/backend/v1/user/resource'
import { Button } from '@/components/Button/Button'
import * as Form from '@/components/Form/Form'
import { Icon } from '@/components/Icon/Icon'
import { IcChevRightOutline } from '@/components/Icon/Icons'
import { Input } from '@/components/Input/Input'
import { Typography } from '@/components/Typography/Typography'
import { UserAvatar } from '@/components/UserAvatar/UserAvatar'
import { DEBOUNCE_DELAY, REDIRECT_URI_KEY } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { useUser } from '@/libs/api/useUser'
import { usePrivyAction } from '@/providers/PrivyActionProvider/PrivyActionProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'

type ContextProps = {
  query: ReturnType<typeof useUpdateUser>
}

const Context = createContext<Partial<ContextProps>>({})

export function Root({ children }: PropsWithChildren) {
  const { schema } = useAccountSetupSchema()
  const { data } = useUser()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setIsNewUser } = usePrivyAction()

  const query = useUpdateUser({
    onSuccess: () => {
      const redirectUri = searchParams.get(REDIRECT_URI_KEY)
      const url = new URL(ROUTES['/REDIRECT'], window.location.origin)

      if (redirectUri) {
        url.searchParams.set(REDIRECT_URI_KEY, redirectUri)
      }

      setIsNewUser(true)
      router.push(url.toString())
    },
  })

  const value = useMemo(() => ({ query }), [query])

  const form = useForm<AccountSetupSchema>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      userName: '',
    },
  })

  const updateUser = () => {
    if (!data?.id) {
      throw new Error('id is required')
    }

    query.mutate({
      resourceName: getUserResource({ id: data.id }),
      updateMask: ['displayName'],
      displayName: form.getValues('userName'),
    })
  }

  return (
    <Context.Provider value={value}>
      <Form.Root {...form}>
        <form onSubmit={form.handleSubmit(updateUser)}>{children}</form>
      </Form.Root>
    </Context.Provider>
  )
}

export function UserAvatarField() {
  const { data } = useUser()

  return <UserAvatar src={data?.profileImageUrl} alt='' size='m' />
}

export function UserNameField() {
  const t = useTranslations()
  const form = useFormContext<AccountSetupSchema>()
  const [userName, setUserName] = useState('')

  const debounced = useDebouncedCallback((value) => {
    form.setValue('userName', value, {
      shouldValidate: true,
    })
  }, DEBOUNCE_DELAY.SECONDARY)

  return (
    <Form.Field
      control={form.control}
      name='userName'
      render={({ field, fieldState }) => {
        return (
          <Form.Item>
            <Form.Label>
              <Typography
                typography='body1'
                fontWeight='regular'
                color='primary'
              >
                {t('common.username')}
              </Typography>
            </Form.Label>
            <Form.Control>
              <Input
                {...field}
                inputMode='text'
                placeholder={t('accountSetup.usernamePlaceholder')}
                isError={!!fieldState.error}
                size='s'
                maxLength={15}
                value={userName}
                onChange={(event) => {
                  const value = event.target.value

                  setUserName(value)
                  debounced(value)
                }}
              />
            </Form.Control>
            <Form.Message />
            <Form.Description>
              <Typography
                typography='body1'
                fontWeight='regular'
                color='tertiary'
              >
                {t('accountSetup.usernameMessage')}
              </Typography>
            </Form.Description>
          </Form.Item>
        )
      }}
    />
  )
}

export function SubmitButton() {
  const t = useTranslations()
  const form = useFormContext<AccountSetupSchema>()
  const { query } = useContext(Context)

  return (
    <Typography layout='fillWidth' typography='body1' fontWeight='bold'>
      <Button
        layout='fillWidth'
        isLoading={query?.isPending}
        disabled={!form.formState.isValid}
        buttonType='solid'
        color='primary'
        size='m'
        shape='square'
        type='submit'
      >
        {t('common.continue')}
        <Icon size='m'>
          <IcChevRightOutline />
        </Icon>
      </Button>
    </Typography>
  )
}

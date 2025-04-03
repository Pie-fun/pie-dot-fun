import { validateNicknameAvailability } from '@/app/api/backend/v1/user/requests'
import { useTranslations } from 'next-intl'
import * as z from 'zod'

export type AccountSetupSchema = z.infer<
  ReturnType<typeof useAccountSetupSchema>['schema']
>

export function useAccountSetupSchema() {
  const t = useTranslations()

  const schema = z.object({
    userName: z
      .string()
      .min(4, '')
      .max(15, '')
      .refine(
        (value) => {
          return /^[a-zA-Z0-9._-]+$/.test(value)
        },
        {
          message: t('accountSetup.usernameErrorMessage.invalidCharacters'),
        },
      )
      .pipe(
        z.string().refine(
          async (value) => {
            const { available } = await validateNicknameAvailability({
              nickname: value,
            })

            return available
          },
          {
            message: t('accountSetup.usernameErrorMessage.duplicateUsername'),
          },
        ),
      ),
  })

  return { schema }
}

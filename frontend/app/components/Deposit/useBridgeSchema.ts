import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import BigNumber from 'bignumber.js'
import { useTranslations } from 'next-intl'
import * as z from 'zod'

export type BridgeSchema = z.infer<ReturnType<typeof useBridgeSchema>['schema']>

export function useBridgeSchema() {
  const t = useTranslations()

  const schema = z
    .object({
      balance: z.string().optional(),
      amount: z.string(),
    })
    .superRefine((data, ctx) => {
      const amount = new BigNumber(
        getUnFormattedNumber({
          value: data.amount,
        }),
      )

      const balance = new BigNumber(data.balance ? data.balance : 0)

      if (amount.isNaN() || amount.isZero()) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['amount'],
          message: '',
        })
      }

      if (balance.isNaN() || amount.isGreaterThan(balance)) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['amount'],
          message: t('common.insufficientBalance'),
        })
      }
    })

  return { schema }
}

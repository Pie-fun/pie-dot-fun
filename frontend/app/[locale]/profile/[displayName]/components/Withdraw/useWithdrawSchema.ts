import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import BigNumber from 'bignumber.js'
import { useTranslations } from 'next-intl'
import * as z from 'zod'
import { PublicKey } from '@solana/web3.js'
import { FirstParameter } from '@/types/utility'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useQuery } from '@tanstack/react-query'
import { useSolana } from '@/hooks/useSolana'

export type WithdrawSchema = z.infer<
  ReturnType<typeof useWithdrawSchema>['schema']
>

export function useWithdrawSchema({
  address,
}: Partial<Omit<FirstParameter<typeof getBalanceQuery>, 'connection'>> = {}) {
  const t = useTranslations()
  const { connection } = useSolana()

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: address!,
    }),
    enabled: !!address,
  })

  const schema = z
    .object({
      fromToken: z.union([
        z.literal('CHAIN_UNSPECIFIED'),
        z.literal('SOLANA'),
        z.literal('SOLANA_TESTNET'),
        z.literal('SOLANA_DEVNET'),
      ]) satisfies z.ZodType<`${ChainType}`>,
      toToken: z.union([
        z.literal('CHAIN_UNSPECIFIED'),
        z.literal('SOLANA'),
        z.literal('SOLANA_TESTNET'),
        z.literal('SOLANA_DEVNET'),
      ]) satisfies z.ZodType<`${ChainType}`>,
      toAddress: z.string().refine(
        (value) => {
          try {
            const key = new PublicKey(value)

            return PublicKey.isOnCurve(key)
          } catch {
            return false
          }
        },
        { message: t('withdraw.invalidAddress') },
      ),
      amount: z.string(),
    })
    .superRefine((data, ctx) => {
      const amount = new BigNumber(
        getUnFormattedNumber({
          value: data.amount,
        }),
      )

      if (amount.isNaN() || amount.isZero()) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['amount'],
          message: '',
        })
      }

      if (lamports) {
        const balance = getLamportsToSol({ lamports })

        if (!balance || amount.isGreaterThan(balance)) {
          return ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['amount'],
            message: t('common.insufficientBalance'),
          })
        }

        const keepAtLeastAmount = 0.003

        if (balance && amount.isGreaterThan(balance - keepAtLeastAmount)) {
          return ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['amount'],
            message: t('withdraw.keepAtLeastAmount', {
              amount: keepAtLeastAmount,
            }),
          })
        }
      }
    })

  return { schema }
}

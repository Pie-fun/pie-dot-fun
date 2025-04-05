'use client'

import { PropsWithChildren } from 'react'
import * as FormPrimitive from '@/components/Form/Form'
import {
  BuyAndSellSchema,
  useBuyAndSellSchema,
} from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { FirstParameter } from '@/types/utility'
import { useUser } from '@/libs/api/useUser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SLIPPAGE_PERCENTAGE,
  WRAPPED_NATIVE_TOKEN_ADDRESSES,
} from '@/constants/blockChains'

type FormProps = Pick<
  Required<FirstParameter<typeof useBuyAndSellSchema>>,
  'chain' | 'tokenAddress'
>

export function Form({
  chain,
  tokenAddress,
  children,
}: PropsWithChildren<FormProps>) {
  const { wallet } = useUser({ vmType: 'SVM' })

  const { schema } = useBuyAndSellSchema({
    chain,
    holdingWalletAddress: wallet?.address,
    tokenAddress,
  })

  const form = useForm<BuyAndSellSchema>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      buyMethod: {
        chain,
        address: WRAPPED_NATIVE_TOKEN_ADDRESSES[chain],
        type: 'native',
      },
      buyAmount: '',
      sellMethod: {
        chain,
        address: WRAPPED_NATIVE_TOKEN_ADDRESSES[chain],
        type: 'native',
      },
      sellAmount: '',
      slippage: SLIPPAGE_PERCENTAGE.default,
      isShowSlippage: false,
      error: undefined,
    },
  })

  return <FormPrimitive.Root {...form}>{children}</FormPrimitive.Root>
}

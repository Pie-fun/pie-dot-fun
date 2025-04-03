'use client'

import { Button } from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/libs/react-query/queryKeys'
import { useTranslations } from 'next-intl'
import { useForm, useFormContext, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@/components/Form/Form'
import { Typography } from '@/components/Typography/Typography'
import * as Select from '@/components/Select/Select'
import { Icon } from '@/components/Icon/Icon'
import {
  WRAPPED_NATIVE_TOKEN_ADDRESSES,
  SYMBOL_FROM_CHAIN_TYPE,
} from '@/constants/blockChains'
import { SolanaBalance } from '@/app/[locale]/profile/[displayName]/components/Withdraw/SolanaBalance'
import * as styles from '@/app/[locale]/profile/[displayName]/components/Withdraw/WithdrawPrimitive.css'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import BigNumber from 'bignumber.js'
import { Box } from '@/components/Box/Box'
import {
  useWithdrawSchema,
  WithdrawSchema,
} from '@/app/[locale]/profile/[displayName]/components/Withdraw/useWithdrawSchema'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { useToast } from '@/components/Toast/useToast'
import { Textarea } from '@/components/Textarea/Textarea'
import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import { useSolana } from '@/hooks/useSolana'
import { useTransfer } from '@/app/api/external/privy/v1/solana/hooks'
import { POLLING_INTERVAL } from '@/constants/common'
import { useUser } from '@/libs/api/useUser'
import { Link } from '@/components/Link/Link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import {
  getCurrentNetworkFeeQuery,
  getSignatureStatusQuery,
} from '@/app/api/external/node/v1/solana/queries'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'
import { IcSolanaFixedColorFill } from '@/components/Icon/Icons'

type ContextProps = {
  showLoading: boolean
}

const Context = createContext<Partial<ContextProps>>({})

export function Root({ children }: PropsWithChildren) {
  const t = useTranslations()
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { schema } = useWithdrawSchema({ address: wallet?.address! })
  const [signature, setSignature] = useState('')
  const { connection } = useSolana()

  const { data: transaction, isLoading } = useQuery({
    ...getSignatureStatusQuery({
      connection,
      signature,
    }),
    enabled: !!signature,
    retryDelay: POLLING_INTERVAL.PRIMARY,
    retry: (errorCount) => {
      if (errorCount === 60) {
        toast({
          title: (
            <Box orientation='vertical' gap='s'>
              <Typography
                typography='body1'
                fontWeight='regular'
                color='primary'
              >
                {t.rich('withdraw.toastMessage.fail.description', {
                  br: () => <br />,
                })}
              </Typography>
              <Link
                href={`${EXTERNAL_LINKS.SOLSCAN}/tx/${signature}`}
                isExternal
              >
                <Button
                  buttonType='outline'
                  color='primary'
                  size='s'
                  shape='square'
                >
                  {t('withdraw.toastMessage.fail.btn')}
                </Button>
              </Link>
            </Box>
          ),
        })
        setSignature('')

        return false
      }

      return true
    },
  })

  const form = useForm<WithdrawSchema>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      fromToken: ChainType.SOLANA,
      toToken:
        process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
          ? 'SOLANA_DEVNET'
          : 'SOLANA',
      toAddress: '',
      amount: '',
    },
  })

  const { mutate, isPending } = useTransfer({
    onMutate: () => {
      toast({
        title: t('withdraw.toastMessage.submit'),
      })
    },
    onSuccess: (signature) => {
      setSignature(signature)
    },
    throwOnError: false,
  })

  const value = useMemo(
    () => ({ showLoading: isPending || isLoading }),
    [isPending, isLoading],
  )

  useEffect(() => {
    if (transaction?.value?.confirmationStatus === 'confirmed') {
      if (!wallet) {
        throw new Error('Wallet is not connected')
      }

      queryClient.invalidateQueries({
        queryKey: queryKeys.solana.getBalanceQuery({ address: wallet.address })
          .queryKey,
      })

      toast({
        title: t('withdraw.toastMessage.success', {
          amount: form.getValues('amount'),
          ticker: SYMBOL_FROM_CHAIN_TYPE['SOLANA'],
        }),
      })

      form.resetField('amount')
      form.resetField('toAddress')
      setSignature('')
    }
  }, [transaction, form, queryClient, t, toast, wallet])

  useEffect(() => {
    sendGTMEvent({ event: 'withdraw_modal_view' })
  }, [])

  return (
    <Context.Provider value={value}>
      <Form.Root {...form}>
        <form
          onSubmit={form.handleSubmit(({ amount, toAddress }) => {
            const value = getUnFormattedNumber({ value: amount })

            mutate({
              address: toAddress,
              amount: new BigNumber(value).toNumber(),
            })
          })}
        >
          {children}
        </form>
      </Form.Root>
    </Context.Provider>
  )
}

export function Trigger({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()

  return (
    <Button buttonType='solid' {...props}>
      {t('common.withdraw')}
    </Button>
  )
}

export function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography typography='title4' fontWeight='bold' {...props}>
      {t('common.withdraw')}
    </Typography>
  )
}

export function Body() {
  const t = useTranslations()
  const { connection } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const form = useFormContext<WithdrawSchema>()
  const { amount } = useWatch({ control: form.control })

  const { data: fungibleTokenMarket } = useQuery({
    ...getFungibleTokenMarketQuery({
      fungibleTokenMarket: getFungibleTokenMarketResource({
        chain:
          process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
            ? 'SOLANA_DEVNET'
            : 'SOLANA',
        address: WRAPPED_NATIVE_TOKEN_ADDRESSES.SOLANA,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
  })

  const price = new BigNumber(fungibleTokenMarket?.price?.formattedAmount ?? 0)
    .multipliedBy(getUnFormattedNumber({ value: amount }) || 0)
    .toString()

  const { data: currentNetworkFee } = useQuery({
    ...getCurrentNetworkFeeQuery({
      connection,
    }),
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  return (
    <Box layout='fillWidth' gap='l' orientation='vertical'>
      <Form.Field
        control={form.control}
        name='fromToken'
        render={({ field }) => {
          return (
            <Form.Item>
              <Form.Label>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.token')}
                </Typography>
              </Form.Label>
              <Form.Control>
                <Select.Root {...field} disabled>
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Group>
                      <Select.Item value={ChainType.SOLANA}>
                        <Icon>
                          <IcSolanaFixedColorFill />
                        </Icon>
                        {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                      </Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Form.Control>
            </Form.Item>
          )
        }}
      />
      <Form.Field
        control={form.control}
        name='amount'
        render={({ field, fieldState }) => {
          return (
            <Form.Item>
              <Box layout='fillWidth' align='spaceBetweenCenter'>
                <Form.Label layout='fillWidth'>
                  <Box layout='fillWidth' align='spaceBetween'>
                    <Typography
                      typography='body1'
                      fontWeight='regular'
                      color='primary'
                    >
                      {t('common.amount')}
                    </Typography>
                  </Box>
                </Form.Label>
                {wallet?.address && (
                  <Box marginBottom='auto'>
                    <SolanaBalance address={wallet.address} />
                  </Box>
                )}
              </Box>
              <Form.Control>
                <Input
                  {...field}
                  inputMode='decimal'
                  placeholder='0'
                  isError={!!fieldState.error}
                  align='right'
                  size='s'
                  format={{ mode: 'number', isAbs: true }}
                  prefixContent={
                    <Box orientation='vertical' gap='xxs'>
                      <Icon size='m'>
                        <IcSolanaFixedColorFill />
                      </Icon>
                      <Typography
                        typography='caption2'
                        fontWeight='regular'
                        color='secondary'
                      >
                        {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                      </Typography>
                    </Box>
                  }
                  bottomContent={
                    <div className={styles.transformedValue()}>
                      <Typography typography='caption2' fontWeight='regular'>
                        ≈
                      </Typography>
                      <CurrencyWithQuantity
                        currencyType='fiat'
                        size='xs'
                        fontWeight='regular'
                        value={price}
                      >
                        $
                      </CurrencyWithQuantity>
                    </div>
                  }
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )
        }}
      />
      <Form.Field
        control={form.control}
        name='toAddress'
        render={({ field, fieldState }) => {
          return (
            <Form.Item>
              <Form.Label>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.address')}
                </Typography>
              </Form.Label>
              <Form.Control>
                <Textarea
                  {...field}
                  size='s'
                  inputMode='text'
                  placeholder={t('withdraw.addresPlaceholder')}
                  isAutoHeight
                  isPreventNewline
                  rows={1}
                  isError={!!fieldState.error}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )
        }}
      />
      <Box layout='fillWidth' align='spaceBetween'>
        <Typography typography='caption2' fontWeight='regular' color='tertiary'>
          {t('withdraw.estimatedNetworkFee')}
        </Typography>
        <div className={styles.estimateNetworkFee()}>
          <CurrencyWithQuantity
            currencyType='fiat'
            size='xs'
            fontWeight='regular'
            value={
              currentNetworkFee?.value
                ? getLamportsToSol({
                    lamports: currentNetworkFee.value,
                  })
                : ''
            }
          />
          <Typography
            color='tertiary'
            typography='caption2'
            fontWeight='regular'
          >
            {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export function SubmitButton({ ...props }: ComponentProps<typeof Button>) {
  const t = useTranslations()
  const form = useFormContext<WithdrawSchema>()
  const { showLoading } = useContext(Context)

  return (
    <Button
      layout='fillWidth'
      buttonType='solid'
      shape='square'
      color='primary'
      size='m'
      isLoading={showLoading}
      disabled={!form.formState.isValid}
      type='submit'
      {...props}
    >
      <Typography typography='body1' fontWeight='bold'>
        {t('common.submit')}
      </Typography>
    </Button>
  )
}

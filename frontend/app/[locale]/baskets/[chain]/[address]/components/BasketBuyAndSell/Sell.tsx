'use client'

import * as Form from '@/components/Form/Form'
import { useTranslations } from 'next-intl'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Sell.css'
import { useFormContext, useWatch } from 'react-hook-form'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { useSolanaWallets } from '@privy-io/react-auth'
import { PrivyLoginButton } from '@/app/components/PrivyLoginButton/PrivyLoginButton'
import { Slippage } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Slippage'
import { TokenAvatar } from '@/components/TokenAvatar/TokenAvatar'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { BasketTokenBalance } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/BasketTokenBalance'
import { usePrivyWallet } from '@/libs/privy/usePrivyWallet'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { SetBasketTokenAmountToSellButtons } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/SetBasketTokenAmountToSellButtons'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBasketTokenMarketQuery } from '@/app/api/backend/v1/basketTokenMarket/queries'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import BigNumber from 'bignumber.js'
import { PublicKey, VersionedTransaction } from '@solana/web3.js'
import { getUint8ArrayFromBase64 } from '@/utils/getUint8ArrayFromBase64'
import { PieProgram } from '@ao-labs/pie-dot-fun-solana'
import { useToast } from '@/components/Toast/useToast'
import { getJitoError } from '@/libs/pie-program/getJitoError'
import { getPollingJitoBundleStatus } from '@/libs/pie-program/getPollingJitoBundleStatus'
import { buildRedeemTx } from '@/app/api/backend/v1/pieProgram/requests'
import { Box } from '@/components/Box/Box'
import { useUser } from '@/libs/api/useUser'
import {
  ComponentProps,
  useMemo,
  useEffect,
  useState,
  useTransition,
} from 'react'
import { DECIMALS, SLIPPAGE_PERCENTAGE } from '@/constants/blockChains'
import { FirstParameter } from '@/types/utility'
import { useSolana } from '@/hooks/useSolana'
import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'
import { TransactionStatus } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/TransactionStatus'
import { flushSync } from 'react-dom'
import { Icon } from '@/components/Icon/Icon'
import { IcLoadingCircleDashFill } from '@/components/Icon/Icons'
import { RebalancingCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/RebalancingCard'
import { MevTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/MevTooltip'
import { CollateralizedTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/CollateralizedTooltip'
import { SellContractError } from '@/utils/contractErrors'
import { CommonFrontError, SellFrontError } from '@/utils/frontErrors'
import { usePolling } from '@/hooks/usePolling'
import { queryKeys } from '@/libs/react-query/queryKeys'

type SellProps = {
  chain: ChainType
  address: string
}

export function Sell({ chain, address }: Readonly<SellProps>) {
  const t = useTranslations()
  const { connection, cluster } = useSolana()
  const { toast } = useToast()
  const { isAuthenticated } = useUser()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { wallets } = useSolanaWallets()
  const form = useFormContext<BuyAndSellSchema>()
  const { sellAmount, slippage } = useWatch({ control: form.control })
  const [isLoading, startLoading] = useTransition()
  const [step, setStep] =
    useState<ComponentProps<typeof TransactionStatus>['step']>('idle')
  const { pollUntilChange } = usePolling()

  const pieProgram = useMemo(() => {
    return new PieProgram(
      connection,
      cluster.network,
      process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
      process.env.NEXT_PUBLIC_PIE_PROGRAM_CONTRACT_ADDRESS,
    )
  }, [connection, cluster.network])

  useEffect(() => {
    pieProgram.init()
  }, [pieProgram])

  const { wallet: privySvmEmbeddedWallet } = usePrivyWallet({
    wallets,
    type: 'embedded',
  })

  const { data: basketToken } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const basketTokenPublicKey = new PublicKey(basketToken.address)

  const walletPublicKey = wallet?.address
    ? new PublicKey(wallet.address)
    : undefined

  const { data: basketTokenMarket } = useSuspenseQuery({
    ...getBasketTokenMarketQuery({
      basketTokenMarket: getBasketTokenMarketResource({ address, chain }),
      currency: Currency.CURRENCY_USDC,
    }),
  })

  const price = new BigNumber(basketTokenMarket?.value?.formattedAmount ?? 0)
    .multipliedBy(getUnFormattedNumber({ value: sellAmount }) || 0)
    .toString()

  const jitoSimulateBundle = async ({
    signedTransactions,
    encodedTransactions,
  }: {
    signedTransactions: VersionedTransaction[]
    encodedTransactions: FirstParameter<
      typeof pieProgram.jito.simulateBundle
    >['encodedTransactions']
  }) => {
    const bundleSimluationResult = await pieProgram.jito.simulateBundle({
      encodedTransactions,
    })

    if (bundleSimluationResult?.value.summary !== 'succeeded') {
      for (const signedTransaction of signedTransactions) {
        await connection.simulateTransaction(signedTransaction, {
          replaceRecentBlockhash: true,
        })
      }

      const { cause } = getJitoError({
        transactionFailure:
          bundleSimluationResult?.value.summary.failed.error.TransactionFailure,
      })

      if (cause === 'INSUFFICIENT_FUNDS') {
        throw SellContractError.insufficientFunds()
      }

      if (cause === 'SLIPPAGE_ISSUE') {
        throw SellContractError.slippage()
      }

      if (cause === 'REBALANCE_TIMING_ISSUE') {
        throw SellContractError.rebalancing()
      }

      if (cause === 'UNKNOWN_ERROR') {
        throw SellContractError.unknown()
      }
    }

    return bundleSimluationResult?.value.summary
  }

  const sell = () => {
    // TODO @ted svm evm branch
    startLoading(async () => {
      try {
        if (!privySvmEmbeddedWallet) {
          throw CommonFrontError.notFound({ entity: 'privySvmEmbeddedWallet' })
        }

        if (!basketToken?.address) {
          throw CommonFrontError.notFound({ entity: 'basketTokenAddress' })
        }

        if (!sellAmount) {
          throw CommonFrontError.notFound({ entity: 'sellAmount' })
        }

        if (!walletPublicKey) {
          throw CommonFrontError.notFound({ entity: 'walletPublicKey' })
        }

        if (!wallet) {
          throw CommonFrontError.notFound({ entity: 'wallet' })
        }

        flushSync(() => setStep('creatingTransaction'))

        const amount = new BigNumber(sellAmount)
          .multipliedBy(10 ** DECIMALS.BASKET_TOKEN)
          .toString()

        const { serializedTxs } = await buildRedeemTx({
          basketMint: basketToken.address,
          amount,
          ownerAddress: privySvmEmbeddedWallet.address,
          maxSlippage: new BigNumber(
            slippage ?? SLIPPAGE_PERCENTAGE.default,
          ).toNumber(),
        })

        const signedTransactions = await Promise.all(
          serializedTxs.map((serializedTx) => {
            const transaction = VersionedTransaction.deserialize(
              getUint8ArrayFromBase64({ string: serializedTx }),
            )

            return privySvmEmbeddedWallet.signTransaction(transaction)
          }),
        )

        const serializedSignedTransactions = signedTransactions.map(
          (signedTransaction) => {
            const serialized = signedTransaction.serialize()
            const base64 = btoa(String.fromCharCode(...serialized))

            return base64
          },
        )

        await jitoSimulateBundle({
          signedTransactions,
          encodedTransactions: serializedSignedTransactions,
        })

        const bundleId = await pieProgram.jito.sendBundle(
          serializedSignedTransactions,
        )

        flushSync(() => setStep('waitingForConfirmation'))

        if (!bundleId) {
          throw CommonFrontError.notFound({ entity: 'bundleId' })
        }

        const { dismiss: dismissTxSendToast } = toast({
          duration: Infinity,
          title: (
            <Box orientation='horizontal' gap='s'>
              <Icon size='m' isSpin>
                <IcLoadingCircleDashFill />
              </Icon>
              {t('basketTrade.progressStep2.toastMessage')}
            </Box>
          ),
        })

        const bundleStatus = await getPollingJitoBundleStatus({
          bundleId,
          holding: getHoldingResource({
            chain,
            holdingWalletAddress: privySvmEmbeddedWallet.address,
            tokenAddress: basketToken.address,
          }),
        })

        dismissTxSendToast()

        if (bundleStatus === 'Failed') {
          const result = await jitoSimulateBundle({
            signedTransactions,
            encodedTransactions: serializedSignedTransactions,
          })

          if (result === 'succeeded') {
            throw SellContractError.unknown()
          }
        }

        if (bundleStatus === 'Landed') {
          form.setValue('sellAmount', '')

          toast({
            title: t('basketSell.toastMessage.success', {
              amount: sellAmount,
              ticker: basketToken?.symbol,
            }),
          })

          pollUntilChange({
            queryKey: queryKeys.pieProgram.getTokenBalanceQuery({
              mint: basketTokenPublicKey,
              owner: walletPublicKey,
            }).queryKey,
          })

          pollUntilChange({
            queryKey: queryKeys.solana.getBalanceQuery({
              address: wallet.address,
            }).queryKey,
          })
        }

        flushSync(() => setStep('idle'))
      } catch (error) {
        flushSync(() => setStep('idle'))

        if (error instanceof SellFrontError) {
          sendGTMEvent({
            event: 'tradingerror_modal_view',
            action: 'sell',
            error: error.cause?.code,
            app: 'frontend',
          })

          if (error.cause?.code === 'INSUFFICIENT_FUNDS') {
            form.setValue('error', 'insufficientBalance')
          }

          if (error.cause?.code === 'REBALANCE_TIMING_ISSUE') {
            form.setValue('error', 'rebalancing')
          }

          if (error.cause?.code === 'SLIPPAGE_ISSUE') {
            form.setValue('error', 'slippage')
          }

          if (error.cause?.code === 'UNKNOWN_ERROR') {
            form.setValue('error', 'unknown')
          }

          return
        }

        if (error instanceof SellContractError) {
          sendGTMEvent({
            event: 'tradingerror_modal_view',
            action: 'sell',
            error: error.cause?.code,
            app: 'contract',
          })

          if (error.cause?.code === 'INSUFFICIENT_FUNDS') {
            form.setValue('error', 'insufficientBalance')
          }

          if (error.cause?.code === 'REBALANCE_TIMING_ISSUE') {
            form.setValue('error', 'rebalancing')
          }

          if (error.cause?.code === 'SLIPPAGE_ISSUE') {
            form.setValue('error', 'slippage')
          }

          if (error.cause?.code === 'UNKNOWN_ERROR') {
            form.setValue('error', 'unknown')
          }

          return
        }

        throw error
      }
    })
  }

  return (
    <Box layout='fillWidth' orientation='vertical' gap='s'>
      <Box layout='fillWidth' orientation='vertical' gap='s'>
        <Form.Field
          control={form.control}
          name='sellAmount'
          render={({ field, fieldState }) => {
            return (
              <Form.Item>
                <Box layout='fillWidth' align='spaceBetween'>
                  <Form.Label>
                    <Typography
                      typography='body1'
                      fontWeight='regular'
                      color='primary'
                    >
                      {t('common.amount')}
                    </Typography>
                  </Form.Label>
                  <Box gap='xxs' align='center'>
                    {walletPublicKey ? (
                      <BasketTokenBalance
                        mint={basketTokenPublicKey}
                        owner={walletPublicKey}
                      />
                    ) : (
                      <Typography
                        typography='body1'
                        fontWeight='regular'
                        color='primary'
                      >
                        -
                      </Typography>
                    )}
                  </Box>
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
                        <TokenAvatar
                          shape='square'
                          size='m'
                          alt={basketToken.displayName}
                          src={basketToken.iconImageUri}
                        />
                        <Typography
                          typography='caption2'
                          fontWeight='regular'
                          color='secondary'
                        >
                          {basketToken.symbol}
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
              </Form.Item>
            )
          }}
        />
        <Box layout='fillWidth' gap='s'>
          {!!walletPublicKey && (
            <SetBasketTokenAmountToSellButtons
              mint={basketTokenPublicKey}
              owner={walletPublicKey}
            />
          )}
        </Box>
      </Box>
      <Slippage />
      {!basketToken?.isRebalancing && isAuthenticated && (
        <Box layout='fillWidth' orientation='vertical' gap='s'>
          <Button
            layout='fillWidth'
            buttonType='solid'
            size='m'
            color='alertPrimary'
            shape='round'
            disabled={!form.formState.isValid}
            isLoading={isLoading}
            onClick={sell}
          >
            <Typography typography='body1' fontWeight='bold'>
              {t('common.sell')}
            </Typography>
          </Button>
          {step !== 'idle' && (
            <Box layout='fillWidth' gap='xxs' align='center'>
              {step === 'creatingTransaction' && (
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='tertiary'
                >
                  {t('basketTrade.progressStep1.panelCaption')}
                </Typography>
              )}
              {step === 'waitingForConfirmation' && (
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='tertiary'
                >
                  {t('basketTrade.progressStep2.toastMessage')}
                </Typography>
              )}
              {basketToken?.components && (
                <TransactionStatus
                  type='sell'
                  step={step}
                  address={address}
                  chain={chain}
                />
              )}
            </Box>
          )}
        </Box>
      )}
      {!basketToken?.isRebalancing && !isAuthenticated && (
        <PrivyLoginButton
          layout='fillWidth'
          buttonType='solid'
          size='m'
          color='accentGradient'
          shape='round'
        >
          <Typography typography='body1' fontWeight='bold'>
            {t('basketTradingButton.sign')}
          </Typography>
        </PrivyLoginButton>
      )}
      {basketToken?.isRebalancing && <RebalancingCard />}
      <div className={styles.tooltips()}>
        <MevTooltip />
        <CollateralizedTooltip />
      </div>
    </Box>
  )
}

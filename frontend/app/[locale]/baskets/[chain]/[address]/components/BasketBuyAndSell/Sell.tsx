'use client'

import * as Form from '@/components/Form/Form'
import { useTranslations } from 'next-intl'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Sell.css'
import { useFormContext, useWatch } from 'react-hook-form'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import {
  useSendTransaction as useEvmSendTransaction,
  useSolanaWallets,
} from '@privy-io/react-auth'
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
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
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
import {
  DECIMALS,
  SLIPPAGE_PERCENTAGE,
  WRAPPED_NATIVE_TOKEN_ADDRESSES,
} from '@/constants/blockChains'
import { FirstParameter, PromiseReturnType } from '@/types/utility'
import { useSolana } from '@/hooks/useSolana'
import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'
import { TransactionStatus } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/TransactionStatus'
import { flushSync } from 'react-dom'
import { Icon } from '@/components/Icon/Icon'
import {
  IcEthereumFixedColorFill,
  IcLoadingCircleDashFill,
  IcSolanaFixedColorFill,
  IcTetherFixedColorFill,
} from '@/components/Icon/Icons'
import { RebalancingCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/RebalancingCard'
import { MevTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/MevTooltip'
import { CollateralizedTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/CollateralizedTooltip'
import { SellContractError } from '@/utils/contractErrors'
import { CommonFrontError, SellFrontError } from '@/utils/frontErrors'
import { usePolling } from '@/hooks/usePolling'
import { queryKeys } from '@/libs/react-query/queryKeys'
import * as Select from '@/components/Select/Select'
import { Currency as CurrencyPrimitive } from '@/components/Currency/Currency'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { getBalancesEVMQuery } from '@/app/api/backend/proxy/queries'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { routes, Wormhole, wormhole } from '@wormhole-foundation/sdk'
import evm from '@wormhole-foundation/sdk/evm'
import solana from '@wormhole-foundation/sdk/solana'
import { MayanRouteSWIFT } from '@mayanfinance/wormhole-sdk-route'
import { PrivyEvmSigner } from '@/libs/privy/PrivyEvmSigner'
import { PrivySvmSigner } from '@/libs/privy/PrivySvmSigner'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'

type SellProps = {
  chain: ChainType
  address: string
}

export function Sell({ chain, address }: Readonly<SellProps>) {
  const t = useTranslations()
  const { connection, cluster } = useSolana()
  const { toast } = useToast()
  const { isAuthenticated } = useUser()
  const { wallet: svmWallet } = useUser({ vmType: 'SVM' })
  const { wallet: evmWallet } = useUser({ vmType: 'EVM' })
  const { wallets: svmWallets } = useSolanaWallets()
  const { sendTransaction: evmSendTransaction } = useEvmSendTransaction()
  const form = useFormContext<BuyAndSellSchema>()
  const { sellAmount, slippage, sellMethod } = useWatch({
    control: form.control,
  })
  const [isLoading, startLoading] = useTransition()
  const [step, setStep] =
    useState<ComponentProps<typeof TransactionStatus>['step']>('idle')
  const { pollUntilChange } = usePolling()
  const queryClient = getQueryClient()

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
    wallets: svmWallets,
    type: 'embedded',
  })

  const { data: basketToken } = useSuspenseQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const basketTokenPublicKey = new PublicKey(basketToken.address)

  const svmWalletPublicKey = svmWallet?.address
    ? new PublicKey(svmWallet.address)
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

  const { data: balanceInLamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: svmWallet?.address!,
    }),
    enabled: !!svmWallet?.address,
  })

  const { data: balancesEVM } = useQuery({
    ...getBalancesEVMQuery({
      address: evmWallet?.address!,
    }),
    enabled: !!evmWallet?.address,
  })

  const solanaNativeBalanceAmount = getLamportsToSol({
    lamports: balanceInLamports || 0,
  })

  const ethereumNativeBalance = balancesEVM?.balances.find(
    ({ address, chain }) => address === 'native' && chain === 'ethereum',
  )

  const ethereumNativeBalanceAmount = new BigNumber(
    ethereumNativeBalance?.amount || '',
  )
    .dividedBy(
      ethereumNativeBalance?.decimals
        ? 10 ** ethereumNativeBalance?.decimals
        : 1,
    )
    .toString()

  const ethereumUsdtBalance = balancesEVM?.balances.find(
    ({ address, chain }) =>
      address === '0xdAC17F958D2ee523a2206206994597C13D831ec7' &&
      chain === 'ethereum',
  )

  const ethereumUsdtBalanceAmount = new BigNumber(
    ethereumUsdtBalance?.amount || '',
  )
    .dividedBy(
      ethereumUsdtBalance?.decimals ? 10 ** ethereumUsdtBalance?.decimals : 1,
    )
    .toString()

  const baseNativeBalance = balancesEVM?.balances.find(
    ({ address, chain }) => address === 'native' && chain === 'base',
  )

  const baseNativeBalanceAmount = new BigNumber(baseNativeBalance?.amount || '')
    .dividedBy(
      baseNativeBalance?.decimals ? 10 ** baseNativeBalance?.decimals : 1,
    )
    .toString()

  const baseUsdtBalance = balancesEVM?.balances.find(
    ({ address, chain }) =>
      address === '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2' &&
      chain === 'base',
  )

  const baseUsdtBalanceAmount = new BigNumber(baseUsdtBalance?.amount || '')
    .dividedBy(baseUsdtBalance?.decimals ? 10 ** baseUsdtBalance?.decimals : 1)
    .toString()

  const swap = async ({ amount }: { amount: string }) => {
    if (!sellMethod?.address) {
      throw CommonFrontError.notFound({ entity: 'sellMethodAddress' })
    }

    if (!evmWallet?.address) {
      throw CommonFrontError.notFound({ entity: 'evmWallet' })
    }

    if (!svmWallet?.address) {
      throw CommonFrontError.notFound({ entity: 'svmWallet' })
    }

    if (!privySvmEmbeddedWallet) {
      throw CommonFrontError.notFound({ entity: 'privySvmEmbeddedWallet' })
    }

    const chains = {
      BASE: 'Base',
      BASE_SEPOLIA: 'BaseSepolia',
      CHAIN_UNSPECIFIED: 'Solana',
      ETHEREUM: 'Ethereum',
      ETHEREUM_SEPOLIA: 'Sepolia',
      SOLANA: 'Solana',
      SOLANA_DEVNET: 'Solana',
      SOLANA_TESTNET: 'Solana',
    } satisfies Record<ChainType, FirstParameter<typeof wh.getChain>>

    const wh = await wormhole(
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true' ? 'Testnet' : 'Mainnet',
      [evm, solana],
      {
        chains: {
          Solana: {
            rpc: process.env.NEXT_PUBLIC_NODE_SOLANA_ENDPOINT,
          },
        },
      },
    )

    const sellMethodChain = chains[sellMethod.chain as ChainType]
    const resolver = wh.resolver([MayanRouteSWIFT])

    const privyEvmSigner = new PrivyEvmSigner(
      evmWallet.address,
      sellMethodChain,
      evmSendTransaction,
    )

    const privySvmSigner = new PrivySvmSigner(
      svmWallet.address,
      'Solana',
      privySvmEmbeddedWallet,
      connection,
    )

    const sendChain = wh.getChain('Solana')
    const receiveChain = wh.getChain(sellMethodChain)
    const source = Wormhole.tokenId(sendChain.chain, 'native')

    const destination = Wormhole.tokenId(
      receiveChain.chain,
      sellMethod.type === 'native' ? 'native' : sellMethod.address,
    )

    const transferRequest = await routes.RouteTransferRequest.create(wh, {
      source,
      destination,
    })

    const [bestRoute] = await resolver.findRoutes(transferRequest)

    const validated = await bestRoute.validate(transferRequest, {
      amount,
      options: bestRoute.getDefaultOptions(),
    })

    if (!validated.valid) {
      console.error(validated.error)

      return
    }

    const quote = await bestRoute.quote(transferRequest, validated.params)

    if (!quote.success) {
      console.error(`Error fetching a quote: ${quote.error.message}`)

      return
    }

    const receipt = await bestRoute.initiate(
      transferRequest,
      privySvmSigner,
      quote,
      Wormhole.chainAddress(destination.chain, evmWallet.address),
    )

    const transferReceipt = await routes.checkAndCompleteTransfer(
      bestRoute,
      receipt,
      privyEvmSigner,
      15 * 60 * 1000,
    )

    // @ts-expect-error TODO @ted get amount from receipt
    return transferReceipt.txstatus.refundAmount as string
  }

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

        if (!svmWalletPublicKey) {
          throw CommonFrontError.notFound({ entity: 'svmWalletPublicKey' })
        }

        if (!svmWallet) {
          throw CommonFrontError.notFound({ entity: 'svmWallet' })
        }

        if (!evmWallet) {
          throw CommonFrontError.notFound({ entity: 'evmWallet' })
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
          pollUntilChange({
            queryKey: queryKeys.pieProgram.getTokenBalanceQuery({
              mint: basketTokenPublicKey,
              owner: svmWalletPublicKey,
            }).queryKey,
          })

          const { previousData, newData } = await pollUntilChange<
            PromiseReturnType<typeof connection.getBalance>
          >({
            queryKey: queryKeys.solana.getBalanceQuery({
              address: svmWallet.address,
            }).queryKey,
          })

          if (
            !(
              sellMethod?.chain === ChainType.SOLANA &&
              sellMethod?.type === 'native'
            )
          ) {
            await swap({
              amount: getLamportsToSol({
                lamports: newData - previousData,
              }).toString(),
            })
          }

          queryClient.invalidateQueries({
            queryKey: queryKeys.proxy.getBalancesEVMQuery({
              address: evmWallet.address,
            }).queryKey,
          })

          form.setValue('sellAmount', '')

          toast({
            title: t('basketSell.toastMessage.success', {
              amount: sellAmount,
              ticker: basketToken?.symbol,
            }),
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
                    {svmWalletPublicKey ? (
                      <BasketTokenBalance
                        mint={basketTokenPublicKey}
                        owner={svmWalletPublicKey}
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
        <Form.Field
          control={form.control}
          name='sellMethod'
          render={({ field }) => {
            return (
              <Form.Item>
                <Form.Label>
                  <Typography
                    typography='body1'
                    fontWeight='regular'
                    color='primary'
                  >
                    {/* TODO @ted langpack */}
                    Receive In
                  </Typography>
                </Form.Label>
                <Select.Root
                  onValueChange={(value) => {
                    const [chain, type, address] = value.split('/')

                    field.onChange({ chain, type, address })
                  }}
                  defaultValue={`${chain}/native/${WRAPPED_NATIVE_TOKEN_ADDRESSES[chain]}`}
                >
                  <Form.Control>
                    <Select.Trigger
                      layout='fillWidth'
                      color='default'
                      shape='square'
                    >
                      <Select.Value />
                    </Select.Trigger>
                  </Form.Control>
                  <Select.Content layout='triggerWidth'>
                    <Select.Group>
                      <Select.Label>Solana</Select.Label>
                      <Select.Item
                        layout='fillWidth'
                        value={`${ChainType.SOLANA}/native/${WRAPPED_NATIVE_TOKEN_ADDRESSES.SOLANA}`}
                      >
                        <CurrencyPrimitive chain={ChainType.SOLANA}>
                          <Icon size='m' shape='circle'>
                            <IcSolanaFixedColorFill />
                          </Icon>
                        </CurrencyPrimitive>
                        <Box
                          layout='fillWidth'
                          orientation='horizontal'
                          gap='s'
                          align='spaceBetweenCenter'
                        >
                          <Typography
                            typography='body1'
                            fontWeight='regular'
                            color='primary'
                          >
                            SOL
                          </Typography>
                          {!!solanaNativeBalanceAmount && (
                            <Typography
                              typography='caption2'
                              fontWeight='regular'
                              color='secondary'
                            >
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                value={solanaNativeBalanceAmount}
                                size='xs'
                                fontWeight='regular'
                              />
                            </Typography>
                          )}
                        </Box>
                      </Select.Item>
                    </Select.Group>
                    <Select.Group>
                      <Select.Label>Ethereum</Select.Label>
                      <Select.Item
                        layout='fillWidth'
                        value={`${ChainType.ETHEREUM}/native/${WRAPPED_NATIVE_TOKEN_ADDRESSES.ETHEREUM}`}
                      >
                        <CurrencyPrimitive chain={ChainType.ETHEREUM}>
                          <Icon size='m' shape='circle'>
                            <IcEthereumFixedColorFill />
                          </Icon>
                        </CurrencyPrimitive>
                        <Box
                          layout='fillWidth'
                          orientation='horizontal'
                          gap='s'
                          align='spaceBetweenCenter'
                        >
                          <Typography
                            typography='body1'
                            fontWeight='regular'
                            color='primary'
                          >
                            ETH
                          </Typography>
                          {!!ethereumNativeBalanceAmount && (
                            <Typography
                              typography='caption2'
                              fontWeight='regular'
                              color='secondary'
                            >
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                value={ethereumNativeBalanceAmount}
                                size='xs'
                                fontWeight='regular'
                              />
                            </Typography>
                          )}
                        </Box>
                      </Select.Item>
                      <Select.Item
                        layout='fillWidth'
                        value={`${ChainType.ETHEREUM}/USDT/0xdAC17F958D2ee523a2206206994597C13D831ec7`}
                      >
                        <CurrencyPrimitive chain={ChainType.ETHEREUM}>
                          <Icon size='m' shape='circle'>
                            <IcTetherFixedColorFill />
                          </Icon>
                        </CurrencyPrimitive>
                        <Box
                          layout='fillWidth'
                          orientation='horizontal'
                          gap='s'
                          align='spaceBetweenCenter'
                        >
                          <Typography
                            typography='body1'
                            fontWeight='regular'
                            color='primary'
                          >
                            USDT
                          </Typography>
                          {!!ethereumUsdtBalanceAmount && (
                            <Typography
                              typography='caption2'
                              fontWeight='regular'
                              color='secondary'
                            >
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                value={ethereumUsdtBalanceAmount}
                                size='xs'
                                fontWeight='regular'
                              />
                            </Typography>
                          )}
                        </Box>
                      </Select.Item>
                    </Select.Group>
                    <Select.Group>
                      <Select.Label>Base</Select.Label>
                      <Select.Item
                        layout='fillWidth'
                        value={`${ChainType.BASE}/native/${WRAPPED_NATIVE_TOKEN_ADDRESSES.BASE}`}
                      >
                        <CurrencyPrimitive chain={ChainType.BASE}>
                          <Icon size='m' shape='circle'>
                            <IcEthereumFixedColorFill />
                          </Icon>
                        </CurrencyPrimitive>
                        <Box
                          layout='fillWidth'
                          orientation='horizontal'
                          gap='s'
                          align='spaceBetweenCenter'
                        >
                          <Typography
                            typography='body1'
                            fontWeight='regular'
                            color='primary'
                          >
                            ETH
                          </Typography>
                          {!!baseNativeBalanceAmount && (
                            <Typography
                              typography='caption2'
                              fontWeight='regular'
                              color='secondary'
                            >
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                value={baseNativeBalanceAmount}
                                size='xs'
                                fontWeight='regular'
                              />
                            </Typography>
                          )}
                        </Box>
                      </Select.Item>
                      <Select.Item
                        layout='fillWidth'
                        value={`${ChainType.BASE}/USDT/0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2`}
                      >
                        <CurrencyPrimitive chain={ChainType.BASE}>
                          <Icon size='m' shape='circle'>
                            <IcTetherFixedColorFill />
                          </Icon>
                        </CurrencyPrimitive>
                        <Box
                          layout='fillWidth'
                          orientation='horizontal'
                          gap='s'
                          align='spaceBetweenCenter'
                        >
                          <Typography
                            typography='body1'
                            fontWeight='regular'
                            color='primary'
                          >
                            USDT
                          </Typography>
                          {!!baseUsdtBalanceAmount && (
                            <Typography
                              typography='caption2'
                              fontWeight='regular'
                              color='secondary'
                            >
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                value={baseUsdtBalanceAmount}
                                size='xs'
                                fontWeight='regular'
                              />
                            </Typography>
                          )}
                        </Box>
                      </Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Form.Item>
            )
          }}
        />
        <Box layout='fillWidth' gap='s'>
          {!!svmWalletPublicKey && (
            <SetBasketTokenAmountToSellButtons
              mint={basketTokenPublicKey}
              owner={svmWalletPublicKey}
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
            // disabled={!form.formState.isValid}
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

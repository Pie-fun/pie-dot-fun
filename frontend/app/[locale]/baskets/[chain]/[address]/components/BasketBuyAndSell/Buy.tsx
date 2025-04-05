'use client'

import * as Form from '@/components/Form/Form'
import { useTranslations } from 'next-intl'
import * as styles from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Buy.css'
import { useFormContext, useWatch } from 'react-hook-form'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import {
  IcEthereumFixedColorFill,
  IcLoadingCircleDashFill,
  IcSolanaFixedColorFill,
  IcTetherFixedColorFill,
} from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import {
  DECIMALS,
  ICONS_SOLID_FROM_CHAIN_TYPE,
  WRAPPED_NATIVE_TOKEN_ADDRESSES,
  SLIPPAGE_PERCENTAGE,
  SYMBOL_FROM_CHAIN_TYPE,
} from '@/constants/blockChains'
import {
  ChainType,
  Currency,
} from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import {
  useSendTransaction as useEvmSendTransaction,
  useSolanaWallets,
} from '@privy-io/react-auth'
import { PrivyLoginButton } from '@/app/components/PrivyLoginButton/PrivyLoginButton'
import { Slippage } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/Slippage'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { usePrivyWallet } from '@/libs/privy/usePrivyWallet'
import { getFungibleTokenMarketResource } from '@/app/api/backend/v1/fungibleTokenMarket/resource'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import { BuyAndSellSchema } from '@/app/[locale]/baskets/[chain]/[address]/useBuyAndSellSchema'
import { getFungibleTokenMarketQuery } from '@/app/api/backend/v1/fungibleTokenMarket/queries'
import { useQuery } from '@tanstack/react-query'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { useSolana } from '@/hooks/useSolana'
import { Box } from '@/components/Box/Box'
import BigNumber from 'bignumber.js'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { getBasketTokenMarket } from '@/app/api/backend/v1/basketTokenMarket/requests'
import { getBasketTokenMarketResource } from '@/app/api/backend/v1/basketTokenMarket/resource'
import { PieProgram } from '@ao-labs/pie-dot-fun-solana'
import { useToast } from '@/components/Toast/useToast'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  VersionedTransaction,
} from '@solana/web3.js'
import { getUint8ArrayFromBase64 } from '@/utils/getUint8ArrayFromBase64'
import { getJitoError } from '@/libs/pie-program/getJitoError'
import { getPollingJitoBundleStatus } from '@/libs/pie-program/getPollingJitoBundleStatus'
import { buildMintTx } from '@/app/api/backend/v1/pieProgram/requests'
import { useUser } from '@/libs/api/useUser'
import {
  ComponentProps,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'
import { FirstParameter } from '@/types/utility'
import { getHoldingResource } from '@/app/api/backend/v1/holding/resource'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'
import { TransactionStatus } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/TransactionStatus'
import { flushSync } from 'react-dom'
import * as Card from '@/components/Card/Card'
import { RebalancingCard } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/RebalancingCard'
import { MevTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/MevTooltip'
import { CollateralizedTooltip } from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/CollateralizedTooltip'
import { BuyFrontError, CommonFrontError } from '@/utils/frontErrors'
import { BuyContractError } from '@/utils/contractErrors'
import { useSearchParams } from 'next/navigation'
import { usePolling } from '@/hooks/usePolling'
import { queryKeys } from '@/libs/react-query/queryKeys'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import * as Select from '@/components/Select/Select'
import { Currency as CurrencyPrimitive } from '@/components/Currency/Currency'
import { getBalancesEVMQuery } from '@/app/api/backend/proxy/queries'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import { ChainAndTokenType } from '@/types/blockChain'
import { Wormhole, wormhole, routes } from '@wormhole-foundation/sdk'
import evm from '@wormhole-foundation/sdk/evm'
import solana from '@wormhole-foundation/sdk/solana'
import { MayanRouteSWIFT } from '@mayanfinance/wormhole-sdk-route'
import { PrivyEvmSigner } from '@/libs/privy/PrivyEvmSigner'
import { PrivySvmSigner } from '@/libs/privy/PrivySvmSigner'
import { getQueryClient } from '@/providers/QueryClientProvider/getQueryClient'

type BuyProps = {
  chain: ChainType
  address: string
}

export function Buy({ chain, address }: Readonly<BuyProps>) {
  const t = useTranslations()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const { connection, cluster } = useSolana()
  const { isAuthenticated, wallet: svmWallet } = useUser({ vmType: 'SVM' })
  const { wallet: evmWallet } = useUser({ vmType: 'EVM' })
  const form = useFormContext<BuyAndSellSchema>()
  const { wallets: svmWallets } = useSolanaWallets()
  const { buyAmount, slippage, buyMethod } = useWatch({ control: form.control })
  const [isLoading, startLoading] = useTransition()
  const [step, setStep] =
    useState<ComponentProps<typeof TransactionStatus>['step']>('idle')
  const bufferPct = searchParams.get('bufferPct')
  const { pollUntilChange } = usePolling()
  const extraFeeInLamports = '17500000'
  const { sendTransaction: evmSendTransaction } = useEvmSendTransaction()
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

  const suggestAmounts = {
    SOLANA: [0.5, 1, 5, 10, Infinity],
    SOLANA_DEVNET: [0.5, 1, 5, 10, Infinity],
    SOLANA_TESTNET: [0.5, 1, 5, 10, Infinity],
    CHAIN_UNSPECIFIED: [1, 5, 10, 50, Infinity],
    BASE: [0.01, 0.1, 0.5, 1],
    BASE_SEPOLIA: [0.01, 0.1, 0.5, 1],
    ETHEREUM: [0.01, 0.1, 0.5, 1],
    ETHEREUM_SEPOLIA: [0.01, 0.1, 0.5, 1],
    USDT: [100, 500, 1000, 2000],
  } satisfies Record<ChainAndTokenType, number[]>

  const minimumAmounts = {
    CHAIN_UNSPECIFIED: 0.1,
    SOLANA: 0.1,
    SOLANA_DEVNET: 0.1,
    SOLANA_TESTNET: 0.1,
    BASE: 0.001,
    BASE_SEPOLIA: 0.001,
    ETHEREUM: 0.001,
    ETHEREUM_SEPOLIA: 0.001,
    USDT: 10,
  } satisfies Record<ChainAndTokenType, number>

  const { data: basketToken } = useQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const basketTokenPublicKey = basketToken?.address
    ? new PublicKey(basketToken.address)
    : undefined

  const walletPublicKey = svmWallet?.address
    ? new PublicKey(svmWallet.address)
    : undefined

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

  const { data: fungibleTokenMarket } = useQuery({
    ...getFungibleTokenMarketQuery({
      fungibleTokenMarket: getFungibleTokenMarketResource({
        chain: buyMethod?.chain as ChainType,
        address: buyMethod?.address!,
      }),
      currency: Currency.CURRENCY_USDC,
    }),
    enabled: !!buyMethod?.chain && !!buyMethod?.address,
  })

  const price = new BigNumber(fungibleTokenMarket?.price?.formattedAmount ?? 0)
    .multipliedBy(getUnFormattedNumber({ value: buyAmount }) || 0)
    .toString()

  const isValidBuyAmount = new BigNumber(buyAmount ?? 0).isGreaterThan(0)

  const swap = async () => {
    if (!buyMethod?.address) {
      throw CommonFrontError.notFound({ entity: 'buyMethodAddress' })
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

    if (!buyAmount) {
      throw CommonFrontError.notFound({ entity: 'buyAmount' })
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
    )

    const buyMethodChain = chains[buyMethod.chain as ChainType]
    const resolver = wh.resolver([MayanRouteSWIFT])

    const privyEvmSigner = new PrivyEvmSigner(
      evmWallet.address,
      buyMethodChain,
      evmSendTransaction,
    )

    const privySvmSigner = new PrivySvmSigner(
      svmWallet.address,
      'Solana',
      privySvmEmbeddedWallet,
      connection,
    )

    const sendChain = wh.getChain(buyMethodChain)
    const receiveChain = wh.getChain('Solana')

    const source = Wormhole.tokenId(
      sendChain.chain,
      buyMethod?.type === 'native' ? 'native' : buyMethod?.address,
    )

    const destination = Wormhole.tokenId(receiveChain.chain, 'native')

    const transferRequest = await routes.RouteTransferRequest.create(wh, {
      source,
      destination,
    })

    const [bestRoute] = await resolver.findRoutes(transferRequest)

    const validated = await bestRoute.validate(transferRequest, {
      amount: buyAmount,
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
      privyEvmSigner,
      quote,
      Wormhole.chainAddress(destination.chain, svmWallet.address),
    )

    const transferReceipt = await routes.checkAndCompleteTransfer(
      bestRoute,
      receipt,
      privySvmSigner,
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
        throw BuyContractError.insufficientFunds()
      }

      if (cause === 'SLIPPAGE_ISSUE') {
        throw BuyContractError.slippage()
      }

      if (cause === 'REBALANCE_TIMING_ISSUE') {
        throw BuyContractError.rebalancing()
      }

      if (cause === 'UNKNOWN_ERROR') {
        throw BuyContractError.unknown()
      }
    }

    return bundleSimluationResult?.value.summary
  }

  const buy = () => {
    startLoading(async () => {
      try {
        if (!privySvmEmbeddedWallet) {
          throw CommonFrontError.notFound({ entity: 'privySvmEmbeddedWallet' })
        }

        if (!basketToken?.address) {
          throw CommonFrontError.notFound({ entity: 'basketTokenAddress' })
        }

        if (!buyAmount) {
          throw CommonFrontError.notFound({ entity: 'buyAmount' })
        }

        if (!basketTokenPublicKey) {
          throw CommonFrontError.notFound({ entity: 'basketTokenPublicKey' })
        }

        if (!walletPublicKey) {
          throw CommonFrontError.notFound({ entity: 'walletPublicKey' })
        }

        if (!svmWallet) {
          throw CommonFrontError.notFound({ entity: 'svmWallet' })
        }

        if (!evmWallet) {
          throw CommonFrontError.notFound({ entity: 'evmWallet' })
        }

        let swapCalculatedAmount = ''

        if (
          !(
            buyMethod?.chain === ChainType.SOLANA &&
            buyMethod?.type === 'native'
          )
        ) {
          const swapAmount = await swap()

          if (!swapAmount) {
            throw CommonFrontError.notFound({ entity: 'swapAmount' })
          }

          const feeCalculatedSwapAmount = new BigNumber(swapAmount)
            .minus(
              getLamportsToSol({
                lamports: new BigNumber(extraFeeInLamports).toNumber(),
              }),
            )
            .toString()

          if (balanceInLamports) {
            const hasEnoughBalance = new BigNumber(
              balanceInLamports,
            ).isGreaterThan(extraFeeInLamports)

            if (!hasEnoughBalance) {
              swapCalculatedAmount = feeCalculatedSwapAmount
            } else {
              swapCalculatedAmount = swapAmount
            }
          } else {
            swapCalculatedAmount = feeCalculatedSwapAmount
          }
        }

        const userInputInLamports = new BigNumber(
          swapCalculatedAmount || buyAmount,
        )
          .multipliedBy(LAMPORTS_PER_SOL)
          .toString()

        const isValidBalance = new BigNumber(userInputInLamports)
          .plus(extraFeeInLamports)
          .isLessThanOrEqualTo(balanceInLamports || 0)

        if (!isValidBalance) {
          throw BuyFrontError.insufficientFunds()
        }

        flushSync(() => setStep('creatingTransaction'))

        const basketTokenMarket = await getBasketTokenMarket({
          basketTokenMarket: getBasketTokenMarketResource({
            chain,
            address: basketToken.address,
          }),
          currency: Currency.CURRENCY_SOL,
        })

        if (!basketTokenMarket.value) {
          throw CommonFrontError.notFound({ entity: 'basketTokenMarket' })
        }

        const {
          finalInputSolRequiredInLamports,
          revisedSwapData,
          finalBasketAmountInRawDecimal,
        } = await pieProgram.calculateOptimalInputAmounts({
          basketId: basketToken.onchainId.toString(),
          userInputInLamports,
          basketPriceInLamports: basketTokenMarket.value.rawAmount,
          slippagePct: Number(slippage),
          feePct: 1,
          bufferPct: bufferPct ? Number(bufferPct) : 2,
        })

        //@TODO remove (debug)
        console.info({
          finalInputSolRequiredInLamports,
          revisedSwapData,
          finalBasketAmountInRawDecimal,
          balanceInLamports,
        })

        const isValid = new BigNumber(finalInputSolRequiredInLamports)
          .plus(extraFeeInLamports)
          .isLessThanOrEqualTo(balanceInLamports || 0)

        if (!isValid) {
          throw BuyFrontError.insufficientFunds()
        }

        const { serializedTxs } = await buildMintTx({
          basketMint: basketToken.address,
          mintAmount: finalBasketAmountInRawDecimal,
          inputAmount: finalInputSolRequiredInLamports,
          ownerAddress: privySvmEmbeddedWallet.address,
          buySwapData: revisedSwapData,
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
            throw BuyContractError.unknown()
          }
        }

        if (bundleStatus === 'Landed') {
          form.setValue('buyAmount', '')

          toast({
            title: t('basketBuy.toastMessge.success', {
              amount: getFormattedNumber({
                value: finalBasketAmountInRawDecimal,
                decimalDivisor: 10 ** DECIMALS.BASKET_TOKEN,
              }),
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
              address: svmWallet.address,
            }).queryKey,
          })

          queryClient.invalidateQueries({
            queryKey: queryKeys.proxy.getBalancesEVMQuery({
              address: evmWallet.address,
            }).queryKey,
          })
        }

        flushSync(() => setStep('idle'))
      } catch (error) {
        flushSync(() => setStep('idle'))

        if (error instanceof BuyFrontError) {
          sendGTMEvent({
            event: 'tradingerror_modal_view',
            action: 'buy',
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

        if (error instanceof BuyContractError) {
          sendGTMEvent({
            event: 'tradingerror_modal_view',
            action: 'buy',
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
          name='buyMethod'
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
                    Payment method
                  </Typography>
                </Form.Label>
                <Select.Root
                  onValueChange={(value) => {
                    const [chain, type, address] = value.split('/')

                    field.onChange({ chain, type, address })
                    form.setValue('buyAmount', '')
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
        <Form.Field
          control={form.control}
          name='buyAmount'
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
          {(
            suggestAmounts[buyMethod?.type as ChainAndTokenType] ||
            suggestAmounts[buyMethod?.chain as ChainAndTokenType]
          ).map((amount) => {
            const isMax = amount === Infinity

            const maxAmount = new BigNumber(balanceInLamports || 0)
              .minus(extraFeeInLamports)
              .dividedBy(10 ** DECIMALS[chain])
              .toString()

            const isValidMaxAmount = new BigNumber(
              balanceInLamports || 0,
            ).isGreaterThanOrEqualTo(extraFeeInLamports)

            const calculatedAmount = new BigNumber(amount || 0).toString()

            const BuyButton = (
              <Button
                key={amount}
                layout='fillWidth'
                buttonType='outline'
                size='s'
                color='secondary'
                disabled={isMax && !isValidMaxAmount}
                onClick={() => {
                  form.setValue(
                    'buyAmount',
                    isMax ? maxAmount : calculatedAmount,
                    {
                      shouldValidate: true,
                      shouldDirty: true,
                    },
                  )

                  form.setFocus('buyAmount')
                }}
              >
                {!isMax && (
                  <Icon size='s'>
                    {ICONS_SOLID_FROM_CHAIN_TYPE[
                      buyMethod?.type as ChainAndTokenType
                    ] ||
                      ICONS_SOLID_FROM_CHAIN_TYPE[
                        buyMethod?.chain as ChainAndTokenType
                      ]}
                  </Icon>
                )}
                <Typography typography='body2' fontWeight='regular'>
                  {isMax
                    ? t('basketTradingButton.max')
                    : getFormattedNumber({
                        value: amount,
                        options: {
                          notation: 'compact',
                          maximumFractionDigits: 2,
                        },
                      })}
                </Typography>
              </Button>
            )

            if (isMax && !isAuthenticated) {
              return null
            }

            if (isMax && !isValidMaxAmount) {
              return (
                <Tooltip.Provider key={amount}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div>{BuyButton}</div>
                    </Tooltip.Trigger>
                    <Tooltip.Content color='default'>
                      {t('basketTradingButton.maxTooltip')}
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )
            }

            return BuyButton
          })}
        </Box>
      </Box>
      <Slippage />
      {buyAmount &&
        Number(getUnFormattedNumber({ value: buyAmount })) > 0 &&
        Number(getUnFormattedNumber({ value: buyAmount })) <
          (minimumAmounts[buyMethod?.type as ChainAndTokenType] ||
            minimumAmounts[buyMethod?.chain as ChainAndTokenType]) && (
          <Card.Root background='primary' size='s'>
            <Card.Header>
              <Typography
                typography='caption2'
                fontWeight='regular'
                color='brandPrimary'
              >
                {t.rich('basketTrade.buyMinimumAmount', {
                  amount:
                    minimumAmounts[buyMethod?.type as ChainAndTokenType] ||
                    minimumAmounts[buyMethod?.chain as ChainAndTokenType],
                  ticker:
                    buyMethod?.type === 'USDT'
                      ? 'USDT'
                      : SYMBOL_FROM_CHAIN_TYPE[buyMethod?.chain as ChainType],
                  fontweightBold: (children) => (
                    <Typography fontWeight='bold'>{children}</Typography>
                  ),
                })}
              </Typography>
            </Card.Header>
            <Card.Footer />
          </Card.Root>
        )}
      {!basketToken?.isRebalancing && isAuthenticated && (
        <Box layout='fillWidth' orientation='vertical' gap='s'>
          <Button
            layout='fillWidth'
            buttonType='solid'
            size='m'
            color='infoPrimary'
            shape='round'
            disabled={!isValidBuyAmount}
            isLoading={isLoading}
            onClick={buy}
          >
            <Typography typography='body1' fontWeight='bold'>
              {t('common.buy')}
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
                  type='buy'
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

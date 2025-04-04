'use client'

import { usePrivyWallet } from '@/libs/privy/usePrivyWallet'
import { useConnectWallet, useWallets } from '@privy-io/react-auth'
import { Button } from '@/components/Button/Button'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { Typography } from '@/components/Typography/Typography'
import * as Card from '@/components/Card/Card'
import * as Select from '@/components/Select/Select'
import { Icon } from '@/components/Icon/Icon'
import {
  IcArbitrumFixedColorFill,
  IcArrowOutline,
  IcBaseFixedColorFill,
  IcBlastFixedColorFill,
  IcChangeOutline,
  IcClockFill,
  IcEthereumFixedColorFill,
  IcGasFill,
  IcInfoCircleOutline,
  IcOptimismFixedColorFill,
  IcPieChartQuarterFill,
  IcSolanaFixedColorFill,
  IcTetherFixedColorFill,
  IcUsdcFixedColorFill,
  IcWalletOutline,
} from '@/components/Icon/Icons'
import {
  NATIVE_TOKEN_ADDRESSES,
  SYMBOL_FROM_CHAIN_TYPE,
} from '@/constants/blockChains'
import { Box } from '@/components/Box/Box'
import { getLamportsToSol } from '@/libs/solana-web3/getLamportsToSol'
import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react'
import { useSolana } from '@/hooks/useSolana'
import { QRCode } from '@/components/QRCode/QRCode'
import { getFormattedNumber } from '@/utils/getFormattedNumber'
import { getBalanceQuery } from '@/app/api/external/node/v1/solana/queries'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import * as styles from '@/app/components/Deposit/DepositPrimitive.css'
import { POLLING_INTERVAL } from '@/constants/common'
import { useToast } from '@/components/Toast/useToast'
import { getShortAddress } from '@/utils/getShortAddress'
import { useWizard } from 'react-use-wizard'
import { useBalance, useWalletClient } from 'wagmi'
import { useRelayClient } from '@/providers/RelayProvider/RelayClientProvider'
import { useDebounce } from 'use-debounce'
import {
  useQuote,
  useRelayChains,
  useTokenList,
} from '@reservoir0x/relay-kit-hooks'
import { formatEther, parseUnits } from 'viem'
import { Input } from '@/components/Input/Input'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { Rate } from '@/components/Rate/Rate'
import * as KeyValue from '@/components/KeyValue/KeyValue'
import { Separator } from '@/components/Separator/Separator'
import { Badge } from '@/components/Badge/Badge'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import { getBalancesEVMQuery } from '@/app/api/backend/proxy/queries'
import BigNumber from 'bignumber.js'
import {
  BridgeSchema,
  useBridgeSchema,
} from '@/app/components/Deposit/useBridgeSchema'
import { useForm, useFormContext, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@/components/Form/Form'
import icSolanaFixedColorFill from '@/assets/icons/ic_solana_fixedColor_fill.svg'
import icEthereumFixedColorFill from '@/assets/icons/ic_ethereum_fixedColor_fill.svg'
import { useUser } from '@/libs/api/useUser'
import { paths } from '@reservoir0x/relay-sdk'
import { CustomFetchError } from '@/libs/fetch/types'
import { useSetActiveWallet } from '@privy-io/wagmi'
import { SUPPORT_WALLETS } from '@/libs/privy/constants'
import { getEthereumHex } from '@/utils/getEthereumHex'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'
import { Currency } from '@/components/Currency/Currency'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { EthereumAddress } from '@/types/utility'
import { base, baseSepolia, mainnet, sepolia } from 'viem/chains'

// https://docs.relay.link/references/api/handling-errors#handling-errors
export enum RELAY_ERROR_CODES {
  AMOUNT_TOO_LOW = 'AMOUNT_TOO_LOW',
  ERC20_ROUTER_ADDRESS_NOT_FOUND = 'ERC20_ROUTER_ADDRESS_NOT_FOUND',
  EXTRA_TXS_NOT_SUPPORTED = 'EXTRA_TXS_NOT_SUPPORTED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  INSUFFICIENT_LIQUIDITY = 'INSUFFICIENT_LIQUIDITY',
  INVALID_ADDRESS = 'INVALID_ADDRESS',
  INVALID_EXTRA_TXS = 'INVALID_EXTRA_TXS',
  NO_QUOTES = 'NO_QUOTES',
  NO_SWAP_ROUTES_FOUND = 'NO_SWAP_ROUTES_FOUND',
  PERMIT_FAILED = 'PERMIT_FAILED',
  SWAP_IMPACT_TOO_HIGH = 'SWAP_IMPACT_TOO_HIGH',
  SWAP_QUOTE_FAILED = 'SWAP_QUOTE_FAILED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  UNSUPPORTED_CHAIN = 'UNSUPPORTED_CHAIN',
  UNSUPPORTED_CURRENCY = 'UNSUPPORTED_CURRENCY',
  UNSUPPORTED_EXECUTION_TYPE = 'UNSUPPORTED_EXECUTION_TYPE',
  UNSUPPORTED_ROUTE = 'UNSUPPORTED_ROUTE',
  USER_RECIPIENT_MISMATCH = 'USER_RECIPIENT_MISMATCH',
}

type RelayError = CustomFetchError & {
  response?: {
    data?: {
      errorCode: keyof typeof RELAY_ERROR_CODES
      message: string
    }
  }
}

const steps = {
  depositMethods: 0,
  bridge: 1,
}

export function GoToMainStepButton() {
  const { goToStep } = useWizard()

  return (
    <Button
      buttonType='text'
      shape='square'
      color='secondary'
      size='squareS'
      onClick={() => goToStep(steps.depositMethods)}
    >
      <Icon size='s' rotate={-90}>
        <IcArrowOutline />
      </Icon>
    </Button>
  )
}

export function DepositMethodsTitle({
  ...props
}: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography typography='title4' fontWeight='bold' {...props}>
      {t('depositStep1.title')}
    </Typography>
  )
}

export function BridgeTitle({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Typography typography='title4' fontWeight='bold' {...props}>
      {t('depositStep2.title')}
    </Typography>
  )
}

export function DepositMethods() {
  return (
    <div className={styles.depositMethods()}>
      <QRCodeCard />
      <QRCodeEVMCard />
    </div>
  )
}

function QRCodeCard() {
  const t = useTranslations()
  const { connection } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const { toast } = useToast()

  const balance = useRef({
    isInit: false,
    lamports: 0,
  })

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: wallet?.address!,
    }),
    enabled: !!wallet?.address,
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  useEffect(() => {
    if (!balance.current.isInit && lamports) {
      balance.current = {
        isInit: true,
        lamports,
      }
    }

    if (
      balance.current.isInit &&
      lamports &&
      lamports > balance.current.lamports
    ) {
      balance.current = {
        isInit: true,
        lamports,
      }
      toast({ title: t('toastMessage.deposit.solUpdate') })
    }
  }, [lamports, t, toast])

  return (
    <Card.Root
      layout='fillWidth'
      background='default'
      border='primary'
      size='m'
    >
      <Card.Header>
        <Box layout='fillWidth' orientation='vertical' gap='m'>
          <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
            <Box
              layout='fillWidth'
              orientation='vertical'
              gap='xxs'
              align='center'
            >
              <Typography
                typography='body2'
                fontWeight='regular'
                color='brandPrimary'
              >
                {t('depositStep1.sol.description')}
              </Typography>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Typography
                  typography='body1'
                  fontWeight='bold'
                  color='primary'
                >
                  {t('depositStep1.sol.title')}
                </Typography>
                <Icon size='s'>
                  <IcSolanaFixedColorFill />
                </Icon>
              </Box>
            </Box>
            <QRCode
              value={wallet?.address}
              size={132}
              quietZone={4}
              logoImage={icSolanaFixedColorFill.src}
              logoPaddingStyle='circle'
              logoPadding={1}
            />
          </Box>
          <Box orientation='vertical' gap='s'>
            <Box orientation='vertical' gap='xxs'>
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='primary'
              >
                {t('common.address')}
              </Typography>
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='secondary'
                wordBreak='breakAll'
              >
                {wallet?.address}
              </Typography>
            </Box>
            <Box orientation='vertical' gap='xxs'>
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='primary'
              >
                {t('common.deposit')}
              </Typography>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Typography
                  typography='body2'
                  fontWeight='bold'
                  color='brandPrimary'
                >
                  <CurrencyWithQuantity
                    currencyType='fiat'
                    value={getLamportsToSol({ lamports: lamports ?? 0 })}
                    size='s'
                    fontWeight='bold'
                  />
                </Typography>
                <Typography
                  typography='body2'
                  fontWeight='bold'
                  color='brandPrimary'
                >
                  {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Card.Root background='default' border='infoPrimary' size='s'>
            <Card.Header>
              <Box orientation='horizontal' gap='s'>
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='infoPrimary'
                >
                  [{t('depositStep1.sol.recommand.title')}]
                </Typography>
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('depositStep1.sol.recommand.description')}
                </Typography>
              </Box>
            </Card.Header>
            <Card.Footer />
          </Card.Root>
          {wallet?.address && (
            <CopyToClipboard
              layout='fillWidth'
              value={wallet?.address}
              iconSize='m'
            >
              <Typography typography='body1' fontWeight='bold'>
                {t('common.copyAddress')}
              </Typography>
            </CopyToClipboard>
          )}
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

function QRCodeEVMCard() {
  const t = useTranslations()
  const { wallet } = useUser({ vmType: 'EVM' })
  const { toast } = useToast()

  const ethereumBalanceRef = useRef({
    isInit: false,
    balance: 0,
  })

  const baseEthereumBalanceRef = useRef({
    isInit: false,
    balance: 0,
  })

  const { data: ethereumBalance } = useBalance({
    address: wallet?.address! as EthereumAddress,
    chainId:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? sepolia.id
        : mainnet.id,
    query: {
      enabled: !!wallet?.address,
      refetchInterval: POLLING_INTERVAL.SECONDARY,
    },
  })

  const { data: baseEthereumBalance } = useBalance({
    address: wallet?.address! as EthereumAddress,
    chainId:
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? baseSepolia.id
        : base.id,
    query: {
      enabled: !!wallet?.address,
      refetchInterval: POLLING_INTERVAL.SECONDARY,
    },
  })

  useEffect(() => {
    if (!ethereumBalanceRef.current.isInit && ethereumBalance?.value) {
      ethereumBalanceRef.current = {
        isInit: true,
        balance: new BigNumber(ethereumBalance.value.toString()).toNumber(),
      }
    }

    if (
      ethereumBalanceRef.current.isInit &&
      ethereumBalance?.value &&
      ethereumBalance.value > ethereumBalanceRef.current.balance
    ) {
      ethereumBalanceRef.current = {
        isInit: true,
        balance: new BigNumber(ethereumBalance.value.toString()).toNumber(),
      }
      // TODO @ted langpack
      toast({ title: 'ETH balance deposit has been updated.' })
    }
  }, [ethereumBalance?.value, t, toast])

  useEffect(() => {
    if (!baseEthereumBalanceRef.current.isInit && baseEthereumBalance?.value) {
      baseEthereumBalanceRef.current = {
        isInit: true,
        balance: new BigNumber(baseEthereumBalance.value.toString()).toNumber(),
      }
    }

    if (
      baseEthereumBalanceRef.current.isInit &&
      baseEthereumBalance?.value &&
      baseEthereumBalance.value > baseEthereumBalanceRef.current.balance
    ) {
      baseEthereumBalanceRef.current = {
        isInit: true,
        balance: new BigNumber(baseEthereumBalance.value.toString()).toNumber(),
      }
      // TODO @ted langpack
      toast({ title: 'ETH balance deposit has been updated.' })
    }
  }, [baseEthereumBalance?.value, t, toast])

  return (
    <Card.Root
      layout='fillWidth'
      background='default'
      border='primary'
      size='m'
    >
      <Card.Header>
        <Box layout='fillWidth' orientation='vertical' gap='m'>
          <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
            <Box
              layout='fillWidth'
              orientation='vertical'
              gap='xxs'
              align='center'
            >
              <Typography
                typography='body2'
                fontWeight='regular'
                color='brandPrimary'
              >
                {/* TODO @ted langpack */}
                Do You have ETH?
              </Typography>
              <Box orientation='horizontal' gap='xxs' align='center'>
                <Typography
                  typography='body1'
                  fontWeight='bold'
                  color='primary'
                >
                  {/* TODO @ted langpack */}
                  Deposit ETH
                </Typography>
                <Icon size='s' shape='circle'>
                  <IcEthereumFixedColorFill />
                </Icon>
                <Currency size='s' chain={ChainType.BASE}>
                  <Icon size='s' shape='circle'>
                    <IcEthereumFixedColorFill />
                  </Icon>
                </Currency>
              </Box>
            </Box>
            <QRCode
              value={wallet?.address}
              size={132}
              quietZone={4}
              logoImage={icEthereumFixedColorFill.src}
              logoPaddingStyle='circle'
              logoPadding={1}
            />
          </Box>
          <Box orientation='vertical' gap='s'>
            <Box orientation='vertical' gap='xxs'>
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='primary'
              >
                {t('common.address')}
              </Typography>
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='secondary'
                wordBreak='breakAll'
              >
                {wallet?.address}
              </Typography>
            </Box>
            <Box layout='fillWidth' gap='m'>
              <Box layout='fillWidth' orientation='vertical' gap='xxs'>
                <Typography
                  typography='caption1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.deposit')}
                </Typography>
                <Box orientation='horizontal' gap='xxs' align='center'>
                  <Typography
                    typography='body2'
                    fontWeight='bold'
                    color='brandPrimary'
                  >
                    <CurrencyWithQuantity
                      currencyType='fiat'
                      value={
                        ethereumBalance?.value
                          ? formatEther(ethereumBalance.value)
                          : 0
                      }
                      size='s'
                      fontWeight='bold'
                    />
                  </Typography>
                  <Typography
                    typography='body2'
                    fontWeight='bold'
                    color='brandPrimary'
                  >
                    {SYMBOL_FROM_CHAIN_TYPE['ETHEREUM']}
                  </Typography>
                </Box>
              </Box>
              <Box layout='fillWidth' orientation='vertical' gap='xxs'>
                <Typography
                  typography='caption1'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.deposit')}
                </Typography>
                <Box orientation='horizontal' gap='xxs' align='center'>
                  <Typography
                    typography='body2'
                    fontWeight='bold'
                    color='brandPrimary'
                  >
                    <CurrencyWithQuantity
                      currencyType='fiat'
                      value={
                        baseEthereumBalance?.value
                          ? formatEther(baseEthereumBalance.value)
                          : 0
                      }
                      size='s'
                      fontWeight='bold'
                    />
                  </Typography>
                  <Typography
                    typography='body2'
                    fontWeight='bold'
                    color='brandPrimary'
                  >
                    {/* TODO @ted */}
                    Base {SYMBOL_FROM_CHAIN_TYPE['BASE']}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Card.Root background='default' border='infoPrimary' size='s'>
            <Card.Header>
              <Box orientation='horizontal' gap='s'>
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='infoPrimary'
                >
                  [{t('depositStep1.sol.recommand.title')}]
                </Typography>
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('depositStep1.sol.recommand.description')}
                </Typography>
              </Box>
            </Card.Header>
            <Card.Footer />
          </Card.Root>
          {wallet?.address && (
            <CopyToClipboard
              layout='fillWidth'
              value={wallet?.address}
              iconSize='m'
            >
              <Typography typography='body1' fontWeight='bold'>
                {t('common.copyAddress')}
              </Typography>
            </CopyToClipboard>
          )}
        </Box>
      </Card.Header>
      <Card.Footer />
    </Card.Root>
  )
}

function ConnectedWallet() {
  const t = useTranslations()
  const { toast } = useToast()
  const { setActiveWallet } = useSetActiveWallet()
  const { wallets: ethereumWallets } = useWallets()

  const { connectWallet } = useConnectWallet({
    onSuccess: ({ wallet }) => {
      if (wallet.type === 'solana') {
        return toast({
          title: t('depositStep1.bridge.toastMessage.connectEthereumWallet'),
        })
      }

      const ethereumExternalWallet = ethereumWallets[0]

      setActiveWallet(ethereumExternalWallet)
    },
  })

  const { wallet: ethereumExternalWallet } = usePrivyWallet({
    wallets: ethereumWallets,
    type: 'external',
  })

  return (
    <Box orientation='horizontal' gap='xxs' align='center'>
      <Icon size='s' color='secondary'>
        <IcWalletOutline />
      </Icon>
      {ethereumExternalWallet && (
        <Typography
          typography='caption2'
          fontWeight='regular'
          color='secondary'
        >
          {getShortAddress({
            address: ethereumExternalWallet.address,
            type: 'svm',
          })}
        </Typography>
      )}
      <Button
        buttonType='text'
        shape='square'
        color='secondary'
        size='squareS'
        onClick={() => {
          connectWallet({ walletList: SUPPORT_WALLETS })
          sendGTMEvent({ event: 'deposit_connectwalletbutton_click' })
        }}
      >
        <Icon size='s' color='secondary'>
          <IcChangeOutline />
        </Icon>
      </Button>
    </Box>
  )
}

function ConnectedEmbeddedWallet() {
  const { wallet } = useUser({ vmType: 'SVM' })

  return (
    <Box orientation='horizontal' gap='xxs' align='center'>
      <Icon size='s' color='secondary'>
        <IcWalletOutline />
      </Icon>
      {wallet && (
        <Typography
          typography='caption2'
          fontWeight='regular'
          color='secondary'
        >
          {getShortAddress({
            address: wallet.address,
            type: 'svm',
          })}
        </Typography>
      )}
    </Box>
  )
}

type UseQuoteQuery = ReturnType<typeof useQuote>

type Chain = NonNullable<
  paths['/chains']['get']['responses']['200']['content']['application/json']['chains']
>[0]

type BridgeContextProps = {
  query: UseQuoteQuery
  setQuery: (query: UseQuoteQuery) => void
  isLoading: boolean
  setSelectedChain: (chain: Chain) => void
}

const BridgeContext = createContext<Partial<BridgeContextProps>>({})

export function BridgeRoot({ children }: PropsWithChildren) {
  const t = useTranslations()
  const [query, setQuery] = useState<UseQuoteQuery>()
  const [selectedChain, setSelectedChain] = useState<Chain>()
  const { toast } = useToast()
  const [isLoading, startLoading] = useTransition()
  const { schema } = useBridgeSchema()
  const { wallets: privyEvmWallets } = useWallets()

  const { wallet: privyExternalEvmWallet } = usePrivyWallet({
    wallets: privyEvmWallets,
    type: 'external',
  })

  const form = useForm<BridgeSchema>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      amount: '',
      balance: '',
    },
  })

  const bridge = async () => {
    startLoading(async () => {
      if (!selectedChain) {
        throw new Error('Chain is not selected')
      }

      const { id, name, currency, httpRpcUrl } = selectedChain
      const { decimals, name: currencyName, symbol } = currency ?? {}

      if (
        !id ||
        !name ||
        !decimals ||
        !currencyName ||
        !symbol ||
        !httpRpcUrl
      ) {
        throw new Error('Chain data is not valid')
      }

      const provider = await privyExternalEvmWallet?.getEthereumProvider()

      await provider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: getEthereumHex({ value: id }) }],
      })

      try {
        await query?.executeQuote?.(({ steps, details }) => {
          const isAllCompleted = steps.every(({ items }) =>
            items?.every(({ status }) => status === 'complete'),
          )

          if (isAllCompleted) {
            form.resetField('amount')

            toast({
              title: t('deposit.toastMessage.bridgeSuccess', {
                amount: details?.currencyOut?.amountFormatted,
                ticker: details?.currencyOut?.currency?.symbol,
              }),
            })
          }
        })
      } catch (error) {
        console.error(error)
      }
    })
  }

  const value = useMemo(
    () => ({ query, setQuery, isLoading, setSelectedChain }),
    [isLoading, query],
  )

  useEffect(() => {
    sendGTMEvent({ event: 'bridge_modal_view' })
  }, [])

  return (
    <BridgeContext.Provider value={value}>
      <Form.Root {...form}>
        <form onSubmit={form.handleSubmit(bridge)}>{children}</form>
      </Form.Root>
    </BridgeContext.Provider>
  )
}

export function BridgeContent() {
  const t = useTranslations()
  const inputRef = useRef<HTMLInputElement>(null)
  const { setQuery, setSelectedChain } = useContext(BridgeContext)
  const form = useFormContext<BridgeSchema>()
  const { connection } = useSolana()
  const { data: walletClient } = useWalletClient()
  const relayClient = useRelayClient()
  const { wallets: privyEvmWallets } = useWallets()
  const { wallet } = useUser({ vmType: 'SVM' })
  const [selectedTokenAddress, setSelectedTokenAddress] = useState('')
  const ethereumId = 1
  const [selectedChainId, setSelectedChainId] = useState(ethereumId)
  const { amount: formattedInputAmount } = useWatch({ control: form.control })
  const [debouncedAmount] = useDebounce(formattedInputAmount, 1000)
  const amount = getUnFormattedNumber({ value: debouncedAmount })

  const chainLogoIcons = {
    ethereum: <IcEthereumFixedColorFill />,
    arbitrum: <IcArbitrumFixedColorFill />,
    base: <IcBaseFixedColorFill />,
    blast: <IcBlastFixedColorFill />,
    optimism: <IcOptimismFixedColorFill />,
  }

  const tokenLogoIcons = {
    usdc: <IcUsdcFixedColorFill />,
    usdt: <IcTetherFixedColorFill />,
    eth: <IcEthereumFixedColorFill />,
  }

  const { wallet: privyExternalEvmWallet } = usePrivyWallet({
    wallets: privyEvmWallets,
    type: 'external',
  })

  const { data: chainsArray } = useRelayChains(relayClient.baseApiUrl)

  const chains = chainsArray?.chains
    ?.filter(({ name }) =>
      process.env.NEXT_PUBLIC_IS_USE_TESTNET === 'true'
        ? name
        : name && Object.keys(chainLogoIcons).includes(name.toLowerCase()),
    )
    .sort((a, b) => {
      if (a.name?.toLowerCase() === 'ethereum') return -1
      if (b.name?.toLowerCase() === 'ethereum') return 1

      return a.name?.localeCompare(b.name ?? '') ?? 0
    })

  const selectedChain = chainsArray?.chains?.find(
    ({ id }) => id === selectedChainId,
  )

  const solanaChain = chainsArray?.chains?.find(
    (chain) => chain.currency?.symbol === 'SOL',
  )

  const chainIds = chains?.map(({ id }) => id ?? 0)

  const { data: ethTokenListArray } = useTokenList(
    relayClient.baseApiUrl,
    {
      limit: 20,
      chainIds,
      term: 'eth',
    },
    { enabled: !!selectedChain?.id! },
  )

  const ethTokenList =
    ethTokenListArray
      ?.flatMap((token) => token)
      .filter(
        ({ symbol, metadata }) => symbol === 'ETH' && metadata?.verified,
      ) ?? []

  const { data: usdtTokenListArray } = useTokenList(
    relayClient.baseApiUrl,
    {
      limit: 20,
      chainIds,
      term: 'usdt',
    },
    { enabled: !!selectedChain?.id! },
  )

  const usdtTokenList =
    usdtTokenListArray
      ?.flatMap((token) => token)
      .filter(
        ({ symbol, metadata }) => symbol === 'USDT' && metadata?.verified,
      ) ?? []

  const { data: usdcTokenListArray } = useTokenList(
    relayClient.baseApiUrl,
    {
      limit: 20,
      chainIds,
      term: 'usdc',
    },
    { enabled: !!selectedChain?.id! },
  )

  const usdcTokenList =
    usdcTokenListArray
      ?.flatMap((token) => token)
      .filter(
        ({ symbol, metadata }) => symbol === 'USDC' && metadata?.verified,
      ) ?? []

  const tokenList = [
    ...ethTokenList,
    ...usdtTokenList,
    ...usdcTokenList,
  ].filter(
    ({ symbol, metadata, chainId }) =>
      symbol &&
      Object.keys(tokenLogoIcons).includes(symbol.toLowerCase()) &&
      metadata?.verified &&
      chainId === selectedChain?.id,
  )

  const selectedToken = tokenList?.find(
    ({ address }) => address === selectedTokenAddress,
  )

  const quoteQuery = useQuote(
    relayClient,
    walletClient,
    {
      user: privyExternalEvmWallet?.address ?? '',
      recipient: wallet?.address,
      originChainId: selectedToken?.chainId!,
      originCurrency: selectedToken?.address!,
      destinationChainId: solanaChain?.id ? Number(solanaChain.id) : 0,
      destinationCurrency: '11111111111111111111111111111111',
      amount: parseUnits(amount, selectedToken?.decimals ?? 0).toString(),
      tradeType: 'EXACT_INPUT',
      useExternalLiquidity: false,
    },
    undefined,
    undefined,
    {
      enabled:
        !!privyExternalEvmWallet?.address &&
        !!wallet?.address &&
        !!selectedToken?.chainId &&
        !!selectedToken?.address &&
        !!solanaChain?.id &&
        !!amount,
      throwOnError: false,
      refetchInterval: POLLING_INTERVAL.SECONDARY,
    },
  )

  const quote = quoteQuery.data
  const relayError = quoteQuery.error as RelayError | undefined

  const { data: lamports } = useQuery({
    ...getBalanceQuery({
      connection,
      address: wallet?.address!,
    }),
    enabled: !!wallet?.address,
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const { data: balancesEVM } = useQuery({
    ...getBalancesEVMQuery({
      address: privyExternalEvmWallet?.address!,
    }),
    enabled: !!privyExternalEvmWallet?.address,
    refetchInterval: POLLING_INTERVAL.SECONDARY,
  })

  const selectedBalance = balancesEVM?.balances?.find(
    ({ symbol, chain_id }) =>
      symbol?.toLowerCase() === selectedToken?.symbol?.toLowerCase() &&
      chain_id === selectedChain?.id,
  )

  const selectedBalanceFormattedAmount = selectedBalance?.amount
    ? new BigNumber(selectedBalance?.amount)
        .dividedBy(
          selectedBalance?.decimals ? 10 ** selectedBalance?.decimals : 1,
        )
        .toString()
    : '-'

  useEffect(() => {
    setQuery?.(quoteQuery)
  }, [quoteQuery, setQuery])

  useEffect(() => {
    if (selectedChain) {
      setSelectedChain?.(selectedChain)

      sendGTMEvent({
        event: 'bridge_sourcechain_click',
        chain: selectedChain.displayName,
      })
    }
  }, [selectedChain, setSelectedChain])

  useEffect(() => {
    form.setValue('balance', selectedBalanceFormattedAmount)
  }, [form, selectedBalanceFormattedAmount])

  useEffect(() => {
    if (selectedToken) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)

      sendGTMEvent({
        event: 'bridge_sourcetoken_click',
        tokenSymbol: selectedToken.symbol,
      })
    }
  }, [selectedToken])

  return (
    <Box layout='fillWidth' orientation='vertical' gap='s'>
      <Card.Root background='default' border='default' size='m'>
        <Card.Header>
          <Box layout='fillWidth' orientation='vertical' gap='s'>
            <Box
              layout='fillWidth'
              orientation='horizontal'
              align='spaceBetweenCenter'
            >
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='primary'
              >
                {t('depositStep2.from')}
              </Typography>
              <ConnectedWallet />
            </Box>
            {!!privyExternalEvmWallet && !!chains && (
              <Select.Root
                value={selectedChainId.toString()}
                onValueChange={(value) => {
                  setSelectedChainId(Number(value))
                  setSelectedTokenAddress('')
                }}
              >
                <Select.Trigger color='default' shape='square'>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content layout='triggerWidth'>
                  <Select.Group>
                    {chains?.map(({ id, displayName }) => {
                      const balance = balancesEVM?.balances?.find(
                        ({ chain_id, chain }) =>
                          chain_id === id ||
                          chain.toLowerCase() === displayName?.toLowerCase(),
                      )

                      const balanceAmount = balance?.amount
                        ? new BigNumber(balance?.amount)
                            .dividedBy(
                              balance?.decimals ? 10 ** balance?.decimals : 1,
                            )
                            .toString()
                        : ''

                      return id ? (
                        <Select.Item
                          key={id}
                          layout='fillWidth'
                          value={id.toString()}
                        >
                          {displayName &&
                          chainLogoIcons[
                            displayName.toLowerCase() as keyof typeof chainLogoIcons
                          ] ? (
                            <Icon size='s' shape='square'>
                              {
                                chainLogoIcons[
                                  displayName.toLowerCase() as keyof typeof chainLogoIcons
                                ]
                              }
                            </Icon>
                          ) : (
                            <Icon size='s' shape='square' color='brandPrimary'>
                              <IcPieChartQuarterFill />
                            </Icon>
                          )}
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
                              {displayName}
                            </Typography>
                            {balanceAmount && (
                              <div className={styles.nativeBalance()}>
                                <Typography
                                  typography='caption2'
                                  fontWeight='regular'
                                  color='secondary'
                                >
                                  <CurrencyWithQuantity
                                    currencyType='fiat'
                                    value={balanceAmount}
                                    size='xs'
                                    fontWeight='regular'
                                  />
                                </Typography>
                              </div>
                            )}
                          </Box>
                        </Select.Item>
                      ) : null
                    })}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            )}
            <Select.Root
              value={selectedTokenAddress}
              onValueChange={(value) => {
                setSelectedTokenAddress(value)
              }}
            >
              <Select.Trigger
                layout='fillWidth'
                color='default'
                shape='square'
                disabled={!tokenList?.length}
              >
                <Select.Value placeholder={t('common.token')} />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {tokenList?.map(({ address, symbol }) => {
                    const balance = balancesEVM?.balances?.find(
                      ({ address: balanceAddress, chain_id }) =>
                        (address === NATIVE_TOKEN_ADDRESSES.ETHEREUM
                          ? balanceAddress === 'native'
                          : balanceAddress === address) &&
                        chain_id === selectedChain?.id,
                    )

                    const balanceAmount = balance?.amount
                      ? new BigNumber(balance?.amount)
                          .dividedBy(
                            balance?.decimals ? 10 ** balance?.decimals : 1,
                          )
                          .toString()
                      : ''

                    return address ? (
                      <Select.Item
                        layout='fillWidth'
                        key={address}
                        value={address}
                      >
                        {symbol &&
                        tokenLogoIcons[
                          symbol.toLowerCase() as keyof typeof tokenLogoIcons
                        ] ? (
                          <Icon size='s' shape='square'>
                            {
                              tokenLogoIcons[
                                symbol.toLowerCase() as keyof typeof tokenLogoIcons
                              ]
                            }
                          </Icon>
                        ) : (
                          <Icon size='s' shape='square' color='brandPrimary'>
                            <IcPieChartQuarterFill />
                          </Icon>
                        )}
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
                            {symbol}
                          </Typography>
                          {balanceAmount && (
                            <div className={styles.nativeBalance()}>
                              <Typography
                                typography='caption2'
                                fontWeight='regular'
                                color='secondary'
                              >
                                <CurrencyWithQuantity
                                  currencyType='fiat'
                                  value={balanceAmount}
                                  size='xs'
                                  fontWeight='regular'
                                />
                              </Typography>
                            </div>
                          )}
                        </Box>
                      </Select.Item>
                    ) : null
                  })}
                </Select.Group>
              </Select.Content>
            </Select.Root>
            <Box
              layout='fillWidth'
              align='end'
              orientation='horizontal'
              gap='xxs'
            >
              <Typography
                typography='caption2'
                fontWeight='regular'
                color='secondary'
              >
                {t('common.balanceLowercase')}
              </Typography>
              <Typography
                typography='caption2'
                fontWeight='regular'
                color='secondary'
              >
                {!selectedToken && '-'}
                {selectedToken && (
                  <CurrencyWithQuantity
                    currencyType='fiat'
                    size='xs'
                    fontWeight='regular'
                    value={selectedBalanceFormattedAmount}
                  />
                )}
              </Typography>
            </Box>
            <Form.Field
              control={form.control}
              name='amount'
              render={({ field, fieldState }) => {
                return (
                  <Form.Item>
                    <Form.Control>
                      <Input
                        {...field}
                        ref={inputRef}
                        layout='fillWidth'
                        size='s'
                        placeholder='0'
                        inputMode='decimal'
                        disabled={!selectedToken}
                        isError={!!fieldState.error}
                        value={formattedInputAmount}
                        format={{ mode: 'number', isAbs: true }}
                      />
                    </Form.Control>
                    <Box
                      layout='fillWidth'
                      align={
                        fieldState.error || relayError
                          ? 'spaceBetweenCenter'
                          : 'end'
                      }
                      orientation='horizontal'
                      gap='xxs'
                    >
                      <Form.Message>
                        {quoteQuery.isFetched &&
                          relayError?.response?.data?.errorCode &&
                          t(
                            `deposit.relayErrors.${relayError?.response?.data?.errorCode}`,
                          )}
                      </Form.Message>
                      {quote && (
                        <Typography
                          typography='caption2'
                          fontWeight='regular'
                          color='secondary'
                        >
                          <div className={styles.expectedValue()}>
                            <Box gap='xxs' align='center'>
                              <span>≈</span>
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                size='xs'
                                fontWeight='regular'
                                value={quote?.details?.currencyIn?.amountUsd}
                              >
                                $
                              </CurrencyWithQuantity>
                            </Box>
                          </div>
                        </Typography>
                      )}
                    </Box>
                  </Form.Item>
                )
              }}
            />
          </Box>
        </Card.Header>
        <Card.Footer />
      </Card.Root>
      <Box layout='fillWidth' align='center'>
        <Icon size='s' color='primary' rotate={180}>
          <IcArrowOutline />
        </Icon>
      </Box>
      <Card.Root background='default' border='default' size='m'>
        <Card.Header>
          <Box layout='fillWidth' orientation='vertical' gap='s'>
            <Box
              layout='fillWidth'
              orientation='horizontal'
              align='spaceBetweenCenter'
            >
              <Typography
                typography='caption1'
                fontWeight='regular'
                color='primary'
              >
                {t('depositStep2.to')}
              </Typography>
              <ConnectedEmbeddedWallet />
            </Box>
            <Card.Root
              layout='fillWidth'
              background='default'
              border='default'
              size='s'
            >
              <Card.Header>
                <Box orientation='horizontal' gap='s'>
                  <Icon size='m'>
                    <IcSolanaFixedColorFill />
                  </Icon>
                  <Typography
                    typography='body1'
                    fontWeight='regular'
                    color='primary'
                  >
                    {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                  </Typography>
                </Box>
              </Card.Header>
              <Card.Footer />
            </Card.Root>
            <Box layout='fillWidth' align='end'>
              <Typography
                typography='caption2'
                fontWeight='regular'
                color='secondary'
              >
                <CurrencyWithQuantity
                  currencyType='fiat'
                  value={getFormattedNumber({
                    value: lamports ? getLamportsToSol({ lamports }) : '0',
                  })}
                >
                  {t('common.balanceLowercase')}
                </CurrencyWithQuantity>
              </Typography>
            </Box>
            <Card.Root
              layout='fillWidth'
              background='default'
              border='default'
              size='s'
            >
              <Card.Header>
                <Typography
                  typography='body1'
                  fontWeight='regular'
                  color='primary'
                >
                  <CurrencyWithQuantity
                    currencyType='fiat'
                    value={getFormattedNumber({
                      value: quote?.details?.currencyOut?.amountFormatted,
                      emptyValue: '0',
                    })}
                  />
                </Typography>
              </Card.Header>
              <Card.Footer />
            </Card.Root>
            {!quote && (
              <Box layout='fillWidth' align='end'>
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='secondary'
                >
                  <Box gap='xxs' align='center'>
                    <span>≈</span>
                    <CurrencyWithQuantity
                      currencyType='fiat'
                      size='xs'
                      fontWeight='regular'
                      value={0}
                    >
                      $
                    </CurrencyWithQuantity>
                  </Box>
                </Typography>
              </Box>
            )}
            {quote && (
              <Box layout='fillWidth' align='end'>
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Typography
                        typography='caption2'
                        fontWeight='regular'
                        color='secondary'
                      >
                        <Box gap='xxs' align='center'>
                          <span>≈</span>
                          <CurrencyWithQuantity
                            currencyType='fiat'
                            size='xs'
                            fontWeight='regular'
                            value={quote?.details?.currencyOut?.amountUsd}
                          >
                            $
                          </CurrencyWithQuantity>
                          {quote?.details?.totalImpact && (
                            <div>
                              <span>{`(`}</span>
                              <Rate
                                theme='inherit'
                                sign='plusMinus'
                                size='xs'
                                fontWeight='regular'
                                value={Number(
                                  quote.details.totalImpact.percent,
                                )}
                              />
                              <span>{`)`}</span>
                            </div>
                          )}
                          <Icon size='s'>
                            <IcInfoCircleOutline />
                          </Icon>
                        </Box>
                      </Typography>
                    </Tooltip.Trigger>
                    <Tooltip.Content color='default' align='end'>
                      <div className={styles.tooltip()}>
                        <Box layout='fillWidth' orientation='vertical' gap='s'>
                          {quote?.details?.totalImpact && (
                            <KeyValue.Root orientation='horizontal' gap='l'>
                              <KeyValue.Key>
                                <Typography
                                  typography='caption2'
                                  fontWeight='regular'
                                  color='inverse'
                                >
                                  {t('common.totalPriceImpact')}
                                </Typography>
                              </KeyValue.Key>
                              <KeyValue.Value>
                                <Box gap='xxs' align='center'>
                                  <CurrencyWithQuantity
                                    currencyType='fiat'
                                    size='xs'
                                    fontWeight='regular'
                                    value={quote?.details?.totalImpact?.usd}
                                  >
                                    $
                                  </CurrencyWithQuantity>
                                  <Typography
                                    typography='caption2'
                                    fontWeight='regular'
                                    color='tertiary'
                                  >
                                    <div>
                                      <span>{`(`}</span>
                                      <Rate
                                        size='xs'
                                        fontWeight='regular'
                                        theme='inherit'
                                        sign='plusMinus'
                                        value={Number(
                                          quote.details.totalImpact.percent,
                                        )}
                                      />
                                      <span>{`)`}</span>
                                    </div>
                                  </Typography>
                                </Box>
                              </KeyValue.Value>
                            </KeyValue.Root>
                          )}
                          <Separator orientation='horizontal' />
                          <KeyValue.Root orientation='horizontal' gap='l'>
                            <KeyValue.Key>
                              <Typography
                                typography='caption2'
                                fontWeight='regular'
                                color='tertiary'
                              >
                                {t('common.swapImpact')}
                              </Typography>
                            </KeyValue.Key>
                            <KeyValue.Value>
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                size='xs'
                                fontWeight='regular'
                                value={quote?.details?.swapImpact?.usd}
                              >
                                $
                              </CurrencyWithQuantity>
                            </KeyValue.Value>
                          </KeyValue.Root>
                          <KeyValue.Root orientation='horizontal' gap='l'>
                            <KeyValue.Key>
                              <Typography
                                typography='caption2'
                                fontWeight='regular'
                                color='tertiary'
                              >
                                {t('common.fillGas', {
                                  chain:
                                    process.env.NEXT_PUBLIC_IS_USE_TESTNET ===
                                    'true'
                                      ? 'Solana Devnet'
                                      : 'Solana',
                                })}
                              </Typography>
                            </KeyValue.Key>
                            <KeyValue.Value>
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                size='xs'
                                fontWeight='regular'
                                value={quote?.fees?.relayerGas?.amountUsd}
                              >
                                $
                              </CurrencyWithQuantity>
                            </KeyValue.Value>
                          </KeyValue.Root>
                          <KeyValue.Root orientation='horizontal' gap='l'>
                            <KeyValue.Key>
                              <Typography
                                typography='caption2'
                                fontWeight='regular'
                                color='tertiary'
                              >
                                {t('common.relayFee')}
                              </Typography>
                            </KeyValue.Key>
                            <KeyValue.Value>
                              <CurrencyWithQuantity
                                currencyType='fiat'
                                size='xs'
                                fontWeight='regular'
                                value={quote?.fees?.relayerService?.amountUsd}
                              >
                                $
                              </CurrencyWithQuantity>
                            </KeyValue.Value>
                          </KeyValue.Root>
                        </Box>
                      </div>
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </Box>
            )}
          </Box>
        </Card.Header>
        <Card.Footer />
      </Card.Root>
      {quote && selectedToken && (
        <Card.Root background='default' border='default' size='m'>
          <Card.Header>
            <Box layout='fillWidth' orientation='vertical' gap='s'>
              <Box
                layout='fillWidth'
                orientation='horizontal'
                align='spaceBetweenCenter'
              >
                <Box orientation='horizontal' gap='xs'>
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='primary'
                  >
                    1 {selectedToken.symbol}
                  </Typography>
                  <Typography
                    typography='caption2'
                    fontWeight='regular'
                    color='primary'
                  >
                    =
                  </Typography>
                  <Box orientation='horizontal' gap='xxs'>
                    <Typography
                      typography='caption2'
                      fontWeight='regular'
                      color='primary'
                    >
                      <CurrencyWithQuantity
                        currencyType='fiat'
                        size='xs'
                        fontWeight='regular'
                        value={getFormattedNumber({
                          value: quote.details?.rate,
                        })}
                      />
                    </Typography>
                    <Typography
                      typography='caption2'
                      fontWeight='regular'
                      color='primary'
                    >
                      {SYMBOL_FROM_CHAIN_TYPE['SOLANA']}
                    </Typography>
                  </Box>
                </Box>
                <Box orientation='horizontal' gap='s'>
                  <Box orientation='horizontal' gap='xxxs' align='center'>
                    <Icon size='s' color='infoPrimary'>
                      <IcClockFill />
                    </Icon>
                    <Typography
                      typography='caption2'
                      fontWeight='regular'
                      color='primary'
                    >
                      ~
                    </Typography>
                    <Typography
                      typography='caption2'
                      fontWeight='regular'
                      color='primary'
                    >
                      {t('common.secondAbbreviation', { second: 7 })}
                    </Typography>
                  </Box>
                  <Separator color='default' orientation='vertical' />
                  <Box orientation='horizontal' gap='xxxs' align='center'>
                    <Icon size='s' color='infoPrimary'>
                      <IcGasFill />
                    </Icon>
                    <CurrencyWithQuantity
                      currencyType='fiat'
                      size='xs'
                      fontWeight='regular'
                      value={quote?.fees?.gas?.amountUsd}
                    >
                      $
                    </CurrencyWithQuantity>
                  </Box>
                </Box>
              </Box>
              <Box
                layout='fillWidth'
                orientation='horizontal'
                align='spaceBetweenCenter'
              >
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='primary'
                >
                  {t('common.route')}
                </Typography>
                <Badge
                  size='s'
                  shape='round'
                  color='primary'
                  badgeType='outline'
                  align='center'
                >
                  <Typography typography='caption2' fontWeight='regular'>
                    Relay
                  </Typography>
                </Badge>
              </Box>
            </Box>
          </Card.Header>
          <Card.Footer />
        </Card.Root>
      )}
    </Box>
  )
}

export function BridgeExecuteButton() {
  const t = useTranslations()
  const { query, isLoading } = useContext(BridgeContext)
  const from = useFormContext<BridgeSchema>()

  return (
    <Button
      layout='fillWidth'
      buttonType='solid'
      shape='square'
      color='primary'
      size='m'
      isLoading={isLoading || query?.isLoading}
      disabled={!from.formState.isValid || !query?.data}
      type='submit'
    >
      <Typography typography='body1' fontWeight='bold'>
        {t('depositStep2.bridgeBtn')}
      </Typography>
    </Button>
  )
}

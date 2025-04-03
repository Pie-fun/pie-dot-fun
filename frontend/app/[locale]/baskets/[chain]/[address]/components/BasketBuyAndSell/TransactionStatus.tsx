'use client'

import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import { Icon } from '@/components/Icon/Icon'
import {
  IcCheckOutline,
  IcLoadingCircleDashFill,
} from '@/components/Icon/Icons'
import { Typography } from '@/components/Typography/Typography'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import { useTranslations } from 'next-intl'
import {
  ComponentProps,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import imgBasketDrawing01Medium from '@/app/[locale]/baskets/[chain]/[address]/components/BasketBuyAndSell/img_basket_drawing01_medium.png'
import { Image } from '@/components/Image/Image'
import Lottie from '@/components/Lottie/Lottie'
import { animationSendingTx } from '@/assets/lotties'
import { useTimer } from '@/hooks/useTimer'
import { TokenAvatar } from '@/components/TokenAvatar/TokenAvatar'
import { Ellipsis } from '@/components/Ellipsis/Ellipsis'
import { AnimatePresence, motion } from 'framer-motion'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery } from '@/app/api/frontend/v1/graphql/queries/combined/queries'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { FungibleToken } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/fungible-token'
import { sleep } from '@/utils/sleep'

type TransactionStatusContextProps = {
  type: 'buy' | 'sell'
  setIsOpen: Dispatch<SetStateAction<boolean>>
  address: string
  chain: ChainType
}

export const TransactionStatusContext =
  createContext<TransactionStatusContextProps>(
    {} as TransactionStatusContextProps,
  )

type TransactionStatusProps = {
  step: 'idle' | 'creatingTransaction' | 'waitingForConfirmation'
}

export function TransactionStatus({
  address,
  chain,
  type,
  step,
  ...props
}: Readonly<TransactionStatusProps> &
  Readonly<Pick<TransactionStatusContextProps, 'type' | 'address' | 'chain'>> &
  ComponentProps<typeof Dialog.Root> &
  ComponentProps<typeof Drawer.Root>) {
  const [isOpen, setIsOpen] = useState(true)
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  const value = useMemo(
    () => ({ address, chain, type, setIsOpen }),
    [address, chain, type, setIsOpen],
  )

  useEffect(() => {
    if (step === 'idle') {
      setIsOpen(false)
    } else if (step === 'creatingTransaction') {
      setIsOpen(true)
    }
  }, [step])

  return (
    <TransactionStatusContext.Provider value={value}>
      {isDesktop && (
        <Dialog.Root
          {...props}
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <Dialog.Trigger asChild>
            {step === 'creatingTransaction' && <Trigger />}
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <Title type={type} />
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body size='m'>
              {step === 'creatingTransaction' && <CreatingTransaction />}
              {step === 'waitingForConfirmation' && <WaitingForConfirmation />}
            </Dialog.Body>
            <Dialog.Footer />
          </Dialog.Content>
        </Dialog.Root>
      )}
      {!isDesktop && (
        <Drawer.Root
          {...props}
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <Drawer.Trigger asChild>
            {step === 'creatingTransaction' && <Trigger />}
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Title type={type} />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body size='m'>
              {step === 'creatingTransaction' && <CreatingTransaction />}
              {step === 'waitingForConfirmation' && <WaitingForConfirmation />}
            </Drawer.Body>
            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Root>
      )}
    </TransactionStatusContext.Provider>
  )
}

function Trigger({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()

  return (
    <Button buttonType='content'>
      <Typography
        typography='caption2'
        fontWeight='regular'
        color='tertiary'
        isUnderline
        {...props}
      >
        {t('common.viewStatus')}
      </Typography>
    </Button>
  )
}

function Title({ ...props }: ComponentProps<typeof Typography>) {
  const t = useTranslations()
  const { type } = useContext(TransactionStatusContext)

  return (
    <Typography
      typography='title4'
      fontWeight='bold'
      color='primary'
      {...props}
    >
      {type === 'buy'
        ? t('basketTrade.buyProgressStep.title')
        : t('basketTrade.sellProgressStep.title')}
    </Typography>
  )
}

type AnimateComponentsProps = {
  fungibleTokens: Pick<FungibleToken, 'address' | 'iconImageUrl' | 'symbol'>[]
}

function AnimatedComponent({
  fungibleTokens,
}: Readonly<AnimateComponentsProps>) {
  const t = useTranslations()
  const { type } = useContext(TransactionStatusContext)
  const [visibleTokens, setVisibleTokens] = useState(fungibleTokens)
  const delayBetweenItems = 0.6
  const fadeInDuration = 0.5
  const moveDuration = 2
  const loopDelay = 1.5
  const movePosition = 72

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
      }}
    >
      <AnimatePresence>
        {visibleTokens.map(({ address, iconImageUrl, symbol }, index) => (
          <motion.div
            key={address}
            variants={{
              initial: {
                opacity: 0,
                y: type === 'buy' ? 0 : movePosition,
              },
              fadeIn: {
                opacity: 1,
                transition: {
                  delay: index * delayBetweenItems,
                  duration: fadeInDuration,
                  ease: [0.65, 0, 0.35, 1],
                },
              },
              move: {
                y: type === 'buy' ? movePosition : 0,
                transition: {
                  delay: index * delayBetweenItems,
                  duration: moveDuration,
                  ease: [0.65, 0, 0.35, 1],
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='initial'
            animate={['fadeIn', 'move']}
            exit='exit'
            onAnimationComplete={async (animation) => {
              if (animation === 'move') {
                setVisibleTokens((prevVisibleTokens) =>
                  prevVisibleTokens.filter(
                    ({ address: tokenAddress }) => address !== tokenAddress,
                  ),
                )
              }

              if (animation === 'move' && index === visibleTokens.length - 1) {
                await sleep({ delay: loopDelay * 1000 })

                setVisibleTokens(fungibleTokens)
              }
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box layout='fillWidth' gap='s' align='center'>
                <TokenAvatar
                  src={iconImageUrl}
                  alt=''
                  shape='circle'
                  size='l'
                />
                <Typography
                  typography='caption2'
                  fontWeight='regular'
                  color='tertiary'
                >
                  <Ellipsis>
                    {type === 'buy'
                      ? t('basketTrade.progressStep1.buyAnimation', {
                          ticker: symbol,
                        })
                      : t('basketTrade.progressStep1.sellAnimation', {
                          ticker: symbol,
                        })}
                  </Ellipsis>
                </Typography>
              </Box>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function CreatingTransaction() {
  const t = useTranslations()
  const { address, chain } = useContext(TransactionStatusContext)

  const { data } = useSuspenseInfiniteQuery({
    ...basketComponentsWithFungibleTokenAndFungibleTokenMarketQuery({
      address,
      chain,
    }),
  })

  const basketComponentsWithFungibleTokenAndFungibleTokenMarket =
    data?.pages.flatMap(
      ({ basketComponentsWithFungibleTokenAndFungibleTokenMarket }) =>
        basketComponentsWithFungibleTokenAndFungibleTokenMarket.basketComponentsWithFungibleTokenAndFungibleTokenMarket,
    )

  const fungibleTokens =
    basketComponentsWithFungibleTokenAndFungibleTokenMarket.map(
      ({ fungibleToken }) => fungibleToken,
    )

  return (
    <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
      <div
        style={{
          height: 120,
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <AnimatedComponent fungibleTokens={fungibleTokens} />
        <Image
          src={imgBasketDrawing01Medium.src}
          alt=''
          width={240}
          height={48}
        />
      </div>
      <Box orientation='horizontal' gap='s'>
        <Box align='start'>
          <Box align='center' layout='hug'>
            <Icon size='m' isSpin color='infoPrimary'>
              <IcLoadingCircleDashFill />
            </Icon>
          </Box>
        </Box>
        <Box layout='fillWidth' orientation='vertical' gap='xxs'>
          <Typography typography='body2' fontWeight='medium' color='primary'>
            {t('basketTrade.progressStep1.description')}
          </Typography>
          <Typography
            typography='caption2'
            fontWeight='regular'
            color='brandPrimary'
          >
            {t('basketTrade.progressStep1.caption')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

function WaitingForConfirmation() {
  const t = useTranslations()
  const { setIsOpen } = useContext(TransactionStatusContext)

  const { start, seconds } = useTimer({
    duration: 3000,
    onFinish: () => {
      setIsOpen(false)
    },
  })

  useEffect(() => {
    start()
  }, [start])

  return (
    <Box layout='fillWidth' orientation='vertical' gap='m' align='center'>
      <Lottie json={animationSendingTx} />
      <Box orientation='horizontal' gap='s'>
        <Box align='start'>
          <Box align='center' layout='hug'>
            <Icon size='m' color='infoPrimary'>
              <IcCheckOutline />
            </Icon>
          </Box>
        </Box>
        <Box layout='fillWidth' orientation='vertical' gap='xxs'>
          <Typography typography='body2' fontWeight='medium' color='primary'>
            {t('basketTrade.progressStep2.description')}
          </Typography>
          <Typography
            typography='caption2'
            fontWeight='regular'
            color='brandPrimary'
          >
            {t.rich('basketTrade.progressStep2.caption', {
              count: 3 - seconds,
              fontweightBold: (children) => (
                <Typography fontWeight='bold'>{children}</Typography>
              ),
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

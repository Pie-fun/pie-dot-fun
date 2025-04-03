'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useUser } from '@/libs/api/useUser'
import { queries } from '@/libs/vanilla-extract/queries'
import { useSolana } from '@/hooks/useSolana'
import { BN } from '@ao-labs/pie-dot-fun-solana'
import { PublicKey } from '@solana/web3.js'
import { ComponentProps, useEffect, useState } from 'react'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as PartialTradePrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/PartialTradePrimitive/PartialTradePrimitive'
import { useQuery } from '@tanstack/react-query'
import { getBasketTokenQuery } from '@/app/api/backend/v1/basketToken/queries'
import { getBasketTokenResource } from '@/app/api/backend/v1/basketToken/resource'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { getUserFundQuery } from '@/app/api/backend/v1/pieProgram/queries'
import { DUMMY_SVM_ADDRESS } from '@/constants/blockChains'
import { sendGTMEvent } from '@/libs/next-third-parties/sendGTMEvent'

type PartialTradeProps = {
  chain: ChainType
  address: string
}

export function CheckPartialTrade({
  address,
  chain,
  ...props
}: Readonly<PartialTradeProps> &
  ComponentProps<typeof Dialog.Root> &
  ComponentProps<typeof Drawer.Root>) {
  const { connection, cluster } = useSolana()
  const { wallet } = useUser({ vmType: 'SVM' })
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })
  const [isOpen, setIsOpen] = useState(false)

  const { data: basketToken } = useQuery({
    ...getBasketTokenQuery({
      basketToken: getBasketTokenResource({ address, chain }),
    }),
  })

  const { data: userFund } = useQuery({
    ...getUserFundQuery({
      basketId: new BN(basketToken?.onchainId!),
      cluster: cluster.network,
      connection,
      user: new PublicKey(wallet?.address ?? DUMMY_SVM_ADDRESS),
    }),
    enabled: !!basketToken?.onchainId && !!wallet?.address,
  })

  const isPartialDetected = userFund?.components.some(
    ({ amount }) => amount.toNumber() > 0,
  )

  useEffect(() => {
    if (isPartialDetected) {
      setIsOpen(true)

      sendGTMEvent({
        event: 'tradingerror_modal_view',
        action: 'revisit',
        error: 'partial trade',
      })
    }
  }, [isPartialDetected])

  return (
    <>
      {isDesktop && (
        <Dialog.Root
          {...props}
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <PartialTradePrimitive.Title />
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body size='m'>
              <PartialTradePrimitive.Description />
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
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <PartialTradePrimitive.Title />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body size='m'>
              <PartialTradePrimitive.Description />
            </Drawer.Body>
            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Root>
      )}
    </>
  )
}

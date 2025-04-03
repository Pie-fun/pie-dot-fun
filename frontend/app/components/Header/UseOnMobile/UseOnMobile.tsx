'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as UseOnMobilePrimitive from '@/app/components/Header/UseOnMobile/UseOnMobilePrimitive'
import { ComponentProps, ReactNode, useState } from 'react'
import { Box } from '@/components/Box/Box'
import { Deposit } from '@/app/components/Deposit/Deposit'
import { useUser } from '@/libs/api/useUser'
import { usePwa } from '@/providers/PwaProvider/PwaProvider'

type TutorialProps = {
  trigger?: ReactNode
}

export function UseOnMobile({
  trigger,
  ...props
}: Readonly<TutorialProps> &
  ComponentProps<typeof Dialog.Root> &
  ComponentProps<typeof Drawer.Root>) {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })
  const [isDepositOpen, setIsDepositOpen] = useState(false)
  const { isAuthenticated } = useUser()
  const { deferredPrompt } = usePwa()

  return (
    <>
      {isDesktop && (
        <>
          <Dialog.Root {...props}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  <UseOnMobilePrimitive.Title />
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body size='m'>
                {deferredPrompt ? (
                  <UseOnMobilePrimitive.AvailableDetail />
                ) : (
                  <UseOnMobilePrimitive.UnAvailableDetail />
                )}
              </Dialog.Body>
              {deferredPrompt && (
                <Dialog.Footer>
                  <Box layout='fillWidth' orientation='vertical' gap='m'>
                    <UseOnMobilePrimitive.AddAppButton />
                  </Box>
                </Dialog.Footer>
              )}
            </Dialog.Content>
          </Dialog.Root>
          {isAuthenticated && (
            <Deposit open={isDepositOpen} onOpenChange={setIsDepositOpen} />
          )}
        </>
      )}
      {!isDesktop && (
        <>
          <Drawer.Root {...props}>
            <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>
                  <UseOnMobilePrimitive.Title />
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body size='m'>
                {deferredPrompt ? (
                  <UseOnMobilePrimitive.AvailableDetail />
                ) : (
                  <UseOnMobilePrimitive.UnAvailableDetail />
                )}
              </Drawer.Body>
              {deferredPrompt && (
                <Drawer.Footer>
                  <Box layout='fillWidth' orientation='vertical' gap='m'>
                    <UseOnMobilePrimitive.AddAppButton />
                  </Box>
                </Drawer.Footer>
              )}
            </Drawer.Content>
          </Drawer.Root>
          {isAuthenticated && (
            <Deposit open={isDepositOpen} onOpenChange={setIsDepositOpen} />
          )}
        </>
      )}
    </>
  )
}

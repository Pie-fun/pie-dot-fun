'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as DepositPrimitive from '@/app/components/Deposit/DepositPrimitive'
import { Wizard } from 'react-use-wizard'
import { ComponentProps, ReactNode } from 'react'
import { usePrivyMutationObserver } from '@/libs/privy/usePrivyMutationObserver'

type DepositProps = {
  trigger?: ReactNode
}

export function Deposit({
  trigger,
  ...props
}: Readonly<DepositProps> &
  ComponentProps<typeof Dialog.Root> &
  ComponentProps<typeof Drawer.Root>) {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })
  const { isOpen } = usePrivyMutationObserver()

  return (
    <>
      {isDesktop && (
        <Dialog.Root {...props}>
          <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
          <Dialog.Content
            onPointerDownOutside={(event) => {
              if (isOpen) {
                event.preventDefault()
              }
            }}
            onEscapeKeyDown={(event) => {
              if (isOpen) {
                event.preventDefault()
              }
            }}
            style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
          >
            <Wizard>
              <>
                <Dialog.Header>
                  <Dialog.Title>
                    <DepositPrimitive.DepositMethodsTitle />
                  </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <DepositPrimitive.DepositMethods />
                </Dialog.Body>
              </>
              <DepositPrimitive.BridgeRoot>
                <Dialog.Header
                  leftContent={<DepositPrimitive.GoToMainStepButton />}
                >
                  <Dialog.Title>
                    <DepositPrimitive.BridgeTitle />
                  </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body size='m'>
                  <DepositPrimitive.BridgeContent />
                </Dialog.Body>
                <Dialog.Footer>
                  <DepositPrimitive.BridgeExecuteButton />
                </Dialog.Footer>
              </DepositPrimitive.BridgeRoot>
            </Wizard>
          </Dialog.Content>
        </Dialog.Root>
      )}
      {!isDesktop && (
        <Drawer.Root {...props}>
          <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
          <Drawer.Content
            onPointerDownOutside={(event) => {
              if (isOpen) {
                event.preventDefault()
              }
            }}
            onEscapeKeyDown={(event) => {
              if (isOpen) {
                event.preventDefault()
              }
            }}
            style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
          >
            <Wizard>
              <>
                <Drawer.Header>
                  <Drawer.Title>
                    <DepositPrimitive.DepositMethodsTitle />
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <DepositPrimitive.DepositMethods />
                </Drawer.Body>
              </>
              <DepositPrimitive.BridgeRoot>
                <Drawer.Header
                  leftContent={<DepositPrimitive.GoToMainStepButton />}
                >
                  <Drawer.Title>
                    <DepositPrimitive.BridgeTitle />
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body size='m'>
                  <DepositPrimitive.BridgeContent />
                </Drawer.Body>
                <Drawer.Footer>
                  <DepositPrimitive.BridgeExecuteButton />
                </Drawer.Footer>
              </DepositPrimitive.BridgeRoot>
            </Wizard>
          </Drawer.Content>
        </Drawer.Root>
      )}
    </>
  )
}

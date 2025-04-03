'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as WithdrawPrimitive from '@/app/[locale]/profile/[displayName]/components/Withdraw/WithdrawPrimitive'
import { ReactNode } from 'react'

type WithdrawProps = {
  trigger?: ReactNode
}

export function Withdraw({ trigger }: Readonly<WithdrawProps>) {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <>
      {isDesktop && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {trigger ?? <WithdrawPrimitive.Trigger />}
          </Dialog.Trigger>
          <Dialog.Content>
            <WithdrawPrimitive.Root>
              <Dialog.Header>
                <Dialog.Title>
                  <WithdrawPrimitive.Title />
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body size='m'>
                <WithdrawPrimitive.Body />
              </Dialog.Body>
              <Dialog.Footer>
                <WithdrawPrimitive.SubmitButton />
              </Dialog.Footer>
            </WithdrawPrimitive.Root>
          </Dialog.Content>
        </Dialog.Root>
      )}
      {!isDesktop && (
        <Drawer.Root>
          <Drawer.Trigger asChild>
            {trigger ?? <WithdrawPrimitive.Trigger />}
          </Drawer.Trigger>
          <Drawer.Content>
            <WithdrawPrimitive.Root>
              <Drawer.Header>
                <Drawer.Title>
                  <WithdrawPrimitive.Title />
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body size='m'>
                <WithdrawPrimitive.Body />
              </Drawer.Body>
              <Drawer.Footer>
                <WithdrawPrimitive.SubmitButton />
              </Drawer.Footer>
            </WithdrawPrimitive.Root>
          </Drawer.Content>
        </Drawer.Root>
      )}
    </>
  )
}

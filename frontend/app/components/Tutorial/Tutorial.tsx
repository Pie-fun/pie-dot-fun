'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as TutorialPrimitive from '@/app/components/Tutorial/TutorialPrimitive'
import { ComponentProps, ReactNode, useState } from 'react'
import { Box } from '@/components/Box/Box'
import { Deposit } from '@/app/components/Deposit/Deposit'
import { useUser } from '@/libs/api/useUser'
import { usePrivyAction } from '@/providers/PrivyActionProvider/PrivyActionProvider'

type TutorialProps = {
  trigger?: ReactNode
}

export function Tutorial({
  trigger,
  onOpenChange,
  ...props
}: Readonly<TutorialProps> &
  ComponentProps<typeof Dialog.Root> &
  ComponentProps<typeof Drawer.Root>) {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })
  const [isDepositOpen, setIsDepositOpen] = useState(false)
  const { isAuthenticated } = useUser()
  const { setIsNewUser } = usePrivyAction()

  const handleOpenChange = (open: boolean) => {
    onOpenChange?.(open)

    if (!open) {
      setIsNewUser(false)
    }
  }

  return (
    <>
      {isDesktop && (
        <>
          <Dialog.Root {...props} onOpenChange={handleOpenChange}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  <TutorialPrimitive.Title />
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body size='m'>
                <TutorialPrimitive.Detail />
              </Dialog.Body>
              <Dialog.Footer>
                <Box layout='fillWidth' orientation='vertical' gap='m'>
                  {!isAuthenticated && (
                    <Dialog.Close asChild>
                      <TutorialPrimitive.LoginButton />
                    </Dialog.Close>
                  )}
                  {isAuthenticated && (
                    <Dialog.Close asChild>
                      <TutorialPrimitive.DepositButton
                        onClick={() => setIsDepositOpen(true)}
                      />
                    </Dialog.Close>
                  )}
                </Box>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
          {isAuthenticated && (
            <Deposit open={isDepositOpen} onOpenChange={setIsDepositOpen} />
          )}
        </>
      )}
      {!isDesktop && (
        <>
          <Drawer.Root {...props} onOpenChange={handleOpenChange}>
            <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>
                  <TutorialPrimitive.Title />
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body size='m'>
                <TutorialPrimitive.Detail />
              </Drawer.Body>
              <Drawer.Footer>
                <Box layout='fillWidth' orientation='vertical' gap='m'>
                  {!isAuthenticated && (
                    <Dialog.Close asChild>
                      <TutorialPrimitive.LoginButton />
                    </Dialog.Close>
                  )}
                  {isAuthenticated && (
                    <Dialog.Close asChild>
                      <TutorialPrimitive.DepositButton
                        onClick={() => setIsDepositOpen(true)}
                      />
                    </Dialog.Close>
                  )}
                </Box>
              </Drawer.Footer>
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

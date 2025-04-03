'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as Dialog from '@/components/Dialog/Dialog'
import * as Drawer from '@/components/Drawer/Drawer'
import * as AdditionalRiskFactorsPrimitive from '@/app/[locale]/baskets/[chain]/[address]/components/DiscontinuationNoticeAccordion/AdditionalRiskFactorsPrimitive'
import { ComponentProps } from 'react'

export function AdditionalRiskFactors({
  ...props
}: ComponentProps<typeof Dialog.Root> & ComponentProps<typeof Drawer.Root>) {
  const isDesktop = useMediaQuery({ query: queries.breakpoints.desktop })

  return (
    <>
      {isDesktop && (
        <Dialog.Root {...props}>
          <Dialog.Trigger asChild>
            <AdditionalRiskFactorsPrimitive.Trigger />
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <AdditionalRiskFactorsPrimitive.Title />
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body size='m'>
              <AdditionalRiskFactorsPrimitive.Factors />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <AdditionalRiskFactorsPrimitive.Close />
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
      )}
      {!isDesktop && (
        <Drawer.Root {...props}>
          <Drawer.Trigger asChild>
            <AdditionalRiskFactorsPrimitive.Trigger />
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <AdditionalRiskFactorsPrimitive.Title />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body size='m'>
              <AdditionalRiskFactorsPrimitive.Factors />
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.Close asChild>
                <AdditionalRiskFactorsPrimitive.Close />
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Root>
      )}
    </>
  )
}

import '@/libs/vanilla-extract/global.css'
import { PropsWithChildren } from 'react'
import * as Drawer from '@/components/Drawer/Drawer'
import { Toaster } from '@/components/Toast/Toast'

export function DesignSystemProvider({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <Toaster />
      <Drawer.Provider>{children}</Drawer.Provider>
    </>
  )
}

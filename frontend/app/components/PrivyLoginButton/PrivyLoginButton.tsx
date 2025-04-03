'use client'

import { Button } from '@/components/Button/Button'
import { ComponentProps } from 'react'
import { useDrawer } from '@/components/Drawer/useDrawer'
import { usePrivyAction } from '@/providers/PrivyActionProvider/PrivyActionProvider'

type PrivyLoginButtonProps = Omit<ComponentProps<typeof Button>, 'onClick'>

export function PrivyLoginButton({
  ...props
}: Readonly<PrivyLoginButtonProps>) {
  const { isOpen, close } = useDrawer()
  const { login } = usePrivyAction()

  const handleLogin = () => {
    if (isOpen) {
      close()
    }

    login?.()
  }

  return <Button onClick={handleLogin} {...props} />
}

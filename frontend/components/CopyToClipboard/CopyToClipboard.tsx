'use client'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { IcCopyOutline } from '@/components/Icon/Icons'
import { useToast } from '@/components/Toast/useToast'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useTranslations } from 'next-intl'
import { ComponentProps, MouseEvent, PropsWithChildren, useEffect } from 'react'

type CopyToClipboardProps = {
  value: string
  iconSize?: ComponentProps<typeof Icon>['size']
}

export function CopyToClipboard({
  children,
  value,
  iconSize,
  onClick,
  ...props
}: Readonly<
  PropsWithChildren<CopyToClipboardProps & ComponentProps<typeof Button>>
>) {
  const t = useTranslations()
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const { toast } = useToast()

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    copyToClipboard(value)
    onClick?.(event)
  }

  useEffect(() => {
    if (isCopied) {
      toast({
        title: t('common.copySuccessful'),
      })
    }
  }, [isCopied, toast, value, t])

  return (
    <Button {...props} onClick={handleOnClick}>
      {children}
      <Icon size={iconSize}>
        <IcCopyOutline />
      </Icon>
    </Button>
  )
}

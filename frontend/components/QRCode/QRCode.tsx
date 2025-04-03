import { vars } from '@/libs/vanilla-extract/vars'
import { getCssVarToValue } from '@/utils/getCssVarToValue'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { QRCode as QRCodePrimitive } from 'react-qrcode-logo'

export type QRCodeRef = QRCodePrimitive

export const QRCode = forwardRef<
  QRCodePrimitive,
  ComponentPropsWithoutRef<typeof QRCodePrimitive>
>(({ bgColor, fgColor, ...props }, ref) => {
  const defaultBgColor = getCssVarToValue({
    cssVar: vars.colors.backgrounds.default,
  })

  const defaultFgColor = getCssVarToValue({
    cssVar: vars.colors.texts.primary,
  })

  return (
    <QRCodePrimitive
      ref={ref}
      bgColor={bgColor ?? defaultBgColor}
      fgColor={fgColor ?? defaultFgColor}
      {...props}
    />
  )
})

QRCode.displayName = 'QRCode'

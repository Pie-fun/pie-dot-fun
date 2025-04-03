import { sendGTMEvent as sendGTMEventPrimitive } from '@next/third-parties/google'

type SendGTMEventProps = {
  event: keyof typeof import('@/libs/next-third-parties/events.json')
  address?: string
  action?: string
  chain?: string
  error?: string
  tokenSymbol?: string
  app?: 'frontend' | 'backend' | 'contract'
}

export function sendGTMEvent(props: SendGTMEventProps) {
  return sendGTMEventPrimitive({ env: process.env.NEXT_PUBLIC_ENV, ...props })
}

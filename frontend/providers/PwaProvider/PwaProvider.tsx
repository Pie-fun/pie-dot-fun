'use client'

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type UserChoice = Promise<{
  outcome: 'accepted' | 'dismissed'
  platform: string
}>

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: UserChoice
  prompt(): Promise<void>
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}

type ContextProps = {
  install: () => void
  clearPrompt: () => void
  deferredPrompt?: BeforeInstallPromptEvent
}

export const Context = createContext<ContextProps>({} as ContextProps)

export function usePwa() {
  return useContext(Context)
}

export function PwaProvider({ children }: PropsWithChildren) {
  const [deferredPrompt, setDeferredPrompt] = useState<
    BeforeInstallPromptEvent | undefined
  >(undefined)

  const install = useCallback(async () => {
    await deferredPrompt?.prompt()

    const result = await deferredPrompt?.userChoice

    if (result?.outcome === 'accepted') {
      clearPrompt()
    }
  }, [deferredPrompt])

  const clearPrompt = () => {
    setDeferredPrompt(undefined)
  }

  useEffect(() => {
    const handler = (event: BeforeInstallPromptEvent) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const value = useMemo(
    () => ({ install, clearPrompt, deferredPrompt }),
    [deferredPrompt, install],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

import { isClient } from '@/utils/isClient'
import { MutableRefObject, useEffect } from 'react'

type UseMutationObserverProps = {
  ref?: MutableRefObject<HTMLElement | null> | HTMLElement | null
  callback: MutationCallback
  options?: MutationObserverInit
}

export function useMutationObserver({
  ref,
  callback,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  },
}: UseMutationObserverProps) {
  useEffect(() => {
    if (!isClient()) {
      return
    }

    const target =
      ref instanceof HTMLElement ? ref : (ref?.current ?? document.body)

    if (target) {
      const observer = new MutationObserver(callback)

      observer.observe(target, options)

      return () => observer.disconnect()
    }
  }, [ref, callback, options])
}

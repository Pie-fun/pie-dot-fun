'use client'

import { useMutationObserver } from '@/hooks/useMutationObserver'
import { useState } from 'react'

export function usePrivyMutationObserver() {
  const [isOpen, setIsOpen] = useState(false)

  const privyCheckByMutation = () => {
    const privy = document.querySelector('#privy-modal-content')

    setIsOpen(!!privy)
  }

  useMutationObserver({
    callback: privyCheckByMutation,
  })

  return { isOpen }
}

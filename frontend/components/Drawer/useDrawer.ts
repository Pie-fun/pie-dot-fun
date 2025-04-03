import { useContext } from 'react'
import { Context } from '@/components/Drawer/Drawer'

export const useDrawer = () => {
  const { isOpen } = useContext(Context)

  const close = () => {
    const escEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
      bubbles: true,
    })

    document.dispatchEvent(escEvent)
  }

  return {
    isOpen,
    close,
  }
}

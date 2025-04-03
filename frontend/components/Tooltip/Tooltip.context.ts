import { createContext, Dispatch, SetStateAction } from 'react'

export type TooltipContextProps = {
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export default createContext<TooltipContextProps | undefined>(undefined)

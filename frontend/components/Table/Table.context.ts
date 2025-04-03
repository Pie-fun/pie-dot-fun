import { createContext } from 'react'

export type TableContextProps = {
  isDisableResponsive?: boolean
}

export default createContext<TableContextProps>({})

'use client'

import * as styles from '@/components/Card/Card.css'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

type ContextProps = {
  size?: NonNullable<styles.HeaderVariants>['size'] &
    NonNullable<styles.FooterVariants>['size']
}

const Context = createContext<ContextProps>({})

export function Root({
  layout,
  background,
  border,
  shadow,
  size,
  ...props
}: PropsWithChildren & styles.RootVariants & ContextProps) {
  const value = useMemo(() => ({ size }), [size])

  return (
    <Context.Provider value={value}>
      <div
        className={styles.root({ layout, background, border, shadow })}
        {...props}
      />
    </Context.Provider>
  )
}

export function Header({
  ...props
}: PropsWithChildren & styles.HeaderVariants) {
  const { size } = useContext(Context)

  return <div className={styles.header({ size })} {...props} />
}

export function Title({ ...props }: PropsWithChildren & styles.TitleVariants) {
  return <h2 className={styles.title()} {...props} />
}

export function Footer({
  ...props
}: PropsWithChildren & styles.FooterVariants) {
  const { size } = useContext(Context)

  return <div className={styles.footer({ size })} {...props} />
}

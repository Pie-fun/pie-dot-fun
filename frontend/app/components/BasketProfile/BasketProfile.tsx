'use client'

import { TokenAvatar as TokenAvatarPrimitive } from '@/components/TokenAvatar/TokenAvatar'
import * as styles from '@/app/components/BasketProfile/BasketProfile.css'
import { Typography } from '@/components/Typography/Typography'
import { Ellipsis } from '@/components/Ellipsis/Ellipsis'
import {
  ComponentProps,
  createContext,
  HTMLAttributes,
  useContext,
  useMemo,
} from 'react'

type ContextProps = {
  size?: 'm' | 's'
}

const Context = createContext<ContextProps>({})

export function Root({
  size = 'm',
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.RootVariants & ContextProps) {
  const value = useMemo(() => ({ size }), [size])

  return (
    <Context.Provider value={value}>
      <div className={styles.root({ size })} {...props} />
    </Context.Provider>
  )
}

export function Content({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const { size } = useContext(Context)

  return <div className={styles.content({ size })} {...props} />
}

export function TokenAvatar({
  ...props
}: Readonly<
  Omit<ComponentProps<typeof TokenAvatarPrimitive>, 'alt' | 'shape' | 'size'>
>) {
  const { size } = useContext(Context)

  return (
    <TokenAvatarPrimitive
      alt=''
      shape='circle'
      size={size === 'm' ? 'xl' : 'l'}
      {...props}
    />
  )
}

export function Ticker({
  children,
  ...props
}: ComponentProps<typeof Typography>) {
  return (
    <div className={styles.ticker()}>
      <Typography
        as='span'
        typography='caption2'
        fontWeight='regular'
        color='accentPrimary'
        {...props}
      >
        $
      </Typography>
      <Typography
        as='span'
        typography='caption2'
        fontWeight='regular'
        color='accentPrimary'
        {...props}
      >
        <Ellipsis>{children}</Ellipsis>
      </Typography>
    </div>
  )
}

export function Name({
  children,
  ...props
}: ComponentProps<typeof Typography>) {
  const { size } = useContext(Context)

  return (
    <Typography
      as='p'
      typography={size === 'm' ? 'title4' : 'body1'}
      fontWeight={size === 'm' ? 'bold' : 'medium'}
      color='primary'
      {...props}
    >
      <Ellipsis lineClamp={2}>{children}</Ellipsis>
    </Typography>
  )
}

export function OneLiner({
  children,
  ...props
}: ComponentProps<typeof Typography>) {
  const { size } = useContext(Context)

  return (
    <Typography
      as='p'
      typography={size === 'm' ? 'body2' : 'caption1'}
      fontWeight='regular'
      color='secondary'
      {...props}
    >
      <Ellipsis>{children}</Ellipsis>
    </Typography>
  )
}

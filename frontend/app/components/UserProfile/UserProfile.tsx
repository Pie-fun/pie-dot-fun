'use client'

import { UserAvatar as UserAvatarPrimitive } from '@/components/UserAvatar/UserAvatar'
import * as styles from '@/app/components/UserProfile/UserProfile.css'
import { Typography } from '@/components/Typography/Typography'
import { ComponentProps, HTMLAttributes } from 'react'

export function Root({
  layout,
  ...props
}: HTMLAttributes<HTMLDivElement> & styles.RootVariants) {
  return <div className={styles.root({ layout })} {...props} />
}

export function Content({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.content()} {...props} />
}

export function UserAvatar({
  size = 'm',
  isLined = true,
  ...props
}: Readonly<Omit<ComponentProps<typeof UserAvatarPrimitive>, 'alt'>>) {
  return <UserAvatarPrimitive alt='' size={size} isLined={isLined} {...props} />
}

export function Name({ ...props }: ComponentProps<typeof Typography>) {
  return (
    <Typography
      as='p'
      typography='body2'
      fontWeight='regular'
      color='primary'
      {...props}
    />
  )
}

export function Description({ ...props }: ComponentProps<typeof Typography>) {
  return (
    <Typography
      as='p'
      typography='body2'
      fontWeight='regular'
      color='secondary'
      {...props}
    />
  )
}

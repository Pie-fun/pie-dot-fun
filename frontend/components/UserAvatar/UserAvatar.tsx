'use client'

import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import { Image } from '@/components/Image/Image'
import * as styles from '@/components/UserAvatar/UserAvatar.css'
import { IcPersonFill } from '@/components/Icon/Icons'

type FixedAvatarSize = {
  [key in NonNullable<NonNullable<styles.RootVariants>['size']>]: {
    width: number | string
    height: number | string
  }
}

export const UserAvatar = forwardRef<
  ElementRef<typeof Image>,
  ComponentPropsWithoutRef<typeof Image> & styles.RootVariants
>(({ src, alt, layout, size = 'm', isLined, ...props }, ref) => {
  const fixedSize = {
    xl: {
      width: 88,
      height: 88,
    },
    l: {
      width: 64,
      height: 64,
    },
    m: {
      width: 48,
      height: 48,
    },
    s: {
      width: 32,
      height: 32,
    },
    xs: {
      width: 24,
      height: 24,
    },
  } satisfies FixedAvatarSize

  return (
    <>
      {!src && (
        <div className={styles.root({ size, isLined, layout })}>
          <Empty
            style={{
              width: fixedSize[size].width,
              height: fixedSize[size].height,
            }}
          />
        </div>
      )}
      {src && (
        <div className={styles.root({ size, isLined, layout })}>
          <Image
            alt={alt}
            ref={ref}
            src={src}
            width={fixedSize[size].width}
            height={fixedSize[size].height}
            layout='fill'
            delay={0}
            unoptimized
            {...props}
          />
        </div>
      )}
    </>
  )
})

UserAvatar.displayName = 'UserAvatar'

export const Empty = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.EmptyVariants
>(({ ...props }, ref) => {
  return (
    <div className={styles.empty()} ref={ref} {...props}>
      <IcPersonFill aria-label='empty' />
    </div>
  )
})

Empty.displayName = 'Empty'

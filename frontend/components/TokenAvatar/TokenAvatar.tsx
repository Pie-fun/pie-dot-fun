'use client'

import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import { Image } from '@/components/Image/Image'
import * as styles from '@/components/TokenAvatar/TokenAvatar.css'
import { IcPieChartQuarterFill } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'
import { ICONS_FIXED_FROM_CHAIN_TYPE } from '@/constants/blockChains'

type FixedAvatarSize = {
  [key in NonNullable<NonNullable<styles.RootVariants>['size']>]: {
    width: number | string
    height: number | string
  }
}

export const TokenAvatar = forwardRef<
  ElementRef<typeof Image>,
  Omit<ComponentPropsWithoutRef<typeof Image>, 'layout' | 'shape' | 'alt'> &
    Partial<Pick<ComponentProps<typeof Image>, 'alt'>> &
    Partial<Pick<ComponentProps<typeof Chain>, 'chain'>> &
    styles.RootVariants
>(({ src, alt, layout, size = 'm', isLined, shape, chain, ...props }, ref) => {
  const fixedSize = {
    fontSize: {
      width: 16,
      height: 16,
    },
    inherit: {
      width: 16,
      height: 16,
    },
    xl: {
      width: 64,
      height: 64,
    },
    l: {
      width: 40,
      height: 40,
    },
    m: {
      width: 24,
      height: 24,
    },
    s: {
      width: 18,
      height: 18,
    },
    xs: {
      width: 12,
      height: 12,
    },
    xxs: {
      width: 8,
      height: 8,
    },
  } satisfies FixedAvatarSize

  const chainIconSize = {
    xl: 'm',
    l: 's',
    m: 'xs',
    s: 'xxs',
    xs: 'xxs',
    xxs: 'xxs',
    fontSize: 'inherit',
    inherit: 'inherit',
  } satisfies Record<
    NonNullable<ComponentProps<typeof TokenAvatar>['size']>,
    ComponentProps<typeof Icon>['size']
  >

  const ImagePart = src && (
    <div className={styles.root({ size, isLined, layout, shape })}>
      <Image
        alt={alt ?? ''}
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
  )

  const EmptyPart = !src && !chain && (
    <div className={styles.root({ size, isLined, layout, shape })}>
      <Empty
        style={{
          width: fixedSize[size].width,
          height: fixedSize[size].height,
        }}
      />
    </div>
  )

  const ChainPart = chain && (
    <div className={styles.chainWrapper()}>
      <Chain chain={chain} size={chainIconSize[size]} />
    </div>
  )

  return (
    <>
      {EmptyPart}
      {src && chain ? (
        <div className={styles.rootWrapper()}>
          {ImagePart}
          {ChainPart}
        </div>
      ) : (
        src && ImagePart
      )}
      {!src && ChainPart}
    </>
  )
})

TokenAvatar.displayName = 'TokenAvatar'

type ChainProps = {
  chain: ChainType
}

export const Chain = forwardRef<
  ElementRef<typeof Icon>,
  ComponentPropsWithRef<typeof Icon> & ChainProps
>(({ chain, ...props }, ref) => {
  return (
    <Icon ref={ref} background='default' shape='square' {...props}>
      {ICONS_FIXED_FROM_CHAIN_TYPE[chain]}
    </Icon>
  )
})

Chain.displayName = 'Chain'

export const Empty = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.EmptyVariants
>(({ ...props }, ref) => {
  return (
    <div className={styles.empty()} ref={ref} {...props}>
      <IcPieChartQuarterFill aria-label='empty' />
    </div>
  )
})

Empty.displayName = 'Empty'

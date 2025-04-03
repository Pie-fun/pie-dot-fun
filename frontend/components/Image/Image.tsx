'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { default as ImagePrimitive } from 'next/image'
import * as styles from '@/components/Image/Image.css'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import type { SetOptional } from 'type-fest'
import { IcEmptyImageFill, IcErrorCircleFill } from '@/components/Icon/Icons'

type ImageStatus = 'loading' | 'error' | 'success' | 'empty'

type ImageProps = {
  delay?: ComponentProps<typeof Skeleton>['delay']
}

export const Image = forwardRef<
  ElementRef<typeof ImagePrimitive>,
  SetOptional<
    Omit<ComponentPropsWithoutRef<typeof ImagePrimitive>, 'layout'>,
    'src'
  > &
    styles.ImageVariants &
    ImageProps
>(
  (
    {
      src,
      width,
      height,
      style,
      onError,
      onLoad,
      onLoadStart,
      layout = 'hug',
      ratio,
      delay = 1000,
      placeholder,
      unoptimized,
      shape,
      ...props
    },
    ref,
  ) => {
    const [state, setState] = useState<ImageStatus>(!src ? 'empty' : 'loading')
    const isHugLayout = layout === 'hug'

    useEffect(() => {
      if (!src) {
        setState('empty')
      } else {
        setState('loading')
      }
    }, [src])

    return (
      <>
        {state === 'empty' && (
          <Empty {...(isHugLayout && { style: { width, height, ...style } })} />
        )}
        {state === 'error' && (
          <ErrorCase
            {...(isHugLayout && { style: { width, height, ...style } })}
          />
        )}
        {state !== 'error' && state !== 'empty' && (
          <div className={styles.root({ layout })} style={style}>
            {src && (
              <ImagePrimitive
                ref={ref}
                src={src}
                width={width}
                height={height}
                unoptimized={unoptimized}
                className={styles.image({ layout, ratio, shape })}
                onLoadStart={(event) => {
                  onLoadStart?.(event)
                  setState('loading')
                }}
                onError={(event) => {
                  onError?.(event)
                  setState('error')
                }}
                onLoad={(event) => {
                  onLoad?.(event)
                  setState('success')
                }}
                {...props}
              />
            )}
            {state === 'loading' && !placeholder && (
              <Skeleton
                delay={delay}
                style={{
                  ...style,
                  position: src ? 'absolute' : undefined,
                }}
              />
            )}
          </div>
        )}
      </>
    )
  },
)

Image.displayName = 'Image'

export const Empty = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.EmptyVariants
>(({ ...props }, ref) => {
  return (
    <div className={styles.empty()} ref={ref} {...props}>
      <IcEmptyImageFill aria-label='empty' />
    </div>
  )
})

Empty.displayName = 'Empty'

export const ErrorCase = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.ErrorCaseVariants
>(({ ...props }, ref) => {
  return (
    <div className={styles.errorCase()} ref={ref} {...props}>
      <IcErrorCircleFill aria-label='error' />
    </div>
  )
})

ErrorCase.displayName = 'ErrorCase'

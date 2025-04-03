'use client'

import * as styles from '@/components/Skeleton/Skeleton.css'
import { HTMLAttributes, useEffect, useState } from 'react'

type SkeletonProps = {
  width?: number | string
  height?: number | string
  delay?: number
}

export function Skeleton({
  width,
  height,
  layout,
  shape = 'rectangle',
  delay,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement> & SkeletonProps & styles.SkeletonVariants) {
  const [transition, setTransition] = useState<
    styles.SkeletonVariants['transition']
  >(delay ? 'ready' : undefined)

  useEffect(() => {
    setTimeout(() => {
      setTransition('done')
    }, delay)
  }, [delay])

  return (
    <div
      {...((width || height || delay) && {
        style: { width, height, animationDelay: `${delay}ms`, ...style },
      })}
      className={styles.skeleton({ layout, shape, transition })}
      {...props}
    />
  )
}

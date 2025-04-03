'use client'

import { useRef, useEffect, PropsWithChildren } from 'react'
import * as styles from '@/components/Observer/Observer.css'

type ObserverProps = {
  callback: () => void
  condition?: boolean
  options?: IntersectionObserverInit
}

export default function Observer({
  callback,
  condition,
  children,
  options,
  layout,
}: PropsWithChildren<ObserverProps> & styles.RootVariants) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && condition) {
          callback()
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    const observerRef = ref.current

    if (observerRef) {
      observer.observe(observerRef)
    }

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef)
      }
    }
  }, [options, condition, callback])

  return (
    <>
      {condition && (
        <div className={styles.root({ layout })}>
          <div ref={ref}>{children}</div>
        </div>
      )}
    </>
  )
}

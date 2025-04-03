import { useState, useEffect } from 'react'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import * as styles from '@/app/components/AnimateSpringImages/AnimateSpringImages.css'

type AnimateSpringImagesProps = {
  images?: string[]
  duration?: number
  width: number | string
  height: number | string
}

export function AnimateSpringImages({
  images = [],
  duration = 1000,
  width,
  height,
  ...props
}: AnimateSpringImagesProps & HTMLMotionProps<'img'>) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!images.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, images.length])

  return (
    <div
      className={styles.root()}
      {...((width || height) && {
        style: { width, height },
      })}
    >
      <AnimatePresence>
        {images.map((image, index) => {
          const isFrontCard = index === currentIndex

          return (
            <motion.div
              key={`${image}-${index}`}
              className={styles.content()}
              variants={
                isFrontCard
                  ? {
                      animate: { scale: 1, opacity: 1 },
                      exit: {
                        scale: 0.5,
                        opacity: 0,
                      },
                    }
                  : {
                      initial: { scale: 0, opacity: 0 },
                      animate: { scale: 0.75 },
                    }
              }
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.img
                className={styles.image()}
                src={image}
                alt=''
                {...props}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

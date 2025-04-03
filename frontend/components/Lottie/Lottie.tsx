import { useEffect, useRef } from 'react'
import lottie, { AnimationConfig } from 'lottie-web'

interface LottieComponentProps {
  json: unknown
  animationConfigs?: Partial<AnimationConfig>
}

export default function Lottie({
  json,
  animationConfigs,
  ...props
}: Readonly<LottieComponentProps>) {
  const lottieContainer = useRef<HTMLDivElement | null>(null)
  const jsonRef = useRef<unknown>(json)

  useEffect(() => {
    if (lottieContainer.current && jsonRef.current) {
      lottie.loadAnimation({
        container: lottieContainer.current,
        animationData: jsonRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        ...animationConfigs,
      })
    }

    return () => {
      lottie.destroy()
    }
  }, [animationConfigs])

  return <div ref={lottieContainer} {...props} />
}

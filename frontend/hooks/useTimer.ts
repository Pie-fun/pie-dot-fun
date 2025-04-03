import { useEffect, useRef, useState } from 'react'

export type TimerCallbacks = {
  onTick?: (time: number) => void
  onFinish?: () => void
}

export interface UseTimerProps extends TimerCallbacks {
  duration: number
  refreshRate?: number
  loop?: boolean
}

export function useTimer({
  duration: initialDuration,
  refreshRate = 1000,
  loop,
  onTick,
  onFinish,
}: UseTimerProps) {
  const timeIncrement = 1 * (refreshRate / 1000)
  const [duration, setDuration] = useState(initialDuration / 1000)
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>()
  const isRunning = !!(timer && time)
  const callbackRef = useRef<TimerCallbacks>()
  const isTimerExistRef = useRef(false)

  useEffect(() => {
    callbackRef.current = { onTick, onFinish }
  }, [onTick, onFinish])

  useEffect(() => {
    setDuration(initialDuration / 1000)
  }, [initialDuration])

  const start = () => {
    if (isTimerExistRef.current) return

    isTimerExistRef.current = true

    const newTimer = setInterval(() => {
      setTime((prevTime) => {
        const updatedTime = prevTime + timeIncrement

        if (updatedTime >= duration) {
          if (loop) {
            return 0
          } else {
            clearInterval(newTimer)
            callbackRef.current?.onFinish?.()
          }
        }

        callbackRef.current?.onTick?.(updatedTime)

        return updatedTime
      })
    }, refreshRate)

    setTimer(newTimer)
  }

  const pause = () => {
    clearInterval(timer)
    setTimer(undefined)
    isTimerExistRef.current = false
  }

  const stop = () => {
    clearInterval(timer)
    setTimer(undefined)
    setTime(0)
    isTimerExistRef.current = false
  }

  const restart = () => {
    setTime(0)
    isTimerExistRef.current = false

    if (!timer) {
      start()
    }
  }

  const set = (time: number) => {
    setTime(time)
  }

  useEffect(() => {
    return () => {
      clearInterval(timer)
    }
  }, [timer])

  return {
    time,
    timer,
    isRunning,
    start,
    pause,
    stop,
    restart,
    set,
    hours: time / 3600,
    minutes: time / 60,
    seconds: time % 60,
  }
}

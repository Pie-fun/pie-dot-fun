import { isClient } from '@/utils/isClient'
import { randomBytes } from 'crypto'

type GetRandomProps = {
  min?: number
  max?: number
}

export function getRandom({ min = 0, max = 1 }: GetRandomProps = {}) {
  if (min >= max) {
    throw new Error('`min` must be less than `max`')
  }

  const getRandomFraction = () => {
    const maxUint32 = 0xffffffff

    if (isClient()) {
      const array = new Uint32Array(1)

      window.crypto.getRandomValues(array)

      return array[0] / (maxUint32 + 1)
    }

    const buf = randomBytes(4)
    const randomValue = buf.readUInt32BE(0)

    return randomValue / (maxUint32 + 1)
  }

  return getRandomFraction() * (max - min) + min
}

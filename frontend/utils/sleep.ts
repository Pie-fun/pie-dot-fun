type SleepProps = {
  delay: number
}

export function sleep({ delay }: SleepProps) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

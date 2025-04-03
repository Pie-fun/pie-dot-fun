import { useEffect, useState } from 'react'

type useMediaQueryProps = {
  query: string
}

export function useMediaQuery({ query }: useMediaQueryProps) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    const result = matchMedia(query)

    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}

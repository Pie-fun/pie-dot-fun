type GetCssVarToValueProps = {
  cssVar: string
  format?: 'hex' | 'rgb' | 'hsl'
  element?: HTMLElement
}

export function getCssVarToValue({
  cssVar,
  format = 'hex',
  element,
}: GetCssVarToValueProps) {
  const regex = /^var\((--[\w-]+)\)$/
  const match = regex.exec(cssVar)

  if (typeof window === 'undefined') {
    return undefined
  }

  if (!match) {
    throw new Error("Invalid CSS variable format. Use 'var(--variable-name)'.")
  }

  const variableName = match[1]

  const value = getComputedStyle(element ?? document.documentElement)
    .getPropertyValue(variableName)
    .trim()

  if (!value) {
    return undefined
  }

  if (value.startsWith('#')) {
    return value
  }

  if ((value.startsWith('hsl') && format === 'hex') || format === 'rgb') {
    return convertFromHsl({ hsl: value, format })
  }
}

type ConvertFromHslProps = {
  hsl: string
  format: 'hex' | 'rgb'
}

export function convertFromHsl({ hsl, format }: ConvertFromHslProps) {
  const regex = /^hsl\((\d+)\s+(\d+)%\s+(\d+)%\)$/
  const match = regex.exec(hsl)

  if (!match) {
    throw new Error(
      "Invalid HSL format. Use 'hsl(hue saturation% lightness%)'.",
    )
  }

  let [_, h, s, l] = match.map(Number)

  h = h % 360
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0,
    g = 0,
    b = 0

  if (h < 60) {
    r = c
    g = x
  } else if (h < 120) {
    r = x
    g = c
  } else if (h < 180) {
    g = c
    b = x
  } else if (h < 240) {
    g = x
    b = c
  } else if (h < 300) {
    r = x
    b = c
  } else {
    r = c
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  if (format === 'hex') {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
  } else if (format === 'rgb') {
    return `rgb(${r}, ${g}, ${b})`
  } else {
    throw new Error("Invalid format. Use 'hex' or 'rgb'.")
  }
}

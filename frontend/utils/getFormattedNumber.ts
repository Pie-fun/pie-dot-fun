import BigNumber from 'bignumber.js'

type GetFormattedNumberProps = {
  value?: string | number
  locale?: string
  options?: Intl.NumberFormatOptions
  suffix?: string
  isAbs?: boolean
  emptyValue?: string
  decimalDivisor?: number // ex. 1000000 for 6 decimals
}

export function getFormattedNumber({
  value,
  locale = 'en-US',
  options = {},
  suffix = '',
  isAbs = false,
  emptyValue = '',
  decimalDivisor = 1,
}: GetFormattedNumberProps) {
  if (!value && emptyValue) {
    return emptyValue
  }

  if (value === undefined || value === null || value === '') {
    return ''
  }

  const isSign = value === '+' || value === '-'
  const multipleDotRemovedValue = value.toString().replace(/(\..*?)\./g, '$1')
  const validValue = isAbs
    ? multipleDotRemovedValue.replaceAll('-', '')
    : multipleDotRemovedValue

  if (!validValue) {
    return `${suffix}`
  }

  if (!isAbs && isSign) {
    return `${validValue}${suffix}`
  }

  const bigNumber = isAbs
    ? new BigNumber(validValue).dividedBy(decimalDivisor).abs()
    : new BigNumber(validValue).dividedBy(decimalDivisor)

  if (!isSign && bigNumber.isNaN()) {
    return ''
  }

  const formatted = new Intl.NumberFormat(locale, {
    roundingMode: 'trunc',
    maximumFractionDigits: 100,
    ...options,
  }).format(bigNumber.toString() as unknown as number)

  if (bigNumber.isZero()) {
    return `0${suffix}`
  }

  return `${formatted}${suffix}`
}

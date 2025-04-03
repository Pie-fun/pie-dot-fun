import BigNumber from 'bignumber.js'

type GetUnFormattedNumberProps = {
  value?: string | number
  isRemoveEndingDot?: boolean
}

export function getUnFormattedNumber({
  value,
  isRemoveEndingDot,
}: GetUnFormattedNumberProps) {
  if (value === undefined || value === null || value === '') {
    return ''
  }

  const regex = new RegExp(/[^\d.-]/, 'g')
  const unFormatted = value.toString().replace(regex, '')
  const validValue = unFormatted.toString().replace(/(\..*?)\./g, '$1')
  const isSign = validValue === '+' || validValue === '-'
  const bigNumber = new BigNumber(validValue)

  if (!isSign && bigNumber.isNaN()) {
    return ''
  }

  if (!isRemoveEndingDot && validValue.includes('.')) {
    return validValue
  }

  if (isSign) {
    return validValue
  }

  return bigNumber.toString()
}

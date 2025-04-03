import BigNumber from 'bignumber.js'

type GetDecimalWithZeroCountProps = {
  value: number | string
  threshold?: number
  decimal?: number
}

export function getDecimalWithZeroCount({
  value,
  threshold = 3,
  decimal = 4,
}: GetDecimalWithZeroCountProps) {
  const bigNumber = new BigNumber(value)
  const fixedValue = bigNumber.toFixed()
  const [integerPart, decimalPart] = fixedValue.split('.')
  const regex = new RegExp(`0{${threshold},}`, 'g')
  const match = regex.exec(decimalPart)

  const toSubscriptNumber = (value: string | number) => {
    return value.toString().replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[parseInt(d, 10)])
  }

  if (!match) {
    return {
      fixedValue,
      integerPart,
      decimalPartBeforeThreshold: decimalPart,
      count: 0,
      decimalPartAfterThreshold: undefined,
    }
  }

  const count = match[0].length
  const subscriptCount = toSubscriptNumber(count)
  const decimalPartBeforeThreshold = decimalPart.slice(0, match.index)
  const decimalPartAfterThreshold = decimalPart.slice(match.index + count)

  const formattedDecimalPartAfterThreshold = decimalPartAfterThreshold.slice(
    0,
    decimal,
  )

  return {
    fixedValue,
    integerPart,
    decimalPartBeforeThreshold,
    subscriptCount,
    count,
    decimalPartAfterThreshold,
    formattedDecimalPartAfterThreshold,
  }
}

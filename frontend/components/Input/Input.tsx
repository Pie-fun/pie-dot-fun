import { ChangeEvent, InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import * as styles from '@/components/Input/Input.css'
import { getUnFormattedNumber } from '@/utils/getUnFormattedNumber'
import BigNumber from 'bignumber.js'

export type InputProps = {
  isError?: boolean
  prefixContent?: ReactNode
  suffixContent?: ReactNode
  bottomContent?: ReactNode
  format?:
    | {
        mode: 'normal'
        locale?: string
      }
    | {
        mode: 'number'
        locale?: string
        isAbs?: boolean
      }
}

export const Input = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    InputProps &
    styles.RootVariants &
    styles.InputVariants
>(
  (
    {
      layout,
      disabled,
      isError,
      prefixContent,
      suffixContent,
      bottomContent,
      maxLength,
      value,
      align,
      size,
      onChange,
      format = {
        mode: 'normal',
        locale: 'en-US',
      },
      ...props
    },
    ref,
  ) => {
    const getFormattedNumber = (value: string) => {
      const unformattedValue = getUnFormattedNumber({ value })

      const multipleDotRemovedValue = unformattedValue.replace(
        /(\..*?)\./g,
        '$1',
      )

      const validValue =
        format?.mode === 'number' && format.isAbs
          ? multipleDotRemovedValue.replaceAll('-', '')
          : multipleDotRemovedValue

      if (unformattedValue.includes('.')) {
        const [integerPart, decimalPart] = validValue.split('.')

        const formattedInteger = new Intl.NumberFormat(format?.locale, {
          maximumFractionDigits: 0,
        }).format(new BigNumber(integerPart || 0).toNumber())

        return `${formattedInteger}.${decimalPart}`
      }

      const bigNumber =
        format?.mode === 'number' && format?.isAbs
          ? new BigNumber(validValue).abs()
          : new BigNumber(validValue)

      if (bigNumber.isNaN()) {
        return ''
      }

      return new Intl.NumberFormat(format?.locale, {
        roundingMode: 'trunc',
        maximumFractionDigits: 100,
      }).format(bigNumber.toString() as unknown as number)
    }

    const getFormattedInputNumber = (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target
      const value = input.value
      const cursorPosition = input.selectionStart ?? 0
      const formattedValue = getFormattedNumber(value)

      const newCursorPosition =
        cursorPosition + (formattedValue.length - value.length)

      input.value = formattedValue
      input.setSelectionRange(newCursorPosition, newCursorPosition)
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      if (maxLength && value.length > maxLength) {
        event.target.value = value.slice(0, maxLength)
      }

      if (format?.mode === 'number') {
        getFormattedInputNumber(event)
      }

      onChange?.(event)
    }

    return (
      <label className={styles.root({ layout, disabled, isError })}>
        <div className={styles.content()}>
          {prefixContent}
          <div className={styles.centerContent()}>
            <input
              className={styles.input({ align, size })}
              ref={ref}
              disabled={disabled}
              value={value}
              maxLength={maxLength}
              onChange={handleOnChange}
              {...props}
            />
            {bottomContent}
          </div>
          {suffixContent}
          {maxLength && (
            <span className={styles.maxLength()}>
              {value?.toString().length}/{maxLength}
            </span>
          )}
        </div>
      </label>
    )
  },
)

Input.displayName = 'Input'

'use client'

import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import * as styles from '@/components/Textarea/Textarea.css'

export type TextareaProps = {
  isError?: boolean
  prefixContent?: ReactNode
  suffixContent?: ReactNode
  bottomContent?: ReactNode
  isAutoHeight?: boolean
  isPreventNewline?: boolean
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
    TextareaProps &
    styles.RootVariants &
    styles.TextareaVariants
>(
  (
    {
      layout,
      disabled,
      isError,
      prefixContent,
      suffixContent,
      bottomContent,
      isAutoHeight,
      isPreventNewline,
      onKeyDown,
      onChange,
      maxLength,
      value,
      align,
      size,
      rows = 5,
      style,
      ...props
    },
    ref,
  ) => {
    const heightCheckerRef = useRef<HTMLTextAreaElement>(null)
    const [autoHeight, setAutoHeight] = useState(0)

    useLayoutEffect(() => {
      if (isAutoHeight && heightCheckerRef.current) {
        const scrollHeight = heightCheckerRef.current.scrollHeight

        setAutoHeight(scrollHeight)
      }
    }, [isAutoHeight, value])

    const onKeyDownHandling = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (isPreventNewline && event.key === 'Enter') {
        event.preventDefault()
        event.currentTarget.form?.requestSubmit()
      }

      onKeyDown?.(event)
    }

    const onChangeHandling = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (isPreventNewline) {
        event.target.value = event.target.value.replace(/[\n\r\u2028]/g, '')
      }

      onChange?.(event)
    }

    return (
      <label className={styles.root({ layout, disabled, isError })}>
        <div className={styles.content()}>
          {prefixContent}
          <div className={styles.centerContent()}>
            <textarea
              className={styles.textarea({ align, size })}
              ref={ref}
              disabled={disabled}
              value={value}
              maxLength={maxLength}
              rows={rows}
              onKeyDown={onKeyDownHandling}
              onChange={onChangeHandling}
              style={
                isAutoHeight && autoHeight
                  ? {
                      ...style,
                      height: autoHeight,
                      overflow: 'hidden',
                    }
                  : { ...style }
              }
              {...props}
            />
            {isAutoHeight && (
              <div className={styles.heightChecker()}>
                <textarea
                  className={styles.textarea({ align, size })}
                  ref={heightCheckerRef}
                  disabled={disabled}
                  value={value}
                  maxLength={maxLength}
                  rows={rows}
                  onKeyDown={onKeyDownHandling}
                  onChange={onChangeHandling}
                  style={style}
                  {...props}
                />
              </div>
            )}
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

Textarea.displayName = 'Textarea'

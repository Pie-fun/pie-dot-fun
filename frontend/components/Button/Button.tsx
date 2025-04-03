import { ButtonHTMLAttributes, forwardRef } from 'react'
import * as styles from '@/components/Button/Button.css'
import { Icon } from '@/components/Icon/Icon'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { AsChildProps } from '@/types/utility'
import { IcLoadingCircleDashFill } from '@/components/Icon/Icons'

type ButtonProps = {
  isLoading?: boolean
  loadingIconPosition?: 'left' | 'entire'
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> &
    AsChildProps<ButtonProps> &
    styles.ButtonVariants
>(
  (
    {
      asChild,
      isLoading,
      loadingIconPosition = 'left',
      disabled,
      children,
      layout,
      size,
      color,
      buttonType,
      isUnderline,
      shape = 'square',
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        disabled={isLoading || disabled}
        ref={ref}
        className={styles.button({
          layout,
          size,
          color,
          buttonType,
          isUnderline,
          shape,
        })}
        type={type}
        {...props}
      >
        {isLoading && loadingIconPosition === 'left' && (
          <Icon isSpin>
            <IcLoadingCircleDashFill />
          </Icon>
        )}
        {isLoading && loadingIconPosition === 'entire' ? (
          <Icon isSpin>
            <IcLoadingCircleDashFill />
          </Icon>
        ) : (
          <Slottable>{children}</Slottable>
        )}
      </Component>
    )
  },
)

Button.displayName = 'Button'

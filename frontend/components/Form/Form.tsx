'use client'

import { Label as LabelPrimitive } from '@/components/Label/Label'
import { Slot } from '@radix-ui/react-slot'
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  useContext,
  useId,
  useMemo,
} from 'react'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form'
import * as styles from '@/components/Form/Form.css'
import * as MessagePrimitive from '@/components/Message/Message'
import { Typography } from '@/components/Typography/Typography'

export const Root = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

export const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const value = useMemo(() => ({ name: props.name }), [props.name])

  return (
    <FormFieldContext.Provider value={value}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <Form.Field>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

export const Item = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & styles.ItemVariants
>(({ layout, ...props }, ref) => {
  const id = useId()
  const value = useMemo(() => ({ id }), [id])

  return (
    <FormItemContext.Provider value={value}>
      <div ref={ref} className={styles.item({ layout })} {...props} />
    </FormItemContext.Provider>
  )
})

Item.displayName = 'Item'

export const Label = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive> & styles.LabelVariants
>(({ ...props }, ref) => {
  const { formItemId } = useFormField()

  return (
    <div className={styles.label()}>
      <LabelPrimitive ref={ref} htmlFor={formItemId} {...props} />
    </div>
  )
})

Label.displayName = 'Label'

export const Control = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})

Control.displayName = 'Control'

export const Description = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & styles.DescriptionVariants
>(({ ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      id={formDescriptionId}
      ref={ref}
      className={styles.description()}
      {...props}
    />
  )
})

Description.displayName = 'Description'

export const Message = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & styles.MessageVariants
>(({ children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <div className={styles.message()}>
      <MessagePrimitive.ErrorCase ref={ref} id={formMessageId} {...props}>
        <Typography
          typography='body1'
          fontWeight='regular'
          color='alertPrimary'
        >
          {body}
        </Typography>
      </MessagePrimitive.ErrorCase>
    </div>
  )
})

Message.displayName = 'Message'

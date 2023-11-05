'use client'

import {
  TextInput as $TextInput,
  type TextInputProps as $TextInputProps,
} from '@mantine/core'
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form'

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TextInputProps, 'value' | 'defaultValue'>

export function TextInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TextInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$TextInput
      value={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}

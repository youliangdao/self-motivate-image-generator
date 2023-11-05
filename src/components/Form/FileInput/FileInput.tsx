'use client'

import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from '@mantine/core'
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form'

export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$FileInputProps, 'value' | 'defaultValue' | 'onChange'> & {
    onChange?: (files: File | null) => void
  }

export function FileInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  multiple,
  onChange,
  ...props
}: FileInputProps<T>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  const handleChange = (files: File | null) => {
    if (onChange) {
      onChange(files)
    }
  }

  return (
    <$FileInput
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}

'use client'

import { Box, Button, Group, Space } from '@mantine/core'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { Form as $Form, useFormContext } from 'react-hook-form'

import { DateInput, TextInput, TimeInput } from '@/components'

import { FormType } from './schema'

export function Form({ handleClick }: { handleClick: () => void }) {
  const router = useRouter()

  const {
    control,
    formState: { isValid },
  } = useFormContext<FormType>()

  return (
    <$Form control={control}>
      <Box maw={600} mx="auto">
        {/** 15文字以内 */}
        <TextInput
          name="title"
          control={control}
          withAsterisk
          size="lg"
          label="タイトル"
        />
        <Space h={20} />
        {/** 30文字以内 */}
        <TextInput
          name="description"
          control={control}
          size="lg"
          label="補足説明"
        />
        <Space h={20} />
        <DateInput
          name="date"
          control={control}
          size="lg"
          withAsterisk
          label="日付"
        />
        <Space h={20} />
        <Group justify="flex-start" align="center">
          <TimeInput
            name="startTime"
            control={control}
            withAsterisk
            size="lg"
            label="開始時間"
            placeholder="11:00"
            className="flex-1"
          />
          <span className="mt-6">〜</span>
          <TimeInput
            name="endTime"
            control={control}
            withAsterisk
            size="lg"
            label="終了時間"
            placeholder="13:00"
            className="flex-1"
          />
        </Group>
      </Box>
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            nprogress.set(40)
            router.push('/on-boarding/pick-template')
          }}
        >
          戻る
        </Button>
        <Button size="lg" onClick={handleClick} disabled={!isValid}>
          次へ
        </Button>
      </Group>
    </$Form>
  )
}

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Space, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import objectHash from 'object-hash'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Form } from '@/components'
import { FormType, schema } from '@/components/Form/schema'

export default function EnterName() {
  const router = useRouter()
  useEffect(() => {
    nprogress.set(60)
  }, [])

  const form = useForm<FormType>({
    defaultValues: {
      title: '',
      description: '',
      startTime: '',
      endTime: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const [formLocalData, setFormLocalData] = useLocalStorage<FormType>({
    key: 'form',
    defaultValue: {
      title: '',
      date: null,
      description: '',
      startTime: '',
      endTime: '',
    },
  })

  const handleClick = () => {
    setFormLocalData(form.getValues())
    nprogress.set(80)
    router.push('/on-boarding/preview')
  }

  // ToDo: ローカルストレージから取得した日付を初期値として設定する
  useEffect(() => {
    if (formLocalData) {
      form.reset({
        title: formLocalData.title,
        date: formLocalData?.date ? new Date(formLocalData.date) : new Date(),
        description: formLocalData.description,
        startTime: formLocalData.startTime,
        endTime: formLocalData.endTime,
      })
    }
  }, [formLocalData, form])

  return (
    <>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step3</Title>
        <Space h="sm" />
        <Title size="h2">
          必要な情報（タイトルや時間帯など）を記入してください
        </Title>
        <Space h="md" />
        <Text c="dimmed">
          以下のフォーマットに従って、必要な情報を記入しましょう
        </Text>
      </div>
      <FormProvider {...form}>
        <Form
          key={objectHash(formLocalData || {})}
          {...{ handleClick, formLocalData }}
        />
      </FormProvider>
    </>
  )
}

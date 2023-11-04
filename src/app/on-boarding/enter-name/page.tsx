'use client'

import { Button, Group, Space, Text, Title } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Form } from '@/components'

export default function EnterName() {
  const [scroll, scrollTo] = useWindowScroll()
  const router = useRouter()
  useEffect(() => {
    nprogress.set(60)
  }, [])
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
      <Form />
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            nprogress.set(25)
            router.push('/on-boarding/pick-template')
          }}
        >
          戻る
        </Button>
        <Button
          size="lg"
          onClick={() => {
            nprogress.set(80)
            scrollTo({ y: 0 })
            router.push('/on-boarding/preview')
          }}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

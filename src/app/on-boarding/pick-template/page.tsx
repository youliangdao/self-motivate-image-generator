'use client'

import {
  Button,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import templateCanvaSetsuzei from '/public/template_canva_setsuzei.svg'
import templateRed from '/public/template_red.svg'
import templateRunteq from '/public/template_runteq.svg'
import templateRunteqBlue from '/public/template_runteq_blue.svg'
import templateYellow from '/public/template_yellow.svg'
import template1 from '/public/template1.svg'

export default function PickTemplate() {
  const [scroll, scrollTo] = useWindowScroll()

  const router = useRouter()
  useEffect(() => {
    nprogress.set(40)
  }, [])

  return (
    <>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step2</Title>
        <Space h="sm" />
        <Title>テンプレートを選択してください</Title>
        <Space h="md" />
        <Text c="dimmed">以下からお好きなテンプレートを選択しましょう</Text>
        <Text c="dimmed">
          ※画像部分はStep1で選択したカテゴリに応じて変更されます
        </Text>
      </div>
      <SimpleGrid cols={2}>
        <Image
          src={template1.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
        <Image
          src={templateRunteq.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
        <Image
          src={templateRed.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
        <Image
          src={templateRunteqBlue.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
        <Image
          src={templateCanvaSetsuzei.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
        <Image
          src={templateYellow.src}
          alt="Card"
          width={400}
          fit="contain"
          radius="md"
        />
      </SimpleGrid>
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            nprogress.set(20)
            router.push('/on-boarding/select-type')
          }}
        >
          戻る
        </Button>
        <Button
          size="lg"
          onClick={() => {
            nprogress.set(60)
            scrollTo({ y: 0 })
            router.push('/on-boarding/enter-name')
          }}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

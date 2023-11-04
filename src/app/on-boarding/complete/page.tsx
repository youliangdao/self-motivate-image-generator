'use client'

import { Button, Center, Image, Space, Stack, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import Confetti from 'react-confetti'

import image from '/public/17015_color.svg'

export default function Complete() {
  const { width, height } = useViewportSize()
  return (
    <>
      <Confetti width={width} height={height} />

      <div className="pb-10 text-center">
        <Title>アイキャッチ画像が完成しました 🎉</Title>
        <Space h={50} />
        <Center>
          <Image src={image.src} height={200} fit="contain" alt="happy" />
        </Center>
        <Space h={50} />
        <Text c="dimmed" size="lg">
          以下のボタンからX（旧Twitter）などに投稿してみましょう！
        </Text>
      </div>
      <Stack align="center">
        <Button size="lg">ツイートする</Button>
        <Button
          variant="outline"
          onClick={() => {
            notifications.show({
              title: 'URLをコピーしました！',
              message: 'あとはお好きなSNSに貼り付けて投稿するだけです。',
            })
          }}
          size="lg"
        >
          URLをコピー
        </Button>
      </Stack>
    </>
  )
}

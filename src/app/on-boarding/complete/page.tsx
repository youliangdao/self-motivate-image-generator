'use client'

import { Button, Center, Image, Stack, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import Confetti from 'react-confetti'

import image from '/public/seminar.png'

export default function Complete() {
  const { width, height } = useViewportSize()
  return (
    <>
      <Confetti width={width} height={height} />

      <div className="pb-10 text-center">
        <Title>アイキャッチ画像が完成しました 🎉</Title>
        <Center>
          <Image src={image.src} height={400} fit="contain" alt="happy" />
        </Center>
        <Title size="h2">
          以下のボタンからX（旧Twitter）などに投稿してみましょう！
        </Title>
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

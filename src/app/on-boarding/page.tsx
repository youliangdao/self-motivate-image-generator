/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import {
  Button,
  Center,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Stepper,
  Text,
  Title,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

import image from '/public/17412_color.svg'
import { Form } from '@/components'

export default function PickTemplate() {
  const [active, setActive] = useState(0)
  const [scroll, scrollTo] = useWindowScroll()
  const { width, height } = useWindowSize()
  const nextStep = () => {
    scrollTo({ y: 0 })
    setActive((current) => (current < 3 ? current + 1 : current))
  }
  const prevStep = () => {
    scrollTo({ y: 0 })
    setActive((current) => (current > 0 ? current - 1 : current))
  }

  return (
    <>
      <Stepper className="" active={active} onStepClick={setActive}>
        <Stepper.Step label="Step1" description="テンプレートを選択">
          <div className="py-10 text-center">
            <Title size="h2">テンプレートを選択しましょう</Title>
            <Text c="dimmed">
              以下からお好きなテンプレートを選択してください
            </Text>
          </div>
          <SimpleGrid cols={2}>
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
            <Image
              src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png"
              alt="Card"
              width={400}
              fit="contain"
              radius="md"
            />
          </SimpleGrid>
        </Stepper.Step>
        <Stepper.Step label="Step2" description="必要な情報を記入">
          <div className="pb-5 pt-10 text-center">
            <Title size="h2">
              必要な情報（タイトルや時間帯など）を記入しましょう
            </Title>
            <Text c="dimmed">
              以下のフォーマットに従って、必要な情報を記入してください
            </Text>
          </div>
          <Form />
        </Stepper.Step>
        <Stepper.Step label="Step3" description="プレビューで確認">
          <div className="pt-10 text-center">
            <Title size="h2">
              プレビュー画面で、アイキャッチ画像を確認しましょう
            </Title>
            <Text c="dimmed">
              修正したい箇所があれば、前のステップに戻って修正してください
            </Text>
          </div>
        </Stepper.Step>
        <Stepper.Completed>
          <div className="text-center">
            <Confetti width={width} height={height} />
            <Title>おめでとうございます🎉</Title>
            <Space h={50} />
            <Center>
              <Image src={image.src} height={200} fit="contain" alt="happy" />
            </Center>
            <Space h={50} />
            <Text c="dimmed" size="lg">
              アイキャッチ画像が完成しました！
              <br />
              以下のボタンからTwitterやその他SNSなどに投稿してみましょう！
            </Text>
          </div>
        </Stepper.Completed>
      </Stepper>
      {active === 3 ? (
        <Stack align="center" className="mt-10">
          <Button size="lg">ツイートする</Button>
          <Button
            variant="outline"
            onClick={() => {
              notifications.show({
                title: 'URLをコピーしました！',
                message: 'あとは、Twitterなどに貼り付けて投稿するだけです。',
              })
            }}
            size="lg"
          >
            URLをコピー
          </Button>
        </Stack>
      ) : (
        <Group justify="center" className="mt-10">
          <Button size="lg" variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button size="lg" onClick={nextStep}>
            Next step
          </Button>
        </Group>
      )}
    </>
  )
}

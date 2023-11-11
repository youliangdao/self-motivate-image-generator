/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import { Button, Center, CopyButton, Image, Stack, Title } from '@mantine/core'
import { useLocalStorage, useViewportSize } from '@mantine/hooks'
import Confetti from 'react-confetti'

import image from '/public/seminar.png'
import { FormType } from '@/components/Form/schema'
import { baseURL } from '@/constants/env'

import { Genre } from '../select-type/page'
import { TwitterShareButton } from './_components/TwitterShareButton'

export default function Complete() {
  const { width, height } = useViewportSize()

  const [genreLocalData, setGenreLocalData] = useLocalStorage<Genre>({
    key: 'genre',
    defaultValue: '',
  })

  const [templateLocalData, setTemplateLocalData] = useLocalStorage<number>({
    key: 'templateId',
    defaultValue: 0,
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

  if (!genreLocalData || !templateLocalData || !formLocalData) {
    return null
  }

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
        <TwitterShareButton
          url={`https://semipos.vercel.app?title=${encodeURIComponent(
            formLocalData.title,
          )}&description=${encodeURIComponent(
            formLocalData.description || '',
          )}&date=${formLocalData.date}&startTime=${encodeURIComponent(
            formLocalData.startTime,
          )}&endTime=${encodeURIComponent(
            formLocalData.endTime,
          )}&genre=${encodeURIComponent(
            genreLocalData,
          )}&templateId=${templateLocalData}`}
        />
        <CopyButton
          value={`${baseURL}/og?title=${formLocalData.title}&description=${formLocalData.description}&date=${formLocalData.date}&startTime=${formLocalData.startTime}&endTime=${formLocalData.endTime}&genre=${genreLocalData}&templateId=${templateLocalData}`}
        >
          {({ copied, copy }) => (
            <Button
              variant="outline"
              color={copied ? 'teal' : 'gray'}
              onClick={copy}
              size="lg"
            >
              {copied ? 'コピーしました' : 'URLをコピー'}
            </Button>
          )}
        </CopyButton>
      </Stack>
    </>
  )
}

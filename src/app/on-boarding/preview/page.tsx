/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import { Container, Image, Space, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { useState } from 'react'
import { ClockLoader } from 'react-spinners'

import { Genre } from '@/app/on-boarding/select-type/page'
import { FormType } from '@/components/Form/schema'
import { formatter } from '@/utils/formatter'

import Preview from './_components/Preview'

export default function Page() {
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
  const [loaded, setLoaded] = useState(false)

  return (
    <Preview>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step4</Title>
        <Space h="sm" />
        <Title size="h2">
          プレビュー画面で、アイキャッチ画像を確認してください
        </Title>
        <Space h="md" />
        <Text c="dimmed">
          修正したい箇所があれば、前のステップに戻って修正しましょう
        </Text>
      </div>

      <Image
        className={`${!loaded ? 'opacity-0' : 'opacity-100'}}`}
        onLoad={() => setLoaded(true)}
        src={`https://semipos.vercel.app/api/og?title=${formLocalData?.title}&description=${formLocalData?.description}&date=${
          formLocalData?.date
            ? formatter.format(new Date(formLocalData.date))
            : ''
        }&startTime=${formLocalData?.startTime}&endTime=${formLocalData?.endTime}&genre=${genreLocalData}&templateId=${templateLocalData}`}
        alt="preview"
      />
      {!loaded && (
        <Container className="flex h-[500px] items-center justify-center">
          <ClockLoader color="#228be6" />
        </Container>
      )}
    </Preview>
  )
}

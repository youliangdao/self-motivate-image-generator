'use client'

import { Image, Space, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import { Genre } from '@/app/on-boarding/select-type/page'
import { FormType } from '@/components/Form/schema'

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
      {genreLocalData && templateLocalData && formLocalData && (
        <Image
          src={`http://localhost:3000/api/og?title=${formLocalData.title}&description=${formLocalData.description}&date=${formLocalData.date}&startTime=${formLocalData.startTime}&endTime=${formLocalData.endTime}&genre=${genreLocalData}&templateId=${templateLocalData}`}
          alt="preview"
        />
      )}
    </Preview>
  )
}

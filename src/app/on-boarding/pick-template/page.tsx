'use client'

import { Button, Group, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { initialTemplateData } from '@/constants/templateData'

import { TemplateCard } from './_components/TemplateCard'

export type Template = {
  id: number
  src: string
  alt: string
  isSelected: boolean
}[]

export default function PickTemplate() {
  const router = useRouter()
  const [templateLocalData, setTemplateLocalData] = useLocalStorage<number>({
    key: 'templateId',
    defaultValue: 0,
  })
  const [templateData, setTemplateData] =
    useState<Template>(initialTemplateData)

  useEffect(() => {
    nprogress.set(40)
  }, [])

  // ToDo: ここのuseEffectは消す。keyを変えて無理やりアンマウント→再マウントさせる
  useEffect(() => {
    setTemplateData((prev) => {
      return prev.map((templateData) => {
        if (templateData.id === templateLocalData) {
          return {
            ...templateData,
            isSelected: true,
          }
        }
        return { ...templateData, isSelected: false }
      })
    })
  }, [templateLocalData])

  return (
    <>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step2</Title>
        <Space h="sm" />
        <Title>テンプレートを選択してください</Title>
        <Space h="md" />
        <Text c="dimmed">以下からお好きなテンプレートを選択しましょう</Text>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {templateData.map((template) => (
          <TemplateCard
            key={template.id}
            image={template.src}
            isSelected={template.isSelected}
            onClick={() => {
              const newTemplateData = templateData.map((templateData) => {
                if (templateData.id === template.id) {
                  setTemplateLocalData(template.id)

                  return {
                    ...templateData,
                    isSelected: true,
                  }
                }
                return { ...templateData, isSelected: false }
              })
              setTemplateData(newTemplateData)
            }}
          />
        ))}
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
            router.push('/on-boarding/enter-name')
          }}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

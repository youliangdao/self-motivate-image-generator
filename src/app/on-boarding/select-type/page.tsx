'use client'

import { Button, Group, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { initialGenreData } from '@/constants/initialGenreData'

import { GenreCard } from './_components/GenreCard'

export type Genre =
  | 'programming'
  | 'hobby'
  | 'nature'
  | 'animal'
  | 'health'
  | 'food'
  | 'sports'
  | 'game'
  | 'shopping'
  | 'travel'
  | 'living'
  | 'event'
  | 'business'
  | 'other'
  | ''

export type GenreData = {
  name: string
  genre: Genre
  image: string
  isSelected: boolean
  ogpImage: string
}[]

export default function SelectType() {
  const router = useRouter()

  const [genreLocalData, setGenreLocalData] = useLocalStorage<Genre>({
    key: 'genre',
    defaultValue: '',
  })
  const [genreData, setGenreData] = useState<GenreData>(initialGenreData)

  useEffect(() => {
    nprogress.set(20)
  }, [])

  useEffect(() => {
    setGenreData((prev) => {
      return prev.map((genreData) => {
        if (genreData.genre === genreLocalData) {
          return {
            ...genreData,
            isSelected: true,
          }
        }
        return { ...genreData, isSelected: false }
      })
    })
  }, [genreLocalData])

  return (
    <>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step1</Title>
        <Space h="sm" />
        <Title>告知したい予定のカテゴリーを選択してください</Title>
        <Space h="md" />
        <Text c="dimmed">以下から該当するカテゴリを1つ選択しましょう</Text>
      </div>
      <SimpleGrid cols={{ base: 2, sm: 3 }}>
        {genreData.map((genre) => (
          <GenreCard
            key={genre.genre}
            genre={genre.name}
            image={genre.image}
            isSelected={genre.isSelected}
            onClick={() => {
              const newGenreData = genreData.map((genreData) => {
                if (genreData.genre === genre.genre) {
                  setGenreLocalData(genre.genre)

                  return {
                    ...genreData,
                    isSelected: !genreData.isSelected,
                  }
                }
                return { ...genreData, isSelected: false }
              })
              setGenreData(newGenreData)
            }}
          />
        ))}
      </SimpleGrid>
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          onClick={() => {
            nprogress.set(40)
            router.push('/on-boarding/pick-template')
          }}
          disabled={genreData.every((genre) => !genre.isSelected)}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

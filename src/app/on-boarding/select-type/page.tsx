'use client'

import { Button, Group, SimpleGrid, Space, Text, Title } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import food from '/public/364.png'
import horce from '/public/517.png'
import sports from '/public/521.png'
import programming from '/public/582.png'
import shopping from '/public/728.png'
import event from '/public/763.png'
import nature from '/public/940.png'
import hobby from '/public/958.png'
import animal from '/public/1056.png'
import health from '/public/1102.png'
import travel from '/public/1156.png'
import game from '/public/1205.png'
import living from '/public/1235.png'
import other from '/public/ic009.png'

import { GenreCard } from './_components/GenreCard'

export default function SelectType() {
  const [scroll, scrollTo] = useWindowScroll()
  const router = useRouter()
  useEffect(() => {
    nprogress.set(20)
  }, [])
  return (
    <>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step1</Title>
        <Space h="sm" />
        <Title>告知したい予定のカテゴリーを選択してください</Title>
        <Space h="md" />
        <Text c="dimmed">以下から該当するカテゴリを選択しましょう</Text>
      </div>
      <SimpleGrid cols={{ base: 2, sm: 3 }}>
        <GenreCard genre="プログラミング" image={programming.src} />
        <GenreCard genre="趣味" image={hobby.src} />
        <GenreCard genre="自然" image={nature.src} />
        <GenreCard genre="動物" image={animal.src} />
        <GenreCard genre="健康" image={health.src} />
        <GenreCard genre="食べ物・料理" image={food.src} />
        <GenreCard genre="スポーツ" image={sports.src} />
        <GenreCard genre="ゲーム" image={game.src} />
        <GenreCard genre="ショッピング" image={shopping.src} />
        <GenreCard genre="旅行" image={travel.src} />
        <GenreCard genre="生活" image={living.src} />
        <GenreCard genre="イベント" image={event.src} />
        <GenreCard genre="競馬" image={horce.src} />
        <GenreCard genre="その他" image={other.src} />
      </SimpleGrid>
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          onClick={() => {
            nprogress.set(40)
            scrollTo({ y: 0 })
            router.push('/on-boarding/pick-template')
          }}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

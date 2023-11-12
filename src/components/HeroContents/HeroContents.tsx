'use client'

import { Button, Container, Overlay, Text, Title } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Genre } from '@/app/on-boarding/select-type/page'
import { CardsCarousel, HeroLeftBullets, HeroRightBullets } from '@/components'

import { FormType } from '../Form/schema'
import { HeroRightLast } from '../HeroRightLast'
import classes from './heroContents.module.css'

export function HeroContents() {
  const router = useRouter()

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

  useEffect(() => {
    nprogress.reset()
  }, [])
  return (
    <main className="bg-slate-100">
      <div className={classes.wrapper}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={1}
        />

        <div className={classes.inner}>
          <Container size={640}>
            <Text size="lg" className={clsx(classes.description, 'mb-5')}>
              <span className="text-gray-300">
                セミナー登壇者っぽく、ただの個人的な予定を告知してみませんか？
              </span>
            </Text>
          </Container>
          <Title className={classes.title}>
            何でもない予定を告知できるアプリ
            <br /> 「Seminar Post Generator」
          </Title>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              onClick={() => {
                nprogress.set(20)
                setGenreLocalData('')
                setTemplateLocalData(0)
                setFormLocalData({
                  title: '',
                  date: null,
                  description: '',
                  startTime: '',
                  endTime: '',
                })
                router.push('/on-boarding/select-type')
              }}
              variant="white"
              size="lg"
            >
              今すぐ使ってみる
            </Button>
          </div>
        </div>
      </div>
      <section>
        <div className="relative xs:px-10 md:px-20">
          <Title className={classes.contentTitle}>
            テンプレートを使ってアイキャッチ画像を作成しましょう
          </Title>
          <CardsCarousel />
        </div>
      </section>
      <section>
        <HeroRightBullets />
        <HeroLeftBullets />
        <HeroRightLast />
      </section>
    </main>
  )
}

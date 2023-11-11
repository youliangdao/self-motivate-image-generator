'use client'

import { Button, Container, Overlay, Text, Title } from '@mantine/core'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { CardsCarousel, HeroLeftBullets, HeroRightBullets } from '@/components'

import classes from './heroContents.module.css'

export function HeroContents() {
  const router = useRouter()

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
          <Title className={classes.title}>
            セミナー登壇者っぽく、ただの個人的な予定を告知してみませんか？
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              何でもない予定をそれっぽく見せれるアプリ
              <br />
              「Seminar Poster Generator」
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              onClick={() => {
                nprogress.set(20)
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
        <HeroRightBullets />
      </section>
    </main>
  )
}

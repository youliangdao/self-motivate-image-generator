import { Button, Container, Overlay, Text, Title } from '@mantine/core'

import {
  CardsCarousel,
  FooterSocial,
  Header,
  HeroLeftBullets,
  HeroRightBullets,
} from '@/components'

import classes from './home.module.css'

export default function Home() {
  return (
    <>
      <Header />
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
                何でもない予定をそれっぽく見せれるアプリ「OtonaryDay」
              </Text>
            </Container>

            <div className={classes.controls}>
              <Button className={classes.control} variant="white" size="lg">
                今すぐ使ってみる
              </Button>
            </div>
          </div>
        </div>
        <section>
          <div className="xs:px-10 relative md:px-20">
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
      <FooterSocial />
    </>
  )
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import { Container, Image, Text, Title } from '@mantine/core'

import image from '/public/Online popularity-rafiki.png'

import classes from './HeroLeftBullets.module.css'

export function HeroLeftBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access , @typescript-eslint/no-unsafe-member-access */}
        <Image alt="design" src={image.src} className={classes.image} />

        <div className={classes.content}>
          <Title className={classes.title}>
            SNSでシェアして「すごいことしてそうな人」と錯覚させてみよう
          </Title>
          <Text c="dimmed" mt="md" size="xl">
            SNSシェアで驚きを。あなたの予定が、まるで著名な講演者のように見えるように演出。注目を集め、影響力を拡大しましょう。
          </Text>
        </div>
      </div>
    </Container>
  )
}

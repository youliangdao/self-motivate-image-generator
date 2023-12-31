/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import { Container, Image, Text, Title } from '@mantine/core'

import image from '/public/17623_color.svg'

import classes from './HeroBullets.module.css'

export function HeroRightBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            プロ仕様のアイキャッチ画像を作成する
          </Title>
          <Text c="dimmed" mt="md" size="xl">
            「超」ハイクオリティのアイキャッチが数クリックで完成。
            デザインの経験がなくても、独自のアイキャッチをいちから作成できます。
          </Text>
        </div>
        <Image alt="design" src={image.src} className={classes.image} />
      </div>
    </Container>
  )
}

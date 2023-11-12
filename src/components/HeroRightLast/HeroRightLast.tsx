/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import { Container, Image, Text, Title } from '@mantine/core'

import image from '/public/fireworks.svg'

import classes from './HeroRightLast.module.css'

export function HeroRightLast() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            何気ない日々の予定に彩りを与えましょう
          </Title>
          <Text c="dimmed" mt="md" size="xl">
            日常の予定を華やかに演出。あなたのスケジュールを、セミナー登壇者のように輝かせ、毎日に新たなモチベーションを与えます。
          </Text>
        </div>
        <Image alt="design" src={image.src} className={classes.image} />
      </div>
    </Container>
  )
}

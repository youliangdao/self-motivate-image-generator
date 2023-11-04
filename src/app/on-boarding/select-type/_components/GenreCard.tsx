import { Card, Center, Image, Text } from '@mantine/core'

import classes from './GenreCard.module.css'

export function GenreCard({ genre, image }: { genre: string; image: string }) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Image src={image} height={250} fit="cover" />
      </Card.Section>

      <Center className="pt-5">
        <Text size="xl">{genre}</Text>
      </Center>
    </Card>
  )
}

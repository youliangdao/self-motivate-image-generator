import { Card, Center, Image, Text } from '@mantine/core'

import { cn } from '@/utils/twMerge'

export function GenreCard({
  genre,
  image,
  isSelected,
  onClick,
}: {
  genre: string
  image: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <Card
      withBorder
      radius="md"
      className={cn(
        'border-gray-2 cursor-pointer hover:bg-gray-100',
        isSelected && 'border-4 border-gray-900',
      )}
      onClick={onClick}
    >
      <Card.Section>
        <Image src={image} height={250} fit="cover" alt="画像" />
      </Card.Section>

      <Center className="pt-5">
        <Text size="xl">{genre}</Text>
      </Center>
    </Card>
  )
}

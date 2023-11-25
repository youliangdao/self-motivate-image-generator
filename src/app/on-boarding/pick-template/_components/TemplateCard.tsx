import { Card, Image, Skeleton } from '@mantine/core'
import { useState } from 'react'

import { cn } from '@/utils/twMerge'

export function TemplateCard({
  image,
  isSelected,
  onClick,
}: {
  image: string
  isSelected: boolean
  onClick?: () => void
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <Card
      withBorder
      radius="md"
      className={cn(
        'border-gray-2 cursor-pointer hover:bg-gray-100',
        isSelected && 'border-4 border-white ring-8 ring-gray-900',
      )}
      onClick={onClick}
    >
      <Card.Section>
        <Image
          src={image}
          width={400}
          fit="cover"
          alt="画像"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && <Skeleton height={200} />}
      </Card.Section>
    </Card>
  )
}

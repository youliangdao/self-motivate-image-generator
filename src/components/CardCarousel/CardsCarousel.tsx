'use client'

import { Carousel } from '@mantine/carousel'
import { Image, rem, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import classes from './CardsCarousel.module.css'

interface CardProps {
  image: string
}

function Card({ image }: CardProps) {
  return <Image src={image} alt="Card" width={400} fit="contain" radius="md" />
}

const data = [
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
  {
    image: 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/%E3%80%8C.png',
  },
]

export function CardsCarousel() {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <div className="px-14">
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        withIndicators
        loop
        classNames={{
          control: classes.control,
        }}
      >
        {slides}
      </Carousel>
    </div>
  )
}

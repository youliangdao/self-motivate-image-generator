'use client'

import { Carousel } from '@mantine/carousel'
import { Image, rem, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import carousel1 from '/public/carousel1.svg'
import carousel2 from '/public/carousel2.svg'
import carousel3 from '/public/carousel3.svg'
import carousel4 from '/public/carousel4.svg'
import carousel5 from '/public/carousel5.svg'
import carousel6 from '/public/carousel6.svg'

import classes from './CardsCarousel.module.css'

interface CardProps {
  image: string
}

function Card({ image }: CardProps) {
  return <Image src={image} alt="Card" width={400} fit="contain" radius="md" />
}

const data = [
  {
    image: carousel1.src,
  },
  {
    image: carousel6.src,
  },
  {
    image: carousel3.src,
  },
  {
    image: carousel4.src,
  },
  {
    image: carousel5.src,
  },
  {
    image: carousel2.src,
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
    <div className="px-8 xs:px-14">
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

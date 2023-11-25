import { Container, Image } from '@mantine/core'
import Link from 'next/link'

import logo from '/public/logo2.png'

import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Link href="/">
          <Image
            src={logo.src}
            alt="logo"
            height={80}
            width="auto"
            fit="contain"
          />
        </Link>
      </Container>
    </header>
  )
}

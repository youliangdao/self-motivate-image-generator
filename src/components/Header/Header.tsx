import { Container } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import Link from 'next/link'

import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Link href="/">
          <MantineLogo size={34} />
        </Link>
      </Container>
    </header>
  )
}

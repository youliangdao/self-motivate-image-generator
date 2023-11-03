import { Container } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'

import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <MantineLogo size={34} />
      </Container>
    </header>
  )
}

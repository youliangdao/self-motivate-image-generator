'use client'

import { Container } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import Link from 'next/link'

import classes from './FooterSocial.module.css'

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/">
          <MantineLogo size={28} />
        </Link>
      </Container>
    </div>
  )
}

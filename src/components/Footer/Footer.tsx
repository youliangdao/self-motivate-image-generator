'use client'

import { Container, Image } from '@mantine/core'
import Link from 'next/link'

import logo from '/public/logo2.png'

import classes from './FooterSocial.module.css'

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/">
          <Image
            src={logo.src}
            alt="logo"
            height={84}
            width="auto"
            fit="contain"
          />
        </Link>
      </Container>
    </div>
  )
}

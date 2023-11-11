/* eslint-disable @typescript-eslint/restrict-template-expressions */
import './globals.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/dates/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { baseURL } from '@/constants/env'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params, searchParams }: Props): Metadata {
  // ?title=<title>
  const title = searchParams?.title
    ? searchParams.title
    : 'Seminar Post Generator'
  // ?description=<description>
  const description = searchParams?.description
    ? searchParams.description
    : 'セミナー登壇者っぽく、ただの個人的な予定を告知してみませんか？'
  // ?date=<date>
  const date = searchParams?.date ? searchParams.date : ''
  // ?startTime=<startTime>
  const startTime = searchParams?.startTime ? searchParams.startTime : ''
  // ?endTime=<endTime>
  const endTime = searchParams?.endTime ? searchParams.endTime : ''

  // ?genre=<genre>
  const genre = searchParams?.genre ? searchParams.genre : 'other'

  // ?templateId=<templateId>
  const templateId = searchParams?.templateId ? searchParams.templateId : '1'
  return {
    metadataBase: new URL('https://semipos.vercel.app/'),
    title: 'Seminar Post Generator',
    description: 'セミナー登壇者っぽく、ただの個人的な予定を告知できるアプリ',
    openGraph: {
      title: 'Seminar Post Generator',
      description: 'セミナー登壇者っぽく、ただの個人的な予定を告知できるアプリ',
      images: [
        `${baseURL}/og?title=${title}&description=${description}&date=${date}&startTime=${startTime}&endTime=${endTime}&genre=${genre}&templateId=${templateId}`,
      ],
    },
    twitter: {
      title: 'Seminar Post Generator',
      description: 'セミナー登壇者っぽく、ただの個人的な予定を告知できるアプリ',
      card: 'summary_large_image',
      images: [
        `${baseURL}/og?title=${title}&description=${description}&date=${date}&startTime=${startTime}&endTime=${endTime}&genre=${genre}&templateId=${templateId}`,
      ],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <Head>
        <title>Seminar Post Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:url" content="https://semipos.vercel.app/" />
        <meta name="twitter:url" content="https://semipos.vercel.app/" />
        <meta name="og:title" content="Seminar Post Generator" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seminar Post Generator" />
        <meta
          name="twitter:description"
          content="セミナー登壇者っぽく、ただの個人的な予定を告知してみませんか？"
        />
        <meta
          name="description"
          key="description"
          content="セミナー登壇者っぽく、ただの個人的な予定を告知してみませんか？"
        />
      </Head>
      <body className={clsx(inter.className, 'bg-gray-100')}>
        <MantineProvider>
          <NavigationProgress size={5} />
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

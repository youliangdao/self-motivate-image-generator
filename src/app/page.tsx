import { Metadata } from 'next'

import { FooterSocial, Header, HeroContents } from '@/components'
import { baseURL } from '@/constants/env'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}

export function generateMetadata({ params, searchParams }: Props): Metadata {
  // ?title=<title>
  const title = searchParams?.title
    ? searchParams.title
    : 'Seminar Post Generator'
  // ?description=<description>
  const description = searchParams?.description
    ? searchParams.description
    : 'セミナー登壇者みたいに個人的な予定を告知してみませんか？'
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
    description: 'セミナー登壇者っぽく、個人的な予定を告知できるアプリ',
    openGraph: {
      title: 'Seminar Post Generator',
      description: 'セミナー登壇者っぽく、個人的な予定を告知できるアプリ',
      images: [
        `${baseURL}/og?title=${title}&description=${description}&date=${date}&startTime=${startTime}&endTime=${endTime}&genre=${genre}&templateId=${templateId}`,
      ],
    },
    twitter: {
      title: 'Seminar Post Generator',
      description: 'セミナー登壇者っぽく、個人的な予定を告知できるアプリ',
      card: 'summary_large_image',
      images: [
        `${baseURL}/og?title=${title}&description=${description}&date=${date}&startTime=${startTime}&endTime=${endTime}&genre=${genre}&templateId=${templateId}`,
      ],
    },
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroContents />
      <FooterSocial />
    </>
  )
}

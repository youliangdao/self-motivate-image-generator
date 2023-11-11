import { Container } from '@mantine/core'
import { Metadata } from 'next'

import { FooterSocial, Header } from '@/components'

export const metadata: Metadata = {
  metadataBase: new URL('https://semipos.vercel.app/'),
  title: 'Seminar Post Generator',
  description: 'セミナー登壇者っぽく、ただの個人的な予定を告知できるアプリ',
}

export default function OnboardingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="py-10">
        <Container>{children}</Container>
      </main>
      <FooterSocial />
    </>
  )
}

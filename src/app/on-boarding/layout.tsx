import { Container } from '@mantine/core'

import { FooterSocial, Header } from '@/components'

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

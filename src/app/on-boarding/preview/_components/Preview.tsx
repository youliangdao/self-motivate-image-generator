'use client'

import { Button, Group } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { nprogress } from '@mantine/nprogress'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Preview({ children }: { children: React.ReactNode }) {
  const [scroll, scrollTo] = useWindowScroll()
  const router = useRouter()
  useEffect(() => {
    nprogress.set(80)
  }, [])
  return (
    <>
      {children}
      <Group justify="center" className="mt-10">
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            nprogress.set(50)
            router.push('/on-boarding/enter-name')
          }}
        >
          戻る
        </Button>
        <Button
          size="lg"
          onClick={() => {
            nprogress.complete()
            scrollTo({ y: 0 })
            router.push('/on-boarding/complete')
          }}
        >
          次へ
        </Button>
      </Group>
    </>
  )
}

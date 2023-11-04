import { Image, Space, Text, Title } from '@mantine/core'

import Preview from './_components/Preview'

// async function getOgImage() {
//   const res = await fetch('/api/og-image', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'プレビュー画面で、アイキャッチ画像を確認しましょう',
//       description:
//         '修正したい箇所があれば、前のステップに戻って修正してください',
//     }),
//   })
//   const blob = await res.blob()
//   return URL.createObjectURL(blob)
// }

export default function Page() {
  return (
    <Preview>
      <div className="pb-10 text-center">
        <Title c="dimmed">Step4</Title>
        <Space h="sm" />
        <Title size="h2">
          プレビュー画面で、アイキャッチ画像を確認してください
        </Title>
        <Space h="md" />
        <Text c="dimmed">
          修正したい箇所があれば、前のステップに戻って修正しましょう
        </Text>
      </div>
      <Image src="http://localhost:3000/api/og" alt="preview" />
    </Preview>
  )
}

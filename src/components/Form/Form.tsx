import { Box, FileInput, Space, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export function Form() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <Box maw={600} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/** 15文字以内 */}
        <TextInput
          withAsterisk
          size="lg"
          label="タイトル"
          placeholder="サウナに行く！"
          {...form.getInputProps('email')}
        />
        <Space h={20} />
        {/** 30文字以内 */}
        <TextInput
          size="lg"
          label="補足説明"
          placeholder="たったこれだけで心身が生き返る！"
          {...form.getInputProps('email')}
        />
        <Space h={20} />
        <TextInput
          withAsterisk
          size="lg"
          label="日付"
          placeholder="11/5（日）"
          {...form.getInputProps('email')}
        />
        <Space h={20} />

        <TextInput
          withAsterisk
          size="lg"
          label="時間帯"
          placeholder="11:00~13:00"
          {...form.getInputProps('email')}
        />
        <Space h={20} />

        <FileInput
          size="lg"
          label="添付したい画像"
          description="アップロードしない場合は、デフォルトの画像が表示されます"
          placeholder="Upload files"
        />
      </form>
    </Box>
  )
}

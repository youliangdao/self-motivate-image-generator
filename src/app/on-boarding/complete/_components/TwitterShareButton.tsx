import { Button, type ButtonProps, type ElementProps } from '@mantine/core'

type TwitterShareButtonProps = ButtonProps &
  ElementProps<'a', keyof ButtonProps> & {
    text?: string
    url?: string
    hashtags?: string[]
    via?: string
    related?: string[]
    in_reply_to?: string
  }

export function TwitterShareButton({
  text,
  url,
  hashtags,
  via,
  related,
  in_reply_to,
}: TwitterShareButtonProps) {
  const _url = new URL('https://twitter.com/intent/tweet')
  if (text !== undefined) _url.searchParams.set('text', text)
  if (url !== undefined) _url.searchParams.set('url', url)
  if (hashtags !== undefined)
    _url.searchParams.set('hashtags', hashtags.join(','))
  if (via !== undefined) _url.searchParams.set('via', via)
  if (related !== undefined) _url.searchParams.set('related', related.join(','))
  if (in_reply_to !== undefined)
    _url.searchParams.set('in_reply_to', in_reply_to)

  return (
    <Button
      size="lg"
      component="a"
      href={_url.toString()}
      target="_blank"
      rel="noopener noreferrer"
    >
      ツイートする
    </Button>
  )
}

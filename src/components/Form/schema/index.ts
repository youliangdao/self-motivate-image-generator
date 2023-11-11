import { z } from 'zod'

export const schema = z.object({
  title: z
    .string()
    .min(1, 'タイトルを入力してください')
    .max(15, '15文字以内で入力してください'),
  description: z.string().max(30, '30文字以内で入力してください').optional(),
  date: z
    .date({ required_error: '日付を入力してください' })
    .nullable()
    .superRefine((value, ctx) => {
      if (value == null) {
        ctx.addIssue({
          code: 'custom',
          message: '日付を入力してください',
        })
      }
    }),
  startTime: z
    .string()
    .trim()
    .min(1, '開始時間を入力してください')
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'hh:mmの形式で入力してください'),
  endTime: z
    .string()
    .trim()
    .min(1, '終了時間を入力してください')
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'hh:mmの形式で入力してください'),
})

export type FormType = z.infer<typeof schema>

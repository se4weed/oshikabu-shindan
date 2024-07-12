import { z } from "zod";

export const PanelistFormSchema = z.object({
  age: z.coerce.number({
    message: "数値を入力してください"
  }).int().gt(1, {
    message: "1以上の年齢を入力してください"
  }),
  income: z.enum([
    "50万円未満",
    "50万円以上100万円未満",
    "100万円以上300万円未満",
    "300万円以上600万円未満",
    "600万円以上"
  ], {
    message: "収入を選択してください"
  }),
  q1: z.enum(["ある", "ない"], {
    message: "選択してください"
  }),
  q2: z.enum([
    "株式を購入したことはない",
    "NISAやインデックス投資などであればしたことがある",
    "個別に株式会社の株を買ったことがある"
  ], {
    message: "選択してください"
  }),
  q3: z.enum([
    "株式投資はしたくない",
    "1万円未満",
    "1万円以上3万円未満",
    "3万円以上10万円未満",
    "10万円以上"
  ], {
    message: "選択してください"
  })
});

export const AgeSchema = PanelistFormSchema.pick({ age: true });
export const IncomeSchema = PanelistFormSchema.pick({ income: true });
export const Q1Schema = PanelistFormSchema.pick({ q1: true });
export const Q2Schema = PanelistFormSchema.pick({ q2: true });
export const Q3Schema = PanelistFormSchema.pick({ q3: true });

import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type Props = {
  form: any
  visible: boolean
}

export const Q3Field = ({ form, visible }: Props) => {
  return (
    <div className={visible ? "" : "hidden"}>
      <FormField
        control={form.control}
        name="q3"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>初期投資がいくらであれば株式投資をしてみたいと思いますか</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="10万円以上" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    10万円以上
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="3万円以上10万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    3万円から10万円
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="1万円以上3万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    1万円から3万円
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="1万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    1万円未満
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="株式投資はしたくない" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    株式投資はしたくない
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

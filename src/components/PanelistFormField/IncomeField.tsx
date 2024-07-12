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

export const IncomeField = ({ form, visible }: Props) => {
  return (
    <div className={visible ? "" : "hidden"}>
      <FormField
        control={form.control}
        name="income"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>収入について教えてください</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="600万円以上" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    600万円以上
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="300万円以上600万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    300万円以上600万円
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="100万円以上300万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    100万円以上300万円未満
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="50万円以上100万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    50万円以上100万円未満
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="50万円未満" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    50万円未満
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

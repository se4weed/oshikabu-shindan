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

export const Q2Field = ({ form, visible }: Props) => {
  return (
    <div className={visible ? "" : "hidden"}>
      <FormField
        control={form.control}
        name="q2"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>株を買った経験について教えてください</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="個別に株式会社の株を買ったことがある" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    個別に株式会社の株を買ったことがある
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NISAやインデックス投資などであればしたことがある" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    NISAやインデックス投資などであればしたことがある
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="株式を購入したことはない" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    株式を購入したことはない
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

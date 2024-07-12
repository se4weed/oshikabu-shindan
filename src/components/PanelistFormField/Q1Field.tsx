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

export const Q1Field = ({ form, visible }: Props) => {
  return (
    <div className={visible ? "" : "hidden"}>
      <FormField
        control={form.control}
        name="q1"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>投資経験について教えてください</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="ある" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    ある
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="ない" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    ない
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

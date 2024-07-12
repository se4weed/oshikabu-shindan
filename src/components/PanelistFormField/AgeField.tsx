import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';

type Props = {
  form: any
  visible: boolean
}

export const AgeField = ({ form, visible }: Props) => {
  return (
    <div className={visible ? "" : "hidden"}>
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>年齢</FormLabel>
            <FormControl>
              <Input inputMode='numeric' placeholder="25" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

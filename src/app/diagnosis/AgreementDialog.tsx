import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Props = {
  open: boolean
  closer: () => void
}

export const AgreementDialog = ({ open, closer }: Props) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>データ収集におけるお願い</DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-slate-700'>
          このサイトでは、回答者のデータを個人を特定できない範囲で収集しています。<br />
          収集したデータは、本サイトの改善や分析のために使用されます。<br />
          収集されたデータは、第三者に提供されることはありません。<br />
          また、回答者のデータを集める際Cookieを使用します。
        </DialogDescription>
        <button onClick={() => closer()} className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-8 rounded">
          同意して始める
        </button>
      </DialogContent>
    </Dialog>
  )
}

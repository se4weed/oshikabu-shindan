"use client";
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Choice, questions, QuestionType } from '@/lib/question';
import { Skeleton } from '@/components/ui/skeleton';
import { PanelistForm } from './PanelistForm';

type Props = {
  open: boolean
}

type Current = {
  state: string
  end: boolean
}

export const DiagnosisDialog = ({ open }: Props) => {
  const [current, setCurrentState] = useState<Current>({ state: "1", end: false })
  const [choice, setChoice] = useState<string>("")
  const [question, setQuestion] = useState<QuestionType | undefined>(undefined)
  useEffect(() => {
    if (!current.end) {
      setQuestion(questions.find((q) => q.state === current.state))
    }
  }, [current])

  const handleSubmit = () => {
    const isEnd = question?.choices.find((c) => c.nextState === choice)?.end
    if (!isEnd){
      setCurrentState({ state: choice, end: false})
    } else {
      setCurrentState({ state: choice, end: true})
    }
  }
  return (
    <Dialog open={open}>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>
            {current.end ? "あともう少しです！" : question ? question.context : <Skeleton className='w-full' />}
          </DialogTitle>
        </DialogHeader>
        {current.end ? 
          <PanelistForm oshi={current.state} />
        : question ? 
        (<RadioGroup value={choice} onValueChange={(value) => setChoice(value)}>
          {question.choices.map((choice: Choice, index) => (
            <div key={index}>
              <RadioGroupItem value={choice.nextState} id={choice.nextState} className='mr-2' />
              <Label htmlFor={choice.nextState}>{choice.context}</Label>
            </div>
          ))}
        </RadioGroup>
        )
      :<Skeleton className='w-full h-[200px]' />}
        {!current.end && (
          <button 
            disabled={choice === "" || !question?.choices.some((c) => c.nextState === choice)}
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300 mt-4 text-white font-bold py-2 px-8 rounded"
          >
            次へ
          </button>)}
      </DialogContent>
    </Dialog>
  )
}

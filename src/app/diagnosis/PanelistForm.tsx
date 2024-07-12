"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from '@/components/ui/form';
import {
  AgeField,
  IncomeField,
  Q1Field,
  Q2Field,
  Q3Field,
} from '@/components/PanelistFormField';
import { AgeSchema, IncomeSchema, Q1Schema, Q2Schema, Q3Schema, PanelistFormSchema } from './PanelistFormSchema';
import { oshikabu } from '@/lib/oshikabu';

const schemas = [AgeSchema, IncomeSchema, Q1Schema, Q2Schema, Q3Schema];

type Props = {
  oshi: string;
};

export const PanelistForm = ({ oshi }: Props) => {
  const router = useRouter();
  const [state, setState] = useState<number>(1);
  const [pending, setPending] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schemas[state - 1]),
    defaultValues: {
      age: undefined,
      income: undefined,
      q1: undefined,
      q2: undefined,
      q3: undefined,
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      form.trigger(name).then((valid) => {
        setIsValid(valid);
      });
    });
    return () => subscription.unsubscribe();
  }, [form, state]);

  async function onSubmit(values: any) {
    setPending(true);
    const finalValidation = await PanelistFormSchema.safeParse(values);
    if (!finalValidation.success) {
      toast.error("全体のフォームにエラーがあります。");
      return;
    }
    const response = await fetch("/api/panelists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        oshi: oshikabu.indexOf(oshi),
      }),
    });
    const res = await response.json();
    router.replace(`/result/${res.id}`);
  }

  const decrementState = () => {
    setPending(true);
    if (state === 1) return;
    setState(state - 1);
    setPending(false);
  };

  const incrementState = () => {
    setPending(true);
    if (state < 5) {
      const isStepValid = form.trigger();
      if (!isStepValid) {
        setPending(false);
        return;
      }
      setState(state + 1);
    } else {
      const values = form.getValues();
      onSubmit(values);
    }
    setPending(false);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    incrementState();
  }

  return (
    <Form {...form}>
      <form onSubmit={submitHandler} className='space-y-4'>
        <AgeField visible={state === 1} form={form} />
        <IncomeField visible={state === 2} form={form} />
        <Q1Field form={form} visible={state === 3} />
        <Q2Field form={form} visible={state === 4} />
        <Q3Field form={form} visible={state === 5} />
        <div className='flex space-x-5'>
          <button
            type="button"
            onClick={decrementState}
            disabled={state === 1 || pending}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300 mt-4 text-white font-bold w-full py-2 px-8 rounded"
          >
            前へ
          </button>
          <button
            type="button"
            onClick={incrementState}
            disabled={!isValid || pending}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300 mt-4 text-white font-bold w-full py-2 px-8 rounded"
          >
            {state === 5 ? "推し株を見る" : "次へ"}
          </button>
        </div>
      </form>
    </Form>
  );
};

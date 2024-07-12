"use client";
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Oshikabu, oshikabu } from '@/lib/oshikabu';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

type PanelistType = {
  id: string
  oshikabuIndex: number
  oshikabu: Oshikabu
}

export default function Result() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [oshi, setOshi] = useState<PanelistType | undefined>(undefined)

  useEffect(() => {
    const fetchPanelist = async () => {
      const response = await fetch(`/api/panelists/${params.id}`)
      const data = await response.json()
      setOshi({
        id: data.id,
        oshikabuIndex: data.oshi,
        oshikabu: oshikabu[data.oshi]
      })
    }
    fetchPanelist()
  }, [params.id])

  const handleBuy = async () => {
    const response = await fetch(`/api/panelists/${params.id}`, {
      method: 'POST'
    })
    if (response.ok) window.open("https://froggy.smbcnikko.co.jp/promo/lp_account/ad/")
    else console.error('Error buying oshikabu')
  }
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-xl'>あなたの推し株: {oshi?.oshikabu.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-lg text-primary space-y-4'>
          <div className='w-full flex justify-center'>
            {oshi
            ? <Image src={`/oshikabu/${oshi.oshikabuIndex}.png`} width={300} height={300} alt={oshi.oshikabu.name} />
            : <Skeleton className='h-[300px] max-h-full max-w-full overflow-hidden' />}
          </div>
          <div className='flex-col'>
            <h2 className='text-lg font-semibold'>おすすめの企業</h2>
            <p className='text-base'>{oshi? oshi.oshikabu.companies: <Skeleton className='w-full h-[2cap]' />}</p>
          </div>
          {oshi && <div className='w-full flex items-center justify-center'>
            <button 
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-300 mt-4 text-white font-bold py-2 px-8 rounded"
              onClick={handleBuy}
            >
              買ってみたい
            </button>
          </div>}
          <p className='text-sm'>100円から株を買うことができます</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

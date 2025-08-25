'use client'

import Link from 'next/link'
import { giftCards } from '../data/giftcards'

export default function GiftCardGrid() {
  async function startCheckout(productName: string, amount: number, installments = 3) {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName, amount, installments }),
      })
      if (!res.ok) throw new Error('Failed to create session')
      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url as string
      } else {
        throw new Error('No session URL returned')
      }
    } catch (e) {
      console.error('Checkout error', e)
      alert('Unable to start checkout. Please try again.')
    }
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {giftCards.map(gc => {
        const amount = (gc.denominations?.[gc.denominations.length - 1] ?? 100)
        const split = 4
        const each = Math.round(amount / split)
        const stock = gc.codes?.length ?? 0
        const soldOut = stock === 0
        return (
          <div key={gc.slug} className="card card-gloss p-5 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#32ff8a]/30 blur-2xl" />
            <div className="rounded-2xl bg-white/5 border border-white/15 p-5 h-40 flex flex-col justify-between shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-medium tracking-wide">{gc.name}</span>
                <span className="text-white/60 text-sm">Gift Card</span>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-[-0.3px]">€{amount}</p>
                <p className="text-white/70 text-sm">Split €{amount} → {split} × €{each}</p>
                <div className="mt-1 text-xs text-white/60">
                  {soldOut ? (
                    <span className="inline-block px-2 py-0.5 rounded bg-white/10 border border-white/15 text-red-200">Sold out</span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10">{stock} left</span>
                  )}
                </div>
              </div>
              {soldOut ? (
                <button className="btn btn-primary w-full opacity-50 cursor-not-allowed" aria-disabled>
                  Select
                </button>
              ) : (
                <Link href={`/gift-cards/${gc.slug}`} className="btn btn-primary w-full">Select</Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { giftCards } from '../../../data/giftcards'
import { useMemo, useState } from 'react'

export default function GiftCardProductPage() {
  const params = useParams<{ slug: string }>()
  const searchParams = useSearchParams()

  const card = useMemo(() => giftCards.find(c => c.slug === params.slug), [params.slug])
  const amounts = card?.denominations ?? []

  const [amount, setAmount] = useState<number>(amounts[0] ?? 100)
  const [plan, setPlan] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  if (!card) {
    return <div className="p-8">Gift card not found.</div>
  }

  const perInstallment = amount && plan ? (amount / plan) : null
  const error = searchParams.get('error')

  const startSubscriptionCheckout = async () => {
    if (!amount || !plan) return
    try {
      setLoading(true)
      const res = await fetch('/api/checkout-stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: card.slug, amount, plan }),
      })
      if (!res.ok) throw new Error('Failed to create subscription checkout')
      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url as string
      } else {
        throw new Error('No URL from checkout')
      }
    } catch (e) {
      console.error('Checkout error', e)
      alert('Unable to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="section">
      <div className="container-xl space-y-6">
        <div className="space-y-2">
          <p className="badge">Gift Card</p>
          <h1 className="h1">{card.name}</h1>
          {error === 'out_of_stock' && (
            <div className="card p-3 bg-emerald-500/10 border border-emerald-400/30 text-emerald-100">
              Sorry — this card is out of stock right now.
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 space-y-4">
            <div>
              <p className="h3 mb-2">Choose amount</p>
              {amounts.length === 0 ? (
                <p className="small text-white/60">Unavailable — amounts not configured yet</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {amounts.map(v => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(v)}
                      className={`px-4 py-2 rounded-lg border ${amount===v? 'bg-white/20 border-white/40' : 'bg-white/5 border-white/20 hover:bg-white/10'}`}
                    >€{v}</button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="h3 mb-2">Choose plan</p>
              <div className="flex flex-wrap gap-2">
                {[3,4,6,12].map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlan(p)}
                    className={`px-4 py-2 rounded-lg border ${plan===p? 'bg-white/20 border-white/40' : 'bg-white/5 border-white/20 hover:bg-white/10'}`}
                  >{p} months</button>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-6 space-y-4">
            <p className="h3">Summary</p>
            <div className="p">
              {amount && plan ? (
                <p>€{amount} split into {plan} × €{perInstallment!.toFixed(2)}</p>
              ) : (
                <p>Select amount and plan to see your split.</p>
              )}
            </div>

            <button onClick={startSubscriptionCheckout} disabled={!amounts.length || !amount || !plan || loading} className="btn btn-primary w-full disabled:opacity-50">
              {loading ? 'Starting checkout…' : 'Continue to payment'}
            </button>

            <Link href="/gift-cards" className="small underline">Back to gallery</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

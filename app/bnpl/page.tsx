import Image from 'next/image'
import Link from 'next/link'
import { giftCards } from 'data/giftcards'

export const metadata = { title: 'Anexxa BNPL — For Shoppers' }

export default function BNPLPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const ok = searchParams?.ok === '1'
  const cards = [
    { brand: 'Nike', slug: 'nike', amount: 100, split: '4×€25' },
    { brand: 'Zara', slug: 'zara', amount: 200, split: '4×€50' },
    { brand: 'Apple', slug: 'apple', amount: 300, split: '6×€50' },
    { brand: 'Amazon', slug: 'amazon', amount: 120, split: '3×€40' },
  ].map(c => {
    const prod = giftCards.find(g => g.slug === c.slug)
    const stock = prod?.codes?.length ?? 0
    return { ...c, stock, soldOut: stock === 0 }
  })
  return (
    <div className="section">
      <div className="text-center space-y-4">
        <p className="badge">Consumer</p>
        <h1 className="h1">Split gift cards into easy installments.</h1>
        <p className="p max-w-2xl mx-auto">Get approved in minutes. No hidden fees. Use Anexxa online or in store via Tap to Pay & QR.</p>
      </div>

      {/* Success banner after form submit */}
      {ok && (
        <div className="container-xl mt-6">
          <div className="card p-3 bg-emerald-500/10 border border-emerald-400/30 text-emerald-100">
            Thanks — you’re on the waitlist.
          </div>
        </div>
      )}

      {/* Hero visuals */}
      <div className="container-xl mt-8 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6 flex flex-col justify-center">
            <p className="h3 mb-2">Explore Gift Cards & Rewards</p>
            <p className="p mb-4">Browse supported brands, see reward rates, and learn how redemptions work.</p>
            <a href="/gift-cards" className="btn btn-primary w-fit">Go to Gift Cards & Rewards</a>
          </div>
          <div className="card overflow-hidden">
            <Image src="/installments-checkout.PNG" alt="Installments checkout" width={1400} height={900} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Gift Card Gallery (higher on the page) */}
      <div className="container-xl mt-10">
        <p className="h2 mb-4">Gift Card Gallery</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(card => (
            <div key={card.slug} className="card card-gloss p-5 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#32ff8a]/30 blur-2xl" />
              <div className="rounded-2xl bg-white/5 border border-white/15 p-5 h-40 flex flex-col justify-between shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-white/90 font-medium tracking-wide">{card.brand}</span>
                  <span className="text-white/60 text-sm">Gift Card</span>
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-[-0.3px]">€{card.amount}</p>
                  <p className="text-white/70 text-sm">Split {card.split}</p>
                  <div className="mt-1 text-xs text-white/60">
                    {card.soldOut ? (
                      <span className="inline-block px-2 py-0.5 rounded bg-white/10 border border-white/15 text-red-200">Sold out</span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10">{card.stock} left</span>
                    )}
                  </div>
                </div>
                {card.soldOut ? (
                  <button className="btn btn-primary w-full opacity-50 cursor-not-allowed" aria-disabled>
                    Select
                  </button>
                ) : (
                  <Link href={`/gift-cards/${card.slug}`} className="btn btn-primary w-full">Select</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="waitlist" className="grid gap-6 md:grid-cols-3 mt-10">
        {[
          {h:'Apply in minutes', p:'Soft check first — no impact to score.'},
          {h:'Choose your plan', p:'Pay in 3, 6, or 12. Clear pricing.'},
          {h:'Track & earn', p:'See payments, manage budgets, earn rewards.'},
        ].map(i => (
          <div key={i.h} className="card p-6">
            <p className="h3">{i.h}</p>
            <p className="p mt-2">{i.p}</p>
          </div>
        ))}
      </div>

      <div className="card p-8 mt-10 max-w-3xl mx-auto">
        <p className="h3">Get early access</p>
        <form className="mt-4 grid gap-3" action="/api/contact" method="post">
          <input required name="name" placeholder="Your name" className="card p-3" />
          <input required name="email" type="email" placeholder="Email address" className="card p-3" />
          <button className="btn btn-primary w-full">Join waitlist</button>
        </form>
        <p className="small mt-3">We’ll email you when Anexxa BNPL launches in your region.</p>
      </div>
    </div>
  )
}

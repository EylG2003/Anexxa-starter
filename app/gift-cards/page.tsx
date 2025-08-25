import Link from 'next/link'
import Image from 'next/image'
import GiftCardGrid from '@/components/GiftCardGrid'

export const metadata = { title: 'Gift Cards & Rewards — Anexxa' }

export default function GiftCardsPage() {
  return (
    <div className="section">
      <div className="container-xl space-y-8">
        <div className="text-center space-y-3">
          <p className="badge">Explore</p>
          <h1 className="h1">Gift Cards & Rewards</h1>
          <p className="p max-w-2xl mx-auto">Browse supported brands and see how rewards work. We’re adding more cards soon.</p>
        </div>

        {/* Gift Card Gallery (placed immediately below heading) */}
        <div>
          <p className="h2 mb-4">Gift Card Gallery</p>
          <GiftCardGrid />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <p className="h3 mb-2">How it works</p>
            <p className="p">Buy a gift card and split payments into easy installments. Earn points on every purchase.</p>
          </div>
          <div className="card overflow-hidden">
            {/* Placeholder visual using the BNPL checkout image if present */}
            <Image src="/installments-checkout.PNG" alt="Installments checkout preview" width={1400} height={900} className="w-full h-auto" />
          </div>
        </div>

        <div className="card p-6 flex items-center justify-between">
          <div>
            <p className="h3">Ready to try it?</p>
            <p className="p">Download the app and get early access to new brands and reward tiers.</p>
          </div>
          <Link href="/bnpl#waitlist" className="btn btn-primary">Get the App</Link>
        </div>
      </div>
    </div>
  )
}

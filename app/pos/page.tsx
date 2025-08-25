import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Image from 'next/image'

export const metadata = { title: 'Anexxa POS — For Banks & Merchants' }

export default function POSPage() {
  return (
    <div className="section">
      <div className="container-xl space-y-10">
        <div className="text-center space-y-4">
          <p className="badge">Enterprise</p>
          <h1 className="h1">POS that unlocks BNPL at checkout.</h1>
          <p className="p max-w-2xl mx-auto">Tap to Pay, QR, and Chip+PIN with instant installments, loyalty, and risk controls — white-label or SDK. Go live in weeks.</p>
        </div>

        {/* Single image under headline */}
        <div className="grid gap-4">
          <div className="card overflow-hidden">
            <Image src="/pos-retail.PNG" alt="Installments at real-world checkout" width={1400} height={900} className="w-full h-auto" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {h:'Tap to Pay', p:'Android/iOS terminals — no extra hardware.'},
            {h:'Installments', p:'Offer BNPL at in‑store POS and online.'},
            {h:'SDK + Sandbox', p:'Docs, sample apps, and webhooks.'},
            {h:'Risk Engine', p:'Rules, limits, velocity checks (roadmap).'},
            {h:'Loyalty & Offers', p:'Attach rewards to every transaction.'},
            {h:'White‑label', p:'Theme the entire experience to your brand.'},
          ].map(i => (
            <div key={i.h} className="card p-6">
              <p className="h3">{i.h}</p>
              <p className="p mt-2">{i.p}</p>
            </div>
          ))}
        </div>

        <div className="card p-8">
          <p className="h3">Request a technical demo</p>
          <p className="p mt-1">Tell us about your volumes and markets. We’ll provision a sandbox.</p>
          <form className="mt-4 grid gap-3" action="/api/partner-lead" method="post">
            <input required name="company" placeholder="Company name" className="card p-3" />
            <input required name="email" type="email" placeholder="Work email" className="card p-3" />
            <input name="website" placeholder="Website (optional)" className="card p-3" />
            <textarea name="notes" placeholder="Volumes, countries, acquirer (optional)" className="card p-3" />
            <button className="btn btn-primary w-full">Request demo</button>
          </form>
          <p className="small mt-3">By submitting, you agree to our Terms & Privacy.</p>
        </div>

        <CTA />
        <FAQ />
      </div>
    </div>
  )
}

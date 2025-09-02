import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Image from 'next/image'

export const metadata = { title: 'Anexxa POS — For Merchants' }

export default function POSPage() {
  return (
    <div className="section">
      <div className="container-xl space-y-10">
        <div className="text-center space-y-4">
          <p className="badge">POS</p>
          <h1 className="h1">Turn any phone into a POS.</h1>
          <p className="p max-w-2xl mx-auto">Tap to Pay, Chip+PIN, and lightweight terminals — fast, secure, and hardware‑optional. Powered by Stripe.</p>
        </div>

        {/* Single image under headline */}
        <div className="grid gap-4">
          <div className="card overflow-hidden">
            <Image src="/pos-retail.PNG" alt="Accept in-person card payments" width={1400} height={900} className="w-full h-auto" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {h:'Tap to Pay', p:'Accept contactless payments on iPhone and compatible Android devices.'},
            {h:'Android POS App', p:'Works with popular PAX/Sunmi terminals.'},
            {h:'Instant Setup', p:'Connect your Stripe account and start in minutes.'},
            {h:'Reporting', p:'Real-time sales and payouts.'},
            {h:'Security', p:'PCI-compliant processing and 3DS where required.'},
            {h:'Integrations', p:'APIs and webhooks for your back office.'},
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
